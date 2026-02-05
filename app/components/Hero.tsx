'use client';

import { useState } from 'react';
import OrderForm from './OrderForm';

export default function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-b from-warm-sky/10 to-white">
        <div className="section-container py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🎯 Early Access — Free setup while we build. Limited spots available for February.
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Your Austin Utility Concierge. Simplified.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
              We navigate the portals, handle the digital applications, and get your utility applications submitted correctly. You spend a few minutes on the form, I handle the complex digital coordination.
            </p>
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => setIsFormOpen(true)}
                className="btn-primary text-lg px-10 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Start My Setup
              </button>
              <p className="text-sm text-gray-600 font-medium">
                2026 Community Launch: $0 service fee for Austin residents.
              </p>
            </div>
          </div>
        </div>
      </section>
      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
