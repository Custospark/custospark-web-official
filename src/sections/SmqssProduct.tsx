import { Button } from "@/components/Button";
import { ArrowRight, Clock, LayoutDashboard, Eye } from "lucide-react";
import smqssGlance from "../shared/images/smqss/smqss_glance.jpeg";
import smqssSmart from "../shared/images/smqss/smqss_smart.jpeg";
import smqssDeployed from "../shared/images/smqss/smqss_deployed.jpeg";

const features = [
  {
    img: smqssGlance,
    icon: LayoutDashboard,
    title: "Service at a Glance",
    desc: "A complete view of service delivery - queues, counters, waiting areas and service points - in one dashboard. Managers see what's happening now, not after the fact.",
  },
  {
    img: smqssSmart,
    icon: Clock,
    title: "Smart Queuing, Not Just Queues",
    desc: "Beyond ticketing: intelligent routing, priority handling, service-time tracking and accountability by counter and officer - built to cut wait times and keep service fair.",
  },
  {
    img: smqssDeployed,
    icon: Eye,
    title: "Deployed and Proven at Makerere",
    desc: "Live at Makerere University, serving students and the public every day. Real-time visibility for management, clear accountability for staff, and faster service for everyone in the queue.",
  },
];

export function SmqssProduct() {
  return (
    <div id="smqss">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-caption font-semibold tracking-[0.12em] uppercase text-primary">01</span>
          <div className="text-left">
            <h3 className="font-heading text-h3 text-ink tracking-tight">SMQSS</h3>
            <p className="text-text-secondary text-body-sm font-medium">Service Management & Queuing System</p>
          </div>
        </div>
        <p className="text-text-secondary text-body-lg leading-relaxed">
          SMQSS is a complete service management platform - not just a queueing tool. Built for institutions and service environments that serve students, customers, community, and the general public, it drives effective service delivery, strengthens accountability, reduces wait times, and gives management clear, real-time visibility into daily operations.
        </p>
      </div>

      <div className="space-y-12">
        {features.map((feat, i) => {
          const Icon = feat.icon;
          return (
            <div key={feat.title} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className={i % 2 === 0 ? "" : "lg:order-2"}>
                <div className="rounded-lg overflow-hidden border border-border bg-white p-1.5 shadow-card-hover">
                  <img src={feat.img} alt={feat.title} className="w-full h-auto rounded-md border border-border/50" />
                </div>
              </div>
              <div className={i % 2 === 0 ? "lg:order-1" : ""}>
                <div className="w-10 h-10 rounded-md bg-primary-soft text-primary flex items-center justify-center mb-3 border border-primary-border">
                  <Icon size={20} />
                </div>
                <h5 className="font-heading text-h4 text-ink mb-3">{feat.title}</h5>
                <p className="text-text-secondary text-body leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <p className="text-text-secondary text-body mb-6 max-w-2xl mx-auto leading-relaxed">
          For institutions that serve people at scale - SMQSS makes every visit faster, fairer and fully visible.
        </p>
        <a href="/contact">
          <Button variant="primary" size="lg">
            Talk About SMQSS <ArrowRight size={18} />
          </Button>
        </a>
      </div>
    </div>
  );
}
