import Link from "next/link";
import { Container } from "./Container";
import { Wordmark } from "./Logo";
import { Year } from "./Year";
import { nav } from "@/lib/site";
import { capabilities } from "@/lib/content";

export function Footer() {
  return (
    <footer className="on-navy bg-navy text-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-12 md:gap-8 lg:py-20">
          <div className="md:col-span-5">
            <Link href="/" aria-label="Cendorva Group, home" className="inline-block rounded-sm">
              <Wordmark tone="light" />
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/70">
              An independent technology and enterprise solutions firm helping
              organizations make confident technology decisions, build
              scalable solutions, and deliver complex projects.
            </p>
            <p className="mt-6 font-display text-sm font-semibold tracking-wide text-white/50">
              Technology. Strategy. Execution.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h2 className="text-[13px] font-semibold text-white/50">Company</h2>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-white/85 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <h2 className="text-[13px] font-semibold text-white/50">Capabilities</h2>
            <ul className="mt-4 space-y-3">
              {capabilities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/capabilities#${c.slug}`}
                    className="text-[15px] text-white/85 transition-colors hover:text-white"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/15 py-7 text-[13px] text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; <Year /> Cendorva Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
