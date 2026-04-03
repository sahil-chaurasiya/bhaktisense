"use client";
import { motion } from "framer-motion";

const sevas = [
  { num: "०१", title: "भोजन सेवा", desc: "प्रतिदिन सैकड़ों जरूरतमंद लोगों को निःशुल्क भोजन वितरण।", icon: "🍱" },
  { num: "०२", title: "रोजगार सहयोग", desc: "युवाओं को कौशल प्रशिक्षण और रोजगार के अवसर प्रदान करना।", icon: "💼" },
  { num: "०३", title: "स्वास्थ्य सहायता", desc: "निःशुल्क चिकित्सा शिविर और दवाइयों का वितरण।", icon: "🏥" },
  { num: "०४", title: "शिक्षा सेवा", desc: "गरीब बच्चों को निःशुल्क शिक्षा और पाठ्य सामग्री।", icon: "📚" },
];

export default function SevaSection() {
  return (
    <section id="seva" className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />

      {/* Large Om in background */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[20rem] text-white/2 font-bold select-none pointer-events-none" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
        ॐ
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4">— सेवा कार्य —</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              सेवा ही<br />
              <span className="text-gray-500">सच्ची पूजा है</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-8" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              हम मानते हैं कि ईश्वर की सबसे बड़ी पूजा मानव सेवा है। इसी विश्वास के साथ हम समाज के हर वर्ग की सेवा में लगे हुए हैं।
            </p>
            <a
              href="#donate"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#16a34a] text-white font-bold rounded-lg shadow-xl shadow-black/15 hover:bg-[#15803d] hover:scale-105 transition-all duration-300"
              style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
            >
              सेवा में सहयोग दें
              <span>→</span>
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {sevas.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white/5 border border-gray-200 rounded-2xl p-6 overflow-hidden hover:border-gray-200 transition-all duration-400"
              >
                {/* Number */}
                <p className="absolute top-4 right-5 text-5xl font-black text-white/5 select-none" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{s.num}</p>

                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="text-xl font-bold text-white mb-2" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{s.desc}</p>

                {/* Bottom glow on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#16a34a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
