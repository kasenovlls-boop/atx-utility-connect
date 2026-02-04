export default function Problem() {
  return (
    <section className="bg-white border-t border-gray-100">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            What We Help With
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                For Individuals
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">→</span>
                  <span>Electricity, water, gas, internet setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">→</span>
                  <span>Move-in coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">→</span>
                  <span>Filling out online forms and accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">→</span>
                  <span>Scheduling appointments and follow-ups</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                For Small Businesses
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">→</span>
                  <span>Responding to customer messages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">→</span>
                  <span>Managing email inbox</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">→</span>
                  <span>Calendar and scheduling help</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">→</span>
                  <span>Handling forms and admin tasks</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg text-gray-700">
              We handle coordination and admin work. You stay in control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
