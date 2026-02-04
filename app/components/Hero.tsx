export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            We help with the tasks you don&apos;t have time for.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed max-w-3xl mx-auto">
            Utility setup, service coordination, admin tasks — we handle the details so you don&apos;t have to.
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            For people and small businesses in Austin who need help, not risk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://forms.gle/k1NiYMuua418LF1K9" 
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Help
            </a>
            <a 
              href="#how-it-works" 
              className="btn-secondary"
            >
              How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
