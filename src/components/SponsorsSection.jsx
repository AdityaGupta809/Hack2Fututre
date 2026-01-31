import React from 'react';

const SponsorsSection = () => (
    <section id="allies" className="p-[40px_20px] md:p-[60px_24px] lg:p-[100px_60px] relative overflow-hidden border-t border-[rgba(167,139,250,0.2)]">
        {/* Background nebula glow */}
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[radial-gradient(circle,rgba(168,85,247,0.1)_0%,transparent_60%)] rounded-full right-[-100px] md:right-[-150px] top-1/2 -translate-y-1/2 blur-[60px] md:blur-[80px] pointer-events-none"></div>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[30px] mb-[40px] md:mb-[60px] relative z-10">
            <h2 className="font-['Orbitron'] text-[24px] sm:text-[32px] md:text-[48px] font-bold tracking-[3px] md:tracking-[5px] flex items-center gap-3 md:gap-4 whitespace-nowrap">
                <span className="text-[#f472b6] text-[18px] md:text-[24px]">✧</span>
                OUR <span className="bg-gradient-to-r from-[#f472b6] via-[#a855f7] to-[#8b5cf6] bg-clip-text text-transparent font-normal [filter:drop-shadow(0_0_20px_rgba(244,114,182,0.4))]">ALLIES</span>
            </h2>
            <div className="flex-1 w-full sm:w-auto h-[2px] bg-gradient-to-r from-[#f472b6] via-[#a855f7] to-transparent relative hidden sm:block">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#a855f7] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.6)]"></div>
            </div>
        </div>

        <p className="text-center text-[rgba(255,255,255,0.6)] font-['Share_Tech_Mono'] text-[12px] md:text-[14px] mb-[30px] md:mb-[50px] max-w-[600px] mx-auto relative z-10 px-4">
            Powered by industry leaders and academic excellence. Our sponsors make this mission possible.
        </p>

        {/* Title Sponsors */}
        <div className="mb-[30px] md:mb-[50px] relative z-10">
            <div className="text-center mb-4 md:mb-6">
                <span className="font-['Share_Tech_Mono'] text-[9px] md:text-[11px] text-[#f472b6] tracking-[2px] md:tracking-[3px] px-3 md:px-4 py-2 border border-[rgba(244,114,182,0.3)] rounded-full bg-[rgba(244,114,182,0.1)]">
                    ★ TITLE SPONSORS ★
                </span>
            </div>
            <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
                <SponsorCard name="IIIT DHARWAD" subtitle="RESEARCH PARK" tier="title" icon="🏛️" />
                <SponsorCard name="CySecK" subtitle="K-TECH COE" tier="title" icon="🔐" />
            </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-[30px] md:mb-[50px] relative z-10">
            <div className="text-center mb-4 md:mb-6">
                <span className="font-['Share_Tech_Mono'] text-[9px] md:text-[11px] text-[#fbbf24] tracking-[2px] md:tracking-[3px] px-3 md:px-4 py-2 border border-[rgba(251,191,36,0.3)] rounded-full bg-[rgba(251,191,36,0.1)]">
                    ◆ GOLD PARTNERS ◆
                </span>
            </div>
            <div className="flex justify-center gap-3 md:gap-6 flex-wrap">
                <SponsorCard name="TECH CORP" subtitle="GOLD PARTNER" tier="gold" icon="💎" />
                <SponsorCard name="INNOVATE HUB" subtitle="GOLD PARTNER" tier="gold" icon="⚡" />
                <SponsorCard name="DEV SOLUTIONS" subtitle="GOLD PARTNER" tier="gold" icon="🌐" />
            </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-[30px] md:mb-[50px] relative z-10">
            <div className="text-center mb-4 md:mb-6">
                <span className="font-['Share_Tech_Mono'] text-[9px] md:text-[11px] text-[#94a3b8] tracking-[2px] md:tracking-[3px] px-3 md:px-4 py-2 border border-[rgba(148,163,184,0.3)] rounded-full bg-[rgba(148,163,184,0.1)]">
                    ◇ SILVER PARTNERS ◇
                </span>
            </div>
            <div className="flex justify-center gap-3 md:gap-5 flex-wrap">
                <SponsorCard name="STARTUP X" subtitle="SILVER" tier="silver" icon="🚀" />
                <SponsorCard name="CODE LAB" subtitle="SILVER" tier="silver" icon="💻" />
                <SponsorCard name="DATA WORKS" subtitle="SILVER" tier="silver" icon="📊" />
                <SponsorCard name="CLOUD NET" subtitle="SILVER" tier="silver" icon="☁️" />
            </div>
        </div>

        {/* Community Partners */}
        <div className="relative z-10">
            <div className="text-center mb-4 md:mb-6">
                <span className="font-['Share_Tech_Mono'] text-[9px] md:text-[11px] text-[#a78bfa] tracking-[2px] md:tracking-[3px] px-3 md:px-4 py-2 border border-[rgba(167,139,250,0.3)] rounded-full bg-[rgba(167,139,250,0.1)]">
                    ✦ COMMUNITY PARTNERS ✦
                </span>
            </div>
            <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
                <SponsorCard name="HACK CLUB" subtitle="COMMUNITY" tier="community" icon="🎯" />
                <SponsorCard name="DEV COMMUNITY" subtitle="COMMUNITY" tier="community" icon="👨‍💻" />
                <SponsorCard name="TECH TALKS" subtitle="COMMUNITY" tier="community" icon="🎤" />
            </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-[40px] md:mt-[60px] text-center relative z-10">
            <div className="inline-block space-glass p-[20px_30px] md:p-[30px_50px] rounded-xl border border-[rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-300 group cursor-pointer">
                <p className="font-['Share_Tech_Mono'] text-[10px] md:text-[12px] text-[rgba(255,255,255,0.5)] mb-2 md:mb-3 tracking-[1px] md:tracking-[2px]">WANT TO JOIN THE MISSION?</p>
                <h4 className="font-['Orbitron'] text-[16px] md:text-[20px] font-bold text-[#c084fc] group-hover:text-white transition-colors mb-1 md:mb-2">BECOME A SPONSOR</h4>
                <p className="font-['Share_Tech_Mono'] text-[9px] md:text-[11px] text-[rgba(255,255,255,0.4)]">Contact us at sponsors@iiitdwd.ac.in</p>
            </div>
        </div>
    </section>
);

const SponsorCard = ({ name, subtitle, tier, icon }) => {
    const tierStyles = {
        title: 'w-[150px] sm:w-[180px] md:w-[200px] h-[130px] sm:h-[150px] md:h-[180px] border-[#f472b6] hover:shadow-[0_0_40px_rgba(244,114,182,0.3)]',
        gold: 'w-[130px] sm:w-[150px] md:w-[170px] h-[110px] sm:h-[130px] md:h-[150px] border-[#fbbf24] hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]',
        silver: 'w-[110px] sm:w-[130px] md:w-[150px] h-[100px] sm:h-[110px] md:h-[130px] border-[#94a3b8] hover:shadow-[0_0_25px_rgba(148,163,184,0.3)]',
        community: 'w-[100px] sm:w-[120px] md:w-[140px] h-[90px] sm:h-[100px] md:h-[120px] border-[#a78bfa] hover:shadow-[0_0_20px_rgba(167,139,250,0.3)]'
    };

    const iconSizes = {
        title: 'text-[28px] sm:text-[32px] md:text-[40px]',
        gold: 'text-[24px] sm:text-[28px] md:text-[32px]',
        silver: 'text-[20px] sm:text-[24px] md:text-[28px]',
        community: 'text-[18px] sm:text-[20px] md:text-[24px]'
    };

    const nameSizes = {
        title: 'text-[12px] sm:text-[14px] md:text-[16px]',
        gold: 'text-[11px] sm:text-[12px] md:text-[14px]',
        silver: 'text-[10px] sm:text-[11px] md:text-[13px]',
        community: 'text-[9px] sm:text-[10px] md:text-[12px]'
    };

    return (
        <div className={`space-glass rounded-xl flex flex-col items-center justify-center p-3 md:p-4 transition-all duration-300 group cursor-pointer border ${tierStyles[tier]}`}>
            <div className={`${iconSizes[tier]} mb-2 md:mb-3 group-hover:scale-110 transition-transform`}>{icon}</div>
            <h4 className={`font-['Orbitron'] ${nameSizes[tier]} font-semibold text-center group-hover:text-[#c084fc] transition-colors`}>{name}</h4>
            <span className="font-['Share_Tech_Mono'] text-[7px] sm:text-[8px] md:text-[9px] text-[rgba(255,255,255,0.4)] tracking-[1px] mt-1">{subtitle}</span>
        </div>
    );
};

export default SponsorsSection;
