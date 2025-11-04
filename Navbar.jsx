import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onChatToggle }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-5 py-3">
        {/* ===== Left Side Brand + Menu Icon ===== */}
        <div className="flex items-center gap-3">
          {/* Animated Menu Icon */}
          <button
            className="text-2xl md:hidden transition-transform duration-300 hover:scale-110"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? "✕" : "☰"}
          </button>

          {/* Brand */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl animate-pulse">💎</span>
            <div>
              <h1 className="font-semibold text-lg text-gray-800 leading-tight">
                Amidip Jewellers
              </h1>
              <p className="text-xs text-gray-500">Varachha Road, Surat</p>
            </div>
          </Link>
        </div>

        {/* ===== Navigation Links ===== */}
        <nav
          className={`flex flex-col md:flex-row md:items-center md:gap-8 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
            open ? "opacity-100 visible" : "opacity-0 invisible md:visible md:opacity-100"
          }`}
        >
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="py-2 px-5 text-gray-700 hover:text-yellow-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/catalog"
            onClick={() => setOpen(false)}
            className="py-2 px-5 text-gray-700 hover:text-yellow-600 font-medium"
          >
            Catalog
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="py-2 px-5 text-gray-700 hover:text-yellow-600 font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="py-2 px-5 text-gray-700 hover:text-yellow-600 font-medium"
          >
            Contact
          </Link>
          <Link
            to="/admin"
            onClick={() => setOpen(false)}
            className="py-2 px-5 text-gray-700 hover:text-yellow-600 font-medium"
          >
            Admin
          </Link>
        </nav>

        {/* ===== Chat Icon ===== */}
        <button
          onClick={onChatToggle}
          className="hidden md:flex items-center gap-2 bg-yellow-500 text-white px-3 py-1 rounded-full hover:bg-yellow-600 transition"
        >
          💬 Chat
        </button>
      </div>
    </header>
  );
        }
