'use client';

import { useState } from 'react';
import OrderForm from './OrderForm';

export default function HowItWorks() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section id="how-it-works" className="bg-white">
        <div className="section-container py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-3">
              Here&apos;s How It Works
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Pretty straightforward, honestly.
            </p>

            <div className="space-y-6 relative">
              {/* Visual Timeline Line */}
              <div className="hidden md:block absolute left-7 top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent"></div>
              
              <div className="flex flex-col md:flex-row items-start gap-5 relative">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent to-accent-dark text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md z-10">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    You fill out a quick form
                  </h3>
                  <p className="text-gray-700">
                    Tell me your address, which services you need help with, and any upcoming deadlines. Takes about 2 minutes.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-5 relative">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent to-accent-dark text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md z-10">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    I handle all the annoying stuff
                  </h3>
                  <p className="text-gray-700">
                    I navigate the portals and coordinate with providers like Austin Energy and Google Fiber to get your new services started or your current ones optimized.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-5 relative">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent to-accent-dark text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md z-10">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Peace of mind, guaranteed.
                  </h3>
                  <p className="text-gray-700">
                    You&apos;ll receive official confirmations directly from providers like Austin Energy and Google Fiber. I also share screenshots of all digital applications before they are submitted, so you remain in total control.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <button
                onClick={() => setIsFormOpen(true)}
                className="btn-primary"
              >
                Start My Setup
              </button>
            </div>
          </div>
        </div>
      </section>
      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
