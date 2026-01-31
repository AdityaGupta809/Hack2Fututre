import React from 'react';

const Ticker = () => (
  <div className="bg-gradient-to-r from-[rgba(3,0,20,0.9)] via-[rgba(15,7,40,0.9)] to-[rgba(3,0,20,0.9)] border-t border-b border-[rgba(167,139,250,0.2)] p-[12px_0] overflow-hidden relative backdrop-blur-md">
    {/* Left fade */}
    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[rgba(3,0,20,1)] to-transparent z-10 pointer-events-none"></div>
    {/* Right fade */}
    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[rgba(3,0,20,1)] to-transparent z-10 pointer-events-none"></div>

    <div className="flex animate-[scroll_20s_linear_infinite] whitespace-nowrap">
      <span className="font-['Share_Tech_Mono'] text-[11px] text-[rgba(255,255,255,0.5)] tracking-[2px] px-[30px] flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.6)]"></span>
        SYSTEM STATUS: <span className="text-[#c084fc]">OPTIMAL</span>
      </span>
      <span className="font-['Share_Tech_Mono'] text-[11px] text-[rgba(255,255,255,0.5)] tracking-[2px] px-[30px]">★ <span className="text-[#f472b6]">36 HOURS</span></span>
      <span className="font-['Share_Tech_Mono'] text-[11px] text-[rgba(255,255,255,0.5)] tracking-[2px] px-[30px]">◆ <span className="text-[#a855f7]">30 TEAMS</span></span>
      <span className="font-['Share_Tech_Mono'] text-[11px] text-[rgba(255,255,255,0.5)] tracking-[2px] px-[30px]">◈ REGISTRATION OPEN</span>
      <span className="font-['Share_Tech_Mono'] text-[11px] text-[rgba(255,255,255,0.5)] tracking-[2px] px-[30px]">✧ DEPLOYING HACKATHON PROTOCOLS</span>
      <span className="font-['Share_Tech_Mono'] text-[11px] text-[rgba(255,255,255,0.5)] tracking-[2px] px-[30px] flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.6)]"></span>
        SYSTEM STATUS: <span className="text-[#c084fc]">OPTIMAL</span>
      </span>
      <span className="font-['Share_Tech_Mono'] text-[11px] text-[rgba(255,255,255,0.5)] tracking-[2px] px-[30px]">★ <span className="text-[#f472b6]">36 HOURS</span></span>
      <span className="font-['Share_Tech_Mono'] text-[11px] text-[rgba(255,255,255,0.5)] tracking-[2px] px-[30px]">◆ <span className="text-[#a855f7]">30 TEAMS</span></span>
    </div>
  </div>
);

export default Ticker;
