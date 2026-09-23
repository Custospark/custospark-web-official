import { Link } from "react-router-dom";
import { Info, Settings, Mail, Phone, FileText, Shield, Briefcase, Users, HelpCircle, Building, MapPin, GraduationCap } from "lucide-react";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { COMPANY } from "@/lib/constants";

export function Footer() {
 return (
 <footer className="bg-ink text-white py-16 border-t border-ink-light">
 <div className="max-w-7xl mx-auto px-4 md:px-8">

 {/* Logo and Links Section */}
 <div className="flex flex-wrap justify-between items-start mb-12">

 {/* Logo and Company Summary */}
 <div className="mb-8 md:mb-0">
 <img src="/custospark-logo-footer.png" alt="Custospark Logo" className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mb-4 border border-ink-light" />
 <h2 className="text-xl font-semibold">Custospark Company Ltd</h2>
 <p className="text-sm text-white/60 italic">PowerHouse of Innovations.</p>
 </div>

 {/* Quick Links */}
 <div className="mb-8 md:mb-0">
 <h4 className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-4">Quick Links</h4>
 <ul className="space-y-2.5">
 <li>
 <Link to="/about" className="text-white/70 hover:text-white text-body-sm no-underline flex items-center gap-2 transition-colors">
 <Info size={16} />
 About Us
 </Link>
 </li>
 <li>
 <Link to="/services" className="text-white/70 hover:text-white text-body-sm no-underline flex items-center gap-2 transition-colors">
 <Settings size={16} />
 Services
 </Link>
 </li>
 <li>
 <a href="https://academy.custospark.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white text-body-sm no-underline flex items-center gap-2 transition-colors">
 <GraduationCap size={16} />
 Academy
 </a>
 </li>
 <li>
 <Link to="/contact" className="text-white/70 hover:text-white text-body-sm no-underline flex items-center gap-2 transition-colors">
 <Mail size={16} />
 Contact Us
 </Link>
 </li>
 </ul>
 </div>

 {/* Resources */}
 <div>
 <h4 className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-4">Resources</h4>
 <ul className="space-y-2.5">
 <li>
 <Link to="/terms" className="text-white/70 hover:text-white text-body-sm no-underline flex items-center gap-2 transition-colors">
 <FileText size={16} />
 Terms of Service
 </Link>
 </li>
 <li>
 <Link to="/privacy" className="text-white/70 hover:text-white text-body-sm no-underline flex items-center gap-2 transition-colors">
 <Shield size={16} />
 Privacy Policy
 </Link>
 </li>
 <li>
 <Link to="/careers" className="text-white/70 hover:text-white text-body-sm no-underline flex items-center gap-2 transition-colors">
 <Briefcase size={16} />
 Careers
 </Link>
 </li>
 <li>
 <Link to="/partners" className="text-white/70 hover:text-white text-body-sm no-underline flex items-center gap-2 transition-colors">
 <Users size={16} />
 Partners
 </Link>
 </li>
 <li>
 <Link to="/help" className="text-white/70 hover:text-white text-body-sm no-underline flex items-center gap-2 transition-colors">
 <HelpCircle size={16} />
 Help Center
 </Link>
 </li>
 </ul>
 </div>
 </div>

 {/* Bottom Contact and Social Media */}
 <div className="flex flex-col md:flex-row justify-between items-center border-t border-ink-light pt-8">

 {/* Contact Info */}
 <div className="text-center md:text-left mb-6 md:mb-0">
 <p className="text-sm text-white/60 flex items-center gap-2 justify-center md:justify-start">
 <Building size={16} className="text-white/40" />
 Company Registration No: {COMPANY.REGISTRATION_NUMBER}
 </p>
 <p className="text-sm text-white/60 flex items-center gap-2 justify-center md:justify-start mt-1.5">
 <MapPin size={16} className="text-white/40" />
 {COMPANY.POSTAL_ADDRESS}
 </p>
 <p className="text-sm text-white/60 flex items-center gap-2 justify-center md:justify-start mt-1.5">
 <Mail size={16} className="text-white/40" />
 <a href={`mailto:${COMPANY.SUPPORT_EMAIL}`} className="hover:text-white no-underline transition-colors">{COMPANY.SUPPORT_EMAIL}</a>
 </p>
 <p className="text-sm text-white/60 flex items-center gap-2 justify-center md:justify-start mt-1.5">
 <Phone size={16} className="text-white/40" />
 <a href="tel:+256756697871" className="hover:text-white no-underline transition-colors">+256 756 697 871</a>
 </p>
 </div>

 {/* Social Media Icons */}
 <div className="flex flex-wrap justify-center md:justify-end gap-2">
 <a href="mailto:support@custospark.com" className="w-9 h-9 rounded-md border border-ink-light flex items-center justify-center text-white/60 hover:text-white hover:border-border transition-colors" aria-label="Email"><Mail size={18} /></a>
 <a href="https://wa.me/256756697871" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md border border-ink-light flex items-center justify-center text-white/60 hover:text-white hover:border-border transition-colors" aria-label="WhatsApp"><FaWhatsapp size={18} /></a>
 <a href="https://www.facebook.com/custospark" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md border border-ink-light flex items-center justify-center text-white/60 hover:text-white hover:border-border transition-colors" aria-label="Facebook"><FaFacebook size={18} /></a>
 <a href="https://www.youtube.com/@Custospark" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md border border-ink-light flex items-center justify-center text-white/60 hover:text-white hover:border-border transition-colors" aria-label="YouTube"><FaYoutube size={18} /></a>
 <a href="https://www.tiktok.com/@Custospark" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md border border-ink-light flex items-center justify-center text-white/60 hover:text-white hover:border-border transition-colors" aria-label="TikTok"><FaTiktok size={18} /></a>
 <a href="https://www.instagram.com/Custospark" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md border border-ink-light flex items-center justify-center text-white/60 hover:text-white hover:border-border transition-colors" aria-label="Instagram"><FaInstagram size={18} /></a>
 <a href="https://x.com/Custospark" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md border border-ink-light flex items-center justify-center text-white/60 hover:text-white hover:border-border transition-colors" aria-label="X"><FaXTwitter size={18} /></a>
 <a href="https://www.linkedin.com/company/custospark" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md border border-ink-light flex items-center justify-center text-white/60 hover:text-white hover:border-border transition-colors" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
 </div>

 </div>
 </div>
 </footer>
 );
}
