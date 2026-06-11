import { FileText, CalendarCheck, CheckCircle, Globe, CreditCard, Award, MessageSquare, DoorClosed, ShieldAlert, AlertTriangle, RefreshCw, Gavel, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function TermsPage() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 md:px-8">
      <div className="mb-6 border-b pb-4">
        <h1 className="font-heading text-h1 text-primary flex items-center gap-2">
          <FileText size={28} />
          Terms of Service
        </h1>
        <p className="text-sm text-text-muted mt-1 flex items-center gap-2">
          <CalendarCheck size={16} className="text-accent" />
          Effective Date: January 1, 2025
        </p>
      </div>

      <p className="mb-5 text-text-primary leading-relaxed">
        Welcome! These Terms of Service (&ldquo;Terms&rdquo;) explain your rights and responsibilities when using any service or platform provided by <strong>Custospark Company Ltd</strong> &mdash; including but not limited to <em>Custosell, Custocare, and Custolearn</em>. By using any of our Services, you're agreeing to these Terms.
      </p>

      {[
        { icon: CheckCircle, color: "text-green-600", title: "1. Your Agreement", text: "When you sign up or use any of our Services, you confirm that you're at least 18 years old (or have permission from a parent or guardian) and that you accept these Terms and our Privacy Policy." },
        { icon: Globe, color: "text-indigo-600", title: "2. How You Can Use Our Services", list: ["Please use our Services responsibly and legally.", "Don't copy, modify, or resell any part of our Services without written permission.", "Keep your login information safe — you're responsible for your account."] },
        { icon: CreditCard, color: "text-purple-600", title: "3. Subscriptions and Payments", list: ["Some Services require a paid plan, sometimes with a free trial.", "By subscribing, you allow us (or our payment partners) to charge your chosen payment method.", "You're free to cancel anytime. Your plan will remain active until the current billing cycle ends."] },
        { icon: Award, color: "text-yellow-500", title: "4. Intellectual Property", text: "Everything you see on our platforms — branding, code, designs — belongs to Custospark Company Ltd. Please don't use it without permission." },
        { icon: MessageSquare, color: "text-cyan-600", title: "5. What You Share", text: "You own any content you upload or submit. But you give us permission to use, store, or display it so we can provide our Services to you." },
        { icon: DoorClosed, color: "text-red-600", title: "6. Account Suspension or Termination", text: "If you violate these Terms, we may suspend or deactivate your account without prior notice. We do this to protect the community and the integrity of our Services." },
        { icon: ShieldExclamation, color: "text-orange-600", title: "7. No Guarantees", text: "While we work hard to make our Services reliable, they're offered 'as is.' We can't promise they'll always be perfect or available." },
        { icon: AlertTriangle, color: "text-red-500", title: "8. Limiting Our Liability", text: "We're not liable for indirect or unexpected damages related to your use of our Services — like data loss, downtime, or financial loss." },
        { icon: RefreshCw, color: "text-green-600", title: "9. Updates to These Terms", text: "We might update these Terms occasionally. If we do, we'll post the changes here with a new date. Continuing to use our Services means you accept the changes." },
        { icon: Gavel, color: "text-indigo-600", title: "10. Legal Matters", text: "These Terms follow the laws of the Republic of Uganda. If there's a dispute, it'll be handled in Ugandan courts." },
        { icon: Mail, color: "text-blue-600", title: "11. Talk to Us", contact: true },
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
            <ul className="list-disc pl-6 text-text-primary space-y-1">
              {section.list.map((item, j) => <li key={j}>{item}</li>)}
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
