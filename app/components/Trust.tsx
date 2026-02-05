'use client';

import { useState } from 'react';
import OrderForm from './OrderForm';

export default function Trust() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [focusRealtorField, setFocusRealtorField] = useState(false);

  const handleRealtorButtonClick = () => {
    setFocusRealtorField(true);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setFocusRealtorField(false);
  };

  return (
    <>
      {/* Realtor Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="section-container py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                For Austin Realtors
              </h2>
              <p className="text-blue-100 text-lg">
                Give your clients a smooth move-in (without any financial risk)
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/15 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Happier Clients</h3>
                <p className="text-blue-100">
                  They walk into a home with lights on and WiFi working — instant good impression
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/15 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Save Them 3-5 Hours</h3>
                <p className="text-blue-100">
                  That&apos;s time they can spend packing, planning, or just not stressing
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/15 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Professional & Secure</h3>
                <p className="text-blue-100">
                  I never touch money. They pay providers directly. Clean and simple.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={handleRealtorButtonClick}
                className="inline-block bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                Let&apos;s Work Together
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white border-t border-gray-100">
        <div className="section-container py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-3">
              Questions? Just Ask
            </h2>
            <p className="text-center text-gray-600 mb-8">
              I&apos;m happy to explain how this works or chat about what you need.
            </p>

            <div className="text-center">
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
      <OrderForm 
        isOpen={isFormOpen} 
        onClose={handleCloseForm}
        focusRealtorField={focusRealtorField}
      />
    </>
  );
}
