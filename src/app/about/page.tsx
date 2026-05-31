import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  Award,
  Building2,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "IntelliSyncs is an engineering-first company delivering AI-powered warehouse automation — founded by engineers who build solutions, not just promises.",
};

/* -------------------------------------------------------------------------- */
/*  Data
/* -------------------------------------------------------------------------- */
const milestones = [
  {
    year: "2019",
    title: "Founded in NYC",
    description:
      "IntelliSyncs was founded by a team of robotics and AI engineers with a shared vision: make warehouse automation actually work at scale.",
  },
  {
    year: "2020",
    title: "First Warehouse Deployment",
    description:
      "Deployed our first end-to-end robotic picking system in a 200,000 sq-ft fulfillment center, cutting pick times by 60%.",
  },
  {
    year: "2021",
    title: "London Office Opened",
    description:
      "Expanded to Europe with a London engineering hub to serve growing demand from UK and EU logistics providers.",
  },
  {
    year: "2022",
    title: "AI Orchestration Platform",
    description:
      "Launched the IntelliSyncs AI Orchestration layer, unifying disparate automation systems under a single intelligent control plane.",
  },
  {
    year: "2023",
    title: "35+ Engineers & Remote-First",
    description:
      "Grew the team past 35 engineers across NYC, London, and remote — now serving fintech, health, and e-commerce verticals.",
  },
  {
    year: "2024",
    title: "Multi-Vertical Expansion",
    description:
      "Extended into cold-chain logistics and pharmaceutical distribution, with deployments handling temperature-sensitive inventory at scale.",
  },
];

const values = [
  {
    icon: Building2,
    title: "Innovation",
    description:
      "We push boundaries with AI and robotics research, turning cutting-edge ideas into production-grade systems our clients rely on every day.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We deliver what we promise, operate with transparency, and build systems our clients can trust — no black boxes, no hidden agendas.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Every line of code, every deployment, every support interaction is held to the highest standard. Good enough is never good enough.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description:
      "We embed ourselves in our clients' operations, understanding their challenges firsthand so we can build solutions that truly fit.",
  },
];

const teamStats = [
  { icon: Building2, value: "2019", label: "Founded" },
  { icon: Users, value: "35+", label: "Engineers" },
  { icon: Target, value: "NYC / London / Remote", label: "Offices" },
  { icon: Award, value: "Fintech / Health / E‑com", label: "Industries" },
];

/* -------------------------------------------------------------------------- */
/*  Page
/* -------------------------------------------------------------------------- */
export default function AboutPage() {
  return (
    <>
      {/* ================================================================== */}
      {/*  Banner                                                             */}
      {/* ================================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-background to-background pt-20 pb-16">
        {/* Subtle radial glow behind heading */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,var(--primary)_0%,transparent_60%)] opacity-10"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            label="WHO WE ARE"
            title="About IntelliSyncs"
            description="Engineering the future of warehouse automation — one deployment at a time."
          />
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Company Story                                                      */}
      {/* ================================================================== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-foreground/10">
              <Image
                src="/images/workshop-01.jpg"
                alt="IntelliSyncs engineering team collaborating in the workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Story */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                OUR STORY
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Built by Engineers,
                <br />
                Driven by Results
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  IntelliSyncs was founded in 2019 by a group of robotics and
                  software engineers who grew tired of seeing warehouses stuck
                  with brittle, overpriced automation that promised the world
                  and delivered headaches. We knew there was a better way — one
                  where AI and robotics work together seamlessly, where systems
                  talk to each other without costly custom integrations, and
                  where the technology actually adapts to real-world operations
                  instead of forcing operations to adapt to the technology.
                </p>
                <p>
                  Today, our mission is simple: give every warehouse operator —
                  from mid-sized 3PLs to global e-commerce giants — access to
                  the same class of intelligent automation that was once
                  reserved for billion-dollar enterprises. We build the
                  software, integrate the hardware, and stay with our clients
                  every step of the way. No magic. Just engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Mission & Vision                                                   */}
      {/* ================================================================== */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Mission */}
            <Card className="p-1">
              <CardHeader>
                <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Target className="size-6" />
                </div>
                <CardTitle className="text-xl">Our Mission</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Democratize intelligent warehouse automation. We build
                  accessible, AI-driven systems that let any operation —
                  regardless of size — compete with the efficiency of the
                  world&apos;s largest fulfillment networks.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Vision */}
            <Card className="p-1">
              <CardHeader>
                <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Eye className="size-6" />
                </div>
                <CardTitle className="text-xl">Our Vision</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  A world where supply chains run themselves — intelligently,
                  sustainably, and reliably. We envision fully autonomous
                  warehouses where humans focus on strategy and creativity while
                  AI and robotics handle the rest.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Team Stats                                                         */}
      {/* ================================================================== */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-4">
            {teamStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-3 bg-card px-6 py-10 text-center"
              >
                <stat.icon className="size-6 text-primary/70" />
                <span className="text-2xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Leadership                                                         */}
      {/* ================================================================== */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="LEADERSHIP"
            title="Led by Engineers"
            description="Our leadership team combines decades of experience across robotics, AI research, and enterprise software."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Alex Chen",
                role: "CEO & Co‑Founder",
                bio: "Former robotics lead at a Fortune 50 logistics firm. 15+ years building autonomous systems that actually ship.",
              },
              {
                name: "Dr. Priya Mehta",
                role: "CTO & Co‑Founder",
                bio: "PhD in Multi-Agent Reinforcement Learning. Previously led AI research at a top-tier robotics lab. Believes warehouses are the perfect sandbox for applied AI.",
              },
              {
                name: "Marcus Okafor",
                role: "VP of Engineering",
                bio: "Scaled engineering teams from 5 to 50+ across three startups. Obsessed with developer velocity, clean architecture, and systems that never wake you up at 3 AM.",
              },
            ].map((leader) => (
              <Card key={leader.name} className="p-1 text-center">
                <CardHeader>
                  {/* Avatar placeholder */}
                  <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="size-8" />
                  </div>
                  <CardTitle>{leader.name}</CardTitle>
                  <span className="text-sm font-medium text-primary">
                    {leader.role}
                  </span>
                  <CardDescription className="mt-2 text-sm leading-relaxed">
                    {leader.bio}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Values                                                             */}
      {/* ================================================================== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="OUR VALUES"
            title="What We Stand For"
            description="Four principles that guide every decision, every deployment, and every line of code we write."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="p-1">
                <CardHeader>
                  <div className="mb-3 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <value.icon className="size-5" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Timeline                                                           */}
      {/* ================================================================== */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="OUR JOURNEY"
            title="Company Milestones"
            description="From a two-person shop in a Brooklyn co-working space to production deployments across three continents."
          />
          <div className="relative mt-14">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" />

            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={m.year}
                    className={`relative flex flex-col md:flex-row md:items-center ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-1 z-10 flex size-[38px] items-center justify-center rounded-full border-4 border-background bg-primary text-[10px] font-bold text-primary-foreground md:left-1/2 md:-translate-x-1/2">
                      {m.year.slice(2)}
                    </div>

                    {/* Content card */}
                    <div
                      className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                        isLeft ? "md:pr-8 md:text-right" : "md:pl-8"
                      }`}
                    >
                      <Card className="p-1">
                        <CardHeader>
                          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                            {m.year}
                          </span>
                          <CardTitle>{m.title}</CardTitle>
                          <CardDescription className="text-sm leading-relaxed">
                            {m.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  CTA                                                                */}
      {/* ================================================================== */}
      <section className="relative overflow-hidden py-20">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,var(--primary)_0%,transparent_70%)] opacity-[0.07]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            label="LET'S BUILD"
            title="Ready to Automate Your Warehouse?"
            description="Talk to our team about your challenges. We'll give you honest advice — no sales pitch, just engineering."
            light={false}
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">
                Schedule a Call
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
            <Link href="/solutions">
              <Button variant="outline" size="lg">
                Explore Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
