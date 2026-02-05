export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-warm-peach/10 to-warm-sky/10">
      <div className="section-container py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
            What Austin Residents Are Saying
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <svg className="w-8 h-8 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                As a busy realtor, this service is a godsend. My clients move in with everything ready, and I look like a hero.
              </p>
              <p className="text-sm font-semibold text-primary">
                — Sarah M., moved from California (Google Fiber setup)
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <svg className="w-8 h-8 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                I was dreading setting up Google Fiber and Austin Energy portals. This was so easy and stress-free.
              </p>
              <p className="text-sm font-semibold text-primary">
                — David L., Circle C Resident (Austin Energy Optimization)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
