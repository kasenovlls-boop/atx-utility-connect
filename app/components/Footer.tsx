export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="section-container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3">ATX Utility Connect</h3>
            <p className="text-lg text-blue-100 mb-6">
              Simple help. No complications. Just support.
            </p>
            <p className="text-blue-200 mb-6">
              Based in Austin, Texas.
            </p>
          </div>

          <div className="border-t border-white/20 pt-8 mb-8">
            <div className="max-w-md mx-auto space-y-3">
              <div className="text-center">
                <p className="text-blue-300 text-sm mb-1">Email</p>
                <a 
                  href="mailto:hello@atxutilityconnect.com" 
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  hello@atxutilityconnect.com
                </a>
              </div>
              <div className="text-center">
                <p className="text-blue-300 text-sm mb-1">Instagram</p>
                <a 
                  href="https://instagram.com/atxutilityconnect" 
                  className="text-blue-100 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @atxutilityconnect
                </a>
              </div>
            </div>
          </div>

          <div className="text-center text-blue-200 text-sm">
            <p>&copy; {new Date().getFullYear()} ATX Utility Connect</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
