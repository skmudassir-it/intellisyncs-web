import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  GitMerge,
  Plug,
  Server,
  Wifi,
  Layers,
  Shield,
  CheckCircle,
  ArrowRight,
  Search,
  Cable,
  FlaskConical,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Seamless Integration",
  description:
    "Connect your WMS, ERP, IoT sensors, and automation hardware into one unified platform. Zero-downtime migration, API-first architecture, and SOC 2 compliant integration services by IntelliSyncs.",
};

/* -------------------------------------------------------------------------- */
/*  Data
/* -------------------------------------------------------------------------- */

interface SystemCard {
  icon: React.ReactNode;
  title: string;
  systems: string[];
}

const systemCards: SystemCard[] = [
  {
    icon: <Server className="size-6 text-primary" />,
    title: "WMS",
    systems: ["Manhattan Associates", "Blue Yonder", "HighJump / Körber"],
  },
  {
    icon: <Layers className="size-6 text-primary" />,
    title: "ERP",
    systems: ["SAP S/4HANA", "Oracle NetSuite", "Microsoft Dynamics 365"],
  },
  {
    icon: <Wifi className="size-6 text-primary" />,
    title: "IoT Sensors",
    systems: ["Temperature & humidity", "Vibration / motion", "Proximity & RFID"],
  },
  {
    icon: <Plug className="size-6 text-primary" />,
    title: "Robotics Fleet",
    systems: ["AGVs & AMRs", "Palletizers", "Pick-and-place cells"],
  },
  {
    icon: <GitMerge className="size-6 text-primary" />,
    title: "TMS",
    systems: ["Transportation Mgmt", "Route optimization", "Carrier integration"],
  },
  {
    icon: <Server className="size-6 text-primary" />,
    title: "E-Commerce",
    systems: ["Shopify", "Magento / Adobe Commerce", "Custom storefronts"],
  },
];

interface ProcessPhase {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const processPhases: ProcessPhase[] = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "We map your existing technology landscape — every system, API, and data flow. Our engineers audit integration points, identify bottlenecks, and deliver a detailed connectivity blueprint before a single line of code is written.",
    icon: <Search className="size-5" />,
  },
  {
    number: "02",
    title: "Connection & Middleware",
    description:
      "Our API-first middleware layer deploys adapters and connectors that speak the native protocols of every system in your stack. REST, SOAP, MQTT, OPC-UA — we bridge them all into a single event-driven fabric with sub-second latency.",
    icon: <Cable className="size-5" />,
  },
  {
    number: "03",
    title: "Validation & Cutover",
    description:
      "Every integration runs in parallel with your live systems for a full validation cycle. We monitor data fidelity, latency, and edge cases until the new pipeline outperforms the old — then execute a zero-downtime cutover with rollback safety.",
    icon: <FlaskConical className="size-5" />,
  },
];

interface SecurityCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const securityCards: SecurityCard[] = [
  {
    icon: <Shield className="size-6 text-primary" />,
    title: "Encryption Everywhere",
    description:
      "AES-256 encryption at rest and TLS 1.3 in transit across every connection. Data never moves in the clear — whether between on-prem systems, cloud services, or edge devices.",
  },
  {
    icon: <Shield className="size-6 text-primary" />,
    title: "Role-Based Access Control",
    description:
      "Granular RBAC with audit logging ensures every user, system, and API key operates with least-privilege access. SSO, MFA, and SAML/OIDC integration come standard.",
  },
  {
    icon: <Shield className="size-6 text-primary" />,
    title: "Compliance & Certifications",
    description:
      "SOC 2 Type II certified infrastructure with GDPR-compliant data handling. We maintain ISO 27001 controls and provide DPA agreements for enterprise procurement.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Page
/* -------------------------------------------------------------------------- */

export default function IntegrationDetailPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/solution-integration.jpg"
            alt="Seamless integration — connected warehouse systems"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-background/85 via-background/70 to-background/95" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-32 sm:py-40">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/20 ring-1 ring-primary/30 backdrop-blur-sm">
              <GitMerge className="size-6 text-primary" />
            </div>
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">
              SEAMLESS INTEGRATION
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight max-w-3xl">
            Seamless Integration
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            One unified platform across your entire operation. We connect your WMS,
            ERP, IoT sensors, and automation hardware into a single pane of glass —
            no more data silos, just real-time visibility and coordinated execution.
          </p>
        </div>
      </section>

      {/* ─── Overview ─── */}
      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left — narrative */}
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                Plug in once. Orchestrate everywhere.
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Modern warehouses run on a patchwork of systems — WMS, ERP, TMS, IoT
                sensors, robotics controllers — each speaking a different language.
                IntelliSyncs replaces that chaos with a single integration fabric
                that normalizes every data stream and command channel, so your team
                sees one unified operational picture instead of six disconnected
                dashboards.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Our integration engine is API-first by design, meaning every
                connection is documented, versioned, and extensible. Whether you
                need to add a new warehouse, swap an ERP vendor, or stream sensor
                data to a custom analytics pipeline, the integration layer adapts
                without rewiring your entire stack.
              </p>
              <Link href="/contact">
                <Button size="lg" className="mt-4 font-semibold group">
                  Talk to an integration engineer
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Right — stat cards */}
            <div className="lg:col-span-2 space-y-4">
              <Card>
                <CardContent className="py-5">
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 ring-1 ring-green-500/20">
                      <CheckCircle className="size-5 text-green-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Zero-Downtime Migration
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Parallel-run cutover strategy keeps your warehouse live
                        during every integration.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="py-5">
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 ring-1 ring-blue-500/20">
                      <GitMerge className="size-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        60% Faster Processing
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Eliminate manual data entry and batch syncs with real-time
                        event-driven pipelines.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="py-5">
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 ring-1 ring-purple-500/20">
                      <Plug className="size-5 text-purple-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        API-First Architecture
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Every connector is documented, versioned, and extensible.
                        Add systems without re-architecting.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What We Connect ─── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="WHAT WE CONNECT"
            title="Six systems. One fabric."
            description="Our connectors speak the native protocols of every major warehouse system — no rip-and-replace required."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemCards.map((card) => (
              <Card key={card.title} className="group/card hover:ring-primary/30 transition-all">
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20 mb-2">
                    {card.icon}
                  </div>
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {card.systems.map((system) => (
                      <li
                        key={system}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="size-1.5 rounded-full bg-primary/60 shrink-0" />
                        {system}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Integration Process ─── */}
      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="HOW WE INTEGRATE"
            title="A three-phase approach to zero-downtime connectivity"
            description="Discovery, connection, validation — repeatable and proven across dozens of warehouse deployments."
          />

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {processPhases.map((phase) => (
              <div key={phase.number} className="relative flex flex-col items-center text-center">
                {/* Connector line between cards (desktop) */}
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border -z-0 last:hidden" />

                <div className="relative z-10 flex size-16 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20 mb-5">
                  <span className="text-primary">{phase.icon}</span>
                </div>

                <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
                  Phase {phase.number}
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {phase.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Data Flow ─── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="DATA FLOW"
            title="How data moves through the integration fabric"
            description="From sensor to dashboard in milliseconds — every hop is monitored, encrypted, and redundant."
          />

          <div className="mt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {[
              { icon: Wifi, label: "Sensors & IoT", desc: "Real-time telemetry from every device" },
              { icon: Server, label: "Edge Gateway", desc: "Protocol translation & local buffering" },
              { icon: Layers, label: "Cloud Fabric", desc: "Event-driven message bus with routing" },
              { icon: GitMerge, label: "Unified Dashboard", desc: "Single pane of glass for ops" },
              { icon: CheckCircle, label: "Actions & Alerts", desc: "Automated responses & notifications" },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-0">
                <div className="flex flex-col items-center text-center px-4 py-6 rounded-xl bg-card ring-1 ring-border/50 w-44 sm:w-48">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 mb-3">
                    <step.icon className="size-6 text-primary" />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-primary uppercase mb-1">
                    STEP {i + 1}
                  </span>
                  <p className="text-sm font-semibold text-foreground">{step.label}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{step.desc}</p>
                </div>
                {i < 4 && (
                  <ArrowRight className="size-5 text-muted-foreground/40 shrink-0 mx-1 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Security ─── */}
      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="SECURITY"
            title="Enterprise-grade security at every hop"
            description="Your data is protected from edge to cloud — encryption, access control, and compliance built in, not bolted on."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityCards.map((card) => (
              <Card key={card.title} className="hover:ring-primary/30 transition-all">
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20 mb-2">
                    {card.icon}
                  </div>
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Results ─── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="RESULTS"
            title="Measurable impact from day one"
            description="Our integration clients see immediate gains in throughput, accuracy, and operational visibility."
          />

          <div className="mt-14 grid sm:grid-cols-3 gap-8">
            {[
              {
                metric: "60%",
                label: "Faster Processing",
                desc: "Real-time event pipelines eliminate batch syncs and manual data entry across systems.",
              },
              {
                metric: "Zero",
                label: "Downtime During Cutover",
                desc: "Parallel-run validation and automated rollback ensure your warehouse never stops.",
              },
              {
                metric: "1",
                label: "Unified Dashboard",
                desc: "Every system, sensor, and robot visible in a single operational command center.",
              },
            ].map((result) => (
              <Card key={result.label} className="text-center hover:ring-primary/30 transition-all">
                <CardContent className="py-8">
                  <p className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">
                    {result.metric}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    {result.label}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {result.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary to-primary/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24 text-center">
          <SectionHeading
            label="READY TO CONNECT?"
            title="Let&rsquo;s integrate your warehouse — without the downtime"
            description="Schedule a discovery call with our integration engineers. We'll map your stack and deliver a connectivity blueprint in days, not months."
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
            <Link href="/solutions">
              <Button
                size="lg"
                variant="outline"
                className="font-semibold border-white/20 text-white hover:bg-white/10"
              >
                Explore Other Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
