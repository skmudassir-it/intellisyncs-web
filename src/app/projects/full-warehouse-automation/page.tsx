import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Building2,
  Calendar,
  CheckCircle,
  Star,
  Target,
  Lightbulb,
  Cpu,
  Quote,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Full Warehouse Automation",
  description:
    "End-to-end automation of a 500,000 sq-ft distribution center with robotic picking, autonomous mobile robots, and AI-powered WMS integration.",
};

const results = [
  "40% efficiency gain",
  "60% faster order processing",
  "99.8% picking accuracy",
  "ROI achieved in 14 months",
];

export default function CaseStudyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Projects
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground mb-4">
                <span className="inline-flex items-center gap-1.5">
                  <Building2 className="size-4 text-primary/60" />
                  Global Logistics Inc.
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="size-4 text-primary/60" />
                  March 2026
                </span>
              </div>
              <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
                3PL &amp; Logistics
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">
                Full Warehouse Automation
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                End-to-end automation of a 500,000 sq-ft distribution center with
                robotic picking, autonomous mobile robots, and AI-powered WMS
                integration.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="font-semibold group">
                    Start a Similar Project
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden ring-1 ring-border/50 shadow-2xl">
              <Image
                src="/images/project-01.jpg"
                alt="Full Warehouse Automation — Global Logistics Inc."
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

      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-red-500/10 ring-1 ring-red-500/20">
                  <Target className="size-6 text-red-500" />
                </div>
                <span className="text-xs font-semibold tracking-widest text-red-500 uppercase">
                  THE CHALLENGE
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Global Logistics Inc. operated a 500,000 sq-ft distribution center
                that relied heavily on manual processes — paper-based picking,
                human-operated forklifts, and siloed legacy WMS software. Order
                volume had grown 300% over three years, but throughput couldn&rsquo;t
                keep pace. Peak season meant mandatory overtime, rising error rates,
                and mounting customer complaints about delayed shipments.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                  <Lightbulb className="size-6 text-primary" />
                </div>
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  OUR SOLUTION
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                IntelliSyncs designed and deployed a comprehensive automation
                ecosystem: autonomous mobile robots for horizontal transport,
                vision-guided robotic picking arms for item-level handling, an
                AI-powered WMS for orchestration, and automated packaging stations
                integrated with multi-carrier shipping. The entire system was phased
                in over 16 weeks with zero disruption to ongoing operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linear-to-br from-primary to-primary/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24">
          <SectionHeading
            label="KEY RESULTS"
            title="Measurable impact, delivered"
            description="Every metric verified against baseline — not projections, production numbers."
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {results.map((r, i) => (
              <Card key={i} className="bg-white/10 border-white/20">
                <CardContent className="py-6 text-center">
                  <CheckCircle className="size-8 text-white/80 mx-auto mb-3" />
                  <div className="text-lg font-bold text-white">{r}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="TECHNOLOGY"
            title="Stack powering this deployment"
            description="The systems, platforms, and integrations that made this project possible."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {["AMR fleet (MiR 250)", "Vision-guided robotic picking", "AI-powered WMS", "Auto-packaging stations"].map((t) => (
              <Card key={t} className="text-center">
                <CardContent className="py-6">
                  <Cpu className="size-8 text-primary mx-auto mb-3" />
                  <div className="text-sm font-semibold text-foreground">{t}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="size-10 text-primary/30 mx-auto mb-6" />
          <blockquote className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed mb-6">
            &ldquo;IntelliSyncs didn&rsquo;t just automate our warehouse — they
            transformed how we think about logistics. We hit ROI in 14 months and
            our customers noticed the difference immediately.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
              <Star className="size-5 text-primary" />
            </div>
            <div className="text-sm font-semibold text-foreground">
              VP of Operations, Global Logistics Inc.
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Star className="size-12 text-primary mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Ready for your own success story?
          </h2>
          <p className="text-muted-foreground text-base mb-8">
            Let&rsquo;s discuss how IntelliSyncs can deliver similar results for your
            warehouse or distribution operation.
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
