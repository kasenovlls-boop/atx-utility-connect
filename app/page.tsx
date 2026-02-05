import Hero from './components/Hero';
import Problem from './components/Problem';
import WhatWeDo from './components/WhatWeDo';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import TrustedProviders from './components/TrustedProviders';
import LocalImpact from './components/LocalImpact';
import Trust from './components/Trust';
import FAQ from './components/FAQ';
import TrustBadges from './components/TrustBadges';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <WhatWeDo />
      <About />
      <HowItWorks />
      <Testimonials />
      <TrustedProviders />
      <LocalImpact />
      <Trust />
      <FAQ />
      <TrustBadges />
      <Footer />
    </main>
  );
}
