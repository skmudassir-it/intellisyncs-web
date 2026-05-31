import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";

// ──────────────────────────────────────
// Metadata
// ──────────────────────────────────────

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert insights on warehouse automation, AI-powered logistics, robotics, digital twins, and smart supply chain strategy from the IntelliSyncs team.",
};

// ──────────────────────────────────────
// Data
// ──────────────────────────────────────

type Category = "AI" | "Strategy" | "Technology" | "Robotics";

interface BlogPost {
  id: string;
  title: string;
  category: Category;
  readTime: string;
  date: string;
  excerpt: string;
  imageSrc?: string;
  featured?: boolean;
}

const categoryBadge: Record<Category, string> = {
  AI: "bg-blue-500/15 text-blue-400 ring-blue-500/25",
  Strategy: "bg-emerald-500/15 text-emerald-400 ring-emerald-500/25",
  Technology: "bg-purple-500/15 text-purple-400 ring-purple-500/25",
  Robotics: "bg-amber-500/15 text-amber-400 ring-amber-500/25",
};

const blogPosts: BlogPost[] = [
  {
    id: "future-warehouse-automation-2026",
    title: "The Future of Warehouse Automation: 2026 Trends",
    category: "AI",
    readTime: "5 min read",
    date: "May 28, 2026",
    excerpt:
      "AI, digital twins, and collaborative robots are reshaping warehouse floors. We explore the top trends defining automation in 2026 and what they mean for operators planning their next move.",
    imageSrc: "/images/blog-hero.jpg",
    featured: true,
  },
  {
    id: "roi-smart-warehousing",
    title: "ROI of Smart Warehousing: A Data-Driven Guide",
    category: "Strategy",
    readTime: "7 min read",
    date: "May 22, 2026",
    excerpt:
      "A rigorous cost analysis of smart warehousing investments. We break down labor savings, throughput gains, and payback periods — with real numbers from recent deployments.",
  },
  {
    id: "signs-warehouse-needs-ai-upgrade",
    title: "5 Signs Your Warehouse Needs an AI Upgrade",
    category: "AI",
    readTime: "4 min read",
    date: "May 15, 2026",
    excerpt:
      "Rising error rates, persistent bottlenecks, and shrinking margins — these are the warning signals that your operation is ready for an AI-powered transformation.",
  },
  {
    id: "digital-twins-revolutionizing-supply-chains",
    title: "How Digital Twins Are Revolutionizing Supply Chains",
    category: "Technology",
    readTime: "6 min read",
    date: "May 10, 2026",
    excerpt:
      "From real-time simulation to predictive analytics, digital twins give logistics teams a risk-free sandbox to optimize layouts, test scenarios, and forecast disruptions.",
  },
  {
    id: "choosing-robotics-solution-dc",
    title: "Choosing the Right Robotics Solution for Your DC",
    category: "Robotics",
    readTime: "8 min read",
    date: "May 3, 2026",
    excerpt:
      "AGVs vs AMRs — which is right for your distribution center? We compare autonomy levels, infrastructure requirements, and total cost of ownership in this comprehensive guide.",
  },
  {
    id: "sustainability-logistics-green-automation",
    title: "Sustainability in Logistics: Green Automation",
    category: "Strategy",
    readTime: "5 min read",
    date: "Apr 28, 2026",
    excerpt:
      "Energy-efficient robotics, optimized routing, and waste-reducing workflows — how green automation is cutting carbon footprints while improving the bottom line.",
  },
];

const featuredPost = blogPosts.find((p) => p.featured)!;
const gridPosts = blogPosts.filter((p) => !p.featured);

// ──────────────────────────────────────
// Page
// ──────────────────────────────────────

export default function BlogPage() {
  return (
    <>
      {/* ─── Banner ─── */}
      <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-card">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
          <SectionHeading
            label="INSIGHTS"
            title="The IntelliSyncs Blog"
            description="Expert perspectives on warehouse automation, AI, robotics, and the future of supply chain."
          />
        </div>
      </section>

      {/* ─── Featured Post ─── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Card className="group overflow-hidden border-border bg-card/60 hover:ring-primary/20 transition-shadow duration-300 pt-0">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[16/9] md:aspect-auto overflow-hidden">
                <Image
                  src={featuredPost.imageSrc!}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent md:bg-linear-to-r md:from-transparent md:to-background/40" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                {/* Badge + Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${categoryBadge[featuredPost.category]}`}
                  >
                    <Tag className="size-3" />
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="size-3.5" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="size-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight leading-snug mb-4">
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="hover:text-primary transition-colors"
                  >
                    {featuredPost.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>

                {/* Read More */}
                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                >
                  Read Full Article
                  <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ─── Blog Grid ─── */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridPosts.map((post) => (
              <Card
                key={post.id}
                className="group flex flex-col border-border bg-card/60 hover:ring-primary/20 transition-shadow duration-300"
              >
                <CardContent className="flex flex-col flex-1 pt-6 pb-6 gap-4">
                  {/* Badge + Meta */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${categoryBadge[post.category]}`}
                    >
                      <Tag className="size-3" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="size-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="size-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground tracking-tight leading-snug">
                    <Link
                      href={`/blog/${post.id}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link mt-auto"
                  >
                    Read More
                    <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
