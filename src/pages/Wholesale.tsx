import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Wholesale = () => {
  const [form, setForm] = useState({
    businessName: "", ownerName: "", email: "", phone: "",
    businessType: "", website: "", volume: "", message: "",
  });

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [field]: e.target.value });

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide max-w-2xl">
          <SectionHeading
            title="Wholesale Application"
            subtitle="Apply for a wholesale account and get access to bulk pricing, exclusive collections, and dedicated support."
          />
          <form onSubmit={(e) => { e.preventDefault(); }} className="mt-12 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Business Name *" value={form.businessName} onChange={update("businessName")} required />
              <Input placeholder="Owner Name *" value={form.ownerName} onChange={update("ownerName")} required />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input type="email" placeholder="Email *" value={form.email} onChange={update("email")} required />
              <Input type="tel" placeholder="Phone *" value={form.phone} onChange={update("phone")} required />
            </div>
            <Input placeholder="Business Type (e.g. Salon, Beauty Supply Store)" value={form.businessType} onChange={update("businessType")} />
            <Input placeholder="Website or Social Media URL" value={form.website} onChange={update("website")} />
            <Input placeholder="Estimated Monthly Order Volume" value={form.volume} onChange={update("volume")} />
            <Textarea placeholder="Tell us about your business..." rows={4} value={form.message} onChange={update("message")} />
            <Button type="submit" size="lg" className="w-full gold-gradient text-primary font-semibold btn-shine">
              Submit Wholesale Application
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Wholesale;
