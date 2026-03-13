import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

import catPre from "@/assets/cat-pre-stretched.jpg";
import catOmbre from "@/assets/cat-ombre.jpg";
import catColors from "@/assets/cat-colors.jpg";
import catBulk from "@/assets/cat-bulk.jpg";
import catPrivate from "@/assets/cat-private-label.jpg";

const products = [
  { id: 1, img: catPre, name: "Pre-Stretched Kanekalon 26\"", type: "Pre-Stretched", color: "Natural Black", pack: "12-Pack", price: "From $2.50/pc" },
  { id: 2, img: catOmbre, name: "Ombre Blonde Braid 24\"", type: "Ombre", color: "Blonde", pack: "12-Pack", price: "From $3.00/pc" },
  { id: 3, img: catColors, name: "Color #27 Honey Blonde 26\"", type: "Color", color: "Blonde", pack: "6-Pack", price: "From $2.75/pc" },
  { id: 4, img: catBulk, name: "Bulk Case Deal – 48pc Mixed", type: "Bulk Pack", color: "Mixed", pack: "Case (48)", price: "From $1.90/pc" },
  { id: 5, img: catPrivate, name: "Private Label Custom Pack", type: "Private Label", color: "Custom", pack: "MOQ 100", price: "Contact for pricing" },
  { id: 6, img: catPre, name: "Pre-Stretched EZ Braid 20\"", type: "Pre-Stretched", color: "Natural Black", pack: "24-Pack", price: "From $2.25/pc" },
  { id: 7, img: catOmbre, name: "Ombre Burgundy Braid 22\"", type: "Ombre", color: "Burgundy", pack: "12-Pack", price: "From $3.25/pc" },
  { id: 8, img: catColors, name: "Color #30 Auburn 26\"", type: "Color", color: "Auburn", pack: "12-Pack", price: "From $2.75/pc" },
];

const filters = {
  type: ["All", "Pre-Stretched", "Ombre", "Color", "Bulk Pack", "Private Label"],
  pack: ["All", "6-Pack", "12-Pack", "24-Pack", "Case (48)", "MOQ 100"],
};

const Collections = () => {
  const [activeType, setActiveType] = useState("All");

  const filtered = activeType === "All" ? products : products.filter((p) => p.type === activeType);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading title="Bulk Collections" subtitle="Browse our full range of wholesale braiding hair." />

          <div className="flex flex-wrap gap-2 mt-10 justify-center">
            {filters.type.map((f) => (
              <button
                key={f}
                onClick={() => setActiveType(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  activeType === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:border-gold"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {filtered.map((p) => (
              <div key={p.id} className="bg-card rounded-lg border border-border overflow-hidden card-hover group">
                <div className="aspect-square overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-1">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{p.type} · {p.color}</p>
                  <p className="text-sm font-medium text-gold mb-4">{p.price}</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Collections;
