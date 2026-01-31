import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import AboutSection from '../components/AboutSection';
import ProblemsSection from '../components/ProblemsSection';
import PrizesSection from '../components/PrizesSection';
import TimelineSection from '../components/TimelineSection';
import SponsorsSection from '../components/SponsorsSection';
import ContactSection from '../components/ContactSection';

const Footer = () => (
  <footer className="p-[30px_24px] md:p-[30px_60px] border-t border-[rgba(167,139,250,0.2)] flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 bg-[rgba(3,0,20,0.8)]">
    <div className="font-['Share_Tech_Mono'] text-[11px] text-[rgba(255,255,255,0.5)] tracking-[1px]">
      © 2026 HACK2FUTURE // IIIT DHARWAD // ALL SYSTEMS OPERATIONAL
    </div>
    <div className="font-['Share_Tech_Mono'] text-[11px] text-[rgba(255,255,255,0.5)] tracking-[1px]">
      SECTOR 580009 // INDIA
    </div>
  </footer>
);

const Hack2Future = () => {
  return (
    <>
      {/* Deep Space Background with Nebulas */}
      <div className="nebula-bg"></div>

      {/* Aurora Effect */}
      <div className="aurora"></div>

      {/* Three Layers of Twinkling Stars */}
      <div className="stars-layer-1"></div>
      <div className="stars-layer-2"></div>
      <div className="stars-layer-3"></div>

      {/* Floating Space Dust */}
      <div className="space-dust"></div>

      {/* Floating Celestial Bodies */}
      <div className="planet planet-1"></div>
      <div className="planet planet-2"></div>
      <div className="planet planet-3"></div>
      <div className="moon-ring"></div>

      {/* Multiple Shooting Stars */}
      <div className="shooting-star shooting-star-1"></div>
      <div className="shooting-star shooting-star-2"></div>
      <div className="shooting-star shooting-star-3"></div>
      <div className="shooting-star shooting-star-4"></div>

      {/* Constellation SVG */}
      <div className="constellation">
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
          {/* Constellation lines */}
          <g stroke="url(#starGrad)" strokeWidth="1" fill="none" opacity="0.3">
            <path d="M200,100 L350,180 L400,320 L320,450" />
            <path d="M1400,150 L1550,200 L1600,350 L1500,400 L1350,350" />
            <path d="M800,600 L950,650 L1000,800 L850,850" />
            <path d="M100,700 L200,750 L180,850" />
            <path d="M1700,600 L1800,700 L1750,850" />
          </g>
          {/* Constellation stars */}
          <g fill="#fff">
            <circle cx="200" cy="100" r="3" />
            <circle cx="350" cy="180" r="2" />
            <circle cx="400" cy="320" r="3" />
            <circle cx="320" cy="450" r="2" />
            <circle cx="1400" cy="150" r="3" />
            <circle cx="1550" cy="200" r="2" />
            <circle cx="1600" cy="350" r="3" />
            <circle cx="1500" cy="400" r="2" />
            <circle cx="1350" cy="350" r="2" />
            <circle cx="800" cy="600" r="2" />
            <circle cx="950" cy="650" r="3" />
            <circle cx="1000" cy="800" r="2" />
            <circle cx="850" cy="850" r="3" />
          </g>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Ticker />
        <AboutSection />
        <ProblemsSection />
        <PrizesSection />
        <TimelineSection />
        <SponsorsSection />
        <ContactSection />
        <Footer />
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Share+Tech+Mono&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }
        
        @keyframes pulse-border {
          0%, 100% { 
            box-shadow: 0 0 5px rgba(168,85,247,0.4), 0 0 10px rgba(168,85,247,0.2);
          }
          50% { 
            box-shadow: 0 0 20px rgba(168,85,247,0.6), 0 0 40px rgba(244,114,182,0.3), 0 0 60px rgba(139,92,246,0.2);
          }
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes cosmic-pulse {
          0%, 100% { 
            opacity: 0.9; 
            transform: scale(1);
            filter: brightness(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.01);
            filter: brightness(1.1);
          }
        }

        @keyframes glow-pulse {
          0%, 100% { 
            text-shadow: 0 0 20px rgba(168,85,247,0.5), 0 0 40px rgba(168,85,247,0.3);
          }
          50% { 
            text-shadow: 0 0 30px rgba(168,85,247,0.8), 0 0 60px rgba(244,114,182,0.5), 0 0 100px rgba(139,92,246,0.3);
          }
        }
        
        .animate-\\[blink_1s_infinite\\] { animation: blink 1s infinite; }
        .animate-\\[pulse-border_2s_infinite\\] { animation: pulse-border 2s infinite; }
        .animate-\\[scroll_20s_linear_infinite\\] { animation: scroll 20s linear infinite; }
        .animate-glow-pulse { animation: glow-pulse 3s ease-in-out infinite; }
      `}</style>
    </>
  );
};

export default Hack2Future;
