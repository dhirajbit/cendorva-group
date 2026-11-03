export function SectionHeading({
  title,
  lede,
  tone = "dark",
  className = "",
}: {
  title: string;
  lede?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const h = tone === "dark" ? "text-navy" : "text-white";
  const p = tone === "dark" ? "text-slate" : "text-white/70";
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2 className={`font-display text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-[1.1] ${h}`}>
        {title}
      </h2>
      {lede ? <p className={`mt-5 text-lg leading-relaxed ${p}`}>{lede}</p> : null}
    </div>
  );
}
