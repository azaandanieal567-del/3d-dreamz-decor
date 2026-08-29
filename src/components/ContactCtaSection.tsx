import React, { useState } from 'react';
import { Phone, MessageCircle, Navigation, Clock, MapPin, Send, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/content';

interface ContactCtaSectionProps {
  onOpenConsultation: (initialService?: string) => void;
}

export const ContactCtaSection: React.FC<ContactCtaSectionProps> = ({ onOpenConsultation }) => {
  const [quickForm, setQuickForm] = useState({
    name: '',
    phone: '',
    service: '3D Interior Design',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickForm.name || !quickForm.phone) return;

    // Trigger direct WhatsApp message with prefilled query
    const text = encodeURIComponent(
      `Hello 3D Dreamz Decor!\n\n*Name:* ${quickForm.name}\n*Phone:* ${quickForm.phone}\n*Requested Service:* ${quickForm.service}\n*Project Note:* ${quickForm.message || 'I would like to get a quote/consultation.'}`
    );
    window.open(`https://wa.me/919916118119?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Dramatic CTA Container */}
        <div className="bg-[#1A1C19] text-[#F8F7F4] rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-16 border border-[#2D3328] shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Light Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B4335]/30 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Narrative & Quick Actions */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#9CA990] uppercase font-heading">
                  START YOUR PROJECT TODAY
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase font-heading text-white leading-[1.12]">
                Ready To Visualize Your Dream Space?
              </h2>

              <p className="text-base sm:text-lg text-[#CCD2C5] leading-relaxed font-normal">
                Let's turn your ideas into detailed plans and realistic 3D designs. Connect with our Benson Town studio for 2D blueprints, 3D elevations, exterior facade renders, and luxury interiors.
              </p>

              {/* Three Primary Actions (Call Now, WhatsApp, Get Directions) */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#3B4335] hover:bg-[#4B5543] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now ({BUSINESS_INFO.phone})</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-black fill-current" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#2A2E26] hover:bg-[#343930] text-[#E0E5D9] border border-[#3E4537] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Verified Studio Details Snapshot */}
              <div className="pt-6 border-t border-[#2D3328] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#A1A79B]">
                <div>
                  <span className="font-bold text-white block mb-0.5">Address:</span>
                  <p className="leading-snug">{BUSINESS_INFO.address}</p>
                </div>
                <div>
                  <span className="font-bold text-white block mb-0.5">Studio Hours:</span>
                  <p className="text-emerald-400 font-semibold">{BUSINESS_INFO.businessHours}</p>
                  <p className="text-[#A1A79B] mt-0.5">{BUSINESS_INFO.businessHoursFull}</p>
                </div>
              </div>

            </div>

            {/* Right Quick Inquiry Form Card */}
            <div className="lg:col-span-6 bg-[#222620] border border-[#363C30] rounded-3xl p-6 sm:p-8 shadow-xl">
              
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono font-bold tracking-wider text-[#9CA990] uppercase">
                  DIRECT CONSULTATION REQUEST
                </span>
                <span className="text-[10px] bg-[#3B4335] text-white px-2.5 py-0.5 rounded-full font-bold">
                  FAST RESPONSE
                </span>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading">
                    Consultation Initiated!
                  </h3>
                  <p className="text-xs text-[#CCD2C5] max-w-sm mx-auto">
                    Your project details have been prepared for WhatsApp. Our Benson Town visualization team will connect with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 text-xs font-bold text-[#9CA990] hover:underline"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#CCD2C5] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={quickForm.name}
                      onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-[#181B16] border border-[#363C30] focus:border-[#9CA990] rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-[#5E6457] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#CCD2C5] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={quickForm.phone}
                        onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                        placeholder="e.g. 099161 18119"
                        className="w-full bg-[#181B16] border border-[#363C30] focus:border-[#9CA990] rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-[#5E6457] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#CCD2C5] mb-1">
                        Primary Service *
                      </label>
                      <select
                        value={quickForm.service}
                        onChange={(e) => setQuickForm({ ...quickForm, service: e.target.value })}
                        className="w-full bg-[#181B16] border border-[#363C30] focus:border-[#9CA990] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none transition-colors"
                      >
                        <option value="2D Plan">2D Plan</option>
                        <option value="3D Elevation">3D Elevation</option>
                        <option value="3D Exterior Design">3D Exterior Design</option>
                        <option value="3D Interior Design">3D Interior Design</option>
                        <option value="Complete Package (2D + 3D)">Complete Package (2D + 3D)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#CCD2C5] mb-1">
                      Project Notes / Scope (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={quickForm.message}
                      onChange={(e) => setQuickForm({ ...quickForm, message: e.target.value })}
                      placeholder="e.g. 3BHK flat in Bengaluru / 30x40 villa elevation..."
                      className="w-full bg-[#181B16] border border-[#363C30] focus:border-[#9CA990] rounded-xl px-4 py-2 text-xs text-white placeholder:text-[#5E6457] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#3B4335] hover:bg-[#4A5443] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                  >
                    <span>Submit & Connect on WhatsApp</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-center text-[#7F8677]">
                    You can also call us directly anytime at{' '}
                    <a href={BUSINESS_INFO.phoneTel} className="text-white font-bold underline">
                      {BUSINESS_INFO.phone}
                    </a>
                  </p>
                </form>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
