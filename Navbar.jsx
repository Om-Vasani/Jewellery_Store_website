import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaComments } from "react-icons/fa";

export default function Navbar({ onChatToggle }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-sm z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-8 transition-all duration-300">
        {/* Left side menu icon */}
        <button
          className="text-2xl md:hidden hover:scale-110 transition-transform"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Center brand */}
        <div className="flex items-center space-x-2">
          <span className="text-xl">💎</span>
          <Link
            to="/"
            className="text-lg font-semibold text-gray-800 hover:text-yellow-600 transition-colors"
          >
            Amidip Jewellers
          </Link>
        </div>

        {/* Right side chat icon */}
        <button
          onClick={onChatToggle}
          className="hidden md:flex text-xl hover:scale-110 transition-transform text-yellow-600"
        >
          <FaComments />
        </button>
      </div>

      {/* Dropdown menu (Mobile) */}
      <nav
        className={`absolute top-full left-0 w-full bg-white shadow-md transform transition-all duration-500 ease-in-out ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="flex flex-col text-center py-3 space-y-2">
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-yellow-600">
            Home
          </Link>
          <Link to="/catalog" onClick={() => setOpen(false)} className="hover:text-yellow-600">
            Catalog
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className="hover:text-yellow-600">
            About
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-yellow-600">
            Contact
          </Link>
          <Link to="/admin" onClick={() => setOpen(false)} className="hover:text-yellow-600">
            Admin
          </Link>
        </div>
      </nav>
    </header>
  );
            }
