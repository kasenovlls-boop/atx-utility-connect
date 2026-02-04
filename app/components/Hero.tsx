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
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Beta 2026 — Currently FREE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Your Austin move-in assistant
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed max-w-3xl mx-auto">
              I&apos;ll call the utility companies, wait on hold, and get everything set up before you move in. You just unpack and enjoy your new place.
            </p>
            <p className="text-lg text-gray-600 mb-10">
              Real person. Local to Austin. Actually happy to help with this stuff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsFormOpen(true)}
                className="btn-primary"
              >
                Get Free Help
              </button>
              <a 
                href="#how-it-works" 
                className="btn-secondary"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>
      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
