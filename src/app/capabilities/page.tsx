import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { capabilities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Technology advisory, enterprise solutions, project development, and strategic consulting from Cendova Group: what each covers, the challenges addressed, and what engagements deliver.",
  alternates: { canonical: "/capabilities/" },
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Four Areas of Work. One Way of Working."
        lede="Each capability can be engaged on its own. In practice they are connected: advice informs design, design shapes delivery, and delivery feeds back into strategy."
      >
        <nav aria-label="Capabilities on this page" className="mt-8">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {capabilities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`#${c.slug}`}
                  className="text-[14.5px] font-medium text-navy underline decoration-line underline-offset-4 hover:decoration-navy"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      {capabilities.map((c, i) => (
        <section
          key={c.slug}
          id={c.slug}
          className={`scroll-mt-20 py-24 lg:py-32 ${i % 2 === 1 ? "border-y border-line bg-surface" : ""}`}
        >
          <Container>
            <Reveal className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <span className="font-display text-sm font-bold text-steel">
                  0{i + 1}
                </span>
                <h2 className="mt-3 font-display text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold leading-[1.1] text-navy">
                  {c.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-slate">{c.description}</p>
                <ButtonLink href="/contact" variant="secondary" className="mt-8">
                  Discuss {c.title.toLowerCase()}
                </ButtonLink>
              </div>

              <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6 lg:grid-cols-1 xl:grid-cols-3 xl:gap-8">
                <div>
                  <h3 className="border-b border-line pb-3 text-[13.5px] font-semibold text-navy">
                    Challenges we address
                  </h3>
                  <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-slate">
                    {c.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="border-b border-line pb-3 text-[13.5px] font-semibold text-navy">
                    Typical engagements
                  </h3>
                  <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-slate">
                    {c.engagements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="border-b border-line pb-3 text-[13.5px] font-semibold text-navy">
                    Deliverables and outcomes
                  </h3>
                  <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-slate">
                    {c.outcomes.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <Check size={16} className="mt-1 shrink-0 text-steel" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      ))}

      <CTA
        title="Not Sure Which Capability Fits?"
        body="Most engagements start with a conversation about the situation, not a service name. Tell us what you're facing and we'll suggest where to begin."
        label="Discuss Your Project"
      />
    </>
  );
}
