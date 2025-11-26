"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Randomly increment progress to simulate real network variability
        const next = prev + Math.floor(Math.random() * 5) + 2;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Small delay before finishing to let user see 100% and the final snap
      const timer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        opacity: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* Switch-like Logo Container */}
        {/* Opacity linked to progress: starts at 0.1, ends at 1 */}
        <div 
            className="flex gap-4 mb-10 relative transition-opacity duration-100 ease-linear"
            style={{ opacity: Math.max(0.1, progress / 100) }}
        >
           {/* Left Controller */}
           <motion.div 
             className="w-14 h-32 border-[5px] border-white rounded-l-[2rem] rounded-r-xl relative flex items-center justify-center bg-transparent"
             initial={{ y: -80, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 15,
                mass: 1.2
             }}
           >
              <div className="w-4 h-4 bg-white rounded-full mt-[-30px]"></div>
           </motion.div>

           {/* Right Controller */}
           <motion.div 
             className="w-14 h-32 bg-white rounded-r-[2rem] rounded-l-xl relative flex items-center justify-center"
             initial={{ y: 80, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 15,
                mass: 1.2,
                delay: 0.15 
             }}
           >
              <div className="w-4 h-4 bg-[#050505] rounded-full mt-[30px]"></div>
           </motion.div>
           
           {/* Snap visual ripple at 100% */}
           {progress === 100 && (
             <motion.div 
                className="absolute inset-0 -m-6 border-2 border-[#ccff00] rounded-[3rem]"
                initial={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1.4, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
             />
           )}
        </div>

        {/* Percentage Text */}
        <div className="relative">
             <motion.div 
                className="font-tech text-[#ccff00] text-xl tracking-[0.2em] font-bold font-mono"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                {progress}%
            </motion.div>
        </div>
      </div>
    </motion.div>
  );
};