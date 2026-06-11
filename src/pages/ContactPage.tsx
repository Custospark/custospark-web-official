import { useEffect, useState, useRef } from "react";
import {
  Mail, Send, Phone, MapPin, User, MessageSquare, HelpCircle, Info,
  ChevronDown, Globe, Users, Map,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

const faqs = [
  { question: "What is Custospark?", answer: "Custospark is a technology-driven company empowering entrepreneurs with innovative software solutions across industries like education, healthcare, logistics, and finance." },
  { question: "What is Custosell?", answer: "Custosell is our flagship product—a comprehensive eCommerce platform that enables businesses to manage online stores, sell products, and scale with ease." },
  { question: "Who can use Custosell?", answer: "Designed for entrepreneurs and business owners in any industry, Custosell is versatile enough for restaurants, retail, healthcare, education, and more." },
  { question: "How can I get started with Custosell?", answer: "Signing up is simple! Register, create your business profile, add products or services, and start selling. We also offer easy-to-follow tutorials to guide you." },
  { question: "Do I need technical skills to use Custosell?", answer: "Not at all. Our platform is crafted for simplicity, so even non-technical users can navigate and maximize its features. Plus, our support team is always available." },
  { question: "Can I manage multiple businesses on Custosell?", answer: "Yes. Custosell lets you seamlessly switch between different business profiles all from one account." },
  { question: "Is Custosell mobile-friendly?", answer: "Absolutely—our fully responsive design ensures access and functionality on desktops, tablets, or smartphones." },
  { question: "How secure is my data on Custosell?", answer: "We take your data security seriously, using industry-standard encryption and robust protocols to protect your information every step of the way." },
  { question: "Can I integrate third-party tools with Custosell?", answer: "Yes, we offer flexible integrations for payments, marketing, analytics, and more, so you can tailor Custosell perfectly to your business." },
  { question: "Does Custospark provide support?", answer: "Our dedicated support team is committed to your success; we're here to help if you encounter any issues or have questions along the way." },
  { question: "What is the cost of using Custosell?", answer: "Custosell offers various pricing plans to suit businesses of all sizes. Check out our pricing page for comprehensive information on our basic and premium packages." },
  { question: "How can I become a partner with Custospark?", answer: "We're excited to collaborate with like-minded innovators and investors. Contact us directly if you're interested in forging a partnership." },
  { question: "Does Custospark have a mobile app?", answer: "Currently, we are a web-based platform, but we're actively developing mobile app solutions to enhance your experience even further." },
  { question: "How can I invest in Custospark?", answer: "If investing in Custospark interests you, please reach out to us via our contact page. We're always open to discussing future growth and collaboration." },
  { question: "Where is Custospark located?", answer: "Headquartered in Kampala, Uganda, Custospark sits at the heart of Africa's burgeoning tech scene. We're proud to operate as a remote-first, global company." },
  { question: "How do I contact Custospark's support team?", answer: "You can contact our support team via our contact page or directly through the help section on the platform. We're here to assist you!" },
  { question: "Can I try Custosell before purchasing?", answer: "Yes, we offer a free trial for Custosell so you can explore the features and see how it works for your business before committing to a plan." },
];

export function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
      if ((window as any).L && mapRef.current) {
        const L = (window as any).L;
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name.trim()) { alert("Please enter your name."); return; }
    if (!email.trim()) { alert("Please enter your email."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) { alert("Please enter a valid email address."); return; }
    if (!message.trim()) { alert("Please enter your message."); return; }
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* Contact Us Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-primary via-black to-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-h1 text-white flex items-center justify-center gap-4">
              <Mail size={36} className="text-white/80" />
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              <Send size={16} className="inline mr-2" />
              Whether you're an investor, collaborator, or someone with a bold new idea, we're excited to connect. Reach out and let's create something extraordinary together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Contact Form */}
            <div>
              <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-black border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-black border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div className="relative">
                    <MessageSquare size={18} className="absolute left-3 top-4 text-gray-500" />
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-black border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl text-white space-y-4">
                <div className="text-center">
                  <p className="text-2xl font-semibold mb-2 flex items-center justify-center gap-3">
                    <Phone size={24} />{COMPANY.SUPPORT_PHONE}
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="flex items-center justify-center gap-2"><Mail size={14} className="text-blue-300" />info@custospark.com</p>
                    <p className="flex items-center justify-center gap-2"><Mail size={14} className="text-blue-300" />inquiries@custospark.com</p>
                    <p className="flex items-center justify-center gap-2"><Mail size={14} className="text-blue-300" />investors@custospark.com</p>
                    <p className="flex items-center justify-center gap-2"><Mail size={14} className="text-blue-300" />partners@custospark.com</p>
                    <p className="flex items-center justify-center gap-2"><Mail size={14} className="text-blue-300" />teams@custospark.com</p>
                  </div>
                  <p className="mt-3 text-sm flex items-center justify-center gap-2">
                    <MapPin size={14} className="text-red-400" />{COMPANY.HQ}
                  </p>
                  <p className="mt-6 text-xs italic text-gray-300">
                    We're always available to chat about innovative ideas and partnership opportunities. Your next big breakthrough starts with a conversation.
                  </p>
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
      <section id="faq" className="py-16 bg-gradient-to-bl from-blue-500 via-gray-900 to-blue-500 text-white">
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
