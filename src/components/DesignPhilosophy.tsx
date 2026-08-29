import React, { useState } from 'react';
import { PHILOSOPHY_PILLARS } from '../data/content';
import { Sparkles, Compass } from 'lucide-react';

export const DesignPhilosophy: React.FC = () => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const currentPillar = PHILOSOPHY_PILLARS[activePillarIndex];

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[#1A1C19] text-[#F8F7F4] relative overflow-hidden">
      {/* Background Architectural Ambient Texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#828F76_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#9CA990] uppercase font-heading">
              DESIGN PHILOSOPHY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase font-heading text-white">
            Every Detail Has A Purpose.
          </h2>
          <p className="text-sm sm:text-base text-[#A8ADA2] mt-4 leading-relaxed">
            Great architecture and interior visualization isn't just about pretty pictures; it is the deliberate orchestration of spatial movement, light, and tactile materials.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: 5 Interactive Pillars */}
          <div className="lg:col-span-5 space-y-3">
            {PHILOSOPHY_PILLARS.map((pillar, idx) => {
              const isActive = idx === activePillarIndex;
              return (
                <div
                  key={pillar.title}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#282C26] border-[#4E5747] shadow-md'
                      : 'bg-[#20231F]/60 border-[#2E332A] hover:bg-[#252923] hover:border-[#3E4537]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-bold text-[#8B9680]">
                      0{idx + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold tracking-wide uppercase font-heading text-white">
                      {pillar.title}
                    </span>
                  </div>

                  <p className={`text-xs italic leading-snug transition-colors ${isActive ? 'text-[#D0D6C9]' : 'text-[#878D80]'}`}>
                    "{pillar.quote}"
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Large Architectural Focus Visual & Detailed Narrative */}
          <div className="lg:col-span-7">
            <div className="bg-[#242822] border border-[#3A4234] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
              
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-[#404939]">
                <img
                  src={currentPillar.image}
                  alt={`${currentPillar.title} design philosophy`}
                  className="w-full h-full object-cover transition-all duration-700 ease-out"
                />
                
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono font-bold text-white uppercase">
                  {currentPillar.title} STUDY
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#9CA990] uppercase block">
                  CORE PRINCIPLE 0{activePillarIndex + 1}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase font-heading">
                  {currentPillar.title}
                </h3>

                <p className="text-base text-[#D0D6C9] italic font-medium">
                  "{currentPillar.quote}"
                </p>

                <p className="text-sm text-[#A8ADA2] leading-relaxed pt-2 border-t border-[#363D30]">
                  {currentPillar.description}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
