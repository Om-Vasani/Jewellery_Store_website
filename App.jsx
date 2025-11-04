// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Catalog from "./Catalog";
import Contact from "./Contact";
import Admin from "./Admin";
import Chat from "./Chat";

function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#fffaf5] to-[#fff2e6]">
        {/* ✅ Navbar Global */}
        <Navbar />

        {/* ✅ Main Content Area */}
        <main className="flex-grow px-4 md:px-8 pt-20 pb-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        {/* ✅ Footer */}
        <Footer />

        {/* ✅ Floating Chat Icon */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="fixed bottom-6 right-6 bg-amber-500 hover:bg-amber-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          💬
        </button>

        {/* ✅ Chat Window */}
        {chatOpen && (
          <div className="fixed bottom-20 right-4 w-80 md:w-96 bg-white shadow-2xl rounded-2xl border border-amber-100 animate-slide-up z-50">
            <Chat />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
