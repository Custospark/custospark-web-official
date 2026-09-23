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
 label,
}: {
 src: string;
 prevSrc: string | null;
 loaded: boolean;
 prevLoaded: boolean;
 onLoad: (src: string) => void;
 label: string;
}) {
 return (
 <div className="w-full">
 <div className="relative rounded-lg border border-border bg-white shadow-card-hover overflow-hidden">
 {/* Browser chrome — flat */}
 <div className="flex items-center gap-1.5 px-4 py-2.5 bg-surface-muted border-b border-border">
 <span className="w-2.5 h-2.5 rounded-full bg-border-strong" />
 <span className="w-2.5 h-2.5 rounded-full bg-border-strong" />
 <span className="w-2.5 h-2.5 rounded-full bg-border-strong" />
 <span className="ml-3 text-caption font-medium tracking-widest uppercase text-text-muted truncate">{label}</span>
 </div>
 <div className="relative aspect-[16/10] bg-white">
 {prevSrc && prevSrc !== src && (
 <img
 src={prevSrc}
 alt=""
 className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
 prevLoaded ? "opacity-100" : "opacity-0"
 }`}
 />
 )}
 <img
 src={src}
 alt=""
 onLoad={() => onLoad(src)}
 onError={() => onLoad(src)}
 className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
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
 <section className="relative bg-ink text-white border-b border-ink-light">
 <div className="max-w-7xl mx-auto px-4 lg:px-10 py-12 md:py-16">
 {/* Eyebrow + headline */}
 <div className="text-center max-w-3xl mx-auto">
 <p className="text-caption font-semibold tracking-[0.12em] uppercase text-white/60 mb-3">
 Software Company
 </p>
 <h1 className="font-heading text-h1 font-bold text-white leading-tight">
 Custospark builds SaaS products and custom software.
 </h1>
 </div>

 {/* Screens */}
 <div className="mt-10 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-8">
 <div className="order-2 lg:order-1 w-full lg:flex-1 lg:max-w-[640px]">
 <Screen
 src={CUSTOSELL_SLIDES[left]}
 prevSrc={leftPrev === null ? null : CUSTOSELL_SLIDES[leftPrev]}
 loaded={loadedLeft.has(left)}
 prevLoaded={leftPrev !== null && loadedLeft.has(leftPrev)}
 onLoad={handleLeftLoad}
 label="Custosell in action"
 />
 </div>

 <div className="order-1 lg:order-2 flex-1 lg:max-w-xl text-center lg:pt-8">
 <p className="text-body md:text-body-lg text-white/70 leading-relaxed">
 Including{" "}
 <a href="https://www.custosell.com" target="_blank" rel="noopener noreferrer" className="text-white font-semibold underline underline-offset-4 decoration-white/30 hover:decoration-white">Custosell</a>,{" "}
 <a href="https://custocare.custospark.com" target="_blank" rel="noopener noreferrer" className="text-white font-semibold underline underline-offset-4 decoration-white/30 hover:decoration-white">Custocare</a>{" "}
 and <a href="https://academy.custospark.com" target="_blank" rel="noopener noreferrer" className="text-white font-semibold underline underline-offset-4 decoration-white/30 hover:decoration-white">Academy</a>,{" "}
 plus custom solutions for companies, organisations, and individuals.
 </p>

 <div className="mt-8 hidden lg:flex justify-center">
 <a href="/products">
 <Button variant="primary" size="lg">
 Explore Our Products <ArrowRight size={18} />
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
 label="Custocare and Academy in action"
 />
 </div>
 </div>

 <div className="mt-8 flex justify-center lg:hidden">
 <a href="/products">
 <Button variant="primary" size="lg">
 Explore Our Products <ArrowRight size={18} />
 </Button>
 </a>
 </div>
 </div>
 </section>
 );
}
