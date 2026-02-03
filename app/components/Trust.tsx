export default function Trust() {
  return (
    <section className="bg-white border-t border-gray-100">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Trust & Transparency
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                Administrative Support Only
              </h3>
              <p className="text-gray-700 mb-4">
                We coordinate, research, and handle paperwork. We never touch your money or payment information.
              </p>
              <p className="text-gray-700">
                You maintain complete control over your accounts and pay all providers directly.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                Clear Communication
              </h3>
              <p className="text-gray-700 mb-4">
                We keep you informed throughout the process with regular updates and progress reports.
              </p>
              <p className="text-gray-700">
                You'll always know what's happening, what's next, and when services will be active.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                Local & Accountable
              </h3>
              <p className="text-gray-700 mb-4">
                We're based in Austin, serving Austin homeowners. Real people, real support.
              </p>
              <p className="text-gray-700">
                Our reputation depends on your satisfaction and smooth move-in experience.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                Your Data, Protected
              </h3>
              <p className="text-gray-700 mb-4">
                We only collect the information necessary to coordinate your utility setup.
              </p>
              <p className="text-gray-700">
                Your personal information is handled with care and never shared without permission.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center bg-blue-50 rounded-lg p-8 border border-blue-200">
            <p className="text-lg text-gray-800 font-medium mb-2">
              Questions about how we work?
            </p>
            <p className="text-gray-700 mb-6">
              We're happy to walk you through our process and answer any concerns.
            </p>
            <a 
              href="https://forms.gle/k1NiYMuua418LF1K9" 
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
