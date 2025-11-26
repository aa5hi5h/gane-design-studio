import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contacts" className="bg-black text-white pt-16 md:pt-24 pb-12 border-t border-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10 md:mb-20">
            <div className="md:col-span-2">
                <h2 className="font-display text-6xl mb-6 md:mb-8">QUEST</h2>
                <p className="font-tech text-gray-500 max-w-sm text-sm md:text-base">
                    The ultimate destination for gamers who demand more. Join us and shape the future of interactive entertainment.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <input 
                        type="email" 
                        placeholder="ENTER YOUR EMAIL" 
                        className="bg-transparent border border-[#333] px-4 py-2 font-tech text-sm focus:border-[#ccff00] focus:outline-none w-full max-w-xs"
                    />
                    <button className="bg-[#ccff00] text-black px-6 py-2 font-bold font-tech hover:bg-white transition-colors w-full sm:w-auto">
                        JOIN
                    </button>
                </div>
            </div>

            <div>
                <h3 className="font-display text-xl mb-6 text-[#ccff00]">Platform</h3>
                <ul className="space-y-4 font-tech text-gray-400 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">Browse Games</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">VR Experience</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Tournaments</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                </ul>
            </div>

            <div>
                <h3 className="font-display text-xl mb-6 text-[#ccff00]">Socials</h3>
                <ul className="space-y-4 font-tech text-gray-400 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                </ul>
            </div>
        </div>

        <div className="border-t border-[#222] pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-tech text-gray-600 gap-4 md:gap-0">
            <p>&copy; 2024 QUEST INC. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white">PRIVACY POLICY</a>
                <a href="#" className="hover:text-white">TERMS OF SERVICE</a>
            </div>
        </div>
      </div>
    </footer>
  );
};