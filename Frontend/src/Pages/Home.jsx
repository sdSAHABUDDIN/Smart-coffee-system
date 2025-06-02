import React from "react";
import Navbar from "../Components/Navbar.jsx";
// import coffeeList from "../constants/coffeeList.js";
import { coffeeList, facility } from "../constants/index.js";
const Home = () => {
  return (
    <div className="bg-[FDF3DE] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className=" bg-[#FCF3DE] flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#3e2c23] mb-6 leading-tight">
            Start Your Day the Smart Way{" "}
            <span className="text-amber-600">"CAFFEiQ"</span>
          </h1>
          <p className="text-gray-900 font-semibold text-lg mb-1">
            Brewed to Perfection, Just the Way You Like It
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Experience a smarter, faster, and more personalized coffee routine
            with our automated coffee solution.
          </p>

          <a
            href="#products"
            className="bg-amber-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-amber-500 transition"
          >
            Prepare Your Daily Brew
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

      {/* Coffee Types Scroll Section */}
      <section className="overflow-hidden py-12">
        <h2 className="text-2xl font-bold text-center text-[#3e2c23] mb-6">
          Explore Our Coffee Varieties
        </h2>

        <div className="relative w-full">
          <div className="animate-scroll flex gap-6 w-max px-6">
            {coffeeList.map((coffee) => (
              <div
                key={coffee.id}
                className="inline-block w-[200px] h-[250px] bg-white rounded-xl shadow-md p-4 text-center cursor-pointer"
              >
                <img
                  src={coffee.img}
                  alt={coffee.name}
                  className="w-full h-[150px] object-cover rounded-md mb-2"
                />
                <h3 className="text-[#3e2c23] font-bold text-md m-6">
                  {coffee.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#FCF3DE] py-16" id="products">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#3e2c23] mb-12">
            Why Choose  <span className="text-amber-600">CAFFEiQ</span> ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {facility.map((fac)=>(
            <div key={fac.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
              <img
                src={fac.img}
                alt="Auto Brew"
                className="h-15 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#3e2c23]">
                {fac.title}
              </h3>
              <p className="text-gray-600 mt-2">
                {fac.des}
              </p>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-amber-600 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Brewing Machine?</h2>
        <p className="text-lg mb-6">
          Find your perfect coffee companion and start brewing joy at home
          today.
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
