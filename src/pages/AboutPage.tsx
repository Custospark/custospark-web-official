import { Calendar, Code, AlertTriangle, Award, Users, Rocket, History } from "lucide-react";

const timelineData = [
 {
 text: "In <strong>2023</strong>, with an unwavering vision and minimal resources, Custospark was born. In the modest corridors of Makerere University, a single spark was ignited-a spark that would lay the foundation for a revolution in African tech.",
 icon: Calendar,
 side: "left" as const,
 delay: "1s",
 },
 {
 text: "In a cramped university dorm at <strong>Makerere University</strong>, our founder, <strong>Oscar Opiyo</strong>, harnessed his sheer determination. Armed with a second-hand laptop and countless late-night coding sessions, he laid the bedrock of Custospark-a journey that still welcomes bold partners and collaborators.",
 icon: Code,
 side: "right" as const,
 delay: "2s",
 },
 {
 text: "There were trying moments-system crashes, server failures, and moments of deep uncertainty. Yet, each challenge only fueled our resolve to create resilient solutions that stand the test of time.",
 icon: AlertTriangle,
 side: "left" as const,
 delay: "3s",
 },
 {
 text: "What started as freelance gigs and volunteer projects at Makerere soon evolved into a disciplined, scalable approach to building software. Our code became not only functional but also intuitively designed-with the end-user firmly in mind.",
 icon: Code,
 side: "right" as const,
 delay: "4s",
 },
 {
 text: "Rapid early milestones-creating internal platforms that impressed university stakeholders and local entrepreneurs-validated our potential. This critical early feedback set our ambitions soaring.",
 icon: Award,
 side: "left" as const,
 delay: "5s",
 },
 {
 text: "As our vision broadened, so did our network. Custospark grew from a one-man initiative into a vibrant community of innovators-an open invitation for investors and collaborators to join in rewriting the future of tech in Africa.",
 icon: Users,
 side: "right" as const,
 delay: "6s",
 },
 {
 text: 'Our flagship product, <strong>Custosell</strong>, marks a major leap in empowering entrepreneurs through a robust SaaS platform. Yet, it\'s only the beginning. The Custospark team is actively engaged in developing a suite of powerful, complementary applications-each designed to solve real problems and drive meaningful transformation. This expanding ecosystem reflects our deep commitment to innovation and long-term impact in the digital space.',
 icon: Rocket,
 side: "left" as const,
 delay: "7s",
 },
];

const teamData = [
  {
  number: "1",
  name: "Dr. Kamulegeya Grace Bugembe",
  img: "/profiles/grace.jpg",
  role: "Research Advisor, Makerere University",
  bio: "PhD Software Engineering, Makerere University - 16+ years in research, teaching and architecture. Founding President, ProSEIT; leads PESIC; chairs UMA Technology Sector.",
  },
  {
  number: "2",
  name: "Alice Mukabera",
  img: "/profiles/alice.jpg",
  role: "Software Engineer",
  bio: "Full-stack engineer building scalable products across Custospark's portfolio.",
  },
  {
  number: "3",
  name: "Ogwal Richard",
  img: "/profiles/richard.jpg",
  role: "Software Engineer",
  bio: "Versatile developer focused on reliable, clean and scalable platforms.",
  },
  {
  number: "4",
  name: "Oscar Opiyo",
  img: "/profiles/oscar.png",
  role: "Founder & CEO | AI & Technology Corporate Strategist",
  email: "oscar@custospark.com",
  bio: "Founder of Custospark and builder of Custosell. AI & Technology Corporate Strategist helping governments, ministries, companies and institutions leverage AI and technology to reduce operational costs, increase profits and improve efficiency.",
  },
  {
  number: "5",
  name: "Namatove Christine Maria",
  img: "/profiles/christine.jpg",
  role: "Co-Founder & CTO",
  bio: "Leads engineering and product - architecture, performance and user experience.",
  },
  {
  number: "6",
  name: "Angom Joyce Rita",
  img: "/profiles/joyce.png",
  role: "Software Engineer",
  bio: "Full-stack developer - clean code, scalable design, customer-focused solutions.",
  },
];

const valuesData = [
 { number: "1", title: "INNOVATION", desc: "Empowering creativity.", angle: 0, tx: 0, ty: -200 },
 { number: "2", title: "INTEGRITY", desc: "Honesty in action.", angle: 1, tx: 156, ty: -126 },
 { number: "3", title: "RESPECT", desc: "Celebrating every voice.", angle: 2, tx: 195, ty: 45 },
 { number: "4", title: "COLLABORATION", desc: "Shared success.", angle: 3, tx: 87, ty: 180 },
 { number: "5", title: "EXCELLENCE", desc: "Raising the bar.", angle: 4, tx: -86, ty: 180 },
 { number: "6", title: "RESILIENCE", desc: "Strength in adversity.", angle: 5, tx: -195, ty: 45 },
 { number: "7", title: "KINDNESS", desc: "Genuine care.", angle: 6, tx: -156, ty: -126 },
];

const mobileValuesData = [
 { number: "1", title: "INNOVATION", desc: "Empowering creativity." },
 { number: "2", title: "INTEGRITY", desc: "Honesty in action." },
 { number: "3", title: "RESPECT", desc: "Celebrating every voice." },
 { number: "4", title: "KINDNESS", desc: "Genuine care." },
 { number: "5", title: "EXCELLENCE", desc: "Raising the bar." },
 { number: "6", title: "RESILIENCE", desc: "Strength in adversity." },
 { number: "7", title: "COLLABORATION", desc: "Shared success." },
];

export function AboutPage() {
 return (
 <>
 {/* Hero */}
 <section className="py-section bg-ink text-white">
 <div className="max-w-7xl mx-auto px-4 md:px-8">
 <div className="text-center max-w-3xl mx-auto">
 <span className="inline-block bg-primary-soft border border-primary-border text-primary text-body-sm font-semibold px-4 py-1.5 rounded-full mb-4">
 About Custospark
 </span>
 <h1 className="font-heading text-h1 text-white mb-4">
 A Software Company That Builds Products People Rely On
 </h1>
 <p className="text-white/70 text-body-lg">
 From a university dorm room to a portfolio of SaaS products used by businesses across Africa - this is the story of Custospark.
 </p>
 </div>
 </div>
 </section>

 {/* Who We Are */}
 <section className="py-12 bg-ink text-white">
 <div className="max-w-7xl mx-auto text-center px-4 md:px-8">
 <h2 className="font-heading text-h2 text-white mb-4">Who We Are</h2>
 <p className="text-body-lg text-white/70 max-w-3xl mx-auto">
 Custospark is a portfolio company running multiple software as a service products like Custocare &amp; Custosell and at the same time building enterprise grade software for organisations, companies and individuals.
 </p>
 </div>
 </section>

 {/* Vision */}
 <section className="py-16 bg-ink text-white">
 <div className="max-w-7xl mx-auto text-center px-4 md:px-8">
 <h2 className="font-heading text-h1 text-white mb-6">Our Vision</h2>
 <p className="text-body-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
 To become a global leader in innovation by seamlessly integrating technology and human
 ingenuity. Custospark envisions a future where ideas flourish, creativity thrives, and breakthroughs drive
 progress for communities and industries worldwide.
 </p>
 </div>
 </section>

 {/* Mission */}
 <section className="py-16 bg-ink text-white">
 <div className="max-w-7xl mx-auto text-center px-4 md:px-8">
 <h2 className="font-heading text-h1 text-white mb-6">Our Mission</h2>
 <p className="text-body-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
 To revolutionize industries and create a meaningful impact through technology-driven innovation.
 Custospark empowers individuals and teams to transform ideas into actionable solutions, fostering a
 culture of creativity, collaboration, and excellence.
 </p>
 </div>
 </section>

 {/* Values - Desktop */}
 <section className="hidden lg:block relative py-20 bg-black text-white overflow-hidden">
 <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10" style={{ perspective: "1200px" }}>
 <div className="text-center mb-12">
 <h2 className="font-heading text-h1 text-white tracking-tight">
 Our Core Values at <span className="text-white">Custospark</span>
 </h2>
 </div>
 <div className="text-center mb-12">
 <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
 We'll guide you through exciting opportunities at Custospark. Ready to begin? Let's get started!
 </p>
 </div>
 <div className="relative h-[600px] w-full" style={{ transformStyle: "preserve-3d" }}>
 {valuesData.map((v) => (
 <div
 key={v.number}
 className="absolute"
 style={{
 top: "50%",
 left: "50%",
 transform: `translate(-50%, -50%) translate(${v.tx}px, ${v.ty}px)`,
 }}
 >
 <div
 className="  transition-all duration-300 text-center"
 style={{ animationDelay: `${(parseInt(v.number) - 1) * 0.2}s` }}
 >
 <div className="value-number glow-ring mb-3" data-number={v.number} />
 <h3 className="text-xl md:text-2xl font-semibold mb-1">{v.title}</h3>
 <p className="text-sm md:text-base text-text-secondary">{v.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Values - Mobile */}
 <section className="block lg:hidden relative py-12 bg-ink text-white overflow-hidden">
 <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
 <div className="mb-10">
 <h2 className="text-3xl font-bold tracking-tight">
 Our Core Values at <span className="text-white">Custospark</span>
 </h2>
 </div>
 <div className="grid grid-cols-2 gap-6 justify-items-center">
 {mobileValuesData.slice(0, 6).map((v, i) => (
 <div
 key={v.number}
 className="bg-white border border-border p-4 rounded-lg shadow-card text-center"
 style={{ animationDelay: `${i * 0.2}s` }}
 >
 <div className="value-number glow-ring mb-2" data-number={v.number} />
 <h3 className="text-lg font-semibold mb-1">{v.title}</h3>
 <p className="text-xs text-text-secondary">{v.desc}</p>
 </div>
 ))}
 <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 col-span-2 text-center" style={{ animationDelay: "1.2s" }}>
 <div className="value-number glow-ring mb-2" data-number="7" />
 <h3 className="text-lg font-semibold mb-1">COLLABORATION</h3>
 <p className="text-xs text-text-secondary">Shared success.</p>
 </div>
 </div>
 </div>
 </section>

  {/* Founders - Dr Grace as founding advisor for credibility */}
  <section className="py-16 bg-ink text-white">
  <div className="max-w-7xl mx-auto px-4 md:px-8">
  <p className="text-caption font-semibold tracking-[0.12em] uppercase text-white/60 text-center mb-3">Leadership</p>
  <h2 className="font-heading text-h1 text-white mb-3 text-center">Our Founders</h2>
  <p className="text-white/60 text-body text-center max-w-2xl mx-auto mb-10">Research-led, product-driven - combining academic rigour with shipping software.</p>
  <hr className="border-t border-ink-light mb-10" />

  {/* Founder: Dr Grace - lead for credibility */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
  <div className="flex flex-col items-center text-center space-y-4">
  <img src="/profiles/grace.jpg" alt="Dr Kamulegeya Grace Bugembe" className="rounded-full w-48 h-48 object-cover shadow-card border border-ink-light" />
  <div>
  <p className="text-lg font-semibold text-white">Dr. Kamulegeya Grace Bugembe</p>
  <p className="text-sm font-medium tracking-wide uppercase text-primary">Research Advisor, Makerere University</p>
  <p className="text-sm text-white/60">PhD Software Engineering | Founding President, ProSEIT</p>
  </div>
  </div>
  <div>
  <p className="text-body text-white/70 leading-relaxed">
  PhD Software Engineering, 16+ years in research, teaching and architecture. Leads PESIC university-industry pipeline and chairs UMA Technology Sector. Previously PI Mak-RIF COVID-19, Co-PI InnoMak, and lead on World Bank PSFU/GROW grant (~UGX 1B).
  </p>
  </div>
  </div>

  {/* Founder 2: Oscar - AI Strategist */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  <div className="flex flex-col items-center text-center space-y-4">
  <img src="/profiles/oscar.png" alt="Oscar Opiyo" className="rounded-full w-48 h-48 object-cover shadow-card border border-ink-light" />
  <div>
  <p className="text-lg font-semibold text-white">Oscar Opiyo</p>
  <p className="text-sm font-medium tracking-wide uppercase text-primary">Founder & CEO | AI & Technology Corporate Strategist</p>
  </div>
  <a href="mailto:oscar@custospark.com" className="text-sm text-primary hover:text-white">oscar@custospark.com</a>
  </div>
  <div>
  <p className="text-body text-white/70 leading-relaxed">
  Founder of Custospark and builder of Custosell. AI & Technology Corporate Strategist helping governments, ministries, companies and institutions leverage AI and technology to reduce operational costs, increase profits and improve efficiency.
  </p>
  </div>
  </div>

  {/* Founder 3: Christine */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
  <div className="flex flex-col items-center text-center space-y-4">
  <img src="/profiles/christine.jpg" alt="Christine" className="rounded-full w-48 h-48 object-cover shadow-card border border-ink-light" />
  <div>
  <p className="text-lg font-semibold text-white">Namatove Christine Maria</p>
  <p className="text-sm font-medium tracking-wide uppercase text-primary">Co-Founder & CTO</p>
  </div>
  </div>
  <div>
  <p className="text-body text-white/70 leading-relaxed">
  Leads engineering and product - system architecture, performance and user experience. Ensures products are scalable, secure and a joy to use.
  </p>
  </div>
  </div>
  </div>
  </section>

  {/* Team - Dr Grace leads for credibility */}
  <section className="py-16 bg-ink text-white">
  <div className="max-w-7xl mx-auto px-4 md:px-8">
  <p className="text-caption font-semibold tracking-[0.12em] uppercase text-white/60 text-center mb-3">People Behind Custospark</p>
  <h2 className="font-heading text-h1 text-white mb-3 text-center">Leadership, Research & Team</h2>
  <p className="text-white/60 text-body text-center max-w-2xl mx-auto mb-8 leading-relaxed">Research-led, product-focused - advisors and builders who combine academic rigour with shipping software used every day.</p>
  <hr className="border-t border-ink-light mb-8" />

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
  {teamData.map((member) => {
  const initials = member.name
  .split(" ")
  .filter((p) => p.length > 0 && !p.startsWith("(") && p !== "Dr." && !p.includes("PhD"))
  .map((p) => p[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();
  return (
  <div key={member.number}>
  <div className="flex flex-col items-center text-center space-y-4">
  <p className="text-xl font-semibold">{member.number}. {member.name}</p>
  {member.img ? (
  <img src={member.img} alt={`Photo of ${member.name}`} className="rounded-full w-48 h-48 object-cover shadow-card border border-ink-light" />
  ) : (
  <div className="w-48 h-48 rounded-full bg-white text-ink flex items-center justify-center text-4xl font-bold shadow-card border border-border">
  {initials}
  </div>
  )}
  <p className="text-body-sm font-medium tracking-wide uppercase text-primary bg-white/10 border border-white/10 rounded-full px-3 py-1">{member.role}</p>
  {member.email && <a href={`mailto:${member.email}`} className="text-primary hover:text-primary-hover text-body-sm">{member.email}</a>}
  </div>
  <div className="mt-6 text-white/70 leading-relaxed max-w-2xl mx-auto text-center text-body-sm">
  {member.bio}
  </div>
  </div>
  );
  })}
  </div>

 {/* CTA */}
 <div className="text-center mt-16">
 <h3 className="text-2xl font-bold mb-4">Think you'd be a great fit?</h3>
 <a href="/careers" className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded shadow hover:bg-surface-muted transition">
 Check for Open Roles
 </a>
 </div>
 </div>
 </section>

 {/* History Timeline */}
 <section className="py-16 bg-ink text-white">
 <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
 <h2 className="font-heading text-h1 text-white mb-10 text-center flex items-center justify-center gap-3">
 <History size={36} />
 <span>The Custospark Journey</span>
 </h2>

 <div className="relative pt-10">
 <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-full border-l-4 border-white/50" />

 {timelineData.map((event, i) => {
 const isLeft = event.side === "left";
 return (
 <div
 key={i}
 className={`flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} md:items-center mb-8`}
 >
 <div className={`w-full md:w-1/2 ${isLeft ? "md:pr-6 md:text-right" : "md:pl-6"}`}>
 <p className="text-lg text-white/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: event.text }} />
 </div>
 <div className={`flex-shrink-0 relative flex ${isLeft ? "md:justify-start" : "md:justify-end"} justify-center my-4 md:my-0`}>
 <div className="w-16 h-16 rounded-full bg-white border border-border flex items-center justify-center shadow-card">
  <event.icon className="text-primary" size={28} />
 </div>
 <span className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full w-6 h-6 text-xs flex items-center justify-center">
 {i + 1}
 </span>
 </div>
 </div>
 );
 })}
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-16 bg-ink text-white text-center">
 <div className="max-w-7xl mx-auto px-4 md:px-8">
 <div className="max-w-2xl mx-auto">
 <h2 className="font-heading text-h2 text-white mb-4">Want to See What We Build?</h2>
 <p className="text-white/70 text-body-lg mb-8">
 Meet Custocare - our healthcare platform. And Custosell - our retail POS. Both built by the same team that tells this story.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href="/products" className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-surface-muted transition shadow-md">
 View Our Products
 </a>
 <a href="/contact" className="inline-block border border-ink-light text-white font-semibold px-6 py-3 rounded-lg hover:bg-surface-muted transition">
 Contact Us
 </a>
 </div>
 </div>
 </div>
 </section>

 <style>{`
 .value-number {
 width: 48px;
 height: 48px;
 margin: 0 auto;
 border-radius: 50%;
 background-color: #34d399;
 display: flex;
 justify-content: center;
 align-items: center;
 font-weight: bold;
 font-size: 1.2rem;
 position: relative;
 z-index: 10;
 }
 .value-number::before {
 content: attr(data-number);
 color: white;
 }
 .glow-ring::after {
 content: '';
 position: absolute;
 inset: -8px;
 border-radius: 50%;
 background: transparent;
 filter: blur(6px);
 z-index: -1;
 animation: pulse-ring 2s infinite ease-in-out;
 }
 @keyframes pulse-ring {
 0%, 100% { transform: scale(1); opacity: 1; }
 50% { transform: scale(1.2); opacity: 0.5; }
 }
 @keyframes randomMove {
 0% { transform: translate(0, 0); }
 25% { transform: translate(8px, -4px); }
 50% { transform: translate(-8px, 8px); }
 75% { transform: translate(4px, -6px); }
 100% { transform: translate(0, 0); }
 }
 . {
 animation: randomMove 5s ease-in-out infinite;
 }
 `}</style>
 </>
 );
}
