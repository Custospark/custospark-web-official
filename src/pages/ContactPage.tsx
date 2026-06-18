import { useEffect, useState, useRef } from "react";
import {
  Mail, Phone, MapPin, HelpCircle, Info,
  ChevronDown, Globe, Users, Map,
} from "lucide-react";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { COMPANY } from "@/lib/constants";

const faqs = [
  { question: "What does Custospark build?", answer: "We build and operate software products like Custosell (retail POS) and Custocare (healthcare platform), and develop custom software for companies, organisations, and individuals." },
  { question: "How is Custosell different from other POS systems?", answer: "Custosell works offline. When your internet goes down, your business keeps running. Sales, inventory, and customer data all sync automatically when you're back online." },
  { question: "How is Custocare different from other healthcare platforms?", answer: "Custocare connects the entire patient journey — from registration through clinical care, pharmacy, lab, nursing, and billing — in one system. No more fragmented tools or lost context between departments." },
  { question: "Can Custospark build custom software for my business?", answer: "Yes. Beyond our own products, we develop custom web, mobile, and cloud solutions for businesses that need software built specifically for how they work." },
  { question: "How do I get started with Custosell or Custocare?", answer: "Visit the product website to sign up. For Custosell, go to custosell.com. For Custocare, go to custocare.custospark.com." },
  { question: "Do you offer support for your products?", answer: "Yes. Each product has its own support team. You can also reach us at support@custospark.com and we'll direct you to the right team." },
  { question: "Can Custospark help if I already have software but need improvements?", answer: "Yes. We take on existing projects too — whether you need new features, a redesign, or help scaling what you already have." },
  { question: "Where is Custospark based?", answer: "We're headquartered in Kampala, Uganda and operate as a remote-first company with team members across different countries." },
];

export function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet/dist/leaflet.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet/dist/leaflet.js";
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const L = (window as any).L;
      if (L && mapRef.current) {
        const map = L.map(mapRef.current).setView([0.3136, 32.5811], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map);
        const marker = L.marker([0.3136, 32.5811]).addTo(map);
        marker.bindPopup("<b>Custospark Headquarters</b><br>Kampala, Uganda").openPopup();
      }
    };
    document.body.appendChild(script);

    return () => {
      if (link.parentNode) link.parentNode.removeChild(link);
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Contact Us Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-primary via-black to-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/20 border border-accent/30 text-accent text-body-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Get in Touch
            </span>
            <h1 className="font-heading text-h1 text-white mb-4">
              Need Software? Let's Talk.
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Whether you're interested in Custosell, Custocare, or custom software for your business — send us a message and we'll point you to the right team.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl text-white space-y-4">
              <div className="text-center">
                <p className="text-2xl font-semibold mb-2 flex items-center justify-center gap-3">
                  <Phone size={24} />{COMPANY.SUPPORT_PHONE}
                </p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center justify-center gap-2"><Mail size={14} className="text-blue-300" /><span className="text-white/50 mr-1">General:</span>info@custospark.com</p>
                  <p className="flex items-center justify-center gap-2"><Mail size={14} className="text-blue-300" /><span className="text-white/50 mr-1">Partners:</span>partners@custospark.com</p>
                  <p className="flex items-center justify-center gap-2"><Mail size={14} className="text-blue-300" /><span className="text-white/50 mr-1">Teams:</span>teams@custospark.com</p>
                </div>
                  <p className="mt-3 text-sm flex items-center justify-center gap-2">
                    <MapPin size={14} className="text-red-400" />{COMPANY.HQ}
                  </p>
                  <p className="mt-6 text-xs italic text-gray-300">
                    For Custosell support, visit custosell.com. For Custocare, visit custocare.custospark.com.
                  </p>

                  <hr className="my-5 border-white/20" />
                  <p className="text-sm font-semibold mb-3">Follow Us</p>
                  <div className="flex justify-center gap-4">
                    <a href="https://wa.me/256756697871" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 text-2xl" aria-label="WhatsApp"><FaWhatsapp /></a>
                    <a href="https://www.facebook.com/custospark" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-2xl" aria-label="Facebook"><FaFacebook /></a>
                    <a href="https://www.youtube.com/@Custospark" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 text-2xl" aria-label="YouTube"><FaYoutube /></a>
                    <a href="https://www.tiktok.com/@Custospark" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 text-2xl" aria-label="TikTok"><FaTiktok /></a>
                    <a href="https://www.instagram.com/Custospark" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 text-2xl" aria-label="Instagram"><FaInstagram /></a>
                    <a href="https://x.com/Custospark" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-2xl" aria-label="X"><FaXTwitter /></a>
                    <a href="https://www.linkedin.com/company/custospark" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-2xl" aria-label="LinkedIn"><FaLinkedin /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Location Section */}
      <section id="location" className="py-16 bg-gradient-to-bl from-primary via-black to-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <h2 className="font-heading text-h1 text-white mb-6 flex justify-center items-center gap-3">
            <MapPin size={36} className="text-yellow-400" /> Our Location
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-white/70 leading-relaxed bg-white/5 backdrop-blur-md p-4 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
                <Map size={16} className="inline mr-2" />
                We're headquartered in <strong>Kampala, Uganda</strong>, at the heart of Africa's burgeoning tech scene. As a strategic hub, we're positioned to tap into the immense growth potential of the African market—one of the most dynamic and untapped regions globally.
              </p>
              <p className="text-lg text-white/70 leading-relaxed mt-6 bg-white/5 backdrop-blur-md p-4 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
                <Users size={16} className="inline mr-2" />
                Custospark operates as a <strong>remote-first</strong> company with a global, diverse team. We are leveraging cutting-edge technology and global collaboration to scale rapidly and meet our clients' needs worldwide.
              </p>
              <p className="text-lg text-white/70 leading-relaxed mt-6 font-semibold bg-white/5 backdrop-blur-md p-4 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
                <Globe size={16} className="inline mr-2" />
                Whether you're an investor looking to partner with a fast-growing company or a collaborator seeking innovative tech solutions, <strong>Custospark is here for you</strong>. Let's join forces to make a global impact.
              </p>
            </div>
            <div className="relative">
              <div ref={mapRef} style={{ height: "450px", borderRadius: "12px", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gradient-to-bl from-primary via-black to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-heading text-h1 text-white mb-6 flex justify-center items-center gap-3">
            <HelpCircle size={36} />
            <span>Frequently Asked Questions</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mx-auto max-w-2xl mb-10 flex justify-center items-center gap-2">
            <Info size={16} className="shrink-0" />
            <span>
              We've compiled the most common questions about Custospark, our cutting-edge solutions, and our dynamic partnership model.
              If you need further information, our team is always here to help!
            </span>
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none focus:ring focus:ring-blue-300 transition duration-300 hover:bg-blue-100"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-gray-600 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`px-6 py-4 border-t border-gray-200 transition-all duration-300 overflow-hidden ${
                    openFaq === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
