import React from "react";
import ProductCard from "./ProductCard";

export default function Home() {
  return (
    <section className="pt-24 pb-10 bg-gradient-to-b from-[#fffaf5] to-[#fff2e6] min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Timeless craftsmanship.
            <br /> Modern elegance.
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Amidip Jewellers — handcrafted gold and diamond pieces with hallmark authenticity.
          </p>
        </div>

        <div className="mt-8 md:mt-0">
          <ProductCard
            title="Solitaire Diamond Ring"
            tag="Featured"
            desc="22K Gold / GIA-certified"
            price="₹85,000"
            emoji="💍"
          />
        </div>
      </div>
    </section>
  );
}
