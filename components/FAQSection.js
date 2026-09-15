"use client";

import React from "react";
import FAQItem from "./FAQItem";
import styles from "./FAQSection.module.css";

const faqData = [
  {
    question: "How do I book an appointment at the Geneva atelier?",
    answer:
      "You can book an appointment by clicking 'Book Atelier Appointment' on the homepage or by visiting our product pages and selecting 'Book Atelier Appointment'. Our concierge team will confirm available times and provide details for your visit.",
  },
  {
    question: "What warranty comes with a Horologe timepiece?",
    answer:
      "All Horologe timepieces include a two-year international warranty covering manufacturing defects. Extended preservation and restoration services are available via our lifetime preservation program; please contact concierge for details.",
  },
  {
    question: "How long does delivery take and is it insured?",
    answer:
      "We ship worldwide with insured courier service. Typical insured transit times vary by destination but most European shipments leave our Geneva vault within 3-5 business days. Your delivery will be accompanied by a dedicated liaison where permitted.",
  },
  {
    question: "Can I commission a bespoke watch or request dial customization?",
    answer:
      "Yes — our Bespoke program is managed by the atelier. Begin by inquiring with Concierge via the 'Inquire with Concierge' button. We will arrange a consultation with the Master Horologist to discuss materials, engraving, and dial enameling.",
  },
  {
    question: "What is the return or cancellation policy for bespoke commissions?",
    answer:
      "Bespoke commissions are bespoke and made-to-order; cancellation policy depends on production stage. Early-stage cancellations may be possible with a fee to cover materials and labour. The concierge team will provide a written cancellation and return policy when initiating a bespoke commission.",
  },
];

export default function FAQSection() {
  return (
    <section className={styles.faqSection} aria-labelledby="faq-heading">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 id="faq-heading" className={styles.title}>
            Frequently Asked Questions
          </h2>
          <p className={styles.description}>
            Answers to common questions about appointments, warranties, shipping,
            and bespoke commissions. If you cannot find what you need, contact
            our Concierge team for personalised assistance.
          </p>
        </div>

        <div className={styles.faqList}>
          {faqData.map((item, idx) => (
            <FAQItem
              key={idx}
              id={idx}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
