import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, ShoppingBag, Tag, Package, MessageCircle } from "lucide-react";
import { useState } from "react";

const inquiryTypes = [
  { icon: ShoppingBag, title: "Wholesale Inquiries", desc: "Questions about wholesale accounts, pricing, and applications." },
  { icon: Tag, title: "Private Label Requests", desc: "Custom branding, packaging, and MOQ information." },
  { icon: Package, title: "Bulk Order Support", desc: "Help with large orders, shipping, and logistics." },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });
  const update = (f: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [f]: e.target.value });

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading title="Contact Us" subtitle="We'd love to hear from you. Reach out for wholesale inquiries, support, or partnership opportunities." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {inquiryTypes.map((t) => (
              <div key={t.title} className="bg-card p-6 rounded-lg border border-border text-center card-hover">
                <t.icon size={28} className="mx-auto mb-3 text-gold" />
                <h3 className="font-semibold mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-xl mx-auto mt-16">
            <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name *" value={form.name} onChange={update("name")} required />
                <Input type="email" placeholder="Email *" value={form.email} onChange={update("email")} required />
              </div>
              <Input placeholder="Business Name" value={form.business} onChange={update("business")} />
              <Textarea placeholder="Your Message *" rows={5} value={form.message} onChange={update("message")} required />
              <Button type="submit" size="lg" className="w-full gold-gradient text-primary font-semibold btn-shine">
                Send Message
              </Button>
            </form>

            <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center text-sm text-muted-foreground">
              <a href="mailto:info@crownbraid.com" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Mail size={16} /> info@crownbraid.com
              </a>
              <a href="tel:+18005551234" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone size={16} /> (800) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
