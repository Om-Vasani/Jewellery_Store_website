import React from "react";

export default function About() {
  return (
    <section className="section container py-16">
      <h2 className="section-title text-3xl font-bold mb-6 text-center">
        About Amidip Jewellers
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1600185365504-1f83630a9b7b?auto=format&fit=crop&w=800&q=80"
            alt="Jewellery craftsmanship"
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div className="space-y-4 text-gray-700">
          <p>
            Founded in 1998, <strong>Amidip Jewellers</strong> is one of Surat’s most
            trusted names in handcrafted gold and diamond jewellery.  
            We blend <em>timeless tradition</em> with <em>modern artistry</em> to create
            exquisite pieces that celebrate every occasion.
          </p>

          <p>
            Each ornament is crafted by expert artisans using certified gold and
            ethically sourced diamonds — ensuring authenticity, purity, and
            elegance in every detail.
          </p>

          <p>
            From custom engagement rings to traditional bridal sets, we help
            customers express their stories through fine jewellery that lasts
            generations.
          </p>

          <div className="mt-6">
            <h4 className="font-semibold text-lg text-gray-800">Our Promise:</h4>
            <ul className="list-disc ml-6">
              <li>100% BIS Hallmarked Gold</li>
              <li>Certified Diamonds (GIA & IGI)</li>
              <li>Custom Design Consultation</li>
              <li>Lifetime Maintenance Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
