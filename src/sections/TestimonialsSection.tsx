import { useState, useEffect } from "react";
import { testimonials } from "@/lib/constants";
import { Quote } from "lucide-react";

function getInitials(name: string) {
 const parts = name.split(" ").filter((p) => p.length > 0 && !p.endsWith("."));
 return parts.map((p) => p[0]).join("").slice(0, 2).toUpperCase();
}

export function TestimonialsSection() {
 const [index, setIndex] = useState(0);
 const [fading, setFading] = useState(false);

 useEffect(() => {
 const interval = setInterval(() => {
 setFading(true);
 setTimeout(() => {
 setIndex((prev) => (prev + 1) % testimonials.length);
 setFading(false);
 }, 500);
 }, 5000);
 return () => clearInterval(interval);
 }, []);

 const t = testimonials[index];

 return (
 <section id="testimonials" className="py-section bg-white border-y border-border">
 <div className="max-w-7xl mx-auto px-4 md:px-8">
 <div className="text-center max-w-3xl mx-auto">
 <p className="text-caption font-semibold tracking-[0.12em] uppercase text-primary mb-3">Testimonials</p>
 <h2 className="font-heading text-h2 text-ink mb-3">Trusted by Healthcare & Retail Teams</h2>
 <p className="text-text-secondary text-body-lg mb-10 leading-relaxed">
 Hear from the clinics, hospitals, and retail businesses using Custocare and Custosell every day.
 </p>

 <div
 className={`transition-opacity duration-500 ${
 fading ? "opacity-0" : "opacity-100"
 }`}
 >
 <Quote size={32} className="text-border-strong mx-auto mb-6" />
 <div className="w-16 h-16 rounded-full mx-auto mb-4 border border-border bg-primary-soft text-primary font-bold text-lg flex items-center justify-center">
 {getInitials(t.name)}
 </div>
 <p className="text-body-lg italic text-ink mb-4 max-w-2xl mx-auto leading-relaxed">
 &ldquo;{t.text}&rdquo;
 </p>
 <p className="font-heading font-semibold text-ink">
 {t.name}
 <span className="text-text-muted text-body-sm font-normal"> - {t.title}</span>
 </p>
 </div>
 </div>
 </div>
 </section>
 );
}
