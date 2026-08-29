import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="process" className="py-16 sm:py-24 lg:py-28 bg-[#F8F7F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#3B4335] uppercase font-heading">
              OUR 5-STAGE WORKFLOW
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1C19] tracking-tight uppercase font-heading mb-4">
            From Concept To Visualization.
          </h2>
          <p className="text-sm sm:text-base text-[#52574A] leading-relaxed">
            A structured, collaborative design path ensuring absolute clarity, zero construction misunderstandings, and unmatched aesthetic fidelity.
          </p>
        </div>

        {/* Desktop Horizontal Process Timeline / Mobile Vertical Timeline */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative">
          
          {/* Connecting Horizontal Line */}
          <div className="absolute top-[38px] left-[10%] right-[10%] h-[2px] bg-[#E0DBD0] z-0" />

          {PROCESS_STEPS.map((item, idx) => (
            <div key={item.step} className="relative z-10 flex flex-col items-center text-center group">
              
              {/* Step Circle */}
              <div className="w-16 h-16 rounded-2xl bg-[#FAF9F6] border-2 border-[#D5CFC4] text-[#1E201E] group-hover:border-[#3B4335] group-hover:bg-[#3B4335] group-hover:text-white transition-all duration-300 flex items-center justify-center font-mono font-extrabold text-lg shadow-xs mb-6">
                {item.step}
              </div>

              {/* Step Card Content */}
              <div className="bg-[#FAF9F6] border border-[#E0DBD0] rounded-2xl p-5 w-full flex-1 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <h3 className="text-base font-bold text-[#1A1C19] uppercase font-heading mb-1 group-hover:text-[#3B4335] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[11px] font-medium text-[#6B7264] italic block mb-3">
                    {item.tagline}
                  </span>
                  <p className="text-xs text-[#52574A] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8E4DA] text-left">
                  <span className="block text-[10px] font-bold text-[#767E6D] uppercase mb-1">
                    Deliverable:
                  </span>
                  <span className="text-[11px] font-semibold text-[#2D3326] block leading-tight">
                    {item.output}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-4">
          {PROCESS_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="bg-[#FAF9F6] border border-[#E0DBD0] rounded-2xl p-5 sm:p-6 shadow-xs flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-[#3B4335] text-white flex items-center justify-center font-mono font-bold text-sm shrink-0 shadow-xs">
                {item.step}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#1A1C19] uppercase font-heading">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-mono text-[#767E6D] px-2 py-0.5 bg-[#EAE6DD] rounded-md font-bold">
                    STAGE {item.step}
                  </span>
                </div>
                
                <p className="text-xs font-medium text-[#3B4335] mb-2 italic">
                  {item.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#52574A] leading-relaxed mb-3">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-[#E8E4DA] flex items-center gap-1.5 text-xs text-[#2D3326] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3B4335]" />
                  <span>{item.output}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#3B4335] hover:bg-[#2B3226] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
          >
            <span>Initiate Stage 01: Discover</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
