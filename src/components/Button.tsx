import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "primary-on-navy" | "secondary-on-navy";

const base =
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm px-6 py-3.5 text-[15px] font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-navy-2",
  secondary:
    "border border-navy/25 bg-transparent text-navy hover:border-navy hover:bg-navy/[0.04]",
  "primary-on-navy": "bg-white text-navy hover:bg-canvas",
  "secondary-on-navy":
    "border border-white/35 bg-transparent text-white hover:border-white hover:bg-white/[0.06]",
};

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ComponentProps<"button"> & { variant?: Variant }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
