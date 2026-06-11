import type { NavLink, Service, Industry, Testimonial, AppProduct } from "@/types";

export const COMPANY = {
  SUPPORT_EMAIL: "support@custospark.com",
  SUPPORT_PHONE: "+256 756 697 871",
  HQ: "Kampala, Uganda.",
  REGISTRATION_NUMBER: "80034904092035",
  POSTAL_ADDRESS: "P.O Box 183068 Kampala GPO, Uganda.",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", icon: "Home" },
  { label: "Services", href: "/services", icon: "Briefcase" },
  { label: "Products", href: "/products", icon: "Package" },
  { label: "Contact", href: "/contact", icon: "Mail" },
  { label: "About", href: "/about", icon: "Info" },
];

export const services: Service[] = [
  {
    title: "Custom Software",
    description: "Software built specifically for the way you work.",
    icon: "settings",
    href: "/services",
    featured: true,
  },
  {
    title: "Web Development",
    description: "Responsive and scalable websites to enhance your online presence.",
    icon: "globe",
    href: "/services",
  },
  {
    title: "Mobile Development",
    description: "Seamless mobile experiences across iOS and Android platforms.",
    icon: "smartphone",
    href: "/services",
  },
  {
    title: "SaaS Solutions",
    description: "Scalable, cloud-based solutions for modern businesses.",
    icon: "cloud",
    href: "/services",
  },
  {
    title: "AI & Automation",
    description: "Intelligent automation and AI-powered solutions.",
    icon: "bot",
    href: "/services",
  },
  {
    title: "Consulting",
    description: "Expert advice to align technology with your strategy.",
    icon: "users",
    href: "/services",
  },
];

export const industries: Industry[] = [
  { title: "E-Commerce", description: "Boost your online sales with innovative tech.", result: "+30% Conversion Rate" },
  { title: "Healthcare", description: "Driving efficiency & better patient outcomes.", result: "Reduced Wait Times" },
  { title: "Fintech", description: "Secure and efficient financial solutions.", result: "Faster Transactions" },
  { title: "Education", description: "Innovative solutions for modern education.", result: "Improved Learning Outcomes" },
  { title: "Retail", description: "Streamlining retail operations and sales.", result: "Increased Efficiency" },
  { title: "Logistics", description: "Optimizing supply chain and delivery systems.", result: "Improved Delivery Times" },
  { title: "Manufacturing", description: "Modernizing manufacturing with automation.", result: "Reduced Costs" },
  { title: "Hospitality", description: "Enhancing guest experiences through tech.", result: "Higher Satisfaction" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Dr. Grace M.",
    title: "Medical Director, Agape Clinic",
    text: "Custocare transformed how we run our clinic. Patient records, lab results, and pharmacy are now connected in one system. We went from chasing papers to seeing more patients in half the time.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "John K.",
    title: "Owner, Metro Retail Store",
    text: "Custosell saved my business during a network outage that lasted three days. We kept selling, kept tracking inventory, and didn't miss a single transaction. That offline mode is a lifesaver.",
    avatar: "https://i.pravatar.cc/100?img=24",
  },
  {
    name: "Dr. Peter O.",
    title: "Hospital Administrator, St. Mary's",
    text: "We have three facilities and needed one system to connect them all. Custocare made it possible. Referrals between our clinics now carry full patient context, billing is unified, and our team finally works as one.",
    avatar: "https://i.pravatar.cc/100?img=36",
  },
  {
    name: "Grace A.",
    title: "Founder, Grace's Boutique",
    text: "Custosell made inventory management effortless. I know exactly what's in stock, what's selling, and when to reorder — all from my phone. My business has grown 40% since I switched.",
    avatar: "https://i.pravatar.cc/100?img=48",
  },
];

export const products: AppProduct[] = [
  {
    name: "Custosell",
    tagline: "Offline-first POS that never stops selling.",
    description: "A powerful point-of-sale system designed for retail businesses with offline-first capabilities.",
    slug: "custosell",
  },
  {
    name: "Custocare",
    tagline: "Connected healthcare, everywhere.",
    description: "Comprehensive healthcare management platform for clinics and hospitals.",
    slug: "custocare",
  },
  {
    name: "Custolearn",
    tagline: "Learn without limits.",
    description: "Modern learning management system for educational institutions and corporate training.",
    slug: "custolearn",
  },
];
