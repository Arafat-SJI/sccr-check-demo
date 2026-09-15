"use client";

import React, { useState } from 'react';

const FAQItem = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <h3 className="text-xl font-semibold">
        <button
          className="flex justify-between items-center w-full py-5 px-6 text-left text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-200"
          onClick={toggleOpen}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${id}`}
          id={`faq-question-${id}`}
          type="button"
        >
          <span>{question}</span>
          <span className="ml-6 text-2xl font-light select-none" aria-hidden>
            {isOpen ? '−' : '+'}
          </span>
        </button>
      </h3>
      <div
        id={`faq-answer-${id}`}
        role="region"
        aria-labelledby={`faq-question-${id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="px-6 pb-5 text-gray-700 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
