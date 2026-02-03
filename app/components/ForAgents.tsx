export default function ForAgents() {
  return (
    <section className="bg-primary text-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              For Real Estate Agents
            </h2>
            <p className="text-xl text-blue-100">
              Add value for your clients and simplify the closing process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Enhance Client Experience</h3>
              <p className="text-blue-100">
                Offer utility setup coordination as part of your service. Help clients start their homeownership journey without the administrative headaches.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Reduce Post-Closing Calls</h3>
              <p className="text-blue-100">
                Fewer &quot;Who do I call for electricity?&quot; questions. We handle the details so you can focus on your next transaction.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Streamline Referrals</h3>
              <p className="text-blue-100">
                Simple referral process with professional follow-through. We keep you informed and your clients happy.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Austin Market Knowledge</h3>
              <p className="text-blue-100">
                We understand local providers, HOA nuances, and Austin-specific utility requirements.
              </p>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-center">Partner With Us</h3>
            <p className="text-blue-100 mb-6 text-center max-w-2xl mx-auto">
              Whether you have one client or a full roster of closings, we&apos;re here to make the transition smoother for everyone.
            </p>
            <div className="text-center">
              <a 
                href="https://forms.google.com/placeholder" 
                className="inline-block bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agent Partnership Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
