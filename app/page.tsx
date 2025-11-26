import React from 'react';
import { Header } from './components/header';
import  Hero  from './components/hero';
import { About } from './components/about';
import { Explore } from './components/explore';
import { Services } from './components/services';
import { Footer } from './components/footer';
import { GlobeSection } from './components/globe-section';
import { VideoShowcase } from './components/video';

function App() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-[#ccff00] selection:text-black">
      <Header />
      <Hero />
      <About />
      <VideoShowcase />
      <Services />
      <Explore />
      <GlobeSection />
      <Footer />
    </main>
  );
}

export default App;