import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "IntelliSyncs Terms of Service — the legal agreement governing use of our warehouse automation platform and B2B SaaS services.",
};

export default function TermsPage() {
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
            title="Terms of Service"
            description="The agreement governing your use of the IntelliSyncs platform and services."
          />
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Terms Content                                                      */}
      {/* ================================================================== */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm text-muted-foreground mb-10">
            Last updated: May 2026
          </p>

          <div className="space-y-12">
            {/* ─── Acceptance ─── */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  These Terms of Service (&ldquo;Terms&rdquo;) constitute a
                  legally binding agreement between you (&ldquo;Customer,&rdquo;
                  &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and IntelliSyncs Inc.
                  (&ldquo;IntelliSyncs,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
                  or &ldquo;our&rdquo;), governing your access to and use of the
                  IntelliSyncs warehouse automation platform, including all
                  related software, APIs, documentation, and professional services
                  (collectively, the &ldquo;Services&rdquo;).
                </p>
                <p>
                  By executing an Order Form, clicking to accept these Terms,
                  accessing the platform, or otherwise using the Services, you
                  acknowledge that you have read, understood, and agree to be
                  bound by these Terms. If you are entering into these Terms on
                  behalf of a company or other legal entity, you represent that
                  you have the authority to bind that entity to these Terms. If
                  you do not have such authority or do not agree to these Terms,
                  you may not use the Services.
                </p>
              </div>
            </div>

            {/* ─── Services Description ─── */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                2. Services Description
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  IntelliSyncs provides an AI-powered warehouse automation
                  platform that encompasses robotic orchestration, warehouse
                  management system (WMS) integration, inventory optimization,
                  pick-path routing, demand forecasting, and related professional
                  and consulting services. The specific Services, scope, term,
                  fees, and deliverables applicable to your engagement are
                  detailed in one or more mutually executed Order Forms or
                  Statements of Work (each an &ldquo;Order Form&rdquo;), which are
                  incorporated into these Terms by reference.
                </p>
                <p>
                  We reserve the right to modify, enhance, or discontinue features
                  of the Services at any time, provided that we will not
                  materially degrade the core functionality of the Services during
                  an active subscription term without providing at least 30 days&rsquo;
                  prior written notice and offering a reasonable transition plan.
                </p>
              </div>
            </div>

            {/* ─── User Responsibilities ─── */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                3. User Responsibilities
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  As a condition of using the Services, you agree to the following
                  obligations:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Account Security:</strong>{" "}
                    You are responsible for maintaining the confidentiality of
                    your account credentials and for all activities that occur
                    under your account. You agree to notify us immediately of any
                    unauthorized use or security breach.
                  </li>
                  <li>
                    <strong className="text-foreground">Authorized Use:</strong>{" "}
                    You will use the Services only for lawful business purposes
                    and in compliance with all applicable laws, regulations, and
                    industry standards, including export control laws and data
                    protection requirements.
                  </li>
                  <li>
                    <strong className="text-foreground">Prohibited Activities:</strong>{" "}
                    You may not (a) reverse-engineer, decompile, or disassemble
                    any portion of the Services; (b) use the Services to build a
                    competitive product; (c) resell, sublicense, or distribute the
                    Services to third parties except as expressly authorized;
                    (d) introduce malware, viruses, or any other harmful code;
                    (e) interfere with or disrupt the integrity or performance of
                    the Services; or (f) use the Services to process, store, or
                    transmit any information or material that infringes the rights
                    of any third party.
                  </li>
                  <li>
                    <strong className="text-foreground">Cooperation:</strong>{" "}
                    You will provide reasonable cooperation, access to facilities,
                    and accurate information as needed for us to deliver and
                    configure the Services. Delays caused by your failure to
                    cooperate may impact delivery timelines and are not grounds
                    for termination without liability.
                  </li>
                </ul>
              </div>
            </div>

            {/* ─── Intellectual Property ─── */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                4. Intellectual Property
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p className="font-medium text-foreground">Our IP</p>
                <p>
                  IntelliSyncs retains all right, title, and interest in and to
                  the Services, including all software, algorithms, AI/ML models,
                  APIs, documentation, designs, user interfaces, and any
                  improvements, enhancements, or derivative works thereof. These
                  Terms do not grant you any ownership rights in the Services.
                  All rights not expressly granted herein are reserved by
                  IntelliSyncs.
                </p>
                <p className="font-medium text-foreground">Your Data</p>
                <p>
                  You retain all ownership rights in the data, content, and
                  information you upload to or generate through the Services
                  (&ldquo;Customer Data&rdquo;). You grant IntelliSyncs a
                  worldwide, royalty-free, non-exclusive license to access, use,
                  process, and display Customer Data solely as necessary to
                  provide the Services to you and as directed in your Order Form.
                </p>
                <p className="font-medium text-foreground">Feedback</p>
                <p>
                  Any suggestions, enhancement requests, recommendations, or
                  other feedback you provide regarding the Services may be freely
                  used by IntelliSyncs without obligation, restriction, or
                  compensation to you.
                </p>
                <p className="font-medium text-foreground">Aggregated Data</p>
                <p>
                  We may collect, aggregate, and anonymize data derived from the
                  operation of the Services (&ldquo;Aggregated Data&rdquo;) for
                  purposes of improving our products, training AI/ML models, and
                  publishing industry benchmarks. Aggregated Data does not
                  identify you or any individual and is not considered Customer
                  Data.
                </p>
              </div>
            </div>

            {/* ─── Payment Terms ─── */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                5. Payment Terms
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Fees for the Services are set forth in the applicable Order
                  Form. Unless otherwise specified in the Order Form:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    All fees are quoted and payable in United States dollars
                    (USD).
                  </li>
                  <li>
                    Subscription fees are invoiced annually in advance or as
                    otherwise specified in the Order Form.
                  </li>
                  <li>
                    Invoices are due net 30 days from the invoice date.
                  </li>
                  <li>
                    Late payments accrue interest at the lesser of 1.5% per month
                    or the maximum rate permitted by law.
                  </li>
                  <li>
                    Fees are non-refundable except as expressly provided in these
                    Terms or the Order Form.
                  </li>
                  <li>
                    All fees are exclusive of taxes. You are responsible for all
                    applicable sales, use, value-added, withholding, and similar
                    taxes, excluding taxes based on IntelliSyncs&rsquo; net
                    income.
                  </li>
                </ul>
                <p>
                  We reserve the right to suspend Services if any undisputed
                  invoice remains unpaid more than 15 days past due, provided we
                  have given you at least 10 days&rsquo; prior written notice.
                </p>
              </div>
            </div>

            {/* ─── Limitation of Liability ─── */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                6. Limitation of Liability
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Disclaimer of Warranties.</strong>{" "}
                  THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
                  AVAILABLE,&rdquo; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                  IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY LAW, INTELLISYNCS
                  DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
                  NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE
                  UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE. The
                  performance guarantees and service-level commitments applicable
                  to your engagement, if any, are set forth exclusively in your
                  Order Form.
                </p>
                <p>
                  <strong className="text-foreground">Limitation of Damages.</strong>{" "}
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL
                  INTELLISYNCS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS,
                  REVENUE, DATA, OR BUSINESS OPPORTUNITY, ARISING OUT OF OR
                  RELATED TO THESE TERMS OR THE SERVICES, WHETHER BASED ON
                  CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR
                  ANY OTHER LEGAL THEORY, EVEN IF ADVISED OF THE POSSIBILITY OF
                  SUCH DAMAGES.
                </p>
                <p>
                  <strong className="text-foreground">Liability Cap.</strong>{" "}
                  INTELLISYNCS&rsquo; TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS
                  ARISING OUT OF OR RELATED TO THESE TERMS SHALL NOT EXCEED THE
                  TOTAL FEES PAID OR PAYABLE BY YOU TO INTELLISYNCS FOR THE
                  SERVICES DURING THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING
                  THE EVENT GIVING RISE TO THE CLAIM. THE FOREGOING LIMITATIONS
                  SHALL NOT APPLY TO (A) LIABILITY ARISING FROM GROSS NEGLIGENCE
                  OR WILLFUL MISCONDUCT, (B) INDEMNIFICATION OBLIGATIONS, OR
                  (C) LIABILITY THAT CANNOT BE LIMITED OR EXCLUDED UNDER
                  APPLICABLE LAW.
                </p>
              </div>
            </div>

            {/* ─── Termination ─── */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                7. Termination
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p className="font-medium text-foreground">Term</p>
                <p>
                  These Terms commence on the Effective Date and remain in effect
                  until terminated as provided herein. The initial subscription
                  term for the Services is set forth in the applicable Order Form
                  and will automatically renew for successive periods of equal
                  duration unless either party provides written notice of
                  non-renewal at least 30 days before the end of the then-current
                  term.
                </p>
                <p className="font-medium text-foreground">Termination for Cause</p>
                <p>
                  Either party may terminate these Terms or any Order Form if the
                  other party materially breaches its obligations and fails to
                  cure such breach within 30 days after receiving written notice.
                  IntelliSyncs may also terminate immediately upon written notice
                  if you violate Sections 3 (User Responsibilities) or 4
                  (Intellectual Property), or if required by law.
                </p>
                <p className="font-medium text-foreground">Effect of Termination</p>
                <p>
                  Upon termination: (a) all rights granted to you under these
                  Terms cease immediately; (b) you shall pay all outstanding fees
                  accrued through the termination date; (c) each party shall
                  return or destroy the other party&rsquo;s Confidential
                  Information, subject to standard backup retention policies; and
                  (d) IntelliSyncs will provide you with a reasonable opportunity
                  (not less than 30 days) to export your Customer Data in a
                  standard format, after which we may delete such data.
                </p>
                <p>
                  The following sections shall survive termination: 4
                  (Intellectual Property), 5 (Payment Terms, with respect to
                  amounts owed), 6 (Limitation of Liability), 8 (Governing Law),
                  and any other provisions that by their nature should survive.
                </p>
              </div>
            </div>

            {/* ─── Governing Law ─── */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                8. Governing Law &amp; Dispute Resolution
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of the State of Tennessee, without regard to its
                  conflict of law principles. The United Nations Convention on
                  Contracts for the International Sale of Goods does not apply to
                  these Terms.
                </p>
                <p>
                  Any dispute, claim, or controversy arising out of or relating
                  to these Terms shall be resolved exclusively in the state or
                  federal courts located in Shelby County, Tennessee, and each
                  party irrevocably consents to the personal jurisdiction and
                  venue of such courts.
                </p>
                <p>
                  Before initiating formal legal proceedings, the parties agree to
                  first attempt to resolve the dispute informally through good
                  faith negotiations for a period of at least 30 days. Either
                  party may initiate this process by sending a written notice
                  describing the dispute to the other party&rsquo;s designated
                  legal contact.
                </p>
              </div>
            </div>

            {/* ─── General Provisions ─── */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                9. General Provisions
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Entire Agreement:</strong>{" "}
                    These Terms, together with all executed Order Forms,
                    constitute the entire agreement between the parties
                    concerning the Services and supersede all prior
                    communications, representations, and agreements.
                  </li>
                  <li>
                    <strong className="text-foreground">Amendments:</strong>{" "}
                    We may update these Terms from time to time. Material changes
                    will be communicated to you at least 30 days in advance via
                    email or platform notification. Continued use of the Services
                    after the effective date constitutes acceptance of the revised
                    Terms.
                  </li>
                  <li>
                    <strong className="text-foreground">Severability:</strong>{" "}
                    If any provision of these Terms is found to be unenforceable,
                    the remaining provisions shall remain in full force and
                    effect, and the unenforceable provision shall be reformed to
                    the minimum extent necessary to make it enforceable.
                  </li>
                  <li>
                    <strong className="text-foreground">Waiver:</strong>{" "}
                    The failure of either party to enforce any right or provision
                    of these Terms shall not constitute a waiver of future
                    enforcement of that right or provision.
                  </li>
                  <li>
                    <strong className="text-foreground">Assignment:</strong>{" "}
                    You may not assign or transfer these Terms, in whole or in
                    part, without our prior written consent. We may assign these
                    Terms without restriction in connection with a merger,
                    acquisition, or sale of all or substantially all of our
                    assets.
                  </li>
                  <li>
                    <strong className="text-foreground">Force Majeure:</strong>{" "}
                    Neither party shall be liable for delays or failures in
                    performance resulting from causes beyond its reasonable
                    control, including acts of God, natural disasters, war,
                    terrorism, civil unrest, government actions, labor disputes,
                    internet or utility failures, and denial-of-service attacks.
                  </li>
                  <li>
                    <strong className="text-foreground">Notices:</strong>{" "}
                    All legal notices under these Terms shall be in writing and
                    sent to the addresses provided in the Order Form or to such
                    other address as either party may designate in writing. Notices
                    may be delivered via email, personal delivery, or certified
                    mail.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
