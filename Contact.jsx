import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! We'll contact you soon.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="pt-24 pb-16 bg-[#fffaf5] min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Contact Us
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded-xl shadow-md"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-2 border rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#c67c22] text-white py-2 rounded hover:bg-[#b06f1d]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
            }
