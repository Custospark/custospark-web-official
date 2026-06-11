import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { navLinks } from "@/lib/constants";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/Button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
              C
            </div>
            <span className="font-heading font-bold text-lg md:text-xl text-text-primary">
              Custospark
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-3 py-2 text-body-sm rounded-md transition-colors duration-200",
                  location.pathname === link.href
                    ? "text-accent font-semibold"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface-light",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-4">
              <a
                href="https://hub.custospark.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="accent" size="sm">
                  Account
                </Button>
              </a>
            </div>
          </nav>

          <button
            className="lg:hidden p-2 text-text-primary hover:text-accent transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/5 bg-surface">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-md transition-colors",
                  location.pathname === link.href
                    ? "text-accent font-semibold bg-surface-light"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface-light",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <a
                href="https://hub.custospark.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button variant="accent" size="md" className="w-full">
                  Account
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
