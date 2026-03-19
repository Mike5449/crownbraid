import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

import prodStraightBundle from "@/assets/prod-straight-bundle.jpg";
import prodBodyWave from "@/assets/prod-body-wave.jpg";
import prodDeepWave from "@/assets/prod-deep-wave.jpg";
import prodBurgundy from "@/assets/prod-burgundy.jpg";
import prodKinkyCurly from "@/assets/prod-kinky-curly.jpg";
import prodClosure from "@/assets/prod-closure.jpg";
import prodGinger from "@/assets/prod-ginger.jpg";
import prodBlondeOmbre from "@/assets/prod-blonde-ombre.jpg";
import prodWaterWave from "@/assets/prod-water-wave.jpg";
import prodFrontal from "@/assets/prod-frontal.jpg";
import heroMain from "@/assets/hero-main.png";

const featuredProducts = [
  { img: heroMain, name: "Bone Straight HD Lace Wig 30\"", category: "Lace Front Wigs" },
  { img: prodBodyWave, name: "Body Wave Bundles 3pcs 24-26-28\"", category: "Hair Bundles" },
  { img: prodDeepWave, name: "Deep Wave Bundles 3pcs 22-24-26\"", category: "Hair Bundles" },
  { img: prodBurgundy, name: "Burgundy #99J Straight Wig 26\"", category: "Colored Wigs" },
  { img: prodGinger, name: "Ginger #350 Body Wave Wig 28\"", category: "Colored Wigs" },
  { img: prodStraightBundle, name: "Silky Straight Raw Hair Bundle 32\"", category: "Hair Bundles" },
  { img: prodKinkyCurly, name: "Kinky Curly Bundles 3pcs 20-22-24\"", category: "Hair Bundles" },
  { img: prodBlondeOmbre, name: "Ombre 1B/27 Body Wave Bundles", category: "Ombre" },
  { img: prodWaterWave, name: "Water Wave Bundles 3pcs 26-28-30\"", category: "Hair Bundles" },
  { img: prodClosure, name: "4x4 HD Lace Closure Straight 18\"", category: "Closures & Frontals" },
  { img: prodFrontal, name: "13x4 Body Wave Lace Frontal 20\"", category: "Closures & Frontals" },
  { img: prodBodyWave, name: "Loose Deep Wave Bundles 4pcs", category: "Hair Bundles" },
];

const FeaturedProducts = () => (
  <section className="section-padding">
    <div className="container-wide">
      <SectionHeading title="Best Sellers" subtitle="Our most popular products trusted by salons and retailers nationwide." />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">
        {featuredProducts.map((p, i) => (
          <div key={i} className="group bg-card rounded-lg overflow-hidden border border-border card-hover">
            <div className="aspect-square overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <p className="text-xs text-gold font-medium mb-1">{p.category}</p>
              <h3 className="font-semibold text-sm mb-3 line-clamp-2">{p.name}</h3>
              <Button asChild variant="outline" size="sm" className="w-full text-xs group-hover:border-gold group-hover:text-gold transition-colors">
                <Link to="/contact">Request Quote <ArrowRight size={12} className="ml-1" /></Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button asChild size="lg" variant="outline">
          <Link to="/collections">View All Collections <ArrowRight size={14} className="ml-1" /></Link>
        </Button>
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
