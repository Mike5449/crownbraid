import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Collections", to: "/collections" },
  { label: "Wholesale", to: "/wholesale" },
  { label: "Catalog", to: "/catalog" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container-wide flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-display text-xl font-bold tracking-tight">
          OMBRETA <span className="text-gold-gradient">MOLL GLOBAL</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                location.pathname === l.to ? "text-gold" : "text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90 font-medium">
            <Link to="/wholesale">Apply for Wholesale</Link>
          </Button>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-2 transition-colors hover:text-gold ${
                  location.pathname === l.to ? "text-gold" : "text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild variant="default" className="mt-2 bg-primary hover:bg-primary/90">
              <Link to="/wholesale" onClick={() => setOpen(false)}>Apply for Wholesale</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
