import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { process } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Cendorva Group's four-stage engagement method: Discover, Assess, Design, and Deliver. How we move from understanding an organization to supporting execution.",
  alternates: { canonical: "/approach/" },
};

const commitments = [
  {
    title: "Nothing is recommended before it is understood",
    body: "Discovery and assessment are not formalities. They are where most of the risk in a technology decision is found, and they are done properly before design begins.",
  },
  {
    title: "Trade-offs are made visible",
    body: "Every option has a cost. We set out what is gained and given up with each path so that decision-makers choose with full information.",
  },
  {
    title: "Plans are built for the organization that will deliver them",
    body: "A roadmap that assumes capacity, skills, or budget the organization does not have is not a plan. We design for the real constraints.",
  },
  {
    title: "The work closes with a handover",
    body: "Documentation, training, and transition are part of the scope from the start so that outcomes last beyond the engagement.",
  },
];

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Approach"
        title="Structured Thinking. Practical Execution."
        lede="Every engagement follows the same four stages. The depth of each varies with the situation, but none is skipped, because each one protects the next from avoidable mistakes."
      />

      {/* Overview strip */}
      <section className="border-b border-line bg-surface">
        <Container>
          <Reveal>
            <ol className="grid md:grid-cols-4">
              {process.map((step, i) => (
                <li
                  key={step.number}
                  className={`py-8 md:pr-8 ${i > 0 ? "border-t border-line md:border-l md:border-t-0 md:pl-8" : ""}`}
                >
                  <a href={`#${step.title.toLowerCase()}`} className="group block">
                    <span className="font-display text-sm font-bold text-steel">{step.number}</span>
                    <span className="mt-2 block font-display text-xl font-bold text-navy group-hover:text-steel">
                      {step.title}
                    </span>
                    <span className="mt-2 block text-[14.5px] leading-relaxed text-slate">
                      {step.summary}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* Detail per stage */}
      {process.map((step, i) => (
        <section
          key={step.number}
          id={step.title.toLowerCase()}
          className={`scroll-mt-20 py-20 lg:py-28 ${i % 2 === 1 ? "border-y border-line bg-surface" : ""}`}
        >
          <Container>
            <Reveal className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="flex items-baseline gap-5">
                  <span className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none text-steel/50">
                    {step.number}
                  </span>
                  <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold leading-[1.1] text-navy">
                    {step.title}
                  </h2>
                </div>
                <p className="mt-6 text-lg leading-relaxed text-slate">{step.detail}</p>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <h3 className="border-b border-line pb-3 text-[13.5px] font-semibold text-navy">
                  What happens in this stage
                </h3>
                <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-slate">
                  {step.activities.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </Container>
        </section>
      ))}

      {/* Commitments */}
      <section className="border-t border-line py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              title="What stays constant"
              lede="Whatever the engagement, these commitments hold."
            />
          </Reveal>
          <Reveal className="mt-12">
            <ul className="grid gap-x-10 md:grid-cols-2">
              {commitments.map((c) => (
                <li key={c.title} className="border-t border-line py-7">
                  <h3 className="font-display text-lg font-bold text-navy">{c.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate">{c.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <CTA />
    </>
  );
}
