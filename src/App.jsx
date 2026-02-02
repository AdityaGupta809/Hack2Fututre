import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Problem from './components/Problem'
import Prizes from './components/Prizes'
import Timeline from './components/Timeline'
import Sponsors from './components/Sponsors'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-x-hidden font-inter select-none">
      {/* Earth Horizon - Fixed in background */}
      <img
        src="/earth.jpg"
        alt="Earth"
        className="fixed -bottom-10 -left-20 w-[100%] md:w-[85%] lg:w-[110%] z-[1] pointer-events-none select-none max-w-none origin-bottom-left"
      />

      {/* Top Header / Navigation */}
      <Navbar />

      {/* Main Hero Content */}
      <Hero />

      {/* Page Sections */}
      <div className="relative z-20">
        <About />
        <Gallery />
        <Problem />
        <Prizes />
        <Timeline />
        <Sponsors />
        <Contact />
      </div>
    </div>
  )
}

export default App
