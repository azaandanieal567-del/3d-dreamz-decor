import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, MessageSquareQuote } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface NavbarProps {
  onOpenConsultation: (initialService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setMobileMenuOpen(false);
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
    <header className="relative w-full z-50 pt-3 sm:pt-4 pb-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-full px-5 sm:px-7 py-3 flex items-center justify-between border bg-[#F8F7F4]/90 backdrop-blur-md border-[#E6E2D8] shadow-xs">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#3B4335] text-white flex items-center justify-center font-semibold text-xs tracking-wider group-hover:bg-[#2A3125] transition-colors shadow-xs">
              3D
            </div>
            <div>
              <span className="block text-sm sm:text-base font-bold tracking-wider text-[#1E201E] uppercase font-heading leading-tight">
                3D Dreamz Decor
              </span>
              <span className="block text-[10px] tracking-widest text-[#6B7264] uppercase font-medium">
                Design & 3D Visualization Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs lg:text-sm font-medium tracking-wide text-[#3C4035] hover:text-[#1E201E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#3B4335] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wide text-[#3C4035] hover:text-[#1E201E] transition-colors rounded-full hover:bg-[#EBE7DF]"
              title="Call Studio"
            >
              <Phone className="w-3.5 h-3.5 text-[#3B4335]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B4335] hover:bg-[#2B3226] text-[#F8F7F4] text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs hover:shadow hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="p-2 rounded-full bg-[#EBE7DF] text-[#3B4335]"
              aria-label="Call Studio"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#1E201E] hover:bg-[#EBE7DF] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 mx-auto max-w-7xl">
          <div className="bg-[#F8F7F4] border border-[#E6E2D8] rounded-2xl p-5 shadow-lg space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2 text-sm font-semibold text-[#2D3326] hover:bg-[#EBE7DF] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#E6E2D8] flex flex-col gap-2.5">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#EBE7DF] text-xs font-semibold text-[#2D3326]"
              >
                <Phone className="w-4 h-4 text-[#3B4335]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#3B4335] text-white text-xs font-bold tracking-wide flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquareQuote className="w-4 h-4" />
                <span>Start Your Project</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
