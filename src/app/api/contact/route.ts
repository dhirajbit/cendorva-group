import { Resend } from "resend";
import { capabilities } from "@/lib/content";

type Payload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  interest?: unknown;
  message?: unknown;
  website?: unknown; // honeypot
};

const interests = new Set([...capabilities.map((c) => c.title), "Not sure yet"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function str(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return Response.json({ error: "The request could not be read." }, { status: 400 });
  }

  // Bots fill the hidden field; people never see it.
  if (str(body.website, 10)) {
    return Response.json({ ok: true });
  }

  const name = str(body.name, 120);
  const email = str(body.email, 200);
  const company = str(body.company, 160);
  const interest = str(body.interest, 80);
  const message = str(body.message, 4000);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Enter your full name.";
  if (!emailPattern.test(email)) errors.email = "Enter a valid work email address.";
  if (company.length < 2) errors.company = "Enter your company name.";
  if (!interests.has(interest)) errors.interest = "Choose a service area.";
  if (message.length < 20) errors.message = "Describe your project in at least 20 characters.";

  if (Object.keys(errors).length > 0) {
    return Response.json({ error: "Some fields need attention.", fields: errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Contact form: RESEND_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL is not set.");
    return Response.json(
      {
        error:
          "The contact form isn't connected to an inbox yet, so your message was not sent. Please try again later.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const subject = `Website enquiry: ${interest} from ${company}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Service interest: ${interest}`,
    "",
    "Project description:",
    message,
  ].join("\n");

  const html = `
    <table style="font-family:Inter,Helvetica,Arial,sans-serif;font-size:15px;color:#202B36;border-collapse:collapse">
      <tr><td style="padding:4px 16px 4px 0;color:#637181">Name</td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="padding:4px 16px 4px 0;color:#637181">Email</td><td>${escapeHtml(email)}</td></tr>
      <tr><td style="padding:4px 16px 4px 0;color:#637181">Company</td><td>${escapeHtml(company)}</td></tr>
      <tr><td style="padding:4px 16px 4px 0;color:#637181">Service interest</td><td>${escapeHtml(interest)}</td></tr>
    </table>
    <p style="font-family:Inter,Helvetica,Arial,sans-serif;font-size:15px;color:#202B36;white-space:pre-wrap;margin-top:20px">${escapeHtml(message)}</p>
  `;

  const { error } = await resend.emails.send({
    from,
    to: to.split(",").map((s) => s.trim()),
    replyTo: email,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("Contact form: Resend returned an error.", error);
    return Response.json(
      { error: "Your message could not be sent right now. Please try again in a few minutes." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
