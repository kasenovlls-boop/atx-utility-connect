export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Simple, straightforward, and stress-free
          </p>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Tell Us About Your New Home
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Fill out a simple form with your property address, closing date, and contact information. Let us know which services you need us to coordinate.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  We Handle the Coordination
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our team contacts providers, compares options, fills out paperwork, and schedules installations. We keep you updated every step of the way.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Move In with Everything Ready
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Walk into your new Austin home with utilities active, internet installed, and accounts set up. You pay providers directly—we just handle the administrative work.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://forms.google.com/placeholder" 
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
