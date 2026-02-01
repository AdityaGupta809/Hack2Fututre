import React from 'react';

const AboutSection = () => (
    <section id="about-details" className="p-[40px_20px] md:p-[60px_24px] lg:p-[100px_60px] relative overflow-hidden">
        {/* Background nebula glow */}
        <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,transparent_60%)] rounded-full left-[-100px] md:left-[-200px] top-1/2 -translate-y-1/2 blur-[60px] md:blur-[80px] pointer-events-none"></div>
        <div className="absolute w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[radial-gradient(circle,rgba(244,114,182,0.1)_0%,transparent_60%)] rounded-full right-[10%] bottom-[10%] blur-[40px] md:blur-[60px] pointer-events-none"></div>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[30px] mb-[40px] md:mb-[60px] relative z-10">
            <h2 className="font-['Orbitron'] text-[24px] sm:text-[32px] md:text-[48px] font-bold tracking-[3px] md:tracking-[5px] flex items-center gap-3 md:gap-4 whitespace-nowrap">
                <span className="text-[#a855f7] text-[18px] md:text-[24px]">◈</span>
                ABOUT <span className="bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#f472b6] bg-clip-text text-transparent font-normal [filter:drop-shadow(0_0_20px_rgba(168,85,247,0.4))]">US</span>
            </h2>
            <div className="flex-1 w-full sm:w-auto h-[2px] bg-gradient-to-r from-[#a855f7] via-[#f472b6] to-transparent relative hidden sm:block">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#f472b6] rounded-full shadow-[0_0_10px_rgba(244,114,182,0.6)]"></div>
            </div>
        </div>


        {/* Main About Content */}
        <div className="space-glass p-[25px] md:p-[40px] rounded-xl relative overflow-hidden hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-transparent before:via-[#a855f7] before:to-transparent">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-[20px] md:w-[30px] h-[20px] md:h-[30px] border-l-2 border-t-2 border-[#a855f7] opacity-50"></div>
            <div className="absolute top-0 right-0 w-[20px] md:w-[30px] h-[20px] md:h-[30px] border-r-2 border-t-2 border-[#f472b6] opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-[20px] md:w-[30px] h-[20px] md:h-[30px] border-l-2 border-b-2 border-[#f472b6] opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-[20px] md:w-[30px] h-[20px] md:h-[30px] border-r-2 border-b-2 border-[#a855f7] opacity-50"></div>



            <h3 className="font-['Orbitron'] text-[16px] md:text-[20px] font-semibold tracking-[1px] md:tracking-[2px] text-center mb-6">THE MISSION</h3>


            <p className="text-[13px] md:text-[15px] leading-[1.8] md:leading-[1.9] text-[rgba(255,255,255,0.7)] mb-4 md:mb-6 text-center">
                <span className="text-[#c084fc] font-semibold">HACK2FUTURE 2.0</span> is a flagship 36-hour hackathon organized by IIIT Dharwad, bringing together the brightest minds to innovate, create, and shape the future of technology.
            </p>

            <p className="text-[13px] md:text-[15px] leading-[1.8] md:leading-[1.9] text-[rgba(255,255,255,0.6)] text-center">
                Our mission is to provide a platform where students can transform their ideas into reality, collaborate with peers across disciplines, and tackle real-world challenges with cutting-edge solutions.
            </p>
        </div>

        {/* Timeline/Event Details */}
        <div className="mt-[40px] md:mt-[60px] grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 relative z-10">
            <EventCard icon="📅" label="DATE" value="FEBRUARY 2026" />
            <EventCard icon="📍" label="VENUE" value="IIIT DHARWAD" />
            <EventCard icon="⏱️" label="DURATION" value="36 HOURS" />
            <EventCard icon="👥" label="TEAM SIZE" value="2-4 MEMBERS" />
        </div>
    </section>
);

const FeatureCard = ({ icon, title, desc }) => (
    <div className="space-glass p-[18px] md:p-[25px] rounded-xl hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 group cursor-pointer border border-transparent hover:border-[rgba(168,85,247,0.3)]">
        <div className="text-[24px] md:text-[28px] mb-2 md:mb-3 group-hover:scale-110 transition-transform">{icon}</div>
        <h4 className="font-['Orbitron'] text-[11px] md:text-[14px] font-semibold mb-1 md:mb-2 tracking-[1px] group-hover:text-[#c084fc] transition-colors">{title}</h4>
        <p className="font-['Share_Tech_Mono'] text-[9px] md:text-[11px] text-[rgba(255,255,255,0.5)] leading-[1.4] md:leading-[1.5]">{desc}</p>
    </div>
);

const EventCard = ({ icon, label, value }) => (
    <div className="space-glass p-[18px] md:p-[25px] rounded-xl text-center hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 group border-t-2 border-t-[#a855f7] hover:border-t-[#f472b6]">
        <div className="text-[20px] md:text-[24px] mb-1 md:mb-2">{icon}</div>
        <div className="font-['Share_Tech_Mono'] text-[8px] md:text-[10px] text-[rgba(255,255,255,0.4)] tracking-[1px] md:tracking-[2px] mb-1">{label}</div>
        <div className="font-['Orbitron'] text-[11px] sm:text-[13px] md:text-[16px] font-bold text-[#c084fc] group-hover:text-white transition-colors">{value}</div>
    </div>
);

export default AboutSection;
