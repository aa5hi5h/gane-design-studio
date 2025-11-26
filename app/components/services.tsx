"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, Users, Globe } from 'lucide-react';

const stats = [
    {
        icon: <Sparkles size={32} />,
        value: "10K+",
        label: "Premium Games",
        gradient: "from-[#ccff00]/20 to-transparent"
    },
    {
        icon: <Trophy size={32} />,
        value: "1.2B",
        label: "Achievements Unlocked",
        gradient: "from-purple-500/20 to-transparent"
    },
    {
        icon: <Users size={32} />,
        value: "78M+",
        label: "Active Players",
        gradient: "from-blue-500/20 to-transparent"
    }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="bg-[#050505] py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative group bg-[#111] rounded-2xl p-6 md:p-8 border border-[#222] overflow-hidden hover:border-[#ccff00]/30 transition-colors duration-500"
                >
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#0a0a0a] rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-[#222] group-hover:scale-110 transition-transform duration-300">
                            <div className="text-white group-hover:text-[#ccff00] transition-colors">
                                {stat.icon}
                            </div>
                        </div>
                        
                        <h3 className="font-display text-5xl md:text-6xl text-white mb-2">{stat.value}</h3>
                        <p className="font-tech text-gray-400 uppercase tracking-widest text-sm font-bold">{stat.label}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};