import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenConsultation: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-28 bg-[#F3EFE9] border-y border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#3B4335] uppercase font-heading">
                OUR PRIMARY SERVICES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1C19] tracking-tight uppercase font-heading">
              What We Create
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#52574A] max-w-md leading-relaxed">
            From technical spatial foundations to photorealistic visual journeys, we engineer each design phase with precision and architectural beauty.
          </p>
        </div>

        {/* 4 Primary Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-[#FAF9F6] border border-[#E0DBD0] rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Canvas with Number Tag */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1E201E]">
                <img
                  src={service.image}
                  alt={`${service.title} - 3D Dreamz Decor`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4 bg-[#F8F7F4]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E6E2D8] shadow-xs">
                  <span className="text-xs font-mono font-extrabold text-[#1E201E] tracking-wider">
                    {service.number}
                  </span>
                </div>

                {/* Service Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="bg-[#1E201E]/80 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider px-3 py-1 rounded-full uppercase">
                    {service.title}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-[#767E6D]">SERVICE {service.number}</span>
                    <span className="text-[#C5BFB2]">•</span>
                    <span className="text-xs font-medium text-[#3B4335] italic">"{service.tagline}"</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A1C19] uppercase tracking-wide font-heading mb-3 group-hover:text-[#3B4335] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#4E5346] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#EAE6DD]">
                    <span className="block text-[11px] font-bold tracking-wider text-[#6B7264] uppercase mb-2">
                      Key Deliverables:
                    </span>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#3E4336]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3B4335] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#EAE6DD] flex items-center justify-between">
                  <span className="text-[11px] text-[#6E7567] font-medium hidden sm:inline">
                    {service.idealFor.slice(0, 45)}...
                  </span>

                  <button
                    onClick={() => onOpenConsultation(service.id)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B4335] hover:bg-[#2B3226] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-xs ml-auto cursor-pointer"
                  >
                    <span>Request {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
