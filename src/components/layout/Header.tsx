"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { primaryNav, siteConfig } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-navy text-white sm:block">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
          <span>24/7 live chat &amp; email support</span>
          <div className="flex items-center gap-5">
            <Link href="/faq" className="transition hover:text-white/80">
              FAQ
            </Link>
            <Link href="/terms-of-service" className="transition hover:text-white/80">
              Legal Disclaimer
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <Image
              src="/xtremesiptv-logo.tv.png"
              alt={siteConfig.shortName}
              width={1774}
              height={887}
              priority
              className="h-20 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/20 transition hover:brightness-110"
            >
              Subscribe
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open ? (
          <nav
            className="border-t border-border bg-white px-4 py-4 lg:hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-1">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-surface-2 hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white"
            >
              Subscribe
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
