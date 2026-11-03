# Cendorva Group website

Corporate website for Cendorva Group, an independent technology consulting,
enterprise solutions, strategic advisory, and project development firm.

Stack: Next.js (App Router, static export), TypeScript, Tailwind CSS v4,
lucide-react, Motion.

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev
```

Open http://localhost:3000.

## Pages

| Route           | Purpose                                                  |
| --------------- | -------------------------------------------------------- |
| `/`             | Home: hero, introduction, capabilities, industries, approach, CTA |
| `/about`        | Philosophy, consulting principles, operating approach     |
| `/capabilities` | The four service areas in detail                          |
| `/industries`   | Six target industries and the challenges addressed        |
| `/approach`     | The four-stage engagement method                          |
| `/contact`      | Contact form (posts to a configurable form endpoint)      |
| `/privacy`      | Privacy policy                                            |

`/sitemap.xml` and `/robots.txt` are generated from `src/app/sitemap.ts`
and `src/app/robots.ts`.

## Contact form

The site is a fully static export (`output: "export"`), so there is no server
to send email. The form validates client-side and posts JSON to whatever
endpoint `NEXT_PUBLIC_CONTACT_ENDPOINT` points at (Formspree, Basin, Getform,
or any service that accepts a JSON POST). If that variable is empty, the form
shows an honest "not connected to an inbox yet" error. It never fakes success.

Set `NEXT_PUBLIC_SITE_URL` to the public origin so the sitemap, robots file,
and Open Graph metadata use absolute URLs. Both variables are read at build
time, so change them and rebuild.

## Brand assets

- `src/components/Logo.tsx`: wordmark and C-monogram as React components (dark and light tones)
- `src/app/icon.svg`: favicon (navy tile with the monogram)
- `public/logo.svg`, `public/logo-white.svg`: standalone logo files
- `brand/linkedin/`: LinkedIn company logo (300x300, 600x600) and cover photo
  (1128x191, 2256x382) as PNGs, with the HTML templates and `generate.mjs`
  that render them

Content for capabilities, industries, process steps, and principles lives in
`src/lib/content.ts`.

## Deploy

`npm run build` writes the whole site to `out/`. Any static host works.
`render.yaml` defines a Render Static Site that builds from the repo and
publishes `out`; set the environment variables marked `sync: false` in the
dashboard.
