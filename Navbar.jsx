import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          {/* Left: Animated Menu Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Brand */}
          <Link
            to="/"
            className="text-xl font-bold text-gray-800 tracking-tight flex items-center gap-1"
          >
            💎 Amidip Jewellers
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-yellow-600">Home</Link>
            <Link to="/catalog" className="hover:text-yellow-600">Catalog</Link>
            <Link to="/about" className="hover:text-yellow-600">About</Link>
            <Link to="/contact" className="hover:text-yellow-600">Contact</Link>
            <Link to="/admin" className="hover:text-yellow-600">Admin</Link>
          </nav>

          {/* Chat Icon */}
          <button
            onClick={() => setChatOpen(!chatOpen)}
            className="text-gray-700 hover:text-yellow-600 transition"
          >
            <MessageCircle size={26} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 shadow-md">
            <Link
              to="/"
              className="block px-4 py-3 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/catalog"
              className="block px-4 py-3 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Catalog
            </Link>
            <Link
              to="/about"
              className="block px-4 py-3 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-3 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/admin"
              className="block px-4 py-3 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Admin
            </Link>
          </nav>
        )}
      </header>

      {/* Chat Window */}
      {chatOpen && (
        <div className="fixed bottom-4 right-4 z-50 animate-bounce">
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 w-72">
            <p className="font-semibold mb-2 text-gray-800">💬 Live Chat</p>
            <textarea
              className="w-full border rounded-md p-2 text-sm focus:outline-none"
              placeholder="Type your message..."
            ></textarea>
            <button className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1.5 rounded-md w-full">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
            }
