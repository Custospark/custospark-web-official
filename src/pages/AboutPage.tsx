import { useEffect, useRef } from "react";
import { Calendar, Code, AlertTriangle, Award, Users, Rocket, History } from "lucide-react";

const timelineData = [
  {
    text: "In <strong>2023</strong>, with an unwavering vision and minimal resources, Custospark was born. In the modest corridors of Makerere University, a single spark was ignited—a spark that would lay the foundation for a revolution in African tech.",
    icon: Calendar,
    side: "left" as const,
    delay: "1s",
  },
  {
    text: "In a cramped university dorm, our founder, <strong>Oscar Opiyo</strong>, harnessed his sheer determination. Armed with a second-hand laptop and countless late-night coding sessions, he laid the bedrock of Custospark—a journey that still welcomes bold partners and collaborators.",
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
    text: "What started as freelance gigs and volunteer projects soon evolved into a disciplined, scalable approach to building software. Our code became not only functional but also intuitively designed—with the end-user firmly in mind.",
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
    email: "alice@custosell.com",
    bio: "Alice is a skilled software engineer with a deep understanding of full-stack development. She contributes significantly to Custospark's engineering efforts, helping build scalable products under our Custosell brand.",
  },
  {
    number: "2",
    name: "Ogwal Richard",
    img: "/profiles/richard.jpg",
    role: "Software Engineer",
    email: "richard@custosell.com",
    bio: "Richard is a versatile developer who thrives in both frontend and backend. At Custospark, he ensures our Custosell platform remains reliable, clean, and scalable through his deep focus on quality code and efficiency.",
  },
  {
    number: "3",
    name: "Oscar Opiyo",
    img: "/profiles/oscar.png",
    role: "Founder, CEO & Software Engineer",
    email: "oscar@custosell.com",
    bio: "Oscar is the visionary founder of Custospark and the brains behind Custosell. A tech entrepreneur and software engineer, he's driven by innovation, AI, and solving real-world problems across industries.",
  },
  {
    number: "4",
    name: "Namatove Christine Maria",
    img: "/profiles/christine.jpg",
    role: "Co-Founder, CTO & Software Engineer",
    email: "christine@custosell.com",
    bio: "Christine leads technology at Custospark as CTO. With her system architecture expertise, she ensures Custosell delivers performance, reliability, and cutting-edge user experiences.",
  },
  {
    number: "5",
    name: "Angom Joyce Rita",
    img: "/profiles/joyce.jpeg",
    role: "Software Engineer",
    email: "joyce@custosell.com",
    bio: "Joyce is an innovative full-stack developer passionate about scalable design. At Custospark, she contributes to Custosell's growth with clean code and customer-focused solutions.",
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
  const desktopRef = useRef<HTMLCanvasElement>(null);
  const mobileRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    script.onload = () => {
      if ((window as any).particlesJS) {
        (window as any).particlesJS("sparkle-bg-desktop", {
          particles: {
            number: { value: 120, density: { enable: true, value_area: 800 } },
            color: { value: ["#FF5733", "#FFC300", "#28A745", "#17A2B8"] },
            shape: { type: "circle", stroke: { width: 0, color: "#000" } },
            opacity: { value: 0.8, random: true },
            size: { value: 1, random: true },
            line_linked: { enable: false },
            move: { enable: true, speed: 10, direction: "none", random: true, straight: false, out_mode: "out" },
          },
          interactivity: { detect_on: "canvas", events: { resize: true } },
          retina_detect: true,
        });
        (window as any).particlesJS("sparkle-bg-mobile", {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 10000 } },
            color: { value: ["#FF5733", "#FFC300", "#28A745", "#17A2B8"] },
            shape: { type: "hexagon", stroke: { width: 0, color: "#000" } },
            opacity: { value: 0.8, random: true },
            size: { value: 1, random: true },
            line_linked: { enable: false },
            move: { enable: true, speed: 5, direction: "none", random: true, straight: false, out_mode: "out" },
          },
          interactivity: { detect_on: "canvas", events: { resize: true } },
          retina_detect: true,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const canvas = desktopRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const stars = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 2.5,
      alpha: Math.random(),
      delta: Math.random() * 0.02,
    }));
    let animId: number;
    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      stars.forEach((star) => {
        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx!.fill();
        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta *= -1;
      });
      animId = requestAnimationFrame(animate);
    }
    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();
    animate();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Who We Are */}
      <section className="py-12 bg-gradient-to-br from-primary via-black to-primary text-white">
        <div className="max-w-7xl mx-auto text-center px-4 md:px-8">
          <h2 className="font-heading text-h1 text-white mb-4">Who We Are</h2>
          <p className="text-body-lg text-white/70 max-w-3xl mx-auto">
            We are a dynamic and innovative company focused on delivering cutting-edge solutions to businesses around the world. Our team is dedicated to driving progress through technology, creativity, and collaboration.
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
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <canvas id="sparkle-bg-desktop" className="w-full h-full opacity-20" />
        </div>
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
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <canvas id="sparkle-bg-mobile" className="w-full h-full opacity-20" />
        </div>
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
              <a href="mailto:oscar@custosell.com" className="text-blue-300 hover:text-blue-500">oscar@custosell.com</a>
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
              <a href="mailto:christine@custosell.com" className="text-blue-300 hover:text-blue-500">christine@custosell.com</a>
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
          <h2 className="font-heading text-h1 text-white mb-6 text-center">Our Current Team</h2>
          <hr className="border-t-2 border-white mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamData.map((member) => (
              <div key={member.number}>
                <div className="flex flex-col items-center text-center space-y-6">
                  <p className="text-xl font-semibold">{member.number}. {member.name}</p>
                  <img src={member.img} alt={`Photo of ${member.name}`} className="rounded-full w-48 h-48 object-cover shadow-xl" />
                  <p className="text-lg text-white/70">{member.role}</p>
                  <a href={`mailto:${member.email}`} className="text-blue-300 hover:text-blue-500">{member.email}</a>
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
              const Container = isLeft
                ? "div"
                : "div";
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
        #sparkle-bg-desktop, #sparkle-bg-mobile {
          transform: rotate(180deg);
          transform-origin: center;
          display: block;
        }
      `}</style>
    </>
  );
}
