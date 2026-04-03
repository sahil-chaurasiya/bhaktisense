"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Phone, Mail, Share2, CheckCircle, Clock, Users } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const benefits = [
  "पापों से छुटकारा मिलता है",
  "भगवान शिव की विशेष कृपा प्राप्त होती है",
  "जीवन में समृद्धि और सुख की प्राप्ति",
  "मोक्ष प्राप्ति में सहायक",
  "पितृदोष निवारण में सहायक",
  "परिवार में शांति और खुशहाली",
  "नंदी महाराज की कृपा से कैलाश की प्राप्ति",
  "धर्म के मार्ग पर अग्रसर रहने की शक्ति",
];

const kings = [
  { name: "महाराज रघु", desc: "अनेक महादान किए" },
  { name: "श्रीराम", desc: "मर्यादा पुरुषोत्तम ने दान किए" },
  { name: "सम्राट समुद्र गुप्त", desc: "विशाल दान कार्य" },
  { name: "हर्षवर्धन", desc: "कुंभ में समस्त खजाना दान किया" },
];

const pricing = [
  { label: "समस्त पूजन सामग्री", amount: "₹ १,१००", note: "" },
  { label: "प्रत्येक पंडित को दक्षिणा", amount: "₹ १,१००", note: "" },
  { label: "यज्ञशाला के लिये दान", amount: "₹ १,१००", note: "(वैकल्पिक)" },
  { label: "बैल का मूल्य", amount: "आप पर निर्भर", note: "" },
];

export default function BailDaanPage() {
  return (
    <main className="bg-[#f5f5f5]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-[#111111]">
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, #16a34a 0%, transparent 60%), radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 30px 30px",
        }} />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30" style={{background:"radial-gradient(ellipse at right, #16a34a 0%, transparent 70%)"}} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16rem] text-white/[0.03] font-black select-none leading-none pointer-events-none" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>🐂</div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-20 pt-40 w-full">
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6 flex-wrap">
              <a href="/" className="hover:text-[#111111] transition-colors" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>मुखपृष्ठ</a>
              <span>/</span>
              <a href="/daan" className="hover:text-[#111111] transition-colors" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>दान</a>
              <span>/</span>
              <span className="text-gray-500" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>बैल दान</span>
            </div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-14 bg-[#16a34a]" />
              <span className="text-[#16a34a] text-xl">ॐ</span>
              <div className="h-px w-14 bg-[#16a34a]" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-4" style={{fontFamily:"'Noto Sans Devanagari',sans-serif", textShadow:"0 4px 30px rgba(0,0,0,0.6)"}}>
              बैल दान
            </h1>
            <p className="text-[#ffffff] text-xl font-semibold mb-4" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>शिव को प्रिय — परम पुण्यदायी दान</p>
            <p className="text-white/60 max-w-2xl leading-relaxed" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              भगवान शिव के प्रिय वाहन नंदी (बैल) का दान सनातन धर्म में परम पुण्यदायी माना जाता है। यह दान पाप-मुक्ति और शिव कृपा का श्रेष्ठ उपाय है।
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {[{ Icon: Clock, text: "१ दिन की पूजा" }, { Icon: Users, text: "१ पंडित" }, { Icon: CheckCircle, text: "हरिद्वार में संपन्न" }].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg text-white/80 text-sm">
                  <Icon size={14} className="text-gray-500" />
                  <span style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-12">

              {/* About */}
              <motion.div {...fadeUp()}>
                <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">— बैल दान का महत्व —</p>
                <h2 className="text-3xl font-bold text-[#111111] mb-5" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>नंदी (बैल) दान क्यों करें</h2>
                <div className="space-y-4 text-[#111111]/70 leading-relaxed" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                  <p>सनातन/हिन्दू धर्म में दान को बहुत ही महत्वपूर्ण बताया गया है। बैल भगवान शिव का प्रिय वाहन नंदी है। इसलिए बैल का दान करना भगवान शिव को अत्यंत प्रिय है।</p>
                  <p>शास्त्रों में कहा गया है कि भरत जैसे राजाओं ने ये दान किए थे। संसार में अपकर्मों और पापों से छुटकारा पाने के लिए धनी व्यक्तियों को यह दान करना चाहिए।</p>
                  <p>जीवन क्षणभंगुर है, लक्ष्मी चंचल है। वह हमेशा किसी के पास नहीं रहती, इसलिए धन होने पर दान करना ही उसकी शोभा है।</p>
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div {...fadeUp(0.1)}>
                <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">— फल एवं लाभ —</p>
                <h2 className="text-3xl font-bold text-[#111111] mb-6" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>बैल दान के लाभ</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map((b, i) => (
                    <motion.div
                      key={b}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl"
                    >
                      <CheckCircle size={16} className="text-[#16a34a] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-[#111111]/75" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{b}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Historic Kings */}
              <motion.div {...fadeUp(0.15)}>
                <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">— ऐतिहासिक प्रमाण —</p>
                <h2 className="text-3xl font-bold text-[#111111] mb-6" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>महान राजाओं ने किए दान</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {kings.map((k, i) => (
                    <motion.div
                      key={k.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="bg-white border border-gray-200 rounded-2xl p-4 text-center shadow-sm"
                    >
                      <div className="text-2xl mb-2">👑</div>
                      <h3 className="font-bold text-[#111111] text-sm mb-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{k.name}</h3>
                      <p className="text-xs text-[#16a34a]" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{k.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Harshvardhan story */}
              <motion.div {...fadeUp(0.2)} className="bg-[#111111] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute right-4 top-4 text-8xl text-white/[0.05] font-bold select-none" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>इतिहास</div>
                <p className="text-[#16a34a] text-xs font-semibold tracking-widest uppercase mb-4">— शास्त्र कथा —</p>
                <h3 className="text-2xl font-bold text-white mb-4" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>सम्राट हर्षवर्धन का दान</h3>
                <div className="space-y-3 text-white/65 text-sm leading-relaxed relative z-10" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                  <p>सम्राट हर्षवर्धन हर पांचवें या छठे साल कुंभ मेले में जाते थे। वह बारी-बारी <strong className="text-[#ffffff]">भगवान सूर्य, शिव और बुध</strong> का पूजन करते थे।</p>
                  <p>पूजन के बाद ब्राह्मणों, आचार्यों, दीनों, बौद्ध संघ के तपस्वी भिक्षुओं को दान देते थे। इस दान के क्रम में वह लाए हुए <strong className="text-[#ffffff]">अपने खजाने की सारी चीजें दान</strong> कर देते थे।</p>
                  <p>वह अपने <strong className="text-[#ffffff]">राजसी वस्त्र भी दान</strong> कर देते थे। फिर वह अपनी बहन राजश्री से कपड़े मांगकर पहनते थे।</p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <motion.div {...fadeUp(0.15)} className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl shadow-black/15
                  <div className="bg-[#16a34a] p-6 text-white">
                    <p className="text-sm font-semibold opacity-80 mb-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>कुल मूल्य (प्रति व्यक्ति/युगल)</p>
                    <p className="text-4xl font-black" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>₹ ३,३००</p>
                    <p className="text-xs opacity-70 mt-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>+ बैल का मूल्य</p>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold text-[#111111]/40 uppercase tracking-wider mb-4" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>मूल्य विवरण</p>
                    <div className="space-y-3 mb-6">
                      {pricing.map((p) => (
                        <div key={p.label} className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm text-[#111111]/75" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{p.label}</p>
                            {p.note && <p className="text-[10px] text-[#111111]/40" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{p.note}</p>}
                          </div>
                          <p className="text-sm font-bold text-[#16a34a] text-right flex-shrink-0" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{p.amount}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-[#f5f5f5] rounded-xl p-4 mb-6 space-y-2 border border-gray-200">
                      <p className="text-xs font-bold text-[#111111]/50 uppercase tracking-wider mb-3" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>पूजा प्रक्रिया</p>
                      <div className="flex items-center gap-3"><Clock size={14} className="text-gray-500" /><p className="text-sm text-[#111111]/70" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>पूजा के दिन : <strong className="text-[#111111]">१ दिन</strong></p></div>
                      <div className="flex items-center gap-3"><Users size={14} className="text-gray-500" /><p className="text-sm text-[#111111]/70" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>पंडितों की संख्या : <strong className="text-[#111111]">१ पंडित</strong></p></div>
                      <div className="flex items-center gap-3"><CheckCircle size={14} className="text-gray-500" /><p className="text-sm text-[#111111]/70" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>स्थान : <strong className="text-[#111111]">हरिद्वार</strong></p></div>
                    </div>
                    <a href="tel:+911234567890" className="w-full flex items-center justify-center gap-2 py-4 bg-[#16a34a] text-white font-bold rounded-xl shadow-lg hover:shadow-black/15 hover:scale-[1.02] transition-all duration-300 mb-3" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                      <Phone size={16} />अभी बुक करें
                    </a>
                    <a href="mailto:seva@bhaktisense.in" className="w-full flex items-center justify-center gap-2 py-3.5 border-2 border-gray-300 text-[#16a34a] font-bold rounded-xl hover:bg-[#16a34a] hover:text-white transition-all duration-300" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                      <Mail size={16} />संपर्क करें
                    </a>
                  </div>
                </motion.div>

                <motion.div {...fadeUp(0.2)} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-4"><Share2 size={16} className="text-gray-500" /><p className="text-sm font-bold text-[#111111]" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>शेयर करें</p></div>
                  <div className="flex gap-3">
                    {[{ label: "WhatsApp", bg: "bg-green-500", emoji: "💬" }, { label: "Facebook", bg: "bg-blue-600", emoji: "📘" }, { label: "Twitter", bg: "bg-sky-500", emoji: "🐦" }].map((s) => (
                      <button key={s.label} className={`flex-1 ${s.bg} text-white text-xs font-semibold py-2.5 rounded-xl hover:opacity-90 hover:scale-105 transition-all`}>{s.emoji}</button>
                    ))}
                  </div>
                </motion.div>

                <motion.div {...fadeUp(0.25)} className="bg-gradient-to-br from-[#16a34a]/8 to-[#16a34a]/8 border border-gray-200 rounded-2xl p-5 text-center">
                  <p className="text-2xl mb-2">🛕</p>
                  <p className="text-sm font-semibold text-[#111111]" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>उमा महेश्वर सेवा ट्रस्ट</p>
                  <p className="text-xs text-[#111111]/55 mt-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>जूना अखाड़ा, हरिद्वार द्वारा संचालित</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HARIDWAR SECTION */}
      <section className="py-20 bg-[#111111] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
        <div className="absolute right-0 bottom-0 text-[16rem] text-white/[0.03] font-bold select-none leading-none" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>हर</div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeUp()}>
            <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4">— तीर्थ महिमा —</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>धर्मनगरी <span className="text-gray-500">हरिद्वार</span> में दान का महत्व</h2>
            <div className="space-y-4 text-white/65 text-sm leading-relaxed" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              <p>मोक्षप्रदा पतित-पावनी माँ श्री गंगा जी की धरती पर किये गये दान-पुण्य का सर्वाधिक और अलौकिक लाभ मिलता है।</p>
              <p>हरिद्वार को <strong className="text-[#ffffff]">&quot;मोक्ष का द्वार&quot;</strong>, <strong className="text-[#ffffff]">&quot;देवताओं का प्रवेश द्वार&quot;</strong> और <strong className="text-[#ffffff]">&quot;आध्यात्मिक राजधानी&quot;</strong> कहा जाता है।</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}