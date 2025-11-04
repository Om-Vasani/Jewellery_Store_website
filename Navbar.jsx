import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiDiamondRing } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          <GiDiamondRing style={{ color: "#1e90ff", fontSize: "22px" }} />
          <div>
            Amidip Jewellers
            <span className="subtitle">Varachha Road, Surat</span>
          </div>
        </Link>

        {/* Menu Button for Mobile */}
        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/catalog" onClick={() => setMenuOpen(false)}>Catalog</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/admin" onClick={() => setMenuOpen(false)}>Admin</Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            background: "#fffaf5",
            padding: "10px 20px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          }}
        >
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link><br />
          <Link to="/catalog" onClick={() => setMenuOpen(false)}>Catalog</Link><br />
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link><br />
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link><br />
          <Link to="/admin" onClick={() => setMenuOpen(false)}>Admin</Link>
        </div>
      )}
    </nav>
  );
                                                       }
