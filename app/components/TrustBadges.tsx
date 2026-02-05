export default function TrustBadges() {
  return (
    <section className="bg-white border-t border-gray-100">
      <div className="section-container py-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm text-gray-500 font-medium mb-6">
            Expertly navigating these providers and more
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 grayscale">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-700">Austin Energy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-700">Austin Water</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-700">Google Fiber</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-700">AT&T</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-700">Spectrum</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
