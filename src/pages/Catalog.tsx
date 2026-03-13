import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileDown } from "lucide-react";
import { useState } from "react";

const Catalog = () => {
  const [form, setForm] = useState({ name: "", email: "", businessType: "" });

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide max-w-xl text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full gold-gradient flex items-center justify-center">
            <FileDown size={28} className="text-primary" />
          </div>
          <SectionHeading
            title="Download Wholesale Catalog"
            subtitle="Get our full product catalog with wholesale pricing, color charts, and bulk pack options."
          />
          <form onSubmit={(e) => { e.preventDefault(); setForm({ name: "", email: "", businessType: "" }); }} className="mt-10 space-y-4 text-left">
            <Input placeholder="Your Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            <Input type="email" placeholder="Email Address *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            <Input placeholder="Business Type" value={form.businessType} onChange={(e) => setForm({ ...form, businessType: e.target.value })} />
            <Button type="submit" size="lg" className="w-full gold-gradient text-primary font-semibold btn-shine">
              Download Wholesale Catalog
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Catalog;
