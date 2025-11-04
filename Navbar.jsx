import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiMessageCircle } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="text-lg font-semibold flex items-center gap-1">
          💎 <span className="text-gray-800">Amidip Jewellers</span>
        </Link>

        {/* Menu icon for mobile */}
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/admin">Admin</Link>
        </div>

        {/* Chat Icon */}
        <Link
          to="/chat"
          className="hidden md:block bg-amber-100 p-2 rounded-full hover:bg-amber-200 transition"
        >
          <FiMessageCircle size={20} />
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-white shadow-inner">
          <Link onClick={() => setMenuOpen(false)} className="p-3 border-b" to="/">
            Home
          </Link>
          <Link onClick={() => setMenuOpen(false)} className="p-3 border-b" to="/catalog">
            Catalog
          </Link>
          <Link onClick={() => setMenuOpen(false)} className="p-3 border-b" to="/about">
            About
          </Link>
          <Link onClick={() => setMenuOpen(false)} className="p-3 border-b" to="/contact">
            Contact
          </Link>
          <Link onClick={() => setMenuOpen(false)} className="p-3 border-b" to="/admin">
            Admin
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            className="p-3 flex items-center gap-2"
            to="/chat"
          >
            <FiMessageCircle /> Chat
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
