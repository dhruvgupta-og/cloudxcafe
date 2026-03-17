"use client";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-20 sm:py-24 relative overflow-hidden flex flex-col items-center">
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-cyan-900/20 blur-[100px]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 flex flex-col items-center w-full"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <MapPin size={12} />
            Find Us
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 w-full">
            Come Visit{" "}
            <span className="gradient-text">CloudX</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto w-full px-4">
            We&apos;re right on University Road, Govindpuri — easy to find, impossible to forget.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch w-full">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden neon-border-cyan shadow-2xl shadow-cyan-900/20 min-h-[380px] relative"
          >
            <iframe
              title="CloudX Cafe Location Map"
              src="https://maps.google.com/maps?q=CloudX+Cafe+University+Road+Govindpuri+Gwalior+474011&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] border-0 grayscale-[20%] opacity-90"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            {/* Address card */}
            <div className="glass rounded-2xl p-6 border border-white/8 neon-border-purple flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">CloudX Cafe</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Infront of Monte Carlo<br />
                    14-15 University Road<br />
                    Govindpuri<br />
                    Gwalior, Madhya Pradesh 474011
                  </p>
                </div>
              </div>
            </div>

            {/* Landmark */}
            <div className="glass rounded-2xl p-5 border border-white/5">
              <div className="text-gray-500 text-xs uppercase tracking-widest mb-2">Landmark</div>
              <p className="text-gray-300 text-sm">📍 In front of Monte Carlo showroom, University Road</p>
            </div>

            {/* Directions button */}
            <a
              id="get-directions-btn"
              href="https://maps.google.com/?q=CloudX+Cafe+University+Road+Govindpuri+Gwalior+Madhya+Pradesh+474011"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-500 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 text-base"
            >
              <Navigation size={20} />
              Get Directions on Google Maps
            </a>

            {/* Parking note */}
            <div className="glass rounded-xl p-4 border border-white/5 text-center">
              <p className="text-gray-500 text-xs">🚗 Ample parking available on University Road</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
