import { useState } from "react";
import {
  ChevronDown, House, Clock3, BookOpen, Heart, Plane, Zap, Gem, Banknote, HeartPulse, Globe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const steps = [
 { step: 1, title: "Submit Your Application", desc: "Click the Apply button and follow the next steps. You'll be required to create an account to track your application status and updates. Upload your resume or portfolio to complete the process." },
 { step: 2, title: "Initial Review", desc: "Our hiring team evaluates your application to ensure it aligns with the role and company values." },
 { step: 3, title: "Introductory Call", desc: "Have an informal chat with a team member to learn about each other." },
 { step: 4, title: "Skill Assessment", desc: "For certain roles, you'll complete a technical task or challenge that reflects the job requirements." },
 { step: 5, title: "Final Interview", desc: "Meet the team you'll collaborate with and dive deeper into your fit for the role." },
 { step: 6, title: "Offer & Onboarding", desc: "If it's a match, we'll send you an offer and kickstart your journey at Custospark!" },
];

const perks: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: House, title: "Remote Work", desc: "Work from wherever you're most productive - home, café, or beach." },
  { icon: Clock3, title: "Flexible Hours", desc: "We focus on outcomes, not hours. Design your own schedule." },
  { icon: BookOpen, title: "Learning Budget", desc: "We support growth with a dedicated budget for courses, books & tools." },
  { icon: Heart, title: "Paid Time Off", desc: "Rest matters. Enjoy generous vacation and personal time off." },
  { icon: Plane, title: "Team Retreats", desc: "Join us in beautiful destinations to connect, recharge, and plan." },
  { icon: Zap, title: "Mentorship & Growth", desc: "Work closely with industry pros and grow faster than ever." },
  { icon: Gem, title: "Equity Opportunities", desc: "Be a part-owner of what you help build - we grow together." },
  { icon: Banknote, title: "Competitive Pay", desc: "We offer industry-leading compensation and regular performance reviews." },
  { icon: HeartPulse, title: "Health & Wellness", desc: "Enjoy access to health insurance, fitness stipends, and wellness programs." },
  { icon: Globe, title: "Diversity & Inclusion", desc: "Be part of a diverse team that celebrates individuality and collaboration." },
];

const careersFaqs = [
 { question: "Can I work remotely at Custospark?", answer: "Absolutely. We're a remote-first company that values trust and flexibility. You can work from anywhere in the world, as long as you have a reliable internet connection and can collaborate effectively with the team." },
 { question: "Do you offer internships or entry-level positions?", answer: "Yes! We welcome early-career talent and offer structured internship programs with mentorship, hands-on projects, and opportunities for full-time conversion based on performance." },
 { question: "What's the hiring process like?", answer: "Our process includes a quick screening, an introductory call, a skill assessment for relevant roles, a final interview with the team, and then an offer if there's a mutual fit. We aim to keep it transparent and respectful of your time." },
 { question: "What kind of growth opportunities are available?", answer: "From mentorship to project leadership and cross-functional collaboration, we support your growth at every stage. We also provide learning budgets for courses, conferences, and certifications." },
 { question: "What benefits and perks do you provide?", answer: "Flexible hours, remote work, wellness stipends, paid time off, equity opportunities, team retreats, and more. We continuously evolve our benefits to support our team's well-being." },
 { question: "What is Custospark's mission and vision?", answer: "Our mission is to transform how businesses scale through innovative technology. Our vision is to become a global leader in innovation by integrating technology and human ingenuity." },
 { question: "Do I need to be based in Uganda to apply?", answer: "Nope. We hire globally. While our headquarters are in Kampala, Uganda, we are a remote-first company with team members across different countries and time zones." },
 { question: "How often will I interact with the team?", answer: "We connect through weekly standups, async tools, and monthly all-hands. Communication is at the heart of how we work, and we ensure everyone stays aligned and included." },
 { question: "Is there a probation period?", answer: "Yes. We have a 3-month probation period that allows both you and Custospark to ensure the role is a great mutual fit. During this time, you'll receive regular feedback and support." },
 { question: "What's your approach to work-life balance?", answer: "We believe great work comes from happy humans. We respect boundaries, encourage time off, and focus on outcomes rather than hours worked." },
];

export function CareersPage() {
 const [openFaq, setOpenFaq] = useState<number | null>(0);

 return (
 <>
 {/* Hero */}
 <section className="py-section bg-ink text-white">
 <div className="max-w-7xl mx-auto px-4 md:px-8">
 <div className="text-center max-w-3xl mx-auto">
 <span className="inline-block bg-primary-soft border border-primary-border text-primary text-body-sm font-semibold px-4 py-1.5 rounded-full mb-4">
 Careers
 </span>
 <h1 className="font-heading text-h1 text-white mb-4">
 Join the Team That Builds Custocare and Custosell
 </h1>
 <p className="text-white/70 text-body-lg">
 We're a small, focused team building software that people use every day. If that sounds like your kind of environment, we'd love to hear from you.
 </p>
 </div>
 </div>
 </section>

 {/* Application Process */}
 <section id="application-process" className="relative py-28 bg-ink text-white overflow-hidden">
 <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
 <div className="text-center mb-20">
 <h2 className="font-heading text-h1 text-white font-extrabold">Your Path to Joining Custospark</h2>
 <p className="text-xl mt-6 max-w-3xl mx-auto text-white/70 leading-relaxed">
 We've designed our application process to be transparent, efficient, and welcoming. Here's how you can take the first step toward becoming part of our innovative team.
 </p>
 </div>

 <div className="relative">
 <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-border rounded-full shadow-lg z-0 hidden md:block" />

  <div className="space-y-8">
  {steps.map((step, i) => {
  const isLeft = i % 2 === 0;
  return (
  <div key={step.step} className="flex flex-col md:flex-row items-center md:items-start relative group">
  <div className={`w-full md:w-1/2 ${isLeft ? "md:pl-8 order-2" : "md:pr-8 order-2 md:order-1"}`}>
  <div className="bg-white border border-border rounded-lg p-6 shadow-card">
  <div className="flex items-start gap-4">
  <div className="w-10 h-10 flex-shrink-0 bg-primary text-white rounded-md flex items-center justify-center font-bold text-lg">
  {step.step}
  </div>
  <div>
  <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
  <p className="text-text-secondary mt-1.5 text-body-sm leading-relaxed">{step.desc}</p>
  </div>
  </div>
  </div>
  </div>
  <div className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-2 border-primary rounded-full z-10 hidden md:block mt-6" />
  <div className={`hidden md:block w-1/2 ${isLeft ? "order-1" : "order-3"}`} />
  </div>
  );
  })}
  </div>
  </div>

  <div className="mt-12 text-center">
  <a href="#perks-benefits" className="inline-block bg-white text-primary border border-border font-semibold px-6 py-3 rounded-md hover:bg-surface-muted transition">
  Explore the benefits of working with us
  </a>
  </div>
 </div>
 </section>

 {/* Perks & Benefits */}
 <section id="perks-benefits" className="relative py-28 bg-ink text-white overflow-hidden">
 <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-8">
 <div className="text-center mb-20">
 <h2 className="font-heading text-h1 text-white font-extrabold">Why You'll Love Working Here</h2>
 <p className="text-xl mt-6 max-w-3xl mx-auto text-white/70 leading-relaxed">
 At <span className="text-primary font-semibold">Custospark</span>, we're dedicated to supporting our people both professionally and personally. Explore benefits that help you thrive at every stage of life.
 </p>
 </div>

 <div className="relative">
 <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-border rounded-full shadow-lg z-0 hidden md:block" />
  <div className="space-y-8">
  {perks.map((perk, i) => {
  const Icon = perk.icon;
  const isLeft = i % 2 === 0;
  return (
  <div key={perk.title} className="flex flex-col md:flex-row items-center md:items-start relative group">
  <div className={`w-full md:w-1/2 ${isLeft ? "md:pl-8 order-2" : "md:pr-8 order-2 md:order-1"}`}>
  <div className="bg-white border border-border rounded-lg p-6 shadow-card">
  <div className="flex items-center gap-4">
  <div className="w-10 h-10 bg-primary-soft border border-primary-border text-primary rounded-md flex items-center justify-center shrink-0">
  <Icon size={20} />
  </div>
  <div>
  <h3 className="text-lg font-semibold text-ink">{perk.title}</h3>
  <p className="text-text-secondary mt-1 text-body-sm leading-relaxed">{perk.desc}</p>
  </div>
  </div>
  </div>
  </div>
  <div className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-2 border-primary rounded-full z-10 hidden md:block mt-6" />
  <div className={`hidden md:block w-1/2 ${isLeft ? "order-1" : "order-3"}`} />
  </div>
  );
  })}
  </div>
  </div>

  <div className="mt-12 text-center">
  <a href="#faqs" className="inline-block bg-white text-primary border border-border font-semibold px-6 py-3 rounded-md hover:bg-surface-muted transition">
  Explore commonly asked questions →
  </a>
  </div>
 </div>
 </section>

 {/* FAQs */}
 <section id="faqs" className="py-20 bg-ink text-white">
 <div className="max-w-6xl mx-auto px-4 md:px-8">
 <div className="text-center mb-12">
 <h2 className="font-heading text-h1 text-white">Frequently Asked Questions</h2>
 <p className="text-xl text-white/70 mt-6 max-w-3xl mx-auto leading-relaxed">
 Curious about life at <span className="text-primary font-semibold">Custospark</span>? We've gathered the answers to the most common questions right here.
 </p>
 </div>

  <div className="max-w-3xl mx-auto space-y-3">
  {careersFaqs.map((faq, i) => (
  <div key={i} className="bg-white border border-border rounded-lg overflow-hidden">
  <button
  onClick={() => setOpenFaq(openFaq === i ? null : i)}
  className="w-full flex justify-between items-center px-6 py-4 text-left transition-colors hover:bg-surface-muted"
  >
  <h3 className="text-body font-semibold text-ink pr-4">{faq.question}</h3>
  <ChevronDown
  size={20}
  className={`text-text-muted transition-transform duration-300 shrink-0 ${openFaq === i ? "rotate-180" : ""}`}
  />
  </button>
  <div
  className={`px-6 transition-all duration-300 overflow-hidden border-t border-border ${
  openFaq === i ? "py-4 max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-transparent"
  }`}
  >
  <p className="text-text-secondary leading-relaxed text-body-sm">{faq.answer}</p>
  </div>
  </div>
  ))}
  </div>

  <div className="mt-12 text-center border-t border-ink-light pt-10">
  <p className="text-white/70 text-body mb-6">
  Don't see a role but think you'd be a good fit? We'd still love to hear from you.
  </p>
  <a href="/contact" className="inline-block bg-white text-primary border border-border font-semibold px-6 py-3 rounded-md hover:bg-surface-muted transition">
  Get in Touch
  </a>
  </div>
 </div>
 </section>
 </>
 );
}
