import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Cendorva Group about a technology decision, enterprise solution, project, or strategic initiative.",
  alternates: { canonical: "/contact" },
};

const expectations = [
  {
    title: "A reply from someone who read it",
    body: "Your message goes to the people who would work with you, not a sales queue.",
  },
  {
    title: "A candid first conversation",
    body: "We'll tell you early whether we're the right fit, and point you elsewhere if we're not.",
  },
  {
    title: "No obligation",
    body: "Initial discussions are exploratory. A scoped proposal follows only if both sides want to continue.",
  },
];

export default function ContactPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="text-[13px] font-medium tracking-[0.14em] text-steel">Contact</p>
            <h1 className="mt-5 font-display text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.05] text-navy">
              Start a Conversation.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-slate">
              Tell us about the decision, system, or initiative you&rsquo;re
              working on. A short description is enough to begin.
            </p>
            <ul className="mt-12 max-w-md">
              {expectations.map((e) => (
                <li key={e.title} className="border-t border-line py-5">
                  <h2 className="font-display text-[17px] font-bold text-navy">{e.title}</h2>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-slate">{e.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <Reveal className="relative lg:col-span-6 lg:col-start-7">
            <div className="rounded-sm border border-line bg-surface p-6 sm:p-8 lg:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
