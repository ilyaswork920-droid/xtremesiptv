import type { Metadata } from "next";
import Link from "next/link";
import { CreditCard, Landmark, Lock, Rocket, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCards } from "@/components/PricingCards";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, productOfferJsonLd } from "@/lib/seo";
import { additionalConnectionNote, plans } from "@/lib/data/plans";

export const metadata: Metadata = buildMetadata({
  title: "Pricing — IPTV Subscription Plans",
  description:
    "Compare Xtremes IPTV subscription plans — 1, 3, 6, and 12-month options with live channels, on-demand content, and EPG included. Secure checkout, fast activation.",
  path: "/pricing",
});

const pricingFaq = [
  {
    question: "What's included in every plan?",
    answer:
      "All plans include the full live channel lineup, the on-demand content library, an electronic program guide, and HD/Full HD/4K streaming where available. The only difference between plans is subscription length and effective monthly cost.",
  },
  {
    question: "Can I add more simultaneous connections?",
    answer:
      "Every plan includes 1 connection by default. Contact support to add extra simultaneous connections to any plan.",
  },
  {
    question: "How do I pay?",
    answer:
      "We accept major credit and debit cards, PayPal, and select cryptocurrency payments. Payment details are processed securely and are not stored on our servers.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "A short trial period may be available subject to availability. Contact support to ask about current trial access before purchasing a full plan.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "Refund eligibility depends on how much of the subscription period has been used. Full details are on our Refund Policy page.",
  },
  {
    question: "How quickly will I get access after paying?",
    answer:
      "Most subscriptions are activated within minutes of payment confirmation, with login details sent by email.",
  },
];

const helpfulReading = [
  { title: "Xtremes IPTV Plans Explained", href: "/blog/xtreme-siptv-plans-explained" },
  { title: "How to Evaluate an IPTV Provider", href: "/blog/how-to-evaluate-an-iptv-provider" },
  { title: "Free vs. Paid IPTV: What's the Difference?", href: "/blog/free-vs-paid-iptv-whats-the-difference" },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
          faqJsonLd(pricingFaq),
          productOfferJsonLd(
            plans.map((plan) => ({
              name: `${plan.name} Plan`,
              slug: plan.slug,
              price: plan.price,
              currency: plan.currency,
              durationMonths: plan.durationMonths,
              description: `Xtremes IPTV ${plan.name} subscription with live channels, on-demand content, and EPG.`,
            }))
          ),
        ]}
      />

      <section className="brand-gradient py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <nav className="text-xs text-white/80" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-white">Pricing</span>
            </nav>
            <span className="mt-5 inline-flex items-center rounded-full border border-white/40 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur">
              Pricing
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Xtremes IPTV Subscription Plans
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/90">
              Buy Xtremes IPTV with a plan built around how you watch. Every
              tier includes the same premium channel lineup, on-demand
              library, and support — you&rsquo;re only choosing the length and
              connection count.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="sr-only">Xtremes IPTV subscription plans and pricing</h2>
          <PricingCards />
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
            {additionalConnectionNote}
          </p>
        </Container>
      </section>

      <section className="brand-gradient py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur">
              <Rocket className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
              Try Xtremes IPTV Risk-Free
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Test real live channels, on-demand content, and streaming
              quality before you choose a plan.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="onGradient">
                Request a Trial
              </Button>
            </div>
            <p className="mt-4 text-xs text-white/70">
              Short trial access, subject to availability.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Checkout" title="Flexible, Secure Payment Options" description="Choose the payment method that works for you. All transactions are processed through encrypted, trusted checkout providers." />
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-3">
            {[
              { icon: CreditCard, label: "Credit / Debit Card", description: "Checkout securely with major cards." },
              { icon: Landmark, label: "PayPal", description: "Pay through your PayPal balance or linked card." },
              { icon: ShieldCheck, label: "Crypto", description: "Pay with popular cryptocurrencies where available." },
            ].map((method) => (
              <div
                key={method.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-white p-6 text-center"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-2 text-brand">
                  <method.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {method.label}
                </span>
                <span className="text-xs text-muted">{method.description}</span>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-1.5 text-center text-xs text-muted">
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            Your payment details are never stored on our servers.
          </p>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-2 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Pricing FAQ" />
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-white">
            {pricingFaq.map((item) => (
              <div key={item.question} className="p-5">
                <h3 className="font-medium text-foreground">{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <h3 className="text-sm font-semibold text-foreground">
              Helpful Reading Before You Choose
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {helpfulReading.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-border bg-white p-4 text-sm font-medium text-foreground transition hover:border-brand/50"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
