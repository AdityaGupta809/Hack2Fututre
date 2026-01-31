import React from 'react';

const ProblemsSection = () => (
    <section id="problems" className="p-[40px_20px] md:p-[60px_24px] lg:p-[100px_60px] relative overflow-hidden border-t border-[rgba(167,139,250,0.2)]">
        {/* Background glow */}
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[radial-gradient(circle,rgba(244,114,182,0.1)_0%,transparent_60%)] rounded-full left-[-100px] md:left-[-150px] top-[30%] blur-[60px] md:blur-[80px] pointer-events-none"></div>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[30px] mb-[40px] md:mb-[60px] relative z-10">
            <h2 className="font-['Orbitron'] text-[24px] sm:text-[32px] md:text-[48px] font-bold tracking-[3px] md:tracking-[5px] flex items-center gap-3 md:gap-4 whitespace-nowrap">
                <span className="text-[#f472b6] text-[18px] md:text-[24px]">🎯</span>
                PROBLEM <span className="bg-gradient-to-r from-[#f472b6] via-[#ec4899] to-[#a855f7] bg-clip-text text-transparent font-normal [filter:drop-shadow(0_0_20px_rgba(244,114,182,0.4))]">TRACKS</span>
            </h2>
            <div className="flex-1 w-full sm:w-auto h-[2px] bg-gradient-to-r from-[#f472b6] via-[#ec4899] to-transparent relative hidden sm:block">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#ec4899] rounded-full shadow-[0_0_10px_rgba(236,72,153,0.6)]"></div>
            </div>
        </div>

        {/* Coming Soon Content */}
        <div className="relative z-10 flex flex-col items-center justify-center py-[40px] md:py-[60px]">
            {/* Lock Icon */}
            <div className="text-[60px] md:text-[80px] mb-4 md:mb-6 animate-pulse">🔒</div>

            {/* Coming Soon Text */}
            <h3 className="font-['Orbitron'] text-[28px] sm:text-[36px] md:text-[48px] font-bold mb-3 md:mb-4 bg-gradient-to-r from-[#f472b6] via-[#a855f7] to-[#8b5cf6] bg-clip-text text-transparent animate-glow-pulse text-center">
                COMING SOON
            </h3>

            <p className="text-center text-[rgba(255,255,255,0.6)] font-['Share_Tech_Mono'] text-[12px] md:text-[14px] mb-[30px] md:mb-[40px] max-w-[600px] px-4">
                Problem statements will be revealed during the opening ceremony. Stay tuned for exciting challenges across multiple domains!
            </p>

            {/* Teaser Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-[900px] w-full px-2">
                <TeaserCard icon="🏥" title="TRACK 01" />
                <TeaserCard icon="🌱" title="TRACK 02" />
                <TeaserCard icon="💳" title="TRACK 03" />
                <TeaserCard icon="📚" title="TRACK 04" />
                <TeaserCard icon="🔐" title="TRACK 05" />
                <TeaserCard icon="🚀" title="WILDCARD" isSpecial />
            </div>

            {/* Countdown hint */}
            <div className="mt-[30px] md:mt-[50px] space-glass p-[15px_20px] md:p-[20px_40px] rounded-xl border border-[rgba(244,114,182,0.3)]">
                <p className="font-['Share_Tech_Mono'] text-[10px] md:text-[12px] text-[rgba(255,255,255,0.5)] tracking-[1px] md:tracking-[2px] text-center">
                    🚀 PROBLEM STATEMENTS UNLOCK AT OPENING CEREMONY
                </p>
            </div>
        </div>
    </section>
);

const TeaserCard = ({ icon, title, isSpecial }) => (
    <div className={`space-glass p-[20px] md:p-[30px] rounded-xl flex flex-col items-center justify-center transition-all duration-300 group cursor-not-allowed relative overflow-hidden ${isSpecial ? 'border-2 border-dashed border-[rgba(244,114,182,0.4)]' : 'border border-[rgba(168,85,247,0.2)]'}`}>
        {/* Blur overlay */}
        <div className="absolute inset-0 bg-[rgba(3,0,20,0.5)] backdrop-blur-[2px]"></div>

        {/* Lock icon overlay */}
        <div className="absolute top-2 right-2 text-[12px] md:text-[16px] opacity-50">🔒</div>

        <div className="relative z-10 text-[30px] md:text-[40px] mb-2 md:mb-4 opacity-40 grayscale">{icon}</div>
        <div className="relative z-10 font-['Orbitron'] text-[11px] md:text-[14px] font-semibold tracking-[1px] md:tracking-[2px] text-[rgba(255,255,255,0.4)]">{title}</div>
        <div className="relative z-10 font-['Share_Tech_Mono'] text-[8px] md:text-[10px] text-[rgba(255,255,255,0.3)] mt-1 md:mt-2 tracking-[1px]">CLASSIFIED</div>
    </div>
);

export default ProblemsSection;
