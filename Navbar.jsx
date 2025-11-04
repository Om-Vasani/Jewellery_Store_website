// components/Navbar.jsx
"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ===== Logo Section ===== */}
          <div className="flex flex-col leading-tight">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Amidip Jewellers
            </Link>
            <span className="text-xs text-gray-500 -mt-1">
              Varachha Road, Surat
            </span>
          </div>

          {/* ===== Desktop Menu ===== */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <Link href="/" className="hover:text-yellow-600 transition">Home</Link>
            <Link href="/catalog" className="hover:text-yellow-600 transition">Catalog</Link>
            <Link href="/about" className="hover:text-yellow-600 transition">About</Link>
            <Link href="/contact" className="hover:text-yellow-600 transition">Contact</Link>
            <Link href="/admin" className="hover:text-yellow-600 transition">Admin</Link>
          </div>

          {/* ===== Mobile Menu Button ===== */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* ===== Mobile Dropdown ===== */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col space-y-3 px-6 py-4 text-gray-800 font-medium">
            <Link href="/" onClick={toggleMenu} className="hover:text-yellow-600 transition">Home</Link>
            <Link href="/catalog" onClick={toggleMenu} className="hover:text-yellow-600 transition">Catalog</Link>
            <Link href="/about" onClick={toggleMenu} className="hover:text-yellow-600 transition">About</Link>
            <Link href="/contact" onClick={toggleMenu} className="hover:text-yellow-600 transition">Contact</Link>
            <Link href="/admin" onClick={toggleMenu} className="hover:text-yellow-600 transition">Admin</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
