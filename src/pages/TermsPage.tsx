import { motion } from "framer-motion";
import {
  FileText, CheckCircle, Globe, CreditCard, Award, MessageSquare,
  Shield, AlertTriangle, RefreshCw, Gavel, Mail, Lock, Eye, Download,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

const sections = [
  {
    title: "Your Agreement",
    icon: CheckCircle,
    items: [
      "When you sign up or use any of our Services, you confirm that you're at least 18 years old (or have permission from a parent or guardian).",
      "By using our Services, you accept these Terms and our Privacy Policy.",
    ],
  },
  {
    title: "How You Can Use Our Services",
    icon: Globe,
    items: [
      "Please use our Services responsibly and legally.",
      "Don't copy, modify, or resell any part of our Services without written permission.",
      "Keep your login information safe — you're responsible for your account.",
    ],
  },
  {
    title: "Subscriptions and Payments",
    icon: CreditCard,
    items: [
      "Some Services require a paid plan, sometimes with a free trial.",
      "By subscribing, you allow us (or our payment partners) to charge your chosen payment method.",
      "You're free to cancel anytime. Your plan will remain active until the current billing cycle ends.",
    ],
  },
  {
    title: "Intellectual Property",
    icon: Award,
    items: [
      "Everything you see on our platforms — branding, code, designs — belongs to Custospark Company Ltd.",
      "Please don't use it without permission.",
    ],
  },
  {
    title: "What You Share",
    icon: MessageSquare,
    items: [
      "You own any content you upload or submit.",
      "You give us permission to use, store, or display it so we can provide our Services to you.",
    ],
  },
  {
    title: "Account Suspension or Termination",
    icon: Shield,
    items: [
      "If you violate these Terms, we may suspend or deactivate your account without prior notice.",
      "We do this to protect the community and the integrity of our Services.",
    ],
  },
  {
    title: "No Guarantees",
    icon: AlertTriangle,
    items: [
      "While we work hard to make our Services reliable, they're offered 'as is.'",
      "We can't promise they'll always be perfect or available.",
    ],
  },
  {
    title: "Limiting Our Liability",
    icon: Shield,
    items: [
      "We're not liable for indirect or unexpected damages related to your use of our Services.",
      "This includes data loss, downtime, or financial loss.",
    ],
  },
  {
    title: "Updates to These Terms",
    icon: RefreshCw,
    items: [
      "We might update these Terms occasionally. If we do, we'll post the changes here with a new date.",
      "Continuing to use our Services means you accept the changes.",
    ],
  },
  {
    title: "Legal Matters",
    icon: Gavel,
    items: [
      "These Terms follow the laws of the Republic of Uganda.",
      "If there's a dispute, it'll be handled in Ugandan courts.",
    ],
  },
  {
    title: "Talk to Us",
    icon: Mail,
    items: [
      `Email: ${COMPANY.SUPPORT_EMAIL}`,
      `Phone: ${COMPANY.SUPPORT_PHONE}`,
      `${COMPANY.POSTAL_ADDRESS}`,
    ],
  },
];

export function TermsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border bg-blue-50 border-blue-200 text-blue-700 mb-5">
          <FileText className="w-3.5 h-3.5" />
          Terms of Service
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          How Our Platform{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
            Works for You
          </span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          These Terms explain your rights and responsibilities when using any service or platform provided by Custospark Company Ltd.
        </p>
      </motion.div>

      {/* Principles bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="rounded-2xl border-2 border-gray-200 bg-white/80 p-6 mb-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
      >
        {[
          { icon: Lock, title: "Your Data is Yours", desc: "You own your content. We just help you manage it." },
          { icon: Eye, title: "Transparent by Design", desc: "Clear terms. No hidden surprises." },
          { icon: Download, title: "You're in Control", desc: "Cancel anytime. Your data goes with you." },
        ].map((item) => (
          <div key={item.title}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mx-auto mb-3">
              <item.icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-sm text-gray-900 mb-1">{item.title}</h3>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Content sections */}
      <div className="space-y-6 mb-14">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            className="rounded-2xl border-2 border-gray-200 bg-white/80 p-6 sm:p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shrink-0 shadow-md">
                <section.icon className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
            </div>
            <ul className="space-y-2 ml-1">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span className="text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center text-xs text-gray-400 space-y-1"
      >
        <p>Effective Date: January 1, 2025</p>
        <p>
          Questions about these terms? Contact{" "}
          <a href={`mailto:${COMPANY.SUPPORT_EMAIL}`} className="text-blue-600 hover:underline font-medium">
            {COMPANY.SUPPORT_EMAIL}
          </a>
        </p>
      </motion.div>
    </div>
  );
}
