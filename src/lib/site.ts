export const site = {
  name: "Cendorva Group",
  tagline: "Technology. Strategy. Execution.",
  description:
    "Cendorva Group is an independent technology and enterprise solutions firm helping organizations navigate complex technology decisions, develop enterprise solutions, and execute strategic initiatives.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Our Approach", href: "/approach" },
  { label: "Contact", href: "/contact" },
] as const;
