import type { NavLink, Service, Industry, Testimonial, AppProduct } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    title: "Custom Software",
    description: "Bespoke solutions designed for your business needs.",
    icon: "settings",
    href: "/services",
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
    title: "Consulting",
    description: "Expert advice to align technology with your strategy.",
    icon: "users",
    href: "/services",
  },
  {
    title: "AI & Automation",
    description: "Intelligent automation and AI-powered solutions.",
    icon: "bot",
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
    name: "Sarah L.",
    title: "CEO, HealthSync",
    text: "Thanks to Custospark's innovative tech solutions, we automated processes that once took us weeks, cutting our operational costs by 30%.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "James K.",
    title: "CTO, LogiTrack",
    text: "Custospark's ability to execute complex visions with unmatched speed has taken our business to the next level. We've seen a 40% increase in efficiency.",
    avatar: "https://i.pravatar.cc/100?img=24",
  },
  {
    name: "Emily R.",
    title: "Founder, EduGrowth",
    text: "Reliable, innovative, and always ahead of the curve. Custospark is helping us disrupt the market.",
    avatar: "https://i.pravatar.cc/100?img=36",
  },
  {
    name: "Michael T.",
    title: "Product Manager, GreenTech",
    text: "With Custospark's state-of-the-art tools, we've increased our product launch speed by 50%.",
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
