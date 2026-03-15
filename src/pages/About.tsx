import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Store, Scissors, User, ShoppingBag, Globe, Heart, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const segments = [
  { icon: Store, title: "Beauty Supply Stores", desc: "We help you stock trending braiding hair with reliable supply and competitive wholesale pricing." },
  { icon: Scissors, title: "Braiding Salons", desc: "Premium quality hair that delivers consistent results appointment after appointment." },
  { icon: User, title: "Professional Braiders", desc: "Access pro-grade braiding hair at prices that protect your margins and keep clients happy." },
  { icon: ShoppingBag, title: "Online Resellers", desc: "Build your online beauty business with our dropship-ready inventory and consistent supply." },
  { icon: Globe, title: "Distributors", desc: "Volume pricing, private label options, and dedicated account management for distribution partners." },
];

const values = [
  { icon: Heart, title: "Community First", desc: "We're built by and for the beauty community." },
  { icon: Shield, title: "Quality Guarantee", desc: "Every product meets our strict quality standards." },
  { icon: TrendingUp, title: "Growth Partners", desc: "Your success is our success. We grow together." },
];

const About = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-wide max-w-3xl text-center">
        <SectionHeading title="About Ombreta MOLL GLOBAL" />
        <p className="text-lg text-muted-foreground leading-relaxed mt-6">
          Ombreta MOLL GLOBAL is a trusted wholesale supplier of premium braiding hair. We partner with beauty supply stores, salons, professional braiders, resellers, and distributors nationwide to deliver consistent quality, trending colors, and unbeatable value.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
          Our mission is simple: help beauty businesses thrive with reliable supply and exceptional products.
        </p>
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <SectionHeading title="Who We Serve" subtitle="Tailored solutions for every segment of the beauty industry." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {segments.map((s) => (
            <div key={s.title} className="bg-card p-8 rounded-lg border border-border card-hover">
              <s.icon size={28} className="text-gold mb-4" />
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading title="Our Values" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {values.map((v) => (
            <div key={v.title} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <v.icon size={24} className="text-gold" />
              </div>
              <h3 className="font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="gold-gradient text-primary font-semibold btn-shine">
            <Link to="/wholesale">Become a Wholesale Partner</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
