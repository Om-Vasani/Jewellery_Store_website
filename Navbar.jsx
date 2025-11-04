import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <div className="nav-inner">
        <div className="nav-brand">
          <div className="brand-left">
            <span className="diamond">💎</span>
            <div>
              <Link to="/" className="brand-title">Amidip Jewellers</Link>
              <div className="brand-sub">Varachha Road, Surat</div>
            </div>
          </div>
        </div>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/catalog" onClick={() => setOpen(false)}>Catalog</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/admin" onClick={() => setOpen(false)}>Admin</Link>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
          }
