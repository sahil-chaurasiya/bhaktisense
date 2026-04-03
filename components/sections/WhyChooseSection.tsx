"use client";
import { motion } from "framer-motion";
import { Shield, Heart, Star } from "lucide-react";

const reasons = [
  {
    Icon: Shield,
    title: "विश्वसनीयता",
    desc: "जूना अखाड़े की छत्रछाया में पंजीकृत ट्रस्ट। १५+ वर्षों की धार्मिक सेवा का अनुभव। पूर्ण पारदर्शिता एवं जवाबदेही के साथ कार्य।",
    points: ["सरकारी मान्यता प्राप्त", "80G प्रमाणित", "पूर्ण पारदर्शिता"],
  },
  {
    Icon: Heart,
    title: "भक्ति एवं श्रद्धा",
    desc: "हर पूजा में हम आपकी श्रद्धा को ईश्वर तक पहुँचाते हैं। वैदिक विधि से संपन्न पूजा, कुशल पंडितों द्वारा — आपके नाम और गोत्र से।",
    points: ["प्रशिक्षित पंडित", "वैदिक विधि", "Live दर्शन"],
  },
  {
    Icon: Star,
    title: "सुगमता एवं सेवा",
    desc: "घर बैठे Online पूजा से लेकर तीर्थयात्रा तक — हम हर कदम पर आपके साथ हैं। आपकी सुविधा, हमारी प्राथमिकता।",
    points: ["२४×७ सेवा", "मोबाइल ऐप", "हिंदी सहायता"],
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f5f5f5] to-[#f5f5f5] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">— हमारी विशेषता —</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111111]" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
            क्यों चुनें{" "}
            <span className="text-gray-500">BhaktiSense?</span>
          </h2>
          <p className="text-[#111111]/60 mt-4 max-w-xl mx-auto" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
            आस्था, सेवा और विश्वास — हमारी नींव के तीन स्तंभ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl p-8 border border-gray-200 shadow-xl shadow-black/15 hover:shadow-2xl hover:shadow-black/15 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover bg sweep */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#16a34a]/5 to-[#16a34a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#16a34a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#16a34a] to-[#16a34a] flex items-center justify-center mb-6 shadow-lg shadow-black/15 group-hover:scale-110 transition-transform duration-300">
                  <r.Icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#111111] mb-4" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                  {r.title}
                </h3>
                <p className="text-[#111111]/65 leading-relaxed mb-6" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                  {r.desc}
                </p>
                <ul className="space-y-2">
                  {r.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-[#111111]/70">
                      <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center text-[#16a34a] text-xs flex-shrink-0">✓</span>
                      <span style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
