"use client";

import { useId, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "./Button";
import { capabilities } from "@/lib/content";

type Fields = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const empty: Fields = { name: "", email: "", company: "", interest: "", message: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (f.name.trim().length < 2) e.name = "Enter your full name.";
  if (!emailPattern.test(f.email.trim())) e.email = "Enter a valid work email address.";
  if (f.company.trim().length < 2) e.company = "Enter your company name.";
  if (!f.interest) e.interest = "Choose a service area.";
  if (f.message.trim().length < 20) e.message = "Describe your project in at least 20 characters.";
  return e;
}

// A JSON-accepting form endpoint (Formspree, Basin, Getform, ...). Read at build time.
const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim() || "";

const inputClass =
  "w-full rounded-sm border bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-slate/60 transition-colors focus:border-steel";

export function ContactForm() {
  const id = useId();
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");

  const set = (k: keyof Fields) => (v: string) => {
    const next = { ...fields, [k]: v };
    setFields(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = (k: keyof Fields) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(fields));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = validate(fields);
    setErrors(v);
    setTouched({ name: true, email: true, company: true, interest: true, message: true });
    if (Object.keys(v).length > 0) {
      const first = Object.keys(v)[0];
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }

    setStatus("submitting");
    setServerMessage("");
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "";
    if (honeypot) {
      setStatus("success");
      return;
    }

    if (!endpoint) {
      setServerMessage(
        "The contact form isn't connected to an inbox yet, so your message was not sent. Please try again later.",
      );
      setStatus("error");
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          company: fields.company.trim(),
          interest: fields.interest,
          message: fields.message.trim(),
          _subject: `Website enquiry: ${fields.interest} from ${fields.company.trim()}`,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFields(empty);
        setTouched({});
        setErrors({});
        return;
      }
      setServerMessage("Your message could not be sent right now. Please try again in a few minutes.");
      setStatus("error");
    } catch {
      setServerMessage("We couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-sm border border-line bg-surface p-8 lg:p-10">
        <CheckCircle2 size={28} className="text-steel" aria-hidden="true" />
        <h2 className="mt-5 font-display text-2xl font-bold text-navy">Message sent.</h2>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate">
          Thank you for getting in touch. We&rsquo;ve received your message and
          will reply to the email address you provided.
        </p>
        <Button variant="secondary" className="mt-8" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  const field = (k: keyof Fields, label: string, el: React.ReactNode, hint?: string) => (
    <div>
      <label htmlFor={`${id}-${k}`} className="block text-[14px] font-medium text-navy">
        {label}
      </label>
      {hint ? <p id={`${id}-${k}-hint`} className="mt-1 text-[13px] text-slate">{hint}</p> : null}
      <div className="mt-2">{el}</div>
      {errors[k] ? (
        <p id={`${id}-${k}-error`} className="mt-2 flex items-center gap-1.5 text-[13px] text-[#A23B3B]">
          <AlertCircle size={14} aria-hidden="true" />
          {errors[k]}
        </p>
      ) : null}
    </div>
  );

  const aria = (k: keyof Fields, hint?: boolean) => ({
    id: `${id}-${k}`,
    name: k,
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby":
      [hint ? `${id}-${k}-hint` : null, errors[k] ? `${id}-${k}-error` : null]
        .filter(Boolean)
        .join(" ") || undefined,
    className: `${inputClass} ${errors[k] ? "border-[#C04B4B]" : "border-line"}`,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        {field(
          "name",
          "Full name",
          <input
            {...aria("name")}
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={(e) => set("name")(e.target.value)}
            onBlur={blur("name")}
            required
          />,
        )}
        {field(
          "email",
          "Work email",
          <input
            {...aria("email")}
            type="email"
            autoComplete="email"
            inputMode="email"
            value={fields.email}
            onChange={(e) => set("email")(e.target.value)}
            onBlur={blur("email")}
            required
          />,
        )}
      </div>
      <div className="grid gap-7 sm:grid-cols-2">
        {field(
          "company",
          "Company",
          <input
            {...aria("company")}
            type="text"
            autoComplete="organization"
            value={fields.company}
            onChange={(e) => set("company")(e.target.value)}
            onBlur={blur("company")}
            required
          />,
        )}
        {field(
          "interest",
          "Service interest",
          <select
            {...aria("interest")}
            value={fields.interest}
            onChange={(e) => set("interest")(e.target.value)}
            onBlur={blur("interest")}
            required
          >
            <option value="" disabled>
              Select an area
            </option>
            {capabilities.map((c) => (
              <option key={c.slug} value={c.title}>
                {c.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>,
        )}
      </div>
      {field(
        "message",
        "Project description",
        <textarea
          {...aria("message", true)}
          rows={6}
          value={fields.message}
          onChange={(e) => set("message")(e.target.value)}
          onBlur={blur("message")}
          required
        />,
        "What are you trying to achieve, what is in place today, and what timeline are you working to?",
      )}

      {/* Honeypot: hidden from people, filled by bots */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && serverMessage ? (
        <div
          role="alert"
          className="flex gap-3 rounded-sm border border-[#E3C2C2] bg-[#FBF3F3] p-4 text-[14px] leading-relaxed text-[#7A2E2E]"
        >
          <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          <p>{serverMessage}</p>
        </div>
      ) : null}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={status === "submitting"} aria-busy={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            "Send message"
          )}
        </Button>
        <p className="text-[13px] text-slate">
          We reply by email and never share your details.
        </p>
      </div>
    </form>
  );
}
