import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Cog,
  Bot,
  Gauge,
  Clock,
  Shield,
  CheckCircle,
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
  title: "Automation & Robotics",
  description:
    "IntelliSyncs Automation & Robotics — Intelligent robotic systems that move at the speed of your business. Palletizers, AMRs, pick-and-place cells, and more.",
};

// ──────────────────────────────────────
// Data
// ──────────────────────────────────────

const capabilityCards = [
  {
    icon: Bot,
    title: "Robotic Palletizers",
    description:
      "High-speed palletizing and depalletizing systems that handle mixed SKUs with precision, eliminating manual stacking bottlenecks.",
  },
  {
    icon: Bot,
    title: "Autonomous Mobile Robots",
    description:
      "AMRs that navigate dynamically through your facility, transporting goods between zones without fixed infrastructure.",
  },
  {
    icon: Cog,
    title: "Pick-and-Place Cells",
    description:
      "Vision-guided robotic cells that identify, pick, and sort items at speeds far surpassing human capabilities.",
  },
  {
    icon: Gauge,
    title: "Conveyor Systems",
    description:
      "Modular, high-throughput conveyor networks that seamlessly move product between induction, sortation, and shipping.",
  },
  {
    icon: BarChart3,
    title: "Automated Storage & Retrieval",
    description:
      "ASRS solutions that maximize vertical space and deliver goods to workstations on demand with sub-second retrieval times.",
  },
  {
    icon: Shield,
    title: "Quality Control Vision",
    description:
      "AI-powered inspection systems that detect defects, verify labels, and ensure every outbound order meets your quality standards.",
  },
];

const processSteps = [
  {
    icon: Clock,
    step: "01",
    title: "Assess",
    description:
      "We evaluate your current workflows, throughput targets, and physical footprint to identify the highest-impact automation opportunities.",
  },
  {
    icon: Cog,
    step: "02",
    title: "Design",
    description:
      "Our engineers create a tailored blueprint — selecting the right robots, end-effectors, safety systems, and integration layers.",
  },
  {
    icon: Bot,
    step: "03",
    title: "Deploy",
    description:
      "Phased rollout with parallel testing ensures zero production downtime. On-site commissioning and full operator training included.",
  },
  {
    icon: Gauge,
    step: "04",
    title: "Optimize",
    description:
      "We monitor real-time KPIs, fine-tune cycle times, and push OTA updates to keep your fleet running at peak performance.",
  },
];

const techBlocks = [
  {
    icon: Cog,
    title: "Industrial Robots",
    description:
      "KUKA, ABB, and FANUC robotic arms deployed across palletizing, picking, and assembly applications with precision down to ±0.02 mm.",
  },
  {
    icon: BarChart3,
    title: "Fleet Management",
    description:
      "Centralized orchestration software that coordinates AMR fleets, optimizes traffic flow, and dynamically re-routes based on real-time conditions.",
  },
  {
    icon: Shield,
    title: "Safety Systems",
    description:
      "ISO 13849-compliant safety architecture with LiDAR, light curtains, and collaborative mode for safe human-robot workspaces.",
  },
  {
    icon: Clock,
    title: "Real-Time Monitoring",
    description:
      "Live dashboards tracking OEE, cycle times, and throughput with predictive maintenance alerts to prevent unplanned downtime.",
  },
];

const resultsMetrics = [
  {
    icon: Gauge,
    value: "40%",
    label: "Faster Cycle Times",
  },
  {
    icon: CheckCircle,
    value: "60%",
    label: "Fewer Errors",
  },
  {
    icon: BarChart3,
    value: "3×",
    label: "Throughput Increase",
  },
];

// ──────────────────────────────────────
// Sections
// ──────────────────────────────────────

function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#060b14]">
      {/* Background image */}
      <Image
        src="/images/solution-automation.jpg"
        alt="Automation & Robotics"
        fill
        className="pointer-events-none object-cover opacity-40"
        priority
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060b14]/80 via-[#060b14]/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Solutions
        </p>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Automation &amp; Robotics
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70 sm:text-xl">
          Intelligent robotic systems that move at the speed of your business —
          deployed end-to-end across your warehouse.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact">
            <Button size="lg" className="font-semibold group">
              Schedule a Consultation
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <SectionHeading
              label="OVERVIEW"
              title="End-to-End Warehouse Automation"
              className="text-left max-w-none mx-0"
            />

            <p className="text-base leading-relaxed text-muted-foreground">
              At IntelliSyncs, we design and deploy complete automation ecosystems
              that transform manual warehouses into intelligent, lights-out
              facilities. From high-speed robotic palletizers and autonomous mobile
              robots (AMRs) to AI-powered quality control vision systems, every
              solution is engineered to reduce cycle times, eliminate errors, and
              scale with your growing operational demands.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              Our team brings decades of combined experience in industrial robotics,
              control systems engineering, and warehouse operations. We don&rsquo;t
              just drop in hardware — we integrate every component into a cohesive
              system backed by real-time monitoring, predictive maintenance, and
              continuous optimization. The result: a facility that runs faster,
              safer, and more profitably, 24 hours a day.
            </p>
          </div>

          {/* Metrics sidebar */}
          <div className="space-y-6">
            <Card className="bg-card/60 ring-1 ring-primary/20 border-none">
              <CardContent className="py-6 space-y-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-2">
<Bot className="size-5 text-primary" />
                    <span className="text-3xl font-extrabold text-foreground">40%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Average efficiency gain across deployments</p>
                </div>

                <hr className="border-border/50" />

                <div className="text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-2">
<Bot className="size-5 text-primary" />
                    <span className="text-3xl font-extrabold text-foreground">99.9%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">System uptime with redundant failover</p>
                </div>

                <hr className="border-border/50" />

                <div className="text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-2">
<Bot className="size-5 text-primary" />
                    <span className="text-3xl font-extrabold text-foreground">24/7</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Continuous lights-out operation capability</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="CAPABILITIES"
          title="What Our Automation Can Do"
          description="Six core automation capabilities that drive measurable results across every zone of your warehouse."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilityCards.map((cap) => (
            <Card
              key={cap.title}
              className="group border-border bg-card/60 transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary group-hover:text-white">
                  <cap.icon className="size-6" />
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
  );
}

function HowItWorks() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="HOW IT WORKS"
          title="From Assessment to Optimization"
          description="A proven four-phase methodology that takes your facility from manual to fully automated with zero disruption."
        />

        <div className="mt-16">
          {/* Desktop: horizontal steps */}
          <div className="relative hidden lg:block">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-10 h-0.5 bg-gradient-to-r from-primary/60 via-primary/40 to-primary/60" />

            <div className="relative grid grid-cols-4 gap-8">
              {processSteps.map((s) => (
                <div key={s.title} className="flex flex-col items-center text-center">
                  {/* Step circle */}
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-background ring-2 ring-primary/40 shadow-lg shadow-primary/5">
<Bot className="size-5 text-primary" />
                  </div>
                  {/* Step number */}
                  <span className="mt-4 text-xs font-bold uppercase tracking-widest text-primary">
                    Step {s.step}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical steps */}
          <div className="relative space-y-10 lg:hidden">
            {/* Vertical line */}
            <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/60" />

            {processSteps.map((s) => (
              <div key={s.title} className="relative flex gap-6 pl-14">
                {/* Step circle */}
                <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-background ring-2 ring-primary/40 shadow-md shadow-primary/5">
<Bot className="size-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    Step {s.step}
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section className="bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="TECHNOLOGY"
          title="Powered by Industry-Leading Tech"
          description="We partner with world-class hardware and software vendors to deliver reliable, future-proof automation."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techBlocks.map((tech) => (
            <Card
              key={tech.title}
              className="group border-border bg-card/60 transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary group-hover:text-white">
                  <tech.icon className="size-6" />
                </div>
                <CardTitle className="text-base">{tech.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {tech.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-[#0a0e17] py-16 sm:py-20">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid gap-8 sm:grid-cols-3 text-center">
          {resultsMetrics.map((metric) => (
            <div key={metric.label} className="space-y-3">
              <div className="flex items-center justify-center gap-2">
                <metric.icon className="size-6 text-white/60" />
                <span className="text-4xl font-extrabold text-white sm:text-5xl">
                  {metric.value}
                </span>
              </div>
              <p className="text-base font-medium text-white/80">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudy() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Card className="relative overflow-hidden bg-card/60 border-border">
          <CardContent className="py-10 px-8 sm:px-12">
            <div className="flex flex-col sm:flex-row items-start gap-8">
              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2">
                  <Star className="size-5 fill-primary text-primary" />
                  <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                    Case Study
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                  Global Logistics Inc.
                </h3>

                <p className="text-base leading-relaxed text-muted-foreground">
                  We deployed a fleet of 18 autonomous mobile robots and 4
                  robotic palletizing cells across their 500,000 sq ft
                  distribution center. The result: a 40% reduction in cycle
                  times, 60% fewer picking errors, and the ability to operate
                  24/7 during peak seasons without adding headcount.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle className="size-4 text-primary" />
                    18 AMRs deployed
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle className="size-4 text-primary" />
                    500K sq ft facility
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle className="size-4 text-primary" />
                    40% cycle time reduction
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="shrink-0 flex flex-col gap-4 items-start sm:items-end">
                <Link href="/projects">
                  <Button size="lg" className="font-semibold group">
                    View Full Case Study
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-[#0a0e17] py-20 sm:py-24">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <SectionHeading
          label="READY TO AUTOMATE?"
          title="Let&rsquo;s Build Your Automated Warehouse"
          description="Get in touch with our engineering team to discuss your automation goals and see what&rsquo;s possible."
          light
        />

        <div className="mt-8">
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="font-semibold group shadow-lg">
              Start Your Automation Journey
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────
// Page
// ──────────────────────────────────────

export default function AutomationPage() {
  return (
    <>
      <Hero />
      <Overview />
      <Capabilities />
      <HowItWorks />
      <Technology />
      <Results />
      <CaseStudy />
      <Cta />
    </>
  );
}
