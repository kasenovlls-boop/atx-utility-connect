export default function Trust() {
  return (
    <section className="bg-white border-t border-gray-100">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
            Get in Touch
          </h2>
          
          <div className="space-y-6 mb-8">
            <div className="text-center">
              <p className="text-gray-600 mb-2">Email</p>
              <a 
                href="mailto:hello@atxutilityconnect.com" 
                className="text-lg text-primary hover:underline font-medium"
              >
                hello@atxutilityconnect.com
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-2">Instagram</p>
              <a 
                href="https://instagram.com/atxutilityconnect" 
                className="text-lg text-primary hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                @atxutilityconnect
              </a>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://forms.gle/k1NiYMuua418LF1K9" 
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
