import React from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const LocationMapSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[#F3EFE9] border-t border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#3B4335] uppercase font-heading">
              STUDIO LOCATION & ACCESSIBILITY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1C19] tracking-tight uppercase font-heading">
            Visit 3D Dreamz Decor
          </h2>
          <p className="text-sm sm:text-base text-[#52574A] mt-3 leading-relaxed">
            Conveniently situated in Benson Town, Bengaluru. Visit our studio to review samples, 3D architectural renders, and 2D blueprints in person.
          </p>
        </div>

        {/* Studio Info + Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Studio Location Card (Left) */}
          <div className="lg:col-span-5 bg-[#FAF9F6] border border-[#E0DBD0] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              
              {/* Studio Name & Area */}
              <div>
                <span className="text-xs font-mono font-bold text-[#767E6D] uppercase tracking-wider block mb-1">
                  STUDIO HEADQUARTERS
                </span>
                <h3 className="text-2xl font-bold text-[#1A1C19] uppercase font-heading">
                  3D Dreamz Decor
                </h3>
                <p className="text-xs font-semibold text-[#3B4335] mt-1">
                  Benson Town, Bengaluru, Karnataka
                </p>
              </div>

              {/* Exact Address */}
              <div className="pt-4 border-t border-[#EAE6DD] flex items-start gap-3 text-xs sm:text-sm text-[#464B3F]">
                <MapPin className="w-5 h-5 text-[#3B4335] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1E201E] block mb-0.5">Address:</span>
                  <p className="leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="pt-4 border-t border-[#EAE6DD] flex items-start gap-3 text-xs sm:text-sm text-[#464B3F]">
                <Clock className="w-5 h-5 text-[#3B4335] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1E201E] block mb-0.5">Studio Hours:</span>
                  <p className="leading-relaxed font-medium text-emerald-800">
                    {BUSINESS_INFO.businessHours}
                  </p>
                  <p className="text-[11px] text-[#6B7264] mt-0.5">
                    {BUSINESS_INFO.businessHoursFull}
                  </p>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="pt-4 border-t border-[#EAE6DD] space-y-2 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#3B4335]" />
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="font-bold text-[#1E201E] hover:text-[#3B4335] transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

            </div>

            {/* Direction Action */}
            <div className="pt-6 mt-6 border-t border-[#EAE6DD]">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#3B4335] hover:bg-[#2B3226] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed Container (Right) */}
          <div className="lg:col-span-7 bg-[#FAF9F6] border border-[#E0DBD0] rounded-3xl overflow-hidden shadow-xs min-h-[380px] sm:min-h-[440px] relative">
            <iframe
              title="3D Dreamz Decor Bengaluru Studio Map Location"
              src={BUSINESS_INFO.embedMapUrl}
              className="w-full h-full min-h-[380px] sm:min-h-[440px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Map Overlay Badge */}
            <div className="absolute bottom-4 left-4 bg-[#F8F7F4]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#E0DBD0] shadow-sm max-w-xs pointer-events-none">
              <span className="text-[11px] font-mono font-bold text-[#3B4335] uppercase block">
                Benson Town, Bengaluru
              </span>
              <span className="text-xs font-bold text-[#1E201E]">
                3D Dreamz Decor Design Studio
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
