import type { Metadata } from "next";
import { Headset, Layers, ShieldCheck, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Xtremes IPTV, the team behind it, and our approach to reliable IPTV streaming, straightforward pricing, and responsive support.",
  path: "/about",
});

const values = [
  {
    icon: Layers,
    title: "A complete package",
    description:
      "Live channels, on-demand content, and EPG data in one subscription — no extra apps to piece together.",
  },
  {
    icon: Wrench,
    title: "Setup that actually works",
    description:
      "Clear, device-specific installation guides instead of vague instructions, so you can get streaming without guesswork.",
  },
  {
    icon: Headset,
    title: "Support from real people",
    description:
      "Questions get answered by our team, not a chatbot loop — whether it's before you subscribe or after.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent policies",
    description:
      "Straightforward pricing, a documented refund policy, and no hidden terms.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              About {siteConfig.shortName}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {siteConfig.shortName} was built around a simple idea: IPTV
              should be easy to set up, straightforward to pay for, and backed
              by support that actually helps when something goes wrong.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-muted">
            <p>
              We started {siteConfig.shortName} after seeing how many IPTV
              services treat setup as an afterthought — vague instructions,
              slow support responses, and pricing pages that leave you
              guessing what you&rsquo;re actually getting. Our goal is to fix that:
              clear device guides, consistent plan features, and a support
              team that responds.
            </p>
            <p>
              Every plan includes the same core experience — live channels, an
              on-demand library, and a full program guide — across every
              device we support, from Firestick and Android TV to Smart TVs,
              phones, and desktop computers.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="What we focus on" title="Our approach" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl brand-gradient text-white">
                  <value.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-10 text-center">
            <h2 className="text-xl font-bold text-foreground">
              A note on content and legal compliance
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {siteConfig.shortName} provides IPTV streaming access. Content
              availability varies by region, and it&rsquo;s the customer&rsquo;s
              responsibility to confirm that using an IPTV service complies
              with the laws of their jurisdiction.
            </p>
          </div>
          <div className="mt-10 text-center">
            <Button href="/contact">Get in Touch</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
