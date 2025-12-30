import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
  {
    name: "Basic",
    price: 29,
    period: "month",
    features: [
      "50 AI thumbnails / month",
      "Basic thumbnail templates",
      "Standard resolution exports",
      "No watermark",
    ],
    mostPopular: false,
  },
  {
    name: "Pro",
    price: 79,
    period: "month",
    features: [
      "Unlimited AI thumbnails",
      "Premium thumbnail templates",
      "4K resolution exports",
      "Custom fonts & colors",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: 199,
    period: "month",
    features: [
      "Unlimited team access",
      "Dedicated priority support",
      "Unlimited thumbnail projects",
      "Brand kits & style presets",
      "Advanced AI customization",
    ],
    mostPopular: false,
  },
];
