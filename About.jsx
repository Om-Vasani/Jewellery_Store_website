import React from "react";

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1603808033192-8b5a3d418d63?auto=format&fit=crop&w=600&q=80"
          alt="Jewellery Workshop"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            A Legacy of Trust & Craftsmanship
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Established in 1995, Amidip Jewellers has become a trusted name for
            purity, design and perfection. We blend tradition with innovation
            to create timeless jewellery that speaks of elegance.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every design is crafted with certified gold and diamonds, ensuring
            long-lasting brilliance and trust. 
          </p>
          <button className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600">
            Visit Our Store in Surat
          </button>
        </div>
      </div>
    </section>
  );
}
