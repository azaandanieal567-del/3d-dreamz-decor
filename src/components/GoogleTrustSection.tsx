import React from 'react';
import { Star, ShieldCheck, ExternalLink, MessageSquareQuote } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface GoogleTrustSectionProps {
  onOpenConsultation: () => void;
}

export const GoogleTrustSection: React.FC<GoogleTrustSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-14 sm:py-18 bg-[#FAF9F6] border-t border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FAF9F6] border border-[#E0DBD0] rounded-3xl p-6 sm:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left: Star Rating and Badges */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
            
            <div className="w-20 h-20 rounded-2xl bg-[#3B4335] text-white flex flex-col items-center justify-center font-heading shrink-0 shadow-sm">
              <span className="text-3xl font-extrabold leading-none">{BUSINESS_INFO.googleRating}</span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#CCD4C5] mt-1">RATING</span>
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#1A1C19] uppercase font-heading">
                {BUSINESS_INFO.reviewCount} Google Reviews
              </h3>

              <p className="text-xs sm:text-sm text-[#5D6356] mt-1">
                Verified 5.0 Star studio based in Benson Town, Bengaluru, Karnataka.
              </p>
            </div>

          </div>

          {/* Right: Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FAF9F6] hover:bg-white text-[#1E201E] border border-[#D5CFC4] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-xs hover:shadow cursor-pointer"
            >
              <span>View Our Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#3B4335]" />
            </a>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#3B4335] hover:bg-[#2B3226] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-xs hover:shadow cursor-pointer"
            >
              <MessageSquareQuote className="w-4 h-4" />
              <span>Discuss Your Project</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
