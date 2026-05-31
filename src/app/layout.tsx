import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.intellisyncs.com"),
  title: {
    default: "IntelliSyncs — AI-Powered Warehouse Automation",
    template: "%s | IntelliSyncs",
  },
  description:
    "IntelliSyncs delivers AI-powered warehouse automation: robotics, intelligent software, and seamless system integration. Automate, integrate, innovate.",
  keywords: [
    "warehouse automation",
    "AI logistics",
    "robotics",
    "supply chain",
    "inventory optimization",
  ],
  authors: [{ name: "IntelliSyncs" }],
  robots: "index, follow",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "IntelliSyncs",
    title: "IntelliSyncs — AI-Powered Warehouse Automation",
    description:
      "AI-powered warehouse automation: robotics, intelligent software, and seamless integration for modern logistics.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IntelliSyncs — AI-Powered Warehouse Automation",
    description:
      "AI-powered warehouse automation: robotics, intelligent software, and seamless integration.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
