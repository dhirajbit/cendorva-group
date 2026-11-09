"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { ButtonLink } from "./Button";
import { HeroGraphic } from "./HeroGraphic";

const ease = [0.22, 1, 0.36, 1] as const;

export function HomeHero() {
  const reduce = useReducedMotion();
  const item = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease },
        };

  return (
    <section className="on-navy relative overflow-hidden bg-navy text-white">
      <Container>
        <div className="grid min-h-[640px] items-center gap-12 py-24 lg:grid-cols-12 lg:py-32">
          <div className="relative z-10 lg:col-span-7">
            <motion.p
              {...item(0)}
              className="text-[12.5px] font-medium tracking-[0.18em] text-white/60"
            >
              INDEPENDENT TECHNOLOGY &amp; ENTERPRISE ADVISORY
            </motion.p>
            <motion.h1
              {...item(1)}
              className="mt-7 font-display text-[clamp(2.75rem,6.4vw,5.25rem)] font-bold leading-[1.0] text-white"
            >
              Complex Challenges.
              <br />
              Considered Solutions.
            </motion.h1>
            <motion.p
              {...item(2)}
              className="mt-8 max-w-xl text-lg leading-relaxed text-white/75 md:text-[19px]"
            >
              We help organizations make confident technology decisions, build
              scalable solutions, and deliver complex projects through
              independent expertise and strategic execution.
            </motion.p>
            <motion.div {...item(3)} className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/capabilities" variant="primary-on-navy">
                Explore Our Capabilities
                <ArrowRight size={16} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary-on-navy">
                Discuss Your Project
              </ButtonLink>
            </motion.div>
          </div>

          <motion.div
            className="relative lg:col-span-5"
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 1.4, delay: 0.3, ease },
                })}
          >
            <HeroGraphic className="mx-auto w-full max-w-[520px] lg:absolute lg:right-0 lg:top-1/2 lg:w-[calc(100%+120px)] lg:max-w-[640px] lg:-translate-y-1/2" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
