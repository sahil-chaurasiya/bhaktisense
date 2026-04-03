"use client";
import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <section id="welcome" className="py-24 bg-[#f5f5f5] relative overflow-hidden">
      {/* Subtle bg pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-50 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-green-50 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Om decorative */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#16a34a]" />
              <span className="text-3xl text-[#16a34a]">ॐ</span>
              <div className="h-px w-12 bg-[#16a34a]" />
            </div>

            <p className="text-gray-500 text-sm font-semibold tracking-widest uppercase mb-2">
              — शुभ स्वागत —
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#111111] mb-6 leading-tight"
              style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
            >
              शुभ{" "}
              <span className="text-gray-500">आगमन</span>
            </h2>

            <div className="space-y-4 text-[#111111]/80 leading-relaxed" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              <p className="text-lg font-semibold text-[#111111]">
                हम सनातनियों की आस्था का आधार है — <span className="text-gray-500">"वेद"</span>
              </p>
              <p>
                वेद ही जीवन है, वेद ही सत्य है, वेद ही सनातन धर्म का मूल आधार है। हम उस परंपरा को आगे बढ़ाने का संकल्प लेकर चले हैं, जो अनादि काल से प्रवाहमान है।
              </p>
              <p>
                उमा महेश्वर सेवा ट्रस्ट के माध्यम से हम सनातन संस्कृति, पूजा-पाठ, तीर्थयात्रा और धार्मिक शिक्षा को आम जनमानस तक पहुँचाने का कार्य कर रहे हैं।
              </p>
              <p>
                जूना अखाड़ा की छत्रछाया में, हम भारत के कोने-कोने में वैदिक ज्ञान का प्रसार करने हेतु प्रतिबद्ध हैं।
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#trust"
                className="px-7 py-3 bg-[#16a34a] text-white font-semibold rounded-lg shadow-lg hover:bg-[#15803d] hover:scale-105 transition-all duration-300"
                style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
              >
                हमारे बारे में जानें
              </a>
              <a
                href="#services"
                className="px-7 py-3 border-2 border-gray-300 text-[#16a34a] font-semibold rounded-lg hover:bg-[#16a34a] hover:text-white transition-all duration-300"
                style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
              >
                पूजा सेवाएं
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {[
                { num: "१०,०००+", label: "भक्त परिवार" },
                { num: "५०+", label: "तीर्थ स्थान" },
                { num: "१५+", label: "वर्षों की सेवा" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-bold text-[#16a34a]" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{s.num}</p>
                  <p className="text-xs text-[#111111]/60 mt-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/15">
              <img
                src="https://images.unsplash.com/photo-1626871955001-d2e9db5f7d37?w=700&auto=format&fit=crop"
                alt="Temple"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/40 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl shadow-black/15 border border-gray-200"
            >
              <p className="text-3xl font-bold text-[#16a34a]" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>जय</p>
              <p className="text-sm text-[#111111]/70" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>महादेव</p>
            </motion.div>

            {/* Decorative corner */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-gray-300 rounded-tr-3xl opacity-40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}