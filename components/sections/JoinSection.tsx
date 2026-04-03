"use client";
import { motion } from "framer-motion";
import { Users, Smartphone, Bell, MapPin } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "भक्ति परिवार",
    desc: "लाखों सनातनियों के साथ जुड़ें और एक विशाल भक्त परिवार का हिस्सा बनें।",
    color: "from-gray-900 to-gray-900
    shadow: "shadow-black/15
  },
  {
    icon: Smartphone,
    title: "Online पूजा",
    desc: "घर बैठे अपने नाम से पूजा कराएं — कुशल पंडितों द्वारा विधिवत संपन्न।",
    color: "from-gray-800 to-gray-900
    shadow: "shadow-gray-200",
  },
  {
    icon: Bell,
    title: "पूजा अपडेट्स",
    desc: "तीज, त्योहार और धार्मिक अवसरों की समय पर सूचना पाएं।",
    color: "from-red-500 to-gray-900",
    shadow: "shadow-red-200",
  },
  {
    icon: MapPin,
    title: "तीर्थयात्रा",
    desc: "पवित्र धामों की यात्रा की सरल व्यवस्था, संपूर्ण मार्गदर्शन के साथ।",
    color: "from-gray-800 to-gray-900
    shadow: "shadow-gray-200",
  },
];

export default function JoinSection() {
  return (
    <section className="py-20 bg-[#111111] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#16a34a] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#16a34a] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            — हमसे जुड़ें —
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
          >
            भक्ति की यात्रा शुरू करें
          </h2>
          <p className="text-white/60 max-w-lg mx-auto" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
            सनातन धर्म की सेवा में हमारे साथ जुड़ें
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/5 border border-gray-200 rounded-2xl p-7 cursor-pointer overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-[#16a34a] to-[#16a34a] transition-opacity duration-500 rounded-2xl" />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={26} />
                </div>

                <h3
                  className="text-xl font-bold text-white mb-3 group-hover:text-[#ffffff] transition-colors"
                  style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
                >
                  {card.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                  {card.desc}
                </p>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${card.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
