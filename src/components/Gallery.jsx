import React, { useState, useRef, useEffect } from 'react'

const Gallery = () => {
    const [isPaused, setIsPaused] = useState(false)
    const scrollRef = useRef(null)

    const images = [
        { id: 1, gradient: 'from-blue-600/40 to-purple-600/40' },
        { id: 2, gradient: 'from-[#2DD4BF]/40 to-blue-600/40' },
        { id: 3, gradient: 'from-purple-600/40 to-pink-600/40' },
        { id: 4, gradient: 'from-blue-600/40 to-[#2DD4BF]/40' },
        { id: 5, gradient: 'from-pink-600/40 to-purple-600/40' },
        { id: 6, gradient: 'from-[#2563EB]/40 to-blue-400/40' },
        { id: 7, gradient: 'from-teal-500/40 to-blue-500/40' },
        { id: 8, gradient: 'from-indigo-600/40 to-purple-600/40' }
    ]

    // Duplicate images for seamless infinite scroll
    const duplicatedImages = [...images, ...images]

    useEffect(() => {
        const scrollContainer = scrollRef.current
        if (!scrollContainer) return

        let animationId
        let scrollPosition = 0
        const scrollSpeed = 0.8

        const animate = () => {
            if (!isPaused) {
                scrollPosition += scrollSpeed

                if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                    scrollPosition = 0
                }

                scrollContainer.scrollLeft = scrollPosition
            }
            animationId = requestAnimationFrame(animate)
        }

        animationId = requestAnimationFrame(animate)

        return () => {
            cancelAnimationFrame(animationId)
        }
    }, [isPaused])

    return (
        <section id="gallery" className="relative z-30 py-16 md:py-32">
            {/* Background Glow Effect */}
            <div className="absolute top-1/4 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-purple-600/10 blur-[120px] md:blur-[180px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-32">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight section-heading">
                        EVENT GALLERY
                    </h2>
                    <p className="text-white/60 mt-3 md:mt-4 max-w-xl mx-auto text-sm sm:text-base px-4">
                        Glimpses from our previous hackathons and amazing innovations
                    </p>
                </div>
            </div>

            {/* Auto-scrolling Gallery */}
            <div
                ref={scrollRef}
                className="flex gap-3 md:gap-6 overflow-x-hidden cursor-pointer py-4 px-2"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
            >
                {duplicatedImages.map((image, idx) => (
                    <div
                        key={`${image.id}-${idx}`}
                        className="flex-shrink-0 w-56 h-36 sm:w-72 sm:h-48 md:w-96 md:h-64 relative group overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-white/20"
                    >
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${image.gradient}`} />

                        {/* Decorative Stars */}
                        <div className="absolute top-3 md:top-4 right-3 md:right-4 w-1.5 md:w-2 h-1.5 md:h-2 bg-white rounded-full animate-pulse" />
                        <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 w-1 md:w-1.5 h-1 md:h-1.5 bg-white/80 rounded-full animate-pulse" style={{ animationDelay: '100ms' }} />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-white text-sm md:text-lg font-medium">Event {image.id}</span>
                            </div>
                        </div>

                        {/* Image placeholder icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                            <span className="text-3xl md:text-5xl">📸</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-32 mt-6 md:mt-8">
                <p className="text-center text-white/40 text-xs md:text-sm">
                    <span className="inline-block animate-pulse">●</span> Hover/touch to pause
                </p>
            </div>
        </section>
    )
}

export default Gallery
