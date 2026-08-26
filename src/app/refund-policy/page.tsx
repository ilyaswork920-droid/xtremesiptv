import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Refund Policy",
  description:
    "Understand Xtremes IPTV's refund policy, including eligibility, how to request a refund, and processing timelines.",
  path: "/refund-policy",
});

const lastUpdated = "August 24, 2026";

export default function RefundPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Refund Policy", path: "/refund-policy" },
        ])}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Refund Policy
            </h1>
            <p className="mt-3 text-sm text-muted">Last updated: {lastUpdated}</p>

            <div className="prose-article mt-10">
              <p>
                We want you to be confident in your {siteConfig.shortName}{" "}
                subscription. This policy explains when refunds are available
                and how to request one.
              </p>

              <h2>Eligibility</h2>
              <p>
                Refund requests are evaluated based on how much of the
                subscription period has been used and whether the service has
                been accessed:
              </p>
              <ul>
                <li>
                  Requests made before any login credentials have been used
                  are generally eligible for a full refund.
                </li>
                <li>
                  Requests made after the service has been activated and used
                  are evaluated case by case, and may be eligible for a
                  partial refund or account credit depending on the
                  circumstances.
                </li>
                <li>
                  Requests made near the end of a subscription term are
                  generally not eligible for a refund, as the majority of the
                  service period has already been provided.
                </li>
              </ul>

              <h2>How to request a refund</h2>
              <p>
                Email {siteConfig.supportEmail} with your order details and
                the reason for your request. Our team will review your
                request and respond with a decision.
              </p>

              <h2>Non-refundable circumstances</h2>
              <p>Refunds are generally not issued for:</p>
              <ul>
                <li>
                  Account access shared or misused in violation of our{" "}
                  <a href="/terms-of-service">Terms of Service</a>
                </li>
                <li>
                  Dissatisfaction with third-party IPTV player app performance
                  unrelated to {siteConfig.shortName}&apos;s own service
                </li>
                <li>
                  Regional content availability changes outside our control
                </li>
              </ul>

              <h2>Processing time</h2>
              <p>
                Approved refunds are typically processed within 5–10 business
                days, though the exact timing to reflect on your statement
                depends on your payment provider.
              </p>

              <h2>Trial periods</h2>
              <p>
                Where a trial period is offered, it is provided subject to
                availability and is not itself refundable, since no payment is
                collected for the trial.
              </p>

              <h2>Questions</h2>
              <p>
                If you&rsquo;re unsure whether your situation qualifies, reach out
                to {siteConfig.supportEmail} before requesting a refund and
                we&rsquo;ll help clarify.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
