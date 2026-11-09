import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Layers, ClipboardList, LineChart } from "lucide-react";
import { Container } from "@/components/Container";
import { HomeHero } from "@/components/HomeHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { capabilities, industries, process } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} | ${site.tagline}` },
  description: site.description,
  alternates: { canonical: "/" },
};

const icons = {
  "technology-advisory": Compass,
  "enterprise-solutions": Layers,
  "project-development": ClipboardList,
  "strategic-consulting": LineChart,
} as const;

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* Introduction */}
      <section className="border-b border-line bg-surface">
        <Container>
          <Reveal className="grid gap-10 py-24 lg:grid-cols-12 lg:py-32">
            <div className="lg:col-span-6">
              <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-[1.1] text-navy">
                Expertise Across Technology, Strategy, and Execution.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="text-lg leading-relaxed text-slate">
                Cendova Group brings together strategic thinking, technical
                understanding, and structured project delivery to help
                organizations address operational challenges and pursue new
                opportunities.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-slate">
                We work as an independent partner: assessing what an
                organization has, advising on what it needs, and staying
                involved while the work gets done.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-navy hover:text-steel"
              >
                About Cendova Group
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              title="Our Capabilities"
              lede="Four connected areas of work, engaged separately or together depending on where an organization is and what it needs next."
            />
          </Reveal>
          <Reveal className="mt-14">
            <ul className="grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 xl:grid-cols-4">
              {capabilities.map((c) => {
                const Icon = icons[c.slug as keyof typeof icons];
                return (
                  <li key={c.slug} className="bg-surface">
                    <Link
                      href={`/capabilities#${c.slug}`}
                      className="group flex h-full flex-col p-8 transition-colors hover:bg-canvas"
                    >
                      <Icon size={24} strokeWidth={1.5} className="text-steel" aria-hidden="true" />
                      <h3 className="mt-8 font-display text-xl font-bold text-navy">
                        {c.title}
                      </h3>
                      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate">
                        {c.summary}
                      </p>
                      <span className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-navy">
                        Learn more
                        <ArrowRight
                          size={15}
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Industries */}
      <section className="border-y border-line bg-surface py-24 lg:py-32">
        <Container>
          <Reveal className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                title="Supporting Organizations Across Industries."
                lede="Each sector brings its own systems, regulations, and operating pressures. We bring the same disciplined approach to all of them."
              />
              <Link
                href="/industries"
                className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-navy hover:text-steel"
              >
                View industry detail
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
              {industries.map((ind) => (
                <li key={ind.slug} className="border-t border-line py-6">
                  <Link
                    href={`/industries#${ind.slug}`}
                    className="group block"
                  >
                    <h3 className="font-display text-lg font-bold text-navy group-hover:text-steel">
                      {ind.name}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-slate">{ind.short}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Approach */}
      <section className="py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              title="Structured Thinking. Practical Execution."
              lede="A four-stage method that moves from understanding to delivery without skipping the work in between."
            />
          </Reveal>
          <Reveal className="mt-14">
            <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {process.map((step) => (
                <li key={step.number} className="border-t-2 border-navy pt-6">
                  <span className="font-display text-sm font-bold text-steel">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate">{step.summary}</p>
                </li>
              ))}
            </ol>
            <Link
              href="/approach"
              className="mt-12 inline-flex items-center gap-2 text-[15px] font-medium text-navy hover:text-steel"
            >
              How we work
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </Container>
      </section>

      <CTA />
    </>
  );
}
