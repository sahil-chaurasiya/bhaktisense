"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import HeroSlider from "@/components/sections/HeroSlider";
import Footer from "@/components/sections/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
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
    shortDesc: "आठ प्रकार के पवित्र दान जो जीवन में शुभता और धर्म की प्राप्ति कराते हैं।",
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
    shortDesc: "भगवान शिव के प्रिय वाहन नंदी (बैल) का दान परम पुण्यदायी माना जाता है।",
    icon: "🐂",
    price: "₹ ३,३००",
    badge: "शिव विशेष",
    badgeColor: "bg-[#16a34a]",
    items: ["पाप-मुक्ति", "शिव कृपा", "समृद्धि", "मोक्ष"],
    available: true,
    image: "https://images.unsplash.com/photo-1544098485-2a2654c26f4d?w=400&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <main className="relative bg-[#f5f5f5]">
      <Navbar />
      <HeroSlider />

      {/* ─── DAAN SECTION ─── */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

          {/* Section Header */}
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-4 py-1.5 rounded-full border border-gray-300 tracking-widest uppercase mb-4">
              — पुण्य दान सेवाएं —
            </span>
            <h2
              className="text-4xl sm:text-5xl font-black text-[#111] leading-tight mb-3"
              style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
            >
              दान करें, पुण्य पाएं
            </h2>
            <p
              className="text-gray-500 text-base max-w-xl mx-auto"
              style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
            >
              सनातन धर्म में दान को परम पुण्य कार्य माना गया है — पाप-मुक्ति, समृद्धि और मोक्ष का मार्ग।
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {daanList.map((daan, i) => (
              <motion.div
                key={daan.slug}
                {...fadeUp(i * 0.08)}
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

                  {/* Badge */}
                  <span className={`absolute top-3 left-3 ${daan.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide`}
                    style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                    {daan.badge}
                  </span>

                  {/* Book Puja label */}
                  <span className="absolute bottom-3 left-3 bg-white/90 text-[#111] text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide uppercase">
                    BOOK PUJA
                  </span>

                  {/* Icon */}
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

                  {/* Tags */}
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

                  {/* Price row */}
                  <div className="flex items-center justify-between gap-2 border-t border-gray-100 pt-3 mb-3">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">मूल्य</p>
                      <p className="text-base font-black text-[#16a34a]" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{daan.price}</p>
                    </div>
                  </div>

                  {/* Participate Button */}
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

          {/* View All Link */}
          <motion.div {...fadeUp(0.3)} className="text-center mt-10">
            <a
              href="/daan"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#16a34a] text-[#16a34a] font-bold text-sm rounded-lg hover:bg-[#16a34a] hover:text-white transition-all duration-300 uppercase tracking-wider"
              style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
            >
              सभी दान सेवाएं देखें <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── TRUST STRIP ─── */}
      <section className="py-14 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { num: "३०M+", label: "भक्त", icon: "🙏" },
              { num: "४.५★", label: "रेटिंग", icon: "⭐" },
              { num: "३०+", label: "देश", icon: "🌍" },
              { num: "३M+", label: "सेवाएं", icon: "✨" },
            ].map((s) => (
              <motion.div key={s.label} {...fadeUp()}>
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-2xl font-black text-white mb-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{s.num}</div>
                <div className="text-gray-400 text-sm" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
