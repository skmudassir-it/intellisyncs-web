import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "IntelliSyncs Privacy Policy — how we collect, use, and protect data for warehouse automation and B2B logistics clients.",
};

export default function PrivacyPage() {
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
            label="LEGAL"
            title="Privacy Policy"
            description="How IntelliSyncs collects, uses, and protects your information."
          />
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Privacy Content                                                    */}
      {/* ================================================================== */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm text-muted-foreground mb-10">
            Last updated: May 2026
          </p>

          <div className="prose-custom space-y-12">
            {/* ─── Information We Collect ─── */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                1. Information We Collect
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  IntelliSyncs Inc. (&ldquo;IntelliSyncs,&rdquo; &ldquo;we,&rdquo;
                  &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects information
                  necessary to deliver and improve our warehouse automation
                  platform and related services. The categories of information we
                  collect depend on your relationship with us and the services you
                  engage.
                </p>
                <p className="font-medium text-foreground">Account &amp; Contact Information</p>
                <p>
                  When you create an account, request a demo, or enter into a
                  service agreement with us, we collect business contact details
                  including your name, company name, job title, email address,
                  phone number, and billing address. We may also collect
                  information about your organization&apos;s warehouse operations
                  to scope and configure our solutions.
                </p>
                <p className="font-medium text-foreground">Operational Data</p>
                <p>
                  In the course of providing our automation and AI-powered
                  software services, our platform ingests and processes
                  operational data from your warehouse management systems (WMS),
                  enterprise resource planning (ERP) platforms, and connected
                  hardware. This may include inventory levels, SKU data, order
                  volumes, picking and packing metrics, throughput statistics, and
                  sensor telemetry from robotic systems.
                </p>
                <p className="font-medium text-foreground">Technical &amp; Usage Data</p>
                <p>
                  We automatically collect certain technical information when you
                  access our platform, including IP address, browser type,
                  operating system, device identifiers, log data, and usage
                  patterns (pages visited, features used, session duration). This
                  data helps us monitor system performance, diagnose issues, and
                  improve the user experience.
                </p>
              </div>
            </div>

            {/* ─── How We Use Information ─── */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                2. How We Use Information
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  We use the information we collect for the following business
                  purposes, always grounded in our contractual obligations and
                  legitimate interests in operating our business:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Service Delivery:</strong>{" "}
                    To provision, operate, and maintain the IntelliSyncs platform
                    and deliver the automation, integration, and AI services
                    outlined in your service agreement.
                  </li>
                  <li>
                    <strong className="text-foreground">Optimization &amp; Analytics:</strong>{" "}
                    To analyze warehouse performance, generate operational
                    insights, train and improve our AI/ML models, and refine
                    routing and orchestration algorithms — always in an aggregated
                    or de-identified manner unless otherwise agreed.
                  </li>
                  <li>
                    <strong className="text-foreground">Customer Support:</strong>{" "}
                    To respond to inquiries, troubleshoot technical issues,
                    provide training, and manage your account.
                  </li>
                  <li>
                    <strong className="text-foreground">Security &amp; Compliance:</strong>{" "}
                    To detect, prevent, and respond to fraud, abuse, security
                    incidents, and other harmful activities; to comply with legal
                    obligations and enforce our terms.
                  </li>
                  <li>
                    <strong className="text-foreground">Communication:</strong>{" "}
                    To send service-related announcements, product updates, and
                    administrative messages. We do not use your operational data
                    for marketing purposes without explicit consent.
                  </li>
                </ul>
              </div>
            </div>

            {/* ─── Data Sharing ─── */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                3. Data Sharing &amp; Disclosure
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  IntelliSyncs does not sell your data. We share information only
                  in the limited circumstances described below:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Service Providers:</strong>{" "}
                    We engage trusted third-party vendors — such as cloud hosting
                    providers (AWS, Azure), analytics platforms, and customer
                    support tools — to assist in operating our business. These
                    providers are bound by contractual data processing agreements
                    and may only use your data to perform services on our behalf.
                  </li>
                  <li>
                    <strong className="text-foreground">Business Transfers:</strong>{" "}
                    In connection with a merger, acquisition, reorganization, or
                    sale of assets, your information may be transferred as part of
                    that transaction, subject to the same privacy commitments.
                  </li>
                  <li>
                    <strong className="text-foreground">Legal Obligations:</strong>{" "}
                    We may disclose information when required by law, subpoena,
                    court order, or governmental regulation, or when we believe in
                    good faith that disclosure is necessary to protect our rights,
                    your safety, or the safety of others.
                  </li>
                  <li>
                    <strong className="text-foreground">With Your Consent:</strong>{" "}
                    We may share information for any other purpose with your
                    explicit authorization.
                  </li>
                </ul>
              </div>
            </div>

            {/* ─── Cookies & Tracking ─── */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                4. Cookies &amp; Tracking Technologies
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Our website and platform use cookies and similar tracking
                  technologies (such as pixels, local storage, and session
                  identifiers) to provide core functionality, remember your
                  preferences, and analyze usage patterns.
                </p>
                <p className="font-medium text-foreground">Types of Cookies We Use</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Essential Cookies:</strong>{" "}
                    Required for the platform to function — including
                    authentication, session management, and security features.
                    These cannot be disabled.
                  </li>
                  <li>
                    <strong className="text-foreground">Analytics Cookies:</strong>{" "}
                    We use first-party and third-party analytics (such as
                    PostHog and Google Analytics) to understand how users interact
                    with our platform. All data is anonymized and aggregated.
                  </li>
                  <li>
                    <strong className="text-foreground">Functional Cookies:</strong>{" "}
                    Used to remember your preferences (e.g., dashboard layout,
                    language settings) and improve your experience.
                  </li>
                </ul>
                <p>
                  You can manage cookie preferences through your browser settings
                  or our cookie consent banner. Disabling certain cookies may
                  impact platform functionality.
                </p>
              </div>
            </div>

            {/* ─── Data Security ─── */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                5. Data Security
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  We implement and maintain industry-standard technical and
                  organizational measures to protect your information against
                  unauthorized access, alteration, disclosure, or destruction.
                  These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Encryption of data at rest (AES-256) and in transit (TLS 1.3).
                  </li>
                  <li>
                    Role-based access controls with multi-factor authentication
                    (MFA) enforced for all administrative accounts.
                  </li>
                  <li>
                    Continuous network monitoring, intrusion detection, and
                    regular penetration testing by independent security firms.
                  </li>
                  <li>
                    SOC 2 Type II compliance (audit in progress, expected
                    certification Q3 2026) with adherence to all control
                    frameworks.
                  </li>
                  <li>
                    Secure software development lifecycle (SDLC) including static
                    code analysis, dependency scanning, and peer-reviewed
                    deployments.
                  </li>
                </ul>
                <p>
                  While we strive to protect your data, no method of transmission
                  or storage is 100% secure. We encourage you to use strong,
                  unique credentials and notify us immediately of any suspected
                  security incident.
                </p>
              </div>
            </div>

            {/* ─── Your Rights ─── */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                6. Your Rights (GDPR &amp; CCPA)
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Depending on your jurisdiction, you may have certain rights
                  regarding your personal information. IntelliSyncs honors these
                  rights for all users, regardless of location.
                </p>
                <p className="font-medium text-foreground">Under GDPR (EU/UK):</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Right of Access:</strong>{" "}
                    Request a copy of the personal data we hold about you.
                  </li>
                  <li>
                    <strong className="text-foreground">Right to Rectification:</strong>{" "}
                    Request correction of inaccurate or incomplete data.
                  </li>
                  <li>
                    <strong className="text-foreground">Right to Erasure:</strong>{" "}
                    Request deletion of your personal data (&ldquo;right to be
                    forgotten&rdquo;), subject to legal retention requirements.
                  </li>
                  <li>
                    <strong className="text-foreground">Right to Restrict Processing:</strong>{" "}
                    Request limits on how we process your data under certain
                    conditions.
                  </li>
                  <li>
                    <strong className="text-foreground">Right to Data Portability:</strong>{" "}
                    Request a machine-readable export of your data.
                  </li>
                  <li>
                    <strong className="text-foreground">Right to Object:</strong>{" "}
                    Object to processing based on legitimate interests or direct
                    marketing.
                  </li>
                </ul>
                <p className="font-medium text-foreground mt-4">Under CCPA (California):</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Right to Know:</strong>{" "}
                    Request disclosure of the categories and specific pieces of
                    personal information we have collected about you.
                  </li>
                  <li>
                    <strong className="text-foreground">Right to Delete:</strong>{" "}
                    Request deletion of personal information we have collected,
                    subject to exceptions.
                  </li>
                  <li>
                    <strong className="text-foreground">Right to Opt-Out:</strong>{" "}
                    IntelliSyncs does not sell personal information, and we do not
                    share data for cross-context behavioral advertising.
                  </li>
                  <li>
                    <strong className="text-foreground">Right to Non-Discrimination:</strong>{" "}
                    We will not discriminate against you for exercising any of
                    your CCPA rights.
                  </li>
                </ul>
                <p>
                  To exercise any of these rights, contact us at{" "}
                  <a
                    href="mailto:privacy@intellisyncs.com"
                    className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                  >
                    privacy@intellisyncs.com
                  </a>
                  . We will respond within 30 days (or the timeframe required by
                  applicable law). We may need to verify your identity before
                  processing your request.
                </p>
              </div>
            </div>

            {/* ─── Contact Us ─── */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                7. Contact Us
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  If you have questions, concerns, or requests regarding this
                  Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p>
                    <strong className="text-foreground">Email:</strong>{" "}
                    <a
                      href="mailto:privacy@intellisyncs.com"
                      className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                    >
                      privacy@intellisyncs.com
                    </a>
                  </p>
                  <p>
                    <strong className="text-foreground">Mail:</strong>{" "}
                    IntelliSyncs Inc., Attn: Privacy Office, Germantown, TN 38138
                  </p>
                  <p>
                    <strong className="text-foreground">Phone:</strong>{" "}
                    1-800-INTELLI
                  </p>
                </div>
                <p>
                  For EU/UK data subjects, you also have the right to lodge a
                  complaint with your local supervisory authority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
