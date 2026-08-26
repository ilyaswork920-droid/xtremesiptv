import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BlogCoverImage } from "@/components/BlogCoverImage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { devices, getDeviceBySlug } from "@/lib/data/devices";
import { getDeviceImage } from "@/lib/data/device-images";
import { getInstallGuideBySlug, installationGuides } from "@/lib/data/installation-guides";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return installationGuides.map((guide) => ({ slug: guide.deviceSlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getInstallGuideBySlug(slug);
  if (!guide) return {};

  return buildMetadata({
    title: guide.title,
    description: guide.metaDescription,
    path: `/installation/${slug}`,
  });
}

export default async function InstallationGuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getInstallGuideBySlug(slug);
  const device = getDeviceBySlug(slug);
  if (!guide || !device) notFound();

  const otherDevices = devices.filter((d) => d.slug !== slug).slice(0, 4);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Installation", path: "/installation" },
          { name: device.name, path: `/installation/${slug}` },
        ])}
      />

      <section className="border-b border-border py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Installation Guide
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                {guide.title}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted">
                {guide.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/pricing">View Plans</Button>
                <Button href="/devices" variant="secondary">
                  All Devices
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <BlogCoverImage image={getDeviceImage(slug)} priority />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-xl font-bold text-foreground">What you&rsquo;ll need</h2>
            <ul className="mt-5 space-y-3">
              {guide.requirements.map((req) => (
                <li key={req} className="flex items-start gap-3 text-sm text-muted">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-14 text-xl font-bold text-foreground">
              Step-by-step instructions
            </h2>
            <ol className="mt-5 space-y-6">
              {guide.steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full brand-gradient text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="mt-14 text-xl font-bold text-foreground">
              Troubleshooting
            </h2>
            <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-surface">
              {guide.troubleshooting.map((item) => (
                <div key={item.issue} className="p-5">
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.issue}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.fix}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-sm text-muted">
              Still need help? Check our{" "}
              <Link href="/faq" className="text-accent underline underline-offset-2">
                FAQ page
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="text-accent underline underline-offset-2">
                contact support
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-14 sm:py-20">
        <Container>
          <h2 className="text-xl font-bold text-foreground">
            Set up another device
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherDevices.map((d) => (
              <Link
                key={d.slug}
                href={`/installation/${d.slug}`}
                className="flex items-center justify-between rounded-xl border border-border bg-background p-4 text-sm font-medium text-foreground transition hover:border-brand/50"
              >
                {d.name}
                <ArrowRight className="h-4 w-4 text-muted" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
