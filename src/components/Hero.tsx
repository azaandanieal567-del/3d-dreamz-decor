import React from 'react';
import { ArrowRight, Phone, MessageSquareQuote, CheckCircle2, Sparkles, Star } from 'lucide-react';
import { BUSINESS_INFO, QUICK_HIGHLIGHTS } from '../data/content';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreClick }) => {
  return (
    <section id="home" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Container with Cinematic Image Canvas */}
        <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden border border-[#E6E2D8] shadow-sm bg-[#EFECE6] min-h-[560px] sm:min-h-[640px] lg:min-h-[700px] flex flex-col justify-between">
          
          {/* Background Architectural Render Visual */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
              alt="3D Dreamz Decor photorealistic modern architectural and interior visualization"
              className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
              loading="eager"
            />
            {/* Subtle Gradient Overlays for High Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F4]/95 via-[#F8F7F4]/75 to-transparent sm:w-[65%] lg:w-[58%] z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E201E]/40 via-transparent to-transparent sm:hidden z-10" />
          </div>

          {/* Hero Content Overlay */}
          <div className="relative z-20 p-6 sm:p-10 lg:p-14 max-w-2xl flex-1 flex flex-col justify-center">
            
            {/* Studio Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4 sm:mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#3B4335]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#3B4335] uppercase font-heading">
                Bengaluru • Benson Town Design Studio
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A1C19] tracking-tight leading-[1.08] uppercase mb-4 sm:mb-6 font-heading"
            >
              FROM 2D PLANS <br className="hidden sm:block" />
              <span className="text-[#3B4335]">TO 3D DREAMS.</span>
            </motion.h1>

            {/* Subtitle / Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-[#44483E] leading-relaxed max-w-xl mb-7 sm:mb-9 font-normal"
            >
              {BUSINESS_INFO.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#3B4335] hover:bg-[#2B3226] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore Our Designs</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-[#F8F7F4]/90 hover:bg-white text-[#1E201E] border border-[#D5CFC4] text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs hover:shadow hover:-translate-y-0.5 active:translate-y-0 cursor-pointer backdrop-blur-xs"
              >
                <MessageSquareQuote className="w-4 h-4 text-[#3B4335]" />
                <span>Start Your Project</span>
              </button>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-[#1E201E] hover:text-[#3B4335] transition-colors"
                title="Call 099161 18119"
              >
                <Phone className="w-4 h-4 text-[#3B4335]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </motion.div>

            {/* Trust Pill Underneath Hero */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 pt-6 border-t border-[#E6E2D8]/80 flex flex-wrap items-center gap-4 text-xs text-[#52574A]"
            >
              <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-full border border-[#E6E2D8]">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-[#1E201E]">{BUSINESS_INFO.googleRating}</span>
                <span className="text-[#6B7264]">({BUSINESS_INFO.reviewCount} Google Reviews)</span>
              </div>
              <span className="hidden sm:inline text-[#B5AEA1]">•</span>
              <span className="font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3B4335]" />
                Benson Town, Bengaluru
              </span>
              <span className="hidden sm:inline text-[#B5AEA1]">•</span>
              <span className="font-medium text-[#2E6B3E]">Open · Closes 7 PM</span>
            </motion.div>
          </div>
        </div>

        {/* 4-Pillar Floating Feature Bar (Recreating the exact card structure in reference image) */}
        <div className="relative z-30 -mt-6 sm:-mt-10 lg:-mt-12 mx-auto max-w-6xl px-2 sm:px-4">
          <div className="bg-[#FAF9F6] border border-[#E0DBD0] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 shadow-md backdrop-blur-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E0D5]">
              
              {QUICK_HIGHLIGHTS.map((item, idx) => (
                <div
                  key={item.title}
                  className={`p-3 sm:p-4 lg:p-5 flex flex-col justify-between group transition-colors hover:bg-white/60 rounded-xl ${
                    idx === 0 ? 'sm:pl-2' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="text-[11px] font-mono tracking-widest text-[#7B8272] uppercase font-bold">
                        {item.number}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#EAE6DD] text-[#3B4335]">
                        Core
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-[#1A1C19] uppercase tracking-wide font-heading mb-1 group-hover:text-[#3B4335] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-[#3B4335] mb-1.5 italic">
                      "{item.subtitle}"
                    </p>
                    <p className="text-xs text-[#5D6356] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
