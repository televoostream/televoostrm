import { useState, useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X, Tv } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/features", label: "Features" },
    { to: "/pricing", label: "Pricing" },
    { to: "/products", label: "Products" },
    { to: "/faq", label: "FAQ" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Tv className="w-8 h-8 text-accent transition-all duration-300 group-hover:drop-shadow-[0_0_15px_hsl(var(--neon-green))]" />
              <div className="absolute inset-0 bg-accent/20 blur-xl group-hover:bg-accent/40 transition-all rounded-full" />
            </div>
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              TelevooStream
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
                activeClassName="text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 shadow-neon-green" />
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="neon" size="lg" asChild>
              <a href="tel:+18335395474">(833) 539-5474</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  activeClassName="text-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <Button variant="neon" size="lg" className="mt-4" asChild>
                <a href="tel:+18335395474">(833) 539-5474</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
