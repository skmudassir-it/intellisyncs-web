import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Pill,
  Shield,
  Thermometer,
  ClipboardCheck,
  ArrowRight,
  CheckCircle,
  Search,
  Box,
  Truck,
  BarChart3,
  Star,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Pharmaceuticals",
  description:
    "GMP-compliant warehouse automation for pharmaceutical distribution — cold chain integrity, serialization, and validated workflows from IntelliSyncs.",
};

// ──────────────────────────────────────
// Data
// ──────────────────────────────────────

const capabilityCards = [
  {
    icon: Shield,
    title: "GMP & GDP Compliance",
    description:
      "Validated workflows that meet current Good Manufacturing Practice and Good Distribution Practice standards — every process documented, every deviation tracked.",
  },
  {
    icon: Thermometer,
    title: "Cold Chain Integrity",
    description:
      "Continuous temperature monitoring across all storage and transport zones with automated alerts and corrective-action triggers.",
  },
  {
    icon: Search,
    title: "Serialization & Track-and-Trace",
    description:
      "End-to-end serialization from manufacturing through distribution — full DSCSA compliance with unit-level traceability.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit-Ready Documentation",
    description:
      "Automated batch record generation, deviation logging, and audit trail maintenance — pass any FDA or EMA inspection with confidence.",
  },
  {
    icon: Box,
    title: "Temperature-Controlled Picking",
    description:
      "Zone-based picking in validated 2–8°C and 15–25°C environments, with automated expiry-date prioritization.",
  },
  {
    icon: Truck,
    title: "Last-Mile Cold Chain",
    description:
      "Integration with validated cold chain carriers ensures temperature integrity from your dock to the pharmacy or hospital door.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Validate",
    description:
      "Map your current GMP workflows and identify automation points that maintain — or enhance — compliance posture.",
  },
  {
    step: "02",
    title: "Integrate",
    description:
      "Deploy validated automation systems with full IQ/OQ/PQ documentation, integrated to your existing QMS.",
  },
  {
    step: "03",
    title: "Monitor",
    description:
      "Continuous environment monitoring with automated deviation handling — no manual log checks required.",
  },
  {
    step: "04",
    title: "Scale",
    description:
      "Add capacity, new temperature zones, or additional product lines without re-validation overhead.",
  },
];

const techBlocks = [
  { label: "Regulatory", items: ["FDA 21 CFR Part 11", "EU GMP Annex 11", "DSCSA"] },
  { label: "Monitoring", items: ["Sensitech", "Elpro", "Vaisala", "Testo"] },
  { label: "Integration", items: ["SAP ATTP", "TraceLink", "rfxcel", "Optel"] },
];

const results = [
  { stat: "100%", label: "Audit pass rate" },
  { stat: "3×", label: "Faster batch release" },
  { stat: "0", label: "Temperature excursions" },
];

// ──────────────────────────────────────
// Page
// ──────────────────────────────────────

export default function PharmaceuticalsPage() {
  return (
    <>
      {/* ================================================================ */}
      {/*  Hero                                                             */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                  <Pill className="size-5 text-primary" />
                </div>
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  PHARMACEUTICALS
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">
                GMP-compliant automation
                <br />
                <span className="text-primary">for life sciences</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Pharmaceutical distribution demands uncompromising precision. Our
                validated systems enforce GMP protocols, maintain cold chain integrity,
                and deliver end-to-end serialization — so every dose is traceable from
                dock to patient.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="font-semibold group">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="#capabilities">
                  <Button size="lg" variant="outline">
                    Explore Capabilities
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden ring-1 ring-border/50 shadow-2xl">
              <Image
                src="/images/industry-pharma.jpg"
                alt="Pharmaceutical cold chain warehouse automation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-tr from-background/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  Capabilities                                                     */}
      {/* ================================================================ */}
      <section id="capabilities" className="py-20 sm:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="CAPABILITIES"
            title="Built for regulatory excellence"
            description="Every capability is designed to maintain compliance while driving operational efficiency."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {capabilityCards.map((cap) => (
              <Card key={cap.title} className="group transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 mb-4">
                    <cap.icon className="size-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{cap.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {cap.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  Process                                                          */}
      {/* ================================================================ */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="OUR PROCESS"
            title="From validation to scale"
            description="A proven methodology for deploying automation in regulated environments."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="text-5xl font-bold text-primary/20 mb-3">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  Technology                                                       */}
      {/* ================================================================ */}
      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="TECHNOLOGY"
            title="Regulatory-ready tech stack"
            description="We integrate with the systems your quality and regulatory teams already trust."
          />

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {techBlocks.map((block) => (
              <Card key={block.label}>
                <CardHeader>
                  <CardTitle className="text-base">{block.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="size-3.5 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  Results                                                          */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary to-primary/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {results.map((r) => (
              <div key={r.label}>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {r.stat}
                </div>
                <div className="text-primary-foreground/80 text-sm font-medium">
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  CTA                                                              */}
      {/* ================================================================ */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Star className="size-12 text-primary mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Ready to automate your pharmaceutical distribution?
          </h2>
          <p className="text-muted-foreground text-base mb-8">
            Let&rsquo;s discuss how our validated systems can accelerate your batch
            release, eliminate temperature excursions, and keep you audit-ready
            every day.
          </p>
          <Link href="/contact">
            <Button size="lg" className="font-semibold group">
              Get Started
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
