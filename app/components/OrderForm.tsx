'use client';

import { useState, useEffect, useRef } from 'react';

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  focusRealtorField?: boolean;
}

export default function OrderForm({ isOpen, onClose, focusRealtorField = false }: OrderFormProps) {
  const realtorInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    phone: '',
    serviceAddress: '',
    moveInDate: '',
    realtorName: '',
    services: {
      electricity: false,
      water: false,
      gas: false,
      internet: false,
      waste: false,
      other: false,
    },
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [highlightRealtor, setHighlightRealtor] = useState(false);

  useEffect(() => {
    if (isOpen && focusRealtorField && realtorInputRef.current) {
      // Delay to ensure modal is fully rendered
      setTimeout(() => {
        realtorInputRef.current?.focus();
        realtorInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setHighlightRealtor(true);
        // Remove highlight after animation
        setTimeout(() => setHighlightRealtor(false), 2000);
      }, 300);
    }
  }, [isOpen, focusRealtorField]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: keyof typeof formData.services) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service],
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitStatus('success');
      // Reset form
      setFormData({
        clientName: '',
        email: '',
        phone: '',
        serviceAddress: '',
        moveInDate: '',
        realtorName: '',
        services: {
          electricity: false,
          water: false,
          gas: false,
          internet: false,
          waste: false,
          other: false,
        },
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  if (submitStatus === 'success') {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-lg w-full p-8 shadow-2xl mt-20">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary">✅ Got it! Here&apos;s what happens next:</h3>
          </div>

          <div className="space-y-4 mb-6 text-left">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 bg-accent text-white rounded-full text-sm font-bold">1</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Check your email:</strong> I&apos;ll reach out within 24 business hours with a personalized plan.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 bg-accent text-white rounded-full text-sm font-bold">2</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>No rush:</strong> You&apos;ll approve the approach via email at your own pace (no calls).
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 bg-accent text-white rounded-full text-sm font-bold">3</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Total control:</strong> I&apos;ll handle the portals and send you screenshots before anything is submitted.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 bg-accent text-white rounded-full text-sm font-bold">4</span>
              <p className="text-gray-700 leading-relaxed">
                <strong>Official proof:</strong> You&apos;ll get confirmation emails directly from providers (Austin Energy, Google Fiber, etc.).
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-gray-700 text-sm">
              <strong>Questions?</strong> Just reply to my email—I&apos;m here to help.
            </p>
            <p className="text-gray-600 text-sm mt-2 italic">— Your Austin neighbor</p>
          </div>

          <button
            onClick={() => {
              setSubmitStatus('idle');
              onClose();
            }}
            className="w-full btn-primary"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full my-20 shadow-2xl relative max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-4 rounded-t-xl flex justify-between items-center flex-shrink-0">
          <h2 className="text-2xl font-bold">Start Your Utility Setup</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto flex-1">
          {/* Privacy & Trust Box */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Your Privacy Matters.</h3>
                <p className="text-sm text-gray-700">
                  I am a local Austin resident, not a data broker. Your information is used strictly to set up your utilities and is never sold to third parties.
                </p>
                <p className="text-sm text-gray-700 mt-3 flex items-start gap-2">
                  <span>📧</span>
                  <span><strong>How It Works:</strong> Everything is handled digitally. No calls, no waiting on hold. I&apos;ll email you updates and screenshots for your approval.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Client Name */}
          <div>
            <label htmlFor="clientName" className="block text-sm font-semibold text-gray-700 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              id="clientName"
              name="clientName"
              value={formData.clientName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="John Smith"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number (Optional)
            </label>
            <p className="text-xs text-gray-500 mb-2">
              Only for urgent confirmations—I won&apos;t call you unless absolutely necessary.
            </p>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="(512) 555-0123"
            />
          </div>

          {/* Service Address */}
          <div>
            <label htmlFor="serviceAddress" className="block text-sm font-semibold text-gray-700 mb-1">
              Service Address (Austin, TX) *
            </label>
            <input
              type="text"
              id="serviceAddress"
              name="serviceAddress"
              value={formData.serviceAddress}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="123 Main St, Austin, TX 78701"
            />
          </div>

          {/* Move-in Date */}
          <div>
            <label htmlFor="moveInDate" className="block text-sm font-semibold text-gray-700 mb-1">
              Requested Service Date (or Move-in Date) *
            </label>
            <input
              type="date"
              id="moveInDate"
              name="moveInDate"
              value={formData.moveInDate}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>

          {/* Realtor Name */}
          <div className={highlightRealtor ? 'animate-pulse' : ''}>
            <label htmlFor="realtorName" className="block text-sm font-semibold text-gray-700 mb-1">
              Realtor Name (Optional)
            </label>
            <input
              ref={realtorInputRef}
              type="text"
              id="realtorName"
              name="realtorName"
              value={formData.realtorName}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 ${
                highlightRealtor ? 'border-accent border-2 bg-accent/5 shadow-lg' : 'border-gray-300'
              }`}
              placeholder="Realtor Name (Optional — for referrals)"
            />
          </div>

          {/* Services Checklist */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Services Needed *
            </label>
            
            {/* Quick Select Options */}
            <div className="mb-4 space-y-2 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">Quick Select:</p>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData(prev => ({
                        ...prev,
                        services: {
                          electricity: true,
                          water: true,
                          gas: true,
                          internet: true,
                          waste: true,
                          other: false,
                        },
                      }));
                    }
                  }}
                  className="w-5 h-5 text-accent rounded focus:ring-accent mt-0.5 flex-shrink-0"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">
                  <strong>Setup Everything</strong> (Moving to a new place)
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData(prev => ({
                        ...prev,
                        services: {
                          electricity: false,
                          water: false,
                          gas: false,
                          internet: false,
                          waste: false,
                          other: true,
                        },
                      }));
                    }
                  }}
                  className="w-5 h-5 text-accent rounded focus:ring-accent mt-0.5 flex-shrink-0"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">
                  <strong>Not sure yet</strong> — let&apos;s discuss my bills
                </span>
              </label>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {[
                { key: 'electricity', label: 'Electricity' },
                { key: 'water', label: 'Water' },
                { key: 'gas', label: 'Gas' },
                { key: 'internet', label: 'Internet' },
                { key: 'waste', label: 'Waste' },
                { key: 'other', label: 'Other / Multiple Admin Tasks' },
              ].map(({ key, label }) => (
                <label
                  key={key}
                  className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
                    formData.services[key as keyof typeof formData.services]
                      ? 'border-accent bg-accent/5'
                      : 'border-gray-300 hover:border-accent/50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.services[key as keyof typeof formData.services]}
                    onChange={() => handleServiceToggle(key as keyof typeof formData.services)}
                    className="w-5 h-5 text-accent rounded focus:ring-accent"
                  />
                  <span className="text-gray-700 font-medium">{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Message/Special Requests */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
              How can I help you specifically?
            </label>
            <p className="text-xs text-gray-500 mb-2">
              e.g., &quot;My daughter asked me to get help with my bills&quot; or &quot;I&apos;m overwhelmed with moving paperwork.&quot;
            </p>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
              placeholder="Tell me what you need help with..."
            />
          </div>

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
              <p className="font-medium">Something went wrong.</p>
              <p className="text-sm">Please try again or contact us directly at hello@atxutilityconnect.com</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : (
                'Submit Request'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
