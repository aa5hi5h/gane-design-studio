"use client"
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const { scrollY } = useScroll();

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
  };

  const controllerY = useTransform(scrollY, [0, 500], [0, 100]);
  const controllerScale = useTransform(scrollY, [0, 500], [0.8, 1.5]);
  const controllerRotate = useTransform(scrollY, [0, 1000], [0, 5]);

  return (
    <section 
      id="home"
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-[#050505]"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <div className="relative w-[90%] text-center leading-[0.85]">
             <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "circOut" }}
                className="font-display text-[11vw] md:text-[12vw] uppercase text-white tracking-tighter"
             >
                YOUR GUIDE TO THE
             </motion.h1>
             
             <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "circOut", delay: 0.15 }}
                className="font-display text-[11vw] md:text-[12vw] uppercase text-white tracking-tighter"
             >
                GAMING UNIVERSE
             </motion.h1>
        </div>
      </div>
      <motion.div 
        className="absolute top-[10%] md:top-[20%] left-1/2 -translate-x-1/2 w-[90vw] md:w-[70vw] aspect-video flex items-center justify-center pointer-events-none mix-blend-screen z-20"
        style={{ 
          y: controllerY,
          scale: controllerScale,
          rotate: controllerRotate
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain"
          style={{ 
            filter: 'contrast(1.1) brightness(1.2) saturate(1.1)' 
          }}
        >
          <source src="/gaming-console-final.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#ccff00] blur-[120px] opacity-10 rounded-full pointer-events-none"></div>
      </motion.div>

      <div className="absolute bottom-16 md:bottom-4 left-0 w-full px-6 flex flex-col md:flex-row justify-between items-end z-30 pointer-events-none gap-6 md:gap-0">
        
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="hidden md:block max-w-xs text-xs text-gray-400 font-tech leading-relaxed"
        >
            <p className="border-l border-[#ccff00] pl-3">
                OUR WEBSITE OFFERS A UNIQUE EXPERIENCE OF GAME SELECTION BASED ON YOUR PERSONAL TASTES.
            </p>
        </motion.div>
        <motion.div 
            className="pointer-events-auto cursor-pointer group w-full md:w-auto flex justify-center"
            onClick={() => setIsAIModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="flex items-center gap-3 px-8 py-4 bg-[#ccff00] text-black font-bold font-tech text-sm md:text-base uppercase tracking-wider rounded-sm hover:bg-white transition-colors shadow-[0_0_20px_rgba(204,255,0,0.4)]">
                <span>Start Your Quest</span>
                <Sparkles size={18} />
            </div>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="hidden md:flex relative items-center justify-center w-32 h-32"
        >
           <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
              <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
              <text className="text-[10px] uppercase font-tech fill-[#ccff00] tracking-widest">
                <textPath xlinkHref="#curve">
                  More Than 2000 of the Latest Games
                </textPath>
              </text>
           </svg>
           <div className="text-center bg-[#111] p-2 rounded-full border border-[#333] z-10">
             <span className="block text-white font-display text-xl">QUEST</span>
           </div>
        </motion.div>
      </div>
      <div className="absolute top-24 left-6 w-4 h-4 border-t border-l border-white/30 hidden md:block"></div>
      <div className="absolute top-24 right-6 w-4 h-4 border-t border-r border-white/30 hidden md:block"></div>
      <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-white/30 hidden md:block"></div>
      <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-white/30 hidden md:block"></div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}