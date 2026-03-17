"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, MapPin, Clock, CheckCircle2, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", guests: "2", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi CloudX Cafe! 👋%0A%0AI'd like to reserve a table:%0AName: ${form.name}%0APhone: ${form.phone}%0ADate: ${form.date}%0ATime: ${form.time}%0AGuests: ${form.guests}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919993396109?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative overflow-hidden flex flex-col items-center">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-900/20 blur-[140px]" />
      <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-pink-900/15 blur-[120px]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 flex flex-col items-center w-full"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 w-full">
            Contact &amp;{" "}
            <span className="gradient-text">Reservations</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto w-full px-4">
            Planning something special? Reserve your table or just say hi — we&apos;re always happy
            to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 w-full">
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5"
          >
            <div className="glass rounded-2xl p-6 border border-white/8 neon-border-purple flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-white font-bold text-xl mb-5">Visit Us</h3>
              <div className="flex flex-col gap-5 w-full">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Call Us</div>
                    <a href="tel:+919993396109" className="text-white font-semibold text-base hover:text-purple-400 transition-colors">
                      +91 99933 96109
                    </a>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-pink-400" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Address</div>
                    <p className="text-white font-semibold text-sm leading-relaxed">
                      14-15 University Road, Govindpuri<br />
                      Gwalior, MP 474011
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Opening Hours</div>
                    <p className="text-white font-semibold text-sm">Open Daily</p>
                    <p className="text-gray-400 text-sm">Closes at 11:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp button */}
            <a
              id="whatsapp-contact-btn"
              href="https://wa.me/919993396109?text=Hi%20CloudX%20Cafe!%20I%20have%20a%20query."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30"
              style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.557 4.116 1.532 5.849L.057 23.25a.75.75 0 00.922.921l5.532-1.46A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.677-.48-5.24-1.327l-.377-.212-3.906 1.03 1.056-3.814-.234-.389A9.938 9.938 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Chat with Us on WhatsApp
            </a>

            {/* Call to action */}
            <a
              href="tel:+919993396109"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl glass neon-border-purple text-white font-semibold hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
            >
              <Phone size={18} className="text-purple-400" />
              Call: +91 99933 96109
            </a>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            id="reservation"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass rounded-2xl p-8 border border-white/8 neon-border-pink"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <CheckCircle2 size={60} className="text-green-400" />
                <h3 className="text-2xl font-bold text-white">Reservation Sent!</h3>
                <p className="text-gray-400">We&apos;ve redirected you to WhatsApp. Our team will confirm your booking shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold"
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-6">🪑 Reserve a Table</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-xs mb-1.5 uppercase tracking-wider">Your Name</label>
                      <input
                        id="reservation-name"
                        type="text"
                        name="name"
                        required
                        placeholder="Riya Sharma"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-purple-500/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs mb-1.5 uppercase tracking-wider">Phone</label>
                      <input
                        id="reservation-phone"
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-purple-500/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-xs mb-1.5 uppercase tracking-wider">Date</label>
                      <input
                        id="reservation-date"
                        type="date"
                        name="date"
                        required
                        value={form.date}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500/60 transition-colors [color-scheme:dark]"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs mb-1.5 uppercase tracking-wider">Time</label>
                      <input
                        id="reservation-time"
                        type="time"
                        name="time"
                        required
                        value={form.time}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500/60 transition-colors [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5 uppercase tracking-wider">Number of Guests</label>
                    <select
                      id="reservation-guests"
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full bg-[#12121a] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500/60 transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, "8+"].map((g) => (
                        <option key={g} value={g}>{g} Guest{g !== 1 ? "s" : ""}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5 uppercase tracking-wider">Special Request (optional)</label>
                    <textarea
                      id="reservation-message"
                      name="message"
                      rows={3}
                      placeholder="Any special occasion or seating preference..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-purple-500/60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    id="reservation-submit"
                    type="submit"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white font-bold text-base hover:shadow-xl hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-300 mt-2"
                  >
                    <Send size={18} />
                    Reserve via WhatsApp
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
