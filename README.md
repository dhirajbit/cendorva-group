# Cendorva Group website

Corporate website for Cendorva Group, an independent technology consulting,
enterprise solutions, strategic advisory, and project development firm.

Stack: Next.js (App Router), TypeScript, Tailwind CSS v4, lucide-react,
Motion, Resend.

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
| `/contact`      | Contact form (delivered by email through Resend)          |
| `/privacy`      | Privacy policy                                            |

`/sitemap.xml` and `/robots.txt` are generated from `src/app/sitemap.ts`
and `src/app/robots.ts`.

## Contact form

Submissions post to `/api/contact`, which validates the payload and sends an
email through [Resend](https://resend.com). Three environment variables are
required:

| Variable             | Purpose                                                   |
| -------------------- | --------------------------------------------------------- |
| `RESEND_API_KEY`     | API key from the Resend dashboard                         |
| `CONTACT_TO_EMAIL`   | Inbox that receives enquiries (comma-separate for several) |
| `CONTACT_FROM_EMAIL` | Verified sender, e.g. `Cendorva Group <website@domain>`   |

If any are missing the API returns 503 and the form shows an error. It never
reports a fake success.

Set `NEXT_PUBLIC_SITE_URL` to the public origin so the sitemap, robots file,
and Open Graph metadata use absolute URLs.

## Brand assets

- `src/components/Logo.tsx`: wordmark and C-monogram as React components (dark and light tones)
- `src/app/icon.svg`: favicon (navy tile with the monogram)
- `public/logo.svg`, `public/logo-white.svg`: standalone logo files

Content for capabilities, industries, process steps, and principles lives in
`src/lib/content.ts`.

## Deploy

`render.yaml` defines a Render web service. Create a Blueprint from the repo
and set the environment variables marked `sync: false` in the dashboard.
