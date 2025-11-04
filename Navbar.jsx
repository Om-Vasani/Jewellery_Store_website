// Navbar.jsx (final clean version)
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "#fff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        padding: "12px 18px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div>
        <h2 style={{ margin: 0, fontSize: "18px", fontWeight: "700" }}>
          Amidip Jewellers
        </h2>
        <p style={{ margin: 0, fontSize: "12px", color: "#777" }}>
          Varachha Road, Surat
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5px",
        }}
      >
        {["Home", "Catalog", "About", "Contact", "Admin"].map((item, i) => (
          <Link
            key={i}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            style={{
              textDecoration: "none",
              color: "#333",
              fontWeight: "500",
            }}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
