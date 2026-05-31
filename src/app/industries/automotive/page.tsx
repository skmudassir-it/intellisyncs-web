import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Cog,
  Timer,
  ArrowRight,
  CheckCircle,
  Wrench,
  Repeat,
  BarChart3,
  Workflow,
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
  title: "Automotive",
  description:
    "Just-in-time automation for automotive supply chains — JIT/JIS parts sequencing, ASRS buffer management, and line-side replenishment from IntelliSyncs.",
};

// ──────────────────────────────────────
// Data
// ──────────────────────────────────────

const capabilityCards = [
  {
    icon: Timer,
    title: "JIT & JIS Sequencing",
    description:
      "Just-in-Time and Just-in-Sequence parts delivery synchronized to your assembly line with sub-minute accuracy — no line stoppages.",
  },
  {
    icon: Repeat,
    title: "ASRS Buffer Systems",
    description:
      "Automated Storage and Retrieval Systems that buffer parts between receiving and the line, ensuring continuous flow without excess inventory.",
  },
  {
    icon: Wrench,
    title: "Line-Side Replenishment",
    description:
      "Automated tugger and AGV systems that keep line-side racks stocked — operators never wait for parts.",
  },
  {
    icon: Workflow,
    title: "EDI & Supplier Integration",
    description:
      "End-to-end electronic data interchange connecting your WMS to Tier 1, 2, and 3 suppliers for real-time demand signals and ASN processing.",
  },
  {
    icon: Cog,
    title: "Kitting & Sub-Assembly",
    description:
      "Automated kitting systems that pre-assemble modules before line delivery, reducing line-side complexity and takt time.",
  },
  {
    icon: BarChart3,
    title: "Production Analytics",
    description:
      "Real-time dashboards tracking parts availability, buffer levels, and supplier performance against production schedule.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Map the Line",
    description:
      "Analyze your production schedule, takt time, and parts consumption rates to design the automation sequence.",
  },
  {
    step: "02",
    title: "Build the Buffer",
    description:
      "Deploy ASRS and sequencing systems between receiving docks and the assembly line — no production disruption.",
  },
  {
    step: "03",
    title: "Sync Suppliers",
    description:
      "Integrate EDI feeds so your tiered suppliers receive demand signals in real time and ship to sequence.",
  },
  {
    step: "04",
    title: "Continuous Flow",
    description:
      "AI-driven replenishment optimizes buffer levels dynamically as production volumes and mix change.",
  },
];

const techBlocks = [
  { label: "ASRS Providers", items: ["Kardex", "Daifuku", "Swisslog", "TGW"] },
  { label: "AGV/AMR", items: ["KUKA", "MiR", "Seegrid", "JBT"] },
  { label: "ERP/WMS", items: ["SAP EWM", "Oracle SCM", "Plex", "QAD"] },
];

const results = [
  { stat: "99.9%", label: "Line uptime" },
  { stat: "60%", label: "Less inventory at line" },
  { stat: "8min", label: "Avg. replenishment time" },
];

// ──────────────────────────────────────
// Page
// ──────────────────────────────────────

export default function AutomotivePage() {
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
                  <Car className="size-5 text-primary" />
                </div>
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  AUTOMOTIVE
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">
                Just-in-time precision
                <br />
                <span className="text-primary">for automotive supply chains</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Automotive manufacturing doesn&rsquo;t wait. Our JIT-aligned
                automation synchronizes parts delivery to the assembly line with
                sub-minute accuracy — no line stoppages, no excess inventory.
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
                src="/images/industry-auto.jpg"
                alt="Automotive parts sequencing and ASRS warehouse automation"
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
            title="Zero line stoppages. Zero excess."
            description="Every capability engineered to keep the assembly line moving — perfectly synchronized, every shift."
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
            title="From line map to continuous flow"
            description="A phased methodology that integrates automation without touching production uptime."
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
            title="Integrated with your manufacturing stack"
            description="We connect to the ASRS, AGV, and ERP systems already running your plant floor."
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
            Never let the line stop for parts again
          </h2>
          <p className="text-muted-foreground text-base mb-8">
            Let&rsquo;s engineer a JIT automation system that keeps your assembly
            line running at full speed — every shift, every model, every day.
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
