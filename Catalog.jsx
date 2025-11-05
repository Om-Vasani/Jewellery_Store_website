import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, title: "Solitaire Diamond Ring", tag: "Featured", desc: "22K Gold • GIA Certified", price: "₹85,000", emoji: "💍" },
  { id: 2, title: "Royal Gold Necklace", tag: "Bestseller", desc: "Traditional 22K Gold", price: "₹1,25,000", emoji: "📿" },
  { id: 3, title: "Elegant Pearl Earrings", tag: "New Arrival", desc: "18K Gold • Freshwater Pearls", price: "₹28,500", emoji: "✨" },
  { id: 4, title: "Men’s Gold Bracelet", tag: "Luxury", desc: "22K Solid Gold", price: "₹65,000", emoji: "🔗" },
];

export default function Catalog() {
  return (
    <section className="py-24 bg-[#fffaf5]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Exclusive Collection
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
