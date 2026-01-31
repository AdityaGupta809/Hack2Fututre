import React from 'react';
import { ContactCard } from './ui/Card.jsx';

const ContactSection = () => (
  <section id="contact" className="grid lg:grid-cols-2 gap-[40px] md:gap-[60px] p-[40px_20px] md:p-[60px_24px] lg:p-[80px_60px] border-t border-[rgba(167,139,250,0.2)] relative overflow-hidden">
    {/* Section nebula glow */}
    <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[radial-gradient(circle,rgba(244,114,182,0.1)_0%,transparent_60%)] rounded-full right-0 top-1/2 -translate-y-1/2 blur-[60px] md:blur-[80px] pointer-events-none"></div>

    <div className="relative z-10">
      <h2 className="font-['Orbitron'] text-[28px] sm:text-[36px] md:text-[48px] font-bold tracking-[2px] md:tracking-[3px] mb-[10px]">
        <span className="flex items-center gap-2 md:gap-3">
          <span className="text-[#a855f7] text-[20px] md:text-[32px]">◈</span>
          ESTABLISH
        </span>
        <span className="bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#f472b6] bg-clip-text text-transparent block [filter:drop-shadow(0_0_30px_rgba(168,85,247,0.5))]">UPLINK</span>
      </h2>
      <p className="text-[14px] md:text-[16px] leading-[1.7] text-[rgba(255,255,255,0.6)] mb-[30px] md:mb-[40px] max-w-[400px]">
        Transmission lines are open. Contact command center for partnership inquiries or technical support.
      </p>
      <div className="flex gap-[12px] md:gap-[15px]">
        <a href="#" className="w-[45px] md:w-[50px] h-[45px] md:h-[50px] border border-[rgba(167,139,250,0.3)] flex items-center justify-center text-[rgba(255,255,255,0.5)] no-underline transition-all duration-300 rounded-xl bg-[rgba(168,85,247,0.05)] hover:border-[#a855f7] hover:text-[#c084fc] hover:bg-[rgba(168,85,247,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] group">
          <svg className="group-hover:scale-110 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
        </a>
        <a href="#" className="w-[45px] md:w-[50px] h-[45px] md:h-[50px] border border-[rgba(167,139,250,0.3)] flex items-center justify-center text-[rgba(255,255,255,0.5)] no-underline transition-all duration-300 rounded-xl bg-[rgba(168,85,247,0.05)] hover:border-[#f472b6] hover:text-[#f472b6] hover:bg-[rgba(244,114,182,0.2)] hover:shadow-[0_0_25px_rgba(244,114,182,0.4)] group">
          <svg className="group-hover:scale-110 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
        <a href="#" className="w-[45px] md:w-[50px] h-[45px] md:h-[50px] border border-[rgba(167,139,250,0.3)] flex items-center justify-center text-[rgba(255,255,255,0.5)] no-underline transition-all duration-300 rounded-xl bg-[rgba(168,85,247,0.05)] hover:border-[#8b5cf6] hover:text-[#a78bfa] hover:bg-[rgba(139,92,246,0.2)] hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] group">
          <svg className="group-hover:scale-110 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>
    </div>

    <div className="flex flex-col gap-[15px] md:gap-[20px] relative z-10">
      <ContactCard role="TECHNICAL OFFICER" name="PRAJIN" id="9789880949" />
      <ContactCard role="OPS COMMANDER" name="PREM" id="8489889568" />
      <ContactCard role="DIRECT CHANNEL" name="Hackathon@iiitdwd.ac.in" smallName />
    </div>
  </section>
);

export default ContactSection;
