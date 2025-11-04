import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full top-0 left-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight"
          >
            Amidip Jewellers
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-yellow-600 font-medium transition"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-gray-700 hover:text-yellow-600 font-medium transition"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-yellow-600 font-medium transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-yellow-600 font-medium transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          Home
        </Link>
        <Link
          to="/shop"
          onClick={() => setIsOpen(false)}
          className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          Shop
        </Link>
        <Link
          to="/about"
          onClick={() => setIsOpen(false)}
          className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          About
        </Link>
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
