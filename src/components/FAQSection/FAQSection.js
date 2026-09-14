import React from 'react';
import faqContent from '../../data/faqContent';
import FAQItem from './FAQItem';

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight leading-tight">
          Frequently Asked Questions
        </h2>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden divide-y divide-gray-200">
          {faqContent.map((item) => (
            <FAQItem key={item.id} id={item.id} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
