import React from 'react'

const Hero = () => {
    return (
        <main className="relative z-30 flex flex-col items-center md:items-start justify-center min-h-screen pt-20 px-6 md:pl-32 md:pr-6">
            {/* Astronaut - Mobile: above text, Desktop: right side centered */}
            <div className="relative md:absolute md:top-1/2 md:right-[5%] lg:right-[10%] md:-translate-y-1/2 w-[60%] sm:w-[50%] md:w-[35%] lg:w-[40%] mb-8 md:mb-0">
                <img
                    src="/astronaut.png"
                    alt="Astronaut"
                    className="w-full z-20 pointer-events-none select-none animate-float drop-shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                />
            </div>

            {/* Text Content */}
            <div className="space-y-4 md:space-y-6 text-center md:text-left max-w-2xl">
                <div className="relative z-30">
                    <div className="absolute -inset-x-20 -inset-y-10 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[100px] font-bold font-space tracking-tighter leading-[0.95] whitespace-pre-wrap relative">
                        <span className="block mb-2">Hack 2</span>
                        <span className="block italic">Future 2.0</span>
                    </h1>
                </div>

                <p className="text-base sm:text-lg md:text-2xl text-white font-medium tracking-wide pt-4 md:pt-6 font-inter">
                    Hack the present, shape the Future
                </p>

                <div className="pt-6 md:pt-10">
                    <button className="bg-[#2563EB] hover:bg-blue-600 text-white px-6 py-3 md:px-10 md:py-4 rounded-xl flex items-center gap-3 font-bold text-base md:text-lg transition-all duration-300 shadow-xl shadow-blue-600/20 active:scale-[0.97] group mx-auto md:mx-0">
                        Explore Events
                        <span className="text-xl md:text-2xl transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Hero
