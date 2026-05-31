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
  title: "Predictive Inventory AI",
  description: "Implemented AI-driven demand forecasting and inventory optimization across 12 cold-storage facilities, reducing spoilage and improving stock availability.",
};

const results = ["25% less waste", "98% stock availability", "40% lower holding costs", "12 facilities unified"];

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
                <span className="inline-flex items-center gap-1.5"><Building2 className="size-4 text-primary/60" />Nexus Supply Chain</span>
                <span className="inline-flex items-center gap-1.5"><Calendar className="size-4 text-primary/60" />July 2025</span>
              </div>
              <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">Cold Chain Logistics</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">Predictive Inventory AI</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">Implemented AI-driven demand forecasting and inventory optimization across 12 cold-storage facilities, reducing spoilage and improving stock availability.</p>
              <Link href="/contact"><Button size="lg" className="font-semibold group">Start a Similar Project<ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" /></Button></Link>
            </div>
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden ring-1 ring-border/50 shadow-2xl">
              <Image src="/images/project-05.jpg" alt="Predictive Inventory AI" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
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
              <p className="text-muted-foreground leading-relaxed">Nexus Supply Chain managed inventory across 12 cold-storage facilities, each operating independently with their own forecasting spreadsheets. Shelf-life constraints meant spoilage was a constant cost — averaging 8% of inventory value annually. Meanwhile, stockouts in high-demand regions forced expensive emergency transfers between facilities.</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6"><div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20"><Lightbulb className="size-6 text-primary" /></div><span className="text-xs font-semibold tracking-widest text-primary uppercase">OUR SOLUTION</span></div>
              <p className="text-muted-foreground leading-relaxed">IntelliSyncs deployed an AI-driven demand forecasting engine that ingests historical sales, weather data, promotional calendars, and supplier lead times to predict demand at the SKU-facility level. A unified inventory optimization layer automatically balances stock across all 12 facilities, prioritizing FEFO rotation and flagging at-risk inventory for markdown or transfer.</p>
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
            {["Deep learning demand forecasting", "Multi-echelon inventory optimization", "FEFO rotation engine", "Real-time cold chain monitoring"].map((t) => (<Card key={t} className="text-center"><CardContent className="py-6"><Cpu className="size-8 text-primary mx-auto mb-3" /><div className="text-sm font-semibold text-foreground">{t}</div></CardContent></Card>))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="size-10 text-primary/30 mx-auto mb-6" />
          <blockquote className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed mb-6">&ldquo;We cut spoilage by a quarter and nearly eliminated stockouts across 12 facilities. The AI spots demand shifts weeks before our planners ever could.&rdquo;</blockquote>
          <div className="flex items-center justify-center gap-3"><div className="flex size-10 items-center justify-center rounded-full bg-primary/10"><Star className="size-5 text-primary" /></div><div className="text-sm font-semibold text-foreground">VP Supply Chain, Nexus Supply Chain</div></div>
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
