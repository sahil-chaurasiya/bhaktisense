"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// ✅ Static CSS imports (required for Next.js build)
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "रमेश शर्मा",
    city: "मुंबई",
    avatar: "R",
    color: "from-gray-900 to-gray-900
    text: "BhaktiSense के माध्यम से मैंने Online रुद्राभिषेक करवाया। Live दर्शन मिले, पूजा की Video भी मिली। बहुत ही श्रद्धापूर्ण अनुभव रहा।",
    rating: 5,
  },
  {
    name: "प्रिया पाटिल",
    city: "पुणे",
    avatar: "P",
    color: "from-red-500 to-gray-900",
    text: "चारधाम यात्रा BhaktiSense के साथ अत्यंत सुखद रही। हर व्यवस्था बेहतरीन थी। पंडित जी का मार्गदर्शन अद्भुत था।",
    rating: 5,
  },
  {
    name: "सुरेश गुप्ता",
    city: "दिल्ली",
    avatar: "S",
    color: "from-gray-800 to-gray-900
    text: "पूजन सामग्री की गुणवत्ता अत्युत्तम है। समय पर डिलीवरी, शुद्ध सामग्री। उमा महेश्वर ट्रस्ट पर पूर्ण विश्वास है।",
    rating: 5,
  },
  {
    name: "अनीता देवी",
    city: "जयपुर",
    avatar: "A",
    color: "from-gray-800 to-gray-900
    text: "सत्यनारायण पूजा Online करवाई। पंडित जी ने विधिवत पूजन कराया। मेरे परिवार को घर बैठे प्रसाद भी मिला।",
    rating: 5,
  },
  {
    name: "विजय तिवारी",
    city: "वाराणसी",
    avatar: "V",
    color: "from-gray-900 to-red-600",
    text: "बनारस से होने के बाद भी BhaktiSense की Online पूजा सेवा का उपयोग करता हूँ। विधि-विधान में कोई कमी नहीं।",
    rating: 5,
  },
];

export default function TestimonialSlider() {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const init = async () => {
      // Dynamically import Swiper JS modules only (CSS is already statically imported)
      const { Swiper } = await import("swiper");
      const { Pagination, Autoplay } = await import("swiper/modules");

      if (swiperRef.current && !swiperRef.current.swiper) {
        new Swiper(swiperRef.current, {
          modules: [Pagination, Autoplay],
          slidesPerView: 1,
          spaceBetween: 24,
          loop: true,
          autoplay: { delay: 4000, disableOnInteraction: false },
          pagination: { el: ".testi-pagination", clickable: true },
          breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          },
        });
      }
    };
    init();
  }, []);

  return (
    <section className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />
      <div className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">— भक्तों की आवाज़ —</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
            श्रद्धालुओं के अनुभव
          </h2>
        </motion.div>
        <div ref={swiperRef} className="swiper overflow-hidden">
          <div className="swiper-wrapper pb-12">
            {testimonials.map((t, i) => (
              <div key={i} className="swiper-slide">
                <div className="bg-white/5 border border-gray-200 rounded-2xl p-7 h-full relative group hover:border-gray-200 transition-all duration-300">
                  <div className="absolute top-5 right-6 text-6xl text-[#16a34a]/10 font-serif select-none">"</div>
                  <div className="flex gap-1 mb-4">
                    {Array(t.rating).fill(0).map((_, si) => (
                      <span key={si} className="text-[#16a34a] text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-white/75 leading-relaxed mb-6 text-sm relative z-10" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                    <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-white font-semibold" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{t.name}</p>
                      <p className="text-[#16a34a]/70 text-xs" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{t.city}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testi-pagination flex justify-center gap-2 mt-4" />
        </div>
      </div>
    </section>
  );
}