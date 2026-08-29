import React, { useState } from 'react';
import { X, Phone, MessageCircle, Send, CheckCircle2, Sparkles, Building2, LayoutGrid, Armchair, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = '3D Interior Design',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: initialService,
    propertyType: 'Residential Apartment',
    areaSize: '1,500 - 2,500 sq.ft',
    location: 'Bengaluru',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const message = encodeURIComponent(
      `Hello 3D Dreamz Decor!\n\nI would like to request a 2D/3D project consultation.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service Required:* ${formData.serviceType}\n*Property Type:* ${formData.propertyType}\n*Estimated Size:* ${formData.areaSize}\n*Location:* ${formData.location}\n*Scope/Notes:* ${formData.notes || 'Looking forward to reviewing options.'}`
    );

    window.open(`https://wa.me/919916118119?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#FAF9F6] border border-[#E0DBD0] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#EAE6DD] hover:bg-[#DDD7CB] text-[#1E201E] flex items-center justify-center transition-colors focus:outline-none"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#3B4335]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#3B4335] uppercase font-heading">
              3D DREAMZ DECOR BENGALURU
            </span>
          </div>
          <h3 className="text-2xl font-extrabold text-[#1A1C19] uppercase font-heading">
            Start Your Project Consultation
          </h3>
          <p className="text-xs text-[#5D6356] mt-1">
            Fill in your project specifics to receive a tailored 2D/3D visualization estimate.
          </p>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#3B4335] text-white mx-auto flex items-center justify-center shadow-md">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-[#1A1C19] font-heading">
              Consultation Initiated!
            </h4>
            <p className="text-xs sm:text-sm text-[#52574A] max-w-sm mx-auto">
              Your inquiry has been generated for WhatsApp. Our design team from Benson Town, Bengaluru will review your specifications.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#3B4335] text-white text-xs font-bold uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#3B4335] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Anand Menon"
                  className="w-full bg-white border border-[#D5CFC4] focus:border-[#3B4335] rounded-xl px-3.5 py-2.5 text-xs text-[#1E201E] placeholder:text-[#9A9F93] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#3B4335] mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 099161 18119"
                  className="w-full bg-white border border-[#D5CFC4] focus:border-[#3B4335] rounded-xl px-3.5 py-2.5 text-xs text-[#1E201E] placeholder:text-[#9A9F93] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Service & Property Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#3B4335] mb-1">
                  Service Scope *
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-white border border-[#D5CFC4] focus:border-[#3B4335] rounded-xl px-3 py-2.5 text-xs text-[#1E201E] focus:outline-none"
                >
                  <option value="2D Plan">2D Plan</option>
                  <option value="3D Elevation">3D Elevation</option>
                  <option value="3D Exterior Design">3D Exterior Design</option>
                  <option value="3D Interior Design">3D Interior Design</option>
                  <option value="Complete Package (2D + 3D)">Complete Package (2D + 3D)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#3B4335] mb-1">
                  Property Type
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full bg-white border border-[#D5CFC4] focus:border-[#3B4335] rounded-xl px-3 py-2.5 text-xs text-[#1E201E] focus:outline-none"
                >
                  <option value="Residential Apartment / Flat">Residential Apartment / Flat</option>
                  <option value="Independent Villa / Bungalow">Independent Villa / Bungalow</option>
                  <option value="Plot / G+2 House">Plot / G+2 House</option>
                  <option value="Commercial Office / Retail">Commercial Office / Retail</option>
                  <option value="Renovation / Remodeling">Renovation / Remodeling</option>
                </select>
              </div>
            </div>

            {/* Area Size & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#3B4335] mb-1">
                  Approximate Area (sq.ft)
                </label>
                <select
                  value={formData.areaSize}
                  onChange={(e) => setFormData({ ...formData, areaSize: e.target.value })}
                  className="w-full bg-white border border-[#D5CFC4] focus:border-[#3B4335] rounded-xl px-3 py-2.5 text-xs text-[#1E201E] focus:outline-none"
                >
                  <option value="Under 1,000 sq.ft">Under 1,000 sq.ft</option>
                  <option value="1,000 - 1,800 sq.ft">1,000 - 1,800 sq.ft</option>
                  <option value="1,800 - 3,000 sq.ft">1,800 - 3,000 sq.ft</option>
                  <option value="3,000 - 5,000+ sq.ft">3,000 - 5,000+ sq.ft</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#3B4335] mb-1">
                  Project Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Benson Town, Indiranagar, Whitefield..."
                  className="w-full bg-white border border-[#D5CFC4] focus:border-[#3B4335] rounded-xl px-3.5 py-2.5 text-xs text-[#1E201E] placeholder:text-[#9A9F93] focus:outline-none"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#3B4335] mb-1">
                Project Vision or Key Requirements (Optional)
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention any specific styles (e.g. warm minimalist, modern elevation, modular kitchen)..."
                className="w-full bg-white border border-[#D5CFC4] focus:border-[#3B4335] rounded-xl px-3.5 py-2 text-xs text-[#1E201E] placeholder:text-[#9A9F93] focus:outline-none resize-none"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-[#3B4335] hover:bg-[#2B3226] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send via WhatsApp & Connect</span>
                <Send className="w-4 h-4" />
              </button>
            </div>

            {/* Direct Call Fallback */}
            <div className="text-center pt-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-1.5 text-xs text-[#3B4335] hover:underline font-semibold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Or call the studio directly at {BUSINESS_INFO.phone}</span>
              </a>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};
