import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/* -------------------------------------------------------------------------- */
/*  Metadata
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore 8 real-world warehouse automation case studies — from AI-powered sorting and robotic fleets to cloud WMS migrations and digital twins.",
};

/* -------------------------------------------------------------------------- */
/*  Types
/* -------------------------------------------------------------------------- */

interface Project {
  slug: string;
  image: string;
  title: string;
  client: string;
  industry: string;
  date: string;
  description: string;
  results: string[];
}

/* -------------------------------------------------------------------------- */
/*  Data
/* -------------------------------------------------------------------------- */

const projects: Project[] = [
  {
    slug: "full-warehouse-automation",
    image: "/images/project-01.jpg",
    title: "Full Warehouse Automation",
    client: "Global Logistics Inc.",
    industry: "3PL & Logistics",
    date: "March 2026",
    description:
      "End-to-end automation of a 500,000 sq-ft distribution center with robotic picking, autonomous mobile robots, and AI-powered WMS integration.",
    results: [
      "40% efficiency gain",
      "60% faster order processing",
      "99.8% picking accuracy",
      "ROI achieved in 14 months",
    ],
  },
  {
    slug: "smart-robotics-integration",
    image: "/images/project-02.jpg",
    title: "Smart Robotics Integration",
    client: "Future-Proof Manufacturing",
    industry: "Industrial Manufacturing",
    date: "January 2026",
    description:
      "Seamless integration of collaborative robots and automated guided vehicles into an active production facility without disrupting ongoing operations.",
    results: [
      "Zero downtime migration",
      "35% increase in throughput",
      "50% reduction in manual handling",
      "Full production maintained during install",
    ],
  },
  {
    slug: "ai-powered-sorting-system",
    image: "/images/project-03.jpg",
    title: "AI-Powered Sorting System",
    client: "Innovate Distribution",
    industry: "E-Commerce Fulfillment",
    date: "November 2025",
    description:
      "Deployed a machine learning-based sorting system that classifies and routes packages in real-time, eliminating manual sortation bottlenecks.",
    results: [
      "99.9% sortation accuracy",
      "3× faster package processing",
      "70% reduction in misroutes",
      "Scaled to 100K+ packages/day",
    ],
  },
  {
    slug: "end-to-end-digital-twin",
    image: "/images/project-04.jpg",
    title: "End-to-End Digital Twin",
    client: "Prime Fulfillment Corp.",
    industry: "Retail Distribution",
    date: "September 2025",
    description:
      "Built a complete digital twin of a multi-site fulfillment network, enabling real-time simulation, predictive analytics, and proactive operational optimization.",
    results: [
      "30% cost reduction",
      "45% fewer bottlenecks",
      "Real-time KPI visibility",
      "Simulated 10K+ scenarios",
    ],
  },
  {
    slug: "predictive-inventory-ai",
    image: "/images/project-05.jpg",
    title: "Predictive Inventory AI",
    client: "Nexus Supply Chain",
    industry: "Cold Chain Logistics",
    date: "July 2025",
    description:
      "Implemented AI-driven demand forecasting and inventory optimization across 12 cold-storage facilities, reducing spoilage and improving stock availability.",
    results: [
      "25% less waste",
      "98% stock availability",
      "40% lower holding costs",
      "12 facilities unified",
    ],
  },
  {
    slug: "autonomous-vehicle-fleet",
    image: "/images/project-06.jpg",
    title: "Autonomous Vehicle Fleet",
    client: "Atlas Warehousing",
    industry: "Third-Party Logistics",
    date: "May 2025",
    description:
      "Deployed a fleet of 45 autonomous mobile robots across a 750,000 sq-ft facility, orchestrated by our AI control platform for maximum efficiency.",
    results: [
      "50% faster throughput",
      "80% reduction in travel time",
      "45 AMRs in operation",
      "24/7 autonomous operation",
    ],
  },
  {
    slug: "cloud-wms-migration",
    image: "/images/project-07.jpg",
    title: "Cloud WMS Migration",
    client: "Vertex Logistics",
    industry: "Freight & Logistics",
    date: "March 2025",
    description:
      "Migrated legacy on-premise warehouse management systems to a cloud-native platform with zero data loss and minimal operational impact.",
    results: [
      "60% faster processing",
      "Zero data loss during migration",
      "99.99% uptime on cloud",
      "2-week cutover completed",
    ],
  },
  {
    slug: "multi-channel-fulfillment-hub",
    image: "/images/project-08.jpg",
    title: "Multi-Channel Fulfillment Hub",
    client: "Omega Retail DC",
    industry: "Omnichannel Retail",
    date: "January 2025",
    description:
      "Transformed a traditional distribution center into an omnichannel fulfillment hub handling B2B, B2C, and direct-to-consumer orders from a single facility.",
    results: [
      "3× order capacity",
      "Same-day shipping enabled",
      "99.5% order accuracy",
      "Unified B2B + B2C operations",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Page Component
/* -------------------------------------------------------------------------- */

export default function ProjectsPage() {
  return (
    <>
      {/* ================================================================== */}
      {/*  Banner                                                             */}
      {/* ================================================================== */}
      <section className="relative overflow-hidden bg-linear-to-b from-primary/15 via-background to-background pt-20 pb-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,var(--primary)_0%,transparent_60%)] opacity-10"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            label="OUR WORK"
            title="Featured Projects"
            description="Real-world warehouse automation deployments — built, delivered, and running in production today."
          />
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Projects Grid                                                      */}
      {/* ================================================================== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="group flex flex-col"
              >
                {/* ── Project Image ── */}
                <div className="relative aspect-video w-full shrink-0">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.client}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-t-xl object-cover"
                  />
                  {/* Subtle overlay */}
                  <div className="pointer-events-none absolute inset-0 rounded-t-xl bg-linear-to-t from-card/60 to-transparent" />
                </div>

                {/* ── Card Content ── */}
                <CardContent className="flex flex-1 flex-col gap-4 pt-5 pb-5">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground tracking-tight">
                    {project.title}
                  </h3>

                  {/* Client badge & date row */}
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Building2 className="size-4 text-primary/60" />
                      {project.client}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="size-4 text-primary/60" />
                      {project.date}
                    </span>
                  </div>

                  {/* Industry badge */}
                  <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                    {project.industry}
                  </span>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Key Results */}
                  <div className="mt-auto space-y-2 rounded-lg bg-muted/40 p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Key Results
                    </p>
                    <ul className="space-y-2">
                      {project.results.map((result) => (
                        <li
                          key={result}
                          className="flex items-start gap-2.5 text-sm text-foreground/90"
                        >
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Link */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    View Case Study
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  CTA Banner                                                         */}
      {/* ================================================================== */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary to-primary/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 text-center">
          <SectionHeading
            label="READY TO START?"
            title="Let&rsquo;s build your next success story"
            description="Get in touch with our team to discuss your warehouse automation challenges — we&rsquo;ll engineer the right solution for you."
            light
          />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="font-semibold group shadow-lg"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
