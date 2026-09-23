import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";
import custocareLogo from "../shared/images/custocare/custocare-logo-light.png";
import custocareHome from "../shared/images/custocare/custocare-home.png";
import custocareMedical from "../shared/images/custocare/medical_records.png";
import custocareClinical from "../shared/images/custocare/clinical.png";
import custocareNursing from "../shared/images/custocare/nursing.png";
import custocareLab from "../shared/images/custocare/laboratory.png";
import custocarePharmacy from "../shared/images/custocare/pharmacy.png";
import custocareReferral from "../shared/images/custocare/referal.png";
import custocareAmbulance from "../shared/images/custocare/ambulance.png";
import custocareAdmin from "../shared/images/custocare/administration-clinical_departments.png";

const features = [
 {
 img: custocareHome,
 title: "A Home Screen Designed for Everyone in Healthcare",
 desc: "Patients, doctors, nurses, pharmacists, lab technicians, health practitioners, and facility owners - every role has a place here. From the moment you land, Custocare's home screen communicates its core promise of Continuous Care and Clinical Excellence, while pointing each user toward the tools and information that matter most to them.",
 },
 {
 img: custocareMedical,
 title: "Comprehensive Patient Records",
 desc: "Every patient's story starts here. From registration through every visit, treatment, and outcome, Custocare maintains a single, unified record that follows the patient across every department. No more repeated histories, no lost files, no gaps in care. Clinicians get the full picture every time.",
 },
 {
 img: custocareClinical,
 title: "Clinical Consultations & Care Planning",
 desc: "Designed for how clinicians actually work. Custocare lets you document consultations, record vitals, capture diagnoses, and build care plans - all within a structured workflow that supports clinical decision-making. SOAP notes, prescriptions, and allergy tracking are built in, so nothing falls through the cracks.",
 },
 {
 img: custocareNursing,
 title: "Nursing Operations & Treatment Tracking",
 desc: "Ward management, bed assignments, medication administration, task handovers, and shift changeovers - nursing is the backbone of continuous care. Custocare gives nurses the tools to track every treatment, every handover, and every patient under their care with clarity and accountability.",
 },
 {
 img: custocareLab,
 title: "Laboratory Workflow Management",
 desc: "From request to result, Custocare connects the lab to the rest of the facility. Clinicians place orders directly from the patient record. Lab techs receive, process, and verify results. Results appear automatically in the patient's chart - no phone calls, no chasing papers, no delays.",
 },
 {
 img: custocarePharmacy,
 title: "Medication & Dispensing Management",
 desc: "Prescribe, dispense, and track medications all within the same patient record. With Custocare, pharmacists receive prescriptions directly from clinicians, verify against patient history, and dispense with full traceability. Inventory management ensures critical medications are always in stock.",
 },
 {
 img: custocareReferral,
 title: "Internal & External Referral Coordination",
 desc: "Referrals should never mean starting over. Custocare manages referrals between departments within the same facility and to external facilities, carrying the patient's context forward every step of the way. Priority levels, expiry tracking, and status updates keep everyone aligned.",
 },
 {
 img: custocareAmbulance,
 title: "Ambulance Dispatch & Patient Transfer Management",
 desc: "Coordinate emergency and non-emergency patient transfers seamlessly. Dispatch vehicles, assign crew, track trips in real-time, and maintain complete logs for every transfer. Custocare ensures that critical care continues from the moment the ambulance is dispatched to arrival at the receiving facility.",
 },
 {
 img: custocareAdmin,
 title: "Facility Administration & Department Management",
 desc: "Manage facilities, departments, staff roles, and permissions - all from a single administration panel. Configure how your facility operates, define role-based access, and maintain oversight of every aspect of your operations. Custocare's administration tools scale from a single clinic to multi-facility health systems.",
 },
];

export function CustocareProduct() {
 return (
 <div className="mb-16">
 {/* Intro */}
 <div className="text-center max-w-4xl mx-auto mb-12">
 <div className="flex items-center justify-center gap-4 mb-4">
 <span className="text-caption font-semibold tracking-[0.12em] uppercase text-primary">01</span>
 <img src={custocareLogo} alt="Custocare" className="h-12 w-auto rounded-md border border-border" />
 <div className="text-left">
 <h3 className="font-heading text-h3 text-ink tracking-tight">Custocare</h3>
 <p className="text-text-secondary text-body-sm font-medium">Continuous Care. Clinical Excellence.</p>
 </div>
 </div>
 <p className="text-text-secondary text-body-lg leading-relaxed">
 Custocare is a comprehensive healthcare platform that unifies patient care, clinical workflows, nursing operations, laboratory services, pharmacy management, referrals, ambulance services, administration, and billing within a single connected ecosystem.
 </p>
 </div>

 <div className="space-y-12">
 {features.map((feat, i) => (
 <div key={feat.title} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
  <div className={i % 2 === 0 ? "" : "lg:order-2"}>
  <div className="rounded-lg overflow-hidden border border-border bg-white p-1.5 shadow-card-hover">
  <img src={feat.img} alt={feat.title} className="w-full h-auto rounded-md border border-border/50" />
  </div>
  </div>
 <div className={i % 2 === 0 ? "lg:order-1" : ""}>
 <h5 className="font-heading text-h4 text-ink mb-3">{feat.title}</h5>
 <p className="text-text-secondary text-body leading-relaxed">{feat.desc}</p>
 </div>
 </div>
 ))}
 </div>

 {/* CTA */}
 <div className="text-center mt-12">
 <p className="text-text-secondary text-body mb-6 max-w-2xl mx-auto leading-relaxed">
 Custocare powers the operational backbone of healthcare facilities by connecting every stage
 of the patient journey in one integrated system.
 </p>
 <a href="https://custocare.custospark.com" target="_blank" rel="noopener noreferrer">
 <Button variant="primary" size="lg">
 Explore Custocare <ArrowRight size={18} />
 </Button>
 </a>
 </div>
 </div>
 );
}
