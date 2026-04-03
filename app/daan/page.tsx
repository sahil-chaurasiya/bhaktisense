"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { ArrowRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const daanList = [
  {
    slug: "das-mahadaan",
    title: "दस महादान",
    subtitle: "सर्वश्रेष्ठ दस महान दान",
    shortDesc: "सनातन धर्म में दस प्रकार के महादान जो मनुष्य को पाप-मुक्ति, समृद्धि एवं मोक्ष प्रदान करते हैं।",
    icon: "🪙",
    price: "₹ ३,३००",
    badge: "विशेष",
    badgeColor: "bg-black",
    items: ["गौ दान", "भूमि दान", "तिल दान", "स्वर्ण दान", "घी दान", "वस्त्र दान", "धन दान", "गुड़ दान", "चांदी दान", "नमक दान"],
    available: true,
    image: "https://images.unsplash.com/photo-1609766857491-7cd7e5aa2b12?w=400&auto=format&fit=crop",
  },
  {
    slug: "asht-mahadaan",
    title: "अष्ट महादान",
    subtitle: "आठ महान दान",
    shortDesc: "आठ प्रकार के पवित्र दान जो जीवन में शुभता और धर्म की प्राप्ति कराते हैं। एक साथ या अलग-अलग किए जा सकते हैं।",
    icon: "🌸",
    price: "₹ ३,३००",
    badge: "शुभ मुहूर्त",
    badgeColor: "bg-[#16a34a]",
    items: ["गाय दान", "तिल दान", "लोहा दान", "स्वर्ण दान", "कपास दान", "नमक दान", "सप्तधान्य दान", "भूमि दान"],
    available: true,
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&auto=format&fit=crop",
  },
  {
    slug: "gau-daan",
    title: "गौ (गाय) दान",
    subtitle: "सर्वश्रेष्ठ पुण्यदायी दान",
    shortDesc: "गौ दान को सभी दानों में सर्वश्रेष्ठ माना गया है — मोक्ष एवं पाप-मुक्ति का मार्ग।",
    icon: "🐄",
    price: "₹ ३,३००",
    badge: "सर्वश्रेष्ठ",
    badgeColor: "bg-black",
    items: ["पाप मुक्ति", "मोक्ष प्राप्ति", "सूर्यलोक", "ऋण मुक्ति"],
    available: true,
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&auto=format&fit=crop",
  },
  {
    slug: "bail-daan",
    title: "बैल दान",
    subtitle: "शिव को प्रिय दान",
    shortDesc: "भगवान शिव के प्रिय वाहन नंदी (बैल) का दान परम पुण्यदायी माना जाता है। पाप-मुक्ति का श्रेष्ठ उपाय।",
    icon: "🐂",
    price: "₹ ३,३००",
    badge: "शिव विशेष",
    badgeColor: "bg-[#16a34a]",
    items: ["पाप-मुक्ति", "शिव कृपा", "समृद्धि", "मोक्ष"],
    available: true,
    image: "https://images.unsplash.com/photo-1544098485-2a2654c26f4d?w=400&auto=format&fit=crop",
  },
];

export default function DaanPage() {
  return (
    <main className="bg-[#f5f5f5]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <img
          src="https://cms.patrika.com/wp-content/uploads/2018/10/28/daan01.jpg?w=1800&q=80&auto=format&fit=crop"
          alt="दान"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-20 pt-40 w-full">
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
              <a href="/" className="hover:text-[#111111] transition-colors" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>मुखपृष्ठ</a>
              <span>/</span>
              <span className="text-gray-500" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>दान</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-4" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              दान
            </h1>
            <p className="text-[#16a34a] text-xl font-semibold mb-3" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              सेवा ही सच्ची साधना है
            </p>
            <p className="text-white/65 max-w-2xl text-base leading-relaxed" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              सनातन धर्म में दान को परम पुण्य कार्य माना गया है — पाप-मुक्ति, समृद्धि और मोक्ष का मार्ग।
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-[#111] py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.p {...fadeUp()} className="text-white/70 leading-relaxed text-base" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
            सनातन/हिन्दू धर्म में दान को बहुत ही महत्वपूर्ण बताया गया है। यह सेवा{" "}
            <span className="text-[#16a34a] font-semibold">धर्मनगरी हरिद्वार</span> में उपलब्ध है।
          </motion.p>
        </div>
      </section>

      {/* DAAN CARDS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-4 py-1.5 rounded-full border border-gray-300 tracking-widest uppercase mb-4">
              — दान के प्रकार —
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#111]" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              पुण्य दान सेवाएं
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {daanList.map((daan, i) => (
              <motion.div
                key={daan.title}
                {...fadeUp(i * 0.1)}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Card Image */}
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    src={daan.image}
                    alt={daan.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <span className={`absolute top-3 left-3 ${daan.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide`}
                    style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                    {daan.badge}
                  </span>
                  <span className="absolute bottom-3 left-3 bg-white/90 text-[#111] text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide uppercase">
                    BOOK PUJA
                  </span>
                  <div className="absolute bottom-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center text-xl shadow-md">
                    {daan.icon}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[#16a34a] text-[11px] font-semibold mb-1 uppercase tracking-wide"
                    style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                    {daan.subtitle}
                  </p>
                  <h3
                    className="text-[#111] text-base font-bold mb-2 leading-snug group-hover:text-[#111111] transition-colors"
                    style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
                  >
                    {daan.title}
                  </h3>
                  <p
                    className="text-gray-500 text-xs leading-relaxed mb-4 flex-1"
                    style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
                  >
                    {daan.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {daan.items.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full font-medium border border-gray-200"
                        style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
                      >
                        {item}
                      </span>
                    ))}
                    {daan.items.length > 3 && (
                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full font-medium border border-gray-200">
                        +{daan.items.length - 3} और
                      </span>
                    )}
                  </div>

                  <div className="border-t border-gray-100 pt-3 mb-3 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">मूल्य</p>
                      <p className="text-base font-black text-[#16a34a]" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{daan.price}</p>
                    </div>
                  </div>

                  <a
                    href={`/daan/${daan.slug}`}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#111] text-white text-xs font-bold rounded-lg hover:bg-[#16a34a] transition-all duration-200 uppercase tracking-widest"
                    style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
                  >
                    भाग लें <ArrowRight size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HARIDWAR INFO STRIP */}
      <section className="py-16 bg-[#111] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeUp()}>
            <span className="text-3xl mb-4 block">🏔️</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              धर्मनगरी <span className="text-gray-500">हरिद्वार</span> में सेवा
            </h3>
            <p className="text-white/60 leading-relaxed mb-3" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              मोक्षप्रदा पतित-पावनी माँ श्री गंगा जी की पावन धरा पर किये गये दान-पुण्य का सर्वाधिक और अलौकिक लाभ मिलता है।
            </p>
            <p className="text-gray-500 text-sm" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              पुराणों के अनुसार हरिद्वार को <strong className="text-white">&quot;मोक्ष का द्वार&quot;</strong> कहा जाता है।
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
