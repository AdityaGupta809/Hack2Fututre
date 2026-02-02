import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = ['About', 'Gallery', 'Problem', 'Prizes', 'Timeline', 'Sponsors', 'Contact'];

    return (
        <>
            {/* Mobile Header - Logo and Menu Button */}
            <header className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between pt-4 px-4 bg-black/50 backdrop-blur-lg">
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
                    <div className="bg-black rounded-full p-[3px] border border-white/10 shadow-xl">
                        <div className="bg-zinc-950 rounded-full p-2.5">
                            <img src="/logo.png" alt="Logo" className="w-14 h-14 object-contain" />
                        </div>
                    </div>
                </div>

                {/* Desktop Navigation Pill */}
                <nav className="flex items-center bg-black/50 backdrop-blur-xl px-2 py-2 rounded-full border border-white/10 shadow-2xl">
                    <div className="flex items-center px-4 lg:px-6">
                        {navItems.map((item, idx, arr) => (
                            <React.Fragment key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="relative text-xs lg:text-sm font-semibold tracking-wide px-3 lg:px-5 py-2 transition-all duration-300 text-white/70 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
                                >
                                    {item}
                                </a>
                                {idx < arr.length - 1 && (
                                    <div className="w-[1px] h-3 bg-white/10 mx-0.5 lg:mx-1" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </nav>
            </header>

            {/* Mobile Navigation Overlay */}
            <div className={`fixed inset-0 bg-black/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center space-y-6 transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                {navItems.map((item, idx) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-2xl sm:text-3xl font-bold text-white hover:text-[#2DD4BF] transition-all duration-300 transform hover:scale-105"
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                            transitionDelay: isMenuOpen ? `${idx * 50}ms` : '0ms',
                            transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                            opacity: isMenuOpen ? 1 : 0
                        }}
                    >
                        {item}
                    </a>
                ))}
            </div>
        </>
    )
}

export default Navbar
