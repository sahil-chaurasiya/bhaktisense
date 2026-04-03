"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Plane, Car, MapPin, Send, Share2 } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay },
});

const destinations = [
  { name: "हरिद्वार", icon: "🕉️", desc: "गंगा घाट, हर की पौड़ी" },
  { name: "ऋषिकेश", icon: "🌿", desc: "त्रिवेणी घाट, राम झूला" },
  { name: "केदारनाथ", icon: "⛰️", desc: "पंचकेदार, द्वादश ज्योतिर्लिंग" },
  { name: "बद्रीनाथ", icon: "🏔️", desc: "चार धाम यात्रा" },
  { name: "काशी", icon: "🪔", desc: "विश्वनाथ, गंगा आरती" },
  { name: "मथुरा-वृंदावन", icon: "🦚", desc: "कृष्ण जन्मभूमि" },
];

export default function DevbhumiDarshanPage() {
  const [journey, setJourney] = useState<"air" | "road" | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", date: "", destination: "", passengers: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#f5f5f5]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Haridwar_Har-ki-Pauri.jpg/1280px-Haridwar_Har-ki-Pauri.jpg"
          alt="देवभूमि दर्शन"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/75 to-[#111111]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        <div className="absolute right-16 top-1/2 -translate-y-1/2 text-[18rem] text-white/[0.04] font-bold select-none leading-none pointer-events-none" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>ॐ</div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-20 pt-40 w-full">
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
              <a href="/" className="hover:text-[#111111] transition-colors" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>मुखपृष्ठ</a>
              <span>/</span>
              <span className="text-gray-500" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>सेवाएं</span>
              <span>/</span>
              <span className="text-gray-500" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>देवभूमि दर्शन</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              स्व-निर्धारित<br />
              <span className="text-[#ffffff]">देवभूमि दर्शन</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              अपनी सुविधा अनुसार तीर्थ यात्रा की योजना बनाएं — वायु मार्ग या सड़क मार्ग से।
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <motion.div {...fadeUp(0)}>
            <div className="inline-flex items-center gap-2 bg-green-50 border border-gray-200 rounded-lg px-5 py-2 mb-6">
              <span className="text-[#16a34a] text-sm font-semibold" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>उमा महेश्वर सेवा ट्रस्ट</span>
            </div>
            <p className="text-[#374151]/80 text-lg leading-relaxed" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              उमा महेश्वर सेवा ट्रस्ट <strong>www.bhaktisense.com</strong> के माध्यम से आपको विभिन्न सेवायें उपलब्ध करवाता है।
              फिर भी अगर इनके अलावा आप कोई और सेवा/प्रोडक्ट प्राप्त करना चाहते हैं तो, उसके लिये आप हमसे संपर्क कर सकते हैं।
            </p>
          </motion.div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-12 bg-gradient-to-b from-[#f5f5f5] to-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.h2 {...fadeUp(0)} className="text-3xl font-bold text-[#111111] text-center mb-10" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
            प्रमुख तीर्थ स्थल
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {destinations.map((d, i) => (
              <motion.div key={d.name} {...fadeUp(i * 0.08)} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-200 hover:border-gray-200 hover:shadow-md transition-all cursor-pointer group">
                <div className="text-4xl mb-3">{d.icon}</div>
                <h3 className="font-bold text-[#111111] text-sm mb-1 group-hover:text-[#111111] transition-colors" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>{d.name}</h3>
                <p className="text-[#374151]/60 text-xs" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <motion.div {...fadeUp(0)} className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-[#111111] to-[#222222] px-8 py-8">
              <h2 className="text-2xl font-bold text-[#ffffff]" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>यात्रा विवरण जोड़ें</h2>
              <p className="text-white/60 text-sm mt-1" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>अपनी यात्रा की जानकारी भरें</p>
            </div>

            {submitted ? (
              <div className="p-12 text-center">
                <div className="text-6xl mb-4">🙏</div>
                <h3 className="text-2xl font-bold text-[#111111] mb-2" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>धन्यवाद!</h3>
                <p className="text-[#374151]/70" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>हम जल्द ही आपसे संपर्क करेंगे।</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* Journey Type */}
                <div>
                  <label className="block text-sm font-semibold text-[#111111] mb-3" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>यात्रा का प्रकार चुनें</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setJourney("air")}
                      className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all ${journey === "air" ? "border-gray-300 bg-gray-100 text-gray-600" : "border-gray-200 text-[#374151]/60 hover:border-gray-200"}`}
                    >
                      <Plane size={20} />
                      <span className="font-semibold" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>वायु मार्ग</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setJourney("road")}
                      className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all ${journey === "road" ? "border-gray-300 bg-gray-100 text-gray-600" : "border-gray-200 text-[#374151]/60 hover:border-gray-200"}`}
                    >
                      <Car size={20} />
                      <span className="font-semibold" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>सड़क मार्ग</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#111111] mb-2" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>आपका नाम</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#16a34a] focus:outline-none bg-[#f5f5f5] text-[#111111] transition-colors"
                      placeholder="नाम लिखें"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111111] mb-2" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>मोबाइल नंबर</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#16a34a] focus:outline-none bg-[#f5f5f5] text-[#111111] transition-colors"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111111] mb-2" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>तीर्थ स्थल</label>
                    <div className="relative">
                      <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#16a34a]" />
                      <input
                        type="text"
                        required
                        value={formData.destination}
                        onChange={e => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#16a34a] focus:outline-none bg-[#f5f5f5] text-[#111111] transition-colors"
                        placeholder="गंतव्य"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111111] mb-2" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>यात्रा तिथि</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={e => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#16a34a] focus:outline-none bg-[#f5f5f5] text-[#111111] transition-colors"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-[#111111] mb-2" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>यात्री संख्या</label>
                    <input
                      type="number"
                      min="1"
                      required
                      value={formData.passengers}
                      onChange={e => setFormData({ ...formData, passengers: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#16a34a] focus:outline-none bg-[#f5f5f5] text-[#111111] transition-colors"
                      placeholder="कितने लोग यात्रा करेंगे"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-[#16a34a] text-white font-bold rounded-xl shadow-lg hover:shadow-black/15 hover:scale-[1.02] transition-all duration-300"
                  style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
                >
                  <Send size={18} />
                  भेजें
                </button>
              </form>
            )}
          </motion.div>

          {/* Share */}
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
