// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "#fff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        padding: "10px 15px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "8px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ lineHeight: "1.2" }}>
        <h2
          style={{
            margin: 0,
            fontSize: "18px",
            fontWeight: "700",
            color: "#222",
          }}
        >
          Amidip Jewellers
        </h2>
        <p style={{ margin: 0, fontSize: "12px", color: "#777" }}>
          Varachha Road, Surat
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "18px",
          fontSize: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/catalog" style={linkStyle}>
          Catalog
        </Link>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
        <Link to="/admin" style={linkStyle}>
          Admin
        </Link>
      </div>
    </nav>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "500",
};

export default Navbar;
