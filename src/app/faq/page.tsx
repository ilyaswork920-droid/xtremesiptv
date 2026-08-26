import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { faqCategories } from "@/lib/data/faq";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Xtremes IPTV, including getting started, device compatibility, billing, and support.",
  path: "/faq",
});

export default function FaqPage() {
  const allEntries = faqCategories.flatMap((c) => c.items);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqJsonLd(allEntries),
        ]}
      />

      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Answers to the questions we hear most about Xtremes IPTV — from
              getting started to billing and device support.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-14">
            {faqCategories.map((category) => (
              <div key={category.category}>
                <h2 className="text-xl font-bold text-foreground">
                  {category.category}
                </h2>
                <div className="mt-5">
                  <Accordion items={category.items} />
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-surface p-8 text-center">
            <h2 className="text-lg font-bold text-foreground">
              Still have questions?
            </h2>
            <p className="mt-2 text-sm text-muted">
              Our support team is happy to help before or after you subscribe.
            </p>
            <div className="mt-6">
              <Button href="/contact">Contact Support</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
