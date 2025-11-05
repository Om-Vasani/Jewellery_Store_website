import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Solitaire Diamond Ring",
    tag: "Best Seller",
    desc: "22K Gold • GIA Certified Diamond",
    price: "₹85,000",
    emoji: "💍",
    img: "https://images.unsplash.com/photo-1603808033192-8b5a3d418d63?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    title: "Royal Gold Necklace",
    tag: "Exclusive",
    desc: "Traditional 22K Gold",
    price: "₹1,25,000",
    emoji: "📿",
    img: "https://images.unsplash.com/photo-1618354691343-5c2b9d02e63f?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    title: "Pearl Drop Earrings",
    tag: "New Arrival",
    desc: "18K Gold • Freshwater Pearls",
    price: "₹28,500",
    emoji: "✨",
    img: "https://images.unsplash.com/photo-1600180758890-6ee6b29a7c57?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    title: "Men’s Gold Bracelet",
    tag: "Luxury",
    desc: "22K Solid Gold • Modern Design",
    price: "₹65,000",
    emoji: "🔗",
    img: "https://images.unsplash.com/photo-1590080875833-3c6b1e24a7a5?auto=format&fit=crop&w=400&q=80"
  },
];

export default function Catalog() {
  return (
    <section className="py-24 bg-[#fffaf5]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          ✨ Our Latest Jewellery Designs
        </h2>
        <p className="text-gray-600 mb-10">
          Every piece is handcrafted to perfection by our expert artisans.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
        <div className="mt-12">
          <a
            href="https://wa.me/919000000000?text=Hi%20Amidip%20Jewellers%2C%20I%20want%20to%20book%20an%20appointment."
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
            target="_blank" rel="noreferrer"
          >
            📲 Book Appointment on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}              <img src={p.img} alt={p.name} className="w-full h-56 object-cover" />
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
