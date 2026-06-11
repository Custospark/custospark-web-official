import { Link } from "react-router-dom";
import { Info, Settings, Mail, FileText, Shield, Briefcase, Users, HelpCircle, Facebook, Twitter, Linkedin, Instagram, Building, MapPin } from "lucide-react";
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
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-5">
            <a href="mailto:support@custospark.com" className="hover:text-blue-200 text-xl" aria-label="Email"><Mail size={24} /></a>
            <a href="#" className="hover:text-blue-200 text-xl" aria-label="Facebook"><Facebook size={24} /></a>
            <a href="#" className="hover:text-blue-200 text-xl" aria-label="Twitter"><Twitter size={24} /></a>
            <a href="#" className="hover:text-blue-200 text-xl" aria-label="LinkedIn"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-blue-200 text-xl" aria-label="Instagram"><Instagram size={24} /></a>
          </div>

        </div>
      </div>
    </footer>
  );
}
