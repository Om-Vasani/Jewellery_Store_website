import React from "react";
import ProductCard from "./ProductCard";

export default function Home() {
  return (
    <section className="pt-24 pb-12 px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
          Timeless craftsmanship.
          <br /> Modern elegance.
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Amidip Jewellers — handcrafted gold and diamond pieces with hallmark authenticity.
        </p>
      </div>

      <ProductCard
        title="Solitaire Diamond Ring"
        tag="Featured"
        desc="22K Gold / GIA-certified"
        price="₹85,000"
        emoji="💍"
      />
    </section>
  );
}
