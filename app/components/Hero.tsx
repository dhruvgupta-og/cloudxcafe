"use client";
import { motion } from "framer-motion";
import { MapPin, ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/cafe-entrance.png"
          alt="CloudX Cafe Entrance – vibrant neon-lit café in Gwalior"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Multi-layer overlay for dark neon effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-transparent to-pink-900/30" />
      </div>

      {/* Neon Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/20 blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-pink-600/15 blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-600/10 blur-[150px]" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] text-center px-4 sm:px-6 w-full max-w-7xl mx-auto pt-28 pb-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full glass neon-border-purple mb-6 sm:mb-8 mt-10 w-auto"
        >
          <Sparkles size={14} className="text-purple-400 flex-shrink-0" />
          <span className="text-xs sm:text-sm font-medium text-purple-300 text-center">Gwalior&apos;s Most Vibrant Café</span>
          <Sparkles size={14} className="text-pink-400 flex-shrink-0" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 w-full max-w-5xl mx-auto text-center"
        >
          Experience the{" "}
          <span className="gradient-text block mt-2 text-center">Vibe at CloudX</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl xl:text-2xl text-gray-300 w-full max-w-3xl mx-auto leading-relaxed mb-8 px-2 text-center"
        >
          Gwalior&apos;s Favorite Hangout Spot for Coffee, Mocktails & Good Times
        </motion.p>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-400 text-xs sm:text-sm mb-8 sm:mb-10 w-full text-center"
        >
          <div className="flex items-center justify-center gap-2"><MapPin size={14} className="text-pink-400 hidden sm:block" /><span>Govindpuri, University Road, Gwalior</span></div>
          <span className="hidden sm:inline">·</span>
          <span>Open till 11:30 PM</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4"
        >
          <a
            id="hero-view-menu"
            href="#menu"
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-size-200 text-white font-bold text-sm sm:text-base hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 min-w-[160px] text-center w-full sm:w-auto flex justify-center items-center"
          >
            🍽️ View Menu
          </a>
          <a
            id="hero-directions"
            href="https://maps.google.com/?q=CloudX+Cafe+University+Road+Gwalior"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full glass neon-border-purple text-white font-bold text-sm sm:text-base hover:bg-purple-500/20 hover:scale-105 transition-all duration-300 min-w-[160px] text-center w-full sm:w-auto flex justify-center items-center"
          >
            📍 Get Directions
          </a>
          <a
            id="hero-reserve"
            href="#reservation"
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full glass neon-border-pink text-white font-bold text-sm sm:text-base hover:bg-pink-500/20 hover:scale-105 transition-all duration-300 min-w-[160px] text-center w-full sm:w-auto flex justify-center items-center"
          >
            🪑 Reserve Table
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 lg:flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-12 sm:mt-14 w-full"
        >
          {[
            { value: "4.0★", label: "Google Rating" },
            { value: "200+", label: "Happy Customers" },
            { value: "₹200–₹400", label: "Per Person" },
            { value: "11:30 PM", label: "Closes At" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-black gradient-text">{value}</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-gray-500"
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  );
}
