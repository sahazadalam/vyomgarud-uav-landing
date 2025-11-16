'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  ChevronDown, Play, Shield, Target, Zap, Eye, Lock, Cpu,
  Drone, Satellite, Radar, Camera, Navigation, Cloud, Wifi,
  Mail, Phone, MapPin, Send, Clock, MessageCircle, CheckCircle,
  Twitter, Linkedin, Youtube
} from 'lucide-react'

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
        <HeroSection />
        <AboutSection />
        <CapabilitiesSection />
        <HighlightsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </main>
  )
}

// Hero Section Component
function HeroSection() {
  const [currentFeature, setCurrentFeature] = useState(0)

  const features = [
    { icon: Shield, text: "Military-Grade Security" },
    { icon: Target, text: "Precision Targeting" },
    { icon: Zap, text: "Rapid Deployment" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [features.length])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const FeatureIcon = features[currentFeature].icon

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,123,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,123,0,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="gradient-text block">VYOM</span>
            <span className="text-white block">GARUD</span>
          </motion.h1>
          
          {/* Rotating Feature Text */}
          <motion.div 
            className="h-16 mb-8 flex items-center justify-center"
            key={currentFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 text-2xl md:text-3xl text-orange-500 font-semibold">
              <FeatureIcon className="w-8 h-8" />
              {features[currentFeature].text}
            </div>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Advanced Autonomous <span className="text-orange-500 font-semibold">UAV Systems</span> for 
            Defense & Strategic Security Operations
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover-glow flex items-center gap-3 group"
            >
              <Play size={24} className="group-hover:scale-110 transition-transform" />
              Explore Capabilities
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 group"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { number: '50+', label: 'Active Deployments' },
              { number: '99.7%', label: 'Mission Success' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={scrollToAbout}
          >
            <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-orange-500 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// About Section Component
function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Military Grade",
      description: "Built to withstand extreme conditions and combat scenarios with reinforced durability",
    },
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Advanced targeting and navigation systems for unmatched accuracy in critical operations",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Quick setup and deployment capabilities for time-sensitive mission requirements",
    },
    {
      icon: Eye,
      title: "Advanced Surveillance",
      description: "High-resolution imaging and real-time data transmission for comprehensive situational awareness",
    },
    {
      icon: Lock,
      title: "Secure Communications",
      description: "Encrypted data links and secure communication protocols for mission integrity",
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description: "Smart autonomous systems with machine learning capabilities for adaptive mission execution",
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            className="text-orange-500 font-semibold text-lg mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            ABOUT VYOMGARUD
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Mission</span> Ready Systems
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            VyomGarud specializes in developing cutting-edge UAV systems that combine 
            <span className="text-orange-500 font-semibold"> advanced autonomy</span> with 
            <span className="text-orange-500 font-semibold"> military-grade reliability</span>. 
            Our drones are engineered for precision, endurance, and superior performance in the world's most demanding environments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-500 h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 glow-orange group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 flex-grow">{feature.description}</p>
                
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-orange-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Capabilities Section Component
function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState(0)

  const capabilities = [
    {
      icon: Drone,
      title: "Tactical UAV Series",
      description: "Compact, agile drones for reconnaissance and surveillance missions",
      features: ["60-90 min flight time", "10-15km operational range", "HD real-time video feed"],
    },
    {
      icon: Satellite,
      title: "Strategic Long-Range",
      description: "Extended range systems for border patrol and area monitoring",
      features: ["180-240 min flight time", "50-100km operational range", "SATCOM connectivity"],
    },
    {
      icon: Radar,
      title: "Autonomous Swarms",
      description: "Coordinated multi-drone operations for comprehensive coverage",
      features: ["AI-powered coordination", "Real-time mesh networking", "Scalable fleet management"],
    },
    {
      icon: Camera,
      title: "ISR Packages",
      description: "Intelligence, Surveillance, and Reconnaissance integrated systems",
      features: ["Multi-spectral imaging", "Thermal & night vision", "AI target tracking"],
    }
  ]

  const currentCapability = capabilities[activeTab]
  const CurrentIcon = currentCapability.icon

  return (
    <section id="capabilities" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Advanced <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive UAV solutions engineered for modern defense and security requirements
          </p>
        </motion.div>

        <div className="bg-gradient-to-br from-gray-800 to-black rounded-3xl p-8 border border-gray-700">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Tactical', 'Strategic', 'Swarms', 'ISR'].map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-orange-500 text-white shadow-lg glow-orange'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center glow-orange">
                  <CurrentIcon size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {currentCapability.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-300 text-lg mb-8">
                {currentCapability.description}
              </p>

              <div className="space-y-3 mb-8">
                {currentCapability.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-64 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl border border-gray-600 flex items-center justify-center">
              <div className="absolute w-24 h-8 bg-gray-300 rounded-lg z-10"></div>
              {[1, 2, 3, 4].map((index) => (
                <motion.div
                  key={index}
                  className="absolute w-12 h-12 border-4 border-orange-500 rounded-full"
                  style={{
                    top: index <= 2 ? '20%' : '60%',
                    left: index % 2 === 0 ? '20%' : '60%'
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Highlights Section Component
function HighlightsSection() {
  const highlights = [
    { icon: Clock, value: "240", label: "Max Flight Time", suffix: "min" },
    { icon: Shield, value: "IP68", label: "Weather Resistance", suffix: "Rated" },
    { icon: Navigation, value: "100", label: "Operational Range", suffix: "km" },
    { icon: Zap, value: "99.8%", label: "System Reliability", suffix: "" },
  ]

  return (
    <section id="highlights" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Performance <span className="gradient-text">Highlights</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const HighlightIcon = highlight.icon
            return (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-gray-800/30 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gray-600">
                  <HighlightIcon size={28} className="text-orange-500" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {highlight.value}
                  <span className="text-orange-500 text-lg ml-1">{highlight.suffix}</span>
                </div>
                <div className="text-gray-300 font-semibold">{highlight.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Contact Section Component
function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Start Your <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to enhance your operational capabilities with advanced UAV systems?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover-glow"
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

// Footer Section Component
function FooterSection() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-8 bg-orange-500 rounded-lg"></div>
          <h3 className="text-2xl font-bold">
            <span className="text-orange-500">VYOM</span>
            <span className="text-white">GARUD</span>
          </h3>
        </div>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          Advanced autonomous UAV systems for defense, security, and strategic operations.
        </p>
        <p className="text-gray-500 text-sm">
          © 2024 VyomGarud Defense Systems. All rights reserved.
        </p>
      </div>
    </footer>
  )
}