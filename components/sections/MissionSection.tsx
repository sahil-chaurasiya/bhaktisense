"use client";
import { motion } from "framer-motion";
import { Globe, Map, Package } from "lucide-react";

const features = [
  {
    Icon: Globe,
    title: "Online पूजा",
    desc: "देश-विदेश में बैठे भक्त अपने नाम और गोत्र से पूजा करवा सकते हैं। कुशल पंडितों द्वारा वैदिक विधि से संपन्न।",
    stat: "५०,०००+ पूजाएं",
  },
  {
    Icon: Map,
    title: "तीर्थ यात्रा",
    desc: "चारधाम, ज्योतिर्लिंग, शक्तिपीठ और अन्य पवित्र स्थानों की सुगम एवं सुरक्षित यात्रा का आयोजन।",
    stat: "५०+ धाम",
  },
  {
    Icon: Package,
    title: "पूजन-व्रत सामग्री",
    desc: "शुद्ध और प्रमाणित पूजन सामग्री, व्रत किट और पारंपरिक वस्तुएं आपके द्वार तक पहुँचाई जाती हैं।",
    stat: "१०० + उत्पाद",
  },
];

export default function MissionSection() {
  return (
    <section id="mission" className="py-24 bg-[#111111] relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-50 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4">— हमारा मिशन —</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
            सनातन संस्कृति की{" "}
            <span className="text-gray-500">सेवा</span>
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
            हम तीन मुख्य स्तंभों पर सनातन धर्म की सेवा करते हैं
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative group"
            >
              <div className="relative bg-white/5 border border-gray-200 rounded-3xl p-8 h-full overflow-hidden hover:border-gray-200 transition-all duration-500 hover:bg-white/8">
                {/* Number BG */}
                <div className="absolute top-4 right-6 text-8xl font-black text-white/3 select-none" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#16a34a] to-[#16a34a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/15">
                    <f.Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                    {f.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                    {f.desc}
                  </p>
                  <div className="inline-block px-4 py-2 bg-green-50 border border-gray-200 rounded-full text-[#16a34a] text-sm font-semibold">
                    {f.stat}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
