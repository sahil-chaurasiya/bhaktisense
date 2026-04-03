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

const rekhas = [
  { name: "जीवन रेखा", icon: "❤️", desc: "जीवन की अवधि, स्वास्थ्य और जीवनशक्ति का संकेत देती है।" },
  { name: "मस्तिष्क रेखा", icon: "🧠", desc: "बौद्धिक क्षमता, सोचने की शक्ति और मानसिक स्वास्थ्य को दर्शाती है।" },
  { name: "हृदय रेखा", icon: "💕", desc: "भावनात्मक जीवन, प्रेम और रिश्तों की स्थिति बताती है।" },
  { name: "भाग्य रेखा", icon: "⭐", desc: "करियर, सफलता और जीवन के महत्वपूर्ण मोड़ों को दर्शाती है।" },
  { name: "सूर्य रेखा", icon: "☀️", desc: "यश, प्रसिद्धि और सामाजिक प्रतिष्ठा का संकेत देती है।" },
  { name: "बुध रेखा", icon: "✍️", desc: "संचार, व्यापार कौशल और स्वास्थ्य की स्थिति बताती है।" },
];

export default function HastRekhaPage() {
  return (
    <main className="bg-[#f5f5f5]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img
          src="/hast_lekha.webp"
          alt="हस्त रेखा ज्योतिष"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/70 to-[#111111]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        <div className="absolute right-16 top-1/2 -translate-y-1/2 text-[18rem] text-white/[0.04] font-bold select-none leading-none pointer-events-none" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>ॐ</div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-20 pt-40 w-full">
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
              <a href="/" className="hover:text-[#111111] transition-colors" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>मुखपृष्ठ</a>
              <span>/</span>
              <span className="text-gray-500" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>सेवाएं</span>
              <span>/</span>
              <span className="text-gray-500" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>हस्त रेखा ज्योतिष</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              हस्त रेखा<br />
              <span className="text-[#ffffff]">ज्योतिष</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              सामुद्रिक शास्त्र — हथेली की रेखाओं से भविष्य का ज्ञान
            </p>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 bg-green-50 border border-gray-200 rounded-lg px-5 py-2 mb-6">
                <span className="text-[#16a34a] text-sm font-semibold" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>सामुद्रिक शास्त्र</span>
              </div>
              <h2 className="text-3xl font-bold text-[#111111] mb-5" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                हस्त रेखा ज्योतिष क्या है?
              </h2>
              <div className="space-y-4 text-[#374151]/80 leading-relaxed" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                <p>
                  हस्त रेखा ज्योतिष को <strong>सामुद्रिक शास्त्र</strong> भी कहते हैं। इस पद्धति में हथेलियों की बनावट,
                  उंगलियों के आकार-प्रकार के साथ हथेलियों पर उभरी रेखाओं के आधार पर भविष्य के बारे में जाना जाता है।
                </p>
                <p>
                  हाथों में दिखाई देने वाली रेखाएं और हमारे भविष्य का गहरा संबंध है। इन रेखाओं का अध्ययन किया जाए तो
                  हमें भविष्य में होने वाली घटनाओं की भी जानकारी प्राप्त हो सकती है।
                </p>
                <p>
                  वैसे तो हाथों की सभी रेखाओं का अलग-अलग महत्व होता है। किसी व्यक्ति को कितना मान-सम्मान और पैसा मिलेगा
                  यह भी रेखाओं से मालुम हो जाता है। इस पद्धति में हथेलियों की सभी रेखाओं का अच्छे तरीके से अध्ययन किया जाता है।
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.2)}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <img src="/hast_lekha.webp" alt="हस्त रेखा चित्र" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-[#ffffff] font-bold" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>हस्त रेखा मानचित्र</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>ग्रह पर्वत एवं प्रमुख रेखाएं</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* REKHAS GRID */}
      <section className="py-16 bg-gradient-to-b from-[#f5f5f5] to-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.h2 {...fadeUp(0)} className="text-3xl font-bold text-[#111111] text-center mb-3" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
            प्रमुख हस्त रेखाएं
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-[#374151]/60 text-center mb-10" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
            हथेली की इन रेखाओं से जानें अपना भविष्य
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rekhas.map((r, i) => (
              <motion.div key={r.name} {...fadeUp(i * 0.1)} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:border-gray-200 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-4">{r.icon}</div>
                <h3 className="font-bold text-[#111111] text-lg mb-2 group-hover:text-[#111111] transition-colors" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>{r.name}</h3>
                <p className="text-[#374151]/70 text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <motion.div {...fadeUp(0)} className="bg-gradient-to-r from-[#111111] to-[#222222] rounded-3xl p-10 text-center shadow-xl">
            <div className="text-5xl mb-4">🖐️</div>
            <h3 className="text-2xl font-bold text-[#ffffff] mb-3" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>हस्त रेखा पठन के लिए संपर्क करें</h3>
            <p className="text-white/70 mb-6" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              विशेषज्ञ पंडित जी से अपनी हथेली का अध्ययन करवाएं
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#16a34a] text-white font-bold rounded-lg shadow-lg hover:bg-[#15803d] hover:scale-105 transition-all" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              <Send size={16} />
              अभी बुक करें
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
