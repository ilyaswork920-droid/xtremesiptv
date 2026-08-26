export type Plan = {
  slug: string;
  name: string;
  durationMonths: number;
  price: number;
  monthlyEquivalent: number;
  currency: string;
  popular?: boolean;
  connections: number;
  description: string;
  priceSuffix: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    slug: "1-month",
    name: "1 Month",
    durationMonths: 1,
    price: 23.99,
    monthlyEquivalent: 23.99,
    currency: "USD",
    connections: 1,
    description: "Best for trying Xtremes IPTV month to month.",
    priceSuffix: "month",
    features: [
      "20,000+ Live Channels",
      "50,000+ Movies & Series",
      "Full HD & 4K Streaming",
      "Electronic Program Guide",
      "1 Connection",
      "24/7 Customer Support",
    ],
  },
  {
    slug: "3-months",
    name: "3 Months",
    durationMonths: 3,
    price: 41.99,
    monthlyEquivalent: 14.0,
    currency: "USD",
    connections: 1,
    description: "A short-term plan with a lower monthly cost.",
    priceSuffix: "3 mo",
    features: [
      "20,000+ Live Channels",
      "50,000+ Movies & Series",
      "Full HD & 4K Streaming",
      "Electronic Program Guide",
      "1 Connection",
      "24/7 Customer Support",
    ],
  },
  {
    slug: "6-months",
    name: "6 Months",
    durationMonths: 6,
    price: 51.99,
    monthlyEquivalent: 8.67,
    currency: "USD",
    connections: 1,
    description: "Balanced value for committed streamers.",
    priceSuffix: "6 mo",
    features: [
      "20,000+ Live Channels",
      "50,000+ Movies & Series",
      "Full HD & 4K Streaming",
      "Electronic Program Guide",
      "1 Connection",
      "24/7 Customer Support",
      "Priority Support",
    ],
  },
  {
    slug: "12-months",
    name: "12 Months",
    durationMonths: 12,
    price: 75.99,
    monthlyEquivalent: 6.33,
    currency: "USD",
    popular: true,
    connections: 1,
    description: "Our best value plan for full-year streaming.",
    priceSuffix: "12 mo",
    features: [
      "20,000+ Live Channels",
      "50,000+ Movies & Series",
      "Full HD & 4K Streaming",
      "Electronic Program Guide",
      "1 Connection",
      "24/7 Priority Support",
      "Best Overall Value",
    ],
  },
];

export const additionalConnectionNote =
  "Prices shown in USD. Need more simultaneous connections? Contact us to add extra connections to any plan.";
