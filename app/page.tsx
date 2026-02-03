import Hero from './components/Hero';
import Problem from './components/Problem';
import WhatWeDo from './components/WhatWeDo';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import ForAgents from './components/ForAgents';
import Trust from './components/Trust';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <WhatWeDo />
      <HowItWorks />
      <Benefits />
      <ForAgents />
      <Trust />
      <Footer />
    </main>
  );
}
