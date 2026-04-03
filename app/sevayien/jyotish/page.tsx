"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Send, Share2 } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay },
});

const grahas = [
  { name: "सूर्य", symbol: "☉", color: "from-[#111] to-[#333]", desc: "आत्मा, पिता, सरकार, स्वास्थ्य" },
  { name: "चंद्र", symbol: "☽", color: "from-[#111] to-[#333]", desc: "मन, माता, भावनाएं, जल" },
  { name: "मंगल", symbol: "♂", color: "from-[#111] to-[#333]", desc: "साहस, शक्ति, भूमि, भाई" },
  { name: "बुध", symbol: "☿", color: "from-[#111] to-[#333]", desc: "बुद्धि, वाणी, व्यापार, शिक्षा" },
  { name: "गुरु", symbol: "♃", color: "from-[#111] to-[#333]", desc: "ज्ञान, धर्म, पुत्र, गुरु" },
  { name: "शुक्र", symbol: "♀", color: "from-[#111] to-[#333]", desc: "प्रेम, विलास, कला, स्त्री" },
  { name: "शनि", symbol: "♄", color: "from-[#111] to-[#333]", desc: "न्याय, कर्म, सेवा, वृद्धावस्था" },
  { name: "राहु", symbol: "☊", color: "from-[#111] to-[#333]", desc: "माया, विदेश, अचानक घटनाएं" },
  { name: "केतु", symbol: "☋", color: "from-[#16a34a] to-[#e55e00]", desc: "मोक्ष, अध्यात्म, पिछला जन्म" },
];

const services = [
  { icon: "🔭", title: "जन्म कुंडली विश्लेषण", desc: "नवग्रहों की स्थिति और उनका जीवन पर प्रभाव" },
  { icon: "📅", title: "मुहूर्त निकालना", desc: "शुभ कार्यों के लिए सर्वोत्तम समय का चयन" },
  { icon: "💰", title: "धन योग विश्लेषण", desc: "कुंडली में धन और समृद्धि के योग" },
  { icon: "❤️", title: "प्रेम-विवाह योग", desc: "वैवाहिक जीवन और प्रेम संबंधों का विश्लेषण" },
  { icon: "🏥", title: "स्वास्थ्य ज्योतिष", desc: "रोगों का ज्योतिषीय कारण और उपाय" },
  { icon: "🌍", title: "विदेश यात्रा योग", desc: "विदेश गमन एवं विदेश में बसने के योग" },
];

export default function JyotishPage() {
  return (
    <main className="bg-[#f5f5f5]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img
          src="/jyotish.webp"
          alt="ज्योतिष"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/97 via-[#111111]/80 to-[#111111]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        <div className="absolute right-16 top-1/2 -translate-y-1/2 text-[18rem] text-white/[0.04] font-bold select-none leading-none pointer-events-none" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>ॐ</div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-20 pt-40 w-full">
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
              <a href="/" className="hover:text-[#111111] transition-colors" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>मुखपृष्ठ</a>
              <span>/</span>
              <span className="text-gray-500" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>सेवाएं</span>
              <span>/</span>
              <span className="text-gray-500" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>ज्योतिष</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              वैदिक<br />
              <span className="text-[#ffffff]">ज्योतिष</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              ग्रह-नक्षत्रों की स्थिति से जानें अपने जीवन का मार्गदर्शन
            </p>
          </motion.div>
        </div>
      </section>

      {/* IMAGE + TEXT */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 bg-green-50 border border-gray-200 rounded-lg px-5 py-2 mb-6">
                <span className="text-[#16a34a] text-sm font-semibold" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>वैदिक ज्ञान</span>
              </div>
              <h2 className="text-3xl font-bold text-[#111111] mb-5" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                ज्योतिष — प्रकाश का विज्ञान
              </h2>
              <div className="space-y-4 text-[#374151]/80 leading-relaxed" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                <p>
                  ज्योतिष शास्त्र वेदों का नेत्र माना जाता है। यह प्राचीन भारतीय विज्ञान ग्रहों और नक्षत्रों की स्थिति
                  के आधार पर मानव जीवन के विभिन्न पहलुओं का विश्लेषण करता है।
                </p>
                <p>
                  जन्म के समय आकाश में ग्रहों की स्थिति व्यक्ति के स्वभाव, करियर, स्वास्थ्य, विवाह और भाग्य को
                  प्रभावित करती है। वैदिक ज्योतिष इन प्रभावों का गहन अध्ययन करता है।
                </p>
                <p>
                  हमारे विशेषज्ञ ज्योतिषी नवग्रहों, बारह भावों और सत्ताईस नक्षत्रों के आधार पर आपकी कुंडली का
                  सम्पूर्ण विश्लेषण करते हैं और उचित उपाय सुझाते हैं।
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.2)}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <img src="/jyotish.webp" alt="ज्योतिष" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-[#ffffff] font-bold" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>ऑनलाइन ज्योतिष सेवा</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>घर बैठे परामर्श पाएं</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NAVAGRAHA */}
      <section className="py-16 bg-gradient-to-b from-[#f5f5f5] to-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.h2 {...fadeUp(0)} className="text-3xl font-bold text-[#111111] text-center mb-10" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
            नवग्रह
          </motion.h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-3">
            {grahas.map((g, i) => (
              <motion.div key={g.name} {...fadeUp(i * 0.06)} className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-200 hover:shadow-lg transition-all group">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${g.color} flex items-center justify-center mx-auto mb-2 text-white text-xl font-bold shadow-md`}>
                  {g.symbol}
                </div>
                <h3 className="font-bold text-[#111111] text-sm group-hover:text-[#111111] transition-colors" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>{g.name}</h3>
                <p className="text-[#374151]/60 text-xs mt-1 hidden lg:block" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>{g.desc.split(",")[0]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.h2 {...fadeUp(0)} className="text-3xl font-bold text-[#111111] text-center mb-10" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
            ज्योतिष सेवाएं
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
            <div className="text-5xl mb-4">🪐</div>
            <h3 className="text-2xl font-bold text-[#ffffff] mb-3" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>ज्योतिष परामर्श लें</h3>
            <p className="text-white/70 mb-6" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              अनुभवी ज्योतिषी से अपनी कुंडली का विश्लेषण करवाएं
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
