"use client";
import { motion } from "framer-motion";

const activities = [
  {
    icon: "🛕",
    title: "दर्शन",
    desc: "प्रतिदिन शुद्ध और भावपूर्ण मंदिर दर्शन की व्यवस्था",
    img: "https://images.unsplash.com/photo-1609766857491-7cd7e5aa2b12?w=400&auto=format&fit=crop",
  },
  {
    icon: "🎵",
    title: "भजन-कीर्तन",
    desc: "नियमित भजन-संध्या, कीर्तन और आरती का भव्य आयोजन",
    img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=400&auto=format&fit=crop",
  },
  {
    icon: "🎉",
    title: "त्योहार आयोजन",
    desc: "सभी प्रमुख हिंदू त्योहारों का धूमधाम से उत्सव",
    img: "https://images.unsplash.com/photo-1567591370429-33f1a4c2af76?w=400&auto=format&fit=crop",
  },
  {
    icon: "💒",
    title: "विवाह",
    desc: "वैदिक रीति-रिवाज से पवित्र विवाह संस्कार का आयोजन",
    img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&auto=format&fit=crop",
  },
];

export default function TempleActivities() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f5f5f5] to-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">— मंदिर गतिविधियां —</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111111]" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
            मंदिर की सेवाएं
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#16a34a]" />
            <span className="text-[#16a34a] text-xl">✦</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#16a34a]" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={a.img}
                alt={a.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-2xl">{a.icon}</span>
                <h3 className="text-xl font-bold text-white mt-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{a.title}</h3>
                <p className="text-white/70 text-sm mt-1 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{a.desc}</p>
              </div>
              {/* Gold top bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#16a34a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
