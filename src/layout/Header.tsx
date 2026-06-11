import { useState, useEffect } from "react";
import { Menu, X, Home, Briefcase, Package, Mail, Info, Users, TrendingUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { navLinks } from "@/lib/constants";
import { Link, useLocation } from "react-router-dom";
import { LogoImage } from "@/components/LogoImage";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Home, Briefcase, Package, Mail, Info,
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileConnectOpen, setMobileConnectOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isConnectActive = location.pathname === "/careers" || location.pathname === "/investors";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-primary border-b transition-all duration-300",
        scrolled
          ? "border-blue-600 shadow-lg h-14 md:h-16"
          : "border-blue-600 h-16 md:h-20",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center gap-2 group">
            <LogoImage size="sm" className="md:h-9" />
            <span className="font-heading font-bold text-lg md:text-xl text-white">
              Custospark
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = iconMap[link.icon];
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "px-3 py-2 text-body-sm rounded-md transition-all duration-200 flex items-center gap-1.5",
                    isActive
                      ? "text-yellow-400 font-bold bg-yellow-400/15"
                      : "text-white/80 hover:text-white hover:bg-white/10",
                  )}
                >
                  {Icon && <Icon size={16} />}
                  {link.label}
                </Link>
              );
            })}

            {/* Connect Dropdown - Desktop */}
            <div className="relative group">
              <button
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 text-body-sm rounded-md transition-all duration-200",
                  isConnectActive
                    ? "text-yellow-400 font-bold bg-yellow-400/15"
                    : "text-white/80 hover:text-white hover:bg-white/10",
                )}
              >
                <Users size={16} />
                Connect
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-1 w-48 bg-white text-blue-900 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-2">
                <Link
                  to="/careers"
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md transition text-sm",
                    location.pathname === "/careers"
                      ? "bg-orange-100 font-semibold text-orange-700"
                      : "hover:bg-orange-100",
                  )}
                >
                  <Briefcase size={16} className="text-green-500" />
                  Careers
                </Link>
                <Link
                  to="/investors"
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md transition text-sm",
                    location.pathname === "/investors"
                      ? "bg-indigo-100 font-semibold text-indigo-700"
                      : "hover:bg-orange-100",
                  )}
                >
                  <TrendingUp size={16} className="text-indigo-500" />
                  Investors
                </Link>
              </div>
            </div>
          </nav>

          <button
            className="lg:hidden p-2 text-white hover:text-white/80 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile panel - slides from right */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-4/5 max-w-sm z-50 bg-primary transform transition-transform duration-300 ease-in-out lg:hidden overflow-auto",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <span className="font-heading font-bold text-lg text-white">Menu</span>
          <button onClick={() => setMobileOpen(false)} className="text-white hover:text-white/80 transition-colors">
            <X size={24} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navLinks.map((link) => {
            const Icon = iconMap[link.icon];
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 rounded-md transition-all duration-200 text-white font-medium",
                  isActive
                    ? "text-yellow-400 font-bold bg-yellow-400/15"
                    : "text-white/90 hover:bg-white/10",
                )}
              >
                {Icon && <Icon size={18} />}
                {link.label}
              </Link>
            );
          })}

          {/* Connect Dropdown - Mobile */}
          <div>
            <button
              onClick={() => setMobileConnectOpen(!mobileConnectOpen)}
              className={cn(
                "flex items-center justify-between w-full px-4 py-3 rounded-md transition-all duration-200",
                isConnectActive
                  ? "text-yellow-400 font-bold bg-yellow-400/15"
                  : "text-white/90 hover:bg-white/10",
              )}
            >
              <span className="flex items-center gap-2">
                <Users size={18} />
                Connect
              </span>
              <ChevronDown
                size={16}
                className={cn(
                  "transition-transform duration-200",
                  mobileConnectOpen && "rotate-180",
                )}
              />
            </button>
            {mobileConnectOpen && (
              <div className="pl-6 mt-1 space-y-1">
                <Link
                  to="/careers"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-md transition-colors text-white/80 hover:bg-white/10 text-sm",
                    location.pathname === "/careers" && "text-yellow-400 font-semibold bg-yellow-400/15",
                  )}
                >
                  <Briefcase size={16} className="text-green-300" />
                  Careers
                </Link>
                <Link
                  to="/investors"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-md transition-colors text-white/80 hover:bg-white/10 text-sm",
                    location.pathname === "/investors" && "text-white font-semibold bg-white/10",
                  )}
                >
                  <TrendingUp size={16} className="text-blue-300" />
                  Investors
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
