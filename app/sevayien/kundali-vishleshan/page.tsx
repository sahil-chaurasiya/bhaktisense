"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { User, GraduationCap, Star, Send, Share2 } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay },
});

const services = [
  { icon: "🌟", title: "जन्म कुंडली", desc: "जन्म तिथि, समय और स्थान के आधार पर सम्पूर्ण कुंडली निर्माण" },
  { icon: "💍", title: "विवाह मिलान", desc: "गुण मिलान, मांगलिक दोष और कुंडली दोष परीक्षण" },
  { icon: "🔮", title: "दशा भविष्यवाणी", desc: "महादशा, अंतर्दशा एवं गोचर के आधार पर जीवन विश्लेषण" },
  { icon: "💼", title: "करियर परामर्श", desc: "ग्रह-नक्षत्र के आधार पर उचित व्यवसाय का चयन" },
  { icon: "🏠", title: "वास्तु विश्लेषण", desc: "घर एवं व्यापार स्थल का ज्योतिष आधारित मूल्यांकन" },
  { icon: "🕊️", title: "नामकरण", desc: "नक्षत्र के अनुसार शिशु के लिए शुभ नाम का चयन" },
];

export default function KundaliVishleshanPage() {
  return (
    <main className="bg-[#f5f5f5]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img
          src="/lagn_kundali.webp"
          alt="कुंडली विश्लेषण"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/97 via-[#111111]/80 to-[#111111]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        <div className="absolute right-16 top-1/2 -translate-y-1/2 text-[18rem] text-white/[0.04] font-bold select-none leading-none pointer-events-none" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>ॐ</div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-20 pt-40 w-full">
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
              <a href="/" className="hover:text-[#111111] transition-colors" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>मुखपृष्ठ</a>
              <span>/</span>
              <span className="text-gray-500" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>सेवाएं</span>
              <span>/</span>
              <span className="text-gray-500" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>कुंडली विश्लेषण</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              पारंपरिक संसाधनों द्वारा<br />
              <span className="text-[#ffffff]">कुंडली बनाना व विश्लेषण</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* PANDIT JI PROFILE */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 bg-green-50 border border-gray-200 rounded-lg px-5 py-2 mb-6">
                <Star size={14} className="text-gray-500" />
                <span className="text-[#16a34a] text-sm font-semibold" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>विशेषज्ञ पंडित जी</span>
              </div>
              <h2 className="text-3xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                पंडित जी का विवरण
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start bg-[#f5f5f5] rounded-2xl p-5 border border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br [#16a34a] flex items-center justify-center shrink-0">
                    <User size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[#374151]/60 uppercase tracking-wider mb-1" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>नाम</p>
                    <p className="font-bold text-[#111111] text-lg" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>पंडित श्री पदमराज भट्ट जी</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-[#f5f5f5] rounded-2xl p-5 border border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br [#16a34a] flex items-center justify-center shrink-0">
                    <User size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[#374151]/60 uppercase tracking-wider mb-1" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>पिता का नाम</p>
                    <p className="font-bold text-[#111111] text-lg" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>पंडित श्री लक्ष्मी दत्त भट्ट जी</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-[#f5f5f5] rounded-2xl p-5 border border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br [#16a34a] flex items-center justify-center shrink-0">
                    <GraduationCap size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[#374151]/60 uppercase tracking-wider mb-1" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>शिक्षा</p>
                    <p className="font-semibold text-[#111111]" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                      शास्त्र में मास्टर डिग्री, और ज्योतिष कर्मकाण्ड डिग्री सर्टिफिकेशन कोर्स
                    </p>
                    <p className="text-[#374151]/70 text-sm mt-1" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                      दक्षेश्वर कर्मकाण्ड महाविद्यालय, कनखल
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.2)}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src="/lagn_kundali.webp" alt="कुंडली" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-xl" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>वैदिक कुंडली</p>
                  <p className="text-[#ffffff] text-sm" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>पारंपरिक पद्धति से निर्मित</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 bg-gradient-to-b from-[#f5f5f5] to-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.h2 {...fadeUp(0)} className="text-3xl font-bold text-[#111111] text-center mb-10" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
            हमारी सेवाएं
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} {...fadeUp(i * 0.1)} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:border-gray-200 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-[#111111] text-lg mb-2 group-hover:text-[#111111] transition-colors" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>{s.title}</h3>
                <p className="text-[#374151]/70 text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <motion.div {...fadeUp(0)} className="bg-gradient-to-r from-[#111111] to-[#222222] rounded-3xl p-10 text-center shadow-xl">
            <div className="text-5xl mb-4">🙏</div>
            <h3 className="text-2xl font-bold text-[#ffffff] mb-3" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>अभी परामर्श लें</h3>
            <p className="text-white/70 mb-6" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              पंडित जी से कुंडली विश्लेषण के लिए संपर्क करें
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#16a34a] text-white font-bold rounded-lg shadow-lg hover:bg-[#15803d] hover:scale-105 transition-all" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              <Send size={16} />
              संपर्क करें
            </button>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-2 text-[#374151]/60 text-sm" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              <Share2 size={14} /> साझा करें:
            </span>
            {["Facebook", "WhatsApp", "LinkedIn", "Twitter"].map(s => (
              <a key={s} href="#" className="text-sm text-[#16a34a] hover:underline">{s}</a>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
