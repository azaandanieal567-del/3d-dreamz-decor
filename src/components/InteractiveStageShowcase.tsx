import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Eye, Layers, Sparkles, SlidersHorizontal } from 'lucide-react';
import { DESIGN_STAGES } from '../data/content';
import { motion, AnimatePresence } from 'motion/react';

interface InteractiveStageShowcaseProps {
  onOpenConsultation: () => void;
}

export const InteractiveStageShowcase: React.FC<InteractiveStageShowcaseProps> = ({ onOpenConsultation }) => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = DESIGN_STAGES[activeStageIndex];

  return (
    <section id="showcase" className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#3B4335] uppercase font-heading">
              THE 3D VISUALIZATION JOURNEY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1C19] tracking-tight uppercase font-heading mb-4">
            Imagine It. See It. Build It.
          </h2>
          <p className="text-sm sm:text-base text-[#52574A] leading-relaxed">
            Follow the complete design transformation from initial 2D mathematical drafting to living, photorealistic 3D interior & exterior environments.
          </p>
        </div>

        {/* Interactive Stage Step Navigator */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-8">
          {DESIGN_STAGES.map((stage, idx) => {
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-3.5 sm:p-5 rounded-2xl text-left border transition-all duration-300 relative cursor-pointer ${
                  isActive
                    ? 'bg-[#3B4335] text-white border-[#3B4335] shadow-md -translate-y-0.5'
                    : 'bg-[#FAF9F6] text-[#1E201E] border-[#E0DBD0] hover:border-[#3B4335]/40 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-bold tracking-wider ${
                      isActive ? 'text-[#D3DCCB]' : 'text-[#7B8272]'
                    }`}
                  >
                    STEP {stage.stepNumber}
                  </span>
                  {isActive && <Sparkles className="w-3.5 h-3.5 text-amber-300" />}
                </div>

                <div className="text-sm sm:text-base font-bold uppercase font-heading tracking-wide mb-1">
                  {stage.title}
                </div>
                <div
                  className={`text-[11px] truncate ${
                    isActive ? 'text-white/80' : 'text-[#646A5E]'
                  }`}
                >
                  {stage.subtitle}
                </div>

                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-[#3B4335] [clip-path:polygon(0_0,100%_0,50%_100%)] hidden md:block" />
                )}
              </button>
            );
          })}
        </div>

        {/* Stage Presentation Showcase Canvas */}
        <div className="bg-[#FAF9F6] border border-[#E0DBD0] rounded-3xl p-4 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Canvas (Left / Top) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#1E201E] border border-[#E5E0D5] shadow-inner group">
                
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentStage.id}
                    src={currentStage.image}
                    alt={`${currentStage.title} architectural visual`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Stage Tag Overlay */}
                <div className="absolute top-4 left-4 bg-[#1E201E]/80 backdrop-blur-md text-white text-xs font-mono font-bold px-3 py-1.5 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>PHASE {currentStage.stepNumber}: {currentStage.title.toUpperCase()}</span>
                </div>

                {/* Progress Indicators */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full">
                  {DESIGN_STAGES.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all ${
                        i === activeStageIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Stage Technical Explanations (Right / Bottom) */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#3B4335] uppercase mb-1 block">
                  STAGE 0{activeStageIndex + 1} OF 04
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1C19] uppercase font-heading tracking-tight">
                  {currentStage.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#3B4335] mt-1 italic">
                  {currentStage.subtitle}
                </p>
              </div>

              <p className="text-sm text-[#4E5346] leading-relaxed">
                {currentStage.description}
              </p>

              {/* Stage Highlights */}
              <div className="space-y-2.5 pt-3 border-t border-[#E8E4DA]">
                <span className="block text-[11px] font-bold tracking-wider text-[#6B7264] uppercase">
                  Stage Architectural Deliverables:
                </span>
                {currentStage.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#2E3328]">
                    <CheckCircle2 className="w-4 h-4 text-[#3B4335] mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Next Step / Consultation Action */}
              <div className="pt-4 flex items-center gap-3">
                {activeStageIndex < DESIGN_STAGES.length - 1 ? (
                  <button
                    onClick={() => setActiveStageIndex(prev => prev + 1)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B4335] hover:bg-[#2B3226] text-white text-xs font-bold tracking-wider uppercase transition-all cursor-pointer shadow-xs"
                  >
                    <span>Next: {DESIGN_STAGES[activeStageIndex + 1].title}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B4335] hover:bg-[#2B3226] text-white text-xs font-bold tracking-wider uppercase transition-all cursor-pointer shadow-xs"
                  >
                    <span>Start Your Project Journey</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                <button
                  onClick={onOpenConsultation}
                  className="px-4 py-2 text-xs font-bold text-[#3B4335] hover:text-[#1E201E] hover:underline underline-offset-4 cursor-pointer"
                >
                  Consult on this stage
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
