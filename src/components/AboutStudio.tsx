import React from 'react';
import { Check, MapPin, Eye, Compass, Layers, Sparkles, Star, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { motion } from 'motion/react';

interface AboutStudioProps {
  onOpenConsultation: () => void;
}

export const AboutStudio: React.FC<AboutStudioProps> = ({ onOpenConsultation }) => {
  const pillars = [
    { label: 'Visualization', desc: 'Photorealistic 3D rendering that reveals light, depth & materials.' },
    { label: 'Planning', desc: 'Precise 2D layouts optimizing traffic circulation and space utility.' },
    { label: 'Design', desc: 'Cohesive architectural language from external facade to private bedrooms.' },
    { label: 'Detail', desc: 'Millimeter accuracy for flawless contractor execution on-site.' },
    { label: 'Functionality', desc: 'Ergonomic zoning that matches how you live and interact daily.' },
    { label: 'Aesthetics', desc: 'Sophisticated palettes, bespoke textures, and balanced proportions.' },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Showcase: Left Column Laptop/Device Architectural Perspective (Matching Reference Image Style) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              
              {/* Main Architectural Visual Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-[#E0DBD0] shadow-md bg-white p-3 sm:p-4">
                
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-[#1E201E]">
                  <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                    alt="3D Dreamz Decor Interior Visualization Showcase on Display"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Floating Digital Badge */}
                  <div className="absolute top-4 left-4 bg-[#F8F7F4]/90 backdrop-blur-md rounded-xl py-2 px-3 border border-[#E6E2D8] shadow-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                      <span className="text-[11px] font-bold tracking-wider text-[#1E201E] uppercase font-heading">
                        3D Dreamz Decor
                      </span>
                    </div>
                    <span className="text-[10px] text-[#5C6057]">Bengaluru Studio Render</span>
                  </div>

                  {/* Rating Tag */}
                  <div className="absolute bottom-4 right-4 bg-[#1E201E]/80 backdrop-blur-md text-white rounded-xl py-2 px-3 border border-white/10 shadow-sm flex items-center gap-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold">5.0</span>
                  </div>
                </div>

                {/* Perspective Sub-Bar (Mirroring the reference design's desk setting) */}
                <div className="mt-3.5 pt-3 border-t border-[#EAE6DE] flex items-center justify-between px-1 text-xs text-[#5D6356]">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#3B4335]" />
                    <span className="font-semibold text-[#1E201E]">Benson Town, Bengaluru</span>
                  </div>
                  <span className="text-[11px] bg-[#EAE6DD] text-[#3B4335] px-2.5 py-0.5 rounded-full font-bold">
                    85 Google Reviews
                  </span>
                </div>
              </div>

              {/* Secondary Floating Accent Card */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-[#FAF9F6] border border-[#DCD6C9] rounded-2xl p-4 shadow-lg max-w-[240px]">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-[#3B4335] text-white flex items-center justify-center text-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#1E201E]">End-to-End Design</span>
                </div>
                <p className="text-[11px] text-[#5C6057] leading-tight">
                  2D Architectural Layouts to Photorealistic 4K 3D Views.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#3B4335] uppercase font-heading">
                ABOUT 3D DREAMZ DECOR
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1A1C19] tracking-tight leading-[1.15] font-heading uppercase">
              Designing Ideas Before They Become Reality.
            </h2>

            {/* Main Statement */}
            <p className="text-base sm:text-lg text-[#3E4237] leading-relaxed font-normal">
              3D Dreamz Decor brings concepts to life through detailed planning, architectural visualization, exterior design, and interior design. From the initial 2D plan to realistic 3D visualizations, every design is developed to help clients see and understand their space before it becomes reality.
            </p>

            <p className="text-sm text-[#5D6356] leading-relaxed">
              Based in Benson Town, Bengaluru, our studio bridges the gap between abstract architectural drawings and real-world construction. We give homeowners, builders, and developers complete visual clarity on light, materials, finishes, and proportions before execution begins.
            </p>

            {/* 6 Design Pillars Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {pillars.map((pillar) => (
                <div
                  key={pillar.label}
                  className="bg-[#FAF9F6] border border-[#E6E2D8] rounded-xl p-3 hover:border-[#3B4335]/40 transition-colors"
                >
                  <span className="block text-xs font-bold text-[#1E201E] tracking-wider uppercase font-heading mb-1">
                    {pillar.label}
                  </span>
                  <span className="block text-[11px] text-[#656B5D] leading-snug">
                    {pillar.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#3B4335] hover:bg-[#2B3226] text-white text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all shadow-sm cursor-pointer"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#3B4335] hover:underline underline-offset-4"
              >
                <span>Direct Studio Call: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
