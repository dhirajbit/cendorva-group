import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Cendova Group handles information submitted through this website.",
  alternates: { canonical: "/privacy/" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lede="This page describes what information this website collects and how it is used. It applies to the Cendova Group website only."
      />
      <section className="py-20 lg:py-28">
        <Container>
          <div className="max-w-2xl space-y-10 text-[16px] leading-relaxed text-slate">
            <div>
              <h2 className="font-display text-xl font-bold text-navy">Information you provide</h2>
              <p className="mt-3">
                When you submit the contact form, we receive the name, work
                email, company, service interest, and project description you
                enter. This information is used only to respond to your
                enquiry and to discuss potential work with you.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-navy">Information collected automatically</h2>
              <p className="mt-3">
                This website does not set advertising or tracking cookies.
                Standard server logs may record technical information such as
                IP address, browser type, and pages requested, which is used to
                keep the site secure and operating correctly.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-navy">Sharing and retention</h2>
              <p className="mt-3">
                Contact form submissions are delivered by email through a
                third-party transactional email provider acting on our behalf.
                We do not sell or share your information with other parties for
                marketing purposes. Enquiries are retained for as long as
                needed to respond and follow up.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-navy">Your choices</h2>
              <p className="mt-3">
                You can ask us to correct or delete information you have
                submitted by contacting us through the contact page. This
                policy may be updated from time to time; the current version is
                always published here.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
