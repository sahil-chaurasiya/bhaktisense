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

const daanTypes = [
  { name: "पाप धेनु दान", desc: "पापों से छुटकारा पाने के लिए", icon: "🙏" },
  { name: "करज मुक्ति धेनु दान", desc: "ऋणों से मुक्ति के लिए", icon: "💰" },
  { name: "मोक्ष धेनु दान", desc: "मोक्ष (आत्मज्ञान) के लिए", icon: "🌟" },
  { name: "प्रयास्तचित धेनु दान", desc: "क्षमा मांगने के लिए", icon: "🕊️" },
  { name: "वैतरणी धेनु दान", desc: "जीवन के अंतिम दिनों में मोक्ष के लिए", icon: "🌸" },
];

const benefits = [
  "मृत्यु के बाद मोक्ष प्राप्ति में सहायक",
  "पाप कर्मों और पापों से छुटकारा",
  "सूर्यलोक की प्राप्ति",
  "ऋणों से मुक्ति",
  "व्यक्ति को शुद्ध बनाता है",
  "अनंत आनंद की प्राप्ति",
  "पितृ मोक्ष में सहायक",
  "देवताओं की कृपा प्राप्ति",
];

const pricing = [
  { label: "समस्त पूजन सामग्री", amount: "₹ १,१००", note: "" },
  { label: "प्रत्येक पंडित को दक्षिणा", amount: "₹ १,१००", note: "" },
  { label: "यज्ञशाला के लिये दान", amount: "₹ १,१००", note: "(वैकल्पिक)" },
  { label: "गाय का मूल्य", amount: "आप पर निर्भर", note: "" },
];

export default function GauDaanPage() {
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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16rem] text-white/[0.03] font-black select-none leading-none pointer-events-none" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>🐄</div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-20 pt-40 w-full">
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6 flex-wrap">
              <a href="/" className="hover:text-[#111111] transition-colors" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>मुखपृष्ठ</a>
              <span>/</span>
              <a href="/daan" className="hover:text-[#111111] transition-colors" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>दान</a>
              <span>/</span>
              <span className="text-gray-500" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>गौ (गाय) दान</span>
            </div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-14 bg-[#16a34a]" />
              <span className="text-[#16a34a] text-xl">ॐ</span>
              <div className="h-px w-14 bg-[#16a34a]" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-4" style={{fontFamily:"'Noto Sans Devanagari',sans-serif", textShadow:"0 4px 30px rgba(0,0,0,0.6)"}}>
              गौ (गाय) दान
            </h1>
            <p className="text-[#ffffff] text-xl font-semibold mb-4" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>सर्वश्रेष्ठ पुण्यदायी दान</p>
            <p className="text-white/60 max-w-2xl leading-relaxed" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              यदि आप गाय का दान करते हैं तो इससे बड़ा कोई दूसरा पुण्य कार्य नहीं। गौ दान को सभी दानों में सर्वश्रेष्ठ माना गया है।
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

              {/* Why Gau Daan */}
              <motion.div {...fadeUp()}>
                <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">— गौ दान का महत्व —</p>
                <h2 className="text-3xl font-bold text-[#111111] mb-5" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>क्यों करना चाहिए गौ दान</h2>
                <div className="space-y-4 text-[#111111]/70 leading-relaxed" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                  <p>हिंदू धर्म में कई तरह के दानों की बात की जाती है। मगर, इन सबमें गौ दान सबसे विशिष्ट है। कहा जाता है कि गाय में सभी देवताओं का वास होता है और इसलिए गाय का दान करने से सभी तरह के कल्याण होते हैं।</p>
                  <p>मृतात्मा जब स्वर्ग या नर्क की यात्रा कर रही होती है तो उसके रास्ते में पड़ने वाली वैतरणी नदी को गाय की पूंछ पकड़कर ही पार करना होता है। जो गौदान करता है उस मृतात्मा को वही गाय वैतरणी पार करवाती है।</p>
                  <p>शास्त्रों के अनुसार, जो लोग श्रेष्ठ मृत्यु चाहते हैं, अलंकृत विमान के जरिए अपने परमात्मा के पास पहुंचना चाहते हैं, उन्हें गोदान जरूर करना चाहिए। इसके अलावा गोदान करने से पितृ मोक्ष भी होता है।</p>
                </div>
              </motion.div>

              {/* Gau Daan Types */}
              <motion.div {...fadeUp(0.1)}>
                <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">— गौ दान के प्रकार —</p>
                <h2 className="text-3xl font-bold text-[#111111] mb-6" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>पांच प्रकार के गौ दान</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {daanTypes.map((type, i) => (
                    <motion.div
                      key={type.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="text-3xl mb-3">{type.icon}</div>
                      <h3 className="font-bold text-[#111111] mb-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{type.name}</h3>
                      <p className="text-sm text-[#16a34a]" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{type.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div {...fadeUp(0.15)}>
                <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">— फल एवं लाभ —</p>
                <h2 className="text-3xl font-bold text-[#111111] mb-6" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>गौ दान के लाभ</h2>
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

              {/* How the cow should be */}
              <motion.div {...fadeUp(0.2)} className="bg-[#111111] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute right-4 top-4 text-8xl text-white/[0.05] font-bold select-none" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>गाय</div>
                <p className="text-[#16a34a] text-xs font-semibold tracking-widest uppercase mb-4">— विधि —</p>
                <h3 className="text-2xl font-bold text-white mb-4" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>कैसी होनी चाहिए गाय</h3>
                <div className="space-y-3 text-white/65 text-sm leading-relaxed relative z-10" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                  <p>हमेशा ऐसी गाय का दान करना चाहिए, जो <strong className="text-[#ffffff]">वृद्ध नहीं हो</strong>। उसके सींग और खुर चमकदार हों।</p>
                  <p>गाय के साथ <strong className="text-[#ffffff]">सोने या कांस्य के बर्तन</strong> में घी-दूध और तिल डालकर कुश के साथ उस गाय की पूंछ पर रखकर उसे दान किया जाना चाहिए।</p>
                  <p>दान की पूर्णता के लिए गाय के साथ ही <strong className="text-[#ffffff]">यथा-शक्ति धन या सोने</strong> का भी दान करना चाहिए।</p>
                  <p>गाय में ब्रह्मा, विष्णु, महादेव, गौरी, कार्तिकेय, सूर्य-चंद्रमा सहित समस्त देवताओं का निवास माना गया है।</p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Booking card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <motion.div {...fadeUp(0.15)} className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl shadow-black/15
                  <div className="bg-[#16a34a] p-6 text-white">
                    <p className="text-sm font-semibold opacity-80 mb-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>कुल मूल्य (प्रति व्यक्ति/युगल)</p>
                    <p className="text-4xl font-black" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>₹ ३,३००</p>
                    <p className="text-xs opacity-70 mt-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>+ गाय का मूल्य</p>
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