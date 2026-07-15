import { Button } from "@/components/Button";
import {
  ArrowRight, LayoutDashboard, ShoppingCart, Compass, Package, Kanban,
  FileText, BookOpen, LineChart, IdCard, FolderKanban, Files, Users,
} from "lucide-react";
import custosellLogo from "../shared/images/custosell/custosell-logo.png";
import homeImg from "../shared/images/custosell/custosell-home.png";
import salesImg from "../shared/images/custosell/faster_sales.png";
import storefrontImg from "../shared/images/custosell/storefront.png";
import inventoryImg from "../shared/images/custosell/smart_inventory.png";
import pipelineImg from "../shared/images/custosell/pipeline_crm.png";
import invoicingImg from "../shared/images/custosell/invoicing.png";
import accountingImg from "../shared/images/custosell/accounting.png";
import forecastingImg from "../shared/images/custosell/forecasting.png";
import hrImg from "../shared/images/custosell/hr_payroll.png";
import projectsImg from "../shared/images/custosell/project_management.png";
import documentsImg from "../shared/images/custosell/document_management.png";
import customersImg from "../shared/images/custosell/customer_insights.png";

const features = [
  {
    img: homeImg,
    icon: LayoutDashboard,
    title: "Your Business, One Screen Away",
    desc: "Sales, inventory, customers, and insights — all waiting the moment you log in. Custosell's home screen puts your daily snapshot front and center so you can sell more, track everything, and grow faster without digging through menus or waiting on reports.",
  },
  {
    img: salesImg,
    icon: ShoppingCart,
    title: "Point of Sale",
    desc: "Process transactions in seconds — online or offline. Scan items, split bills, take multiple payment methods, and print receipts. Your shift data syncs automatically when you reconnect.",
  },
  {
    img: storefrontImg,
    icon: Compass,
    title: "E-commerce Storefront",
    desc: "Share a public shop link so customers browse your catalog, save wishlists, and place order requests — all while stock stays tied to your real-time inventory. Turn your physical store into an online storefront instantly.",
  },
  {
    img: inventoryImg,
    icon: Package,
    title: "Inventory & Supply Chain",
    desc: "Track stock in real time, set low-stock alerts, manage suppliers, create purchase orders, and source from other businesses through the built-in marketplace. Never run out of stock again.",
  },
  {
    img: pipelineImg,
    icon: Kanban,
    title: "Sales Pipeline (CRM)",
    desc: "Move leads across visual boards, assign tasks, track deals, and never let an opportunity slip. Built for sales teams that need to close more — from first contact to signed deal.",
  },
  {
    img: invoicingImg,
    icon: FileText,
    title: "Invoicing & Payments",
    desc: "Create invoices, email them as PDFs, record payments, and track what customers owe you. Works for both sales invoices and supplier bills — everything in one place.",
  },
  {
    img: accountingImg,
    icon: BookOpen,
    title: "Accounting",
    desc: "Financial statements, chart of accounts, journal entries, fixed assets — books you can trust, ready when you need them. No accounting degree required.",
  },
  {
    img: forecastingImg,
    icon: LineChart,
    title: "Financial Forecasting",
    desc: "Cash flow outlook, budget planning, KPI tracking, and scenario modelling. Plan ahead with confidence before you commit to that next big decision.",
  },
  {
    img: hrImg,
    icon: IdCard,
    title: "HR & Payroll",
    desc: "Track attendance, leave, payroll, and performance. Manage people, departments, company assets, and control who has access to what — all without spreadsheet stress.",
  },
  {
    img: projectsImg,
    icon: FolderKanban,
    title: "Project Management",
    desc: "Quote, deliver, and get paid. Run estimates and projects from first ask to done — with boards, tasks, and team collaboration that keeps everyone aligned.",
  },
  {
    img: documentsImg,
    icon: Files,
    title: "Document Management",
    desc: "Keep contracts, invoices, and records organised. Find any file fast with cabinets, tags, and team access controls — no more digging through email attachments.",
  },
  {
    img: customersImg,
    icon: Users,
    title: "Customer Insights",
    desc: "Know your customers beyond their names. Track purchase history, manage loyalty programs, and understand buying patterns to serve them better. Build relationships that keep them coming back.",
  },
];

export function CustosellProduct() {
  return (
    <div>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-6 mb-4">
          <span className="text-orange-400 text-2xl font-bold tracking-wide">02</span>
          <img src={custosellLogo} alt="Custosell" className="h-14 w-auto rounded-full" />
          <div className="text-left">
            <h3 className="font-heading text-h1 text-white uppercase tracking-wide">Custosell</h3>
            <p className="text-orange-400/90 text-body font-medium">Sell More. Track All. Grow Fast.</p>
          </div>
        </div>
        <p className="text-white/80 text-body-lg leading-relaxed">
          Custosell is your business operating system — not just a POS. Point of Sale, E-commerce Storefront,
          Inventory & Supply Chain, Accounting, HR & Payroll, Invoicing, Expenses, Project Management,
          Sales Pipeline (CRM), Financial Forecasting, and Document Management — all in one connected system
          that works with or without the internet. No more juggling separate apps.
        </p>
      </div>

      <div className="space-y-20">
        {features.map((feat, i) => {
          const Icon = feat.icon;
          return (
            <div key={feat.title} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className={i % 2 === 0 ? "" : "lg:order-2"}>
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src={feat.img} alt={feat.title} className="w-full h-auto" />
                </div>
              </div>
              <div className={i % 2 === 0 ? "lg:order-1" : ""}>
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-blue-400" />
                </div>
                <h5 className="font-heading text-h4 text-white mb-4">{feat.title}</h5>
                <p className="text-white/70 text-body-lg leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-16">
        <a href="https://www.custosell.com" target="_blank" rel="noopener noreferrer">
          <Button variant="white" size="lg">
            Explore Custosell <ArrowRight size={20} />
          </Button>
        </a>
      </div>
    </div>
  );
}
