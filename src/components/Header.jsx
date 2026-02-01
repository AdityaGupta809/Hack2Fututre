import React, { useState } from 'react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };


  const navLinks = [
    ['about-details', 'ABOUT'],
    ['problems', 'PROBLEM'],
    ['prizes', 'PRIZES'],
    ['timeline', 'TIMELINE'],
    ['allies', 'SPONSORS'],
    ['contact', 'CONTACT'],
  ];


  return (
    <>
      <header className="flex justify-between items-center p-4 md:p-[20px_60px] relative z-[100] border-b border-[rgba(167,139,250,0.05)] backdrop-blur-sm sticky top-0">
        <div className="flex items-center gap-3 md:gap-[15px]">
          <div className="border border-[#a855f7] p-[6px_10px] md:p-[8px_12px] font-['Share_Tech_Mono'] text-[10px] md:text-xs leading-[1.3] text-[#c084fc] bg-gradient-to-br from-[rgba(168,85,247,0.3)] to-[rgba(244,114,182,0.2)] shadow-[0_0_20px_rgba(168,85,247,0.2)] cursor-pointer hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            HACK<br />FUTURE
          </div>
          <div className="font-['Share_Tech_Mono'] text-[10px] md:text-[11px] hidden sm:block">
            <div className="text-[rgba(255,255,255,0.5)] text-[9px] md:text-xs">SYSTEM STATUS</div>
            <div className="text-[#c084fc] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              ONLINE // V2.0
            </div>
          </div>
        </div>


        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-[25px]">
          {navLinks.map(([id, text]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => scrollToSection(e, id)}
              className="font-['Share_Tech_Mono'] text-[12px] tracking-[2px] text-[rgba(255,255,255,0.6)] hover:text-[#c084fc] transition-all duration-300 relative group cursor-pointer"
            >
              <span className="text-[#a855f7] mr-1">✧</span>
              {text}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-gradient-to-r from-[#a855f7] to-[#f472b6] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>


        {/* Right side - affiliation + hamburger */}
        <div className="flex items-center gap-4">
          <div className="text-right font-['Share_Tech_Mono'] hidden md:block">
            <div className="text-[9px] text-[rgba(255,255,255,0.5)] tracking-[1px]">AFFILIATION</div>
            <div className="flex items-center gap-[8px] text-[12px] md:text-[14px]">
              <span className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] border border-[#a855f7] rounded-full flex items-center justify-center text-[9px] md:text-[10px] text-[#f472b6] bg-[rgba(168,85,247,0.15)] shadow-[0_0_12px_rgba(168,85,247,0.3)]">★</span>
              IIIT DHARWAD
            </div>
          </div>


          {/* Mobile hamburger button */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[2px] bg-[#c084fc] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`w-6 h-[2px] bg-[#c084fc] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-[2px] bg-[#c084fc] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>
        </div>
      </header>


      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden fixed top-[60px] left-0 right-0 backdrop-blur-sm border-b border-[rgba(167,139,250,0.05)] z-[99] transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col p-4 gap-1">
          {navLinks.map(([id, text]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => scrollToSection(e, id)}
              className="font-['Share_Tech_Mono'] text-[14px] tracking-[2px] text-[rgba(255,255,255,0.7)] hover:text-[#c084fc] transition-all duration-300 py-3 px-4 border-b border-[rgba(167,139,250,0.1)] hover:bg-[rgba(168,85,247,0.2)] rounded"
            >
              <span className="text-[#a855f7] mr-2">✧</span>
              {text}
            </a>
          ))}
          {/* Mobile affiliation */}
          <div className="flex items-center gap-3 py-4 px-4 text-[rgba(255,255,255,0.5)] font-['Share_Tech_Mono'] text-[12px]">
            <span className="w-[22px] h-[22px] border border-[#a855f7] rounded-full flex items-center justify-center text-[10px] text-[#f472b6] bg-[rgba(168,85,247,0.15)]">★</span>
            IIIT DHARWAD
          </div>
        </nav>
      </div>
    </>
  );
};


export default Header;