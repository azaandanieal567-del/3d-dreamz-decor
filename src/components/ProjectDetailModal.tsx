import React from 'react';
import { X, CheckCircle2, ArrowRight, Layers, Sparkles, MapPin, Phone, MessageSquareQuote } from 'lucide-react';
import { ProjectItem } from '../types';
import { BUSINESS_INFO } from '../data/content';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenConsultation: (serviceId?: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenConsultation,
}) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#FAF9F6] border border-[#E0DBD0] rounded-3xl overflow-hidden shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#1E201E]/80 hover:bg-black text-white flex items-center justify-center transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Render Image */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#1E201E] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="bg-[#3B4335] text-[10px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full uppercase">
                {project.categoryLabel}
              </span>
              <span className="text-xs text-[#CCD2C5]">•</span>
              <span className="text-xs text-[#CCD2C5] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#CCD2C5]" />
                {project.locationTag}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-heading">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#767E6D] uppercase block mb-1">
              PROJECT OVERVIEW
            </span>
            <p className="text-sm text-[#4E5346] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 p-4 rounded-2xl bg-[#F2EFE9] border border-[#E0DBD0]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B7264] block mb-0.5">
                Service Type
              </span>
              <span className="text-xs font-semibold text-[#1E201E]">
                {project.specs.serviceType}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B7264] block mb-0.5">
                Space Scope
              </span>
              <span className="text-xs font-semibold text-[#1E201E]">
                {project.specs.spaceType}
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B7264] block mb-0.5">
                Visualization Engine
              </span>
              <span className="text-xs font-semibold text-[#1E201E]">
                {project.specs.softwareTech || 'Photorealistic 4K 3D Engine'}
              </span>
            </div>
          </div>

          {/* Key Design Highlights */}
          <div>
            <span className="text-[11px] font-bold tracking-wider text-[#6B7264] uppercase block mb-2.5">
              Architectural & Interior Features:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#353A2E]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3B4335] shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-[#EAE6DD] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#3B4335]" />
              <a
                href={BUSINESS_INFO.phoneTel}
                className="text-xs font-bold text-[#1E201E] hover:underline"
              >
                Inquire via {BUSINESS_INFO.phone}
              </a>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenConsultation(project.category);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3B4335] hover:bg-[#2B3226] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
            >
              <MessageSquareQuote className="w-4 h-4" />
              <span>Get Similar Project Estimate</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
