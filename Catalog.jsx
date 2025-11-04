import React from "react";
import ProductCard from "./ProductCard";

const sample = [
  { id:1, title:"Solitaire Diamond Ring", tag:"Featured", desc:"22K Gold / GIA-certified", price:"₹85,000", emoji:"💍" },
  { id:2, title:"Classic Gold Necklace", tag:"Popular", desc:"22K Gold", price:"₹55,000", emoji:"📿" },
  { id:3, title:"Elegant Earrings", tag:"New", desc:"18K Gold", price:"₹12,500", emoji:"✨" },
  { id:4, title:"Men's Signet Ring", tag:"Classic", desc:"Gold Alloy", price:"₹9,800", emoji:"🔰" },
];

export default function Catalog(){
  return (
    <section className="container">
      <h2 className="section-title">Catalog</h2>
      <div className="grid">
        {sample.map(p => <ProductCard key={p.id} {...p} />)}
      </div>
    </section>
  );
}
