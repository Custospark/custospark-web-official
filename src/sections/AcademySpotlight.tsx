import { Button } from "@/components/Button";
import {
  ArrowRight, GraduationCap, BookOpen, Wallet, Award, CalendarDays,
  FileQuestion, MonitorPlay, Bell, BarChart3,
} from "lucide-react";

export const ACADEMY_URL = "https://academy.custospark.com";
export const ACADEMY_REGISTER_URL = "https://academy.custospark.com/register";

const journey = [
  {
    icon: BookOpen,
    title: "Find Your Course",
    desc: "Practical, hands-on courses across software, business and professional skills. Every course states its outcomes upfront, so you know what a certificate proves before you enroll.",
    medallion: "from-accent via-blue-500 to-primary",
    glow: "bg-accent/10",
  },
  {
    icon: Wallet,
    title: "Enroll in Minutes",
    desc: "Apply online in minutes - no credit card required to start. Pay application, tuition and certificate fees with MTN, Airtel and more, with an instant receipt for every payment.",
    medallion: "from-emerald-400 via-teal-500 to-primary",
    glow: "bg-emerald-500/10",
  },
  {
    icon: MonitorPlay,
    title: "Learn by Building",
    desc: "Video, text and article lessons with progress tracking, downloadable books and files, and resources attached right where you need them. Hands-on projects, not just videos.",
    medallion: "from-violet-400 via-purple-500 to-primary",
    glow: "bg-violet-500/10",
  },
  {
    icon: CalendarDays,
    title: "Join Live Sessions",
    desc: "Live session schedules, assessment open/close windows and enrollment deadlines - always visible, always enforced fairly, so nobody is caught off guard.",
    medallion: "from-amber-400 via-orange-500 to-primary",
    glow: "bg-amber-500/10",
  },
  {
    icon: FileQuestion,
    title: "Prove Your Skills",
    desc: "Auto-graded quizzes, practice exercises, file-based exam papers and assignments with instructor feedback. Submit online and watch every score land in one place.",
    medallion: "from-sky-400 via-blue-500 to-primary",
    glow: "bg-sky-500/10",
  },
  {
    icon: BarChart3,
    title: "Track Your Growth",
    desc: "One performance view per course: submissions, grades, instructor feedback and completion progress, all updating in real time as you go from learner to builder.",
    medallion: "from-rose-400 via-pink-500 to-primary",
    glow: "bg-rose-500/10",
  },
  {
    icon: Bell,
    title: "Stay in the Loop",
    desc: "Instructors reach learners by status with announcements and meeting links. Welcome back emails, deadline reminders - continue your learning journey without missing a beat.",
    medallion: "from-cyan-400 via-sky-500 to-primary",
    glow: "bg-cyan-500/10",
  },
  {
    icon: Award,
    title: "Launch with Proof",
    desc: "Earn a recognised, QR-coded certificate on completion that anyone can verify online in seconds. Go from learner to builder to founder - with proof.",
    medallion: "from-yellow-400 via-accent to-primary",
    glow: "bg-yellow-500/10",
  },
];

export function AcademySpotlight() {
  return (
    <>
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="flex items-center justify-center gap-6 mb-4">
          <div className="w-14 h-14 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
            <GraduationCap size={28} className="text-accent" />
          </div>
          <div className="text-left">
            <h3 className="font-heading text-h1 text-white uppercase tracking-wide">Academy</h3>
            <p className="text-accent/90 text-body font-medium">An institution of Custospark Company Ltd</p>
          </div>
        </div>
        <h2 className="font-heading text-h1 text-white font-extrabold">Your Path from Learner to Founder</h2>
        <p className="text-xl mt-6 max-w-3xl mx-auto text-white/80 leading-relaxed">
          Eight steps, one journey - here&apos;s exactly how enrollment, learning, assessment and certification work.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent via-primary to-primary-hover rounded-full shadow-lg z-0 hidden md:block" />

        <div className="space-y-12 md:space-y-16">
          {journey.map((stop, i) => {
            const Icon = stop.icon;
            const isLeft = i % 2 === 0;
            const dark = i % 2 === 1;
            return (
              <div key={stop.title} className="flex flex-col md:flex-row items-center md:items-start relative group">
                <div className={`w-full md:w-1/2 ${isLeft ? "md:pl-12 order-2" : "md:pr-12 order-2 md:order-1"}`}>
                  <div className={`relative rounded-2xl border backdrop-blur-md p-6 shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden ${
                    dark
                      ? "bg-black/50 border-white/10"
                      : "bg-white/10 border-white/20"
                  }`}>
                    <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-[80px] ${stop.glow}`} />
                    <div className="relative flex items-start gap-4">
                      <div className={`w-12 h-12 flex-shrink-0 bg-gradient-to-br ${stop.medallion} text-white rounded-full flex items-center justify-center shadow-md`}>
                        <Icon size={22} />
                      </div>
                      <div>
                        <div className="text-accent text-sm font-bold tracking-widest mb-1">
                          STEP {String(i + 1).padStart(2, "0")}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{stop.title}</h3>
                        <p className="text-white/80 mt-2 text-base leading-relaxed">{stop.desc}</p>
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

      <div className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 via-slate-950 to-black p-10 text-center shadow-2xl">
        <h3 className="font-heading text-h2 text-white">Welcome back - or start today.</h3>
        <p className="mt-3 text-white/70 text-body-lg max-w-2xl mx-auto">
          Continue your learning journey, or create your account and start learning in minutes - no credit card required.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href={ACADEMY_REGISTER_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="white" size="lg">
              Start learning <ArrowRight size={20} />
            </Button>
          </a>
        <a href={ACADEMY_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="lg">
            Explore courses
          </Button>
        </a>
        </div>
      </div>
    </>
  );
}
