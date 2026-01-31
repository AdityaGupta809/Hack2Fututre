import React from 'react';

const SponsorHeader = () => (
  <div className="flex justify-between items-center p-[15px_20px] border-b border-[rgba(167,139,250,0.3)] font-['Share_Tech_Mono'] text-[12px] text-[#c084fc] tracking-[1px] bg-gradient-to-r from-[rgba(168,85,247,0.15)] to-[rgba(244,114,182,0.1)]">
    <span className="flex items-center gap-2">
      <span className="animate-pulse">◉</span> SPONSOR_MODULE.EXE
    </span>
    <div className="flex gap-[6px]">
      <span className="w-[10px] h-[10px] rounded-full bg-gradient-to-br from-[#f472b6] to-[#db2777] shadow-[0_0_6px_rgba(244,114,182,0.6)]"></span>
      <span className="w-[10px] h-[10px] rounded-full bg-gradient-to-br from-[#a78bfa] to-[#8b5cf6] shadow-[0_0_6px_rgba(167,139,250,0.6)]"></span>
      <span className="w-[10px] h-[10px] rounded-full bg-gradient-to-br from-[#34d399] to-[#10b981] shadow-[0_0_6px_rgba(52,211,153,0.6)]"></span>
    </div>
  </div>
);

const SponsorItem = ({ icon, title, subtitle }) => (
  <div className="flex items-center gap-[15px] p-[15px] border border-[rgba(167,139,250,0.15)] mb-[10px] transition-all duration-300 rounded-lg hover:border-[rgba(168,85,247,0.5)] hover:bg-gradient-to-r hover:from-[rgba(168,85,247,0.15)] hover:to-[rgba(244,114,182,0.05)] hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] group cursor-pointer">
    <div className="w-[40px] h-[40px] border border-[rgba(168,85,247,0.4)] flex items-center justify-center text-[#c084fc] text-[18px] bg-gradient-to-br from-[rgba(168,85,247,0.2)] to-[rgba(244,114,182,0.1)] rounded-lg group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300">{icon}</div>
    <div>
      <h4 className="font-['Orbitron'] text-[14px] font-semibold mb-[4px] group-hover:text-[#c084fc] transition-colors">{title}</h4>
      <span className="font-['Share_Tech_Mono'] text-[10px] text-[rgba(255,255,255,0.5)] tracking-[1px]">{subtitle}</span>
    </div>
  </div>
);

const MissionCard = ({ icon, id, title, content }) => (
  <div className="space-glass p-[40px] relative rounded-xl overflow-hidden group hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-transparent before:via-[#a855f7] before:to-transparent">
    {/* Animated corner accents */}
    <div className="absolute top-0 left-0 w-[30px] h-[30px] border-l-2 border-t-2 border-[#a855f7] opacity-50"></div>
    <div className="absolute top-0 right-0 w-[30px] h-[30px] border-r-2 border-t-2 border-[#f472b6] opacity-50"></div>
    <div className="absolute bottom-0 left-0 w-[30px] h-[30px] border-l-2 border-b-2 border-[#f472b6] opacity-50"></div>
    <div className="absolute bottom-0 right-0 w-[30px] h-[30px] border-r-2 border-b-2 border-[#a855f7] opacity-50"></div>

    <div className="flex justify-between items-start mb-[30px]">
      <div className="w-[50px] h-[50px] border border-[rgba(168,85,247,0.4)] flex items-center justify-center text-[#c084fc] text-[24px] bg-gradient-to-br from-[rgba(168,85,247,0.2)] to-[rgba(244,114,182,0.1)] rounded-xl group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300">{icon}</div>
      <div className="font-['Share_Tech_Mono'] text-[11px] text-[rgba(255,255,255,0.4)] tracking-[2px] flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-[#a855f7] rounded-full"></span>
        ID: {id}
      </div>
    </div>
    <h3 className="font-['Orbitron'] text-[22px] font-semibold mb-[20px] tracking-[2px] group-hover:text-[#c084fc] transition-colors">{title}</h3>
    <p className="text-[15px] leading-[1.8] text-[rgba(255,255,255,0.6)]">{content}</p>
  </div>
);

const ContactCard = ({ role, name, id, smallName }) => (
  <div className="space-glass border-l-[3px] border-l-transparent bg-gradient-to-r from-[rgba(168,85,247,0.1)] to-transparent p-[25px_30px] rounded-xl relative overflow-hidden hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 group before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-gradient-to-b before:from-[#a855f7] before:via-[#f472b6] before:to-[#8b5cf6]">
    <div className="font-['Share_Tech_Mono'] text-[11px] text-[#c084fc] tracking-[2px] mb-[10px] flex items-center gap-2">
      <span className="w-1.5 h-1.5 bg-[#a855f7] rounded-full group-hover:animate-pulse"></span>
      {role}
    </div>
    <div className={`font-['Orbitron'] ${smallName ? 'text-[18px]' : 'text-[28px]'} font-semibold mb-[8px] group-hover:text-[#e0e7ff] transition-colors`}>{name}</div>
    {id && <div className="font-['Share_Tech_Mono'] text-[13px] text-[rgba(255,255,255,0.5)] tracking-[1px]">COMM-ID: {id}</div>}
  </div>
);

export { SponsorHeader, SponsorItem, MissionCard, ContactCard };
