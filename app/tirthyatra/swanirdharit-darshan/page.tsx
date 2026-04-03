"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Phone, Send, MapPin, Calendar, Users } from "lucide-react";

const fadeUp = (delay = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay } });

const destinations = [
  { name: "चारधाम", icon: "⛰️", desc: "केदारनाथ, बद्रीनाथ, गंगोत्री, यमुनोत्री" },
  { name: "हरिद्वार", icon: "🕉️", desc: "हर की पौड़ी, मनसा देवी, चंडी देवी" },
  { name: "ऋषिकेश", icon: "🌿", desc: "राम-लक्ष्मण झूला, नीलकंठ, बीटल्स आश्रम" },
  { name: "काशी-वाराणसी", icon: "🪔", desc: "विश्वनाथ मंदिर, गंगा घाट" },
  { name: "मथुरा-वृंदावन", icon: "🦚", desc: "कृष्ण जन्मभूमि, बांके बिहारी" },
  { name: "कस्टम गंतव्य", icon: "🗺️", desc: "आप जहाँ चाहें, हम व्यवस्था करेंगे" },
];

export default function SwanirdharitDarshanPage() {
  const [journey, setJourney] = useState<"air" | "road" | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [selectedDest, setSelectedDest] = useState("");

  return (
    <main className="bg-[#f5f5f5]">
      <Navbar />

      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1548013146-72479768bada?w=1800&auto=format&fit=crop" alt="स्व-निर्धारित दर्शन" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-20 pt-40 w-full">
          <motion.div {...fadeUp()}>
            <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
              <a href="/" className="hover:text-white transition-colors" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>मुखपृष्ठ</a><span>/</span>
              <a href="/tirthyatra" className="hover:text-white transition-colors" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>तीर्थयात्रा</a><span>/</span>
              <span className="text-gray-400" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>स्व-निर्धारित दर्शन</span>
            </div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-14 bg-[#16a34a]" /><span className="text-[#16a34a] text-xl">ॐ</span><div className="h-px w-14 bg-[#16a34a]" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-3" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>स्व-निर्धारित दर्शन</h1>
            <p className="text-[#16a34a] text-lg font-semibold mb-3" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>आपकी इच्छा, हमारी व्यवस्था</p>
            <p className="text-white/65 max-w-2xl leading-relaxed text-sm" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              आप जहाँ दर्शन के लिये जाना चाहते हैं और जिस व्यवस्था के साथ यात्रा करना चाहते हैं — हम आपके लिये विशेष योजना बनाएंगे।
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <div className="lg:col-span-2 space-y-12">
              <motion.div {...fadeUp()}>
                <h2 className="text-2xl font-black text-[#111] mb-2" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>लोकप्रिय गंतव्य</h2>
                <p className="text-gray-500 text-sm mb-6" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>नीचे दिये गए स्थानों में से चुनें या अपना कस्टम गंतव्य बताएं।</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {destinations.map((d, i) => (
                    <button key={i} onClick={() => setSelectedDest(d.name)}
                      className={`flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all ${selectedDest === d.name ? "border-[#16a34a] bg-green-50" : "border-gray-200 bg-white hover:border-gray-300"}`}>
                      <span className="text-2xl">{d.icon}</span>
                      <div>
                        <p className={`font-bold text-sm ${selectedDest === d.name ? "text-[#16a34a]" : "text-[#111]"}`} style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{d.name}</p>
                        <p className="text-gray-500 text-xs mt-0.5" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{d.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeUp(0.1)}>
                <h2 className="text-2xl font-black text-[#111] mb-2" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>हम क्या प्रदान करते हैं</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: <MapPin size={20} className="text-[#16a34a]" />, title: "कस्टम रूट प्लानिंग", desc: "आपकी पसंद के अनुसार पूरी यात्रा योजना" },
                    { icon: <Calendar size={20} className="text-[#16a34a]" />, title: "सुविधाजनक तारीख", desc: "आपकी सुविधा के अनुसार यात्रा की तारीख" },
                    { icon: <Users size={20} className="text-[#16a34a]" />, title: "व्यक्तिगत/समूह", desc: "एकल यात्री से बड़े समूह तक की व्यवस्था" },
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                      <div className="mb-3">{item.icon}</div>
                      <p className="font-bold text-[#111] text-sm mb-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{item.title}</p>
                      <p className="text-gray-500 text-xs" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeUp(0.1)} className="bg-[#111] rounded-xl p-6">
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">— जूना अखाड़ा —</p>
                <p className="text-white text-sm leading-relaxed" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                  जूना अखाड़ा सनातन धर्म की सबसे बड़ी एवं प्राचीन संस्था है। उमा महेश्वर सेवा ट्रस्ट, हरिद्वार द्वारा संचालित इस सेवा में आपकी हर यात्रा धर्मयुक्त और सुखद होगी।
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <motion.div {...fadeUp(0.15)} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl shadow-black/10">
                  <div className="bg-[#16a34a] p-6 text-white">
                    <p className="text-sm opacity-80 mb-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>स्व-निर्धारित दर्शन</p>
                    <p className="text-xl font-black" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>अपनी यात्रा बुक करें</p>
                    <p className="text-xs opacity-70 mt-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>हम जल्द संपर्क करेंगे</p>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <input placeholder="पहला नाम" className="px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}} />
                      <input placeholder="अंतिम नाम" className="px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}} />
                    </div>
                    <input placeholder="फ़ोन नंबर" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50" />
                    <input placeholder="WhatsApp नंबर" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50" />
                    <input placeholder="शहर" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}} />
                    <input
                      placeholder={selectedDest || "गंतव्य / यात्रा का नाम"}
                      value={selectedDest}
                      onChange={(e) => setSelectedDest(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50"
                      style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
                    />
                    <input type="date" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50 text-gray-500" />
                    <input placeholder="यात्रियों की संख्या" type="number" min="1" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50" />
                    <div className="grid grid-cols-2 gap-2">
                      <button onClick={() => setJourney("air")} className={`flex items-center justify-center gap-1.5 p-3 rounded-lg border-2 text-xs font-semibold transition-all ${journey === "air" ? "border-[#16a34a] bg-green-50 text-[#16a34a]" : "border-gray-200 text-gray-500"}`} style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>✈️ वायु मार्ग</button>
                      <button onClick={() => setJourney("road")} className={`flex items-center justify-center gap-1.5 p-3 rounded-lg border-2 text-xs font-semibold transition-all ${journey === "road" ? "border-[#16a34a] bg-green-50 text-[#16a34a]" : "border-gray-200 text-gray-500"}`} style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>🚗 सड़क मार्ग</button>
                    </div>
                    <textarea placeholder="आवश्यकता / विशेष अनुरोध" rows={3} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50 resize-none" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}} />
                    {submitted ? (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                        <p className="text-[#16a34a] font-bold text-sm" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>✓ धन्यवाद! हमारे सहयोगी जल्द संपर्क करेंगे।</p>
                      </div>
                    ) : (
                      <button onClick={() => setSubmitted(true)} className="w-full flex items-center justify-center gap-2 py-3 bg-[#16a34a] text-white font-bold rounded-lg hover:bg-[#15803d] transition-all text-sm" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                        <Send size={14} /> अनुरोध भेजें
                      </button>
                    )}
                    <a href="tel:+911234567890" className="w-full flex items-center justify-center gap-2 py-2.5 border-2 border-gray-200 text-gray-600 text-xs font-semibold rounded-lg hover:border-[#16a34a] hover:text-[#16a34a] transition-all" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                      <Phone size={13} /> अभी कॉल करें
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}