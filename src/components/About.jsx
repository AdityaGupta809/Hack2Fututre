import React from 'react'

const About = () => {
    return (
        <section id="about" className="relative z-30 py-16 md:py-32 px-4 sm:px-6 md:px-16 lg:px-32">
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-blue-600/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 w-[150px] md:w-[300px] h-[150px] md:h-[300px] bg-[#2DD4BF]/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight section-heading">
                        WHAT IS HACK2FUTURE?
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left - Description */}
                    <div className="space-y-4 md:space-y-6">
                        <p className="text-base md:text-xl text-white/80 leading-relaxed">
                            Hack2Future 2.0 is a 24-hour innovation marathon where brilliant minds come together to build solutions that shape tomorrow. Join us in this cosmic journey of creativity and technology.
                        </p>
                        <p className="text-base md:text-xl text-white/60 leading-relaxed">
                            Whether you're a seasoned developer or just starting your coding journey, this is your launchpad to turn groundbreaking ideas into reality alongside mentors and industry experts.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 md:pt-6">
                            {[
                                { value: '24+', label: 'Hours' },
                                { value: '500+', label: 'Participants' },
                                { value: '₹1L+', label: 'Prizes' }
                            ].map((stat) => (
                                <div key={stat.label} className="text-center p-3 md:p-4 bg-white/5 border border-white/10 rounded-lg md:rounded-xl backdrop-blur-sm">
                                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2DD4BF]">{stat.value}</div>
                                    <div className="text-xs md:text-sm text-white/60 mt-0.5 md:mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Feature Cards */}
                    <div className="space-y-3 md:space-y-4">
                        {[
                            { icon: '🚀', title: 'Innovation', desc: 'Push boundaries with cutting-edge technologies' },
                            { icon: '🤝', title: 'Collaboration', desc: 'Team up with like-minded innovators' },
                            { icon: '🏆', title: 'Recognition', desc: 'Showcase your skills to industry leaders' },
                            { icon: '📚', title: 'Learning', desc: 'Gain hands-on experience with mentorship' }
                        ].map((feature) => (
                            <div key={feature.title} className="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                                <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                                <div>
                                    <h3 className="text-base md:text-lg font-semibold text-white">{feature.title}</h3>
                                    <p className="text-white/60 text-xs md:text-sm mt-0.5 md:mt-1">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
