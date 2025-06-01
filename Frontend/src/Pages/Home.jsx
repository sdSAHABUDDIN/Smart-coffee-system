import React from "react";
import Navbar from "../Components/Navbar.jsx";

const Home = () => {
  return (
    <div className="bg-[FDF3DE] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className=" bg-[#FCF3DE] flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#3e2c23] mb-6 leading-tight">
            Brew the Perfect Cup <br />
            with <span className="text-amber-600">BeanBrew</span>
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Discover the finest automatic coffee machines that make your mornings better. 
            Whether it’s espresso or cappuccino, we’ve got your brew.
          </p>
          <a
            href="#products"
            className="bg-amber-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-amber-500 transition"
          >
            Explore Products
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            src="/coffee1.png"
            alt="Coffee Machine"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#FCF3DE] py-16" id="products">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#3e2c23] mb-12">
            Why Choose BeanBrew?
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
              <img
                src="/icons/auto-brew.svg"
                alt="Auto Brew"
                className="h-12 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#3e2c23]">Automatic Brewing</h3>
              <p className="text-gray-600 mt-2">
                Let the machine do the work — perfect brews every time with one touch.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
              <img
                src="/icons/temperature.svg"
                alt="Perfect Temp"
                className="h-12 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#3e2c23]">Perfect Temperature</h3>
              <p className="text-gray-600 mt-2">
                Intelligent heating system to ensure every cup is just right.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
              <img
                src="/icons/cleaning.svg"
                alt="Easy Cleaning"
                className="h-12 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#3e2c23]">Easy Cleaning</h3>
              <p className="text-gray-600 mt-2">
                Built-in cleaning system that keeps your machine fresh and ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-amber-600 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Brew?</h2>
        <p className="text-lg mb-6">
          Find your perfect coffee companion and start brewing joy at home today.
        </p>
        <a
          href="#"
          className="bg-white text-amber-600 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition"
        >
          Shop Now
        </a>
      </section>
    </div>
  );
};

export default Home;
