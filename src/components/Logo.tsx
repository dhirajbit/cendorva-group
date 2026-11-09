import Link from "next/link";

type Tone = "dark" | "light";

/**
 * Geometric C monogram: three bars forming an open square, with a small
 * steel-blue square sitting in the opening. Works down to 16px.
 */
export function Monogram({
  tone = "dark",
  className = "",
  size = 32,
}: {
  tone?: Tone;
  className?: string;
  size?: number;
}) {
  const stroke = tone === "dark" ? "#192D42" : "#FFFFFF";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M27 6.5H6.5v19H27"
        fill="none"
        stroke={stroke}
        strokeWidth="5"
        strokeLinejoin="miter"
      />
      <rect x="19" y="13" width="6" height="6" fill="#4D758E" />
    </svg>
  );
}

export function Wordmark({ tone = "dark" }: { tone?: Tone }) {
  const primary = tone === "dark" ? "text-navy" : "text-white";
  const secondary = tone === "dark" ? "text-steel" : "text-white/70";
  return (
    <span className="flex items-center gap-3">
      <Monogram tone={tone} size={30} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[17px] font-bold tracking-[0.18em] ${primary}`}
          style={{ letterSpacing: "0.18em" }}
        >
          CENDOVA
        </span>
        <span
          className={`mt-1 text-[9px] font-medium ${secondary}`}
          style={{ letterSpacing: "0.34em" }}
        >
          GROUP
        </span>
      </span>
    </span>
  );
}

export function Logo({ tone = "dark" }: { tone?: Tone }) {
  return (
    <Link
      href="/"
      aria-label="Cendova Group, home"
      className="inline-flex items-center rounded-sm"
    >
      <Wordmark tone={tone} />
    </Link>
  );
}
