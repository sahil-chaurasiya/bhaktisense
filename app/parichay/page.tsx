"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Shield, Heart, Star, Users, Globe, BookOpen, Award } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
});

const stats = [
  { val: "१५+", label: "वर्षों की सेवा" },
  { val: "१०,०००+", label: "भक्त परिवार" },
  { val: "२५+", label: "मंदिर निर्माण" },
  { val: "५००+", label: "यज्ञ आयोजन" },
  { val: "५०+", label: "तीर्थ स्थान" },
  { val: "१५", label: "राज्यों में सक्रिय" },
];

const pillars = [
  {
    Icon: Shield,
    title: "धर्म रक्षा",
    desc: "सनातन धर्म की परंपराओं और मूल्यों की रक्षा करना हमारा प्रथम कर्तव्य है। जूना अखाड़े की गौरवशाली विरासत को आगे बढ़ाते हुए हम धर्म की ध्वजा को सदैव ऊँचा रखते हैं।",
  },
  {
    Icon: Globe,
    title: "धर्म प्रचार",
    desc: "आधुनिक तकनीक के माध्यम से वैदिक ज्ञान को विश्व के कोने-कोने तक पहुँचाना। Online पूजा, Digital सत्संग और सोशल मीडिया के ज़रिए धर्म का प्रसार।",
  },
  {
    Icon: Heart,
    title: "समाज सेवा",
    desc: "भोजन सेवा, शिक्षा, स्वास्थ्य और रोजगार के माध्यम से समाज के हर वर्ग की निःस्वार्थ सेवा — क्योंकि मानव सेवा ही माधव सेवा है।",
  },
  {
    Icon: BookOpen,
    title: "वेद प्रचार",
    desc: "वेदों, उपनिषदों और पुराणों के ज्ञान को सरल हिंदी में प्रस्तुत करना, ताकि आने वाली पीढ़ियाँ अपनी जड़ों से जुड़ी रह सकें।",
  },
  {
    Icon: Users,
    title: "संघ निर्माण",
    desc: "सनातन समाज को एकजुट करना — एक विशाल भक्त परिवार का निर्माण, जो मिलकर धर्म की रक्षा और प्रचार में सहयोग करे।",
  },
  {
    Icon: Award,
    title: "गुणवत्ता सेवा",
    desc: "पारदर्शिता, ईमानदारी और उच्च गुणवत्ता — ये हमारे कार्य की पहचान हैं। हर पूजा, हर सेवा में हम श्रेष्ठता का पालन करते हैं।",
  },
];

export default function ParichayPage() {
  return (
    <main className="bg-[#f5f5f5]">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* BG — high-res temple/Kumbh image */}
        <img
          src="https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?w=1800"
          alt="सनातन धर्म"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Multi-layer gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/92 via-[#111111]/75 to-[#111111]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent" />

        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-20 pt-40 w-full">
          <motion.div {...fadeUp(0)}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
              <a href="/" className="hover:text-white transition-colors" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>मुखपृष्ठ</a>
              <span>/</span>
              <span className="text-gray-500" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>परिचय</span>
            </div>

            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-14 bg-[#16a34a]" />
              <span className="text-[#16a34a] text-xl">ॐ</span>
              <div className="h-px w-14 bg-[#16a34a]" />
            </div>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-6"
              style={{ fontFamily: "'Noto Sans Devanagari',sans-serif", textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
            >
              परिचय
            </h1>
            <p
              className="text-xl text-[#ffffff] font-semibold mb-3"
              style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
            >
              उमा महेश्वर सेवा ट्रस्ट
            </p>
            <p
              className="text-white/70 max-w-2xl text-lg leading-relaxed"
              style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
            >
              जूना अखाड़ा की छत्रछाया में — सनातन धर्म रक्षा एवं प्रचार-प्रसार हेतु समर्पित
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-[#111111] py-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp(i * 0.07)}
                className="text-center group"
              >
                <p
                  className="text-2xl sm:text-3xl font-black text-[#16a34a] group-hover:text-[#ffffff] transition-colors"
                  style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
                >
                  {s.val}
                </p>
                <p
                  className="text-white/50 text-xs mt-1"
                  style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
                >
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 1: JUNA AKHADA ─── */}
      <section className="py-24 bg-[#f5f5f5] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#16a34a]/5 blur-3xl pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left – Image composition */}
            <motion.div {...fadeLeft()} className="relative">
              {/* Main large image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/15">
                <img
                  src="/aboutimg1.png"
                  alt="भगवान विष्णु"
                  className="w-full h-[520px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/50 via-transparent to-transparent" />
              </div>

              {/* Floating badge bottom-left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-[#16a34a] rounded-2xl px-6 py-4 shadow-xl text-white"
              >
                <p className="text-2xl font-black" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>जूना</p>
                <p className="text-sm opacity-90" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>अखाड़ा</p>
              </motion.div>

              {/* Decorative corner frames */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-gray-300 rounded-tr-3xl opacity-40" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-gray-300 rounded-br-3xl opacity-20" />
            </motion.div>

            {/* Right – Text */}
            <motion.div {...fadeRight()}>
              <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">— जूना अखाड़ा —</p>
              <h2
                className="text-4xl sm:text-5xl font-bold text-[#111111] mb-6 leading-tight"
                style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
              >
                सनातन धर्म की{" "}
                <span className="text-gray-500">सबसे प्राचीन संस्था</span>
              </h2>

              <div
                className="space-y-5 text-[#111111]/75 leading-relaxed text-base"
                style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
              >
                <p>
                  जूना अखाड़ा सनातन धर्म की सबसे बड़ी एवं प्राचीन संस्था है, जिसको स्वयं{" "}
                  <strong className="text-[#111111]">आदि शंकराचार्य जगतगुरु</strong> (साक्षात भगवान शिव का रूप) ने धर्म की रक्षा के लिए स्थापित किया था।
                </p>
                <p>
                  यह संस्था निरंतर विभिन्न तरीकों से धर्म रक्षा के कार्य का पालन करती आ रही है। कुंभ और महाकुंभ में जूना अखाड़े का दिव्य स्नान हिंदू आस्था का महापर्व बन जाता है।
                </p>
                <p>
                  यह वेबसाइट धार्मिक ट्रस्ट{" "}
                  <strong className="text-gray-500">"उमा महेश्वर सेवा ट्रस्ट"</strong>, हरिद्वार द्वारा संचालित है।
                </p>
              </div>

              {/* Quote block */}
              <div className="mt-8 pl-5 border-l-4 border-gray-300 bg-green-50 rounded-r-xl py-4 pr-4">
                <p
                  className="text-[#111111] font-semibold italic text-lg"
                  style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
                >
                  "धर्मो रक्षति रक्षितः"
                </p>
                <p className="text-[#111111]/60 text-sm mt-1" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                  — धर्म उनकी रक्षा करता है जो उसकी रक्षा करते हैं
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: UMA MAHESHWAR TRUST – dark bg ─── */}
      <section className="py-24 bg-[#111111] relative overflow-hidden">
        {/* BG Om */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[22rem] text-white/[0.03] font-bold select-none leading-none pointer-events-none"
          style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
        >
          ॐ
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left – text */}
            <motion.div {...fadeLeft()}>
              <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">— हमारी स्थापना —</p>
              <h2
                className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
              >
                उमा महेश्वर{" "}
                <span className="text-gray-500">सेवा ट्रस्ट</span>
              </h2>

              <div
                className="space-y-5 text-white/70 leading-relaxed"
                style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
              >
                <p>
                  जूना अखाड़े के कुछ साधु-संतों ने इस आधुनिक युग में अखाड़े के उद्देश्यों को आधुनिकीकरण के सहयोग से पूरा करने के लिए,{" "}
                  <strong className="text-[#ffffff]">श्री महंत कोठारी मनोहर पुरी जी जूना अखाड़ा, हरिद्वार</strong> के नेतृत्व में इस ट्रस्ट की स्थापना की।
                </p>
                <p>
                  विश्व में नर-नारी का सबसे बड़ा सर्वमान्य शक्ति स्वरूप{" "}
                  <strong className="text-[#ffffff]">उमा-महेश्वर</strong> के नाम से स्थापित यह ट्रस्ट वर्षों से धर्म रक्षा एवं धर्म प्रचार-प्रसार के कार्य में निरंतर कार्यरत है।
                </p>
                <p>
                  इसका एकमात्र लक्ष्य है —{" "}
                  <strong className="text-gray-500">सनातन धर्म रक्षा एवं प्रचार-प्रसार</strong>। उमा महेश्वर सेवा ट्रस्ट का उद्देश्य अधिक से अधिक हिंदू एवं अन्य धर्मों के लोगों को सनातन धर्म से जोड़े रखना है।
                </p>
              </div>

              {/* Objectives list */}
              <div className="mt-8 space-y-3">
                {[
                  "वर्षों से धर्म प्रचार-प्रसार के कार्य में निरंतर कार्यरत",
                  "सनातन धर्म रक्षा एवं प्रचार-प्रसार एकमात्र लक्ष्य",
                  "अधिक से अधिक लोगों को सनातन धर्म से जोड़ना",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-green-50 border border-gray-200 flex items-center justify-center text-[#16a34a] text-xs flex-shrink-0">✓</span>
                    <p className="text-white/65 text-sm" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right – Image collage */}
            <motion.div {...fadeRight()} className="relative">
              {/* Large image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/aboutimg3.jpg"
                  alt="महादेव और मंदिर"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent" />
                {/* Text overlay */}
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-bold text-xl" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                    हर हर महादेव
                  </p>
                  <p className="text-[#16a34a] text-sm" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                    जय महाकाल
                  </p>
                </div>
              </div>

              {/* Floating sadhus thumbnail */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-4 w-36 h-36 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200"
              >
                <img src="/aboutimg2.jpg" alt="साधु-संत" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <p
                  className="absolute bottom-2 left-2 text-white text-xs font-bold"
                  style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
                >
                  जूना अखाड़ा
                </p>
              </motion.div>

              {/* Gold frame */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-gray-300 rounded-bl-3xl opacity-40" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: 6 PILLARS ─── */}
      <section className="py-24 bg-[#f5f5f5] relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#16a34a]/5 blur-3xl opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">— हमारे उद्देश्य —</p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#111111]"
              style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
            >
              छः मुख्य स्तंभ
            </h2>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#16a34a]" />
              <span className="text-[#16a34a] text-xl">✦</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#16a34a]" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp(i * 0.1)}
                whileHover={{ y: -8 }}
                className="group bg-white border border-gray-200 rounded-2xl p-7 shadow-lg hover:shadow-2xl hover:shadow-black/15 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#16a34a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#16a34a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-[#16a34a] flex items-center justify-center mb-5 shadow-lg shadow-black/15 group-hover:scale-110 transition-transform duration-300">
                    <p.Icon className="text-white" size={26} />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#111111] mb-3 group-hover:text-[#111111] transition-colors"
                    style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-[#111111]/65 text-sm leading-relaxed"
                    style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
                  >
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WHY BHAKTISENSE – full width dark ─── */}
      <section className="py-24 bg-[#111111] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">— हमारी विशेषता —</p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white"
              style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
            >
              क्यों चुनें <span className="text-gray-500">BhaktiSense?</span>
            </h2>
            <p
              className="text-white/55 mt-4 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
            >
              BhaktiSense सिर्फ एक वेबसाइट नहीं, बल्कि एक आध्यात्मिक अनुभव है — जहाँ आस्था और आधुनिकता का संगम होता है।
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌍",
                title: "विश्व-भर में गूँजता है हमारा विश्वास",
                desc: "यहाँ भक्ति को हम आधुनिक सोच और सहज भाषा के साथ जोड़ते हैं ताकि हर व्यक्ति ईश्वर से जुड़ सके। भारत से लेकर विदेशों में बसे हिंदुओं तक हमारी पहुँच है।",
              },
              {
                icon: "🤝",
                title: "हमारा विश्वास",
                desc: "हम मानते हैं कि भरोसा, ईमानदारी और गुणवत्ता ही हर रिश्ते की नींव है। ग्राहकों की संतुष्टि और पारदर्शिता हमारे काम की पहचान है।",
              },
              {
                icon: "🙏",
                title: "आओ मिलकर करें भक्ति यात्रा",
                desc: "BhaktiSense के संग भक्ति की इस सुंदर यात्रा में आपका पहला कदम शुभ हो। हम हर कदम पर आपके साथ हैं — Online पूजा से लेकर तीर्थयात्रा तक।",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp(i * 0.12)}
                whileHover={{ y: -6 }}
                className="group bg-white/5 border border-gray-200 rounded-2xl p-8 hover:border-gray-200 transition-all duration-400 relative overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#16a34a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="text-4xl mb-5">{card.icon}</div>
                <h3
                  className="text-xl font-bold text-white mb-4 group-hover:text-[#ffffff] transition-colors"
                  style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-white/60 text-sm leading-relaxed"
                  style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
                >
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: IMAGE GALLERY STRIP ─── */}
      <section className="py-20 bg-gradient-to-b from-[#f5f5f5] to-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">— झलकियाँ —</p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#111111]"
              style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
            >
              हमारी यात्रा की तस्वीरें
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
            {[
              { src: "/aboutimg3.jpg", caption: "जूना अखाड़ा — साधु-संत" },
              { src: "/aboutimg2.jpg", caption: "भगवान विष्णु — अनंत रूप" },
              { src: "/aboutimg1.png", caption: "महादेव एवं पवित्र धाम" },
            ].map((img, i) => (
              <motion.div
                key={img.src}
                {...fadeUp(i * 0.12)}
                whileHover={{ y: -8 }}
                className="group flex flex-col rounded-2xl overflow-hidden shadow-xl cursor-pointer border border-gray-200"
              >
                {/* Image container — no fixed height, image shows fully */}
                <div className="relative bg-[#111111] w-full overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 z-10 bg-[#16a34a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-auto block group-hover:scale-105 transition-transform duration-700 origin-center"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#111111]/60 to-transparent" />
                </div>
                {/* Caption bar */}
                <div className="bg-[#111111] px-5 py-3.5 flex items-center gap-3">
                  <span className="text-[#16a34a] text-base">✦</span>
                  <p
                    className="text-white/85 font-semibold text-sm"
                    style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
                  >
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#16a34a]/10 via-transparent to-[#16a34a]/10" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div {...fadeUp()}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-[#16a34a]/40" />
              <span className="text-[#16a34a] text-2xl">ॐ</span>
              <div className="h-px w-16 bg-[#16a34a]/40" />
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
            >
              आज ही जुड़ें — भक्ति परिवार से
            </h2>
            <p
              className="text-white/60 mb-10 leading-relaxed"
              style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
            >
              सनातन धर्म की सेवा में अपना योगदान दें। पूजा, दान, सेवा — हर कदम पुण्य है।
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#services"
                className="px-8 py-3.5 bg-[#16a34a] text-white font-bold rounded-lg shadow-xl shadow-black/20 hover:bg-[#15803d] hover:scale-105 transition-all"
                style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
              >
                🙏 पूजा बुक करें
              </a>
              <a
                href="/#donate"
                className="px-8 py-3.5 border-2 border-gray-300 text-[#16a34a] font-bold rounded-lg hover:bg-[#16a34a] hover:text-white transition-all"
                style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
              >
                दान करें
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}