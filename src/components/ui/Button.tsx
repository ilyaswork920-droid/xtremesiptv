import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onGradient" | "onGradientOutline";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white shadow-lg shadow-blue-950/20 hover:brightness-110",
  secondary:
    "bg-white text-foreground border border-border hover:border-brand/60",
  ghost: "text-foreground hover:text-brand",
  onGradient: "bg-white text-brand shadow-lg shadow-blue-950/20 hover:brightness-95",
  onGradientOutline:
    "border border-white/60 bg-white/10 text-white backdrop-blur hover:bg-white/20",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
