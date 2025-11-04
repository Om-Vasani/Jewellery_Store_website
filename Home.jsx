import React from "react";
import ProductCard from "./ProductCard";
import Chat from "./Chat";

export default function Home() {
  return (
    <section className="container">
      <div className="hero">
        <div className="hero-left">
          <h1 className="hero-title">Timeless craftsmanship. Modern elegance.</h1>
          <p className="hero-sub">Amidip Jewellers — handcrafted gold and diamond pieces with hallmark authenticity.</p>
        </div>

        <div className="hero-right">
          <ProductCard
            title="Solitaire Diamond Ring"
            tag="Featured"
            desc="22K Gold / GIA-certified"
            price="₹85,000"
            emoji="💍"
          />
        </div>
      </div>

      <Chat />
    </section>
  );
}
