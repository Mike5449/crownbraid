import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

import heroMain from "@/assets/hero-main.png";
import prodBodyWave from "@/assets/prod-body-wave.jpg";
import prodDeepWave from "@/assets/prod-deep-wave.jpg";
import prodBurgundy from "@/assets/prod-burgundy.jpg";
import prodKinkyCurly from "@/assets/prod-kinky-curly.jpg";
import prodClosure from "@/assets/prod-closure.jpg";
import prodGinger from "@/assets/prod-ginger.jpg";
import prodBlondeOmbre from "@/assets/prod-blonde-ombre.jpg";
import prodWaterWave from "@/assets/prod-water-wave.jpg";
import prodFrontal from "@/assets/prod-frontal.jpg";
import prodStraightBundle from "@/assets/prod-straight-bundle.jpg";

const products = [
  // Lace Front Wigs - Straight
  { id: 1, img: heroMain, name: "HD Lace Front Bone Straight 30\"", type: "Lace Front Wigs", texture: "Straight" },
  { id: 2, img: prodStraightBundle, name: "13x4 Straight Lace Frontal Wig 26\"", type: "Lace Front Wigs", texture: "Straight" },
  { id: 3, img: heroMain, name: "5x5 HD Closure Straight Wig 24\"", type: "Lace Front Wigs", texture: "Straight" },
  { id: 4, img: prodStraightBundle, name: "13x6 Silky Straight Wig 34\"", type: "Lace Front Wigs", texture: "Straight" },
  { id: 5, img: heroMain, name: "Transparent Lace Straight 28\"", type: "Lace Front Wigs", texture: "Straight" },

  // Lace Front Wigs - Body Wave
  { id: 6, img: prodBodyWave, name: "Body Wave Lace Front 26\"", type: "Lace Front Wigs", texture: "Body Wave" },
  { id: 7, img: prodWaterWave, name: "13x4 Body Wave HD Lace 30\"", type: "Lace Front Wigs", texture: "Body Wave" },
  { id: 8, img: prodBodyWave, name: "5x5 Body Wave Closure Wig 22\"", type: "Lace Front Wigs", texture: "Body Wave" },
  { id: 9, img: prodWaterWave, name: "Body Wave Transparent Lace 28\"", type: "Lace Front Wigs", texture: "Body Wave" },
  { id: 10, img: prodBodyWave, name: "13x6 Body Wave Premium 32\"", type: "Lace Front Wigs", texture: "Body Wave" },

  // Lace Front Wigs - Curly
  { id: 11, img: prodDeepWave, name: "Deep Wave Lace Front 26\"", type: "Lace Front Wigs", texture: "Curly" },
  { id: 12, img: prodKinkyCurly, name: "Jerry Curl HD Lace 22\"", type: "Lace Front Wigs", texture: "Curly" },
  { id: 13, img: prodKinkyCurly, name: "Kinky Curly Lace Front 24\"", type: "Lace Front Wigs", texture: "Curly" },
  { id: 14, img: prodDeepWave, name: "Water Wave 13x4 Frontal 28\"", type: "Lace Front Wigs", texture: "Curly" },
  { id: 15, img: prodKinkyCurly, name: "Deep Curly 5x5 Closure 20\"", type: "Lace Front Wigs", texture: "Curly" },

  // Colored Wigs
  { id: 16, img: prodBlondeOmbre, name: "Blonde #613 Body Wave 26\"", type: "Colored Wigs", texture: "Body Wave" },
  { id: 17, img: prodGinger, name: "Honey Blonde #27 Straight 24\"", type: "Colored Wigs", texture: "Straight" },
  { id: 18, img: prodBurgundy, name: "Burgundy #99J Deep Wave 22\"", type: "Colored Wigs", texture: "Curly" },
  { id: 19, img: prodGinger, name: "Ginger #350 Body Wave 28\"", type: "Colored Wigs", texture: "Body Wave" },
  { id: 20, img: prodBurgundy, name: "Red Copper Straight 26\"", type: "Colored Wigs", texture: "Straight" },
  { id: 21, img: prodBlondeOmbre, name: "Ash Blonde Highlight 30\"", type: "Colored Wigs", texture: "Body Wave" },
  { id: 22, img: prodGinger, name: "Orange Ginger Curly 24\"", type: "Colored Wigs", texture: "Curly" },
  { id: 23, img: prodBurgundy, name: "Piano Color P4/27 Straight 26\"", type: "Colored Wigs", texture: "Straight" },

  // Ombre Wigs
  { id: 24, img: prodBlondeOmbre, name: "Ombre 1B/27 Body Wave 26\"", type: "Ombre Wigs", texture: "Body Wave" },
  { id: 25, img: prodBlondeOmbre, name: "Ombre 1B/30 Straight 28\"", type: "Ombre Wigs", texture: "Straight" },
  { id: 26, img: prodBurgundy, name: "Ombre 1B/613 Deep Wave 24\"", type: "Ombre Wigs", texture: "Curly" },
  { id: 27, img: prodBlondeOmbre, name: "Ombre 4/27 Body Wave 30\"", type: "Ombre Wigs", texture: "Body Wave" },
  { id: 28, img: prodBurgundy, name: "Ombre 1B/Burgundy Straight 26\"", type: "Ombre Wigs", texture: "Straight" },

  // Hair Bundles - Straight
  { id: 29, img: prodStraightBundle, name: "Straight Bundles 3pcs 22-24-26\"", type: "Hair Bundles", texture: "Straight" },
  { id: 30, img: heroMain, name: "Straight Bundles 4pcs 18-20-22-24\"", type: "Hair Bundles", texture: "Straight" },
  { id: 31, img: prodStraightBundle, name: "Bone Straight Bundles 3pcs 28-30-32\"", type: "Hair Bundles", texture: "Straight" },
  { id: 32, img: heroMain, name: "Raw Straight Bundle Single 30\"", type: "Hair Bundles", texture: "Straight" },

  // Hair Bundles - Curly / Wave
  { id: 33, img: prodDeepWave, name: "Deep Wave Bundles 3pcs 22-24-26\"", type: "Hair Bundles", texture: "Curly" },
  { id: 34, img: prodKinkyCurly, name: "Kinky Curly Bundles 3pcs 20-22-24\"", type: "Hair Bundles", texture: "Curly" },
  { id: 35, img: prodWaterWave, name: "Water Wave Bundles 4pcs 24-26-28-30\"", type: "Hair Bundles", texture: "Curly" },
  { id: 36, img: prodKinkyCurly, name: "Jerry Curl Bundles 3pcs 18-20-22\"", type: "Hair Bundles", texture: "Curly" },
  { id: 37, img: prodBodyWave, name: "Body Wave Bundles 3pcs 26-28-30\"", type: "Hair Bundles", texture: "Body Wave" },
  { id: 38, img: prodWaterWave, name: "Loose Wave Bundles 3pcs 22-24-26\"", type: "Hair Bundles", texture: "Body Wave" },

  // Bundles with Closure
  { id: 39, img: prodDeepWave, name: "Curly 3 Bundles + 4x4 Closure", type: "Bundles + Closure", texture: "Curly" },
  { id: 40, img: prodStraightBundle, name: "Straight 3 Bundles + 4x4 Closure", type: "Bundles + Closure", texture: "Straight" },
  { id: 41, img: prodBodyWave, name: "Body Wave 3 Bundles + 4x4 Closure", type: "Bundles + Closure", texture: "Body Wave" },
  { id: 42, img: prodKinkyCurly, name: "Deep Wave 3 Bundles + 5x5 Closure", type: "Bundles + Closure", texture: "Curly" },
  { id: 43, img: heroMain, name: "Straight 4 Bundles + 13x4 Frontal", type: "Bundles + Closure", texture: "Straight" },
  { id: 44, img: prodWaterWave, name: "Body Wave 3 Bundles + 13x4 Frontal", type: "Bundles + Closure", texture: "Body Wave" },

  // Closures & Frontals
  { id: 45, img: prodClosure, name: "4x4 Lace Closure Straight 18\"", type: "Closures & Frontals", texture: "Straight" },
  { id: 46, img: prodFrontal, name: "4x4 Lace Closure Deep Wave 16\"", type: "Closures & Frontals", texture: "Curly" },
  { id: 47, img: prodClosure, name: "5x5 HD Closure Straight 20\"", type: "Closures & Frontals", texture: "Straight" },
  { id: 48, img: prodFrontal, name: "13x4 Frontal Body Wave 18\"", type: "Closures & Frontals", texture: "Body Wave" },
  { id: 49, img: prodFrontal, name: "13x6 Frontal Deep Wave 20\"", type: "Closures & Frontals", texture: "Curly" },
  { id: 50, img: prodClosure, name: "7x7 Closure Straight 22\"", type: "Closures & Frontals", texture: "Straight" },
];

const typeFilters = ["All", "Lace Front Wigs", "Colored Wigs", "Ombre Wigs", "Hair Bundles", "Bundles + Closure", "Closures & Frontals"];
const textureFilters = ["All", "Straight", "Body Wave", "Curly"];

const Collections = () => {
  const [activeType, setActiveType] = useState("All");
  const [activeTexture, setActiveTexture] = useState("All");

  const filtered = products.filter((p) => {
    const matchType = activeType === "All" || p.type === activeType;
    const matchTexture = activeTexture === "All" || p.texture === activeTexture;
    return matchType && matchTexture;
  });

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading title="Our Collections" subtitle="Browse our full range of premium wigs, bundles, closures & frontals." />

          <div className="mt-10">
            <p className="text-sm font-medium text-muted-foreground mb-3 text-center">Category</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {typeFilters.map((f) => (
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
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium text-muted-foreground mb-3 text-center">Texture</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {textureFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveTexture(f)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${
                    activeTexture === f
                      ? "bg-gold text-primary border-gold"
                      : "bg-card text-foreground border-border hover:border-gold"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center mt-6">{filtered.length} product{filtered.length > 1 ? "s" : ""}</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
            {filtered.map((p) => (
              <div key={p.id} className="bg-card rounded-lg border border-border overflow-hidden card-hover group">
                <div className="aspect-square overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-sm mb-1 line-clamp-2">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{p.type} · {p.texture}</p>
                  <Button asChild variant="outline" size="sm" className="w-full text-xs">
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
