import { Link } from "react-router-dom";
import { Mail, MapPin, Building } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const resources = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Careers", href: "/careers" },
  { label: "Help Center", href: "/help" },
];

export function Footer() {
  return (
    <footer className="bg-surface-light/50 border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                C
              </div>
              <span className="font-heading font-bold text-xl text-text-primary">
                Custospark
              </span>
            </div>
            <p className="text-text-secondary text-body-sm italic">
              PowerHouse of Innovations.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-text-primary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-text-secondary text-body-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-text-primary mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-text-secondary text-body-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row gap-4 text-text-muted text-caption">
            <span className="flex items-center gap-1">
              <Building size={14} />
              Custospark Company Ltd
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              Dar es Salaam, Tanzania
            </span>
            <a
              href="mailto:support@custospark.com"
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <Mail size={14} />
              support@custospark.com
            </a>
          </div>
          <p className="text-text-muted text-caption">
            &copy; {new Date().getFullYear()} Custospark. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
