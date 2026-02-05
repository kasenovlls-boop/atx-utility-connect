export default function LocalImpact() {
  return (
    <section className="bg-white border-t border-gray-100">
      <div className="section-container py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
            <svg className="w-9 h-9 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Proud to Serve Austin
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
            This is my city, and I believe neighbors should look out for one another. Whether you&apos;re a newcomer finding your feet or a long-time resident—especially our seniors—who&apos;s tired of fighting with confusing utility portals, I&apos;m here to help you regain control.
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            You deserve a stress-free home, regardless of how long you&apos;ve called Austin home. Let&apos;s simplify your digital life together.
          </p>
          <div className="mt-8 inline-block bg-warm-sky/10 border border-warm-sky/30 rounded-lg px-6 py-3">
            <p className="text-sm text-gray-700">
              🌮 Local, independent, and Austin-proud
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
