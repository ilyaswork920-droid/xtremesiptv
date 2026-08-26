import type { Metadata } from "next";
import { Clock, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Xtremes IPTV for sales questions, setup help, billing, or general support.",
  path: "/contact",
});

const channels = [
  {
    icon: Mail,
    title: "Support Email",
    value: siteConfig.supportEmail,
    description: "Setup help, account access, and general questions.",
    href: `mailto:${siteConfig.supportEmail}`,
  },
  {
    icon: MessageCircle,
    title: "Sales Email",
    value: siteConfig.salesEmail,
    description: "Plan questions and help choosing the right subscription.",
    href: `mailto:${siteConfig.salesEmail}`,
  },
  {
    icon: Send,
    title: "Telegram",
    value: "@xtremesiptv",
    description: "Message us directly for a fast response.",
    href: siteConfig.social.telegram,
  },
  {
    icon: Phone,
    title: "WhatsApp",
    value: "+1 (470) 982-6778",
    description: "Chat with our team for setup help or sales questions.",
    href: siteConfig.social.whatsapp,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <section className="brand-gradient py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur">
              Contact
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/90">
              Questions about plans, setup, or billing? Reach out — our team
              typically responds quickly.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative">
        <Container>
          <div className="relative z-10 -mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel) => (
              <a
                key={channel.title}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-xl shadow-blue-950/10 transition hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-2xl"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl brand-gradient text-white">
                  <channel.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-4 text-base font-semibold text-foreground">
                  {channel.title}
                </p>
                <p className="mt-1 text-sm font-medium text-brand">{channel.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {channel.description}
                </p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <h2 className="text-lg font-bold text-foreground">
                  Send us a message
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Fill out the form and we&rsquo;ll get back to you by email.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-border bg-surface-2 p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-base font-bold text-foreground">
                  What to expect
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                  <li>Most messages are answered within a few hours.</li>
                  <li>Include your device type for faster setup help.</li>
                  <li>
                    For billing or refund requests, mention your order details.
                  </li>
                </ul>
                <p className="mt-6 text-sm text-muted">
                  Looking for quick answers first? Check the{" "}
                  <a href="/faq" className="text-brand underline underline-offset-2">
                    FAQ page
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
