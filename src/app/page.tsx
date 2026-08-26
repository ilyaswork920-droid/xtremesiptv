import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarClock,
  CheckCircle2,
  Headset,
  Layers,
  Lock,
  MonitorPlay,
  Radio,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";
import { PricingCards } from "@/components/PricingCards";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { devices } from "@/lib/data/devices";
import { faqHomepagePreview } from "@/lib/data/faq";

export const metadata: Metadata = buildMetadata({
  title: "Xtremes IPTV — Premium IPTV Streaming for Any Device",
  description:
    "Xtremes IPTV delivers live channels, on-demand content, and a full program guide to Firestick, Android TV, Smart TV, mobile, and desktop. Set up in minutes.",
  path: "/",
});

const heroChecklist = [
  "Instant activation after checkout",
  "Real 24/7 customer support",
  "HD, Full HD & 4K quality",
  "Works on compatible devices",
];

const heroStats = [
  { value: "20,000+", label: "Live TV Channels" },
  { value: "50,000+", label: "Movies & Series" },
  { value: "HD/FHD/4K", label: "Premium Quality" },
  { value: "All Devices", label: "Devices Supported" },
  { value: "24/7", label: "Customer Support" },
];

const features = [
  {
    icon: Radio,
    title: "Live channel access",
    description:
      "Stream live channels spanning sports, entertainment, news, and more, organized for quick browsing.",
  },
  {
    icon: Layers,
    title: "On-demand library",
    description:
      "Dive into a growing on-demand catalog of movies and series whenever you want, alongside the live lineup.",
  },
  {
    icon: CalendarClock,
    title: "Electronic program guide",
    description:
      "See what's airing now and what's coming up next with built-in EPG data across supported player apps.",
  },
  {
    icon: MonitorPlay,
    title: "Multi-device support",
    description:
      "Watch on Firestick, Android TV, Smart TV, iPhone, Android, Windows, Mac, and Apple TV — see our full device list.",
  },
  {
    icon: Sparkles,
    title: "HD, Full HD & 4K",
    description:
      "Stream at the resolution your connection and the source content support, from standard HD up to 4K.",
  },
  {
    icon: Headset,
    title: "Real support",
    description:
      "Reach a real person for setup help or account questions through email, live chat, or Telegram.",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Choose your plan",
    description:
      "Pick the subscription length that fits how often you watch — from 1 month to 12 months.",
  },
  {
    step: "2",
    title: "Get your credentials",
    description:
      "Receive your login details or M3U playlist link by email shortly after checkout.",
  },
  {
    step: "3",
    title: "Install & stream",
    description:
      "Follow our device-specific installation guide, add your playlist, and start watching.",
  },
];

const trustSignals = [
  {
    icon: Headset,
    title: "Human support",
    description: "Setup help and account questions answered by a real support team.",
  },
  {
    icon: Rocket,
    title: "Fast activation",
    description: "Most subscriptions are activated within minutes of payment confirmation.",
  },
  {
    icon: Lock,
    title: "Secure checkout",
    description: "Payment details are processed securely and are not stored on our servers.",
  },
  {
    icon: ShieldCheck,
    title: "Straightforward policies",
    description: "Clear terms and a documented refund policy — no fine-print surprises.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqHomepagePreview)} />

      <section className="brand-gradient relative overflow-hidden py-16 sm:py-24">
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                <Star className="h-3.5 w-3.5 fill-gold text-gold" aria-hidden="true" />
                Premium Streaming Experience
              </span>
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl">
                Xtremes IPTV
                <br />
                for Premium
                <br />
                Streaming
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
                Xtremes IPTV is a premium IPTV service bringing live TV, movies,
                series, and sports together in one place — with HD, Full HD, and
                4K streaming, a full Electronic Program Guide, and multi-device
                support for the screens you already own.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                <Button href="/pricing" variant="onGradient">
                  Subscribe →
                </Button>
                <Button href="/pricing" variant="onGradientOutline">
                  ▶ View Plans
                </Button>
              </div>
              <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-sm text-white/90 sm:grid-cols-2">
                {heroChecklist.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-2 text-sm text-white/90">
                <span className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                  ))}
                </span>
                Premium Streaming Experience
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/xtremesiptv-logo.png"
                alt="Xtremes IPTV streaming interface preview showing Live TV, Movies, and Series"
                width={1536}
                height={1024}
                priority
                className="h-auto w-full max-w-xl"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="relative">
        <Container>
          <div className="relative z-10 -mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-white p-6 shadow-xl shadow-blue-950/10 sm:grid-cols-5 sm:p-8">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xl font-extrabold text-brand sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 pt-6 sm:pb-20">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title="Everything you need to stream"
            description="A complete IPTV package — no separate apps or subscriptions to juggle."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-white p-6 transition hover:border-brand/50 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl brand-gradient text-white">
                  <feature.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface-2 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-3 inline-flex items-center rounded-full bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                What is IPTV?
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Television delivered over the internet, not a satellite dish
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                IPTV (Internet Protocol Television) streams live channels and
                on-demand content over your existing internet connection instead
                of a cable box or satellite dish. All you need is a compatible
                device and a player app.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Want the full explanation? Read our guide:{" "}
                <Link href="/blog/what-is-iptv" className="text-brand underline underline-offset-2">
                  What Is IPTV?
                </Link>
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-brand" aria-hidden="true" />
                <p className="text-sm font-semibold text-foreground">
                  How it&rsquo;s different from cable
                </p>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                <li>No satellite dish or cable box installation required</li>
                <li>Works on devices you already own</li>
                <li>Combines live channels with an on-demand library</li>
                <li>Includes an electronic program guide (EPG)</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Compatibility"
            title="Stream on the devices you already own"
            description="Xtremes IPTV works through a compatible IPTV player app — no proprietary hardware required."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {devices.map((device) => (
              <Link
                key={device.slug}
                href={`/installation/${device.slug}`}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-white p-6 text-center transition hover:border-brand/50 hover:shadow-md"
              >
                <device.icon className="h-8 w-8 text-brand" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">
                  {device.name}
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            <Link href="/devices" className="text-brand underline underline-offset-2">
              See full device compatibility details →
            </Link>
          </p>
        </Container>
      </section>

      <section className="border-y border-border bg-surface-2 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Process" title="How it works" />
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full brand-gradient text-lg font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/pricing">Subscribe</Button>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Simple, transparent plans"
            description="Every plan includes the same core features — the only difference is subscription length and effective monthly cost."
          />
          <div className="mt-14">
            <PricingCards ctaHref="/pricing" />
          </div>
          <p className="mt-10 text-center text-sm text-muted">
            See the full feature breakdown on the{" "}
            <Link href="/pricing" className="text-brand underline underline-offset-2">
              pricing page
            </Link>
            .
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

      <section className="border-y border-border bg-surface-2 py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((item) => (
              <div key={item.title} className="text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            description="Can't find what you're looking for? Visit the full FAQ page."
          />
          <div className="mx-auto mt-14 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-white">
            {faqHomepagePreview.map((item) => (
              <div key={item.question} className="p-5">
                <h3 className="font-medium text-foreground">{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/faq" variant="secondary">
              View Full FAQ
            </Button>
          </div>
        </Container>
      </section>

      <section className="brand-gradient py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Ready to start streaming with Xtremes IPTV?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90">
              Pick a plan, install a player app on your device, and you&rsquo;ll be
              watching within minutes.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/pricing" variant="onGradient">
                View Plans
              </Button>
              <Button href="/contact" variant="onGradientOutline">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
