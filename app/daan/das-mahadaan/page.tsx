"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Phone, Mail, Share2, ChevronDown, CheckCircle, Clock, Users } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const daanItems = [
  {
    num: "०१",
    name: "गाय / गौ दान",
    icon: "🐄",
    benefit: "मृत्यु के बाद मोक्ष प्राप्ति",
    detail: "गौ दान व्यक्ति को शुद्ध बनाता है और अनंत आनंद की उच्चतम स्थिति दिलाता है। गाय का दान करने पर सूर्यलोक की प्राप्ति होती है। ऐसा कहा जाता है कि सूर्य, चंद्रमा, वरुण, अग्नि, ब्रह्मा, विष्णु, शिव — सभी उस व्यक्ति को प्रणाम करते हैं जो गाय का दान करता है।",
    color: "from-gray-800 to-gray-900",
  },
  {
    num: "०२",
    name: "भूमि दान",
    icon: "🌍",
    benefit: "उत्तम घर की प्राप्ति",
    detail: "भूमि दान करने से इस जन्म में और अगले जन्म में उत्तम निवास स्थान की प्राप्ति होती है। यह सबसे स्थायी और पुण्यदायी दानों में से एक माना गया है।",
    color: "from-green-600 to-emerald-500",
  },
  {
    num: "०३",
    name: "तिल दान",
    icon: "🌾",
    benefit: "संतान प्राप्ति, शनि-दोष निवारण",
    detail: "कुंडली में शनि खराब अवस्था में हो या शनि की साढ़ेसाती चल रही हो तो तिल दान अत्यंत लाभकारी है। जिस मनुष्य को संतान प्राप्ति की इच्छा हो, उसे तिल का दान करना चाहिए। काले तिल का दान दुर्भाग्य दूर करता है और घर में खुशहाली लाता है।",
    color: "from-gray-800 to-gray-900
  },
  {
    num: "०४",
    name: "स्वर्ण (सोना) दान",
    icon: "✨",
    benefit: "दीर्घायु की प्राप्ति",
    detail: "लंबी उम्र और अच्छे स्वास्थ्य की इच्छा रखने वाले को सोने का दान देना चाहिए। स्वर्ण दान को अत्यंत पुण्यदायी माना गया है।",
    color: "from-gray-800 to-gray-900
  },
  {
    num: "०५",
    name: "घी दान",
    icon: "🪔",
    benefit: "धन-संपत्ति की प्राप्ति",
    detail: "सदा धन-संपत्ति बनाए रखने और आर्थिक समृद्धि के लिए घी का दान किया जाता है। यह यज्ञ में भी अत्यंत महत्वपूर्ण है।",
    color: "from-gray-900 to-gray-900
  },
  {
    num: "०६",
    name: "वस्त्र दान",
    icon: "👘",
    benefit: "चंद्रलोक की प्राप्ति",
    detail: "चंद्रलोक की प्राप्ति के लिए वस्त्रों का दान किया जाना चाहिए। यह दान मन की शांति और पवित्रता भी प्रदान करता है।",
    color: "from-blue-500 to-indigo-500",
  },
  {
    num: "०७",
    name: "धन दान",
    icon: "💰",
    benefit: "उद्देश्य अनुसार विविध लाभ",
    detail: "धन दान करने से विभिन्न लाभ मिलते हैं, जो इस पर निर्भर करता है कि आपने किस उद्देश्य के लिए धन दान किया है। सत्पात्र को दिया धन दान कई गुना पुण्य देता है।",
    color: "from-emerald-500 to-teal-500",
  },
  {
    num: "०८",
    name: "गुड़ दान",
    icon: "🍯",
    benefit: "धन-धान्य की प्राप्ति",
    detail: "धन-धान्य की प्राप्ति और घर में अन्न की कभी कमी न हो, इसके लिए गुड़ का दान करना शुभकारी माना गया है।",
    color: "from-gray-800 to-gray-900",
  },
  {
    num: "०९",
    name: "चांदी दान",
    icon: "🥈",
    benefit: "सौंदर्य एवं उत्तम रूप",
    detail: "अच्छे रूप, सौंदर्य और आकर्षक व्यक्तित्व की इच्छा रखने वालों के लिए चांदी का दान अत्यंत फलदायी माना गया है।",
    color: "from-slate-400 to-gray-400",
  },
  {
    num: "१०",
    name: "नमक दान",
    icon: "🧂",
    benefit: "अन्न की कभी कमी नहीं",
    detail: "नमक का दान करने से दान करने वाले को कभी अन्न की कमी नहीं होती। यह जीवन में भरण-पोषण की निरंतरता सुनिश्चित करता है।",
    color: "from-cyan-500 to-sky-500",
  },
];

const pricing = [
  { label: "समस्त पूजन सामग्री", amount: "₹ १,१००", note: "" },
  { label: "प्रत्येक पंडित को दक्षिणा", amount: "₹ १,१००", note: "" },
  { label: "यज्ञशाला के लिये दान", amount: "₹ १,१००", note: "(वैकल्पिक)" },
  { label: "दान की वस्तुओं का मूल्य", amount: "आप पर निर्भर", note: "(गाय, भूमि, तिल आदि)" },
];

function DaanAccordion({ item, index }: { item: typeof daanItems[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 text-left group"
      >
        {/* Number */}
        <span className="text-[#16a34a]/40 text-sm font-bold w-8 flex-shrink-0" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
          {item.num}
        </span>
        {/* Icon bubble */}
        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-xl flex-shrink-0 shadow-md`}>
          {item.icon}
        </div>
        {/* Title + benefit */}
        <div className="flex-1 min-w-0">
          <p className="font-bold text-[#111111] text-base group-hover:text-[#111111] transition-colors" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
            {item.name}
          </p>
          <p className="text-xs text-[#16a34a] mt-0.5" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
            ✦ {item.benefit}
          </p>
        </div>
        {/* Chevron */}
        <ChevronDown
          size={18}
          className={`text-[#16a34a] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 ml-[4.75rem] border-t border-gray-200 pt-4">
              <p className="text-[#111111]/70 text-sm leading-relaxed" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                {item.detail}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function DasMahadaanPage() {
  return (
    <main className="bg-[#f5f5f5]">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-[#111111]">
        {/* Decorative mandala BG */}
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, #16a34a 0%, transparent 60%), radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 30px 30px",
        }} />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30"
          style={{background:"radial-gradient(ellipse at right, #16a34a 0%, transparent 70%)"}} />

        {/* Large decorative text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] text-white/[0.03] font-black select-none leading-none pointer-events-none" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
          दान
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-20 pt-40 w-full">
          <motion.div {...fadeUp(0)}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6 flex-wrap">
              <a href="/" className="hover:text-[#111111] transition-colors" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>मुखपृष्ठ</a>
              <span>/</span>
              <a href="/daan" className="hover:text-[#111111] transition-colors" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>दान</a>
              <span>/</span>
              <span className="text-gray-500" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>दस महादान</span>
            </div>

            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-14 bg-[#16a34a]" />
              <span className="text-[#16a34a] text-xl">ॐ</span>
              <div className="h-px w-14 bg-[#16a34a]" />
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-4"
              style={{fontFamily:"'Noto Sans Devanagari',sans-serif", textShadow:"0 4px 30px rgba(0,0,0,0.6)"}}>
              दस महादान
            </h1>
            <p className="text-[#ffffff] text-xl font-semibold mb-4" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              सर्वश्रेष्ठ दस महान दान
            </p>
            <p className="text-white/60 max-w-2xl leading-relaxed" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              सनातन/हिन्दू धर्म में दान को बहुत ही महत्वपूर्ण बताया गया है। आप दस महादान एक साथ भी कर सकते हैं, और आप अलग-अलग भी कर सकते हैं।
            </p>

            {/* Quick meta badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { Icon: Clock, text: "१ दिन की पूजा" },
                { Icon: Users, text: "१ पंडित" },
                { Icon: CheckCircle, text: "हरिद्वार में संपन्न" },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg text-white/80 text-sm">
                  <Icon size={14} className="text-gray-500" />
                  <span style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* ── LEFT: Daan items accordion ── */}
            <div className="lg:col-span-2">
              <motion.div {...fadeUp()} className="mb-10">
                <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">— दस महादान में शामिल —</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mb-4" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                  दस वस्तुओं का विवरण
                </h2>
                <p className="text-[#111111]/60 leading-relaxed" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                  प्रत्येक महादान का अपना अलग पुण्य-फल और महत्व है। किसी भी दान पर क्लिक करके विस्तृत जानकारी पढ़ें।
                </p>
              </motion.div>

              <div className="space-y-3">
                {daanItems.map((item, i) => (
                  <DaanAccordion key={item.num} item={item} index={i} />
                ))}
              </div>

              {/* Scripture context */}
              <motion.div {...fadeUp(0.2)} className="mt-12 bg-[#111111] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute right-4 top-4 text-8xl text-white/[0.05] font-bold select-none" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>ग्रंथ</div>
                <p className="text-[#16a34a] text-xs font-semibold tracking-widest uppercase mb-4">— शास्त्र प्रमाण —</p>
                <div className="space-y-4 text-white/65 text-sm leading-relaxed relative z-10" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                  <p>
                    <strong className="text-[#ffffff]">अग्नि पुराण</strong> के अनुसार दस श्रेष्ठ महादान में सोना, अश्व, तिल, हाथी, रथ, भूमि, घर, वधु और गाय आदि शामिल हैं।
                  </p>
                  <p>
                    पुराणों में महादान की संख्या सोलह भी गिनाई गई है — जिसमें तुला पुरुष, हिरण्यगर्भ, कल्पवृक्ष, गोसहस्त्र, कामधेनु आदि प्रमुख हैं।
                  </p>
                  <p>
                    शास्त्रों में कहा गया है — <em className="text-[#ffffff]">जीवन क्षणभंगुर है, लक्ष्मी चंचल है। धन होने पर दान करना ही उसकी शोभा है।</em>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ── RIGHT: Sticky booking card ── */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">

                {/* Price card */}
                <motion.div {...fadeUp(0.15)} className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl shadow-black/15
                  {/* Card header */}
                  <div className="bg-[#16a34a] p-6 text-white">
                    <p className="text-sm font-semibold opacity-80 mb-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>कुल मूल्य (प्रति व्यक्ति/युगल)</p>
                    <p className="text-4xl font-black" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>₹ ३,३००</p>
                    <p className="text-xs opacity-70 mt-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>+ दान वस्तुओं का मूल्य</p>
                  </div>

                  <div className="p-6">
                    {/* Price breakdown */}
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

                    {/* Process info */}
                    <div className="bg-[#f5f5f5] rounded-xl p-4 mb-6 space-y-2 border border-gray-200">
                      <p className="text-xs font-bold text-[#111111]/50 uppercase tracking-wider mb-3" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>पूजा प्रक्रिया</p>
                      <div className="flex items-center gap-3">
                        <Clock size={14} className="text-gray-500" />
                        <p className="text-sm text-[#111111]/70" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>पूजा के दिन : <strong className="text-[#111111]">१ दिन</strong></p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users size={14} className="text-gray-500" />
                        <p className="text-sm text-[#111111]/70" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>पंडितों की संख्या : <strong className="text-[#111111]">१ पंडित</strong></p>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle size={14} className="text-gray-500" />
                        <p className="text-sm text-[#111111]/70" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>स्थान : <strong className="text-[#111111]">हरिद्वार</strong></p>
                      </div>
                    </div>

                    {/* CTAs */}
                    <a
                      href="tel:+911234567890"
                      className="w-full flex items-center justify-center gap-2 py-4 bg-[#16a34a] text-white font-bold rounded-xl shadow-lg hover:shadow-black/15 hover:scale-[1.02] transition-all duration-300 mb-3"
                      style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
                    >
                      <Phone size={16} />
                      अभी बुक करें
                    </a>
                    <a
                      href="mailto:seva@bhaktisense.in"
                      className="w-full flex items-center justify-center gap-2 py-3.5 border-2 border-gray-300 text-[#16a34a] font-bold rounded-xl hover:bg-[#16a34a] hover:text-white transition-all duration-300"
                      style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
                    >
                      <Mail size={16} />
                      संपर्क करें
                    </a>
                  </div>
                </motion.div>

                {/* Share card */}
                <motion.div {...fadeUp(0.2)} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Share2 size={16} className="text-gray-500" />
                    <p className="text-sm font-bold text-[#111111]" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>शेयर करें</p>
                  </div>
                  <div className="flex gap-3">
                    {[
                      { label: "WhatsApp", bg: "bg-green-500", emoji: "💬" },
                      { label: "Facebook", bg: "bg-blue-600", emoji: "📘" },
                      { label: "Twitter", bg: "bg-sky-500", emoji: "🐦" },
                    ].map((s) => (
                      <button
                        key={s.label}
                        className={`flex-1 ${s.bg} text-white text-xs font-semibold py-2.5 rounded-xl hover:opacity-90 hover:scale-105 transition-all`}
                      >
                        {s.emoji}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Trust note */}
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

      {/* ─── HARIDWAR SECTION ─── */}
      <section className="py-20 bg-[#111111] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
        <div className="absolute right-0 bottom-0 text-[16rem] text-white/[0.03] font-bold select-none leading-none" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>हर</div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeUp()}>
            <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4">— तीर्थ महिमा —</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              धर्मनगरी <span className="text-gray-500">हरिद्वार</span> में दान का महत्व
            </h2>
            <div className="space-y-4 text-white/65 text-sm leading-relaxed" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              <p>मोक्षप्रदा पतित-पावनी माँ श्री गंगा जी की धरती पर किये गये दान-पुण्य का सर्वाधिक और अलौकिक लाभ मिलता है।</p>
              <p>पुराणों और शास्त्रों के अनुसार हरिद्वार पूजा-पाठ, दान-पुण्य के लिए <strong className="text-[#ffffff]">सबसे श्रेष्ठ तीर्थ-स्थान</strong> माना गया है।</p>
              <p>हरिद्वार को <strong className="text-[#ffffff]">"मोक्ष का द्वार"</strong>, <strong className="text-[#ffffff]">"देवताओं का प्रवेश द्वार"</strong> और <strong className="text-[#ffffff]">"आध्यात्मिक राजधानी"</strong> कहा जाता है।</p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["मोक्ष का द्वार", "गंगा की धरती", "कुम्भ-नगरी", "देवनगरी"].map((t) => (
                <div key={t} className="bg-white/5 border border-gray-200 rounded-xl py-3 px-2 text-center">
                  <p className="text-[#16a34a] text-sm font-semibold" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{t}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
