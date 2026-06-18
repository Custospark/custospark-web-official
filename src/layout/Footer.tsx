import { Link } from "react-router-dom";
import { Info, Settings, Mail, Phone, FileText, Shield, Briefcase, Users, HelpCircle, Building, MapPin } from "lucide-react";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { COMPANY } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary via-black to-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Logo and Links Section */}
        <div className="flex flex-wrap justify-between items-start mb-12">

          {/* Logo and Company Summary */}
          <div className="mb-8 md:mb-0">
            <img src="/custospark-logo-footer.png" alt="Custospark Logo" className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mb-4" />
            <h2 className="text-xl font-semibold">Custospark Company Ltd</h2>
            <p className="text-sm italic">PowerHouse of Innovations.</p>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-blue-200 no-underline flex items-center gap-2">
                  <Info size={16} />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-200 no-underline flex items-center gap-2">
                  <Settings size={16} />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-200 no-underline flex items-center gap-2">
                  <Mail size={16} />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="hover:text-blue-200 no-underline flex items-center gap-2">
                  <FileText size={16} />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-200 no-underline flex items-center gap-2">
                  <Shield size={16} />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-blue-200 no-underline flex items-center gap-2">
                  <Briefcase size={16} />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-blue-200 no-underline flex items-center gap-2">
                  <Users size={16} />
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-blue-200 no-underline flex items-center gap-2">
                  <HelpCircle size={16} />
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Contact and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-blue-400 pt-6">

          {/* Contact Info */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm flex items-center gap-2 justify-center md:justify-start">
              <Building size={16} />
              Company Registration No: {COMPANY.REGISTRATION_NUMBER}
            </p>
            <p className="text-sm flex items-center gap-2 justify-center md:justify-start mt-1">
              <MapPin size={16} />
              {COMPANY.POSTAL_ADDRESS}
            </p>
            <p className="text-sm flex items-center gap-2 justify-center md:justify-start mt-1">
              <Mail size={16} />
              <a href={`mailto:${COMPANY.SUPPORT_EMAIL}`} className="hover:text-blue-200 no-underline">{COMPANY.SUPPORT_EMAIL}</a>
            </p>
            <p className="text-sm flex items-center gap-2 justify-center md:justify-start mt-1">
              <Phone size={16} />
              <a href="tel:+256756697871" className="hover:text-blue-200 no-underline">+256 756 697 871</a>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-5">
            <a href="mailto:support@custospark.com" className="hover:text-blue-200 text-xl" aria-label="Email"><Mail size={24} /></a>
            <a href="https://wa.me/256756697871" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 text-xl" aria-label="WhatsApp"><FaWhatsapp size={24} /></a>
            <a href="https://www.facebook.com/custospark" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 text-xl" aria-label="Facebook"><FaFacebook size={24} /></a>
            <a href="https://www.youtube.com/@Custospark" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 text-xl" aria-label="YouTube"><FaYoutube size={24} /></a>
            <a href="https://www.tiktok.com/@Custospark" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 text-xl" aria-label="TikTok"><FaTiktok size={24} /></a>
            <a href="https://www.instagram.com/Custospark" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 text-xl" aria-label="Instagram"><FaInstagram size={24} /></a>
            <a href="https://x.com/Custospark" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 text-xl" aria-label="X"><FaXTwitter size={24} /></a>
            <a href="https://www.linkedin.com/company/custospark" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 text-xl" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
          </div>

        </div>
      </div>
    </footer>
  );
}
