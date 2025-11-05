import React, { useState } from "react";
import { saveMessage } from "./firebase";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    setStatus("Sending...");
    try {
      await saveMessage(fd.get("name"), fd.get("phone"), fd.get("message"));
      setStatus("✅ Message Sent! We’ll get back soon.");
      e.target.reset();
    } catch (err) {
      setStatus("❌ Failed to send.");
    }
    setTimeout(() => setStatus(""), 3000);
  }

  return (
    <section className="py-24 bg-[#fffaf5]">
      <div className="container mx-auto px-6 max-w-xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact & Bookings</h2>
        <p className="text-gray-600 mb-8">
          Visit us at <strong>Varachha Road, Surat</strong> or reach out directly:
          <br />
          📞 +91 90000 00000 | ✉️ info@amidipjewellers.in
        </p>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input name="name" placeholder="Full Name" className="input" required />
          <input name="phone" placeholder="Phone or Email" className="input" required />
          <textarea name="message" placeholder="Your message..." rows="4" className="input" required />
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
        {status && <div className="mt-3 text-gray-700">{status}</div>}
      </div>
    </section>
  );
}
