"use client";

import { useState, type FormEvent } from "react";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/* -------------------------------------------------------------------------- */
/*  Types
/* -------------------------------------------------------------------------- */

type ServiceOption =
  | "Automation"
  | "AI Software"
  | "Integration"
  | "Consulting"
  | "Workshop"
  | "Other";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: ServiceOption | "";
  message: string;
}

/* -------------------------------------------------------------------------- */
/*  Data
/* -------------------------------------------------------------------------- */

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    lines: ["IntelliSyncs HQ", "Germantown, TN 38138"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["1-800-INTELLI", "(901) 123-4567"],
    href: "tel:+18004683554",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@intellisyncs.com"],
    href: "mailto:info@intellisyncs.com",
  },
  {
    icon: Clock,
    title: "Hours",
    lines: ["Mon – Fri: 8 AM – 6 PM CST", "Sat – Sun: Closed"],
  },
];

const serviceOptions: { value: ServiceOption; label: string }[] = [
  { value: "Automation", label: "Automation" },
  { value: "AI Software", label: "AI Software" },
  { value: "Integration", label: "Integration" },
  { value: "Consulting", label: "Consulting" },
  { value: "Workshop", label: "Workshop" },
  { value: "Other", label: "Other" },
];

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

/* -------------------------------------------------------------------------- */
/*  Page
/* -------------------------------------------------------------------------- */

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function updateField(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("success");
      setForm(initialFormData);
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* ================================================================== */}
      {/*  Banner                                                             */}
      {/* ================================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-background to-background pt-20 pb-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,var(--primary)_0%,transparent_60%)] opacity-10"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            label="GET IN TOUCH"
            title="Contact Us"
            description="Have a question about warehouse automation? Want to explore how AI can transform your operations? We're all ears."
          />
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Contact Section (2-column)                                         */}
      {/* ================================================================== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* ---------------------------------------------------------- */}
            {/*  Form (left, spans 2 cols)                                 */}
            {/* ---------------------------------------------------------- */}
            <div className="lg:col-span-2">
              {/* Status alerts */}
              {status === "success" && (
                <div className="mb-6 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                  Thank you! Your message has been sent. We&apos;ll get back to
                  you within 24 hours.
                </div>
              )}
              {status === "error" && (
                <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  Something went wrong. Please try again or email us directly at
                  info@intellisyncs.com.
                </div>
              )}

              <Card>
                <CardContent className="p-6 sm:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name row */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          value={form.firstName}
                          onChange={(e) =>
                            updateField("firstName", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          value={form.lastName}
                          onChange={(e) =>
                            updateField("lastName", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={form.email}
                          onChange={(e) =>
                            updateField("email", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={form.phone}
                          onChange={(e) =>
                            updateField("phone", e.target.value)
                          }
                        />
                      </div>
                    </div>

                    {/* Company + Service */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          placeholder="Acme Logistics"
                          value={form.company}
                          onChange={(e) =>
                            updateField("company", e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In *</Label>
                        <Select
                          value={form.service}
                          onValueChange={(v) =>
                            updateField("service", v as ServiceOption)
                          }
                          required
                        >
                          <SelectTrigger id="service" className="w-full">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((opt) => (
                              <SelectItem key={opt.value} value={opt.value}>
                                {opt.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us about your project, challenges, or questions..."
                        value={form.message}
                        onChange={(e) =>
                          updateField("message", e.target.value)
                        }
                        required
                      />
                    </div>

                    {/* Submit */}
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      <Send className="mr-2 size-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* ---------------------------------------------------------- */}
            {/*  Contact Info (right, 1 col)                               */}
            {/* ---------------------------------------------------------- */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <Card key={item.title}>
                  <CardContent className="flex gap-4 p-5">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <item.icon className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-foreground">
                        {item.title}
                      </h3>
                      {item.lines.map((line, i) =>
                        item.href ? (
                          <a
                            key={i}
                            href={item.href}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors truncate"
                          >
                            {line}
                          </a>
                        ) : (
                          <p
                            key={i}
                            className="text-sm text-muted-foreground"
                          >
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Map placeholder */}
              <Card className="overflow-hidden">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="mx-auto mb-2 size-8 opacity-40" />
                    <p className="text-sm">Germantown, TN</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  CTA                                                                */}
      {/* ================================================================== */}
      <section className="relative overflow-hidden py-20 bg-muted/30">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,var(--primary)_0%,transparent_70%)] opacity-[0.05]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            label="PREFER A CALL?"
            title="Schedule a Discovery Session"
            description="Book a 30-minute call with one of our engineers. No obligation — just honest, expert advice about your automation needs."
          />
          <div className="mt-8">
            <a href="tel:+18004683554">
              <Button size="lg" variant="outline">
                <Phone className="mr-2 size-4" />
                Call 1-800-INTELLI
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
