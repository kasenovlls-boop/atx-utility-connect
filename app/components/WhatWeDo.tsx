export default function WhatWeDo() {
  return (
    <section className="bg-gray-50">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            What We Do (and Don't Do)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-xl font-bold">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-primary">We Handle</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">→</span>
                  <span>Researching and comparing electric providers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">→</span>
                  <span>Coordinating water and trash service setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">→</span>
                  <span>Arranging internet service installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">→</span>
                  <span>HOA registration and documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">→</span>
                  <span>All administrative paperwork and coordination</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-600 text-xl font-bold">✕</span>
                </div>
                <h3 className="text-2xl font-bold text-primary">We Don't Handle</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">✕</span>
                  <span>Collecting or processing payments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">✕</span>
                  <span>Accessing your financial accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">✕</span>
                  <span>Handling your credit card information</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-sm text-gray-800 font-medium">
                  You pay providers directly. We simply coordinate the setup process on your behalf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
