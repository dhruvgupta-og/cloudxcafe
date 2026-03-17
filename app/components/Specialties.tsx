"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const specialties = [
  {
    emoji: "☕",
    title: "Specialty Coffee",
    desc: "Handcrafted espresso, cold brew, and signature lattes made with premium beans.",
    gradient: "from-amber-600/20 to-orange-600/10",
    border: "border-amber-500/20",
    glow: "hover:shadow-amber-500/20",
    tag: "Bestseller",
  },
  {
    emoji: "🍹",
    title: "Signature Mocktails",
    desc: "Refreshing, colorful mocktails crafted with MONIN syrups and fresh ingredients.",
    gradient: "from-purple-600/20 to-pink-600/10",
    border: "border-purple-500/20",
    glow: "hover:shadow-purple-500/20",
    tag: "Fan Favorite",
  },
  {
    emoji: "🍔",
    title: "Café Fast Food",
    desc: "Loaded burgers, sandwiches, and wraps freshly prepared for hungry hangouts.",
    gradient: "from-red-600/20 to-orange-600/10",
    border: "border-red-500/20",
    glow: "hover:shadow-red-500/20",
    tag: "Must Try",
  },
  {
    emoji: "🍟",
    title: "Snacks & Platters",
    desc: "Crispy fries, onion rings, nachos & loaded platters — perfect for sharing.",
    gradient: "from-yellow-600/20 to-amber-600/10",
    border: "border-yellow-500/20",
    glow: "hover:shadow-yellow-500/20",
    tag: "Shareable",
  },
  {
    emoji: "🍰",
    title: "Desserts",
    desc: "Rich brownies, pastries, waffles, and ice cream to end on a sweet note.",
    gradient: "from-pink-600/20 to-rose-600/10",
    border: "border-pink-500/20",
    glow: "hover:shadow-pink-500/20",
    tag: "Sweet Pick",
  },
  {
    emoji: "🥤",
    title: "Thick Shakes",
    desc: "Decadent thick shakes in tempting flavors — chocolate, strawberry, and more.",
    gradient: "from-cyan-600/20 to-blue-600/10",
    border: "border-cyan-500/20",
    glow: "hover:shadow-cyan-500/20",
    tag: "Trending",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Specialties() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="specialties" className="py-20 sm:py-24 relative overflow-hidden flex flex-col items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[160px]" />

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
            What We Serve
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 w-full">
            Our{" "}
            <span className="gradient-text">Specialties</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto w-full px-4">
            From specialty coffee to signature mocktails — every item on our menu is crafted to
            create moments worth sharing.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {specialties.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className={`cafe-card relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br ${item.gradient} border ${item.border} hover:shadow-xl ${item.glow} cursor-pointer group flex flex-col items-center sm:items-start text-center sm:text-left mx-2 sm:mx-0`}
            >
              {/* Tag */}
              <div className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 shadow-sm backdrop-blur-sm">
                {item.tag}
              </div>

              {/* Emoji */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block w-full sm:w-auto">
                {item.emoji}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 w-full px-2 sm:px-0">{item.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed w-full px-2 sm:px-0">{item.desc}</p>

              {/* Hover line */}
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
