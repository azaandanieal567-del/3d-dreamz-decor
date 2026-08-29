import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutStudio } from './components/AboutStudio';
import { ServicesSection } from './components/ServicesSection';
import { InteractiveStageShowcase } from './components/InteractiveStageShowcase';
import { FeaturedProjects } from './components/FeaturedProjects';
import { DesignPhilosophy } from './components/DesignPhilosophy';
import { ProcessSection } from './components/ProcessSection';
import { WhyUs } from './components/WhyUs';
import { GoogleTrustSection } from './components/GoogleTrustSection';
import { LocationMapSection } from './components/LocationMapSection';
import { ContactCtaSection } from './components/ContactCtaSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProjectItem } from './types';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState<string | undefined>();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenConsultation = (service?: string) => {
    setConsultationService(service);
    setIsConsultationOpen(true);
  };

  const handleScrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#1E201E] flex flex-col selection:bg-[#3B4335] selection:text-white">
      {/* Floating Pill Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onExploreClick={handleScrollToProjects}
        />

        {/* About Studio */}
        <AboutStudio onOpenConsultation={() => handleOpenConsultation()} />

        {/* Primary Services (What We Create) */}
        <ServicesSection onOpenConsultation={(svc) => handleOpenConsultation(svc)} />

        {/* Interactive 3D Visualization Showcase (2D Plan -> 3D Elevation -> 3D Exterior -> 3D Interior) */}
        <InteractiveStageShowcase onOpenConsultation={() => handleOpenConsultation()} />

        {/* Featured Projects Portfolio */}
        <FeaturedProjects
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Design Philosophy */}
        <DesignPhilosophy />

        {/* 5-Step Process Timeline */}
        <ProcessSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* Why 3D Dreamz Decor */}
        <WhyUs />

        {/* Google Trust & Reviews */}
        <GoogleTrustSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* Studio Location & Map */}
        <LocationMapSection />

        {/* Closing Contact CTA & Direct Actions */}
        <ContactCtaSection onOpenConsultation={(svc) => handleOpenConsultation(svc)} />
      </main>

      {/* Minimalist Studio Footer */}
      <Footer />

      {/* Interactive Consultation Request Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialService={consultationService}
      />

      {/* High-Res Project Detail Lightbox Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={(cat) => handleOpenConsultation(cat)}
      />
    </div>
  );
}
