// src/pages/Prepare.jsx
import React, { useEffect, useState } from "react";
import { coffeeList } from "../constants";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Prepare = () => {
  const [step, setStep] = useState("Idle");
  const [polling, setPolling] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const [progress, setProgess] = useState(0);
  const [selectedCoffee, setSelectedCoffee] = useState({
    name: "Latte",
    img: "coffee2.jpg",
    description: "Start your day with the smooth richness of freshly brewed Latte.",
  });

  useEffect(() => {
    let pollInterval;
    if (polling) {
      pollInterval = setInterval(async () => {
        try {
          const res = await axios.get("http://localhost:3000/api/brew/status");
          setStep(res.data.status);
        } catch (error) {
          console.error("Error polling status:", error);
        }
      }, 1000);
    }
    return () => clearInterval(pollInterval);
  }, [polling]);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleBrew = async () => {
    setPolling(true);
    setCancelled(false);

    const safePost = async (stepName) => {
      if (cancelled) return;
      await axios.post("/api/brew/step", { step: stepName });
    };

    await safePost("Connecting to ESP32");
    await delay(5000);
    if (cancelled) return;

    await safePost("Brewing");
    await delay(5000);
    if (cancelled) return;

    await safePost("Waiting for cup");
    setProgess(0);
    let progInterval = setInterval(() => {
      setProgess((prev) => {
        const next = prev + 5;
        if (next >= 100) {
          clearInterval(progInterval);
        }
        return next;
      });
    }, 250);
    await delay(5000);
    if (cancelled) return;

    await safePost("Take coffee");
  };

  const handleDone = async () => {
    await axios.post("/api/brew/step", { step: "Idle" });
    setPolling(false);
    setProgess(0);
    setStep("Idle");
  };

  const handleCancel = async () => {
    setCancelled(true);
    await axios.post("/api/brew/step", { step: "Idle" });
    setPolling(false);
    setProgess(0);
    setStep("Idle");
  };

  const renderContent = () => {
    switch (step) {
      case "Connecting to ESP32":
      case "Brewing":
        return (
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 h-[350px] rounded-lg overflow-hidden shadow-md">
              <img
                src={selectedCoffee.img}
                alt="Daily Flavour"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-[#3e2c23] mb-3">
                Today's Pick: {selectedCoffee.name}
              </h2>
              <p className="text-[#3e2c23] mb-4">{selectedCoffee.description}</p>
              <div className="flex flex-col items-center gap-4">
                <div className="flex gap-4">
                  <button
                    className="bg-gray-400 text-white px-5 py-2 rounded-full shadow cursor-not-allowed"
                    disabled
                  >
                    {step}...
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-5 py-2 rounded-full shadow transition bg-red-600 text-white hover:bg-red-500"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case "Waiting for cup":
        return (
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 h-[350px] rounded-lg overflow-hidden shadow-md">
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="coffeePrepare.mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-[#3e2c23] mb-3">
                Wait for your cup.
              </h2>
              <p className="text-[#3e2c23] mb-4">{selectedCoffee.description}</p>
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24">
                  <CircularProgressbar
                    value={progress}
                    text={`${progress}%`}
                    styles={buildStyles({
                      textColor: "#3e2c23",
                      pathColor: "#D69456",
                      trailColor: "#fff5eb",
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case "Take coffee":
        return (
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 h-[350px] rounded-lg overflow-hidden shadow-md">
              <img
                src="coffee3.jpg"
                alt="Daily Flavour"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-[#3e2c23] mb-3">
                Please Take your coffee.
              </h2>
              <p className="text-[#3e2c23] mb-4">{selectedCoffee.description}</p>
              <div className="flex flex-col items-center gap-4">
                <div className="flex gap-4">
                  <button
                    onClick={handleDone}
                    className="bg-green-600 text-white px-5 py-2 rounded-full shadow hover:bg-green-500 transition"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 h-[350px] rounded-lg overflow-hidden shadow-md">
              <img
                src={selectedCoffee.img}
                alt="Daily Flavour"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-[#3e2c23] mb-3">
                Today's Pick: {selectedCoffee.name}
              </h2>
              <p className="text-[#3e2c23] mb-4">{selectedCoffee.description}</p>
              <button
                onClick={handleBrew}
                className="bg-amber-600 text-white px-6 py-3 rounded-xl hover:bg-amber-500 transition"
                disabled={polling}
              >
                {polling ? "Brewing..." : "Brew This Flavour"}
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-[#FCF3DE] min-h-screen p-6">
      {/* Section 1: Daily Chosen Flavour */}
      <section className="bg-gradient-to-r from-[#FFCA99] via-[#f6c389] to-[#FFCA99] rounded-xl shadow-lg p-6 mb-8">
        {renderContent()}
      </section>

      {/* Section 2: Flavours for Everyone */}
      <section className="bg-gradient-to-r from-[#FFCA99] via-[#f6c389] to-[#FFCA99] rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-[#3e2c23] text-center mb-4">
          Flavours for Everyone
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {coffeeList.map((coffee) => (
            <div
              key={coffee.id}
              onClick={() =>
                setSelectedCoffee({
                  name: coffee.name,
                  img: coffee.img,
                  description: coffee.des,
                })
              }
              className={`bg-white rounded-xl p-4 shadow text-center cursor-pointer transition ${
                selectedCoffee.name === coffee.name
                  ? "ring-4 ring-amber-600 shadow-lg"
                  : "hover:shadow-lg"
              }`}
            >
              <img
                src={coffee.img}
                alt={coffee.name}
                className="w-full h-[200px] md:h-[300px] object-cover rounded-md mb-2"
              />
              <h3 className="text-[#3e2c23] font-semibold">{coffee.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Customize Your Flavour */}
      <section className="bg-[#fbe4c1] rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-[#3e2c23] text-center mb-4">
          Customize Your Flavour
        </h2>
        <div className="max-w-lg mx-auto space-y-4">
          {[
            { label: "Milk", id: "milk" },
            { label: "Sugar", id: "sugar" },
            { label: "Espresso Shot", id: "espresso" },
          ].map((item) => (
            <div key={item.id}>
              <label
                htmlFor={item.id}
                className="block text-[#3e2c23] font-medium mb-1"
              >
                {item.label}
              </label>
              <input
                type="range"
                id={item.id}
                min="0"
                max="100"
                className="w-full accent-amber-600"
              />
            </div>
          ))}
          <button className="mt-4 w-full bg-amber-600 text-white py-2 rounded-xl hover:bg-amber-500 transition">
            Brew My Custom Coffee
          </button>
        </div>
      </section>
    </div>
  );
};

export default Prepare;
