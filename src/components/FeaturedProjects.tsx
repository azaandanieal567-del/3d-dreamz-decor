import React, { useState } from 'react';
import { ArrowRight, Eye, Sparkles, Filter, Maximize2 } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/content';
import { ProjectCategory, ProjectItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface FeaturedProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenConsultation: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject, onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: '3d-interiors', label: '3D Interiors' },
    { key: '3d-exteriors', label: '3D Exteriors' },
    { key: 'elevations', label: 'Elevations' },
    { key: 'floor-plans', label: 'Floor Plans' },
    { key: 'residential', label: 'Residential' },
    { key: 'commercial', label: 'Commercial' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === activeCategory || p.type.toLowerCase() === activeCategory);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-28 bg-[#FAF9F6] border-t border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#3B4335] uppercase font-heading">
                PORTFOLIO SHOWCASE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1C19] tracking-tight uppercase font-heading">
              Visualized With Precision.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#52574A] max-w-md leading-relaxed">
            Explore architectural elevations, residential luxury interiors, realistic exteriors, and spatial 2D blueprints crafted with uncompromising accuracy.
          </p>
        </div>

        {/* Filter Tabs (Horizontal Pill scroll on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#3B4335] text-white shadow-xs'
                  : 'bg-[#EFECE6] text-[#4F5547] hover:bg-[#E2DDD3] hover:text-[#1E201E]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid / Masonry Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative bg-white border border-[#E0DBD0] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-500 cursor-pointer flex flex-col justify-between"
                onClick={() => onSelectProject(project)}
              >
                {/* Image Container with Hover Scale & Overlay */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1E201E]">
                  <img
                    src={project.image}
                    alt={`${project.title} - 3D Dreamz Decor`}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Dark Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="bg-[#FAF9F6]/90 backdrop-blur-md text-[#1E201E] text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase border border-[#E0DBD0]">
                      {project.categoryLabel}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md text-[#1E201E] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] font-mono tracking-widest text-[#E6E2D8] uppercase block mb-1">
                      {project.locationTag}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white uppercase font-heading tracking-wide">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Info Snippet */}
                <div className="p-5 sm:p-6 bg-white flex-1 flex flex-col justify-between">
                  <p className="text-xs text-[#52574A] leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="pt-3 border-t border-[#EAE6DD] flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-[#6B7264] font-medium">
                      {project.specs.spaceType}
                    </span>

                    <span className="text-[#3B4335] font-bold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      View Specs <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA to start project */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#5D6356] mb-4">
            Have a custom floor plan or elevation you would like visualized in 4K?
          </p>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#3B4335] hover:bg-[#2B3226] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
          >
            <span>Request Custom 3D Project Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
