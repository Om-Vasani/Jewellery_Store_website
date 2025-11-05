import React, { useState } from "react";
import { addProduct } from "./firebase";

export default function Admin() {
  const [status, setStatus] = useState("");

  async function handleAdd(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const product = {
      name: fd.get("name"),
      price: fd.get("price"),
      desc: fd.get("desc"),
      category: fd.get("category"),
      icon: "💍",
    };

    setStatus("Adding...");
    try {
      await addProduct(product);
      setStatus("✅ Product added successfully!");
      e.target.reset();
    } catch (err) {
      setStatus("❌ Failed to add product");
    }
    setTimeout(() => setStatus(""), 2500);
  }

  return (
    <section className="py-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Admin Panel</h2>
      <form
        onSubmit={handleAdd}
        className="grid gap-4 max-w-2xl"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        <input name="name" placeholder="Product Name" className="input" required />
        <input name="price" placeholder="Price (₹)" className="input" required />
        <input
          name="desc"
          placeholder="Short Description"
          className="input col-span-2"
          required
        />
        <select name="category" className="input col-span-2">
          <option value="rings">Rings</option>
          <option value="necklaces">Necklaces</option>
          <option value="earrings">Earrings</option>
          <option value="bracelets">Bracelets</option>
        </select>
        <button type="submit" className="btn col-span-2">
          Add Product
        </button>
      </form>
      {status && <p className="mt-4 text-gray-700">{status}</p>}
    </section>
  );
        }
