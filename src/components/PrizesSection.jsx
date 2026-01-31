import React from 'react';

const PrizesSection = () => (
    <section id="prizes" className="p-[40px_20px] md:p-[60px_24px] lg:p-[100px_60px] relative overflow-hidden border-t border-[rgba(167,139,250,0.2)]">
        {/* Background glow */}
        <div className="absolute w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[radial-gradient(circle,rgba(251,191,36,0.08)_0%,transparent_60%)] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-[80px] md:blur-[100px] pointer-events-none"></div>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[30px] mb-[40px] md:mb-[60px] relative z-10">
            <h2 className="font-['Orbitron'] text-[24px] sm:text-[32px] md:text-[48px] font-bold tracking-[3px] md:tracking-[5px] flex items-center gap-3 md:gap-4 whitespace-nowrap">
                <span className="text-[#fbbf24] text-[18px] md:text-[24px]">🏆</span>
                PRIZE <span className="bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#f472b6] bg-clip-text text-transparent font-normal [filter:drop-shadow(0_0_20px_rgba(251,191,36,0.4))]">POOL</span>
            </h2>
            <div className="flex-1 w-full sm:w-auto h-[2px] bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-transparent relative hidden sm:block">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#f59e0b] rounded-full shadow-[0_0_10px_rgba(245,158,11,0.6)]"></div>
            </div>
        </div>

        <p className="text-center text-[rgba(255,255,255,0.6)] font-['Share_Tech_Mono'] text-[12px] md:text-[14px] mb-[30px] md:mb-[50px] max-w-[600px] mx-auto relative z-10">
            Compete for glory and incredible rewards. Total prize pool worth ₹50,000+
        </p>

        {/* Main Prizes */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-4 md:gap-6 mb-[30px] md:mb-[50px] relative z-10">
            {/* 2nd Place */}
            <div className="order-2 md:order-1">
                <PrizeCard
                    position="2ND"
                    title="SILVER"
                    amount="₹15,000"
                    icon="🥈"
                    color="#94a3b8"
                    height="h-[220px] md:h-[280px]"
                />
            </div>

            {/* 1st Place */}
            <div className="order-1 md:order-2">
                <PrizeCard
                    position="1ST"
                    title="GOLD"
                    amount="₹25,000"
                    icon="🥇"
                    color="#fbbf24"
                    height="h-[260px] md:h-[340px]"
                    isMain
                />
            </div>

            {/* 3rd Place */}
            <div className="order-3">
                <PrizeCard
                    position="3RD"
                    title="BRONZE"
                    amount="₹10,000"
                    icon="🥉"
                    color="#cd7c32"
                    height="h-[200px] md:h-[240px]"
                />
            </div>
        </div>

        {/* Special Prizes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 relative z-10">
            <SpecialPrize title="BEST UI/UX" prize="₹5,000" icon="🎨" />
            <SpecialPrize title="BEST INNOVATION" prize="₹5,000" icon="💡" />
            <SpecialPrize title="BEST FRESHERS" prize="₹5,000" icon="🌟" />
        </div>
    </section>
);

const PrizeCard = ({ position, title, amount, icon, color, height, isMain }) => (
    <div className={`w-[180px] sm:w-[200px] md:w-[240px] ${height} space-glass rounded-xl flex flex-col items-center justify-center p-4 md:p-6 transition-all duration-300 group cursor-pointer relative overflow-hidden ${isMain ? 'animate-[pulse-border_3s_infinite]' : ''}`}
        style={{ borderColor: `${color}40`, borderWidth: '2px' }}>
        {/* Glow effect */}
        {isMain && (
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(251,191,36,0.1)] to-transparent pointer-events-none"></div>
        )}

        {/* Crown for 1st */}
        {isMain && <div className="text-[30px] md:text-[40px] mb-1 md:mb-2 animate-bounce">👑</div>}

        <div className="text-[36px] md:text-[48px] mb-2 md:mb-4 group-hover:scale-110 transition-transform">{icon}</div>
        <div className="font-['Share_Tech_Mono'] text-[10px] md:text-[12px] tracking-[2px] md:tracking-[3px] mb-1" style={{ color }}>{position} PLACE</div>
        <h3 className="font-['Orbitron'] text-[16px] md:text-[20px] font-bold mb-2 md:mb-3" style={{ color }}>{title}</h3>
        <div className="font-['Orbitron'] text-[22px] md:text-[28px] font-bold text-white group-hover:scale-105 transition-transform">{amount}</div>
        <div className="font-['Share_Tech_Mono'] text-[8px] md:text-[10px] text-[rgba(255,255,255,0.4)] mt-1 md:mt-2">+ SWAG & GOODIES</div>
    </div>
);

const SpecialPrize = ({ title, prize, icon }) => (
    <div className="space-glass p-[20px] md:p-[30px] rounded-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 group cursor-pointer border border-transparent hover:border-[rgba(168,85,247,0.3)] text-center">
        <div className="text-[28px] md:text-[36px] mb-3 md:mb-4 group-hover:scale-110 transition-transform">{icon}</div>
        <h4 className="font-['Orbitron'] text-[13px] md:text-[16px] font-semibold mb-1 md:mb-2 tracking-[1px] md:tracking-[2px] group-hover:text-[#c084fc] transition-colors">{title}</h4>
        <div className="font-['Orbitron'] text-[18px] md:text-[22px] font-bold text-[#a855f7]">{prize}</div>
    </div>
);

export default PrizesSection;
