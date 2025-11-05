import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiDiamondRing } from "react-icons/gi";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#fbe9d7] to-[#fff3e6] shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg text-[#3a2a1a]">
          <GiDiamondRing className="text-2xl text-[#c79a4b]" />
          Amidip Jewellers
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#3a2a1a]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <NavLink to="/" label="Home" />
          <NavLink to="/catalog" label="Catalog" />
          <NavLink to="/about" label="About" />
          <NavLink to="/contact" label="Contact" />
          <NavLink to="/admin" label="Admin" />
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#fff9f3] shadow-inner px-6 pb-4">
          <div className="flex flex-col gap-3 text-[#3a2a1a] font-medium">
            <NavLink to="/" label="Home" onClick={() => setOpen(false)} />
            <NavLink to="/catalog" label="Catalog" onClick={() => setOpen(false)} />
            <NavLink to="/about" label="About" onClick={() => setOpen(false)} />
            <NavLink to="/contact" label="Contact" onClick={() => setOpen(false)} />
            <NavLink to="/admin" label="Admin" onClick={() => setOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="hover:text-[#c79a4b] transition-colors duration-200"
    >
      {label}
    </Link>
  );
            }
