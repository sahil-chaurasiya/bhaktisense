"use client";
import { motion } from "framer-motion";

export default function DonationCTA() {
  return (
    <section id="donate" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#16a34a] via-[#D96500] to-[#16a34a]" />

      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px)",
        }}
      />

      {/* Large Om decoration */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 text-[16rem] text-white/8 font-bold select-none" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
        ॐ
      </div>
      <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[16rem] text-white/8 font-bold select-none" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
        ॐ
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative stars */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-white/40 text-2xl">✦</span>
            <div className="h-px w-16 bg-white/30" />
            <span className="text-white text-3xl">ॐ</span>
            <div className="h-px w-16 bg-white/30" />
            <span className="text-white/40 text-2xl">✦</span>
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            style={{fontFamily:"'Noto Sans Devanagari',sans-serif", textShadow:"0 2px 20px rgba(0,0,0,0.2)"}}
          >
            सेवा ही सच्ची साधना है
          </h2>

          <p
            className="text-xl text-white/85 mb-3 font-medium"
            style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
          >
            ।। यद् करोषि यद् अश्नासि ।।
          </p>
          <p
            className="text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
          >
            आपका दान सनातन धर्म की सेवा, भोजन सेवा, शिक्षा और स्वास्थ्य कार्यों में उपयोग होता है। एक छोटा कदम, एक बड़ा परिवर्तन।
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="/daan"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 bg-white text-[#16a34a] font-bold text-lg rounded-lg shadow-2xl shadow-black/20 hover:shadow-black/30 transition-shadow"
              style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
            >
              🙏 दान करें
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, y: -3 }}
              className="px-10 py-4 border-2 border-white/60 text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
              style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
            >
              पूजा बुक करें
            </motion.a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/60 text-sm">
            {["80G प्रमाणित", "FCRA पंजीकृत", "पूर्ण पारदर्शिता", "सुरक्षित भुगतान"].map((badge) => (
              <span key={badge} className="flex items-center gap-2" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                <span className="text-white/80">✓</span> {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
