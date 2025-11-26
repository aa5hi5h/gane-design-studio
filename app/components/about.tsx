"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Target, BarChart3, Globe2, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#050505] py-16 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 md:mb-16">
          <h2 className="font-display text-4xl md:text-7xl text-white uppercase leading-[0.9]">
            A GAMING ECOSYSTEM <br />
            <span className="text-[#ccff00]">BUILT FOR THE FUTURE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-[#111] rounded-3xl p-6 md:p-14 border border-[#222] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ccff00] blur-[150px] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#ccff00] rounded-full flex items-center justify-center mb-6 md:mb-8">
                <Globe2 className="text-black" size={24} />
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-white mb-4">CONNECT WITH <br/>GLOBAL COMMUNITIES</h3>
              <p className="font-tech text-gray-400 text-sm md:text-lg max-w-sm mb-6 md:mb-8">
                Leverage our extensive network of servers and reach gaming communities worldwide instantly.
              </p>
              <div className="bg-[#0a0a0a] rounded-xl p-4 border border-[#333] max-w-sm transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                  <div className="h-2 w-24 bg-gray-800 rounded"></div>
                  <div className="ml-auto px-2 py-0.5 bg-[#ccff00]/20 text-[#ccff00] text-[10px] rounded font-tech">ONLINE</div>
                </div>
                 <div className="h-2 w-full bg-gray-800 rounded mb-2"></div>
                 <div className="h-2 w-2/3 bg-gray-800 rounded"></div>
              </div>
            </div>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="md:col-span-5 bg-[#ccff00] rounded-3xl p-6 md:p-14 relative overflow-hidden flex flex-col justify-between group min-h-[300px]"
          >
             <div className="relative z-10">
                <div className="flex justify-between items-start mb-6 md:mb-8">
                  <Target className="text-black" size={32} />
                  <div className="bg-black/10 px-3 py-1 rounded-full text-black text-xs font-bold font-tech uppercase">Target Mode</div>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-black mb-4">PRECISION <br/>MATCHING</h3>
             </div>
             
             <div className="relative z-10 mt-auto md:mt-8">
                <div className="bg-black/10 backdrop-blur-sm p-4 rounded-xl border border-black/5">
                   <div className="flex justify-between items-center text-black font-tech text-sm mb-2">
                      <span>Accuracy</span>
                      <span>99.8%</span>
                   </div>
                   <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden">
                      <div className="h-full bg-black w-[99.8%]"></div>
                   </div>
                </div>
             </div>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="md:col-span-5 bg-[#1a1a1a] rounded-3xl p-6 md:p-10 border border-[#333] relative overflow-hidden group"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#000]"></div>
             <div className="relative z-10">
                <Zap className="text-[#ccff00] mb-6" size={32} />
                <h3 className="font-display text-2xl md:text-3xl text-white mb-4">INSTANT <br/>DEPLOYMENT</h3>
                <p className="font-tech text-gray-400 text-sm">
                   From start line to final whistle, enjoy zero-latency gaming infrastructure.
                </p>
             </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="md:col-span-7 bg-[#111] rounded-3xl p-6 md:p-10 border border-[#222] relative overflow-hidden"
          >
             <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center h-full">
                <div className="flex-1 w-full">
                   <BarChart3 className="text-[#ccff00] mb-6" size={32} />
                   <h3 className="font-display text-2xl md:text-3xl text-white mb-4">MEASURE <br/>IMPACT</h3>
                   <p className="font-tech text-gray-400 text-sm">
                      Track performance with crystal clear insights powered by the Quest Neural Engine.
                   </p>
                </div>
                <div className="flex-1 w-full">
                   <div className="bg-[#0f0f0f] rounded-xl p-4 border border-[#333] shadow-xl">
                      <div className="flex items-end gap-2 h-32 pb-4 border-b border-[#333]">
                         <div className="w-1/4 h-[40%] bg-[#222] rounded-t-sm"></div>
                         <div className="w-1/4 h-[70%] bg-[#333] rounded-t-sm"></div>
                         <div className="w-1/4 h-[50%] bg-[#222] rounded-t-sm"></div>
                         <div className="w-1/4 h-[100%] bg-[#ccff00] rounded-t-sm relative group-hover:shadow-[0_0_20px_rgba(204,255,0,0.5)] transition-shadow"></div>
                      </div>
                      <div className="flex justify-between mt-3">
                         <div className="text-white font-display text-xl md:text-2xl">2.4M</div>
                         <div className="text-[#ccff00] font-tech text-xs bg-[#ccff00]/10 px-2 py-1 rounded">+15.2%</div>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};