import React from 'react';
import { Menu } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
      <div className="flex items-center gap-2 relative z-50">
        <h1 className="font-display text-4xl tracking-tighter">QUEST</h1>
      </div>

      <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-8 font-tech text-xs md:text-sm uppercase">
        {['Home', 'Explore', 'About', 'Services', 'Contacts'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="hover:text-[#ccff00] transition-colors cursor-pointer"
          >
            {item}
          </a>
        ))}
      </nav>

      <button className="md:hidden relative z-50">
        <Menu size={24} />
      </button>
    </header>
  );
};