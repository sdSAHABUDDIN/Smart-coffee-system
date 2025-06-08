// src/components/Section1FlavourDisplay.jsx
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Section1FlavourDisplay = ({
  step,
  selectedCoffee,
  progress,
  polling,
  handleBrew,
  handleCancel,
  handleDone,
}) => {
  const renderContent = () => {
    switch (step) {
      case "Connecting to ESP32":
      case "Brewing":
        return (
          <>
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
          </>
        );
      case "Waiting for cup":
        return (
          <>
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
          </>
        );
      case "Take coffee":
        return (
          <>
            <h2 className="text-3xl font-bold text-[#3e2c23] mb-3">
              Please Take your coffee.
            </h2>
            <p className="text-[#3e2c23] mb-4">{selectedCoffee.description}</p>
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={handleDone}
                className="bg-green-600 text-white px-5 py-2 rounded-full shadow hover:bg-green-500 transition"
              >
                Done
              </button>
            </div>
          </>
        );
      default:
        return (
          <>
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
          </>
        );
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#FFCA99] via-[#f6c389] to-[#FFCA99] rounded-xl shadow-lg p-6 mb-8 flex flex-col lg:flex-row items-center gap-8">
      <div className="w-full lg:w-1/2 h-[350px] rounded-lg overflow-hidden shadow-md">
        {step === "Waiting for cup" ? (
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="coffeePrepare.mp4" />
          </video>
        ) : (
          <img
            src={
              step === "Take coffee"
                ? "coffee3.jpg"
                : selectedCoffee.img
            }
            alt="Daily Flavour"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        {renderContent()}
      </div>
    </section>
  );
};

export default Section1FlavourDisplay;
