import { LifeBuoy, Rocket, CreditCard, Shield, Bell, Wrench, Mail, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function HelpPage() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 md:px-8">
      <h1 className="font-heading text-h1 text-accent flex items-center gap-2 mb-4">
        <LifeBuoy size={32} />
        Help & Support
      </h1>
      <p className="mb-6 text-text-secondary">Welcome to your support hub! Find quick answers, helpful tips, and ways to contact us if you need more help.</p>

      <div className="space-y-10">
        {[
          { icon: Rocket, title: "Getting Started", text: "New here? Learn how to set up your account and get familiar with the Custospark apps.", items: ["How to register and verify your account", "Overview of Custospark apps: Custosell, Custocare, and Custolearn", "Subscribing to free or paid plans"] },
          { icon: CreditCard, title: "Subscriptions & Billing", text: "Understand how billing works, manage your subscriptions, and know your payment options.", items: ["Understanding trial periods and billing cycles", "How to upgrade, downgrade, or cancel subscriptions", "Payment methods supported (Flutterwave, Mobile Money, etc.)"] },
          { icon: Shield, title: "Roles & Permissions", text: "Learn how to manage user access and permissions for your team or organization within the apps.", items: ["Managing user roles per app", "Granting feature-level access", "How access is restricted by role and subscription level"] },
          { icon: Bell, title: "Notifications & Feedback", text: "Stay informed with notifications and share your experience or issues with us.", items: ["Understanding in-app and email notifications", "How to submit feedback or report a bug", "Rating your experience with Custospark apps"] },
          { icon: Wrench, title: "Technical Support", text: "Having trouble? Here's how to fix common issues or reach out for direct help.", items: ["Troubleshooting login or access issues", "How to reset your password", "Contacting support via email or phone"] },
        ].map((section, i) => (
          <section key={i}>
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2 text-accent">
              <section.icon size={22} />
              {section.title}
            </h2>
            <p className="mb-3 text-text-secondary">{section.text}</p>
            <ul className="list-disc list-inside text-text-primary space-y-1">
              {section.items.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
          </section>
        ))}

        <section>
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2 text-accent">
            <Mail size={22} />
            Contact Us
          </h2>
          <p className="text-text-secondary mb-2">Need personalized support? Reach out to our friendly support team anytime.</p>
          <ul className="text-text-primary space-y-1">
            <li className="flex items-center gap-2"><Mail size={16} className="text-accent" /> Email: <a href={`mailto:${COMPANY.SUPPORT_EMAIL}`} className="text-accent hover:underline">{COMPANY.SUPPORT_EMAIL}</a></li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-accent" /> Phone: <a href={`tel:${COMPANY.SUPPORT_PHONE.replace(/\s/g, "")}`} className="text-accent hover:underline">{COMPANY.SUPPORT_PHONE}</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
