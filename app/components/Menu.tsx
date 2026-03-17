"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";

const menuCategories = [
  {
    id: "coffee",
    emoji: "☕",
    title: "Coffee",
    color: "amber",
    desc: "Espresso-based and cold brew specialties",
    items: [
      { name: "Classic Espresso", price: "₹120" },
      { name: "Café Latte", price: "₹150" },
      { name: "Cold Brew", price: "₹180" },
      { name: "Caramel Macchiato", price: "₹200" },
      { name: "Iced Americano", price: "₹160" },
    ],
  },
  {
    id: "mocktails",
    emoji: "🍹",
    title: "Mocktails",
    color: "purple",
    desc: "Signature MONIN-crafted mocktails",
    items: [
      { name: "Blue Lagoon", price: "₹180" },
      { name: "Virgin Mojito", price: "₹160" },
      { name: "Butterfly Pea Special", price: "₹200" },
      { name: "Strawberry Fizz", price: "₹170" },
      { name: "Tropical Punch", price: "₹190" },
    ],
  },
  {
    id: "shakes",
    emoji: "🥤",
    title: "Thick Shakes",
    color: "pink",
    desc: "Rich and creamy milkshakes",
    items: [
      { name: "Oreo Shake", price: "₹180" },
      { name: "Chocolate Overload", price: "₹200" },
      { name: "Mango Madness", price: "₹170" },
      { name: "Strawberry Dream", price: "₹180" },
      { name: "Nutella Shake", price: "₹220" },
    ],
  },
  {
    id: "snacks",
    emoji: "🍟",
    title: "Snacks",
    color: "yellow",
    desc: "Crispy bites and loaded platters",
    items: [
      { name: "Loaded Fries", price: "₹160" },
      { name: "Nachos & Dip", price: "₹200" },
      { name: "Cheese Garlic Bread", price: "₹140" },
      { name: "Onion Rings", price: "₹150" },
      { name: "Peri Peri Fries", price: "₹170" },
    ],
  },
  {
    id: "fast-food",
    emoji: "🍔",
    title: "Fast Food",
    color: "red",
    desc: "Gourmet burgers, wraps & sandwiches",
    items: [
      { name: "CloudX Signature Burger", price: "₹220" },
      { name: "Paneer Tikka Wrap", price: "₹200" },
      { name: "Aloo Tikki Burger", price: "₹180" },
      { name: "Grilled Veg Sandwich", price: "₹170" },
      { name: "Club Sandwich", price: "₹190" },
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  amber: { bg: "from-amber-600/15 to-transparent", border: "border-amber-500/20", text: "text-amber-400", badge: "bg-amber-500/10 border-amber-500/20" },
  purple: { bg: "from-purple-600/15 to-transparent", border: "border-purple-500/20", text: "text-purple-400", badge: "bg-purple-500/10 border-purple-500/20" },
  pink: { bg: "from-pink-600/15 to-transparent", border: "border-pink-500/20", text: "text-pink-400", badge: "bg-pink-500/10 border-pink-500/20" },
  yellow: { bg: "from-yellow-600/15 to-transparent", border: "border-yellow-500/20", text: "text-yellow-400", badge: "bg-yellow-500/10 border-yellow-500/20" },
  red: { bg: "from-red-600/15 to-transparent", border: "border-red-500/20", text: "text-red-400", badge: "bg-red-500/10 border-red-500/20" },
};

export default function Menu() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="menu" className="py-20 sm:py-24 relative overflow-hidden flex flex-col items-center">
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-pink-900/15 blur-[140px]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 flex flex-col items-center w-full"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Menu
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 w-full">
            Explore Our{" "}
            <span className="gradient-text">Menu</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6 w-full px-4">
            Everything is crafted fresh, priced affordably — because good food should be for
            everyone.
          </p>
          <a
            href="https://linktr.ee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
          >
            <ExternalLink size={16} />
            View Full Menu
          </a>
        </motion.div>

        {/* Menu Cards */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full"
        >
          {menuCategories.map((cat, i) => {
            const c = colorMap[cat.color];
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`cafe-card rounded-2xl bg-gradient-to-b ${c.bg} border ${c.border} p-6 sm:p-8 hover:shadow-xl flex flex-col items-center text-center mx-2 sm:mx-0`}
              >
                <div className="text-5xl mb-4">{cat.emoji}</div>
                <h3 className={`text-xl font-bold ${c.text} mb-2 w-full`}>{cat.title}</h3>
                <p className="text-gray-400 text-sm mb-6 w-full px-2 sm:px-0">{cat.desc}</p>

                <ul className="space-y-4 w-full">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-white/5 pb-3 last:border-0 last:pb-0 w-full px-2 sm:px-0">
                      <span className="text-gray-300 text-base sm:text-sm font-medium">{item.name}</span>
                      <span className={`text-base sm:text-sm font-black ${c.text} flex-shrink-0 bg-white/5 px-3 py-1 rounded-lg`}>
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        <p className="text-center text-gray-600 text-sm mt-8">
          Price range: ₹200 – ₹400 per person · Menu items subject to availability
        </p>
      </div>
    </section>
  );
}
