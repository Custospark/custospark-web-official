import { motion } from "framer-motion";
import {
  Shield, User, Settings, Share2, Lock, UserCheck,
  Clock, Cookie, RefreshCw, CheckCircle, Eye, Download,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

const sections = [
  {
    title: "Information We Collect",
    icon: User,
    items: [
      "Personal Information: Helps us communicate and verify your identity — includes name, email, and contact details.",
      "Account Information: Enables seamless access and billing — such as login details and subscription choices.",
      "Usage Data: Lets us enhance your experience based on how you use the platform — like your device type, actions, and preferences.",
      "Communication Records: Ensures we offer responsive and tailored support when you contact us.",
    ],
  },
  {
    title: "How We Use Your Information",
    icon: Settings,
    items: [
      "To deliver and enhance the services you rely on.",
      "To customize your experience, making it more relevant to your goals.",
      "To manage your subscription and facilitate secure payments.",
      "To keep you informed about updates or respond to your queries.",
      "To protect your account and detect any suspicious activity.",
    ],
  },
  {
    title: "Sharing Your Information",
    icon: Share2,
    items: [
      "We value your trust. That's why we never sell your personal data.",
      "Any information we share with trusted partners is solely to help us serve you better — under strict confidentiality.",
    ],
  },
  {
    title: "Data Security",
    icon: Lock,
    items: [
      "Your peace of mind matters. We employ advanced security technologies and internal policies.",
      "Your data is protected from unauthorized access, breaches, and misuse.",
    ],
  },
  {
    title: "Your Rights",
    icon: UserCheck,
    items: [
      "Review the personal data we have about you.",
      "Correct any information that's outdated or inaccurate.",
      "Request the deletion of your data if no longer necessary.",
      "Control how we communicate with you — including marketing.",
    ],
  },
  {
    title: "Retention",
    icon: Clock,
    items: [
      "We keep your data only for as long as needed to support your use of our Services or meet legal requirements.",
      "No longer than necessary.",
    ],
  },
  {
    title: "Cookies",
    icon: Cookie,
    items: [
      "Cookies help us understand your preferences, so we can provide relevant content and improve performance.",
      "You can control or disable cookies anytime via your browser.",
    ],
  },
  {
    title: "Updates to This Policy",
    icon: RefreshCw,
    items: [
      "We may occasionally update this policy to reflect new features or legal changes.",
      "We'll always post the latest version here, so you're in the loop.",
    ],
  },
];

const faqItems = [
  {
    q: "What personal data does Custospark collect?",
    a: "We collect only what's necessary to provide our services: your name, email, account details, and usage data to help us improve your experience.",
  },
  {
    q: "Does Custospark sell my data to third parties?",
    a: "No. We never sell your personal data. Any information shared with trusted partners is strictly limited to what's needed to operate the service and is covered by confidentiality agreements.",
  },
  {
    q: "How long do you keep my data?",
    a: "We retain your data only as long as needed to provide our services or meet legal requirements. When you close your account, your data is permanently deleted within 30 days.",
  },
  {
    q: "Can I request a copy of my data?",
    a: "Yes. You have the right to request a copy of the personal data we hold about you at any time. Contact us and we'll provide it promptly.",
  },
  {
    q: "How do you handle data breaches?",
    a: "We employ advanced security measures to prevent breaches. In the unlikely event of a breach, we will notify affected users within 72 hours and take immediate remediation steps.",
  },
  {
    q: "Can I delete my account and data?",
    a: "Yes. You can request account deletion at any time. Your data will be permanently erased within 30 days of your request.",
  },
];

export function PrivacyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border bg-blue-50 border-blue-200 text-blue-700 mb-5">
          <Shield className="w-3.5 h-3.5" />
          Privacy Policy
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          Your Privacy Is{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
            Our Priority
          </span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At Custospark, your privacy isn't just a formality — it's part of the service we're proud to offer.
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
          { icon: Lock, title: "Your Data is Yours", desc: "We never sell your personal information." },
          { icon: Eye, title: "Transparent & Clear", desc: "No hidden policies. No surprises." },
          { icon: Download, title: "Full Control", desc: "Access, update, or delete your data anytime." },
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

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.q} className="rounded-xl border-2 border-gray-200 bg-white/80 p-5">
              <h3 className="font-bold text-base text-gray-900 mb-2">{item.q}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center text-xs text-gray-400 space-y-1"
      >
        <p>Effective Date: January 1, 2025</p>
        <p>
          Questions about data privacy? Contact{" "}
          <a href={`mailto:${COMPANY.SUPPORT_EMAIL}`} className="text-blue-600 hover:underline font-medium">
            {COMPANY.SUPPORT_EMAIL}
          </a>
        </p>
      </motion.div>
    </div>
  );
}
