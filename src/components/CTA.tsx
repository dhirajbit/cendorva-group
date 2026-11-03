import { Container } from "./Container";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";

export function CTA({
  title = "Let’s Move Your Next Initiative Forward.",
  body = "Whether you’re evaluating a technology investment, planning a transformation, or developing a new project, Cendorva Group can help you explore the path forward.",
  label = "Start a Conversation",
}: {
  title?: string;
  body?: string;
  label?: string;
}) {
  return (
    <section className="on-navy bg-navy text-white">
      <Container>
        <Reveal className="grid gap-10 py-24 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.08]">
              {title}
            </h2>
          </div>
          <div className="flex flex-col items-start gap-8 lg:col-span-5 lg:pt-2">
            <p className="text-lg leading-relaxed text-white/75">{body}</p>
            <ButtonLink href="/contact" variant="primary-on-navy">
              {label}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
