export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            How It Works
          </h2>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Tell us what you need help with
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Fill out a quick form letting us know what tasks you need handled.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  We handle the coordination
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We make the calls, fill out the forms, and schedule the appointments.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  It&apos;s done — you save time
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The task is completed and you can focus on what matters to you.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://forms.gle/k1NiYMuua418LF1K9" 
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Help
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
