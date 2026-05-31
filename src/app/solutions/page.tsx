import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cpu, BarChart3, ArrowRight, GitMerge, Cog, Zap, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore IntelliSyncs solutions: Automation & Robotics, AI-Powered Software, and Seamless System Integration for modern warehouses.",
};

interface SolutionSection {
  id: string;
  icon: React.ReactNode;
  overline: string;
  title: string;
  description: string;
  features: { icon: React.ReactNode; label: string }[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

const solutions: SolutionSection[] = [
  {
    id: "automation",
    icon: <Cpu className="size-6 text-primary" />,
    overline: "AUTOMATION & ROBOTICS",
    title: "Intelligent robotic systems that move at the speed of your business",
    description:
      "From palletizers and autonomous guided vehicles to full-scale robotic picking cells, we design and deploy automation systems that slash cycle times, reduce human error, and scale with your warehouse.",
    features: [
      { icon: <Cog className="size-4" />, label: "High-speed palletizers & de-palletizers" },
      { icon: <Cog className="size-4" />, label: "AGVs & AMRs for materials transport" },
      { icon: <Cog className="size-4" />, label: "Pick-and-place robotic cells" },
      { icon: <Cog className="size-4" />, label: "24/7 operation with minimal downtime" },
    ],
    imageSrc: "/images/project-01.jpg",
    imageAlt: "Robotic automation system in a warehouse",
  },
  {
    id: "ai-software",
    icon: <BarChart3 className="size-6 text-primary" />,
    overline: "AI-POWERED SOFTWARE",
    title: "Smarter decisions, faster — powered by machine learning",
    description:
      "Our AI engine continuously analyzes warehouse operations to optimize inventory placement, predict demand surges, and surface real-time insights through intuitive dashboards — so your team stays ahead of every shift.",
    features: [
      { icon: <Zap className="size-4" />, label: "ML-driven inventory optimization" },
      { icon: <Zap className="size-4" />, label: "Predictive demand analytics" },
      { icon: <Zap className="size-4" />, label: "Real-time operational dashboards" },
      { icon: <Zap className="size-4" />, label: "Anomaly detection & alerting" },
    ],
    imageSrc: "/images/project-02.jpg",
    imageAlt: "AI-powered software analytics dashboard",
    reverse: true,
  },
  {
    id: "integration",
    icon: <GitMerge className="size-6 text-primary" />,
    overline: "SEAMLESS INTEGRATION",
    title: "One unified platform across your entire operation",
    description:
      "We connect your WMS, ERP, IoT sensors, and automation hardware into a single pane of glass. No more data silos — just real-time visibility and coordinated execution across your facility.",
    features: [
      { icon: <ShieldCheck className="size-4" />, label: "WMS & ERP system integration" },
      { icon: <ShieldCheck className="size-4" />, label: "IoT sensor network deployment" },
      { icon: <ShieldCheck className="size-4" />, label: "Unified command & control dashboard" },
      { icon: <ShieldCheck className="size-4" />, label: "API-first architecture for extensibility" },
    ],
    imageSrc: "/images/project-04.jpg",
    imageAlt: "Integrated warehouse systems dashboard",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* ─── Page Banner ─── */}
      <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-card">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
          <SectionHeading
            label="WHAT WE OFFER"
            title="Our Solutions"
            description="End-to-end warehouse intelligence — from the floor to the cloud."
          />
        </div>
      </section>

      {/* ─── Solution Sections ─── */}
      {solutions.map((solution, idx) => (
        <section
          key={solution.id}
          id={solution.id}
          className={`py-20 sm:py-28 ${
            idx % 2 === 0 ? "bg-card" : "bg-background"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              {/* Image */}
              <div
                className={
                  solution.reverse ? "lg:order-2" : "lg:order-1"
                }
              >
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden ring-1 ring-border/50 shadow-2xl">
                  <Image
                    src={solution.imageSrc}
                    alt={solution.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-tr from-background/40 to-transparent" />
                </div>
              </div>

              {/* Text */}
              <div
                className={
                  solution.reverse ? "lg:order-1" : "lg:order-2"
                }
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                    {solution.icon}
                  </div>
                  <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                    {solution.overline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4">
                  {solution.title}
                </h3>

                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {solution.description}
                </p>

                <Card className="mb-6">
                  <CardContent className="py-4">
                    <ul className="space-y-3">
                      {solution.features.map((feature) => (
                        <li
                          key={feature.label}
                          className="flex items-start gap-3 text-sm text-foreground/90"
                        >
                          <span className="mt-0.5 shrink-0 text-primary">
                            {feature.icon}
                          </span>
                          {feature.label}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Link href="/contact">
                  <Button size="lg" className="font-semibold group">
                    Learn more
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ─── CTA Banner ─── */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary to-primary/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24 text-center">
          <SectionHeading
            label="READY TO START?"
            title="Let&rsquo;s build the future of your warehouse"
            description="Get in touch with our team to explore the right solution for your operation."
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
