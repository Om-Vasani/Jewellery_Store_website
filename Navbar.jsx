// components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-gray-900">
            <Link href="/">Amidip Jewellers</Link>
            <p className="text-xs text-gray-500 -mt-1">
              Varachha Road, Surat
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <Link href="/" className="hover:text-yellow-600">Home</Link>
            <Link href="/catalog" className="hover:text-yellow-600">Catalog</Link>
            <Link href="/about" className="hover:text-yellow-600">About</Link>
            <Link href="/contact" className="hover:text-yellow-600">Contact</Link>
            <Link href="/admin" className="hover:text-yellow-600">Admin</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <div className="flex flex-col space-y-2 px-6 py-4 text-gray-800">
            <Link href="/" onClick={toggleMenu} className="hover:text-yellow-600">Home</Link>
            <Link href="/catalog" onClick={toggleMenu} className="hover:text-yellow-600">Catalog</Link>
            <Link href="/about" onClick={toggleMenu} className="hover:text-yellow-600">About</Link>
            <Link href="/contact" onClick={toggleMenu} className="hover:text-yellow-600">Contact</Link>
            <Link href="/admin" onClick={toggleMenu} className="hover:text-yellow-600">Admin</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
