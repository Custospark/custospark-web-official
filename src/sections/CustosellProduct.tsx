import { Button } from "@/components/Button";
import { ArrowRight, Home, LayoutDashboard, Package, TrendingUp, Users } from "lucide-react";
import custosellLogo from "../shared/images/custosell/custosell-logo.png";
import homeImg from "../shared/images/custosell/custosell-home.png";
import dashboardImg from "../shared/images/custosell/real_time_dashboard.png";
import inventoryImg from "../shared/images/custosell/smart_inventory.png";
import salesImg from "../shared/images/custosell/faster_sales.png";
import customersImg from "../shared/images/custosell/customer_insights.png";

const features = [
  {
    img: homeImg,
    icon: Home,
    title: "Your Business, One Screen Away",
    desc: "Sales, inventory, customers, and insights — all waiting the moment you log in. Custosell's home screen puts your daily snapshot front and center so you can sell more, track everything, and grow faster without digging through menus or waiting on reports.",
  },
  {
    img: dashboardImg,
    icon: LayoutDashboard,
    title: "Real-time Dashboard",
    desc: "See your entire business at a glance. Custosell's live dashboard lets you track sales, monitor trends, and make data-driven decisions in real-time. Know exactly how your business is performing, any time of day, from anywhere.",
  },
  {
    img: inventoryImg,
    icon: Package,
    title: "Smart Inventory",
    desc: "Never run out of stock again. Custosell lets you track inventory in real-time, set low-stock alerts, and manage suppliers all from one place. Know what's moving, what's not, and exactly when to reorder — so you can keep your shelves full and your customers happy.",
  },
  {
    img: salesImg,
    icon: TrendingUp,
    title: "Fast Sales",
    desc: "Process transactions in seconds, not minutes. Whether you're online or offline, Custosell's point-of-sale is built for speed. Scan items, take payments, and print receipts — all while your data syncs seamlessly in the background when you're back online.",
  },
  {
    img: customersImg,
    icon: Users,
    title: "Customer Insights",
    desc: "Know your customers beyond their names. Custosell helps you track purchase history, manage loyalty programs, and understand buying patterns to serve them better. Build relationships that keep them coming back.",
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
          Custosell is a point-of-sale and business management platform built for retail businesses that need to keep selling — even when the internet goes down. Sales, inventory, customers, and insights all work offline and sync when you are back online. No lost transactions. No missed data. No stopping.
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
