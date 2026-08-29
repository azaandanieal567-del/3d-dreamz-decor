import React from 'react';
import { WHY_US_PILLARS, BUSINESS_INFO } from '../data/content';
import { CheckCircle2, ShieldCheck, Star } from 'lucide-react';

export const WhyUs: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[#F3EFE9] border-t border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#3B4335] uppercase font-heading">
              STUDIO ADVANTAGES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1C19] tracking-tight uppercase font-heading">
            Why 3D Dreamz Decor
          </h2>
          <p className="text-sm sm:text-base text-[#52574A] mt-3 leading-relaxed">
            We deliver the highest degree of spatial forethought, combining rigorous 2D architectural planning with world-class photorealistic 3D visualization.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="bg-[#FAF9F6] border border-[#E0DBD0] rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#767E6D]">
                    ADVANTAGE 0{idx + 1}
                  </span>
                  <span className="text-[11px] font-bold font-mono px-2.5 py-1 rounded-full bg-[#EAE6DD] text-[#3B4335]">
                    {pillar.metric}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#1A1C19] uppercase font-heading mb-2.5">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#52574A] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#EAE6DD] flex items-center justify-between text-xs text-[#6B7264]">
                <span className="font-medium">{pillar.metricLabel}</span>
                <CheckCircle2 className="w-4 h-4 text-[#3B4335]" />
              </div>
            </div>
          ))}

          {/* 6th Card: Google Rating & Trust Anchor */}
          <div className="bg-[#3B4335] text-white rounded-3xl p-6 sm:p-7 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#D0D6C9]">
                  VERIFIED RATING
                </span>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/15 text-white">
                  BENGALURU
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-extrabold font-heading text-white">5.0</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              <h3 className="text-lg font-bold uppercase font-heading mb-2">
                85 Google Reviews
              </h3>

              <p className="text-xs text-[#D5DBD0] leading-relaxed">
                Trusted by homeowners, builders, and developers across Bengaluru for dependable, photorealistic 2D & 3D visualizations.
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-white/15 flex items-center justify-between text-xs text-white/80">
              <span>Benson Town Studio</span>
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
