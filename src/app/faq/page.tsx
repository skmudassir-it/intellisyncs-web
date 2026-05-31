import type { Metadata } from "next";
import { HelpCircle, ChevronDown, Wrench, Cpu, DollarSign, Shield } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";

// ──────────────────────────────────────
// Metadata
// ──────────────────────────────────────

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about IntelliSyncs warehouse automation services, robotics technology, pricing, and security.",
};

// ──────────────────────────────────────
// Data
// ──────────────────────────────────────

type FAQItem = { q: string; a: string };

type FAQCategory = {
  key: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: FAQItem[];
};

const faqCategories: FAQCategory[] = [
  {
    key: "services",
    icon: Wrench,
    title: "Services",
    items: [
      {
        q: "What services does IntelliSyncs offer?",
        a: "We provide end-to-end warehouse automation solutions including robotics deployment, AI-powered software, WMS integration, operational consulting, and comprehensive staff training programs.",
      },
      {
        q: "How long does implementation take?",
        a: "Typical implementations range from 8 to 16 weeks depending on scope and facility size. We use a phased approach — starting with a pilot zone, validating performance, then rolling out across the facility to minimize operational disruption.",
      },
      {
        q: "Do you provide ongoing support?",
        a: "Yes. All deployments include 24/7 system monitoring, multiple SLA tier options, and a dedicated account manager who serves as your single point of contact for escalations, optimizations, and roadmap planning.",
      },
    ],
  },
  {
    key: "technology",
    icon: Cpu,
    title: "Technology",
    items: [
      {
        q: "What robotics brands do you work with?",
        a: "We maintain universal compatibility with all major robotics platforms including KUKA, FANUC, ABB, Fetch Robotics, and Locus Robotics. We also design and deploy custom robotic solutions when off-the-shelf options don't fit your workflow.",
      },
      {
        q: "Can you integrate with our existing WMS or ERP?",
        a: "Absolutely. Our API-first architecture supports seamless integration with SAP, Oracle, Microsoft Dynamics, Manhattan Associates, Blue Yonder, and most other enterprise systems. We've never met a WMS we couldn't connect to.",
      },
      {
        q: "Is your AI technology proprietary?",
        a: "We use a hybrid approach. Our proprietary models are purpose-built for warehouse optimization — pick-path routing, demand forecasting, and inventory slotting. We complement these with best-in-class third-party models where it benefits the solution.",
      },
    ],
  },
  {
    key: "pricing",
    icon: DollarSign,
    title: "Pricing",
    items: [
      {
        q: "What is your pricing structure?",
        a: "Every engagement is project-based with four phases: assessment, solution design, implementation, and ongoing support. Each phase is scoped and quoted individually so you only pay for what you need. Contact us for a custom quote.",
      },
      {
        q: "Do you offer ROI guarantees?",
        a: "Yes. We include a contractual uptime SLA in every deployment, along with performance guarantees tied to throughput improvements and order accuracy. If we don't hit the agreed KPIs, we work for free until we do.",
      },
      {
        q: "Is there a minimum engagement size?",
        a: "No minimum. We serve everyone from SMBs automating a single work cell to enterprises transforming entire multi-site facilities. Our solutions scale with your needs.",
      },
    ],
  },
  {
    key: "security",
    icon: Shield,
    title: "Security",
    items: [
      {
        q: "How do you handle data security?",
        a: "All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We maintain strict access controls, conduct regular penetration testing, and are compliant with GDPR and CCPA requirements.",
      },
      {
        q: "Are you SOC 2 compliant?",
        a: "Our SOC 2 Type II audit is currently underway, with certification expected in Q3 2026. In the interim, we follow all SOC 2 control frameworks and can share our security posture documentation under NDA.",
      },
      {
        q: "Will there be downtime during migration?",
        a: "We employ a zero-downtime migration methodology. New systems run in parallel with existing operations during the cutover phase, and every migration includes a tested rollback plan so you're never exposed to operational risk.",
      },
    ],
  },
];

// ──────────────────────────────────────
// Components
// ──────────────────────────────────────

function AccordionItem({
  id,
  item,
}: {
  id: string;
  item: FAQItem;
}) {
  return (
    <div className="group border-b border-border/50 last:border-b-0">
      {/* Hidden checkbox — peer for siblings, :checked for group-has */}
      <input
        type="checkbox"
        id={id}
        className="peer sr-only"
      />

      {/* Question label */}
      <label
        htmlFor={id}
        className="flex cursor-pointer items-center justify-between gap-4 py-4 select-none"
      >
        <span className="text-sm font-medium text-foreground">{item.q}</span>
        <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-has-[:checked]:rotate-180" />
      </label>

      {/* Answer panel — height-animated via peer-checked */}
      <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-96">
        <p className="pb-4 text-sm leading-relaxed text-muted-foreground">
          {item.a}
        </p>
      </div>
    </div>
  );
}

function CategoryCard({ category }: { category: FAQCategory }) {
  return (
    <Card className="group/card border-border bg-card/60">
      <CardContent className="pt-6">
        {/* Category header */}
        <div className="mb-2 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
            <category.icon className="size-5" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            {category.title}
          </h3>
        </div>

        {/* FAQ items */}
        <div className="divide-y divide-border/40">
          {category.items.map((item, i) => (
            <AccordionItem
              key={`${category.key}-${i}`}
              id={`faq-${category.key}-${i}`}
              item={item}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// ──────────────────────────────────────
// Page
// ──────────────────────────────────────

export default function FAQPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-background to-background pt-20 pb-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,var(--primary)_0%,transparent_60%)] opacity-10"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our services, technology, pricing, and security."
          />
        </div>
      </section>

      {/* FAQ categories grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {faqCategories.map((category) => (
              <CategoryCard key={category.key} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <HelpCircle className="size-5" />
            <p className="text-sm">
              Still have questions?{" "}
              <a
                href="/contact"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
              >
                Get in touch
              </a>{" "}
              and our team will be happy to help.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
