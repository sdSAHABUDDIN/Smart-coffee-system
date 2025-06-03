// src/pages/Prepare.jsx
import React, { useEffect, useState } from "react";
import { coffeeList } from "../constants";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Prepare = () => {
  const [brewing, setBrewing] = useState(false);
  const [progress, setProgess] = useState(0);
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    let timer;
    if (brewing && progress < 100) {
      timer = setInterval(() => {
        setProgess((prev) => {
          const next = prev + 1;
          if (next >= 100) {
            clearInterval(timer);
            setCompleted(true);
            return 100;
          }
          return next;
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [brewing, progress]);
  const handleBrew = () => {
    setBrewing(true);
    setProgess(0);
    setCompleted(false);
  };
  const handleCancel = () => {
    setBrewing(false);
    setProgess(0);
    setCompleted(false);
  };

  return (
    <div className="bg-[#FCF3DE]  min-h-screen p-6">
      {/* Section 1: Daily Chosen Flavour */}
      <section className="bg-gradient-to-r from-[#FFCA99] via-[#f6c389] to-[#FFCA99] rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Media Area */}
          <div className="w-full lg:w-1/2 h-[350px] rounded-lg overflow-hidden shadow-md">
            {!brewing ? (
              <img
                src="coffee2.jpg"
                alt="Daily Flavour"
                className="w-full h-full object-cover"
              />
            ) : completed ? (
              <img
                src="coffee3.jpg"
                alt="Brew Complete"
                className="w-full h-full object-cover"
              />
            ) : (
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="coffeePrepare.mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          {/* Text + Buttons */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {!brewing ? (
              <>
                <h2 className="text-3xl font-bold text-[#3e2c23] mb-3">
                  Today's Pick: Latte
                </h2>
                <p className="text-[#3e2c23] mb-4">
                  Start your day with the smooth richness of freshly brewed
                  Latte.
                </p>
                <button
                  onClick={handleBrew}
                  className="bg-amber-600 text-white px-6 py-3 rounded-xl hover:bg-amber-500 transition"
                >
                  Brew This Flavour
                </button>
              </>
            ) : (
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
                <div className="flex gap-4">
                  {completed ? (
                    <button
                      className="bg-green-600 text-white px-5 py-2 rounded-full shadow hover:bg-green-500 transition"
                      disabled
                    >
                      Done
                    </button>
                  ) : (
                    <button
                      className="bg-gray-400 text-white px-5 py-2 rounded-full shadow cursor-not-allowed"
                      disabled
                    >
                      Processing...
                    </button>
                  )}
                  <button
                    onClick={handleCancel}
                    className={`px-5 py-2 rounded-full shadow transition ${
                      completed
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : "bg-red-600 text-white hover:bg-red-500"
                    }`}
                    disabled={completed}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 2: Flavours for Everyone */}
      <section className="bg-gradient-to-r from-[#FFCA99] via-[#f6c389] to-[#FFCA99] rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-[#3e2c23] text-center mb-4">
          Flavours for Everyone
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {coffeeList.map((name) => (
            <div
              key={name.id}
              className="bg-white rounded-xl p-4 shadow text-center"
            >
              <img
                src={name.img}
                alt={name.name}
                className="w-full h-[200px] md:h-[300px] object-cover rounded-md mb-2"
              />
              <h3 className="text-[#3e2c23] font-semibold">{name.name}</h3>
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
