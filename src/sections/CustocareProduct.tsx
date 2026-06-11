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
    desc: "Patients, doctors, nurses, pharmacists, lab technicians, health practitioners, and facility owners — every role has a place here. From the moment you land, Custocare's home screen communicates its core promise of Continuous Care and Clinical Excellence, while pointing each user toward the tools and information that matter most to them.",
  },
  {
    img: custocareMedical,
    title: "Comprehensive Patient Records",
    desc: "Every patient's story starts here. From registration through every visit, treatment, and outcome, Custocare maintains a single, unified record that follows the patient across every department. No more repeated histories, no lost files, no gaps in care. Clinicians get the full picture every time.",
  },
  {
    img: custocareClinical,
    title: "Clinical Consultations & Care Planning",
    desc: "Designed for how clinicians actually work. Custocare lets you document consultations, record vitals, capture diagnoses, and build care plans — all within a structured workflow that supports clinical decision-making. SOAP notes, prescriptions, and allergy tracking are built in, so nothing falls through the cracks.",
  },
  {
    img: custocareNursing,
    title: "Nursing Operations & Treatment Tracking",
    desc: "Ward management, bed assignments, medication administration, task handovers, and shift changeovers — nursing is the backbone of continuous care. Custocare gives nurses the tools to track every treatment, every handover, and every patient under their care with clarity and accountability.",
  },
  {
    img: custocareLab,
    title: "Laboratory Workflow Management",
    desc: "From request to result, Custocare connects the lab to the rest of the facility. Clinicians place orders directly from the patient record. Lab techs receive, process, and verify results. Results appear automatically in the patient's chart — no phone calls, no chasing papers, no delays.",
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
    desc: "Manage facilities, departments, staff roles, and permissions — all from a single administration panel. Configure how your facility operates, define role-based access, and maintain oversight of every aspect of your operations. Custocare's administration tools scale from a single clinic to multi-facility health systems.",
  },
];

export function CustocareProduct() {
  return (
    <div className="mb-24">
      {/* Intro */}
      <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-6 mb-4">
              <span className="text-orange-400 text-2xl font-bold tracking-wide">01</span>
              <img src={custocareLogo} alt="Custocare" className="h-14 w-auto rounded-full" />
              <div className="text-left">
                <h3 className="font-heading text-h1 text-white uppercase tracking-wide">Custocare</h3>
                <p className="text-orange-400/90 text-body font-medium">Continuous Care. Clinical Excellence.</p>
              </div>
            </div>
        <p className="text-white/80 text-body-lg leading-relaxed">
          Custocare is a comprehensive healthcare platform that unifies patient care, clinical workflows, nursing operations, laboratory services, pharmacy management, referrals, ambulance services, administration, and billing within a single connected ecosystem.
        </p>
      </div>

      <div className="space-y-20">
        {features.map((feat, i) => (
          <div key={feat.title} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className={i % 2 === 0 ? "" : "lg:order-2"}>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src={feat.img} alt={feat.title} className="w-full h-auto" />
              </div>
            </div>
            <div className={i % 2 === 0 ? "lg:order-1" : ""}>
              <h5 className="font-heading text-h4 text-white mb-4">{feat.title}</h5>
              <p className="text-white/70 text-body-lg leading-relaxed">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="text-white/80 text-body-lg mb-6 max-w-2xl mx-auto">
          Custocare powers the operational backbone of healthcare facilities by connecting every stage
          of the patient journey in one integrated system.
        </p>
        <a href="https://custocare.custospark.com" target="_blank" rel="noopener noreferrer">
          <Button variant="accent" size="lg">
            Explore Custocare <ArrowRight size={20} />
          </Button>
        </a>
      </div>
    </div>
  );
}
