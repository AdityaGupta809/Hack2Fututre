import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const navItems = ['About', 'Gallery', 'Problem', 'Prizes', 'Timeline', 'Sponsors', 'Contact'];

    // Track active section using Intersection Observer
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Also observe hero section to clear active state when at top
        const heroSection = document.getElementById('hero');
        if (heroSection) observer.observe(heroSection);

        navItems.forEach((item) => {
            const section = document.getElementById(item.toLowerCase());
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Mobile Header - Logo and Menu Button */}
            <header className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between pt-4 px-4 bg-black/60 backdrop-blur-xl border-b border-white/5">
                {/* Logo */}
                <div className="bg-black rounded-full p-[2px] border border-white/10 shadow-xl">
                    <div className="bg-zinc-950 rounded-full p-2">
                        <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="text-white p-2 z-50 relative"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </header>

            {/* Desktop Header */}
            <header className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-center pt-6 px-10">
                {/* Logo - Desktop */}
                <div className="fixed left-10 top-6">
                    <div className="bg-black rounded-full p-[3px] border border-white/10 shadow-xl hover:border-white/20 transition-all duration-300">
                        <div className="bg-zinc-950 rounded-full p-2.5">
                            <img src="/logo.png" alt="Logo" className="w-14 h-14 object-contain" />
                        </div>
                    </div>
                </div>

                {/* Desktop Navigation Pill */}
                <nav className="flex items-center bg-black/60 backdrop-blur-xl px-2 py-2.5 rounded-full border border-white/10 shadow-2xl hover:border-white/15 transition-colors duration-300">
                    <div className="flex items-center px-4 lg:px-6">
                        {navItems.map((item, idx, arr) => {
                            const isActive = activeSection === item.toLowerCase();
                            return (
                                <React.Fragment key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className={`relative text-xs lg:text-sm font-semibold tracking-wide px-3 lg:px-5 py-2 transition-all duration-300 ${isActive
                                            ? 'text-white'
                                            : 'text-white/60 hover:text-white/90'
                                            }`}
                                    >
                                        {item}
                                        {/* Active indicator underline */}
                                        <span
                                            className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-[#2563EB] to-[#2DD4BF] rounded-full transition-all duration-300 ${isActive ? 'w-4/5 opacity-100' : 'w-0 opacity-0'
                                                }`}
                                        />
                                        {/* Subtle glow for active item */}
                                        {isActive && (
                                            <span className="absolute inset-0 bg-white/5 rounded-lg -z-10" />
                                        )}
                                    </a>
                                    {idx < arr.length - 1 && (
                                        <div className="w-[1px] h-3 bg-white/10 mx-0.5 lg:mx-1" />
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </nav>
            </header>

            {/* Mobile Navigation Overlay */}
            <div className={`fixed inset-0 bg-black/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center space-y-6 transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                {navItems.map((item, idx) => {
                    const isActive = activeSection === item.toLowerCase();
                    return (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={`text-2xl sm:text-3xl font-bold transition-all duration-300 transform hover:scale-105 relative ${isActive ? 'text-[#2DD4BF]' : 'text-white hover:text-[#2DD4BF]'
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                transitionDelay: isMenuOpen ? `${idx * 50}ms` : '0ms',
                                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                                opacity: isMenuOpen ? 1 : 0
                            }}
                        >
                            {item}
                            {/* Active dot indicator for mobile */}
                            {isActive && (
                                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#2DD4BF] rounded-full" />
                            )}
                        </a>
                    );
                })}
            </div>
        </>
    )
}

export default Navbar
