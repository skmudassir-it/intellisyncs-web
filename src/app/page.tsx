import Image from "next/image";
import Link from "next/link";
import {
  Cloud,
  Shield,
  Code,
  Search,
  Wrench,
  Rocket,
  Play,
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

// ──────────────────────────────────────
// Data
// ──────────────────────────────────────

const pillars = [
  {
    icon: Cloud,
    title: "Automation & Robotics",
    description:
      "Deploy advanced robotics and automated systems that streamline picking, packing, and sorting — reducing manual labor and increasing throughput.",
  },
  {
    icon: Shield,
    title: "AI-Powered Software",
    description:
      "Leverage machine learning algorithms for demand forecasting, inventory optimization, and real-time decision intelligence across your supply chain.",
  },
  {
    icon: Code,
    title: "Seamless Integration",
    description:
      "Connect your WMS, ERP, and IoT devices into one unified platform with our API-first architecture — no rip-and-replace required.",
  },
];

const processSteps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Analysis",
    description:
      "We audit your current operations, identify bottlenecks, and map opportunities for automation.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "Custom Solution Design",
    description:
      "Our engineers architect a tailored solution blending robotics, software, and integration layers.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Seamless Implementation",
    description:
      "We deploy with minimal disruption — phased rollouts, parallel testing, and on-site support.",
  },
  {
    icon: Play,
    step: "04",
    title: "Launch & Optimization",
    description:
      "Go live with confidence. We monitor KPIs, fine-tune performance, and drive continuous improvement.",
  },
];

const testimonials = [
  {
    quote:
      "IntelliSyncs transformed our distribution center. We saw a 40% increase in pick accuracy within the first quarter.",
    name: "Michael Torres",
    title: "VP of Operations",
    company: "Atlas Logistics",
  },
  {
    quote:
      "The AI-powered inventory system cut our overstock by 30%. The integration with our existing WMS was seamless.",
    name: "Sarah Chen",
    title: "Supply Chain Director",
    company: "Meridian Foods",
  },
  {
    quote:
      "Their robotics deployment was the smoothest vendor engagement we've ever had. Our throughput doubled in six months.",
    name: "David Okonkwo",
    title: "Chief Technology Officer",
    company: "Vertex Fulfillment",
  },
];

// ──────────────────────────────────────
// Sections
// ──────────────────────────────────────

function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-[#060b14]">
      {/* Background image */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover opacity-40"
        priority
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060b14]/80 via-[#060b14]/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          IntelliSyncs
        </p>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          The Future of Warehouse Efficiency is Here
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70 sm:text-xl">
          Automate, integrate, and innovate with AI-powered robotics and
          intelligent software — purpose-built for the modern supply chain.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/solutions"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Explore Our Solutions
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-input px-6 py-3 text-base font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

function CorePillars() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Core Pillars"
          title="Built for the Modern Warehouse"
          description="Three pillars power every IntelliSyncs deployment — combining physical automation, intelligent software, and unified connectivity."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="group border-border bg-card/60 transition-shadow hover:shadow-lg hover:shadow-primary/5">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary group-hover:text-white">
                  <pillar.icon className="size-6" />
                </div>
                <CardTitle className="text-lg">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function SmartProcess() {
  return (
    <section className="bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="S.M.A.R.T. Process"
          title="How We Deliver Results"
          description="A proven four-phase methodology that takes you from discovery to continuous optimization."
        />

        {/* Horizontal timeline */}
        <div className="mt-16">
          {/* Desktop: horizontal steps */}
          <div className="relative hidden lg:block">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-10 h-0.5 bg-gradient-to-r from-primary/60 via-primary/40 to-primary/60" />

            <div className="relative grid grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <div key={step.title} className="flex flex-col items-center text-center">
                  {/* Step circle */}
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-background ring-2 ring-primary/40 shadow-lg shadow-primary/5">
                    <step.icon className="size-8 text-primary" />
                  </div>
                  {/* Step number */}
                  <span className="mt-4 text-xs font-bold uppercase tracking-widest text-primary">
                    Step {step.step}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical steps */}
          <div className="relative space-y-10 lg:hidden">
            {/* Vertical line */}
            <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/60" />

            {processSteps.map((step) => (
              <div key={step.title} className="relative flex gap-6 pl-14">
                {/* Step circle */}
                <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-background ring-2 ring-primary/40 shadow-md shadow-primary/5">
                  <step.icon className="size-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    Step {step.step}
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
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

function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Testimonials"
          title="Trusted by Industry Leaders"
          description="Hear from the teams that run on IntelliSyncs every day."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="relative border-border bg-card/60 pt-10"
            >
              {/* Quote icon */}
              <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                <Star className="size-5 fill-white" />
              </div>

              <CardContent className="flex flex-col gap-4">
                <blockquote className="text-sm leading-relaxed text-foreground/85 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-auto border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.title}, {t.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-[#0a0e17] py-20 sm:py-24">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready to Transform Your Warehouse?
        </h2>
        <p className="mb-8 text-lg text-white/70">
          Let&apos;s build a smarter, faster, and more efficient operation
          together. Our team is ready to show you what&apos;s possible.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-base font-semibold text-primary hover:bg-white/90 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

// ──────────────────────────────────────
// Page
// ──────────────────────────────────────

export default function Home() {
  return (
    <>
      <Hero />
      <CorePillars />
      <SmartProcess />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
