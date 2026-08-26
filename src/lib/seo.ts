import type { Metadata } from "next";
import { siteConfig } from "./site-config";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogSubtitle?: string;
  noIndex?: boolean;
  type?: "website" | "article";
};

export function ogImageUrl(title: string, subtitle = "Premium IPTV Streaming") {
  const params = new URLSearchParams({ title, subtitle });
  return `${siteConfig.url}/api/og?${params.toString()}`;
}

export function buildMetadata({
  title,
  description,
  path,
  ogTitle,
  ogSubtitle,
  noIndex = false,
  type = "website",
}: BuildMetadataArgs): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;
  const image = ogImageUrl(ogTitle ?? title, ogSubtitle);
  const socialTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: siteConfig.name,
      type,
      images: [{ url: image, width: 1200, height: 630, alt: socialTitle }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}

// ---- JSON-LD builders ----

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/xtremesiptv-logo.tv.png`,
    description: siteConfig.description,
    email: siteConfig.supportEmail,
    sameAs: [siteConfig.social.telegram, siteConfig.social.whatsapp],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export type FaqEntry = { question: string; answer: string };

export function faqJsonLd(entries: FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer,
      },
    })),
  };
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  slug: string;
  image: string;
  publishedAt: string;
  modifiedAt: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${article.slug}`,
    },
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt,
    author: {
      "@type": "Organization",
      name: article.authorName,
      url: siteConfig.url,
    },
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function productOfferJsonLd(plans: {
  name: string;
  slug: string;
  price: number;
  currency: string;
  durationMonths: number;
  description: string;
}[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${siteConfig.name} Subscription`,
    description:
      "IPTV streaming subscription plans including live channels, on-demand content, and an electronic program guide.",
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: plans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      url: `${siteConfig.url}/pricing#${plan.slug}`,
      priceCurrency: plan.currency,
      price: plan.price.toFixed(2),
      availability: "https://schema.org/InStock",
      description: plan.description,
    })),
  };
}
