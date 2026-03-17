"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Ananya S.", time: "2 weeks ago", rating: 5, text: "Perfect place to chill with friends. The vibes are amazing, hanging plants, neon lights – felt like we were inside an Instagram reel!", avatar: "A" },
  { name: "Rohan K.", time: "1 month ago", rating: 5, text: "Best mocktails in Gwalior! The butterfly pea mocktail was absolutely stunning. Will visit again and again.", avatar: "R" },
  { name: "Priya M.", time: "3 weeks ago", rating: 4, text: "Awesome vibe and colorful interiors. The outdoor terrace is so pretty at night with fairy lights. Food was delicious too!", avatar: "P" },
  { name: "Arjun T.", time: "1 week ago", rating: 5, text: "Easily the most aesthetic café in Gwalior. Perfect for college hangouts. Pocket-friendly and super tasty food.", avatar: "A" },
  { name: "Simran V.", time: "2 months ago", rating: 4, text: "Love this place! Came here on a date and the ambiance was wonderful. Service was quick and the burgers were fire 🔥", avatar: "S" },
  { name: "Dev P.", time: "3 weeks ago", rating: 5, text: "CloudX is THE vibe spot in Gwalior. Great music, amazing drinks, and the staff is super friendly. Highly recommend!", avatar: "D" },
];

const avatarColors = ["from-purple-600 to-pink-500", "from-cyan-600 to-blue-500", "from-pink-600 to-rose-500", "from-amber-500 to-orange-400", "from-emerald-500 to-cyan-500", "from-violet-600 to-purple-500"];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={13}
          className={s <= rating ? "fill-amber-400 text-amber-400" : "text-gray-700"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="reviews" className="py-20 sm:py-24 relative overflow-hidden flex flex-col items-center">
      <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-purple-900/15 blur-[120px]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 flex flex-col items-center w-full"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-yellow-500/15 border border-yellow-500/30 text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Customer Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 w-full">
            What Our Guests{" "}
            <span className="gradient-text">Say</span>
          </h2>

          {/* Rating summary */}
          <div className="inline-flex items-center justify-center gap-4 glass rounded-2xl px-6 py-4 neon-border-purple mt-4">
            <div>
              <div className="text-5xl font-black gradient-text-warm leading-none pt-1">4.0</div>
              <div className="text-gray-500 text-xs mt-1">out of 5</div>
            </div>
            <div className="text-left">
              <div className="flex gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className={s <= 4 ? "fill-amber-400 text-amber-400" : "text-gray-700"} />
                ))}
              </div>
              <div className="text-gray-400 text-sm">Based on 200+ reviews</div>
              <div className="text-green-400 text-xs">96% recommend CloudX</div>
            </div>
          </div>
        </motion.div>

        {/* Review Cards */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="cafe-card glass rounded-2xl p-8 sm:p-10 border border-white/5 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-900/20 relative flex flex-col items-center sm:items-start text-center sm:text-left mx-2 sm:mx-0"
            >
              <Quote size={24} className="text-purple-500/30 absolute top-6 right-6" />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-5 w-full">
                {/* Avatar */}
                <div className={`w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${avatarColors[i]} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg`}>
                  {review.avatar}
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <div className="text-white font-bold text-base sm:text-sm">{review.name}</div>
                  <div className="text-gray-400 text-sm sm:text-xs">{review.time}</div>
                </div>
              </div>

              <div className="w-full flex justify-center sm:justify-start mb-2">
                <StarRating rating={review.rating} />
              </div>

              <p className="text-gray-300 text-base sm:text-sm leading-relaxed mt-3 w-full px-2 sm:px-0">
                &ldquo;{review.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
