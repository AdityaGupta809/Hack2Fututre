import React from 'react'

const Prizes = () => {
    return (
        <section id="prizes" className="relative z-30 py-16 md:py-32 px-4 sm:px-6 md:px-16 lg:px-32">
            {/* Background Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-yellow-500/10 blur-[120px] md:blur-[180px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight section-heading">
                        WIN AMAZING PRIZES
                    </h2>
                </div>

                {/* Coming Soon Card - Professional Design */}
                <div className="flex flex-col items-center justify-center py-8 md:py-16">
                    <div className="relative w-full max-w-2xl mx-4">
                        {/* Main Card */}
                        <div className="relative p-8 md:p-14 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl md:rounded-3xl backdrop-blur-xl overflow-hidden">
                            {/* Animated Background Grid */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                                    backgroundSize: '40px 40px'
                                }} />
                            </div>

                            {/* Glow Effects */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-yellow-500/20 blur-[80px] rounded-full" />
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#2DD4BF]/10 blur-[60px] rounded-full" />

                            <div className="relative z-10 text-center">
                                {/* Status Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                                    </span>
                                    <span className="text-yellow-400 text-xs font-semibold tracking-wider uppercase">Revealing Soon</span>
                                </div>

                                {/* Main Heading */}
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                                    Coming Soon
                                </h3>

                                {/* Description */}
                                <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8">
                                    Exciting prizes await! We're finalizing amazing rewards for the winners.
                                    Prize pool details will be revealed soon.
                                </p>

                                {/* Decorative Line */}
                                <div className="flex items-center justify-center gap-3 mb-6">
                                    <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/20" />
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                                    <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/20" />
                                </div>

                                {/* Info Text */}
                                <p className="text-white/30 text-xs tracking-wide uppercase">
                                    Stay tuned for updates
                                </p>
                            </div>
                        </div>

                        {/* Floating Decorative Elements */}
                        <div className="absolute -top-3 -right-3 w-6 h-6 border-2 border-yellow-500/40 rounded-lg rotate-45" />
                        <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-[#2DD4BF]/30 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prizes
