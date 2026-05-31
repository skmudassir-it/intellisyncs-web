import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Pill,
  ShoppingCart,
  Car,
  UtensilsCrossed,
  Factory,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "IntelliSyncs serves pharmaceutical, e-commerce, automotive, food & beverage, and 3PL industries with AI-powered warehouse automation solutions.",
};

/* -------------------------------------------------------------------------- */
/*  Data
/* -------------------------------------------------------------------------- */

interface IndustrySection {
  id: string;
  icon: React.ReactNode;
  overline: string;
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
}

const industries: IndustrySection[] = [
  {
    id: "pharmaceuticals",
    icon: <Pill className="size-6 text-primary" />,
    overline: "PHARMACEUTICALS",
    title: "GMP-compliant automation for life sciences",
    description:
      "Pharmaceutical distribution demands uncompromising precision. Our systems enforce GMP protocols, maintain validated cold chain integrity, and deliver end-to-end serialization — so every shipment meets regulatory standards and every dose is traceable from dock to patient.",
    features: [
      "GMP & GDP-compliant workflows",
      "Cold chain monitoring & validation",
      "End-to-end serialization & track-and-trace",
      "Temperature-controlled storage & picking",
    ],
    imageSrc: "/images/industry-pharma.jpg",
    imageAlt: "Pharmaceutical cold chain warehouse automation",
  },
  {
    id: "ecommerce-retail",
    icon: <ShoppingCart className="size-6 text-primary" />,
    overline: "E-COMMERCE & RETAIL",
    title: "High-volume fulfillment that never misses a beat",
    description:
      "Peak season, flash sales, same-day delivery — e-commerce logistics runs on relentless deadlines. Our sortation and picking systems handle explosive order volumes with sub-second decision-making, while intelligent returns processing turns reverse logistics from a cost center into a competitive advantage.",
    features: [
      "High-speed automated sortation",
      "Returns management & reverse logistics",
      "Same-day & next-day fulfillment pipelines",
      "Real-time inventory sync across channels",
    ],
    imageSrc: "/images/industry-ecom.jpg",
    imageAlt: "E-commerce automated sortation and fulfillment center",
  },
  {
    id: "automotive",
    icon: <Car className="size-6 text-primary" />,
    overline: "AUTOMOTIVE",
    title: "Just-in-time precision for automotive supply chains",
    description:
      "Automotive manufacturing doesn't wait. Our JIT-aligned automation synchronizes parts delivery to the assembly line with sub-minute accuracy. From parts sequencing to ASRS buffer management, we keep production moving — no line stoppages, no excess inventory, no compromises.",
    features: [
      "JIT & JIS parts sequencing",
      "ASRS buffer & retrieval systems",
      "Line-side replenishment automation",
      "Supplier integration & EDI connectivity",
    ],
    imageSrc: "/images/industry-auto.jpg",
    imageAlt: "Automotive parts sequencing and ASRS warehouse automation",
  },
  {
    id: "food-beverage",
    icon: <UtensilsCrossed className="size-6 text-primary" />,
    overline: "FOOD & BEVERAGE",
    title: "Safe, traceable, and audit-ready food logistics",
    description:
      "Food supply chains face unique pressures: shelf-life constraints, allergen segregation, and stringent traceability mandates. Our temperature-controlled automation ensures FIFO rotation, full lot-level traceability, and rapid recall response — protecting your consumers and your brand.",
    features: [
      "Temperature & humidity-controlled zones",
      "Lot-level traceability & recall readiness",
      "FIFO & FEFO inventory rotation",
      "Allergen & cross-contamination safeguards",
    ],
    imageSrc: "/images/project-01.jpg",
    imageAlt: "Food and beverage temperature-controlled warehouse automation",
  },
  {
    id: "3pl",
    icon: <Factory className="size-6 text-primary" />,
    overline: "THIRD-PARTY LOGISTICS",
    title: "Multi-tenant agility for 3PL operators",
    description:
      "Running a 3PL means juggling diverse clients, varied SLAs, and ever-changing requirements — all under one roof. Our multi-tenant WMS orchestration, automated billing, and client-facing portals give you the flexibility to onboard new customers rapidly while keeping every account profitable and transparent.",
    features: [
      "Multi-tenant WMS orchestration",
      "Automated billing & invoice generation",
      "Client-facing portals & real-time dashboards",
      "SLA monitoring & performance analytics",
    ],
    imageSrc: "/images/project-07.jpg",
    imageAlt: "Multi-tenant 3PL warehouse automation and management",
  },
];

/* -------------------------------------------------------------------------- */
/*  Page
/* -------------------------------------------------------------------------- */

export default function IndustriesPage() {
  return (
    <>
      {/* ================================================================== */}
      {/*  Banner                                                             */}
      {/* ================================================================== */}
      <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-card">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
          <SectionHeading
            label="WHO WE SERVE"
            title="Industries"
            description="Purpose-built warehouse automation for the verticals that demand the most."
          />
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Industry Sections                                                  */}
      {/* ================================================================== */}
      {industries.map((industry, idx) => (
        <section
          key={industry.id}
          id={industry.id}
          className={`py-20 sm:py-28 ${
            idx % 2 === 0 ? "bg-card" : "bg-background"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image — odd sections (0, 2, 4): image-left; even (1, 3): image-right */}
              <div className={idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden ring-1 ring-border/50 shadow-2xl">
                  <Image
                    src={industry.imageSrc}
                    alt={industry.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-tr from-background/40 to-transparent" />
                </div>
              </div>

              {/* Text */}
              <div className={idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                    {industry.icon}
                  </div>
                  <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                    {industry.overline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4">
                  {industry.title}
                </h3>

                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {industry.description}
                </p>

                <Card className="mb-6">
                  <CardContent className="py-4">
                    <ul className="space-y-3">
                      {industry.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-foreground/90"
                        >
                          <span className="mt-0.5 shrink-0 text-primary">
                            <CheckCircle className="size-4" />
                          </span>
                          {feature}
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

      {/* ================================================================== */}
      {/*  CTA Banner                                                         */}
      {/* ================================================================== */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary to-primary/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24 text-center">
          <SectionHeading
            label="READY TO START?"
            title="Let&rsquo;s build the future of your warehouse"
            description="Get in touch with our team to explore the right solution for your industry."
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
