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

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent to-accent-dark text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    You fill out a quick form
                  </h3>
                  <p className="text-gray-700">
                    Tell me your move-in date, address, and which utilities you need. Takes about 2 minutes.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent to-accent-dark text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    I handle all the annoying stuff
                  </h3>
                  <p className="text-gray-700">
                    I&apos;ll call Austin Energy, Google Fiber, whoever you need. I&apos;ll wait on hold, fill out their forms, and get everything scheduled.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent to-accent-dark text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    You move into a ready home
                  </h3>
                  <p className="text-gray-700">
                    Lights work. WiFi&apos;s on. Water flows. You saved 3-5 hours of phone time and didn&apos;t have to deal with any of it.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <button
                onClick={() => setIsFormOpen(true)}
                className="btn-primary"
              >
                Get Free Help
              </button>
            </div>
          </div>
        </div>
      </section>
      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
