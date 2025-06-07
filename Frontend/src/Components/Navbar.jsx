import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleUserMenu = () => setShowUserMenu(!showUserMenu);

  return (
    <nav className="bg-[#FCF3DE] text-[#3e2c23] shadow-md sticky top-0 z-50 rounded-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
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
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/Menu" className="hover:text-amber-400 transition font-semibold">ORDER NOW</Link>
            <Link to="/Location" className="hover:text-amber-400 transition font-semibold">FIND US</Link>
            <Link to="/Machine" className="hover:text-amber-400 transition font-semibold">OUR PRODUCTS</Link>
            <Link to="/AboutUs" className="hover:text-amber-400 transition font-semibold">About Us</Link>
            <Link to="/WhatsNew" className="hover:text-amber-400 transition font-semibold">WHAT'S NEW</Link>

            {/* User Menu */}
            <div className="relative">
              <button onClick={toggleUserMenu} className="focus:outline-none">
                <User className="w-6 h-6 hover:text-amber-500 transition" />
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-[#3e2c23] rounded-xl shadow-lg z-50">
                  <Link to="/Login" className="block px-4 py-2 hover:bg-amber-100">Login / Signup</Link>
                  <Link to="/profile" className="block px-4 py-2 hover:bg-amber-100">My Profile</Link>
                  <Link to="/wishlist" className="block px-4 py-2 hover:bg-amber-100">Wishlist</Link>
                  <Link to="/notifications" className="block px-4 py-2 hover:bg-amber-100">Notifications</Link>
                  <Link to="/orders" className="block px-4 py-2 hover:bg-amber-100">Orders</Link>
                  <Link to="/coupons" className="block px-4 py-2 hover:bg-amber-100">Coupons</Link>
                  <button className="w-full text-left px-4 py-2 hover:bg-amber-100">Logout</button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleUserMenu}>
              <User className="w-6 h-6 text-[#3e2c23]" />
            </button>
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <X className="h-6 w-6 text-current" /> : <Menu className="h-6 w-6 text-current" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4 text-white rounded-b-md">
          <Link to="/" className="block py-2 hover:text-amber-300">Home</Link>
          <Link to="/Menu" className="block py-2 hover:text-amber-300">Order Now</Link>
          <Link to="/Location" className="block py-2 hover:text-amber-300">Find Us</Link>
          <Link to="/Machine" className="block py-2 hover:text-amber-300">Our Products</Link>
          <Link to="/AboutUs" className="block py-2 hover:text-amber-300">About Us</Link>
          <Link to="/WhatsNew" className="block py-2 hover:text-amber-300">What's New</Link>
          <Link to="/login" className="block py-2 hover:text-amber-300">Login / Signup</Link>
          <Link to="/profile" className="block py-2 hover:text-amber-300">My Profile</Link>
          <Link to="/wishlist" className="block py-2 hover:text-amber-300">Wishlist</Link>
          <Link to="/notifications" className="block py-2 hover:text-amber-300">Notifications</Link>
          <Link to="/orders" className="block py-2 hover:text-amber-300">Orders</Link>
          <Link to="/coupons" className="block py-2 hover:text-amber-300">Coupons</Link>
          <button className="w-full text-left py-2 hover:text-amber-300">Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
