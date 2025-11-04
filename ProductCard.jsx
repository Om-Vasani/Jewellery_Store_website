import React from "react";

export default function ProductCard({ title, tag, desc, price, emoji }) {
  return (
    <div className="product-card">
      <div className="product-top">
        <div className="product-meta">
          <div className="product-tag">{tag}</div>
          <div className="product-title">{title}</div>
        </div>
        <div className="product-emoji">{emoji}</div>
      </div>
      <div className="product-bottom">
        <div className="product-desc">{desc}</div>
        <div className="product-price">{price}</div>
      </div>
    </div>
  );
}
