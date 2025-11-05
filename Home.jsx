import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="bg-[#fffaf5] text-center py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Elevate Your Shine with <span className="text-yellow-600">Jewellers Store</span>
        </h1>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Premium gold & diamond jewellery crafted with perfection.  
          Trusted by 5000+ happy customers in Surat.
        </p>
        <Link
          to="/catalog"
          className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition"
        >
          💎 Explore Collection
        </Link>
      </div>
    </section>
  );
}
