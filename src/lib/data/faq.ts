export type FaqCategory = {
  category: string;
  items: { question: string; answer: string }[];
};

export const faqCategories: FaqCategory[] = [
  {
    category: "Getting Started",
    items: [
      {
        question: "What is Xtremes IPTV?",
        answer:
          "Xtremes IPTV is a subscription streaming service that delivers live channels, on-demand movies and series, and an electronic program guide (EPG) over the internet using a compatible IPTV player app.",
      },
      {
        question: "How quickly is my subscription activated?",
        answer:
          "Most subscriptions are activated within a few minutes of payment confirmation. You'll receive your login details or M3U link by email once activation is complete.",
      },
      {
        question: "Do I need any special hardware?",
        answer:
          "No special hardware is required. Xtremes IPTV works through IPTV player apps on devices you likely already own, including Firestick, Android TV boxes, smart TVs, phones, tablets, and computers.",
      },
      {
        question: "Can I try Xtremes IPTV before committing to a full plan?",
        answer:
          "A short trial period may be available subject to availability. Contact support to ask about current trial access before purchasing a full plan.",
      },
    ],
  },
  {
    category: "Devices & Quality",
    items: [
      {
        question: "Which devices does Xtremes IPTV support?",
        answer:
          "Xtremes IPTV supports Amazon Firestick, Android TV, Samsung and LG smart TVs, iPhone and iPad, Android phones and tablets, Windows, Mac, and Apple TV. See the Devices page for details on each.",
      },
      {
        question: "What video quality can I expect?",
        answer:
          "Streams are available in HD, Full HD, and 4K where the source content and your internet connection support it. Quality can vary by channel and by your connection speed.",
      },
      {
        question: "How much internet speed do I need?",
        answer:
          "We recommend at least 15 Mbps for smooth HD streaming and closer to 25 Mbps or more for consistent 4K playback, especially if other devices share the same network.",
      },
      {
        question: "Can I use Xtremes IPTV on more than one device at a time?",
        answer:
          "Each plan includes one simultaneous connection by default. If you need to stream on multiple devices at once, contact support to add extra connections to your plan.",
      },
      {
        question: "What is an EPG and does Xtremes IPTV include one?",
        answer:
          "An EPG (electronic program guide) shows what's currently airing and what's coming up next on each channel. Xtremes IPTV includes EPG data across supported IPTV player apps.",
      },
    ],
  },
  {
    category: "Billing & Plans",
    items: [
      {
        question: "What payment methods are accepted?",
        answer:
          "Xtremes IPTV accepts major credit and debit cards, PayPal, and select cryptocurrency payments. Payment details are processed securely and are not stored on our servers.",
      },
      {
        question: "Do subscriptions renew automatically?",
        answer:
          "Renewal terms depend on how you checked out. Review your order confirmation for the specific terms of your plan, or contact support if you're unsure whether your plan auto-renews.",
      },
      {
        question: "Can I upgrade or extend my plan later?",
        answer:
          "Yes. Contact support at any time to upgrade to a longer plan or extend your current subscription.",
      },
      {
        question: "What is your refund policy?",
        answer:
          "Refund eligibility depends on how much of the subscription period has been used and whether the service has been accessed. Full details are available on the Refund Policy page.",
      },
    ],
  },
  {
    category: "Support & Policies",
    items: [
      {
        question: "How do I get help if something isn't working?",
        answer:
          "Reach out through the Contact page or email support directly. Include your device type and a description of the issue so our team can help as quickly as possible.",
      },
      {
        question: "Is Xtremes IPTV legal to use?",
        answer:
          "IPTV technology itself is a legitimate content-delivery method. However, content licensing and availability laws vary by country. You are responsible for confirming that using an IPTV service complies with the laws of your jurisdiction.",
      },
      {
        question: "Are you affiliated with the IPTV player apps mentioned in your guides?",
        answer:
          "No. Xtremes IPTV is a channel and content subscription service. The third-party IPTV player apps referenced in our installation guides are independent software, and we are not affiliated with their developers.",
      },
      {
        question: "What happens if a channel goes down?",
        answer:
          "Occasional channel interruptions can happen due to source-side issues outside our control. Our team monitors channel health and works to restore or replace affected streams as quickly as possible.",
      },
    ],
  },
];

export const faqHomepagePreview = [
  faqCategories[0].items[0],
  faqCategories[1].items[0],
  faqCategories[1].items[2],
  faqCategories[2].items[0],
  faqCategories[3].items[0],
  faqCategories[3].items[1],
];
