import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Solutions: [
    { label: "Automation & Robotics", href: "/solutions#automation" },
    { label: "AI-Powered Software", href: "/solutions#ai-software" },
    { label: "System Integration", href: "/solutions#integration" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Workshops", href: "/workshops" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/logo.png"
                alt="IntelliSyncs"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-bold text-foreground">
                INTELLISYNCS
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where warehouses evolve. We automate, integrate, and innovate for
              the future of logistics.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-foreground font-semibold text-sm mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} IntelliSyncs. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Germantown, TN &bull; 1-800-INTELLI
          </p>
        </div>
      </div>
    </footer>
  );
}
