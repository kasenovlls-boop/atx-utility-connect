import Hero from './components/Hero';
import Problem from './components/Problem';
import WhatWeDo from './components/WhatWeDo';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import LocalImpact from './components/LocalImpact';
import Trust from './components/Trust';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <WhatWeDo />
      <About />
      <HowItWorks />
      <LocalImpact />
      <Trust />
      <Footer />
    </main>
  );
}
