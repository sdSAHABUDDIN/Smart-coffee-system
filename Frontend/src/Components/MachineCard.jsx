import React from "react";
import { machine } from "../constants";
import Thumbnails from "./Thumbnails";

const MachineCard = () => {
  return (
    <div className="bg-[#FCF3DE] rounded-xl p-6 shadow-xl flex flex-col gap-10">
  {machine.map((item) => (
    <div
      key={item.id}
      className="flex flex-col lg:flex-row gap-8 border-b border-[#e2cdbb] pb-8"
    >
      {/* Left Column: Image Thumbnails and Main Image */}
      <div className="flex flex-col lg:flex-row gap-4 lg:w-1/2">
        {/* Thumbnails (you can update <Thumbnails /> with props) */}
        <div className="flex flex-row lg:flex-col gap-2">
          {/* {item.thumbnails.map((thumb, index) => (
            <img
              key={index}
              src={thumb}
              alt={`Thumb ${index}`}
              className="w-16 h-16 object-cover rounded-lg border hover:scale-105 transition"
            />
          ))} */}
          <Thumbnails />
        </div>

        {/* Main Image */}
        <div className="flex-1">
          <img
            src={item.img}
            alt="Main Display"
            className="w-full h-auto md:h-[550px] lg:h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Right Column: Info + Actions */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#3e2c23] mb-2">
            {item.name}
          </h2>

          {/* MRP and Discount */}
          <div className="mb-3 text-lg text-[#3e2c23]">
            <span className="line-through text-gray-500 mr-2">
              ₹{item.OriginalPrice}
            </span>
            <span className="text-red-600 font-semibold">
              ₹{item.DiscountPrice}
            </span>
          </div>

          {/* Features */}
          <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mb-5">
            <li>Touch screen interface</li>
            <li>Wi-Fi enabled control</li>
            <li>Auto clean system</li>
            <li>Grind-to-brew functionality</li>
            <li>Custom flavor memory</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">
          <button className="bg-amber-600 text-white px-6 py-2 rounded-xl hover:bg-amber-500 transition">
            Add to Cart
          </button>
          <button className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-500 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

  );
};

export default MachineCard;
