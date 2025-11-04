import React from "react";

export default function Contact() {
  return (
    <section className="container">
      <h2 className="section-title">Contact</h2>
      <p className="copy">Visit us at Varachha Road, Surat or call: <strong>+91 90000 00000</strong></p>
      <form className="contact-form" onSubmit={(e)=>e.preventDefault()}>
        <input placeholder="Your name" />
        <input placeholder="Email or phone" />
        <textarea placeholder="Message" rows="4" />
        <button className="btn">Send</button>
      </form>
    </section>
  );
}
