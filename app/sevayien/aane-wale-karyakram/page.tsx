"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Calendar, MapPin, Clock, Share2, Play } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay },
});

const upcomingEvents = [
  {
    title: "महाशिवरात्रि महायज्ञ",
    date: "मार्च २०२५",
    location: "हरिद्वार, उत्तराखंड",
    time: "प्रातः ४ बजे से रात्रि १२ बजे तक",
    type: "यज्ञ",
    icon: "🔥",
    color: "from-gray-900 to-red-600",
  },
  {
    title: "चैत्र नवरात्रि पूजन",
    date: "अप्रैल २०२५",
    location: "ऋषिकेश, उत्तराखंड",
    time: "प्रातः ६ बजे से दोपहर १२ बजे तक",
    type: "पूजन",
    icon: "🌸",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "गंगा दशहरा स्नान",
    date: "जून २०२५",
    location: "हरिद्वार घाट",
    time: "प्रातः ४ बजे से",
    type: "स्नान पर्व",
    icon: "🏞️",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "श्रावण माह अभिषेक",
    date: "जुलाई-अगस्त २०२५",
    location: "केदारनाथ",
    time: "प्रातः ५ बजे से",
    type: "अभिषेक",
    icon: "🕉️",
    color: "from-green-500 to-teal-600",
  },
  {
    title: "पितृपक्ष श्राद्ध कर्म",
    date: "सितंबर २०२५",
    location: "हरिद्वार, गंगा घाट",
    time: "प्रातः ७ बजे से दोपहर तक",
    type: "श्राद्ध",
    icon: "🙏",
    color: "from-[#16a34a] to-[#e55e00]",
  },
  {
    title: "दीपावली महालक्ष्मी पूजन",
    date: "अक्टूबर-नवंबर २०२५",
    location: "हरिद्वार",
    time: "सायंकाल ६ बजे से",
    type: "पूजन",
    icon: "🪔",
    color: "from-[#111] to-[#333]",
  },
];

const pastEvents = [
  { title: "कुंभ मेला २०२४", desc: "प्रयागराज में विशाल श्रद्धालु सम्मेलन", img: "/trust_image_1.webp" },
  { title: "जूना अखाड़ा शोभायात्रा", desc: "हरिद्वार में भव्य शोभायात्रा का आयोजन", img: "/trust_image_2.webp" },
];

export default function AaneWaleKaryakramPage() {
  return (
    <main className="bg-[#f5f5f5]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img
          src="/trust_image_1.webp"
          alt="कार्यक्रम"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/75 to-[#111111]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        <div className="absolute right-16 top-1/2 -translate-y-1/2 text-[18rem] text-white/[0.04] font-bold select-none leading-none pointer-events-none" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>ॐ</div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-20 pt-40 w-full">
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
              <a href="/" className="hover:text-[#111111] transition-colors" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>मुखपृष्ठ</a>
              <span>/</span>
              <span className="text-gray-500" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>सेवाएं</span>
              <span>/</span>
              <span className="text-gray-500" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>आने वाले कार्यक्रम</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              आने वाले<br />
              <span className="text-[#ffffff]">कार्यक्रम</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              धार्मिक आयोजनों में सम्मिलित हों और पुण्य लाभ अर्जित करें
            </p>
          </motion.div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-gray-200 rounded-lg px-5 py-2 mb-4">
              <Calendar size={14} className="text-gray-500" />
              <span className="text-[#16a34a] text-sm font-semibold" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>२०२५ के कार्यक्रम</span>
            </div>
            <h2 className="text-3xl font-bold text-[#111111]" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>आगामी धार्मिक कार्यक्रम</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((e, i) => (
              <motion.div key={e.title} {...fadeUp(i * 0.1)} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all group">
                <div className={`bg-gradient-to-r ${e.color} p-6 relative`}>
                  <div className="text-5xl mb-2">{e.icon}</div>
                  <span className="absolute top-4 right-4 text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-lg backdrop-blur-sm" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>{e.type}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#111111] text-xl mb-4 group-hover:text-[#111111] transition-colors" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>{e.title}</h3>
                  <div className="space-y-2 text-sm text-[#374151]/70">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-[#16a34a] shrink-0" />
                      <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>{e.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-[#16a34a] shrink-0" />
                      <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>{e.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-[#16a34a] shrink-0" />
                      <span style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>{e.location}</span>
                    </div>
                  </div>
                  <button className="mt-5 w-full py-2.5 bg-gradient-to-r from-[#16a34a]/10 to-[#16a34a]/10 border border-gray-200 text-[#16a34a] font-semibold rounded-xl hover:from-[#16a34a] hover:to-[#16a34a] hover:text-white hover:border-transparent transition-all text-sm" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                    पंजीकरण करें
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PAST EVENTS / VIDEO */}
      <section className="py-16 bg-gradient-to-b from-[#f5f5f5] to-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.h2 {...fadeUp(0)} className="text-3xl font-bold text-[#111111] text-center mb-10" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
            हमारे पिछले कार्यक्रम
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((e, i) => (
              <motion.div key={e.title} {...fadeUp(i * 0.15)} className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer">
                <img src={e.img} alt={e.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <Play size={24} className="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white font-bold text-xl" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>{e.title}</h3>
                  <p className="text-white/70 text-sm" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SHARE */}
      <section className="py-12 bg-[#f5f5f5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
          <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-4 flex-wrap">
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
