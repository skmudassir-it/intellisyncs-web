import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Package,
  Truck,
  RotateCcw,
  ArrowRight,
  CheckCircle,
  Zap,
  BarChart3,
  Clock,
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
  title: "E-Commerce & Retail",
  description:
    "High-volume fulfillment automation for e-commerce and retail — automated sortation, returns management, and same-day delivery pipelines from IntelliSyncs.",
};

// ──────────────────────────────────────
// Data
// ──────────────────────────────────────

const capabilityCards = [
  {
    icon: Zap,
    title: "High-Speed Sortation",
    description:
      "Automated cross-belt and tilt-tray sorters that process tens of thousands of items per hour with sub-second divert decisions.",
  },
  {
    icon: RotateCcw,
    title: "Returns Management",
    description:
      "Intelligent reverse logistics — automated inspection, grading, and restocking that turns returns from a cost center into recoverable inventory.",
  },
  {
    icon: Clock,
    title: "Same-Day Fulfillment",
    description:
      "Cutoff time optimization and wave-less order processing that pushes orders from click to carrier in under 4 hours.",
  },
  {
    icon: BarChart3,
    title: "Omnichannel Sync",
    description:
      "Real-time inventory visibility across stores, warehouses, and drop-ship vendors — no oversells, no split shipments.",
  },
  {
    icon: Package,
    title: "Auto-Packing Systems",
    description:
      "Dimension-based carton selection and automated packing stations that reduce void fill waste and shipping costs.",
  },
  {
    icon: Truck,
    title: "Carrier Integration",
    description:
      "Multi-carrier rate shopping, label generation, and manifesting — integrated with FedEx, UPS, USPS, DHL, and regional carriers.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Analyze",
    description:
      "Map your order profile — SKU velocity, order lines, peak volumes, and cutoff windows — to design the right automation mix.",
  },
  {
    step: "02",
    title: "Deploy",
    description:
      "Install sortation, picking, and packing systems with phased cutover to avoid disrupting live order flow.",
  },
  {
    step: "03",
    title: "Optimize",
    description:
      "AI-driven wave optimization learns your order patterns and continuously adjusts batching, routing, and labor allocation.",
  },
  {
    step: "04",
    title: "Scale",
    description:
      "Modular architecture lets you add capacity in increments — add a sortation loop or packing station without system downtime.",
  },
];

const techBlocks = [
  { label: "Order Management", items: ["Shopify Plus", "Salesforce Commerce", "Magento", "BigCommerce"] },
  { label: "Warehouse", items: ["Manhattan Active", "Blue Yonder", "HighJump", "SnapFulfil"] },
  { label: "Last Mile", items: ["Deliverr", "ShipBob", "Flexe", "Ware2Go"] },
];

const results = [
  { stat: "40%", label: "Faster order-to-ship" },
  { stat: "99.8%", label: "Order accuracy" },
  { stat: "2×", label: "Peak season capacity" },
];

// ──────────────────────────────────────
// Page
// ──────────────────────────────────────

export default function ECommercePage() {
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
                  <ShoppingCart className="size-5 text-primary" />
                </div>
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  E-COMMERCE &amp; RETAIL
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">
                High-volume fulfillment
                <br />
                <span className="text-primary">that never misses a beat</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Peak season, flash sales, same-day delivery — e-commerce logistics
                runs on relentless deadlines. Our sortation and picking systems handle
                explosive order volumes with sub-second decision-making.
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
                src="/images/industry-ecom.jpg"
                alt="E-commerce automated sortation and fulfillment center"
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
            title="Engineered for speed at scale"
            description="From receiving to last mile — every capability optimized for the velocity of modern commerce."
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
            title="From analysis to infinite scale"
            description="A methodology built for the velocity of e-commerce — no disruption to live operations."
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
            title="Your stack, supercharged"
            description="We integrate with the commerce and fulfillment platforms your team already runs."
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
            Ready to crush your next peak season?
          </h2>
          <p className="text-muted-foreground text-base mb-8">
            Let&rsquo;s build a fulfillment system that handles Black Friday volumes
            without breaking stride. Talk to our e-commerce logistics team today.
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
