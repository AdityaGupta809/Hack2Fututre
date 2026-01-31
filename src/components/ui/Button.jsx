import React from 'react';

const PrimaryButton = ({ href, children }) => (
  <a
    href={href}
    className="p-[18px_40px] font-['Orbitron'] text-[13px] font-semibold tracking-[2px] no-underline transition-all duration-300 relative flex items-center gap-[10px] bg-gradient-to-r from-[rgba(168,85,247,0.2)] to-[rgba(244,114,182,0.1)] border border-[#a855f7] text-[#c084fc] rounded-lg hover:bg-gradient-to-r hover:from-[rgba(168,85,247,0.3)] hover:to-[rgba(244,114,182,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5),0_0_60px_rgba(244,114,182,0.2)] hover:text-white hover:border-[#c084fc] group"
  >
    <svg className="transition-transform duration-300 group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
    {children}
    <span className="absolute inset-0 bg-gradient-to-r from-[rgba(168,85,247,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
  </a>
);

const SecondaryButton = ({ href, children }) => (
  <a
    href={href}
    className="p-[18px_40px] font-['Orbitron'] text-[13px] font-semibold tracking-[2px] no-underline transition-all duration-300 relative flex items-center gap-[10px] bg-transparent border border-[rgba(255,255,255,0.15)] border-l-0 text-[rgba(255,255,255,0.6)] rounded-r-lg hover:border-[rgba(167,139,250,0.4)] hover:text-[#c084fc] hover:bg-[rgba(167,139,250,0.05)] md:border-l"
  >
    {children}
  </a>
);

export { PrimaryButton, SecondaryButton };
