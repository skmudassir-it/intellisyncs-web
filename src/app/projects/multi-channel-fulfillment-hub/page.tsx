import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ArrowLeft, Building2, Calendar, CheckCircle, Star,
  Target, Lightbulb, Cpu, Quote,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Multi-Channel Fulfillment Hub",
  description: "Transformed a traditional distribution center into an omnichannel fulfillment hub handling B2B, B2C, and direct-to-consumer orders from a single facility.",
};

const results = ["3× order capacity", "Same-day shipping enabled", "99.5% order accuracy", "Unified B2B + B2C operations"];

export default function CaseStudyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
          <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="size-4" />Back to Projects</Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground mb-4">
                <span className="inline-flex items-center gap-1.5"><Building2 className="size-4 text-primary/60" />Omega Retail DC</span>
                <span className="inline-flex items-center gap-1.5"><Calendar className="size-4 text-primary/60" />January 2025</span>
              </div>
              <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">Omnichannel Retail</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">Multi-Channel Fulfillment Hub</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">Transformed a traditional distribution center into an omnichannel fulfillment hub handling B2B, B2C, and direct-to-consumer orders from a single facility.</p>
              <Link href="/contact"><Button size="lg" className="font-semibold group">Start a Similar Project<ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" /></Button></Link>
            </div>
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden ring-1 ring-border/50 shadow-2xl">
              <Image src="/images/project-08.jpg" alt="Multi-Channel Fulfillment Hub" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
              <div className="absolute inset-0 bg-linear-to-tr from-background/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6"><div className="flex size-12 items-center justify-center rounded-xl bg-red-500/10 ring-1 ring-red-500/20"><Target className="size-6 text-red-500" /></div><span className="text-xs font-semibold tracking-widest text-red-500 uppercase">THE CHALLENGE</span></div>
              <p className="text-muted-foreground leading-relaxed">Omega Retail DC was built for wholesale — pallet-in, pallet-out. But e-commerce was growing 60% year-over-year, and the facility couldn&rsquo;t handle the unit-level picking, packing, and shipping that direct-to-consumer required. They were running two separate operations: the legacy DC for wholesale and an expensive 3PL for e-commerce.</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6"><div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20"><Lightbulb className="size-6 text-primary" /></div><span className="text-xs font-semibold tracking-widest text-primary uppercase">OUR SOLUTION</span></div>
              <p className="text-muted-foreground leading-relaxed">IntelliSyncs transformed the facility into a unified omnichannel hub. We added automated unit-level picking zones, integrated single-item and multi-item packing stations, and deployed a single WMS that orchestrates B2B bulk picks alongside B2C eaches — all from shared inventory. The 3PL contract was terminated, saving $1.8M annually.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linear-to-br from-primary to-primary/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24">
          <SectionHeading label="KEY RESULTS" title="Measurable impact, delivered" description="Every metric verified against baseline — not projections, production numbers." light />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {results.map((r, i) => (<Card key={i} className="bg-white/10 border-white/20"><CardContent className="py-6 text-center"><CheckCircle className="size-8 text-white/80 mx-auto mb-3" /><div className="text-lg font-bold text-white">{r}</div></CardContent></Card>))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="TECHNOLOGY" title="Stack powering this deployment" description="The systems, platforms, and integrations that made this project possible." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {["Omnichannel WMS", "Unit-level auto-picking", "Mixed-mode packing stations", "Multi-carrier shipping API"].map((t) => (<Card key={t} className="text-center"><CardContent className="py-6"><Cpu className="size-8 text-primary mx-auto mb-3" /><div className="text-sm font-semibold text-foreground">{t}</div></CardContent></Card>))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="size-10 text-primary/30 mx-auto mb-6" />
          <blockquote className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed mb-6">&ldquo;We went from two separate operations to one unified hub. Same-day shipping, 3× the capacity, and we&rsquo;re no longer paying a 3PL to handle what we can do better ourselves.&rdquo;</blockquote>
          <div className="flex items-center justify-center gap-3"><div className="flex size-10 items-center justify-center rounded-full bg-primary/10"><Star className="size-5 text-primary" /></div><div className="text-sm font-semibold text-foreground">SVP Distribution, Omega Retail DC</div></div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Star className="size-12 text-primary mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Ready for your own success story?</h2>
          <p className="text-muted-foreground text-base mb-8">Let&rsquo;s discuss how IntelliSyncs can deliver similar results for your warehouse or distribution operation.</p>
          <Link href="/contact"><Button size="lg" className="font-semibold group">Get Started<ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" /></Button></Link>
        </div>
      </section>
    </>
  );
}
