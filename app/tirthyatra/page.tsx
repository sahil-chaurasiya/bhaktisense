"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { ArrowRight, Clock, MapPin } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const yatras = [
  {
    slug: "dharmyatra",
    title: "धर्मयात्रा",
    subtitle: "सनातन धर्म को जीवन में उतारने की यात्रा",
    desc: "धर्मयात्रा धर्म को अपने में समाहित करने की यात्रा है। जूना अखाड़ा के साधु-संतों के सान्निध्य में चारधाम, हरिद्वार, ऋषिकेश और देवभूमि के पवित्र स्थलों की यात्रा।",
    duration: "समूह यात्रा",
    location: "हरिद्वार से शुरू",
    icon: "🕉️",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&auto=format&fit=crop",
    highlights: ["चारधाम दर्शन", "गंगा स्नान", "धर्म व्याख्यान", "सात्विक भोजन"],
  },
  {
    slug: "haridwar-darshan",
    title: "हरिद्वार दर्शन",
    subtitle: "विश्व की आध्यात्मिक राजधानी",
    desc: "हरिद्वार को मोक्ष का द्वार कहा जाता है। 5 दिन 4 रात की यह यात्रा हर की पौड़ी, मंसा देवी, चंडी देवी, नीलकंठ महादेव और गंगा आरती को समाहित करती है।",
    duration: "5 दिन • 4 रात",
    location: "Ex-हरिद्वार",
    icon: "🙏",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Haridwar_Har-ki-Pauri.jpg/1280px-Haridwar_Har-ki-Pauri.jpg",
    highlights: ["हर की पौड़ी", "माँ मनसा देवी", "माँ चंडी देवी", "गंगा आरती"],
  },
  {
    slug: "rishikesh-darshan",
    title: "ऋषिकेश दर्शन",
    subtitle: "योग की विश्व राजधानी",
    desc: "ऋषिकेश — जहाँ आध्यात्म और प्रकृति का संगम होता है। राम झूला, लक्ष्मण झूला, नीलकंठ महादेव, बीटल्स आश्रम और राफ्टिंग के साथ 6 दिन की अद्भुत यात्रा।",
    duration: "6 दिन • 5 रात",
    location: "Ex-हरिद्वार",
    icon: "🌿",
    image: "https://images.unsplash.com/photo-1544098485-2a2654c26f4d?w=600&auto=format&fit=crop",
    highlights: ["राम-लक्ष्मण झूला", "नीलकंठ महादेव", "बीटल्स आश्रम", "राफ्टिंग"],
  },
  {
    slug: "neelkanth-darshan",
    title: "नीलकंठ महादेव जी दर्शन",
    subtitle: "भगवान शिव का पावन धाम",
    desc: "समुद्र मंथन में विष पीने वाले भगवान नीलकंठ का दिव्य दर्शन। 2 दिन 2 रात की इस यात्रा में हरिद्वार और ऋषिकेश के पवित्र स्थलों के साथ नीलकंठ महादेव के दर्शन।",
    duration: "2 दिन • 2 रात",
    location: "Ex-हरिद्वार",
    icon: "⛩️",
    image: "https://images.unsplash.com/photo-1609766857491-7cd7e5aa2b12?w=600&auto=format&fit=crop",
    highlights: ["नीलकंठ मंदिर", "राम-लक्ष्मण झूला", "गंगा आरती", "मंसा-चंडी देवी"],
  },
  {
    slug: "maa-purnagiri-yatra",
    title: "माँ पूर्णागिरि यात्रा",
    subtitle: "शक्तिपीठ — माँ सती का नाभि स्थान",
    desc: "चम्पावत जिले में पूर्णा पर्वत पर स्थित माँ पूर्णागिरि शक्तिपीठ के दर्शन। 2 दिन 2 रात की यह यात्रा हरिद्वार से संपन्न होती है।",
    duration: "2 दिन • 2 रात",
    location: "Ex-हरिद्वार",
    icon: "🌺",
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&auto=format&fit=crop",
    highlights: ["पूर्णागिरि शक्तिपीठ", "गंगा स्नान", "माँ मनसा देवी", "गंगा आरती"],
  },
  {
    slug: "swanirdharit-darshan",
    title: "स्व-निर्धारित दर्शन",
    subtitle: "आपकी इच्छा, हमारी व्यवस्था",
    desc: "आप जहाँ दर्शन के लिये जाना चाहते हैं और जिस व्यवस्था के साथ यात्रा करना चाहते हैं — हम आपके लिये विशेष योजना बनाएंगे। वायु मार्ग या सड़क मार्ग से।",
    duration: "आप तय करें",
    location: "आपकी पसंद",
    icon: "🗺️",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&auto=format&fit=crop",
    highlights: ["कस्टम प्लानिंग", "वायु/सड़क मार्ग", "सम्पूर्ण व्यवस्था", "24/7 सहयोग"],
  },
];

const commonIncludes = [
  { icon: "🍽️", text: "शुद्ध सात्विक भोजन (ब्रेकफास्ट, लंच, डिनर)" },
  { icon: "🏨", text: "डीलक्स होटल में आवासीय सुविधा" },
  { icon: "🚗", text: "रेलवे/बस/एयरपोर्ट से पिकअप-ड्रॉप" },
  { icon: "🙏", text: "जूना अखाड़ा के साधुओं द्वारा धर्म व्याख्यान" },
];

export default function TirthyatraPage() {
  return (
    <main className="bg-[#f5f5f5]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1609766857491-7cd7e5aa2b12?w=1800&auto=format&fit=crop"
          alt="तीर्थयात्रा"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-20 pt-40 w-full">
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
              <a href="/" className="hover:text-white transition-colors" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>मुखपृष्ठ</a>
              <span>/</span>
              <span className="text-gray-400" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>तीर्थयात्रा</span>
            </div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-14 bg-[#16a34a]" />
              <span className="text-[#16a34a] text-xl">ॐ</span>
              <div className="h-px w-14 bg-[#16a34a]" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-4"
              style={{fontFamily:"'Noto Sans Devanagari',sans-serif", textShadow:"0 4px 30px rgba(0,0,0,0.6)"}}>
              तीर्थयात्रा
            </h1>
            <p className="text-[#16a34a] text-xl font-semibold mb-3" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              ।।धर्मो रक्षति रक्षितः।।
            </p>
            <p className="text-white/65 max-w-2xl text-base leading-relaxed" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              जूना अखाड़ा के मार्गदर्शन में देवभूमि के पवित्र धामों की यात्रा — सम्पूर्ण व्यवस्था के साथ।
            </p>
          </motion.div>
        </div>
      </section>

      {/* INCLUDES STRIP */}
      <section className="bg-[#111] py-8 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {commonIncludes.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <p className="text-white/60 text-xs leading-snug" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YATRA CARDS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-4 py-1.5 rounded-full border border-gray-200 tracking-widest uppercase mb-4">
              — हमारी यात्राएं —
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#111]" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              यात्रा चुनें
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              हर यात्रा में सम्पूर्ण व्यवस्था — भोजन, आवास, वाहन और धार्मिक मार्गदर्शन।
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {yatras.map((yatra, i) => (
              <motion.div
                key={yatra.slug}
                {...fadeUp(i * 0.08)}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={yatra.image}
                    alt={yatra.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute top-3 left-3 bg-gray-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-md" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                    {yatra.icon} {yatra.duration}
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/80 text-xs">
                    <MapPin size={11} className="text-[#16a34a]" />
                    <span style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{yatra.location}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-gray-400 text-[11px] font-semibold uppercase tracking-wide mb-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                    {yatra.subtitle}
                  </p>
                  <h3 className="text-[#111] text-lg font-bold mb-2 leading-snug" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                    {yatra.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                    {yatra.desc}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {yatra.highlights.map((h) => (
                      <span key={h} className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full border border-gray-200" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                        {h}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`/tirthyatra/${yatra.slug}`}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#16a34a] text-white text-xs font-bold rounded-lg hover:bg-[#15803d] transition-all duration-200 uppercase tracking-widest"
                    style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
                  >
                    विवरण देखें <ArrowRight size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-14 bg-[#111]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp()}>
            <p className="text-[#16a34a] text-sm font-bold tracking-widest uppercase mb-3">— जूना अखाड़ा —</p>
            <h2 className="text-3xl font-black text-white mb-3" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              आज ही बुकिंग करें
            </h2>
            <p className="text-white/55 mb-8 text-sm" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              अधिक जानकारी के लिये हमसे सम्पर्क करें।
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#16a34a] text-white font-bold rounded-lg hover:bg-[#15803d] transition-all"
              style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              संपर्क करें <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}