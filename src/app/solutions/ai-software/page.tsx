import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  BarChart3,
  TrendingUp,
  Zap,
  Eye,
  Shield,
  CheckCircle,
  ArrowRight,
  Database,
  Cpu,
  Bell,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "AI-Powered Software",
  description:
    "IntelliSyncs AI-powered software: predictive analytics, inventory optimization, demand forecasting, anomaly detection, route optimization, and labor planning for modern warehouses.",
};

/* ────────────────────────────────────────────
   Data
   ──────────────────────────────────────────── */

const features = [
  {
    icon: <Brain className="size-6 text-primary" />,
    title: "Predictive Analytics",
    description:
      "Leverage machine learning models trained on your historical data to anticipate demand shifts, stockouts, and throughput bottlenecks before they impact operations.",
  },
  {
    icon: <BarChart3 className="size-6 text-primary" />,
    title: "Inventory Optimization",
    description:
      "Dynamically adjust safety stock levels, reorder points, and slotting based on real-time velocity data — reducing carrying costs while maintaining service levels.",
  },
  {
    icon: <TrendingUp className="size-6 text-primary" />,
    title: "Demand Forecasting",
    description:
      "Multi-horizon forecasts that blend seasonality, promotions, market trends, and weather data to give procurement and labor planning a reliable 30/60/90-day outlook.",
  },
  {
    icon: <Zap className="size-6 text-primary" />,
    title: "Anomaly Detection",
    description:
      "Continuous monitoring across every node in your operation. Our AI flags unusual patterns — from equipment degradation to picking errors — in real time with configurable alerting.",
  },
  {
    icon: <Eye className="size-6 text-primary" />,
    title: "Route Optimization",
    description:
      "Minimize travel time with intelligent pick-path sequencing. The engine recalculates optimal routes as orders drop, reducing walk time and increasing picks per hour.",
  },
  {
    icon: <Shield className="size-6 text-primary" />,
    title: "Labor Planning",
    description:
      "Match workforce to workload with precision. AI-driven labor models forecast staffing requirements per zone, shift, and season so you never over- or under-schedule.",
  },
];

const aiPillars = [
  {
    icon: <Database className="size-5 text-primary" />,
    title: "Data Ingestion",
    description:
      "Seamlessly connects to your WMS, ERP, IoT sensors, and material-handling equipment. Real-time streaming plus batch ingestion for historical analysis.",
  },
  {
    icon: <Cpu className="size-5 text-primary" />,
    title: "ML Models",
    description:
      "A hybrid engine combining proprietary models trained on warehouse-specific data with battle-tested open-source frameworks. Continuous retraining keeps accuracy high as conditions change.",
  },
  {
    icon: <Bell className="size-5 text-primary" />,
    title: "Action Layer",
    description:
      "Insights that don't just sit in a dashboard. Automated alerts, prioritized recommendations, and direct triggers to your WMS or automation hardware so decisions turn into action immediately.",
  },
];

const integrations = [
  "SAP Extended Warehouse Management",
  "Oracle Warehouse Management Cloud",
  "Microsoft Dynamics 365 Supply Chain",
  "Blue Yonder (JDA) WMS",
  "Manhattan Associates WMS",
  "Custom REST & GraphQL APIs",
];

const results = [
  { value: "25%", label: "Less operational waste" },
  { value: "35%", label: "Better forecast accuracy" },
  { value: "50%", label: "Faster decision-making" },
];

/* ────────────────────────────────────────────
   Component
   ──────────────────────────────────────────── */

export default function AISoftwareSolutionPage() {
  return (
    <>
      {/* ─── 1. HERO ─── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/images/solution-ai-software.jpg"
          alt="AI-powered software analytics dashboard"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-br from-background/90 via-background/70 to-background/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32">
          <div className="max-w-2xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4">
              AI-Powered Software
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
              Smarter decisions,
              <br />
              <span className="text-primary">faster than ever</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Our AI engine continuously analyzes warehouse operations —
              optimizing inventory placement, predicting demand surges, and
              surfacing real-time insights through intuitive dashboards so your
              team stays ahead of every shift.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="font-semibold group">
                  Request a Demo
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold group"
                >
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. OVERVIEW ─── */}
      <section className="bg-card py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Text */}
            <div className="lg:col-span-2 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                Intelligence that runs alongside your operation
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Modern warehouses generate terabytes of data every day — from
                scanner reads and conveyor sensors to labor clocks and shipment
                manifests. Most of it goes unused. IntelliSyncs AI-Powered
                Software turns that raw data into a competitive advantage by
                applying machine learning at every layer of your operation.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Unlike bolt-on analytics tools that require months of
                integration, our platform deploys in weeks and starts delivering
                actionable insights from day one. It learns your unique
                operational patterns — seasonal peaks, SKU velocity, shift
                productivity — and continuously refines its models so
                recommendations get sharper over time.
              </p>
            </div>

            {/* Sidebar Metrics */}
            <div className="space-y-4">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="py-5">
                  <p className="text-3xl font-bold text-primary tracking-tight">
                    25% Less Waste
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Reduction in overstock, expired inventory, and unnecessary
                    labor spend across pilot deployments.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="py-5">
                  <p className="text-3xl font-bold text-primary tracking-tight">
                    Real-Time Insights
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Sub-second dashboard refreshes powered by streaming data
                    pipelines — no more stale reports.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="py-5">
                  <p className="text-3xl font-bold text-primary tracking-tight">
                    ML-Driven
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Proprietary models trained on warehouse-specific patterns,
                    continuously retrained as your operation evolves.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. FEATURES ─── */}
      <section id="features" className="bg-background py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="CAPABILITIES"
            title="Six intelligence layers for your warehouse"
            description="Purpose-built AI modules that work independently or together — deploy what you need, when you need it."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group hover:ring-primary/30 transition-shadow duration-300"
              >
                <CardContent className="py-6 space-y-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. DASHBOARD SHOWCASE ─── */}
      <section className="bg-card py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="PLATFORM"
            title="Everything in a single pane of glass"
            description="Role-based dashboards that surface the right data to the right people — from floor supervisors to VP-level operations."
          />

          <Card className="mt-14 overflow-hidden ring-1 ring-border/50 shadow-2xl">
            {/* Mock Dashboard Header */}
            <div className="border-b border-border px-6 py-4 flex items-center justify-between bg-muted/30">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="size-3 rounded-full bg-red-500/70" />
                  <span className="size-3 rounded-full bg-yellow-500/70" />
                  <span className="size-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs text-muted-foreground font-mono">
                  IntelliSyncs Command Center
                </span>
              </div>
              <span className="text-xs text-muted-foreground">
                Live • Updated 2s ago
              </span>
            </div>

            <CardContent className="p-6 space-y-6">
              {/* KPI Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Orders Fulfilled", value: "1,247", change: "+12%" },
                  { label: "Pick Rate", value: "184/hr", change: "+8%" },
                  { label: "On-Time %", value: "98.6%", change: "+2.1%" },
                  { label: "Dock Turnover", value: "34 min", change: "-15%" },
                ].map((kpi) => (
                  <Card key={kpi.label} size="sm" className="bg-background">
                    <CardContent className="py-3">
                      <p className="text-xs text-muted-foreground">
                        {kpi.label}
                      </p>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-lg font-bold text-foreground">
                          {kpi.value}
                        </span>
                        <span className="text-xs font-medium text-emerald-400">
                          {kpi.change}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Charts Placeholder */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-muted/40 border border-border/50 p-6 flex flex-col items-center justify-center min-h-[180px]">
                  <BarChart3 className="size-8 text-muted-foreground/40 mb-3" />
                  <p className="text-sm text-muted-foreground">
                    Throughput Trend (24h)
                  </p>
                  <div className="flex items-end gap-1 mt-4">
                    {[60, 75, 55, 90, 80, 95, 70, 85, 65, 78, 88, 72].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="w-3 rounded-t-sm bg-primary/50"
                          style={{ height: `${h}%` }}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="rounded-xl bg-muted/40 border border-border/50 p-6 flex flex-col items-center justify-center min-h-[180px]">
                  <TrendingUp className="size-8 text-muted-foreground/40 mb-3" />
                  <p className="text-sm text-muted-foreground">
                    Forecast vs. Actual
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-2">
                    ±3.2% deviation • Within tolerance
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ─── 5. AI ENGINE PILLARS ─── */}
      <section className="bg-background py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="ARCHITECTURE"
            title="The AI engine under the hood"
            description="Three layers working in concert — from raw data to real-world action."
          />

          <div className="grid sm:grid-cols-3 gap-6 mt-14">
            {aiPillars.map((pillar, idx) => (
              <Card
                key={pillar.title}
                className="relative overflow-hidden group hover:ring-primary/30 transition-shadow duration-300"
              >
                {/* Pillar number */}
                <div className="absolute top-4 right-4 text-5xl font-bold text-muted-foreground/10 select-none">
                  {idx + 1}
                </div>
                <CardContent className="py-8 space-y-4 relative z-10">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20 group-hover:bg-primary/20 transition-colors">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Flow arrows between pillars (visual only on lg+) */}
          <div className="hidden sm:flex justify-center gap-8 mt-8">
            <ArrowRight className="size-5 text-muted-foreground/30" />
            <ArrowRight className="size-5 text-muted-foreground/30" />
          </div>
        </div>
      </section>

      {/* ─── 6. INTEGRATIONS ─── */}
      <section className="bg-card py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="CONNECTIVITY"
            title="Plugs into your existing stack"
            description="Pre-built connectors for all major WMS and ERP platforms, plus a flexible API layer for custom systems."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.map((name) => (
              <Card
                key={name}
                size="sm"
                className="hover:ring-primary/20 transition-shadow duration-200"
              >
                <CardContent className="py-4 flex items-center gap-3">
                  <CheckCircle className="size-4 text-emerald-400 shrink-0" />
                  <span className="text-sm text-foreground/90">{name}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Don&rsquo;t see your platform?{" "}
            <Link
              href="/contact"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              Talk to us
            </Link>{" "}
            — we build custom connectors in weeks, not months.
          </p>
        </div>
      </section>

      {/* ─── 7. RESULTS ─── */}
      <section className="relative overflow-hidden bg-background py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeading
            label="OUTCOMES"
            title="Measurable results, not just promises"
            description="Every deployment is measured against baseline KPIs. Here&rsquo;s what our customers consistently achieve."
          />

          <div className="grid sm:grid-cols-3 gap-6 mt-14">
            {results.map((result) => (
              <Card
                key={result.label}
                className="text-center hover:ring-primary/20 transition-shadow duration-300"
              >
                <CardContent className="py-10 space-y-2">
                  <p className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">
                    {result.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {result.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. CTA ─── */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary to-primary/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24 text-center">
          <SectionHeading
            label="READY TO START?"
            title="See what AI can do for your warehouse"
            description="Schedule a personalized demo with our solutions team. We'll show you real results from operations similar to yours."
            light
          />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="font-semibold group shadow-lg"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/solutions">
              <Button
                size="lg"
                variant="outline"
                className="font-semibold border-white/20 text-white hover:bg-white/10"
              >
                View All Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
