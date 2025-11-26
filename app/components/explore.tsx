"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Smartphone, Monitor, ArrowUpRight, Sparkles } from 'lucide-react';

const tabs = [
    { id: 'pc', label: 'PC / Console', icon: <Gamepad2 size={18} /> },
    { id: 'mobile', label: 'Mobile', icon: <Smartphone size={18} /> },
    { id: 'hardware', label: 'Hardware', icon: <Monitor size={18} /> },
];

const content = {
    pc: {
        title: "Showcase Your Game",
        subtitle: "Reach Millions",
        desc: "Connect with top-tier creators on PC & Console platforms.",
        image1: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop",
        image2: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2000&auto=format&fit=crop",
        color: "bg-purple-500"
    },
    mobile: {
        title: "Pocket Adventures",
        subtitle: "Cloud Ready",
        desc: "Optimized discovery for the next generation of mobile gaming.",
        image1: "https://images.unsplash.com/photo-1592840496073-1bb74c7bdd07?q=80&w=2000&auto=format&fit=crop",
        image2: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2000&auto=format&fit=crop",
        color: "bg-[#ccff00]"
    },
    hardware: {
        title: "Next Gen Gear",
        subtitle: "Performance",
        desc: "The ultimate peripherals for the ultimate competitive edge.",
        image1: "https://images.unsplash.com/photo-1593305841991-05c29736560e?q=80&w=2000&auto=format&fit=crop",
        image2: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=2000&auto=format&fit=crop",
        color: "bg-blue-500"
    }
};

type TabType = 'pc' | 'mobile' | 'hardware';

export const Explore: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('pc');

  const gridConfig = {
    pc: {
      card1: "md:col-span-8 md:row-span-2 md:order-1", 
      card2: "md:col-span-4 md:row-span-1 md:order-2",
      card3: "md:col-span-4 md:row-span-1 md:order-3",
    },
    mobile: {
      card1: "md:col-span-7 md:row-span-2 md:order-2",
      card2: "md:col-span-5 md:row-span-1 md:order-1",
      card3: "md:col-span-5 md:row-span-1 md:order-3",
    },
    hardware: {
      card1: "md:col-span-8 md:row-span-1 md:order-2",
      card2: "md:col-span-4 md:row-span-2 md:order-1",
      card3: "md:col-span-8 md:row-span-1 md:order-3",
    }
  };

  return (
    <section id="explore" className="bg-[#050505] py-16 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-6 md:gap-8">
            <div className="w-full md:w-auto">
                <h2 className="font-display text-4xl md:text-6xl text-white uppercase leading-[0.9]">
                    Discover <br />
                    <span className="text-[#333]">Your Quest</span>
                </h2>
            </div>
            <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                <div className="bg-[#111] p-1.5 md:p-2 rounded-full border border-[#222] flex gap-2 w-max mx-auto md:mx-0">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as TabType)}
                            className={`relative px-4 py-2 md:px-6 md:py-3 rounded-full font-tech text-xs md:text-sm uppercase tracking-wide transition-all duration-300 overflow-hidden ${
                                activeTab === tab.id 
                                ? 'text-black font-bold' 
                                : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            {activeTab === tab.id && (
                                <motion.div 
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-[#ccff00]"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                {tab.icon} {tab.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
        <div className="h-auto md:h-[600px] w-full relative">
            <AnimatePresence mode="popLayout">
                <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 md:gap-6 h-full"
                >
                    <motion.div 
                        className={`relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-[#222] group min-h-[250px] ${gridConfig[activeTab].card1}`}
                    >
                         <img 
                            src={content[activeTab].image1} 
                            alt="Main" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                         <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                             <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full inline-block mb-3 md:mb-4">
                                <ArrowUpRight className="text-white w-4 h-4 md:w-6 md:h-6" />
                             </div>
                             <h3 className="font-display text-2xl md:text-4xl text-white uppercase">{content[activeTab].title}</h3>
                         </div>
                    </motion.div>
                    <motion.div 
                        className={`relative bg-[#111] rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 border border-[#222] flex flex-col justify-between overflow-hidden min-h-[200px] ${gridConfig[activeTab].card2}`}
                    >
                         <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[50px] opacity-20 ${content[activeTab].color}`}></div>
                         
                         <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2 md:mb-4 text-[#ccff00] font-tech text-[10px] md:text-xs uppercase tracking-widest">
                                <Sparkles size={14} />
                                <span>Featured Collection</span>
                            </div>
                            <h4 className="font-display text-xl md:text-3xl text-white leading-tight">{content[activeTab].subtitle}</h4>
                         </div>
                         <p className="font-tech text-gray-400 text-xs md:text-sm mt-4 leading-relaxed relative z-10">{content[activeTab].desc}</p>
                    </motion.div>
                    <motion.div 
                        className={`relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-[#222] group min-h-[200px] ${gridConfig[activeTab].card3}`}
                    >
                         <img 
                            src={content[activeTab].image2} 
                            alt="Secondary" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                         />
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                         <div className="absolute top-4 right-4 md:top-6 md:right-6">
                            <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full font-tech text-xs">
                                0{activeTab === 'pc' ? '1' : activeTab === 'mobile' ? '2' : '3'}
                            </span>
                         </div>
                    </motion.div>

                </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
};