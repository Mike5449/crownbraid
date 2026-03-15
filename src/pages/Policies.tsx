import Layout from "@/components/Layout";
import { useParams } from "react-router-dom";

const policies: Record<string, { title: string; content: string[] }> = {
  return: {
    title: "Return Policy",
    content: [
      "At Ombreta MOLL GLOBAL, we stand behind the quality of our products. If you receive a defective or damaged product, please contact us within 7 days of delivery.",
      "Returns are accepted for unopened and unused products in their original packaging within 14 days of delivery. A restocking fee of 15% may apply.",
      "Custom and private label orders are non-refundable unless defective. Shipping costs for returns are the responsibility of the buyer unless the return is due to our error.",
      "To initiate a return, please email returns@ombretamollglobal.com with your order number and reason for return. Our team will respond within 24–48 business hours.",
    ],
  },
  privacy: {
    title: "Privacy Policy",
    content: [
      "Ombreta MOLL GLOBAL respects your privacy and is committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data.",
      "We collect information you provide directly, such as your name, email, phone number, and business information when you apply for a wholesale account, place an order, or contact us.",
      "Your information is used to process orders, manage your wholesale account, send marketing communications (with your consent), and improve our services.",
      "We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our business.",
      "You may opt out of marketing communications at any time by contacting us or using the unsubscribe link in our emails.",
    ],
  },
  terms: {
    title: "Terms & Conditions",
    content: [
      "By accessing and using the Ombreta MOLL GLOBAL website, you agree to be bound by these Terms and Conditions.",
      "All prices listed are wholesale prices and are subject to change without notice. Prices are in USD and do not include shipping and handling unless otherwise stated.",
      "Orders are subject to product availability. We reserve the right to limit quantities and refuse orders at our discretion.",
      "All intellectual property on this website, including logos, images, and content, is the property of Ombreta MOLL GLOBAL and may not be reproduced without permission.",
      "Ombreta MOLL GLOBAL is not liable for any indirect, incidental, or consequential damages arising from the use of our products or services.",
    ],
  },
  "wholesale-terms": {
    title: "Wholesale Terms",
    content: [
      "Wholesale accounts are available to verified businesses including beauty supply stores, salons, professional braiders, resellers, and distributors.",
      "A valid business license or tax ID may be required for wholesale account approval. Applications are reviewed within 24–48 business hours.",
      "Minimum order quantities apply and vary by product. Bulk case deals may have different MOQ requirements.",
      "Payment terms for approved accounts include Net 30 for qualifying businesses. New accounts may be required to prepay for initial orders.",
      "Wholesale pricing is confidential and intended for approved account holders only. Sharing wholesale pricing publicly may result in account termination.",
      "CrownBraid Supply Co. reserves the right to modify wholesale terms, pricing, and account status at any time with reasonable notice.",
    ],
  },
};

const Policies = () => {
  const { slug } = useParams<{ slug: string }>();
  const policy = policies[slug || "return"];

  if (!policy) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-3xl font-bold">Policy Not Found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">{policy.title}</h1>
          <div className="space-y-4">
            {policy.content.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted-foreground">
            Last updated: March 2026. For questions, contact us at legal@crownbraid.com.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Policies;
