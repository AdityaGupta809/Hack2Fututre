import React from 'react';
import { MissionCard } from './ui/Card.jsx';

const SectionHeader = () => (
  <div className="flex items-center gap-[30px] mb-[60px]">
    <h2 className="font-['Orbitron'] text-[32px] md:text-[48px] font-bold tracking-[5px] flex items-center gap-4">
      <span className="text-[#a855f7] text-[24px]">◈</span>
      MISSION <span className="bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#f472b6] bg-clip-text text-transparent font-normal [filter:drop-shadow(0_0_20px_rgba(168,85,247,0.4))]">BRIEF</span>
    </h2>
    <div className="flex-1 h-[2px] bg-gradient-to-r from-[#a855f7] via-[#f472b6] to-transparent relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#f472b6] rounded-full shadow-[0_0_10px_rgba(244,114,182,0.6)]"></div>
    </div>
  </div>
);

const MetricItem = ({ value, label }) => (
  <div className="group">
    <div className="font-['Orbitron'] text-[36px] font-black bg-gradient-to-r from-white via-[#e0e7ff] to-[#c084fc] bg-clip-text text-transparent mb-[5px] group-hover:[filter:drop-shadow(0_0_15px_rgba(168,85,247,0.5))] transition-all">{value}</div>
    <div className="font-['Share_Tech_Mono'] text-[10px] text-[rgba(255,255,255,0.5)] tracking-[2px]">{label}</div>
  </div>
);

const MetricsCard = () => (
  <div className="space-glass p-[40px] relative rounded-xl overflow-hidden hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-transparent before:via-[#f472b6] before:to-transparent">
    {/* Corner accents */}
    <div className="absolute top-0 left-0 w-[30px] h-[30px] border-l-2 border-t-2 border-[#a855f7] opacity-50"></div>
    <div className="absolute top-0 right-0 w-[30px] h-[30px] border-r-2 border-t-2 border-[#f472b6] opacity-50"></div>
    <div className="absolute bottom-0 left-0 w-[30px] h-[30px] border-l-2 border-b-2 border-[#f472b6] opacity-50"></div>
    <div className="absolute bottom-0 right-0 w-[30px] h-[30px] border-r-2 border-b-2 border-[#a855f7] opacity-50"></div>

    <div className="flex justify-between items-start mb-[30px]">
      <div className="w-[50px] h-[50px] border border-[rgba(168,85,247,0.4)] flex items-center justify-center text-[#c084fc] text-[24px] bg-gradient-to-br from-[rgba(168,85,247,0.2)] to-[rgba(244,114,182,0.1)] rounded-xl">⚡</div>
      <div className="font-['Share_Tech_Mono'] text-[11px] text-[rgba(255,255,255,0.4)] tracking-[2px] flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse"></span>
        ID: STATS
      </div>
    </div>
    <h3 className="font-['Orbitron'] text-[22px] font-semibold mb-[20px] tracking-[2px]">OPERATIONAL METRICS</h3>
    <div className="grid md:grid-cols-2 gap-[30px] mt-[30px]">
      <MetricItem value="2000+" label="EST. REACH" />
      <MetricItem value="1000+" label="REGISTRATIONS" />
      <MetricItem value="36H" label="DURATION" />
      <MetricItem value="30" label="SQUADS" />
    </div>
  </div>
);

const Mission = () => (
  <section id="about" className="p-[60px_24px] md:p-[100px_60px] relative">
    {/* Section nebula glow */}
    <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(168,85,247,0.1)_0%,transparent_60%)] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-[60px] pointer-events-none"></div>

    <SectionHeader title="MISSION BRIEF" />

    <div className="grid md:grid-cols-2 gap-[40px] relative z-10">
      <MissionCard
        icon="◎"
        id="PARTICIPANTS"
        title="DIVERSITY PROFILE"
        content="Scanning sector... Detected students from multiple academic years. Freshers to Final Years. disciplines: CS, Business, Design, CyberSec."
      />
      <MetricsCard />
    </div>
  </section>
);

export default Mission;
