"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Phone, Send } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const yatraPoints = [
  "माँ श्री गंगा जी दर्शन, पूजा-स्नान एवं आरती से धर्मयात्रा का श्री गणेश (केदारनाथ जी एवं नीलकंठ जी के लिये ब्रह्मकुंड से गंगाजल)",
  "भैरव जी दर्शन एवं पूजा",
  "माँ माया देवी जी दर्शन एवं पूजा",
  "माँ मनसा देवी जी दर्शन एवं पूजा",
  "माँ चंडी देवी जी दर्शन एवं पूजा",
  "दरिद्र भंजन महादेव जी दर्शन एवं पूजा",
  "दक्षेश्वर महादेव जी दर्शन एवं पूजा",
  "बिल्वकेश्वर महादेव जी दर्शन एवं पूजा",
  "माँ श्री गंगा जी दर्शन एवं पूजा-स्नान से चारधाम यात्रा का श्री गणेश",
  "चारधाम यात्रा (केदारनाथ जी, बद्रीनाथ जी, गंगोत्री जी, यमुनोत्री जी)",
  "स्वर्गारोहिणी यात्रा-सतोपथ यात्रा (आपके स्वास्थ्य पर निर्भर)",
];

export default function DharmyatraPage() {
  const [journey, setJourney] = useState<"air" | "road" | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-[#f5f5f5]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img src="/dharmyatra.jpg" alt="धर्मयात्रा" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-20 pt-40 w-full">
          <motion.div {...fadeUp()}>
            <div className="flex items-center gap-2 text-black/50 text-sm mb-6">
              <a href="/" className="hover:text-white transition-colors" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>मुखपृष्ठ</a>
              <span>/</span>
              <a href="/tirthyatra" className="hover:text-white transition-colors" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>तीर्थयात्रा</a>
              <span>/</span>
              <span className="text-grey-700" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>धर्मयात्रा</span>
            </div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-14 bg-[#16a34a]" />
              <span className="text-[#16a34a] text-xl">ॐ</span>
              <div className="h-px w-14 bg-[#16a34a]" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-black mb-4" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>धर्मयात्रा</h1>
            <p className="text-[#16a34a] text-lg font-semibold mb-3" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>।।धर्मो रक्षति रक्षितः।।</p>
            <p className="text-white/65 max-w-2xl leading-relaxed" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              धर्मयात्रा धर्म को अपने में समाहित करने की यात्रा है। समूहों के लिये उपलब्ध यह यात्रा जूना अखाड़ा के साधु-संतों के मार्गदर्शन में संपन्न होती है।
            </p>
            <div className="mt-6 inline-block bg-white/10 border border-white/15 rounded-lg px-4 py-2 text-white/70 text-sm">
              🚌 यह यात्रा <strong className="text-white">समूहों के लिये</strong> उपलब्ध है
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-12">

              {/* About */}
              <motion.div {...fadeUp()}>
                <h2 className="text-2xl font-black text-[#111] mb-4" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>धर्मयात्रा के बारे में</h2>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                  <p>
                    धर्मयात्रा धर्म को अपने में समाहित करने की यात्रा है, धर्मयात्रा के दौरान आप अपने सनातन धर्म को और अधिक अच्छे तरह से जान पाएंगें, धर्म को अपने दैनिक जीवन में चरितार्थ करेंगें एवं धर्म के प्रति प्रतिबद्ध एवं संकल्पित होंगें। धर्म यात्रा को जूना अखाड़ा के साधु-संतो ने इस आधुनिक युग में सनातन धर्म परंपरा के विलुप्त होते धार्मिक भावनाओं एवं संस्कृति (धर्म प्रचार-प्रसार, धर्म रक्षा एवं धर्म भाव) को संजोने एवं व्याख्यान के लिये आरंभ किया।
                  </p>
                  <p>
                    धर्म यात्रा के दौरान आप पूर्ण रूप से भक्ति-मय हो जायेंगें, एवं आप असंख्य पुण्य के भागी बनेंगें और आपके समस्त पापों का नाश होकर आपका जीवन सफल हो जायेगा एवं आपके जीवन का उद्घार होगा। और मृत्यु पश्चात आपको मोक्ष की प्राप्ति होगी।
                  </p>
                </div>
              </motion.div>

              {/* Sankshipt Vivaran */}
              <motion.div {...fadeUp(0.1)}>
                <h2 className="text-2xl font-black text-[#111] mb-4" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>धर्मयात्रा संक्षिप्त विवरण</h2>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-6" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                  <p>
                    यह यात्रा मोक्षप्रदा पतित-पावनी माँ श्री गंगा जी की धरती व देवभूमि के द्वार हरिद्वार से श्री गणेश (शुरू) होगी। समस्त यात्रा के दौरान भोजन (सात्विक), आवासीय, एवं वाहन सुविधा उपलब्ध होगी। रोज सुबह-शाम पूजन, आरती एवं भजन निरंतर रहेगा। एवं रोजाना विभिन्न साधु-सन्यासियों द्वारा धर्म ज्ञान, ट्रस्ट एवं जूना अखाड़ा पर व्याख्यान होगा, एवं आपको साधु-सन्यासियों का शुभ-आशिष प्राप्त होगा।
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <ol className="space-y-3">
                    {yatraPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#16a34a] text-white text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.div>

              {/* Group note */}
              <motion.div {...fadeUp(0.15)} className="bg-[#111] rounded-xl p-6">
                <p className="text-white/80 text-sm leading-relaxed" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                  यह यात्रा <strong className="text-white">समूहों के लिये ही उपलब्ध है</strong>, सिर्फ विशेष परिस्थितियों में ही एकल व्यक्ति के लिये उपलब्ध होगी।
                </p>
                <p className="text-white/60 text-sm leading-relaxed mt-3" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                  इस यात्रा के सम्बंध में जानकारी के लिये आप नीचे दिये गए फॉर्म को भरकर सबमिट कीजिए, उसके बाद स्वतः ही हमारे सहयोगी आपसे संपर्क करके आपसे सम्पूर्ण जानकारी लेगें और आपको आगे के लिये समन्वय करेंगें। अधिक जानकारी के लिये आप हमारे टोल फ्री नं. या अन्य किसी माध्यम से हमसे सम्पर्क भी कर सकते हैं।
                </p>
              </motion.div>

            </div>

            {/* RIGHT — Booking form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <motion.div {...fadeUp(0.15)} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl shadow-black/10">
                  <div className="bg-[#16a34a] p-6 text-white">
                    <p className="text-sm opacity-80 mb-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>धर्मयात्रा बुकिंग</p>
                    <p className="text-2xl font-black" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>समूह यात्रा</p>
                    <p className="text-xs opacity-70 mt-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>Ex-हरिद्वार • सम्पूर्ण व्यवस्था</p>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <input placeholder="पहला नाम" className="col-span-1 px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}} />
                      <input placeholder="अंतिम नाम" className="col-span-1 px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}} />
                    </div>
                    <input placeholder="फ़ोन नंबर" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50" />
                    <input placeholder="WhatsApp नंबर" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50" />
                    <input placeholder="शहर" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}} />
                    <input type="date" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50 text-gray-500" />
                    <input placeholder="यात्रियों की संख्या" type="number" min="1" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}} />
                    <textarea placeholder="आवश्यकता / विशेष अनुरोध" rows={3} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#16a34a] bg-gray-50 resize-none" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}} />
                    <div>
                      <p className="text-xs text-gray-500 mb-2" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>यात्रा मार्ग चुनें</p>
                      <div className="grid grid-cols-2 gap-2">
                        <button onClick={() => setJourney("air")}
                          className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 text-sm font-semibold transition-all ${journey === "air" ? "border-[#16a34a] bg-green-50 text-[#16a34a]" : "border-gray-200 text-gray-500 hover:border-gray-300"}`}
                          style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                          ✈️ वायु मार्ग
                        </button>
                        <button onClick={() => setJourney("road")}
                          className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 text-sm font-semibold transition-all ${journey === "road" ? "border-[#16a34a] bg-green-50 text-[#16a34a]" : "border-gray-200 text-gray-500 hover:border-gray-300"}`}
                          style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                          🚗 सड़क मार्ग
                        </button>
                      </div>
                    </div>
                    {submitted ? (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                        <p className="text-[#16a34a] font-bold text-sm" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>✓ धन्यवाद! हम जल्द संपर्क करेंगे।</p>
                      </div>
                    ) : (
                      <button onClick={() => setSubmitted(true)} className="w-full flex items-center justify-center gap-2 py-3 bg-[#16a34a] text-white font-bold rounded-lg hover:bg-[#15803d] transition-all" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                        <Send size={15} /> बुकिंग भेजें
                      </button>
                    )}
                    <a href="tel:+911234567890" className="w-full flex items-center justify-center gap-2 py-2.5 border-2 border-gray-200 text-gray-600 text-sm font-semibold rounded-lg hover:border-[#16a34a] hover:text-[#16a34a] transition-all" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                      <Phone size={14} /> अभी कॉल करें
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