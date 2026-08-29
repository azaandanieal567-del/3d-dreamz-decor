import React from 'react';
import { Phone, MapPin, Clock, ArrowUp, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#141613] text-[#F8F7F4] border-t border-[#252A22] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#252A22]">
          
          {/* Brand & Studio Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#3B4335] text-white flex items-center justify-center font-bold text-xs tracking-wider">
                3D
              </div>
              <span className="text-lg font-bold tracking-wider uppercase font-heading text-white">
                3D Dreamz Decor
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#9CA296] leading-relaxed max-w-md">
              From 2D Plans to 3D Dreams. Professional 2D floor plans, 3D architectural elevations, exterior facade renders, and luxury interior visualizations based in Benson Town, Bengaluru.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#CCD2C5]">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold">5.0 Star Rating</span>
              <span className="text-[#888E81]">({BUSINESS_INFO.reviewCount} Google Reviews)</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#888E81] uppercase">
              NAVIGATION
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs sm:text-sm text-[#CCD2C5] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contact & Location Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#888E81] uppercase">
              STUDIO INFORMATION
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#CCD2C5]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#88947D] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  65, Millers Rd, near Khadaria Masjid, Cantonment Railway Quarters, Benson Town, Bengaluru, Karnataka 560046
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#88947D] shrink-0" />
                <a href={BUSINESS_INFO.phoneTel} className="font-bold hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#88947D] shrink-0" />
                <span className="text-emerald-400 font-medium">
                  {BUSINESS_INFO.businessHours}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A8074]">
          <p>© 2026 3D Dreamz Decor. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4">
            <span>Benson Town, Bengaluru, Karnataka</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#CCD2C5] hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
