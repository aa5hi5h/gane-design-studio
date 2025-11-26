"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Maximize2 } from 'lucide-react';

export const VideoShowcase: React.FC = () => {
  return (
    <section className="bg-[#050505] py-10 md:py-20 relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-[#222] bg-[#111] group shadow-2xl shadow-black/50"
        >
            <div className="absolute top-0 left-0 w-full h-full bg-[#ccff00]/5 z-10 pointer-events-none mix-blend-overlay opacity-50"></div>
            <video 
                className="w-full h-full object-cover aspect-[4/3] md:aspect-[21/9] opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                autoPlay 
                loop 
                muted 
                playsInline
            >
                <source src="/services-gaming.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 md:p-12 bg-gradient-to-t from-black/90 via-transparent to-black/30">
                <div className="flex justify-between items-start">
                    <div className="bg-black/30 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#ccff00] rounded-full animate-pulse shadow-[0_0_10px_#ccff00]"></div>
                        <span className="font-tech text-xs text-white uppercase tracking-wider font-bold">Live Engine Preview</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-end justify-between gap-8">
                     <div className="max-w-2xl">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="font-display text-4xl md:text-7xl text-white uppercase leading-[0.9] mb-4 drop-shadow-xl"
                        >
                            Immersive <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-emerald-400">Reality</span>
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="font-tech text-gray-300 text-sm md:text-lg max-w-lg leading-relaxed"
                        >
                            Experience gaming visuals that blur the line between reality and digital art. Powered by the next-generation Quest rendering engine.
                        </motion.p>
                     </div>
                     
                     <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative bg-[#ccff00] h-16 w-16 md:h-24 md:w-24 rounded-full flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(204,255,0,0.3)]"
                    >
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                        <Play className="text-black fill-black ml-1 w-6 h-6 md:w-10 md:h-10" />
                     </motion.button>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};