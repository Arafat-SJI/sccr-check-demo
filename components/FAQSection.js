import React from "react";
import FAQItem from "./FAQItem";
import styles from "./FAQSection.module.css";

/**
 * FAQSection
 * Renders a curated list of frequently asked questions.
 * Matches the Horologe visual style via existing design tokens and the CSS module.
 */
export default function FAQSection() {
  const faqs = [
    {
      id: "shipping",
      q: "Do you offer international shipping?",
      a: (
        <>
          Yes. Horologe Genève ships insured parcels internationally. Delivery
          time and available couriers vary by destination — please contact our
          Concierge for specialised routing and insurance requests.
        </>
      ),
    },
    {
      id: "warranty",
      q: "What warranty comes with my timepiece?",
      a: (
        <>
          Every Horologe movement is accompanied by a two-year manufacturer
          warranty covering manufacturing defects. We also offer extended
          preservation programs and lifetime servicing for registered clients.
        </>
      ),
    },
    {
      id: "appointments",
      q: "Can I book a private atelier appointment?",
      a: (
        <>
          Absolutely. Bookings can be made via the "Book Atelier Appointment"
          CTA on the site or by contacting concierge@horologe.example. Appointments
          are available at our Geneva atelier for private viewings and bespoke
          commissions.
        </>
      ),
    },
    {
      id: "maintenance",
      q: "How often should I service my watch?",
      a: (
        <>
          We recommend a full service every 5–7 years depending on usage. Our
          lifetime preservation program ensures parts and archival records are
          maintained indefinitely for provenance and conservation.
        </>
      ),
    },
    {
      id: "returns",
      q: "What is your returns policy?",
      a: (
        <>
          Returns are assessed on a per-order basis. For unworn pieces returned
          within 14 days of delivery in original condition, we provide refund
          options. Custom commissions and engraved items are non-returnable.
        </>
      ),
    },
    {
      id: "authenticity",
      q: "How do I verify authenticity?",
      a: (
        <>
          Every timepiece ships with a stamped certificate and serialized
          ledger entry. Contact our support team with your serial number for
          verification and provenance requests.
        </>
      ),
    },
  ];

  return (
    <section id="faq" className={`${styles.section} w-full bg-background py-space-xl`}>
      <div className="max-w-[1040px] mx-auto px-margin md:px-margin-desktop">
        <div className="mb-10 text-center">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-secondary block mb-2">
            Maison Support
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Frequently Asked Questions
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mt-3">
            Concise answers to common enquiries. If you don't find what you're
            looking for, please contact our concierge for a considered reply.
          </p>
        </div>

        <div className={styles.grid}>
          {faqs.map((f) => (
            <FAQItem key={f.id} id={f.id} question={f.q} answer={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
