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
 },
 {
 icon: Wallet,
 title: "Enroll in Minutes",
 desc: "Apply online in minutes - no credit card required to start. Pay application, tuition and certificate fees with MTN, Airtel and more, with an instant receipt for every payment.",
 },
 {
 icon: MonitorPlay,
 title: "Learn by Building",
 desc: "Video, text and article lessons with progress tracking, downloadable books and files, and resources attached right where you need them. Hands-on projects, not just videos.",
 },
 {
 icon: CalendarDays,
 title: "Join Live Sessions",
 desc: "Live session schedules, assessment open/close windows and enrollment deadlines - always visible, always enforced fairly, so nobody is caught off guard.",
 },
 {
 icon: FileQuestion,
 title: "Prove Your Skills",
 desc: "Auto-graded quizzes, practice exercises, file-based exam papers and assignments with instructor feedback. Submit online and watch every score land in one place.",
 },
 {
 icon: BarChart3,
 title: "Track Your Growth",
 desc: "One performance view per course: submissions, grades, instructor feedback and completion progress, all updating in real time as you go from learner to builder.",
 },
 {
 icon: Bell,
 title: "Stay in the Loop",
 desc: "Instructors reach learners by status with announcements and meeting links. Welcome back emails, deadline reminders - continue your learning journey without missing a beat.",
 },
 {
 icon: Award,
 title: "Launch with Proof",
 desc: "Earn a recognised, QR-coded certificate on completion that anyone can verify online in seconds. Go from learner to builder to founder - with proof.",
 },
];

export function AcademySpotlight() {
 return (
 <>
 <div className="text-center max-w-3xl mx-auto mb-12">
 <div className="flex items-center justify-center gap-4 mb-4">
 <div className="w-11 h-11 rounded-md bg-primary-soft border border-primary-border flex items-center justify-center">
 <GraduationCap size={22} className="text-primary" />
 </div>
 <div className="text-left">
 <h3 className="font-heading text-h3 text-ink tracking-tight">Academy</h3>
 <p className="text-text-secondary text-body-sm font-medium">An institution of Custospark Company Ltd</p>
 </div>
 </div>
 <h2 className="font-heading text-h2 text-ink">Your Path from Learner to Founder</h2>
 <p className="text-text-secondary text-body-lg mt-3 leading-relaxed">
 Eight steps, one journey - here&apos;s exactly how enrollment, learning, assessment and certification work.
 </p>
 </div>

 <div className="relative">
 <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-border hidden md:block" />

 <div className="space-y-6">
 {journey.map((stop, i) => {
 const Icon = stop.icon;
 const isLeft = i % 2 === 0;
 return (
 <div key={stop.title} className="flex flex-col md:flex-row items-center md:items-start relative">
 <div className={`w-full md:w-1/2 ${isLeft ? "md:pl-8 order-2" : "md:pr-8 order-2 md:order-1"}`}>
 <div className="bg-white border border-border rounded-lg shadow-card p-6">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 flex-shrink-0 bg-primary-soft border border-primary-border text-primary rounded-md flex items-center justify-center">
 <Icon size={20} />
 </div>
 <div>
 <div className="text-caption font-semibold tracking-[0.12em] uppercase text-primary mb-1">
 Step {String(i + 1).padStart(2, "0")}
 </div>
 <h3 className="text-lg font-semibold text-ink">{stop.title}</h3>
 <p className="text-text-secondary mt-1.5 text-body-sm leading-relaxed">{stop.desc}</p>
 </div>
 </div>
 </div>
 </div>
 <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-primary rounded-full z-10 hidden md:block mt-6" />
 <div className={`hidden md:block w-1/2 ${isLeft ? "order-1" : "order-3"}`} />
 </div>
 );
 })}
 </div>
 </div>

 <div className="mt-12 rounded-lg border border-border bg-white shadow-card p-8 text-center">
 <h3 className="font-heading text-h3 text-ink">Welcome back - or start today.</h3>
 <p className="mt-2 text-text-secondary text-body max-w-2xl mx-auto leading-relaxed">
 Continue your learning journey, or create your account and start learning in minutes - no credit card required.
 </p>
 <div className="mt-6 flex flex-wrap justify-center gap-3">
 <a href={ACADEMY_REGISTER_URL} target="_blank" rel="noopener noreferrer">
 <Button variant="primary" size="lg">
 Start learning <ArrowRight size={18} />
 </Button>
 </a>
 <a href={ACADEMY_URL} target="_blank" rel="noopener noreferrer">
 <Button variant="secondary" size="lg">
 Explore courses
 </Button>
 </a>
 </div>
 </div>
 </>
 );
}
