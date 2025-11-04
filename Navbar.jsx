import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiDiamondRing } from "react-icons/gi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#f9e4b7] to-[#f8d17a] shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-black">
          <GiDiamondRing className="text-blue-500 text-2xl" />
          <div>
            Amidip Jewellers
            <p className="text-xs text-gray-700 -mt-1">Varachha Road, Surat</p>
          </div>
        </Link>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-black font-medium">
          <li><Link to="/" className="hover:text-yellow-700">Home</Link></li>
          <li><Link to="/catalog" className="hover:text-yellow-700">Catalog</Link></li>
          <li><Link to="/about" className="hover:text-yellow-700">About</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-700">Contact</Link></li>
          <li><Link to="/admin" className="hover:text-yellow-700">Admin</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col bg-[#fffaf5] shadow-lg p-4 space-y-3 text-center text-black font-medium">
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/catalog" onClick={() => setOpen(false)}>Catalog</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          <li><Link to="/admin" onClick={() => setOpen(false)}>Admin</Link></li>
        </ul>
      )}
    </nav>
  );
}
