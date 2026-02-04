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
    },
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
        },
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
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-md w-full p-8 shadow-2xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-primary mb-3">Thank You!</h3>
          <p className="text-gray-700 mb-6">
            Your relocation assistant has started the process. Check your email shortly.
          </p>
          <button
            onClick={() => {
              setSubmitStatus('idle');
              onClose();
            }}
            className="btn-primary"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-2xl w-full my-8 shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-4 rounded-t-xl flex justify-between items-center">
          <h2 className="text-2xl font-bold">Get Free Help With Your Move</h2>
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
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
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
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
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
              Move-in Date *
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
              placeholder="Jane Doe"
            />
          </div>

          {/* Services Checklist */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Services Needed *
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { key: 'electricity', label: 'Electricity' },
                { key: 'water', label: 'Water' },
                { key: 'gas', label: 'Gas' },
                { key: 'internet', label: 'Internet' },
                { key: 'waste', label: 'Waste' },
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
