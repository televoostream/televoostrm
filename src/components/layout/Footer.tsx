import { NavLink } from "@/components/NavLink";
import { Tv, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/channels", label: "Channels" },
    { to: "/pricing", label: "Pricing" },
    { to: "/faq", label: "FAQ" },
  ];

  const supportLinks = [
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
    { to: "/terms", label: "Terms of Use" },
    { to: "/privacy", label: "Privacy Policy" },
  ];

  const accountLinks = [
    { to: "/pricing", label: "Subscribe" },
    { to: "/refund", label: "Refund Policy" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Tv className="w-8 h-8 text-accent" />
              <span className="text-xl font-display font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                TelevooStream
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium IPTV streaming service. Watch live TV, movies, and sports in full HD -
              anytime, anywhere.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Account</h3>
            <ul className="space-y-2 mb-4">
              {accountLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>support@televoostream.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-border pt-8 pb-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm mb-4">
            <NavLink
              to="/terms"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Terms & Conditions
            </NavLink>
            <span className="text-muted-foreground">•</span>
            <NavLink
              to="/privacy"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Privacy Policy
            </NavLink>
            <span className="text-muted-foreground">•</span>
            <NavLink
              to="/refund"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Refund Policy
            </NavLink>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center space-y-2 pb-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} TelevooStream. All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground font-medium">
            Owned and operated by TRIMURTI HOSIERY MILLS PRIVATE LIMITED
          </p>
          <p className="text-xs text-muted-foreground">
            Registered under the Companies Act, 2013 • India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
