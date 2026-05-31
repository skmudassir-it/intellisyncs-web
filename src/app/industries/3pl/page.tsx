import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  Users,
  FileText,
  Monitor,
  ArrowRight,
  CheckCircle,
  BarChart3,
  TrendingUp,
  Shield,
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
  title: "Third-Party Logistics",
  description:
    "Multi-tenant warehouse automation for 3PL operators — multi-client WMS orchestration, automated billing, and client-facing portals from IntelliSyncs.",
};

// ──────────────────────────────────────
// Data
// ──────────────────────────────────────

const capabilityCards = [
  {
    icon: Users,
    title: "Multi-Tenant WMS",
    description:
      "Orchestrate inventory, orders, and workflows for dozens of clients under one roof — each with isolated data, unique SLAs, and custom workflows.",
  },
  {
    icon: FileText,
    title: "Automated Billing",
    description:
      "Activity-based billing that captures every transaction — storage, picks, packs, value-added services — and generates accurate invoices automatically.",
  },
  {
    icon: Monitor,
    title: "Client Portals",
    description:
      "Branded dashboards for each client showing real-time inventory, order status, SLA performance, and billing history — transparency that builds trust.",
  },
  {
    icon: BarChart3,
    title: "SLA Monitoring",
    description:
      "Real-time SLA tracking with automated alerts — know when a client&rsquo;s order cutoff is approaching or when throughput is falling below commitment.",
  },
  {
    icon: TrendingUp,
    title: "Onboarding Automation",
    description:
      "Standardized client onboarding that spins up new inventory profiles, workflows, and portal access in hours — not weeks.",
  },
  {
    icon: Shield,
    title: "Data Isolation",
    description:
      "Strict logical and physical data separation between clients with role-based access controls, audit trails, and SOC 2-compliant architecture.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Profile",
    description:
      "Map each client&rsquo;s product catalog, SLA requirements, billing model, and integration points.",
  },
  {
    step: "02",
    title: "Provision",
    description:
      "Spin up dedicated workflows, inventory profiles, and portal access — automated client onboarding in hours.",
  },
  {
    step: "03",
    title: "Operate",
    description:
      "Run multi-tenant operations with automated task orchestration that optimizes across all clients simultaneously.",
  },
  {
    step: "04",
    title: "Report",
    description:
      "Automated invoicing, SLA dashboards, and performance analytics that make every client relationship transparent.",
  },
];

const techBlocks = [
  { label: "WMS Platforms", items: ["3PL Central", "Extensiv", "SnapFulfil", "Logiwa"] },
  { label: "Billing", items: ["Acumatica", "NetSuite", "QuickBooks", "Xero"] },
  { label: "Integration", items: ["REST APIs", "EDI 856/940/945", "sFTP", "Webhooks"] },
];

const results = [
  { stat: "5×", label: "Faster client onboarding" },
  { stat: "99%", label: "Billing accuracy" },
  { stat: "40+", label: "Clients per facility" },
];

// ──────────────────────────────────────
// Page
// ──────────────────────────────────────

export default function ThreePLPage() {
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
                  <Factory className="size-5 text-primary" />
                </div>
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  THIRD-PARTY LOGISTICS
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">
                Multi-tenant agility
                <br />
                <span className="text-primary">for 3PL operators</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Running a 3PL means juggling diverse clients, varied SLAs, and
                ever-changing requirements — all under one roof. Our multi-tenant
                automation gives you the flexibility to onboard rapidly while keeping
                every account profitable and transparent.
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
                src="/images/industry-3pl.jpg"
                alt="Multi-tenant 3PL warehouse automation and management"
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
            title="Built for the 3PL business model"
            description="Every capability designed around the core 3PL challenge: serving many clients as efficiently as one."
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
            title="Onboard clients, not complexity"
            description="A repeatable methodology that scales from your first client to your fiftieth."
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
            title="The 3PL tech stack you need"
            description="Purpose-built platforms for multi-client warehouse management, billing, and integration."
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
            Ready to scale your 3PL without scaling complexity?
          </h2>
          <p className="text-muted-foreground text-base mb-8">
            Let&rsquo;s build a multi-tenant automation platform that makes every
            client feel like your only client — while your margins keep growing.
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
