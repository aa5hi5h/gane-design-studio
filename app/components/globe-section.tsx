"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe2, Mic, Trophy } from 'lucide-react';

export const GlobeSection: React.FC = () => {
  return (
    <section className="bg-[#020202] py-16 md:py-32 relative overflow-hidden border-t border-[#111]">
        
      <div className="container mx-auto px-4 md:px-6 relative z-10">
         <div className="text-center mb-10 md:mb-20">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl md:text-7xl text-white uppercase mb-4 md:mb-6"
            >
                Global <span className="text-[#ccff00]">Network</span>
            </motion.h2>
            <p className="font-tech text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
                Connecting creators and audiences across the digital frontier.
            </p>
         </div>
         <div className="relative w-full max-w-[90rem] mx-auto aspect-[1.4/1] md:aspect-[2/1] flex items-center justify-center my-6 md:my-10">
            <div 
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(circle, #333 2px, transparent 2px)',
                    backgroundSize: '24px 24px'
                }}
            ></div>
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 z-10"
                style={{
                    backgroundImage: 'radial-gradient(circle, #475569 3px, transparent 3px)', 
                    backgroundSize: '16px 16px',
                    maskImage: 'url(https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg)',
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskImage: 'url(https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg)',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center'
                }}
            />
             <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute inset-0 z-10 mix-blend-overlay"
                style={{
                    backgroundImage: 'radial-gradient(circle, #ccff00 3px, transparent 3px)', 
                    backgroundSize: '16px 16px',
                    maskImage: 'url(https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg)',
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskImage: 'url(https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg)',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                }}
            >
                 <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#ccff00]/40 to-black"></div>
            </motion.div>
            {[
                { top: '28%', left: '22%' }, 
                { top: '32%', left: '28%' }, 
                { top: '68%', left: '32%' }, 
                { top: '25%', left: '51%' }, 
                { top: '28%', left: '55%' }, 
                { top: '35%', left: '78%' }, 
                { top: '48%', left: '70%' }, 
                { top: '78%', left: '86%' }, 
            ].map((pos, idx) => (
                <motion.div 
                    key={idx} 
                    className="absolute z-20" 
                    style={pos}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: idx * 0.1 + 0.5, type: "spring" }}
                >
                    <div className="relative flex items-center justify-center w-2 h-2 md:w-3 md:h-3">
                        <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-[#ccff00] rounded-full shadow-[0_0_10px_#ccff00]"></div>
                        <div className="absolute inset-0 bg-[#ccff00] rounded-full animate-ping opacity-50 duration-1000"></div>
                    </div>
                </motion.div>
            ))}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute top-[0%] left-[0%] md:top-[10%] md:left-[15%] z-30"
            >
                <div className="bg-[#111]/80 backdrop-blur-md border border-[#333] p-2 md:p-4 rounded-xl md:rounded-2xl shadow-2xl flex items-center gap-2 md:gap-4 hover:border-blue-500/50 transition-colors group">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-600/20 rounded-lg md:rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Mic className="w-4 h-4 md:w-6 md:h-6" />
                    </div>
                    <div>
                        <div className="font-display text-lg md:text-3xl text-white leading-none">MILLIONS</div>
                        <div className="font-tech text-[8px] md:text-[10px] text-gray-400 uppercase tracking-wider">Independent Creators</div>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-[35%] left-[-2%] md:left-[22%] z-30"
            >
                <div className="bg-[#111]/80 backdrop-blur-md border border-[#333] p-2 md:p-4 rounded-xl md:rounded-2xl shadow-2xl flex items-center gap-2 md:gap-4 hover:border-purple-500/50 transition-colors group">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-purple-600/20 rounded-lg md:rounded-xl flex items-center justify-center text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Globe2 className="w-4 h-4 md:w-6 md:h-6" />
                    </div>
                    <div>
                        <div className="font-display text-lg md:text-3xl text-white leading-none">37</div>
                        <div className="font-tech text-[8px] md:text-[10px] text-gray-400 uppercase tracking-wider">Countries</div>
                    </div>
                </div>
            </motion.div>
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="absolute top-[25%] right-[-2%] md:top-[35%] md:right-[25%] z-30"
            >
                <div className="bg-[#111]/80 backdrop-blur-md border border-[#333] p-2 md:p-4 rounded-xl md:rounded-2xl shadow-2xl flex items-center gap-2 md:gap-4 hover:border-orange-500/50 transition-colors group">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-orange-500/20 rounded-lg md:rounded-xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <Trophy className="w-4 h-4 md:w-6 md:h-6" />
                    </div>
                    <div>
                        <div className="font-display text-lg md:text-3xl text-white leading-none">150+</div>
                        <div className="font-tech text-[8px] md:text-[10px] text-gray-400 uppercase tracking-wider">Talent Managers</div>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-[-5%] right-[0%] md:bottom-[5%] md:right-[15%] z-30"
            >
                <div className="bg-[#ccff00] p-3 md:p-5 rounded-xl md:rounded-2xl shadow-[0_0_30px_rgba(204,255,0,0.3)] flex items-center gap-2 md:gap-4 transform hover:scale-105 transition-transform cursor-default">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-black rounded-lg md:rounded-xl flex items-center justify-center text-[#ccff00]">
                        <Users className="w-4 h-4 md:w-6 md:h-6" />
                    </div>
                    <div>
                        <div className="font-display text-lg md:text-3xl text-black leading-none">BILLIONS</div>
                        <div className="font-tech text-[8px] md:text-[10px] text-black/70 font-bold uppercase tracking-wider">Gaming Audience</div>
                    </div>
                </div>
            </motion.div>

         </div>
      </div>
    </section>
  );
};