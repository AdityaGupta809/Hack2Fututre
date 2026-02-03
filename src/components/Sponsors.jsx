import React from 'react'

const Sponsors = () => {
    const sponsors = [
        { name: 'Cyseck', logo: '/sponsors/cyseck_logo.avif' },
        { name: 'IIITD Research Park', logo: '/sponsors/iiitd_research_park_logo.png' },
        { name: 'KDEM', logo: '/sponsors/kdem_logo.png' }
    ]

    return (
        <section id="sponsors" className="relative z-30 py-16 md:py-32 px-4 sm:px-6 md:px-16 lg:px-32">
            {/* Background Glow Effect */}
            <div className="absolute top-1/3 left-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#2563EB]/5 blur-[150px] md:blur-[200px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight section-heading">
                        SPONSORS & PARTNERS
                    </h2>
                    <p className="text-white/60 mt-3 md:mt-4 max-w-xl mx-auto text-sm sm:text-base px-4">
                        Proudly supported by industry leaders who believe in nurturing innovators
                    </p>
                </div>

                {/* Sponsors Grid */}
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
                    {sponsors.map((sponsor) => (
                        <div
                            key={sponsor.name}
                            className="w-48 h-32 sm:w-64 sm:h-40 md:w-80 md:h-48 flex items-center justify-center bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer p-4 md:p-6 shadow-lg"
                        >
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Sponsors
