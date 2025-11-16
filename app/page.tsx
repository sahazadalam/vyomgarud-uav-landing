'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Capabilities from '@/components/Capabilities'
import Highlights from '@/components/Highlights'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Capabilities />
        <Highlights />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}