import Hero from './components/Hero';
import Problem from './components/Problem';
import WhatWeDo from './components/WhatWeDo';
import HowItWorks from './components/HowItWorks';
import Trust from './components/Trust';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <WhatWeDo />
      <HowItWorks />
      <Trust />
      <Footer />
    </main>
  );
}
