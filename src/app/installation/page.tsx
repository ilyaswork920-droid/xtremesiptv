import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { devices } from "@/lib/data/devices";

export const metadata: Metadata = buildMetadata({
  title: "IPTV Installation Guides",
  description:
    "Step-by-step Xtremes IPTV installation guides for Firestick, Android TV, Smart TV, iPhone, Android, Windows, Mac, and Apple TV.",
  path: "/installation",
});

export default function InstallationPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Installation", path: "/installation" },
        ])}
      />

      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Installation Guides
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Pick your device below for a full step-by-step setup guide.
              Xtremes IPTV works through compatible third-party IPTV player
              apps — we are not affiliated with the app developers referenced
              in these guides.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {devices.map((device) => (
              <Link
                key={device.slug}
                href={`/installation/${device.slug}`}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 text-center transition hover:border-brand/50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl brand-gradient text-white">
                  <device.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {device.name}
                </span>
                <span className="text-xs text-muted">View setup guide →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
