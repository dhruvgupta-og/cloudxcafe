"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Instagram, ZoomIn } from "lucide-react";
import { useState } from "react";

const galleryImages = [
  {
    src: "/cafe-entrance.png",
    alt: "CloudX Cafe entrance with colorful flags and neon lights at night",
    caption: "Cafe Entrance",
    span: "row-span-2",
  },
  {
    src: "/cafe-interior.png",
    alt: "CloudX Cafe interior with hanging plants and checkered floor",
    caption: "Our Vibe Inside",
    span: "",
  },
  {
    src: "/cafe-mocktail.png",
    alt: "Signature mocktail with MONIN syrup at CloudX Cafe",
    caption: "Signature Mocktail",
    span: "",
  },
  {
    src: "/cafe-outdoor1.png",
    alt: "CloudX Cafe rooftop outdoor seating with fairy lights at dusk",
    caption: "Outdoor Terrace",
    span: "row-span-2",
  },
  {
    src: "/cafe-outdoor2.png",
    alt: "CloudX Cafe open-air seating with artistic wall mural",
    caption: "Art Wall Seating",
    span: "",
  },
];

export default function Gallery() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 sm:py-24 relative overflow-hidden flex flex-col items-center w-full">
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-cyan-900/20 blur-[120px]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 w-full"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Instagram size={12} />
            Gallery
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 w-full">
            See the{" "}
            <span className="gradient-text">Vibe</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto w-full px-4">
            Every corner of CloudX is crafted to be photograph-worthy. Take a virtual tour — then
            come experience it yourself.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px] w-full"
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setLightbox(img.src)}
              className={`gallery-item ${img.span} relative rounded-2xl overflow-hidden cursor-pointer group`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold text-sm">{img.caption}</span>
                  <ZoomIn size={18} className="text-white" />
                </div>
              </div>
              {/* neon border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-purple-500/0 group-hover:border-purple-500/60 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass neon-border-purple text-white font-semibold hover:bg-purple-500/10 hover:scale-105 transition-all duration-300"
          >
            <Instagram size={20} className="text-pink-400" />
            Follow us on Instagram
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl w-full aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <Image
              src={lightbox}
              alt="CloudX Cafe gallery preview"
              fill
              className="object-contain"
            />
          </motion.div>
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-pink-400 transition-colors"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
