import React, { useState } from "react";

export default function Admin() {
  const [form, setForm] = useState({ name: "", price: "", desc: "", image: "" });
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return alert("Please fill all required fields");
    setList([...list, form]);
    setForm({ name: "", price: "", desc: "", image: "" });
  };

  return (
    <section className="pt-24 pb-16 bg-[#fffaf5] min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Admin Panel — Add Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
          <input
            type="text"
            placeholder="Product Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Price (₹)"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Description"
            value={form.desc}
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="w-full bg-[#c67c22] text-white py-2 rounded">
            Add Product
          </button>
        </form>

        {list.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Added Products:</h2>
            <ul className="space-y-2">
              {list.map((item, i) => (
                <li key={i} className="p-3 bg-gray-100 rounded">
                  <b>{item.name}</b> — {item.price}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
            }
