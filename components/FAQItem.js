"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./FAQSection.module.css";

export default function FAQItem({ id, question, answer }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (!contentRef.current) return;
    // When expanded, set maxHeight to scrollHeight so CSS transition can animate height.
    setMaxHeight(expanded ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [expanded]);

  function toggle() {
    setExpanded((v) => !v);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  }

  const buttonAriaExpanded = expanded ? "true" : "false";

  return (
    <div className={styles.faqItem}>
      <button
        id={`faq-${id}-button`}
        aria-controls={`faq-${id}-content`}
        aria-expanded={buttonAriaExpanded}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        className={styles.questionButton}
        type="button"
      >
        <span className={styles.questionText}>{question}</span>
        <span
          className={`${styles.icon} material-symbols-outlined`}
          aria-hidden="true"
        >
          {expanded ? "remove" : "add"}
        </span>
      </button>

      <div
        id={`faq-${id}-content`}
        role="region"
        aria-labelledby={`faq-${id}-button`}
        ref={contentRef}
        style={{ maxHeight }}
        className={styles.answer}
      >
        <div className={styles.answerInner}>{answer}</div>
      </div>
    </div>
  );
}
