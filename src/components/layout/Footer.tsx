import Image from "next/image";
import Link from "next/link";
import { CreditCard, Landmark, Phone, Send, ShieldCheck } from "lucide-react";
import { footerNav, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-2">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/xtremesiptv-logo.tv.png"
                alt={siteConfig.shortName}
                width={1774}
                height={887}
                className="h-10 w-auto"
              />
              <span className="text-lg font-bold text-foreground">
                {siteConfig.shortName}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex items-center gap-5">
              <a
                href={siteConfig.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-brand"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Telegram
              </a>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-brand"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Secure checkout:
              </p>
              <div className="mt-3 flex items-center gap-4 text-muted">
                <span className="flex items-center gap-1.5 text-xs">
                  <CreditCard className="h-4 w-4" aria-hidden="true" />
                  Credit / Debit Card
                </span>
                <span className="flex items-center gap-1.5 text-xs">
                  <Landmark className="h-4 w-4" aria-hidden="true" />
                  PayPal
                </span>
                <span className="flex items-center gap-1.5 text-xs">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  Crypto
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Service</h3>
            <ul className="mt-4 space-y-3">
              {footerNav.service.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-3">
              {footerNav.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalEntity}. All
            rights reserved.
          </p>
          <p className="max-w-2xl leading-relaxed">
            {siteConfig.shortName} provides IPTV streaming access. Content
            availability varies by region, and customers are responsible for
            verifying that use of the service complies with the laws of their
            jurisdiction.
          </p>
        </div>
      </div>
    </footer>
  );
}
