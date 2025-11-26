"use client"
import React, { useEffect, useState } from 'react';
import { Header } from './components/header';
import  Hero  from './components/hero';
import { About } from './components/about';
import { Explore } from './components/explore';
import { Services } from './components/services';
import { Footer } from './components/footer';
import { GlobeSection } from './components/globe-section';
import { VideoShowcase } from './components/video';
import { AnimatePresence } from 'framer-motion';
import { Loader } from './components/loader';

function App() {

  const [loading, setLoading] = useState(true);

  // Prevent scrolling while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-[#ccff00] selection:text-black">
       <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
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