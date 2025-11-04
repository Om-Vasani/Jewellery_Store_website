import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Chat from "./Chat";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#fffaf5] to-[#fff2e6] flex flex-col">
      <Navbar onChatToggle={() => setChatOpen(!chatOpen)} />

      <div className="container mx-auto px-6 md:px-12 pt-24 pb-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left side hero text */}
        <div className="max-w-xl text-center md:text-left space-y-4 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-800">
            Timeless craftsmanship. <br />
            Modern elegance.
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Amidip Jewellers — handcrafted gold and diamond pieces with hallmark authenticity.
          </p>
          <button className="bg-yellow-500 text-white px-5 py-2 rounded-full shadow hover:bg-yellow-600 transition-all">
            Explore Collection →
          </button>
        </div>

        {/* Right side product card */}
        <div className="mt-8 md:mt-0 animate-slide-up">
          <ProductCard
            title="Solitaire Diamond Ring"
            tag="Featured"
            desc="22K Gold / GIA-certified"
            price="₹85,000"
            emoji="💍"
          />
        </div>
      </div>

      {/* Chat assistant popup */}
      {chatOpen && (
        <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
          <Chat />
        </div>
      )}
    </section>
  );
            }
