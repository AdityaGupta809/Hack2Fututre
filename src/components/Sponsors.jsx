import React from 'react'

const Sponsors = () => {
    const sponsorTiers = [
        {
            tier: 'Title Sponsors',
            sponsors: [
                { name: 'TechCorp', logo: null },
                { name: 'InnovateTech', logo: null }
            ],
            size: 'large'
        },
        {
            tier: 'Gold Sponsors',
            sponsors: [
                { name: 'CloudBase', logo: null },
                { name: 'DataFlow', logo: null },
                { name: 'AILabs', logo: null }
            ],
            size: 'medium'
        },
        {
            tier: 'Silver Sponsors',
            sponsors: [
                { name: 'DevTools', logo: null },
                { name: 'CodeHub', logo: null },
                { name: 'TechStart', logo: null },
                { name: 'ByteForce', logo: null }
            ],
            size: 'small'
        }
    ]

    const getSizeClasses = (size) => {
        switch (size) {
            case 'large':
                return 'w-36 h-24 sm:w-44 sm:h-28 md:w-64 md:h-36'
            case 'medium':
                return 'w-28 h-18 sm:w-36 sm:h-22 md:w-48 md:h-28'
            case 'small':
                return 'w-24 h-14 sm:w-28 sm:h-16 md:w-36 md:h-20'
            default:
                return 'w-28 h-18 sm:w-36 sm:h-20'
        }
    }

    return (
        <section id="sponsors" className="relative z-30 py-16 md:py-32 px-4 sm:px-6 md:px-16 lg:px-32">
            {/* Background Glow Effect */}
            <div className="absolute top-1/3 left-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#2563EB]/5 blur-[150px] md:blur-[200px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                    <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-white/5 border border-white/10 rounded-full text-[#2DD4BF] text-xs sm:text-sm font-medium tracking-wider mb-4">
                        OUR PARTNERS
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-space tracking-tight">
                        <span className="text-[#2563EB]">Sponsors</span> & Partners
                    </h2>
                    <p className="text-white/60 mt-3 md:mt-4 max-w-xl mx-auto text-sm sm:text-base px-4">
                        Proudly supported by industry leaders who believe in nurturing innovators
                    </p>
                </div>

                {/* Sponsor Tiers */}
                <div className="space-y-10 md:space-y-16">
                    {sponsorTiers.map((tier) => (
                        <div key={tier.tier} className="text-center">
                            <h3 className="text-sm md:text-lg font-semibold text-white/70 mb-5 md:mb-8 uppercase tracking-wider">
                                {tier.tier}
                            </h3>

                            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                                {tier.sponsors.map((sponsor) => (
                                    <div
                                        key={sponsor.name}
                                        className={`${getSizeClasses(tier.size)} flex items-center justify-center bg-white/5 border border-white/10 rounded-xl md:rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 group cursor-pointer`}
                                    >
                                        {/* Placeholder for sponsor logo */}
                                        <div className="text-center">
                                            <div className="text-xl md:text-3xl mb-0.5 md:mb-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                                🏢
                                            </div>
                                            <span className="text-white/50 text-[10px] sm:text-xs md:text-sm font-medium group-hover:text-white/80 transition-colors duration-300">
                                                {sponsor.name}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Sponsors
