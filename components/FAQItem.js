"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./FAQSection.module.css";

/**
 * FAQItem
 * Interactive, accessible accordion item used by FAQSection.
 * Props:
 * - id: unique id string
 * - question: string
 * - answer: string or React node
 */
export default function FAQItem({ id, question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const updateMaxHeight = useCallback(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  useEffect(() => {
    // update measured max-height when open/closed
    updateMaxHeight();
  }, [isOpen, updateMaxHeight]);

  useEffect(() => {
    // Update when resizing to keep animation natural
    const handleResize = () => updateMaxHeight();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateMaxHeight]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // close if Escape pressed
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  const toggle = () => setIsOpen((v) => !v);

  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  }

  const contentId = `faq-content-${id}`;
  const buttonId = `faq-button-${id}`;

  return (
    <div className={styles.item}>
      <button
        id={buttonId}
        aria-controls={contentId}
        aria-expanded={isOpen}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        className={`${styles.questionButton} flex items-center justify-between w-full text-left`}
        type="button"
      >
        <span className="flex items-center gap-4">
          <svg
            className={styles.icon}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 5v14M5 12h14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={styles.questionText}>{question}</span>
        </span>

        <span
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""} material-symbols-outlined`}
          aria-hidden="true"
        >
          expand_more
        </span>
      </button>

      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        ref={contentRef}
        className={styles.answerWrapper}
        style={{ maxHeight }}
      >
        <div className={styles.answerInner}>
          <div className={styles.answer}>{answer}</div>
        </div>
      </div>
    </div>
  );
}
