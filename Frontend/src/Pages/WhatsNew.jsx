import React from "react";
import { Whatsnew } from "../constants";


const WhatsNew = () => {
  return (
    <div className="bg-[#FCF3DE] min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-[#3e2c23]  mb-10">
        What’s New at <span className="text-amber-300">CAFFEiQ</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Whatsnew.map((item) => (
          <div
            key={item.id}
            className="bg-[#FFCA99] rounded-2xl shadow-xl overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-[#3e2c23] mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-700 mb-3">{item.date}</p>
              <p className="text-[#3e2c23] mb-4">{item.desc}</p>
              <button className="bg-[#8B4513] text-white px-4 py-2 rounded-xl hover:bg-[#6a3410] transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsNew;
