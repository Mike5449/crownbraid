import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Tameka J.", biz: "Beauty Supply Owner", quote: "Ombreta MOLL GLOBAL is our #1 supplier. Consistent quality and the reorder process is seamless. Our shelves are always stocked." },
  { name: "Aisha R.", biz: "Professional Braider", quote: "My clients love the pre-stretched hair. It saves me 30 minutes per install and the quality is always on point." },
  { name: "Marcus D.", biz: "Online Reseller", quote: "The margins are great and my customers keep coming back for the same shades. Best wholesale partner I've worked with." },
  { name: "Crystal B.", biz: "Salon Owner", quote: "We switched to Ombreta MOLL GLOBAL six months ago and haven't looked back. Reliable, affordable, and trend-forward." },
  { name: "Denise W.", biz: "Distributor", quote: "Their private label program helped us launch our own brand. The MOQ is reasonable and the quality is excellent." },
  { name: "LaShawn T.", biz: "Beauty Supply Store", quote: "Fast shipping and consistent inventory. We never have to worry about running out of popular colors." },
  { name: "Nicole P.", biz: "Professional Braider", quote: "The ombre collection is a hit with my clients. I get compliments on the hair quality every single time." },
  { name: "James H.", biz: "Multi-Store Owner", quote: "We stock Ombreta MOLL GLOBAL in all 3 of our locations. The bulk case deals save us thousands every quarter." },
  { name: "Keisha M.", biz: "Salon Owner", quote: "Customer service is incredible. They helped me pick the perfect color assortment for my client base." },
];

const Testimonials = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading title="What Our Partners Say" subtitle="Real feedback from beauty supply stores, braiders, and resellers." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
      </div>
    </section>
  </Layout>
);

export default Testimonials;
