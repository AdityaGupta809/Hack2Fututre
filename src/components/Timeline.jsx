import React from 'react'

const Timeline = () => {
    return (
        <section id="timeline" className="relative z-30 py-16 md:py-32 px-4 sm:px-6 md:px-16 lg:px-32">
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-0 w-[200px] md:w-[400px] h-[300px] md:h-[600px] bg-[#2563EB]/10 blur-[120px] md:blur-[180px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                    <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-white/5 border border-white/10 rounded-full text-[#2DD4BF] text-xs sm:text-sm font-medium tracking-wider mb-4">
                        SCHEDULE
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-space tracking-tight">
                        Event <span className="text-[#2563EB]">Timeline</span>
                    </h2>
                </div>

                {/* Coming Soon Card */}
                <div className="flex flex-col items-center justify-center py-8 md:py-16">
                    <div className="relative p-8 md:p-12 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl backdrop-blur-sm text-center max-w-sm md:max-w-lg mx-4">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/10 to-[#2563EB]/10 rounded-2xl md:rounded-3xl" />

                        <div className="relative z-10">
                            <span className="text-5xl md:text-6xl mb-4 md:mb-6 block animate-pulse">⏰</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Coming Soon</h3>
                            <p className="text-white/60 text-sm md:text-lg leading-relaxed">
                                The detailed event schedule will be announced soon. Get ready for 24 hours of non-stop innovation!
                            </p>

                            {/* Decorative Elements */}
                            <div className="mt-6 md:mt-8 flex justify-center gap-2">
                                {[...Array(3)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-1.5 md:w-2 h-1.5 md:h-2 bg-[#2563EB] rounded-full animate-pulse"
                                        style={{ animationDelay: `${i * 200}ms` }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Corner Decorations */}
                        <div className="absolute top-3 md:top-4 right-3 md:right-4 w-6 md:w-8 h-6 md:h-8 border-t-2 border-r-2 border-[#2563EB]/30 rounded-tr-xl" />
                        <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 w-6 md:w-8 h-6 md:h-8 border-b-2 border-l-2 border-[#2DD4BF]/30 rounded-bl-xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline
