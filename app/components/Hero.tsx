export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Your Austin Home is Ready.<br />
            Let Us Handle the Utilities.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Professional utility and household account setup for new homeowners in Austin, Texas.
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            We take care of the paperwork so you can focus on settling into your new home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://forms.google.com/placeholder" 
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
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
