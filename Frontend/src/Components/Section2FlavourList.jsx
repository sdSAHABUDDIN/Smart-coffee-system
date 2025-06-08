// src/components/Section2FlavourList.jsx
import React from "react";

const Section2FlavourList = ({ coffeeList, selectedCoffee, setSelectedCoffee }) => {
  return (
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
  );
};

export default Section2FlavourList;
