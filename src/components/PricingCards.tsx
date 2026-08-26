import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { plans } from "@/lib/data/plans";

export function PricingCards({ ctaHref }: { ctaHref: string }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
      {plans.map((plan) => (
        <div
          key={plan.slug}
          id={plan.slug}
          className={`relative flex h-full flex-col rounded-2xl border p-8 ${
            plan.popular
              ? "border-2 border-brand bg-white shadow-xl shadow-blue-950/10"
              : "border-border bg-white"
          }`}
        >
          {plan.popular ? (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">
              Most Popular
            </span>
          ) : null}

          <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
          <p className="mt-2 min-h-[2.5rem] text-sm text-muted">{plan.description}</p>

          <p className="mt-5 whitespace-nowrap text-3xl font-extrabold text-foreground sm:text-[2rem]">
            ${plan.price.toFixed(2)}
            <span className="text-sm font-medium text-muted"> / {plan.priceSuffix}</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            ${plan.monthlyEquivalent.toFixed(2)} per month &middot; {plan.connections} connection
          </p>

          <ul className="mt-6 flex-1 space-y-3.5 text-sm text-muted">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            href={ctaHref}
            variant={plan.popular ? "primary" : "secondary"}
            className="mt-8 w-full"
          >
            Choose {plan.name}
          </Button>
        </div>
      ))}
    </div>
  );
}
