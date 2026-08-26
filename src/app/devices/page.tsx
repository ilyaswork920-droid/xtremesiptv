import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { devices } from "@/lib/data/devices";

export const metadata: Metadata = buildMetadata({
  title: "Supported Devices",
  description:
    "See which devices Xtremes IPTV supports, including Firestick, Android TV, Samsung and LG Smart TV, iPhone, Android, Windows, Mac, and Apple TV.",
  path: "/devices",
});

export default function DevicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Devices", path: "/devices" },
        ])}
      />

      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Supported Devices
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Xtremes IPTV streams through a compatible IPTV player app on
              devices you already own. Availability depends on installing a
              supported player for your specific device.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {devices.map((device) => (
              <div
                key={device.slug}
                className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl brand-gradient text-white">
                  <device.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-lg font-semibold text-foreground">
                  {device.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {device.shortDescription}
                </p>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted/80">
                  {device.playerNote}
                </p>
                <Link
                  href={`/installation/${device.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
                >
                  View setup guide
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-surface p-8 text-center">
            <p className="text-sm text-muted">
              Not sure which device to pick? Read our comparison:{" "}
              <Link
                href="/blog/best-devices-for-iptv-streaming"
                className="text-accent underline underline-offset-2"
              >
                Best Devices for IPTV Streaming
              </Link>
            </p>
            <div className="mt-6">
              <Button href="/installation" variant="secondary">
                View All Installation Guides
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
