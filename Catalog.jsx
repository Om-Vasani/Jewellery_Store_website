import React from "react";

const products = [
  {
    id: 1,
    name: "Diamond Necklace",
    desc: "18K Gold with certified diamonds",
    price: "₹1,25,000",
    img: "https://images.unsplash.com/photo-1600180758890-6b94519a3e77?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Gold Bangles Set",
    desc: "22K Traditional design",
    price: "₹89,000",
    img: "https://images.unsplash.com/photo-1600180758271-d26f9c59b3bb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Solitaire Ring",
    desc: "GIA certified diamond",
    price: "₹75,000",
    img: "https://images.unsplash.com/photo-1600180758702-f3b3a2c2e18f?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Catalog() {
  return (
    <section className="pt-24 pb-16 bg-[#fffaf5] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Our Collection
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{p.desc}</p>
                <p className="text-[#c67c22] font-bold mt-2">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
        }
