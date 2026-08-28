export const siteConfig = {
  name: "Xtreme HD IPTV",
  shortName: "Xtreme HD IPTV",
  domain: "www.xtremesiptv.com",
  url: "https://www.xtremesiptv.com",
  tagline: "Premium IPTV streaming, set up in minutes",
  description:
    "Xtreme HD IPTV is a subscription IPTV service offering live channels, on-demand content, and an electronic program guide across Firestick, Android TV, Smart TV, mobile, and desktop devices.",
  supportEmail: "support@xtremesiptv.com",
  salesEmail: "sales@xtremesiptv.com",
  legalEntity: "Xtreme HD IPTV",
  foundingYear: 2026,
  social: {
    telegram: "https://t.me/xtremesiptv",
    whatsapp: "https://wa.me/14709826778",
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Devices", href: "/devices" },
  { label: "Installation", href: "/installation" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  service: [
    { label: "Pricing", href: "/pricing" },
    { label: "Devices", href: "/devices" },
    { label: "Installation Guides", href: "/installation" },
    { label: "FAQ", href: "/faq" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
} satisfies Record<string, NavLink[]>;
