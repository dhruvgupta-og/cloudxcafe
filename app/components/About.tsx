"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Modern aesthetic interiors",
  "Instagram-worthy ambience",
  "Affordable food & drinks",
  "Popular among college students",
  "Cozy indoor & outdoor seating",
  "Open until 11:30 PM daily",
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" className="py-20 sm:py-24 relative overflow-hidden flex flex-col items-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-900/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-pink-900/15 blur-[100px]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden neon-border-purple shadow-2xl shadow-purple-900/30 h-[420px]">
              <Image
                src="/cafe-interior.png"
                alt="CloudX Cafe interior with hanging plants and neon lighting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
            </div>
            {/* Floating secondary image */}
            <div className="absolute -bottom-10 -right-8 w-48 h-56 rounded-xl overflow-hidden neon-border-pink shadow-xl shadow-pink-900/30 border-2 border-[#12121a]">
              <Image
                src="/cafe-mocktail.png"
                alt="CloudX Cafe signature mocktail drink"
                fill
                className="object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute top-6 left-6 glass rounded-xl px-4 py-3 neon-border-cyan">
              <div className="text-2xl font-black gradient-text">4.0★</div>
              <div className="text-xs text-gray-400">200+ Reviews</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="pt-12 md:pt-0 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-widest mb-4">
              About Us
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
              More Than Just a{" "}
              <span className="gradient-text">Café</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 max-w-lg md:max-w-none">
              CloudX Cafe is a modern social café in the heart of Gwalior where great food,
              refreshing drinks, and vibrant ambience come together.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg md:max-w-none">
              With colorful interiors, artistic decor, hanging plants, and cozy seating, it&apos;s
              the perfect place for friends, dates, and late-evening hangouts. Whether you&apos;re
              here for a quick coffee or a long chill session, CloudX always delivers the vibe.
            </p>

            {/* Highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full text-left max-w-lg md:max-w-none">
              {highlights.map((h) => (
                <li key={h} className="flex items-center justify-center sm:justify-start gap-3 text-gray-300 text-sm">
                  <CheckCircle2 size={16} className="text-purple-400 flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0 max-w-xs sm:max-w-none mx-auto md:mx-0">
              <a
                href="#contact"
                className="flex items-center justify-center px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                Visit Us Today
              </a>
              <a
                href="#gallery"
                className="flex items-center justify-center px-6 py-3.5 rounded-full glass neon-border-purple text-white font-semibold text-sm hover:bg-purple-500/10 transition-all duration-300 w-full sm:w-auto"
              >
                See Gallery
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
