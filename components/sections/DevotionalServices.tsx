"use client";
import { motion } from "framer-motion";

const services = [
  { icon: "🪔", title: "पूजा", desc: "विधिवत पूजन-अर्चन, हवन एवं अनुष्ठान", href: "/#services" },
  { icon: "🤲", title: "दान", desc: "पुण्य कार्यों में सहभागिता करें", href: "/daan" },
  { icon: "🙏", title: "सेवा", desc: "समाज सेवा और परोपकार के कार्य", href: "/#seva" },
  { icon: "🔥", title: "धर्म-यज्ञ", desc: "वैदिक यज्ञ और अग्निहोत्र का आयोजन", href: "/#services" },
  { icon: "🧘", title: "ध्यान", desc: "योग, ध्यान और आत्म-साधना", href: "/#services" },
  { icon: "✈️", title: "तीर्थयात्रा", desc: "पवित्र धामों की सुव्यवस्थित यात्रा", href: "/#mission" },
];

export default function DevotionalServices() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#f5f5f5] to-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">— सेवाएं —</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111111]" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
            भक्ति एवं सेवाएं
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#16a34a]" />
            <span className="text-gray-500">✦</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#16a34a]" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg shadow-black/15 overflow-hidden cursor-pointer"
            >
              {/* Hover bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#16a34a] to-[#16a34a] opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#16a34a]" />

              <div className="relative z-10">
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {s.icon}
                </div>
                <h3
                  className="text-2xl font-bold text-[#111111] group-hover:text-white mb-3 transition-colors duration-300"
                  style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[#111111]/65 group-hover:text-white/85 transition-colors duration-300"
                  style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
                >
                  {s.desc}
                </p>
                <a href={s.href} className="mt-6 flex items-center gap-2 text-[#16a34a] group-hover:text-[#ffffff] transition-colors duration-300 text-sm font-semibold">
                  <span style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>और जानें</span>
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
