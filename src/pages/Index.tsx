import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionHeading from "@/components/SectionHeading";
import FeaturedProducts from "@/components/FeaturedProducts";
import {
  DollarSign, Truck, Shield, Tag, MapPin,
  TrendingUp, Palette, BarChart3, RefreshCw, Heart,
  Store, Scissors, User, ShoppingBag, Globe,
  ClipboardList, CheckCircle, Eye, Package, RotateCw,
  Star, ArrowRight,
} from "lucide-react";
import { useState } from "react";

import heroMain from "@/assets/hero-main.png";
import heroBgLuxury from "@/assets/hero-bg-luxury.jpg";
import catPre from "@/assets/prod-straight-bundle.jpg";
import catOmbre from "@/assets/prod-blonde-ombre.jpg";
import catColors from "@/assets/prod-burgundy.jpg";
import catBulk from "@/assets/prod-body-wave.jpg";
import catPrivate from "@/assets/prod-ginger.jpg";

const trustItems = [
  { icon: DollarSign, label: "Bulk Pricing" },
  { icon: Truck, label: "Fast Fulfillment" },
  { icon: Shield, label: "Consistent Quality" },
  { icon: Tag, label: "Private Label Available" },
  { icon: MapPin, label: "Nationwide Shipping" },
];

const categories = [
  { img: catPre, title: "Straight Hair Collections", desc: "Silky smooth straight bundles and wigs." },
  { img: catOmbre, title: "Ombre & Blonde Hair", desc: "Trending two-tone and gradient shades." },
  { img: catColors, title: "Colored Wigs", desc: "Bold colors from burgundy to ginger." },
  { img: catBulk, title: "Body Wave & Curly", desc: "Volume pricing for serious retailers." },
  { img: catPrivate, title: "Private Label / Custom Orders", desc: "Build your own brand with our quality." },
];

const whyUs = [
  { icon: TrendingUp, title: "Consistent Inventory", desc: "Never run out of your best sellers." },
  { icon: Palette, title: "High-Demand Shades", desc: "Trend-forward colors your clients want." },
  { icon: BarChart3, title: "Better Margins", desc: "Wholesale pricing that grows your profits." },
  { icon: RefreshCw, title: "Easy Reordering", desc: "Simple reorder process to keep shelves stocked." },
  { icon: Heart, title: "Business Support", desc: "We help growing beauty businesses succeed." },
];

const whoWeServe = [
  { icon: Store, title: "Beauty Supply Stores", desc: "Stock trending braiding hair your customers want." },
  { icon: Scissors, title: "Braiding Salons", desc: "Reliable quality for every appointment." },
  { icon: User, title: "Professional Braiders", desc: "Premium hair at prices that protect your margins." },
  { icon: ShoppingBag, title: "Online Resellers", desc: "Dropship-ready with consistent supply." },
  { icon: Globe, title: "Distributors", desc: "Volume deals and private label options." },
];

const steps = [
  { icon: ClipboardList, label: "Apply", desc: "Fill out our wholesale application." },
  { icon: CheckCircle, label: "Get Approved", desc: "Quick review within 24–48 hours." },
  { icon: Eye, label: "View Pricing", desc: "Access exclusive wholesale rates." },
  { icon: Package, label: "Place Orders", desc: "Order from our full catalog." },
  { icon: RotateCw, label: "Reorder Easily", desc: "One-click reorder your favorites." },
];

const testimonials = [
  { name: "Tameka J.", biz: "Beauty Supply Owner", quote: "Ombreta MOLL GLOBAL is our #1 supplier. Consistent quality and the reorder process is seamless." },
  { name: "Aisha R.", biz: "Professional Braider", quote: "My clients love the pre-stretched hair. It saves me 30 minutes per install." },
  { name: "Marcus D.", biz: "Online Reseller", quote: "The margins are great and my customers keep coming back for the same shades." },
];

const Index = () => {
  const [emailForm, setEmailForm] = useState({ name: "", email: "", businessType: "" });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image */}
        <img
          src={heroBgLuxury}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        {/* Gold shimmer accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent" />

        <div className="relative z-10 container-wide section-padding py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            {/* Luxury badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(var(--gold)/0.4)] bg-[hsl(var(--gold)/0.08)] backdrop-blur-sm mb-8">
              <Star size={14} className="text-[hsl(var(--gold))] fill-[hsl(var(--gold))]" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-[hsl(var(--gold))]">Collection Premium</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-6 text-white">
              L'Excellence <br />
              <span className="text-gold-gradient">Capillaire</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl leading-relaxed font-light">
              Wigs, bundles, closures & frontals de qualité supérieure — approvisionnement fiable, couleurs tendance, et un service sur mesure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gold-gradient text-primary font-semibold text-base btn-shine px-8 py-6 text-base">
                <Link to="/wholesale">Devenir Partenaire</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 font-medium px-8 py-6 text-base">
                <Link to="/collections">Explorer la Collection <ArrowRight size={16} className="ml-2" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary border-b border-border">
        <div className="container-wide px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {trustItems.map((t) => (
              <div key={t.label} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <t.icon size={18} className="text-gold" />
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <FeaturedProducts />

      {/* Shop by Collection */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <SectionHeading title="Shop by Collection" subtitle="Curated categories to fit your store's needs." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {categories.map((cat) => (
              <div key={cat.title} className="group bg-card rounded-lg overflow-hidden border border-border card-hover">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-2">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{cat.desc}</p>
                  <Button asChild variant="outline" size="sm" className="group-hover:border-gold group-hover:text-gold transition-colors">
                    <Link to="/collections">View Collection <ArrowRight size={14} className="ml-1" /></Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Retailers Buy From Us */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading title="Why Retailers Buy From Us" subtitle="Everything you need to run a profitable hair business." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-card p-6 rounded-lg border border-border text-center card-hover">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <item.icon size={22} className="text-gold" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <SectionHeading title="Who We Serve" subtitle="Trusted by beauty professionals across the industry." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {whoWeServe.map((s) => (
              <div key={s.title} className="p-6 rounded-lg border border-border text-center card-hover bg-card">
                <s.icon size={28} className="mx-auto mb-4 text-gold" />
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Wholesale Works */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How Wholesale Works</h2>
            <p className="text-lg opacity-80">Five simple steps to start ordering.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div key={step.label} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center text-primary font-bold text-lg">
                  {i + 1}
                </div>
                <h3 className="font-semibold mb-1">{step.label}</h3>
                <p className="text-sm opacity-70">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="gold-gradient text-primary font-semibold btn-shine">
              <Link to="/wholesale">Start Your Application</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading title="Trusted by 500+ Beauty Businesses" subtitle="Hear from store owners, braiders, and resellers." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card p-8 rounded-lg border border-border card-hover">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-gold text-gold" />)}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.biz}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/testimonials">See All Testimonials <ArrowRight size={14} className="ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="section-padding bg-secondary">
        <div className="container-wide max-w-2xl text-center">
          <SectionHeading title="Get Wholesale Pricing + Trend Drops" subtitle="Join our wholesale network for exclusive access." />
          <form
            onSubmit={(e) => { e.preventDefault(); setEmailForm({ name: "", email: "", businessType: "" }); }}
            className="mt-10 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" value={emailForm.name} onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })} />
              <Input type="email" placeholder="Email Address" value={emailForm.email} onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })} />
            </div>
            <Input placeholder="Business Type (e.g. Salon, Beauty Supply)" value={emailForm.businessType} onChange={(e) => setEmailForm({ ...emailForm, businessType: e.target.value })} />
            <Button type="submit" size="lg" className="w-full gold-gradient text-primary font-semibold btn-shine">
              Get Access
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
