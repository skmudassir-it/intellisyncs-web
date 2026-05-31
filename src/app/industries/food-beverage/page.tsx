import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  UtensilsCrossed,
  Thermometer,
  Search,
  Shield,
  ArrowRight,
  CheckCircle,
  Clock,
  Box,
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
  title: "Food & Beverage",
  description:
    "Safe, traceable food logistics automation — temperature-controlled zones, lot-level traceability, and rapid recall response from IntelliSyncs.",
};

// ──────────────────────────────────────
// Data
// ──────────────────────────────────────

const capabilityCards = [
  {
    icon: Thermometer,
    title: "Temperature-Controlled Zones",
    description:
      "Multi-zone environments — frozen (-20°C), chilled (2–8°C), and ambient — with continuous monitoring and automated alerting.",
  },
  {
    icon: Search,
    title: "Lot-Level Traceability",
    description:
      "Full lot and batch tracking from receiving through dispatch — every ingredient, every finished product traceable in seconds.",
  },
  {
    icon: Clock,
    title: "FIFO & FEFO Rotation",
    description:
      "Automated First-Expired-First-Out inventory rotation that prioritizes shelf-life constraints, reducing spoilage and obsolescence.",
  },
  {
    icon: Shield,
    title: "Allergen Safeguards",
    description:
      "Automated segregation of allergen-containing products with validated cleaning protocols and cross-contamination prevention.",
  },
  {
    icon: Box,
    title: "Rapid Recall Readiness",
    description:
      "When every minute counts — pinpoint affected lots in seconds, halt shipments automatically, and generate regulatory notification reports instantly.",
  },
  {
    icon: BarChart3,
    title: "Shelf-Life Analytics",
    description:
      "Predictive models that optimize rotation, flag at-risk inventory before it expires, and suggest markdown or donation strategies.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Audit",
    description:
      "Map your cold chain — temperature zones, product types, shelf-life constraints, and allergen profiles across your network.",
  },
  {
    step: "02",
    title: "Segregate",
    description:
      "Deploy zone-based automation that physically and logically separates products by temperature, allergen, and rotation requirement.",
  },
  {
    step: "03",
    title: "Trace",
    description:
      "Implement lot-level tracking with automated data capture at every touchpoint — receiving, storage, picking, and dispatch.",
  },
  {
    step: "04",
    title: "Respond",
    description:
      "Build recall runbooks into the system — one-click recall execution with automated notification to regulators and customers.",
  },
];

const techBlocks = [
  { label: "Compliance", items: ["FSMA 204", "FDA 21 CFR", "BRCGS", "SQF"] },
  { label: "Monitoring", items: ["Sensitech", "Monnit", "Testo Saveris", "Hanwell"] },
  { label: "Traceability", items: ["FoodLogiQ", "TraceGains", "SafetyChain", "iTrade"] },
];

const results = [
  { stat: "60%", label: "Less spoilage" },
  { stat: "45s", label: "Average recall response" },
  { stat: "100%", label: "Audit compliance" },
];

// ──────────────────────────────────────
// Page
// ──────────────────────────────────────

export default function FoodBeveragePage() {
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
                  <UtensilsCrossed className="size-5 text-primary" />
                </div>
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  FOOD &amp; BEVERAGE
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">
                Safe, traceable, and
                <br />
                <span className="text-primary">audit-ready food logistics</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Food supply chains face unique pressures: shelf-life constraints,
                allergen segregation, and stringent traceability mandates. Our
                automation keeps your products safe and your brand protected.
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
                src="/images/industry-food-beverage.jpg"
                alt="Food and beverage temperature-controlled warehouse automation"
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
            title="From receipt to recall — total control"
            description="Every capability designed to protect consumers, pass audits, and eliminate food waste."
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
            title="Four steps to food safety at scale"
            description="A systematic approach that embeds traceability and compliance into every automated workflow."
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
            title="Built on food safety standards"
            description="We integrate with the regulatory and traceability platforms your QA team relies on."
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
            Ready to protect your products and your brand?
          </h2>
          <p className="text-muted-foreground text-base mb-8">
            Let&rsquo;s design a food-safe automation system that reduces spoilage,
            accelerates recalls, and keeps you audit-ready every day.
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
