import React from 'react';

const TimelineSection = () => (
    <section id="timeline" className="p-[40px_20px] md:p-[60px_24px] lg:p-[100px_60px] relative overflow-hidden border-t border-[rgba(167,139,250,0.2)]">
        {/* Background glow */}
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[radial-gradient(circle,rgba(139,92,246,0.1)_0%,transparent_60%)] rounded-full right-[-100px] md:right-[-150px] top-[20%] blur-[60px] md:blur-[80px] pointer-events-none"></div>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[30px] mb-[40px] md:mb-[60px] relative z-10">
            <h2 className="font-['Orbitron'] text-[24px] sm:text-[32px] md:text-[48px] font-bold tracking-[3px] md:tracking-[5px] flex items-center gap-3 md:gap-4 whitespace-nowrap">
                <span className="text-[#8b5cf6] text-[18px] md:text-[24px]">⏰</span>
                EVENT <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#c084fc] bg-clip-text text-transparent font-normal [filter:drop-shadow(0_0_20px_rgba(139,92,246,0.4))]">TIMELINE</span>
            </h2>
            <div className="flex-1 w-full sm:w-auto h-[2px] bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-transparent relative hidden sm:block">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#a855f7] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.6)]"></div>
            </div>
        </div>

        {/* Timeline */}
        <div className="relative z-10 max-w-[900px] mx-auto">
            {/* Vertical line */}
            <div className="absolute left-[16px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#8b5cf6] via-[#a855f7] to-[#f472b6] md:-translate-x-1/2"></div>

            <TimelineItem
                date="FEB 1"
                time="10:00 AM"
                title="REGISTRATION OPENS"
                desc="Portal opens for team registration. Form your squads!"
                icon="📝"
                isLeft
            />

            <TimelineItem
                date="FEB 10"
                time="11:59 PM"
                title="REGISTRATION CLOSES"
                desc="Last call for registrations. Don't miss out!"
                icon="🚫"
            />

            <TimelineItem
                date="FEB 15"
                time="09:00 AM"
                title="OPENING CEREMONY"
                desc="Inaugural address, theme reveal, and problem statements released."
                icon="🎤"
                isLeft
            />

            <TimelineItem
                date="FEB 15"
                time="10:00 AM"
                title="HACKING BEGINS"
                desc="36 hours of intense coding, innovation, and creativity!"
                icon="🚀"
            />

            <TimelineItem
                date="FEB 15"
                time="02:00 PM"
                title="MENTORSHIP SESSIONS"
                desc="One-on-one guidance from industry experts and faculty."
                icon="👨‍🏫"
                isLeft
            />

            <TimelineItem
                date="FEB 16"
                time="10:00 AM"
                title="MID REVIEW"
                desc="Progress check and feedback round with judges."
                icon="📊"
            />

            <TimelineItem
                date="FEB 16"
                time="10:00 PM"
                title="HACKING ENDS"
                desc="All submissions must be finalized. Code freeze!"
                icon="🛑"
                isLeft
            />

            <TimelineItem
                date="FEB 17"
                time="10:00 AM"
                title="FINAL PRESENTATIONS"
                desc="Top teams pitch their solutions to the jury."
                icon="🎯"
            />

            <TimelineItem
                date="FEB 17"
                time="02:00 PM"
                title="AWARDS CEREMONY"
                desc="Winners announced and prizes distributed!"
                icon="🏆"
                isLeft
                isLast
            />
        </div>
    </section>
);

const TimelineItem = ({ date, time, title, desc, icon, isLeft, isLast }) => (
    <div className={`relative flex items-center mb-[25px] md:mb-[40px] ${isLeft ? 'md:flex-row-reverse' : ''}`}>
        {/* Dot */}
        <div className="absolute left-[16px] md:left-1/2 w-[12px] md:w-[16px] h-[12px] md:h-[16px] bg-[#8b5cf6] rounded-full md:-translate-x-1/2 shadow-[0_0_15px_rgba(139,92,246,0.6)] z-10 flex items-center justify-center">
            <div className="w-[4px] md:w-[6px] h-[4px] md:h-[6px] bg-white rounded-full"></div>
        </div>

        {/* Content */}
        <div className={`ml-[40px] md:ml-0 md:w-[45%] ${isLeft ? 'md:mr-auto md:pr-[30px] lg:pr-[50px] md:text-right' : 'md:ml-auto md:pl-[30px] lg:pl-[50px]'}`}>
            <div className="space-glass p-[18px] md:p-[25px] rounded-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300 group cursor-pointer border border-transparent hover:border-[rgba(139,92,246,0.3)]">
                <div className={`flex items-center gap-2 md:gap-3 mb-2 md:mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                    <span className="text-[18px] md:text-[24px] group-hover:scale-110 transition-transform">{icon}</span>
                    <div>
                        <div className="font-['Share_Tech_Mono'] text-[9px] md:text-[11px] text-[#a855f7] tracking-[1px] md:tracking-[2px]">{date}</div>
                        <div className="font-['Share_Tech_Mono'] text-[8px] md:text-[10px] text-[rgba(255,255,255,0.4)]">{time}</div>
                    </div>
                </div>
                <h4 className="font-['Orbitron'] text-[12px] md:text-[16px] font-semibold mb-1 md:mb-2 tracking-[1px] group-hover:text-[#c084fc] transition-colors">{title}</h4>
                <p className="font-['Share_Tech_Mono'] text-[10px] md:text-[12px] text-[rgba(255,255,255,0.5)] leading-[1.5] md:leading-[1.6]">{desc}</p>
            </div>
        </div>
    </div>
);

export default TimelineSection;
