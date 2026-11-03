import type { Metadata } from "next";
import { Landmark, HeartPulse, Factory, Truck, Cpu, Briefcase } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Cendorva Group supports organizations in financial services, healthcare and life sciences, manufacturing, logistics, technology, and professional services with technology and strategic advisory.",
  alternates: { canonical: "/industries" },
};

const icons = {
  "financial-services": Landmark,
  "healthcare-life-sciences": HeartPulse,
  "manufacturing-industrial": Factory,
  "logistics-supply-chain": Truck,
  "technology-software": Cpu,
  "professional-services": Briefcase,
} as const;

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Different Sectors. Shared Discipline."
        lede="The industries below each carry distinct regulatory, operational, and technical pressures. Our method stays constant across them: understand the organization, assess what exists, design what fits, and support delivery."
      />

      <section className="py-24 lg:py-32">
        <Container>
          <Reveal>
            <ul className="grid gap-px rounded-sm border border-line bg-line md:grid-cols-2">
              {industries.map((ind) => {
                const Icon = icons[ind.slug as keyof typeof icons];
                return (
                  <li
                    key={ind.slug}
                    id={ind.slug}
                    className="scroll-mt-20 bg-surface p-8 lg:p-12"
                  >
                    <Icon size={26} strokeWidth={1.5} className="text-steel" aria-hidden="true" />
                    <h2 className="mt-8 font-display text-2xl font-bold text-navy">{ind.name}</h2>
                    <p className="mt-4 text-[16px] leading-relaxed text-slate">{ind.description}</p>
                    <h3 className="mt-8 text-[13.5px] font-semibold text-navy">
                      Challenges we help address
                    </h3>
                    <ul className="mt-3 space-y-2.5 border-t border-line pt-4 text-[15px] leading-relaxed text-slate">
                      {ind.challenges.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </Reveal>
          <Reveal className="mt-12">
            <p className="max-w-2xl text-[15px] leading-relaxed text-slate">
              Working in a sector outside this list? Much of what we do applies
              across industries. Describe the situation and we will tell you
              candidly whether it is a fit.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTA
        title="Tell Us About Your Organization."
        body="Share the sector, the systems involved, and the decision in front of you. We'll respond with a clear view of how we could help."
      />
    </>
  );
}
