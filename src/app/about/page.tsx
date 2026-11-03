import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { capabilities, principles } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Cendorva Group is an independent technology and enterprise solutions firm that connects strategy with practical execution for organizations facing complex decisions.",
  alternates: { canonical: "/about/" },
};

const operating = [
  {
    title: "Small, senior teams",
    body: "Engagements are staffed by people who have made these decisions before and will be in the room throughout, not handed off after the proposal.",
  },
  {
    title: "Shaped to the organization",
    body: "Some clients need an independent assessment. Others need a team to design and build. Most need something in between, and the engagement is structured accordingly.",
  },
  {
    title: "Working alongside existing partners",
    body: "We regularly work with incumbent vendors, internal IT teams, and other advisors. Our role is to make the overall effort succeed, not to replace everyone involved.",
  },
  {
    title: "Clear scope, candid reporting",
    body: "Each engagement has a defined scope, agreed outputs, and regular reporting that says plainly what is on track and what is not.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Cendorva Group"
        title="Independent Perspective. Integrated Expertise."
        lede="Cendorva Group helps organizations connect strategy with practical execution. We combine technology advisory, enterprise solutions, project development, and strategic consulting so that decisions, designs, and delivery are handled as one piece of work rather than three."
      />

      {/* Philosophy */}
      <section className="py-24 lg:py-32">
        <Container>
          <Reveal className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading title="Why the firm exists" />
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-slate lg:col-span-6 lg:col-start-7">
              <p>
                Many organizations receive good strategic advice that never
                turns into working systems, and build systems that were never
                tied back to a strategy. The gap between the two is where
                budgets are lost, timelines slip, and confidence in technology
                erodes.
              </p>
              <p>
                Cendorva Group was established to work in that gap. We take on
                the questions that sit between leadership intent and technical
                reality: whether an investment is worth making, how a platform
                should be structured, how a program should be sequenced, and
                who should do what to get it delivered.
              </p>
              <p>
                We are independent of vendors and platforms. That independence
                is the basis of the advice we give and the reason organizations
                can rely on it.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Principles */}
      <section className="border-y border-line bg-surface py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              title="Consulting principles"
              lede="The commitments that shape how we take on and run every engagement."
            />
          </Reveal>
          <Reveal className="mt-14">
            <ul className="grid gap-px rounded-sm border border-line bg-line md:grid-cols-2">
              {principles.map((p) => (
                <li key={p.title} className="bg-surface p-8 lg:p-10">
                  <h3 className="font-display text-xl font-bold text-navy">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate">{p.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Operating approach */}
      <section className="py-24 lg:py-32">
        <Container>
          <Reveal className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                title="How we operate"
                lede="Engagements are organized around the organization's situation rather than a fixed service menu."
              />
              <Link
                href="/approach"
                className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-navy hover:text-steel"
              >
                Our four-stage approach
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <ul className="lg:col-span-7 lg:col-start-6">
              {operating.map((o) => (
                <li key={o.title} className="border-t border-line py-7 first:border-t-0 first:pt-0">
                  <h3 className="font-display text-lg font-bold text-navy">{o.title}</h3>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-slate">{o.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Core capabilities */}
      <section className="border-t border-line bg-surface py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionHeading title="Core capabilities" />
          </Reveal>
          <Reveal className="mt-12">
            <ul className="grid gap-x-10 md:grid-cols-2">
              {capabilities.map((c) => (
                <li key={c.slug} className="border-t border-line py-7">
                  <Link href={`/capabilities#${c.slug}`} className="group block">
                    <h3 className="flex items-center justify-between font-display text-xl font-bold text-navy group-hover:text-steel">
                      {c.title}
                      <ArrowRight size={18} aria-hidden="true" className="text-steel" />
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-slate">{c.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <CTA
        title="Talk With Us About What You're Working On."
        body="An initial conversation is the fastest way to find out whether and how Cendorva Group can help."
      />
    </>
  );
}
