import React, { useState } from "react";
import "./styles.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">💎 Amidip Jewellers</div>
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>
      <div className={`nav-links ${open ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#catalog">Catalog</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#admin">Admin</a>
      </div>
    </nav>
  );
};

export default Navbar;              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-yellow-600 font-medium transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          Home
        </Link>
        <Link
          to="/shop"
          onClick={() => setIsOpen(false)}
          className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          Shop
        </Link>
        <Link
          to="/about"
          onClick={() => setIsOpen(false)}
          className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          About
        </Link>
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
