// src/components/Section3CustomizeForm.jsx
import React from "react";

const Section3CustomizeForm = () => {
  return (
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
  );
};

export default Section3CustomizeForm;
