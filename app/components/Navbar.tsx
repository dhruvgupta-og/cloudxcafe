"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Coffee } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Specialties", href: "#specialties" },
  { label: "Gallery", href: "#gallery" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
          scrolled
            ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-purple-900/30 shadow-lg shadow-purple-900/10"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/60 transition-all duration-300">
              <Coffee size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold gradient-text whitespace-nowrap">CloudX Cafe</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 justify-center flex-1 mx-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors duration-200 relative group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Reserve CTA */}
          <div className="hidden lg:flex items-center justify-end flex-shrink-0">
            <button
              onClick={() => {
                const element = document.getElementById("reservation");
                if (element) {
                   element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Reserve a Table
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-300 hover:text-purple-400 transition-colors ml-auto mr-4 md:mr-0"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-[#0a0a0f]/98 backdrop-blur-xl border-b border-purple-900/30 py-6 px-6"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-base font-medium text-gray-300 hover:text-purple-400 py-2 border-b border-white/5 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    const element = document.getElementById("reservation");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block w-full text-center px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold"
                >
                  Reserve a Table
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
