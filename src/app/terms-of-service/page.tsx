import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Read the Terms of Service governing the use of Xtremes IPTV, including subscriptions, acceptable use, and liability.",
  path: "/terms-of-service",
});

const lastUpdated = "August 24, 2026";

export default function TermsOfServicePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms-of-service" },
        ])}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Terms of Service
            </h1>
            <p className="mt-3 text-sm text-muted">Last updated: {lastUpdated}</p>

            <div className="prose-article mt-10">
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of{" "}
                {siteConfig.url} and the {siteConfig.shortName} IPTV streaming
                service, operated by {siteConfig.legalEntity}. By subscribing
                to or using the service, you agree to these Terms.
              </p>

              <h2>1. Service description</h2>
              <p>
                {siteConfig.shortName} provides a subscription-based IPTV
                streaming service, including live channels, on-demand
                content, and an electronic program guide, accessible through
                compatible third-party IPTV player applications on supported
                devices.
              </p>

              <h2>2. Accounts and subscriptions</h2>
              <p>
                When you subscribe, you&rsquo;ll receive login credentials or a
                playlist link tied to your account. You are responsible for
                keeping these credentials confidential and for all activity
                that occurs using your subscription.
              </p>

              <h2>3. Acceptable use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Share your subscription credentials beyond the number of connections included in your plan</li>
                <li>Attempt to resell, redistribute, or rebroadcast the service without authorization</li>
                <li>Use the service in a manner that violates applicable law in your jurisdiction</li>
                <li>Attempt to disrupt, reverse-engineer, or interfere with the service&rsquo;s infrastructure</li>
              </ul>

              <h2>4. Third-party player applications</h2>
              <p>
                {siteConfig.shortName} works through independent, third-party
                IPTV player applications referenced in our installation
                guides. We are not affiliated with the developers of these
                apps and are not responsible for their functionality,
                availability, or policies.
              </p>

              <h2>5. Payment and renewal</h2>
              <p>
                Subscription fees are due at the time of purchase for the plan
                length selected. Review your order confirmation for the
                specific renewal terms that apply to your plan. Pricing
                details are available on our{" "}
                <a href="/pricing">Pricing page</a>.
              </p>

              <h2>6. Content availability</h2>
              <p>
                Channel and content availability may change over time due to
                factors outside our control, including source-side outages or
                licensing changes. We aim to maintain a reliable, high-quality
                lineup but cannot guarantee uninterrupted availability of any
                specific channel or title.
              </p>

              <h2>7. Legal compliance</h2>
              <p>
                You are solely responsible for ensuring that your use of the
                service complies with the laws of your country or region.{" "}
                {siteConfig.shortName} does not provide legal advice regarding
                content licensing or broadcast regulations in your
                jurisdiction.
              </p>

              <h2>8. Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, {siteConfig.legalEntity}{" "}
                is not liable for indirect, incidental, or consequential
                damages arising from your use of the service, including
                service interruptions caused by third-party infrastructure or
                content sources.
              </p>

              <h2>9. Termination</h2>
              <p>
                We may suspend or terminate access to the service for
                violations of these Terms, including unauthorized sharing or
                resale of a subscription.
              </p>

              <h2>10. Changes to these Terms</h2>
              <p>
                We may update these Terms from time to time. Continued use of
                the service after changes take effect constitutes acceptance
                of the updated Terms.
              </p>

              <h2>11. Contact</h2>
              <p>
                Questions about these Terms can be sent to{" "}
                {siteConfig.supportEmail}.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
