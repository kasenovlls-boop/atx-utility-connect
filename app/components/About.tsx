export default function About() {
  return (
    <section className="bg-gradient-to-br from-warm-peach/10 via-white to-warm-sky/10">
      <div className="section-container py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-10">
            Hey, I&apos;m here to help
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="relative w-64 h-64 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&q=80&w=800" 
                  alt="Austin, Texas skyline"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                I started ATX Utility Connect because I kept hearing the same story from friends moving to Austin: "Setting up utilities was a nightmare." Hours on hold, confusing websites, missed appointments.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                I figured — why not help? I&apos;m good at this kind of stuff. I don&apos;t mind waiting on hold. I actually like organizing things and making sure everything&apos;s set up right.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                So here we are. This is a small, local operation. Just me helping people in Austin get settled without the admin headaches. Our process is fully automated for your convenience, ensuring your utilities are connected without delay.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-primary">Born and raised in Austin</p>
                  <p className="text-gray-600 text-sm">I know the city, the providers, and the quirks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
