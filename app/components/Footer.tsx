"use client";
import { Coffee, Instagram, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 overflow-hidden w-full flex flex-col items-center">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-14 relative z-10 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <Coffee size={20} className="text-white" />
              </div>
              <span className="text-2xl font-black gradient-text">CloudX Cafe</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-5">
              A modern social café in the heart of Gwalior — where great food, signature mocktails,
              and vibrant ambience come together. Open till 11:30 PM.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href="https://wa.me/919993396109"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
                style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.557 4.116 1.532 5.849L.057 23.25a.75.75 0 00.922.921l5.532-1.46A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.677-.48-5.24-1.327l-.377-.212-3.906 1.03 1.056-3.814-.234-.389A9.938 9.938 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2.5 items-center md:items-start w-full">
              {[
                { label: "About Us", href: "#about" },
                { label: "Specialties", href: "#specialties" },
                { label: "Gallery", href: "#gallery" },
                { label: "Menu", href: "#menu" },
                { label: "Reviews", href: "#reviews" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-gray-500 text-sm hover:text-purple-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Contact</h3>
            <div className="flex flex-col gap-4 items-center md:items-start w-full">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                <MapPin size={15} className="text-purple-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-500 text-sm leading-relaxed">
                  14-15 University Road<br />
                  Govindpuri, Gwalior<br />
                  MP 474011
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 mt-2 md:mt-0">
                <Phone size={15} className="text-pink-400 flex-shrink-0" />
                <a href="tel:+919993396109" className="text-gray-500 text-sm hover:text-white transition-colors">
                  +91 99933 96109
                </a>
              </div>
              <div className="text-gray-500 text-sm mt-2 md:mt-0">
                🕐 Open Daily · Closes 11:30 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="neon-line mt-12 mb-6 w-full" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600 text-xs w-full">
          <span>© {year} CloudX Cafe, Gwalior. All rights reserved.</span>
          <span className="gradient-text font-semibold">Made with ❤️ in Gwalior</span>
        </div>
      </div>
    </footer>
  );
}
