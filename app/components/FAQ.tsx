'use client';

import { useState } from 'react';
import OrderForm from './OrderForm';

export default function FAQ() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is this service really free?',
      answer: 'Yes, 100%. I operate on a referral model—much like a mortgage broker. I receive a small commission from the service providers for bringing them new customers, so you get expert help and hours of your time back at no cost to you.'
    },
    {
      question: 'Why are you doing this?',
      answer: 'Because I\'ve seen too many people struggle with the Austin utility maze. I\'m good at navigating the system, and I enjoy helping this community grow one stress-free move at a time.'
    },
    {
      question: 'How fast is it?',
      answer: 'Processing typically starts within 24 business hours. While provider setup times vary, I ensure your applications are submitted correctly to avoid any unnecessary delays.'
    },
    {
      question: 'Which providers do you work with?',
      answer: 'All major Austin players: Austin Energy, Austin Water, Google Fiber, AT&T, Spectrum, and more.'
    },
    {
      question: 'Can I use this service for my elderly parents?',
      answer: 'Absolutely. Many of my clients are Austin residents helping their parents organize their utility accounts or simplify their monthly bills. I\'ll work with you to ensure their services are managed correctly and their digital portals are set up properly, giving both you and your parents peace of mind.'
    },
    {
      question: 'How do I know my information is secure?',
      answer: 'Great question. I only use the information you provide to fill out the standard utility applications. You approve everything before I hit "submit," and you\'ll receive all official confirmations directly to your own email. You keep 100% control of your accounts.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-gradient-to-br from-warm-sky/5 to-white">
        <div className="section-container py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Everything you need to know about ATX Utility Connect
            </p>

            <div className="space-y-4 mb-10">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden transition-all duration-200 hover:border-accent/50"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors duration-200 hover:bg-gray-50"
                  >
                    <h3 className="text-lg font-bold text-primary pr-4">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      openIndex === index ? 'max-h-48' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-4 pt-0">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Have more questions? I&apos;m happy to chat.
              </p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="btn-primary"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
