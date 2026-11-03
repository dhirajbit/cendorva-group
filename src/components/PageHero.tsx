import type { ReactNode } from "react";
import { Container } from "./Container";

/**
 * Light page opener used on every page except Home. Title sits on a strong
 * left margin with a hairline rule beneath, keeping the editorial rhythm.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-surface">
      <Container>
        <div className="grid gap-8 py-20 md:grid-cols-12 lg:py-28">
          <div className="md:col-span-8">
            <p className="text-[13px] font-medium tracking-[0.14em] text-steel">
              {eyebrow}
            </p>
            <h1 className="mt-5 font-display text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.05] text-navy">
              {title}
            </h1>
          </div>
          <div className="md:col-span-8 lg:col-span-6">
            <p className="text-lg leading-relaxed text-slate">{lede}</p>
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
