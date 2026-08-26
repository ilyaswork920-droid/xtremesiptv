import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read Xtremes IPTV's privacy policy to understand what information we collect, how it's used, and your rights regarding your data.",
  path: "/privacy-policy",
});

const lastUpdated = "August 24, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-muted">Last updated: {lastUpdated}</p>

            <div className="prose-article mt-10">
              <p>
                This Privacy Policy explains how {siteConfig.legalEntity} (&ldquo;
                {siteConfig.shortName}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, and
                protects information when you visit {siteConfig.url} or
                subscribe to our IPTV streaming service.
              </p>

              <h2>Information we collect</h2>
              <p>We collect the following categories of information:</p>
              <ul>
                <li>
                  <strong>Account information</strong> — name, email address,
                  and any details you provide when subscribing or contacting
                  support.
                </li>
                <li>
                  <strong>Payment information</strong> — processed by our
                  third-party payment providers. We do not store full card
                  numbers or payment credentials on our own servers.
                </li>
                <li>
                  <strong>Usage information</strong> — basic technical data
                  such as device type, app version, and general connection
                  quality, used to diagnose support issues.
                </li>
                <li>
                  <strong>Communications</strong> — messages you send us via
                  the contact form, email, or Telegram.
                </li>
              </ul>

              <h2>How we use information</h2>
              <p>We use collected information to:</p>
              <ul>
                <li>Provision and activate your subscription</li>
                <li>Respond to support requests and account questions</li>
                <li>Send service-related communications, such as renewal reminders</li>
                <li>Maintain the security and reliability of our service</li>
              </ul>

              <h2>Payment processing</h2>
              <p>
                Payments are handled by third-party payment processors. When
                you make a purchase, your payment details are sent directly to
                the processor and are not stored on {siteConfig.shortName}
                &apos;s own servers.
              </p>

              <h2>Cookies and similar technologies</h2>
              <p>
                Our website may use essential cookies required for basic site
                functionality. We do not use cookies for third-party
                advertising tracking.
              </p>

              <h2>Data retention</h2>
              <p>
                We retain account and communication information for as long
                as necessary to provide the service, comply with legal
                obligations, and resolve disputes. You may request deletion of
                your data as described below.
              </p>

              <h2>Your rights</h2>
              <p>
                Depending on your location, you may have rights to access,
                correct, or delete the personal information we hold about
                you. To exercise these rights, contact us at{" "}
                {siteConfig.supportEmail}.
              </p>

              <h2>Children&rsquo;s privacy</h2>
              <p>
                Our service is not directed to children under 13, and we do
                not knowingly collect personal information from children.
              </p>

              <h2>Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Material
                changes will be reflected by updating the &ldquo;Last updated&rdquo; date
                above.
              </p>

              <h2>Contact us</h2>
              <p>
                Questions about this Privacy Policy can be sent to{" "}
                {siteConfig.supportEmail}.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
