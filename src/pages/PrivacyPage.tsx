import { Shield, CalendarCheck, User, Settings, Share2, Lock, UserCheck, Hourglass, Cookie, RefreshCw, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function PrivacyPage() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 md:px-8">
      <div className="mb-6 border-b pb-4">
        <h1 className="font-heading text-h1 text-primary flex items-center gap-2">
          <Shield size={28} />
          Privacy Policy
        </h1>
        <p className="text-sm text-text-muted mt-1 flex items-center gap-2">
          <CalendarCheck size={16} className="text-accent" />
          Effective Date: January 1, 2025
        </p>
      </div>

      <p className="mb-5 text-text-primary leading-relaxed">
        At Custospark Company Ltd (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;), your privacy isn't just a formality&mdash;it's part of the service we're proud to offer. This policy outlines how we collect and use your information to better serve you across our platforms: <em>Custosell, Custocare, and Custolearn</em>.
      </p>

      {[
        { icon: User, color: "text-indigo-600", title: "1. Information We Collect", list: [
          "a. Personal Information: Helps us communicate and verify your identity — includes name, email, and contact details.",
          "b. Account Information: Enables seamless access and billing — such as login details and subscription choices.",
          "c. Usage Data: Lets us enhance your experience based on how you use the platform — like your device type, actions, and preferences.",
          "d. Communication Records: Ensures we offer responsive and tailored support when you contact us.",
        ]},
        { icon: Settings, color: "text-green-600", title: "2. How We Use Your Information", list: [
          "a. To deliver and enhance the services you rely on",
          "b. To customize your experience, making it more relevant to your goals",
          "c. To manage your subscription and facilitate secure payments",
          "d. To keep you informed about updates or respond to your queries",
          "e. To protect your account and detect any suspicious activity",
        ]},
        { icon: Share2, color: "text-purple-600", title: "3. Sharing Your Information", text: "We value your trust. That's why we never sell your personal data. Any information we share with trusted partners is solely to help us serve you better — under strict confidentiality and only as needed to operate securely and efficiently." },
        { icon: Lock, color: "text-red-600", title: "4. Data Security", text: "Your peace of mind matters. We employ advanced security technologies and internal policies to protect your data from unauthorized access, breaches, and misuse." },
        { icon: UserCheck, color: "text-cyan-600", title: "5. Your Rights", list: [
          "a. Review the personal data we have about you",
          "b. Correct any information that's outdated or inaccurate",
          "c. Request the deletion of your data if no longer necessary",
          "d. Control how we communicate with you — including marketing",
        ]},
        { icon: Hourglass, color: "text-yellow-500", title: "6. Retention", text: "We keep your data only for as long as needed to support your use of our Services or meet legal requirements — no longer than necessary." },
        { icon: Cookie, color: "text-orange-600", title: "7. Cookies", text: "Cookies help us understand your preferences, so we can provide relevant content and improve performance. You can control or disable cookies anytime via your browser." },
        { icon: RefreshCw, color: "text-green-600", title: "8. Updates to This Policy", text: "We may occasionally update this policy to reflect new features or legal changes. We'll always post the latest version here, so you're in the loop." },
        { icon: Mail, color: "text-blue-600", title: "9. Contact Us", contact: true },
      ].map((section, i) => (
        <div key={i} className="mt-8">
          <h2 className="text-xl font-semibold text-primary flex items-center gap-2 mb-2">
            <section.icon size={20} className={section.color} />
            {section.title}
          </h2>
          {'text' in section && section.text && (
            <p className="text-text-primary leading-relaxed">{section.text}</p>
          )}
          {'list' in section && section.list && (
            <ul className="pl-6 text-text-primary space-y-1">
              {section.list.map((item, j) => <li key={j} className="list-disc">{item}</li>)}
            </ul>
          )}
          {'contact' in section && section.contact && (
            <ul className="mt-2 space-y-1 text-text-primary">
              <li className="flex items-center gap-2"><Mail size={16} className="text-primary" /> Email: <a href={`mailto:${COMPANY.SUPPORT_EMAIL}`} className="text-accent hover:underline">{COMPANY.SUPPORT_EMAIL}</a></li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-primary" /> Phone: {COMPANY.SUPPORT_PHONE}</li>
              <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> {COMPANY.HQ}</li>
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
