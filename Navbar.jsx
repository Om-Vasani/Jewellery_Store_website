import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 w-full border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex flex-col leading-tight">
            <Link href="/" className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
              Amidip Jewellers
            </Link>
            <span className="text-[11px] sm:text-xs text-gray-500">Varachha Road, Surat</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10 font-medium text-gray-700">
            <Link href="/" className="hover:text-yellow-600 transition">Home</Link>
            <Link href="/catalog" className="hover:text-yellow-600 transition">Catalog</Link>
            <Link href="/about" className="hover:text-yellow-600 transition">About</Link>
            <Link href="/contact" className="hover:text-yellow-600 transition">Contact</Link>
            <Link href="/admin" className="hover:text-yellow-600 transition">Admin</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 hover:text-yellow-600 transition"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col bg-white shadow-inner border-t text-gray-800 font-medium px-6 py-4 space-y-3">
          <Link href="/" onClick={toggleMenu} className="hover:text-yellow-600">Home</Link>
          <Link href="/catalog" onClick={toggleMenu} className="hover:text-yellow-600">Catalog</Link>
          <Link href="/about" onClick={toggleMenu} className="hover:text-yellow-600">About</Link>
          <Link href="/contact" onClick={toggleMenu} className="hover:text-yellow-600">Contact</Link>
          <Link href="/admin" onClick={toggleMenu} className="hover:text-yellow-600">Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;            >
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
