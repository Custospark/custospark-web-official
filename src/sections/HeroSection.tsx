import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";
import custocareHome from "../shared/images/custocare/custocare-home.png";
import clinicalImg from "../shared/images/custocare/clinical.png";
import pharmacyImg from "../shared/images/custocare/pharmacy.png";
import laboratoryImg from "../shared/images/custocare/laboratory.png";
import nursingImg from "../shared/images/custocare/nursing.png";
import medicalRecordsImg from "../shared/images/custocare/medical_records.png";
import ambulanceImg from "../shared/images/custocare/ambulance.png";
import adminDepartmentsImg from "../shared/images/custocare/administration-clinical_departments.png";
import referalImg from "../shared/images/custocare/referal.png";
import custosellHome from "../shared/images/custosell/custosell-home.png";
import fasterSalesImg from "../shared/images/custosell/faster_sales.png";
import storefrontImg from "../shared/images/custosell/storefront.png";
import smartInventoryImg from "../shared/images/custosell/smart_inventory.png";
import pipelineImg from "../shared/images/custosell/pipeline_crm.png";
import invoicingImg from "../shared/images/custosell/invoicing.png";
import accountingImg from "../shared/images/custosell/accounting.png";
import forecastingImg from "../shared/images/custosell/forecasting.png";
import hrPayrollImg from "../shared/images/custosell/hr_payroll.png";
import projectMgmtImg from "../shared/images/custosell/project_management.png";
import documentsImg from "../shared/images/custosell/document_management.png";
import customerInsightsImg from "../shared/images/custosell/customer_insights.png";
import academyLanding from "../shared/images/academy/academy_landing.png";
import academyDashboard from "../shared/images/academy/academy_dashboard.png";
import academySignin from "../shared/images/academy/academy_sign.png";
import academySignup from "../shared/images/academy/academy_signup.png";

const CUSTOSELL_SLIDES = [
  custosellHome,
  fasterSalesImg,
  storefrontImg,
  smartInventoryImg,
  pipelineImg,
  invoicingImg,
  accountingImg,
  forecastingImg,
  hrPayrollImg,
  projectMgmtImg,
  documentsImg,
  customerInsightsImg,
];
const CUSTOCARE_ACADEMY_SLIDES = [
  custocareHome,
  clinicalImg,
  pharmacyImg,
  laboratoryImg,
  nursingImg,
  medicalRecordsImg,
  ambulanceImg,
  adminDepartmentsImg,
  referalImg,
  academyLanding,
  academyDashboard,
  academySignin,
  academySignup,
];
const SLIDE_INTERVAL_MS = 2000;

function Screen({
  src,
  prevSrc,
  loaded,
  prevLoaded,
  onLoad,
  tilt,
  label,
}: {
  src: string;
  prevSrc: string | null;
  loaded: boolean;
  prevLoaded: boolean;
  onLoad: (src: string) => void;
  tilt: "left" | "right";
  label: string;
}) {
  return (
    <div
      className="w-full"
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative rounded-2xl border border-white/20 bg-black/60 shadow-2xl overflow-hidden transition-transform duration-700"
        style={{
          transform: tilt === "left" ? "rotateY(18deg)" : "rotateY(-18deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white/10 border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          <span className="ml-3 text-[11px] text-white/50 truncate">{label}</span>
        </div>
        <div className="relative aspect-[16/10] bg-black">
          {prevSrc && prevSrc !== src && (
            <img
              src={prevSrc}
              alt=""
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                prevLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
          <img
            src={src}
            alt=""
            onLoad={() => onLoad(src)}
            onError={() => onLoad(src)}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const [[left, leftPrev], setLeft] = useState<[number, number | null]>([0, null]);
  const [[right, rightPrev], setRight] = useState<[number, number | null]>([4, null]);
  const [loadedLeft, setLoadedLeft] = useState<Set<number>>(new Set([0]));
  const [loadedRight, setLoadedRight] = useState<Set<number>>(new Set([4]));

  useEffect(() => {
    const timer = setInterval(() => {
      setLeft(([current]) => [(current + 1) % CUSTOSELL_SLIDES.length, current]);
      setRight(([current]) => [(current + 1) % CUSTOCARE_ACADEMY_SLIDES.length, current]);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  function handleLeftLoad(src: string) {
    const index = CUSTOSELL_SLIDES.indexOf(src);
    if (index < 0) return;
    setLoadedLeft((current) => {
      if (current.has(index)) return current;
      const next = new Set(current);
      next.add(index);
      return next;
    });
  }

  function handleRightLoad(src: string) {
    const index = CUSTOCARE_ACADEMY_SLIDES.indexOf(src);
    if (index < 0) return;
    setLoadedRight((current) => {
      if (current.has(index)) return current;
      const next = new Set(current);
      next.add(index);
      return next;
    });
  }

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden text-white bg-gradient-to-br from-primary via-black to-primary">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_10%_90%,rgba(255,255,255,0.15),transparent_40%)]" style={{ filter: "blur(72px)" }} />

      {/* Floating badges (desktop only) */}
      <div className="absolute top-8 left-4 md:left-12 animate-float text-center z-10 hidden md:block">
        <p className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-caption text-white/80 font-semibold">
          Quality Software
        </p>
      </div>

      <div className="absolute top-8 right-4 md:right-12 animate-float text-center z-10 hidden md:block" style={{ animationDelay: "2s" }}>
        <p className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-caption text-white/80 font-semibold">
          Enterprise Software
        </p>
      </div>

      {/* Headline above the screens */}
      <div className="relative z-10 mt-10 w-full max-w-5xl mx-auto px-4 text-center">
        <span className="inline-block bg-accent/20 border border-accent/30 text-accent text-body-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          Software Company
        </span>
        <h1 className="font-heading text-h1 md:text-[56px] font-bold text-white drop-shadow-md leading-tight">
          Custospark builds{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">
            SaaS products and custom software.
          </span>
        </h1>
      </div>

      {/* Screens flanking the remaining text */}
      <div className="relative z-10 mt-8 w-full mx-auto px-4 lg:px-10 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8">
        <div className="order-2 lg:order-1 w-full lg:flex-1 lg:max-w-[640px]">
          <Screen
            src={CUSTOSELL_SLIDES[left]}
            prevSrc={leftPrev === null ? null : CUSTOSELL_SLIDES[leftPrev]}
            loaded={loadedLeft.has(left)}
            prevLoaded={leftPrev !== null && loadedLeft.has(leftPrev)}
            onLoad={handleLeftLoad}
            tilt="left"
            label="Custosell in action"
          />
        </div>

        <div className="order-1 lg:order-2 flex-1 lg:max-w-2xl text-center lg:pt-16">
          <p className="text-body-lg md:text-xl text-white/80 leading-relaxed">
            Including{" "}
            <a href="https://www.custosell.com" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-blue-200 underline underline-offset-2">Custosell</a>,{" "}
            <a href="https://custocare.custospark.com" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-blue-200 underline underline-offset-2">Custocare</a>{" "}
            and <a href="https://academy.custospark.com" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-blue-200 underline underline-offset-2">Academy</a>,{" "}
            plus custom solutions for companies, organisations, and individuals.
          </p>

          <div className="mt-8 hidden lg:flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/products">
              <Button variant="primary" size="lg">
                Explore Our Products <ArrowRight size={20} />
              </Button>
            </a>
          </div>
        </div>

        <div className="order-3 w-full lg:flex-1 lg:max-w-[640px]">
          <Screen
            src={CUSTOCARE_ACADEMY_SLIDES[right]}
            prevSrc={rightPrev === null ? null : CUSTOCARE_ACADEMY_SLIDES[rightPrev]}
            loaded={loadedRight.has(right)}
            prevLoaded={rightPrev !== null && loadedRight.has(rightPrev)}
            onLoad={handleRightLoad}
            tilt="right"
            label="Custocare and Academy in action"
          />
        </div>
      </div>
      <div className="pb-8" />

      {/* Mobile-only CTA below the screens */}
      <div className="relative z-10 pb-10 lg:hidden">
        <a href="/products">
          <Button variant="primary" size="lg">
            Explore Our Products <ArrowRight size={20} />
          </Button>
        </a>
      </div>
    </section>
  );
}
