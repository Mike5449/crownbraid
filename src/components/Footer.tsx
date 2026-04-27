import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-lg font-bold mb-4">
              OMBRETA <span className="text-gold">MOLL GLOBAL</span>
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Premium wholesale braiding hair for salons, beauty supply stores, and professional braiders nationwide.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="#" aria-label="Instagram" className="opacity-70 hover:opacity-100 transition-opacity">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="opacity-70 hover:opacity-100 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="mailto:ombretamg@ombretamollglobal.com" aria-label="Email" className="opacity-70 hover:opacity-100 transition-opacity">
                <Mail size={20} />
              </a>
              <a href="https://wa.me/18339585719" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="opacity-70 hover:opacity-100 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              <li><Link to="/collections" className="hover:opacity-100 transition-opacity">Collections</Link></li>
              <li><Link to="/wholesale" className="hover:opacity-100 transition-opacity">Wholesale Application</Link></li>
              <li><Link to="/catalog" className="hover:opacity-100 transition-opacity">Download Catalog</Link></li>
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Policies</h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              <li><Link to="/policies/return" className="hover:opacity-100 transition-opacity">Return Policy</Link></li>
              <li><Link to="/policies/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
              <li><Link to="/policies/terms" className="hover:opacity-100 transition-opacity">Terms & Conditions</Link></li>
              <li><Link to="/policies/wholesale-terms" className="hover:opacity-100 transition-opacity">Wholesale Terms</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Stay Updated</h4>
            <p className="text-sm opacity-80 mb-3">Get wholesale pricing & trend drops.</p>
            <form onSubmit={(e) => { e.preventDefault(); setEmail(""); }} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm"
              />
              <Button type="submit" className="gold-gradient text-primary font-semibold text-sm shrink-0">
                Join
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs opacity-60 space-y-1">
          <p>© {new Date().getFullYear()} OMBRETA MOLL GLOBAL. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a href="mailto:ciatech2019@gmail.com" className="hover:text-gold transition-colors font-medium">
              CIATECH
            </a>{" "}
            —{" "}
            <a href="mailto:ciatech2019@gmail.com" className="hover:text-gold transition-colors">
              ciatech2019@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
