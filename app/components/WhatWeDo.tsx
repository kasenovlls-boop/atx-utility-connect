export default function WhatWeDo() {
  return (
    <section className="bg-gray-50">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
            Important: What We Don&apos;t Do
          </h2>
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-8">
            <div className="space-y-5 max-w-2xl mx-auto">
              <div className="flex items-start">
                <span className="text-red-600 mr-3 mt-1 font-bold text-xl">✕</span>
                <p className="text-gray-800 text-lg">
                  We never handle money or payments
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-3 mt-1 font-bold text-xl">✕</span>
                <p className="text-gray-800 text-lg">
                  We never access bank accounts or cards
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-3 mt-1 font-bold text-xl">✕</span>
                <p className="text-gray-800 text-lg">
                  We don&apos;t provide legal, financial, or tax advice
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-blue-300 text-center">
                <p className="text-gray-800 text-lg font-medium">
                  You stay in control. We handle the coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
