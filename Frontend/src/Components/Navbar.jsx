import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FCF3DE] text-[#3e2c23] shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              className="h-10 w-auto mr-2 rounded-2xl"
              src="/CoffeeLogo.jpg"
              alt="Coffee Logo"
            />
            <img
              className="h-9 w-32 mr-2 rounded-md"
              src="/coffeeName.jpg"
              alt="Coffee Name"
            />
            
          </div>

          {/* Menu items */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-amber-400 transition">Home</a>
            <a href="#" className="hover:text-amber-400 transition">Products</a>
            <a href="#" className="hover:text-amber-400 transition">About</a>
            <a href="#" className="hover:text-amber-400 transition">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6 text-current" /> : <Menu className="h-6 w-6 text-current" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#4b362b] px-4 pb-4">
          <a href="#" className="block py-2 hover:text-amber-300">Home</a>
          <a href="#" className="block py-2 hover:text-amber-300">Products</a>
          <a href="#" className="block py-2 hover:text-amber-300">About</a>
          <a href="#" className="block py-2 hover:text-amber-300">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
