import React, { useState } from "react";
import { shop } from "../constants";
const locationData = {
  Maharashtra: {
    Mumbai: ["Andheri", "Bandra", "Borivali"],
    Pune: ["Shivaji Nagar", "Hinjewadi", "Kothrud"],
  },
  Karnataka: {
    Bengaluru: ["Whitefield", "Indiranagar", "MG Road"],
    Mysuru: ["Vijayanagar", "Jayalakshmipuram", "Lalith Mahal"],
  },
  Gujarat: {
    Ahmedabad: ["Navrangpura", "Maninagar", "Satellite"],
    Surat: ["Adajan", "Varachha", "Vesu"],
  },
};

const Location = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const states = Object.keys(locationData);
  const cities = selectedState ? Object.keys(locationData[selectedState]) : [];
  const locations = selectedCity ? locationData[selectedState][selectedCity] : [];

  return (
    <div className="bg-[#FCF3DE]  min-h-screen p-6 flex flex-col items-center justify-center">
      <div className="bg-[#FFCA99] p-8 rounded-xl shadow-lg w-full max-w-lg space-y-6">
        <h2 className="text-2xl font-bold text-[#3e2c23] text-center">Find a Coffee Spot Near You</h2>

        {/* State */}
        <div>
          <label className="block text-[#3e2c23] font-semibold mb-1">State</label>
          <select
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedCity("");
              setSelectedLocation("");
            }}
          >
            <option value="">Select a state</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* City */}
        {selectedState && (
          <div>
            <label className="block text-[#3e2c23] font-semibold mb-1">City</label>
            <select
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
                setSelectedLocation("");
              }}
            >
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Location */}
        {selectedCity && (
          <div>
            <label className="block text-[#3e2c23] font-semibold mb-1">Location</label>
            <select
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">Select a location</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Output */}
        {selectedState && selectedCity && selectedLocation && (
          <div className="mt-6 text-center text-[#3e2c23] font-semibold">
            ✅ Your Selection: {selectedLocation}, {selectedCity}, {selectedState}
          </div>
        )}
      </div>
      <section className="mt-12">
  <h3 className="text-2xl font-bold text-[#3e2c23] mb-6 text-center">Nearby Coffee Shops</h3>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {/* Shop Card */}
    {shop.map((item)=>(
      <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:scale-105">
      <img
        src={item.img}
        alt="Coffee Shop"
        className="w-full h-48 object-cover"
      />

      <div className="p-4 space-y-3">
        {/* Name & Time Row */}
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-bold text-[#3e2c23]">{item.name}</h4>
          <span className="text-sm text-gray-500">{item.time}</span>
        </div>

        {/* Address Row */}
        <p className="text-gray-700 text-sm">
          {item.Add}
        </p>

        {/* Call & Direction Buttons */}
        <div className="flex justify-between mt-2">
          <button className="flex items-center gap-1 text-sm text-amber-600 hover:text-amber-500 font-semibold">
            📞 Call
          </button>
          <button className="flex items-center gap-1 text-sm text-amber-600 hover:text-amber-500 font-semibold">
            🧭 Get Directions
          </button>
        </div>

        {/* Details Button */}
        <button className="mt-4 w-full bg-amber-600 text-white py-2 rounded-xl font-semibold hover:bg-amber-500 transition">
          Details
        </button>
      </div>
    </div>
    ))}
    
  </div>
</section>

    </div>
  );
};

export default Location;
