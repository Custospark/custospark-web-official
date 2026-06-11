import { useState, useEffect, useRef } from "react";
import { Briefcase, Info, CheckCircle, ChevronDown } from "lucide-react";

const steps = [
  { step: 1, title: "Submit Your Application", desc: "Click the Apply button and follow the next steps. You'll be required to create an account to track your application status and updates. Upload your resume or portfolio to complete the process." },
  { step: 2, title: "Initial Review", desc: "Our hiring team evaluates your application to ensure it aligns with the role and company values." },
  { step: 3, title: "Introductory Call", desc: "Have an informal chat with a team member to learn about each other." },
  { step: 4, title: "Skill Assessment", desc: "For certain roles, you'll complete a technical task or challenge that reflects the job requirements." },
  { step: 5, title: "Final Interview", desc: "Meet the team you'll collaborate with and dive deeper into your fit for the role." },
  { step: 6, title: "Offer & Onboarding", desc: "If it's a match, we'll send you an offer and kickstart your journey at Custospark!" },
];

const perks = [
  { icon: "🏠", title: "Remote Work", desc: "Work from wherever you're most productive — home, café, or beach." },
  { icon: "🕐", title: "Flexible Hours", desc: "We focus on outcomes, not hours. Design your own schedule." },
  { icon: "📚", title: "Learning Budget", desc: "We support growth with a dedicated budget for courses, books & tools." },
  { icon: "❤️", title: "Paid Time Off", desc: "Rest matters. Enjoy generous vacation and personal time off." },
  { icon: "✈️", title: "Team Retreats", desc: "Join us in beautiful destinations to connect, recharge, and plan." },
  { icon: "⚡", title: "Mentorship & Growth", desc: "Work closely with industry pros and grow faster than ever." },
  { icon: "💎", title: "Equity Opportunities", desc: "Be a part-owner of what you help build — we grow together." },
  { icon: "💰", title: "Competitive Pay", desc: "We offer industry-leading compensation and regular performance reviews." },
  { icon: "💪", title: "Health & Wellness", desc: "Enjoy access to health insurance, fitness stipends, and wellness programs." },
  { icon: "🌍", title: "Diversity & Inclusion", desc: "Be part of a diverse team that celebrates individuality and collaboration." },
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
      {/* Jobs Section */}
      <section id="open-roles" className="relative py-28 bg-gradient-to-bl from-primary via-black to-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.15),transparent_40%)]" style={{ filter: "blur(72px)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-h1 text-white font-extrabold tracking-tight">Join Our Team</h2>
            <p className="text-lg mt-5 max-w-2xl mx-auto text-white/80 leading-relaxed">
              Explore current roles and take the next step in your journey. Become part of <span className="text-yellow-300 font-semibold">Custospark</span>'s innovation wave.
            </p>
            <div className="mt-6">
              <a href="#application-process" className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-200 transition duration-300">
                See How to Apply
              </a>
            </div>
          </div>
          <div className="text-center text-white/80 text-lg font-medium">
            <Info size={20} className="inline mr-2" />
            No open roles available at the moment. Please check back later.
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section id="application-process" className="relative py-28 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.2),transparent_40%),radial-gradient(circle_at_90%_90%,rgba(255,255,255,0.15),transparent_40%)]" style={{ filter: "blur(72px)" }} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-h1 text-white font-extrabold">Your Path to Joining Custospark</h2>
            <p className="text-xl mt-6 max-w-3xl mx-auto text-white/80 leading-relaxed">
              We've designed our application process to be transparent, efficient, and welcoming. Here's how you can take the first step toward becoming part of our innovative team.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 via-pink-500 to-blue-600 rounded-full shadow-lg z-0 hidden md:block" />

            <div className="space-y-24">
              {steps.map((step, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div key={step.step} className="flex flex-col md:flex-row items-center md:items-start relative group">
                    <div className={`w-full md:w-1/2 ${isLeft ? "md:pl-12 order-2" : "md:pr-12 order-2 md:order-1"}`}>
                      <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl transition-all duration-500 hover:scale-[1.02]" style={{ perspective: "1000px" }}>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                            {step.step}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                            <p className="text-white/80 mt-2 text-base leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white/30 backdrop-blur-xl border border-white/20 rounded-full z-10 shadow-lg hidden md:block" />
                    <div className={`hidden md:block w-1/2 ${isLeft ? "order-1" : "order-3"}`} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-24 text-center">
            <a href="#perks-benefits" className="inline-block bg-white text-blue-800 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-500 transition-transform hover:scale-105 shadow-lg">
              Explore the benefits of working with us.
            </a>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section id="perks-benefits" className="relative py-28 bg-gradient-to-bl from-primary via-black to-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.2),transparent_40%),radial-gradient(circle_at_90%_90%,rgba(255,255,255,0.15),transparent_40%)]" style={{ filter: "blur(72px)" }} />
        <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-h1 text-white font-extrabold">Why You'll Love Working Here</h2>
            <p className="text-xl mt-6 max-w-3xl mx-auto text-white/80 leading-relaxed">
              At <span className="text-yellow-300 font-semibold">Custospark</span>, we're dedicated to supporting our people both professionally and personally. Explore benefits that help you thrive at every stage of life.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 via-pink-500 to-blue-600 rounded-full shadow-lg z-0 hidden md:block" />
            <div className="space-y-24">
              {perks.map((perk, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div key={perk.title} className="flex flex-col md:flex-row items-center md:items-start relative group">
                    <div className={`w-full md:w-1/2 ${isLeft ? "md:pl-12 order-2" : "md:pr-12 order-2 md:order-1"}`}>
                      <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                        <div className="flex items-center gap-6">
                          <div className="w-16 h-16 bg-gradient-to-b from-yellow-300 to-pink-600 text-white rounded-full flex items-center justify-center text-3xl shadow-xl shrink-0">
                            {perk.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{perk.title}</h3>
                            <p className="text-white/80 mt-2 text-base leading-relaxed">{perk.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white/30 backdrop-blur-xl border border-white/20 rounded-full z-10 shadow-lg hidden md:block" />
                    <div className={`hidden md:block w-1/2 ${isLeft ? "order-1" : "order-3"}`} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-24 text-center">
            <a href="#faqs" className="inline-block bg-white text-blue-500 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-black hover:text-blue-500 transition-transform hover:scale-105 shadow-lg">
              Explore commonly asked questions →
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20 bg-gradient-to-bl from-primary via-black to-primary text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-h1 text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-white/70 mt-6 max-w-3xl mx-auto leading-relaxed">
              Curious about life at <span className="text-yellow-300 font-semibold">Custospark</span>? We've gathered the answers to the most common questions right here.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {careersFaqs.map((faq, i) => (
              <div key={i} className="bg-white/10 backdrop-blur border border-white/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left transition duration-300 hover:bg-white/5"
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-yellow-300 transition-transform duration-300 shrink-0 ml-4 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`px-6 transition-all duration-300 overflow-hidden ${
                    openFaq === i ? "pb-4 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="#open-roles" className="inline-block bg-black text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-500 transition-transform hover:scale-105 shadow-lg">
              Alright. Start your application now →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
