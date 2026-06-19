import { Calendar, Code, AlertTriangle, Award, Users, Rocket, History } from "lucide-react";

const timelineData = [
  {
    text: "In <strong>2023</strong>, with an unwavering vision and minimal resources, Custospark was born. In the modest corridors of Makerere University, a single spark was ignited—a spark that would lay the foundation for a revolution in African tech.",
    icon: Calendar,
    side: "left" as const,
    delay: "1s",
  },
  {
    text: "In a cramped university dorm at <strong>Makerere University</strong>, our founder, <strong>Oscar Opiyo</strong>, harnessed his sheer determination. Armed with a second-hand laptop and countless late-night coding sessions, he laid the bedrock of Custospark—a journey that still welcomes bold partners and collaborators.",
    icon: Code,
    side: "right" as const,
    delay: "2s",
  },
  {
    text: "There were trying moments—system crashes, server failures, and moments of deep uncertainty. Yet, each challenge only fueled our resolve to create resilient solutions that stand the test of time.",
    icon: AlertTriangle,
    side: "left" as const,
    delay: "3s",
  },
  {
    text: "What started as freelance gigs and volunteer projects at Makerere soon evolved into a disciplined, scalable approach to building software. Our code became not only functional but also intuitively designed—with the end-user firmly in mind.",
    icon: Code,
    side: "right" as const,
    delay: "4s",
  },
  {
    text: "Rapid early milestones—creating internal platforms that impressed university stakeholders and local entrepreneurs—validated our potential. This critical early feedback set our ambitions soaring.",
    icon: Award,
    side: "left" as const,
    delay: "5s",
  },
  {
    text: "As our vision broadened, so did our network. Custospark grew from a one-man initiative into a vibrant community of innovators—an open invitation for investors and collaborators to join in rewriting the future of tech in Africa.",
    icon: Users,
    side: "right" as const,
    delay: "6s",
  },
  {
    text: 'Our flagship product, <strong>Custosell</strong>, marks a major leap in empowering entrepreneurs through a robust SaaS platform. Yet, it\'s only the beginning. The Custospark team is actively engaged in developing a suite of powerful, complementary applications—each designed to solve real problems and drive meaningful transformation. This expanding ecosystem reflects our deep commitment to innovation and long-term impact in the digital space.',
    icon: Rocket,
    side: "left" as const,
    delay: "7s",
  },
];

const teamData = [
  {
    number: "1",
    name: "Alice Mukabera",
    img: "/profiles/alice.jpg",
    role: "Software Engineer",
    bio: "Alice is a skilled software engineer with a deep understanding of full-stack development. She contributes significantly to Custospark's engineering efforts, helping build scalable products under our brands.",
  },
  {
    number: "2",
    name: "Ogwal Richard",
    img: "/profiles/richard.jpg",
    role: "Software Engineer",
    bio: "Richard is a versatile developer who thrives in both frontend and backend. At Custospark, he ensures our platforms remain reliable, clean, and scalable through his deep focus on quality code and efficiency.",
  },
  {
    number: "3",
    name: "Oscar Opiyo",
    img: "/profiles/oscar.png",
    role: "Founder, CEO & Software Engineer",
    email: "oscar@custospark.com",
    bio: "Oscar is the visionary founder of Custospark and the brains behind Custosell. A tech entrepreneur and software engineer, he's driven by innovation, AI, and solving real-world problems across industries.",
  },
  {
    number: "4",
    name: "Namatove Christine Maria",
    img: "/profiles/christine.jpg",
    role: "Co-Founder, CTO & Software Engineer",
    bio: "Christine leads technology at Custospark as CTO. With her system architecture expertise, she ensures our products deliver performance, reliability, and cutting-edge user experiences.",
  },
  {
    number: "5",
    name: "Angom Joyce Rita",
    img: "/profiles/joyce.png",
    role: "Software Engineer",
    bio: "Joyce is an innovative full-stack developer passionate about scalable design. At Custospark, she contributes to our growth with clean code and customer-focused solutions.",
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
      <section className="py-section bg-gradient-to-br from-primary via-black to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-accent/20 border border-accent/30 text-accent text-body-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              About Custospark
            </span>
            <h1 className="font-heading text-h1 text-white mb-4">
              A Software Company That Builds Products People Rely On
            </h1>
            <p className="text-white/70 text-body-lg">
              From a university dorm room to a portfolio of SaaS products used by businesses across Africa — this is the story of Custospark.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12 bg-gradient-to-br from-primary via-black to-primary text-white">
        <div className="max-w-7xl mx-auto text-center px-4 md:px-8">
          <h2 className="font-heading text-h2 text-white mb-4">Who We Are</h2>
          <p className="text-body-lg text-white/70 max-w-3xl mx-auto">
            Custospark is a portfolio company running multiple software as a service products like Custocare &amp; Custosell and at the same time building enterprise grade software for organisations, companies and individuals.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-gradient-to-bl from-primary via-black to-primary text-white">
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
      <section className="py-16 bg-gradient-to-br from-primary via-black to-primary text-white">
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
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.08),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10" style={{ perspective: "1200px" }}>
          <div className="text-center mb-12">
            <h2 className="font-heading text-h1 text-white tracking-tight">
              Our Core Values at <span className="text-green-300">Custospark</span>
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
                  className="animate-random hover:scale-110 transition-all duration-300 text-center"
                  style={{ animationDelay: `${(parseInt(v.number) - 1) * 0.2}s` }}
                >
                  <div className="value-number glow-ring mb-3" data-number={v.number} />
                  <h3 className="text-xl md:text-2xl font-semibold mb-1">{v.title}</h3>
                  <p className="text-sm md:text-base text-gray-200">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values - Mobile */}
      <section className="block lg:hidden relative py-12 bg-gradient-to-bl from-blue-700 via-black to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.08),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight">
              Our Core Values at <span className="text-green-300">Custospark</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6 justify-items-center">
            {mobileValuesData.slice(0, 6).map((v, i) => (
              <div
                key={v.number}
                className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-random text-center"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="value-number glow-ring mb-2" data-number={v.number} />
                <h3 className="text-lg font-semibold mb-1">{v.title}</h3>
                <p className="text-xs text-gray-200">{v.desc}</p>
              </div>
            ))}
            <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-random col-span-2 text-center" style={{ animationDelay: "1.2s" }}>
              <div className="value-number glow-ring mb-2" data-number="7" />
              <h3 className="text-lg font-semibold mb-1">COLLABORATION</h3>
              <p className="text-xs text-gray-200">Shared success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 bg-gradient-to-br from-primary via-black to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-heading text-h1 text-white mb-6 text-center">Our Founders</h2>
          <hr className="border-t-2 border-white mb-8" />

          {/* Founder 1: Oscar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center text-center space-y-6">
              <img src="/profiles/oscar.png" alt="Oscar Opiyo" className="rounded-full w-48 h-48 object-cover shadow-xl" />
              <p className="text-xl font-semibold text-white">Oscar Opiyo</p>
              <p className="text-lg text-white/70">Founder & CEO of Custospark</p>
              <a href="mailto:oscar@custospark.com" className="text-blue-300 hover:text-blue-500">oscar@custospark.com</a>
            </div>
            <div>
              <p className="text-lg text-white/70 leading-relaxed">
                Custospark was founded by Oscar Opiyo, a visionary technologist and entrepreneur with a passion for building impactful digital solutions. With a strong foundation in scalable systems, modern software development, and innovative business strategies, Oscar has dedicated himself to creating technology that addresses real-world challenges and drives meaningful change.
              </p>
              <p className="text-lg text-white/70 leading-relaxed mt-6">
                As the Founder and CEO of Custospark, Oscar leads with clarity, ambition, and a deep commitment to excellence. His mission is to position Custospark at the forefront of inclusive and sustainable digital transformation—developing solutions that empower businesses, communities, and industries. Under his leadership, Custospark is more than a company—it's a movement aimed at shaping a more innovative and connected future. Oscar is actively engaging with partners and stakeholders to expand the company's reach and accelerate its global impact.
              </p>
            </div>
          </div>

          {/* Founder 2: Christine */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="flex flex-col items-center text-center space-y-6">
              <img src="/profiles/christine.jpg" alt="Christine" className="rounded-full w-48 h-48 object-cover shadow-xl" />
              <p className="text-xl font-semibold text-white">Christine</p>
              <p className="text-lg text-white/70">Co-Founder & CTO of Custospark</p>
            </div>
            <div>
              <p className="text-lg text-white/70 leading-relaxed">
                Christine is a co-founder of Custospark, with a strong background in software engineering and a deep commitment to solving real-world challenges through technology. Her expertise spans system architecture, backend development, and building high-performance solutions that scale with business needs.
              </p>
              <p className="text-lg text-white/70 leading-relaxed mt-6">
                As the CTO of Custospark, Christine drives the technical vision of the company, leading product development and engineering efforts with precision and purpose. Her work reflects a passion for innovation and a focus on delivering scalable, secure, and user-centric technologies. Christine's leadership is instrumental in shaping Custospark's journey toward becoming a trusted force in global tech innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gradient-to-bl from-primary via-black to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-heading text-h1 text-white mb-6 text-center">Our Current Technical Team</h2>
          <hr className="border-t-2 border-white mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamData.map((member) => (
              <div key={member.number}>
                <div className="flex flex-col items-center text-center space-y-6">
                  <p className="text-xl font-semibold">{member.number}. {member.name}</p>
                  <img src={member.img} alt={`Photo of ${member.name}`} className="rounded-full w-48 h-48 object-cover shadow-xl" />
                  <p className="text-lg text-white/70">{member.role}</p>
                  {member.email && <a href={`mailto:${member.email}`} className="text-blue-300 hover:text-blue-500">{member.email}</a>}
                </div>
                <div className="mt-8 text-white/70 leading-relaxed max-w-2xl mx-auto text-center">
                  {member.bio}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">Think you'd be a great fit?</h3>
            <a href="/careers" className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition">
              Check for Open Roles
            </a>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-gradient-to-br from-primary via-black to-primary text-white">
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
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                      <event.icon className="text-blue-500" size={28} />
                    </div>
                    <span className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center">
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
      <section className="py-16 bg-gradient-to-br from-primary via-black to-primary text-white text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-h2 text-white mb-4">Want to See What We Build?</h2>
            <p className="text-white/70 text-body-lg mb-8">
              Meet Custocare — our healthcare platform. And Custosell — our retail POS. Both built by the same team that tells this story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/products" className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition shadow-md">
                View Our Products
              </a>
              <a href="/contact" className="inline-block border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition">
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
          background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%);
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
        .animate-random {
          animation: randomMove 5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
