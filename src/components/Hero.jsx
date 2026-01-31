import React from 'react';
import { PrimaryButton, SecondaryButton } from './ui/Button.jsx';
import { SponsorItem, SponsorHeader } from './ui/Card.jsx';

const TransmissionBadge = () => (
  <div className="inline-flex items-center gap-[8px] md:gap-[10px] bg-[rgba(168,85,247,0.1)] border border-[rgba(168,85,247,0.5)] p-[8px_14px] md:p-[10px_20px] font-['Share_Tech_Mono'] text-[10px] md:text-[12px] text-[#c084fc] mb-[30px] md:mb-[40px] w-fit animate-[pulse-border_2s_infinite] rounded-full before:content-[''] before:w-[8px] before:h-[8px] md:before:w-[10px] md:before:h-[10px] before:bg-gradient-to-r before:from-[#a855f7] before:to-[#f472b6] before:rounded-full before:animate-[blink_1s_infinite] before:shadow-[0_0_10px_rgba(168,85,247,0.8)]">
    ★ INCOMING TRANSMISSION
  </div>
);

const HeroTitle = () => (
  <h1 className="font-['Orbitron'] font-black leading-[1] mb-[20px] md:mb-[30px]">
    <div className="flex items-baseline flex-wrap">
      <span className="text-[48px] sm:text-[60px] md:text-[80px] lg:text-[120px] tracking-[5px] md:tracking-[10px] text-white [text-shadow:0_0_60px_rgba(255,255,255,0.2)]">HACK</span>
      <span className="text-[48px] sm:text-[60px] md:text-[80px] lg:text-[120px] text-[#f472b6] ml-[10px] md:ml-[20px] [text-shadow:0_0_40px_rgba(244,114,182,0.6),0_0_80px_rgba(244,114,182,0.3)] animate-glow-pulse">2</span>
    </div>
    <div className="text-[48px] sm:text-[60px] md:text-[80px] lg:text-[120px] tracking-[5px] md:tracking-[10px] bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#f472b6] bg-clip-text text-transparent [filter:drop-shadow(0_0_30px_rgba(168,85,247,0.5))_drop-shadow(0_0_60px_rgba(168,85,247,0.3))]">FUTURE</div>
    <div className="text-[40px] sm:text-[50px] md:text-[70px] lg:text-[100px] tracking-[3px] md:tracking-[5px] bg-gradient-to-r from-white via-[#e0e7ff] to-[#a78bfa] bg-clip-text text-transparent">2.0</div>
  </h1>
);

const Hero = () => (
  <section className="min-h-[calc(100vh-70px)] flex relative p-5 md:p-[60px] overflow-hidden">
    {/* Large animated nebula glow */}
    <div className="absolute w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[radial-gradient(circle,rgba(168,85,247,0.25)_0%,rgba(139,92,246,0.15)_30%,transparent_70%)] rounded-full right-[-100px] md:right-[-200px] top-1/2 -translate-y-1/2 blur-[60px] md:blur-[80px] z-0 animate-[cosmic-pulse_8s_ease-in-out_infinite]"></div>

    {/* Secondary pink nebula */}
    <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[radial-gradient(circle,rgba(244,114,182,0.2)_0%,transparent_60%)] rounded-full left-[5%] bottom-[5%] blur-[40px] md:blur-[60px] z-0 animate-[cosmic-pulse_10s_ease-in-out_infinite_2s]"></div>

    {/* Blue accent nebula */}
    <div className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_60%)] rounded-full right-[40%] top-[10%] blur-[40px] md:blur-[50px] z-0 animate-[cosmic-pulse_12s_ease-in-out_infinite_4s]"></div>

    <div className="flex-1 flex flex-col justify-center z-10 max-w-[700px]">
      <TransmissionBadge />
      <HeroTitle />
      <div>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-[300] tracking-[2px] md:tracking-[3px] mb-[10px] text-[rgba(255,255,255,0.95)] [text-shadow:0_0_20px_rgba(255,255,255,0.1)]">Hack the present. Shape the Future.</p>
        <p className="font-['Share_Tech_Mono'] text-[10px] md:text-[12px] text-[#c084fc] tracking-[1px] md:tracking-[2px] mb-[30px] md:mb-[50px] flex items-center gap-2 flex-wrap">
          <span className="inline-block w-2 h-2 bg-[#a855f7] rounded-full animate-pulse"></span>
          COORDINATES: HUBBALLI-DHARWAD // SECTOR 580009
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
        <PrimaryButton href="#register">INITIALIZE REGISTRATION</PrimaryButton>
        <SecondaryButton href="#protocols">ACCESS PROTOCOLS</SecondaryButton>
      </div>
    </div>

    <div className="absolute right-[60px] lg:right-[100px] top-1/2 -translate-y-1/2 w-[280px] lg:w-[320px] hidden xl:block z-10">
      <div className="space-glass rounded-xl overflow-hidden border border-[rgba(168,85,247,0.3)] shadow-[0_0_40px_rgba(168,85,247,0.15)]">
        <SponsorHeader />
        <div className="p-[20px]">
          <SponsorItem icon="✦" title="RESEARCH PARK" subtitle="IIIT DHARWAD" />
          <SponsorItem icon="◆" title="CySecK" subtitle="K-TECH COE" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
