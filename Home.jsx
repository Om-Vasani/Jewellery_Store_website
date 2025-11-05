import React from "react";
import ProductCard from "./ProductCard";

export default function Home() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-[#fffaf5] to-[#fff2e6] min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl text-center md:text-left space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
            Timeless Craftsmanship. <br />
            Modern Elegance.
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Welcome to <strong>Amidip Jewellers</strong> — where heritage meets innovation. 
            Discover fine jewellery crafted with 22K gold, certified diamonds, 
            and hallmark authenticity that speaks of trust and class.
          </p>
          <a
            href="/catalog"
            className="inline-block mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Explore Collection
          </a>
        </div>

        <div className="mt-10 md:mt-0">
          <ProductCard
            title="Solitaire Diamond Ring"
            tag="Featured"
            desc="22K Gold • GIA-Certified Diamond"
            price="₹85,000"
            emoji="💍"
          />
        </div>
      </div>
    </section>
  );
}
