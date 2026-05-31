import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Wrench,
  Monitor,
  Calendar,
  Users,
  Award,
  GraduationCap,
  MapPin,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Hands-on workshops from IntelliSyncs — warehouse automation, robotics programming, AI for supply chain, digital twins, safety certification, and VR training.",
};

/* -------------------------------------------------------------------------- */
/*  Workshop Data
/* -------------------------------------------------------------------------- */

interface Workshop {
  id: string;
  title: string;
  description: string;
  duration: string;
  imageSrc: string;
  imageAlt: string;
  icon: React.ReactNode;
  topics: { icon: React.ReactNode; label: string }[];
}

const workshops: Workshop[] = [
  {
    id: "warehouse-automation-101",
    title: "Warehouse Automation 101",
    description:
      "A comprehensive introduction to modern warehouse automation technologies. Learn the fundamentals of conveyor systems, AGVs, and pick-and-place robotics that power today's smart warehouses.",
    duration: "2-Day Workshop",
    imageSrc: "/images/workshop-01.jpg",
    imageAlt: "Warehouse automation training session",
    icon: <Wrench className="size-6 text-primary" />,
    topics: [
      { icon: <Wrench className="size-3.5" />, label: "Conveyor & sortation systems" },
      { icon: <MapPin className="size-3.5" />, label: "AGV & AMR fundamentals" },
      { icon: <Monitor className="size-3.5" />, label: "WMS integration basics" },
      { icon: <Users className="size-3.5" />, label: "Workforce transition strategies" },
    ],
  },
  {
    id: "robotics-programming",
    title: "Robotics Programming",
    description:
      "Dive deep into robotics programming with hands-on labs using ROS2 and industrial robot arms. Write, test, and deploy code that controls real robotic cells in simulated warehouse environments.",
    duration: "3-Day Workshop",
    imageSrc: "/images/workshop-02.jpg",
    imageAlt: "Robotics programming hands-on workshop",
    icon: <Monitor className="size-6 text-primary" />,
    topics: [
      { icon: <Monitor className="size-3.5" />, label: "ROS2 fundamentals & tooling" },
      { icon: <Wrench className="size-3.5" />, label: "Robot kinematics & path planning" },
      { icon: <MapPin className="size-3.5" />, label: "Sensor integration & perception" },
      { icon: <Users className="size-3.5" />, label: "Fleet orchestration patterns" },
    ],
  },
  {
    id: "ai-for-supply-chain",
    title: "AI for Supply Chain",
    description:
      "An executive-focused workshop on applying AI and machine learning to supply chain operations. Learn how predictive analytics, demand forecasting, and anomaly detection transform logistics decision-making.",
    duration: "1-Day Workshop",
    imageSrc: "/images/workshop-03.jpg",
    imageAlt: "AI for supply chain executive workshop",
    icon: <Calendar className="size-6 text-primary" />,
    topics: [
      { icon: <Monitor className="size-3.5" />, label: "ML fundamentals for logistics" },
      { icon: <Calendar className="size-3.5" />, label: "Demand forecasting models" },
      { icon: <MapPin className="size-3.5" />, label: "Inventory optimization" },
      { icon: <Award className="size-3.5" />, label: "Anomaly detection & alerting" },
    ],
  },
  {
    id: "digital-twin-workshop",
    title: "Digital Twin Workshop",
    description:
      "Master the art of building digital twins for warehouse environments. Create real-time 3D simulations, run what-if scenarios, and optimize layouts before touching physical infrastructure.",
    duration: "2-Day Workshop",
    imageSrc: "/images/workshop-04.jpg",
    imageAlt: "Digital twin simulation workshop",
    icon: <Monitor className="size-6 text-primary" />,
    topics: [
      { icon: <Monitor className="size-3.5" />, label: "3D warehouse simulation" },
      { icon: <MapPin className="size-3.5" />, label: "Real-time data synchronization" },
      { icon: <Users className="size-3.5" />, label: "Scenario modeling & testing" },
      { icon: <Award className="size-3.5" />, label: "Performance KPI dashboards" },
    ],
  },
  {
    id: "safety-and-compliance",
    title: "Safety & Compliance",
    description:
      "Earn your warehouse safety certification in this intensive one-day program. Covers OSHA standards, risk assessment methodologies, and safety protocols for automated and mixed-traffic environments.",
    duration: "1-Day Workshop",
    imageSrc: "/images/workshop-05.jpg",
    imageAlt: "Safety and compliance certification workshop",
    icon: <Award className="size-6 text-primary" />,
    topics: [
      { icon: <Award className="size-3.5" />, label: "OSHA & international standards" },
      { icon: <Users className="size-3.5" />, label: "Risk assessment frameworks" },
      { icon: <Wrench className="size-3.5" />, label: "Safety protocols for robotics" },
      { icon: <Calendar className="size-3.5" />, label: "Compliance auditing & reporting" },
    ],
  },
  {
    id: "vr-training-simulation",
    title: "VR Training Simulation",
    description:
      "Experience the future of workforce training with immersive VR simulations. Practice equipment operation, safety drills, and warehouse navigation in a risk-free virtual environment.",
    duration: "Half-Day Workshop",
    imageSrc: "/images/workshop-06.jpg",
    imageAlt: "VR training simulation experience",
    icon: <GraduationCap className="size-6 text-primary" />,
    topics: [
      { icon: <GraduationCap className="size-3.5" />, label: "Immersive VR onboarding" },
      { icon: <Users className="size-3.5" />, label: "Equipment operation simulation" },
      { icon: <Wrench className="size-3.5" />, label: "Virtual safety drills" },
      { icon: <Monitor className="size-3.5" />, label: "Performance tracking & analytics" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Page
/* -------------------------------------------------------------------------- */

export default function WorkshopsPage() {
  return (
    <>
      {/* ─── Banner ─── */}
      <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-card">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
          <SectionHeading
            label="LEARN FROM THE BEST"
            title="Workshops & Training"
            description="Hands-on workshops designed to upskill your team — from warehouse floor operators to supply chain executives."
          />
        </div>
      </section>

      {/* ─── Workshop Grid ─── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop) => (
              <Card
                key={workshop.id}
                className="group flex flex-col pt-0 hover:ring-primary/30 transition-shadow duration-300"
              >
                {/* Image with overlay */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={workshop.imageSrc}
                    alt={workshop.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />

                  {/* Duration badge */}
                  <span className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-background/85 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-foreground ring-1 ring-border/50 shadow-lg">
                    <Clock className="size-3 text-primary" />
                    {workshop.duration}
                  </span>

                  {/* Icon badge bottom-left */}
                  <div className="absolute bottom-4 left-4 flex size-10 items-center justify-center rounded-xl bg-background/85 backdrop-blur-sm ring-1 ring-border/50 shadow-lg">
                    {workshop.icon}
                  </div>
                </div>

                <CardContent className="flex flex-col flex-1 pt-5 pb-5 gap-4">
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground tracking-tight leading-snug">
                    {workshop.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {workshop.description}
                  </p>

                  {/* Topics */}
                  <div className="mt-auto pt-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Key Topics
                    </p>
                    <ul className="space-y-2">
                      {workshop.topics.map((topic) => (
                        <li
                          key={topic.label}
                          className="flex items-start gap-2.5 text-sm text-foreground/85"
                        >
                          <span className="mt-0.5 shrink-0 text-primary">
                            {topic.icon}
                          </span>
                          {topic.label}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link href="/contact" className="mt-4">
                    <Button
                      variant="outline"
                      size="default"
                      className="w-full font-semibold group/btn"
                    >
                      Register Interest
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary to-primary/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24 text-center">
          <SectionHeading
            label="CUSTOM TRAINING"
            title="Need a workshop tailored to your team?"
            description="We design custom training programs for organizations of any size — delivered on-site, remotely, or hybrid."
            light
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="font-semibold group shadow-lg"
              >
                Request Custom Training
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
