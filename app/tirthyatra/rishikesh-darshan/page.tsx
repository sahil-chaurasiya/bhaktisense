"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { CheckCircle, XCircle, Phone, Send } from "lucide-react";

const fadeUp = (delay = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay } });

const itinerary = [
  { day: "दिन १", title: "हरिद्वार आगमन", points: ["प्रतिनिधि स्वागत", "होटल Check-In", "माँ मनसा-चंडी देवी दर्शन", "गंगा स्नान व आरती", "रात्रि विश्राम हरिद्वार"] },
  { day: "दिन २", title: "ऋषिकेश आगमन", points: ["राम झूला दर्शन", "लक्ष्मण झूला दर्शन", "त्र्यंबकेश्वर मंदिर (तेरा मंज़िल मंदिर) दर्शन"] },
  { day: "दिन ३", title: "ऋषिकेश दर्शन", points: ["नीलकंठ महादेव जी दर्शन", "बीटल्स आश्रम (84 कुटिया)", "ऋषिकेश शाम की प्राकृतिक सैर"] },
  { day: "दिन ४", title: "ऋषिकेश दर्शन", points: ["वीरभद्र मंदिर", "वशिष्ठ गुफा", "कुंजापुरी देवी मंदिर", "शाम की प्राकृतिक सैर"] },
  { day: "दिन ५", title: "साहसिक गतिविधि", points: ["नीर गढ़ झरना", "शिवपुरी", "योग या राफ्टिंग"] },
  { day: "दिन ६", title: "ऋषिकेश से हरिद्वार", points: ["होटल/एयरपोर्ट/रेलवे स्टेशन पर छोड़ना"] },
];

const places = [
  { name: "राम झूला", desc: "भगवान राम के वनवास से जुड़ा ऐतिहासिक झूला पुल" },
  { name: "लक्ष्मण झूला", desc: "लक्ष्मण जी द्वारा गंगा पार करने की पौराणिक स्थली" },
  { name: "त्र्यंबकेश्वर मंदिर", desc: "गंगा तट पर 13 मंजिला भव्य मंदिर" },
  { name: "नीलकंठ महादेव", desc: "समुद्र मंथन में विष पीने वाले भगवान शिव का धाम" },
  { name: "बीटल्स आश्रम", desc: "1968 में बीटल्स द्वारा विख्यात, ध्यान और प्रकृति का केंद्र" },
  { name: "शिवपुरी राफ्टिंग", desc: "भारत के सर्वश्रेष्ठ राफ्टिंग स्थलों में से एक" },
];

const included = ["शुद्ध सात्विक भोजन (ब्रेकफास्ट, लंच, डिनर)", "डीलक्स होटल आवास (1 रात हरिद्वार कॉम्प्लीमेंट्री)", "हरिद्वार-ऋषिकेश-हरिद्वार रोड ट्रिप", "रेलवे/बस/एयरपोर्ट पिकअप-ड्रॉप"];
const excluded = ["निजी खर्च (टेलीफोन, टिप्स, लांड्री)", "वीडियोग्राफी", "इंश्योरेंस/बीमा (वैकल्पिक)", "पूजा शुल्क (सीधे यात्रियों द्वारा)"];
const policy = ["यात्रा राशि का 50% अग्रिम, शेष यात्रा से 15 दिन पहले।", "पुनर्निर्धारण लागत के 10% अतिरिक्त भुगतान पर।", "खराब मौसम में संस्था का निर्णय मान्य होगा।"];

export default function RishikeshDarshanPage() {
  const [journey, setJourney] = useState<"air" | "road" | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-[#f5f5f5]">
      <Navbar />
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1544098485-2a2654c26f4d?w=1800&auto=format&fit=crop" alt="ऋषिकेश" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-20 pt-40 w-full">
          <motion.div {...fadeUp()}>
            <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
              <a href="/" className="hover:text-white transition-colors" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>मुखपृष्ठ</a><span>/</span>
              <a href="/tirthyatra" className="hover:text-white transition-colors" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>तीर्थयात्रा</a><span>/</span>
              <span className="text-gray-400" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>ऋषिकेश दर्शन</span>
            </div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-14 bg-[#16a34a]" /><span className="text-[#16a34a] text-xl">ॐ</span><div className="h-px w-14 bg-[#16a34a]" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-3" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>ऋषिकेश दर्शन</h1>
            <p className="text-[#16a34a] text-lg font-semibold mb-3" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>योग की विश्व राजधानी</p>
            <p className="text-white/65 max-w-2xl leading-relaxed text-sm" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              सड़क मार्ग द्वारा &ldquo;6 दिन और 5 रात&rdquo; में Ex-हरिद्वार से पूरे विधि-विधान द्वारा संपन्न।
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {["6 दिन • 5 रात", "सड़क मार्ग", "Ex-हरिद्वार", "$300 से शुरू"].map((tag) => (
                <span key={tag} className="bg-white/10 border border-white/15 text-white/80 text-xs px-3 py-1.5 rounded-lg" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <motion.div {...fadeUp()}>
                <h2 className="text-2xl font-black text-[#111] mb-5" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>दर्शनीय स्थल</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {places.map((p, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-xl p-4">
                      <p className="font-bold text-[#111] text-sm mb-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{p.name}</p>
                      <p className="text-gray-500 text-xs" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{p.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeUp(0.1)}>
                <h2 className="text-2xl font-black text-[#111] mb-6" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>यात्रा कार्यक्रम (6 दिन • 5 रात)</h2>
                <div className="space-y-4">
                  {itinerary.map((day, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                      <div className="bg-[#111] px-5 py-3 flex items-center gap-3">
                        <span className="text-[#16a34a] font-black text-sm">{day.day}</span>
                        <span className="text-white font-semibold text-sm" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{day.title}</span>
                      </div>
                      <ul className="p-5 space-y-1.5">
                        {day.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-600" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                            <span className="text-[#16a34a] mt-0.5 flex-shrink-0">•</span>{pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeUp(0.1)} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-black text-[#111] mb-4 flex items-center gap-2 text-sm" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}><CheckCircle size={16} className="text-[#16a34a]" /> यात्रा में शामिल</h3>
                  <ul className="space-y-2">{included.map((item, i) => (<li key={i} className="flex items-start gap-2 text-xs text-gray-600" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}><CheckCircle size={12} className="text-[#16a34a] mt-0.5 flex-shrink-0" />{item}</li>))}</ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-black text-[#111] mb-4 flex items-center gap-2 text-sm" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}><XCircle size={16} className="text-red-400" /> यात्रा में शामिल नहीं</h3>
                  <ul className="space-y-2">{excluded.map((item, i) => (<li key={i} className="flex items-start gap-2 text-xs text-gray-600" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}><XCircle size={12} className="text-red-400 mt-0.5 flex-shrink-0" />{item}</li>))}</ul>
                </div>
              </motion.div>

              <motion.div {...fadeUp(0.1)} className="bg-[#111] rounded-xl p-6">
                <h3 className="text-white font-black mb-4 text-sm" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>नीति एवं शर्तें</h3>
                <ul className="space-y-2">{policy.map((p, i) => (<li key={i} className="flex items-start gap-2 text-xs text-white/60" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}><span className="text-[#16a34a] flex-shrink-0 mt-0.5">→</span>{p}</li>))}</ul>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <motion.div {...fadeUp(0.15)} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl shadow-black/10">
                  <div className="bg-[#16a34a] p-6 text-white">
                    <p className="text-sm opacity-80 mb-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>ऋषिकेश दर्शन</p>
                    <p className="text-3xl font-black">$300</p>
                    <p className="text-xs opacity-70 mt-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>6 दिन • 5 रात • Ex-हरिद्वार</p>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <input placeholder="पहला नाम" className="px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}} />
                      <input placeholder="अंतिम नाम" className="px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}} />
                    </div>
                    <input placeholder="फ़ोन नंबर" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50" />
                    <input placeholder="WhatsApp नंबर" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50" />
                    <input placeholder="शहर" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}} />
                    <input type="date" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50 text-gray-500" />
                    <input placeholder="यात्रियों की संख्या" type="number" min="1" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50" />
                    <div className="grid grid-cols-2 gap-2">
                      <button onClick={() => setJourney("air")} className={`flex items-center justify-center gap-1.5 p-3 rounded-lg border-2 text-xs font-semibold transition-all ${journey === "air" ? "border-[#16a34a] bg-green-50 text-[#16a34a]" : "border-gray-200 text-gray-500"}`} style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>✈️ वायु मार्ग</button>
                      <button onClick={() => setJourney("road")} className={`flex items-center justify-center gap-1.5 p-3 rounded-lg border-2 text-xs font-semibold transition-all ${journey === "road" ? "border-[#16a34a] bg-green-50 text-[#16a34a]" : "border-gray-200 text-gray-500"}`} style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>🚗 सड़क मार्ग</button>
                    </div>
                    {submitted ? (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center"><p className="text-[#16a34a] font-bold text-sm" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>✓ धन्यवाद!</p></div>
                    ) : (
                      <button onClick={() => setSubmitted(true)} className="w-full flex items-center justify-center gap-2 py-3 bg-[#16a34a] text-white font-bold rounded-lg hover:bg-[#15803d] transition-all text-sm" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}><Send size={14} /> बुकिंग भेजें</button>
                    )}
                    <a href="tel:+911234567890" className="w-full flex items-center justify-center gap-2 py-2.5 border-2 border-gray-200 text-gray-600 text-xs font-semibold rounded-lg hover:border-[#16a34a] hover:text-[#16a34a] transition-all" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}><Phone size={13} /> अभी कॉल करें</a>
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