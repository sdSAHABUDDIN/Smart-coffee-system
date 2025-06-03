import React, { useState } from "react";
import { coffeeList } from "../constants"; 

const Menu = () => {
  const [search, setSearch] = useState("");

  const filteredCoffees = coffeeList.filter((coffee) =>
    coffee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#FCF3DE]  min-h-screen p-4">
      <div className="bg-[#FFCA99] rounded-xl shadow-lg p-6 max-w-9xl mx-auto">
        {/* Section 1: Header + Search */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#3e2c23] mb-2">
            Explore Our Menu
          </h1>
          <p className="text-lg text-[#3e2c23] mb-4">
            Discover your perfect brew from our handcrafted selections.
          </p>
          <input
            type="text"
            placeholder="Search for a coffee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Section 2: Coffee Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {filteredCoffees.length > 0 ? (
            filteredCoffees.map((coffee) => (
              <div
                key={coffee.id}
                className="w-[300px] h-[260px] bg-white rounded-xl shadow-md p-4 text-center cursor-pointer transition-transform transform hover:scale-105"
              >
                <img
                  src={coffee.img}
                  alt={coffee.name}
                  className="w-full h-[200px] object-cover rounded-md mb-2"
                />
                <h3 className="text-[#3e2c23] font-bold text-md mt-3">
                  {coffee.name}
                </h3>
              </div>
            ))
          ) : (
            <p className="text-[#3e2c23]">No results found ☕</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
