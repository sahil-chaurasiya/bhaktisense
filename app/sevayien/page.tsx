"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { ArrowRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay },
});

const sevas = [
  {
    num: "०१",
    title: "स्व-निर्धारित देवभूमि दर्शन",
    desc: "अपनी सुविधा अनुसार तीर्थ यात्रा की योजना बनाएं — वायु मार्ग या सड़क मार्ग से हरिद्वार, ऋषिकेश, केदारनाथ और अन्य पवित्र स्थलों की यात्रा।",
    icon: "🏔️",
    href: "/sevayien/devbhumi-darshan",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Haridwar_Har-ki-Pauri.jpg/1280px-Haridwar_Har-ki-Pauri.jpg",
    tag: "तीर्थ यात्रा",
  },
  {
    num: "०२",
    title: "कुंडली बनाना व विश्लेषण",
    desc: "पारंपरिक संसाधनों द्वारा कुंडली निर्माण एवं विश्लेषण। पंडित श्री पदमराज भट्ट जी द्वारा — शास्त्र में मास्टर डिग्री धारक।",
    icon: "🔮",
    href: "/sevayien/kundali-vishleshan",
    img: "/lagn_kundali.webp",
    tag: "ज्योतिष",
  },
  {
    num: "०३",
    title: "हस्त रेखा ज्योतिष",
    desc: "सामुद्रिक शास्त्र — हथेलियों की बनावट, उंगलियों के आकार और रेखाओं के आधार पर भविष्य का ज्ञान। मान-सम्मान और भाग्य का विश्लेषण।",
    icon: "🖐️",
    href: "/sevayien/hast-rekha",
    img: "/hast_lekha.webp",
    tag: "हस्त रेखा",
  },
  {
    num: "०४",
    title: "ज्योतिष",
    desc: "वैदिक ज्योतिष — नवग्रहों की स्थिति के आधार पर जन्म कुंडली, मुहूर्त, विवाह मिलान, करियर और स्वास्थ्य परामर्श।",
    icon: "🪐",
    href: "/sevayien/jyotish",
    img: "/jyotish.webp",
    tag: "वैदिक ज्योतिष",
  },
  {
    num: "०५",
    title: "आने वाले कार्यक्रम",
    desc: "महाशिवरात्रि महायज्ञ, नवरात्रि पूजन, गंगा दशहरा स्नान सहित वार्षिक धार्मिक कार्यक्रमों में सम्मिलित हों।",
    icon: "📅",
    href: "/sevayien/aane-wale-karyakram",
    img: "/trust_image_1.webp",
    tag: "कार्यक्रम",
  },
  {
    num: "०६",
    title: "सनातन धर्म व अखाड़ों से जुड़ा ट्रस्ट",
    desc: "जूना अखाड़े से जुड़े उमा-महेश्वर सेवा ट्रस्ट से प्रत्यक्ष या अप्रत्यक्ष रूप से जुड़ें — ट्रस्टी बनें, दान करें, या प्रचार करें।",
    icon: "🙏",
    href: "/sevayien/trust-seva",
    img: "/trust_image_2.webp",
    tag: "ट्रस्ट",
  },
];

export default function SevayienPage() {
  return (
    <main className="bg-[#f5f5f5]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#111111] to-[#222222]" />
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        {/* Big Om */}
        <div
          className="absolute right-10 top-1/2 -translate-y-1/2 text-[22rem] text-white/[0.04] font-bold select-none leading-none pointer-events-none"
          style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
        >
          ॐ
        </div>
        {/* Decorative line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-20 pt-44 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
              <a href="/" className="hover:text-[#111111] transition-colors" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                मुखपृष्ठ
              </a>
              <span>/</span>
              <span className="text-gray-500" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>सेवाएं</span>
            </div>

            <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              — उमा महेश्वर सेवा ट्रस्ट —
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              हमारी<br />
              <span className="text-[#ffffff]">सेवाएं</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              उमा महेश्वर सेवा ट्रस्ट आपको विभिन्न सेवाएं उपलब्ध करवाता है। किसी भी सेवा के लिए कार्ड पर क्लिक करें।
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEVA CARDS GRID */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sevas.map((seva, i) => (
              <motion.a
                key={seva.num}
                href={seva.href}
                {...fadeUp(i * 0.1)}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-2xl hover:border-gray-200 transition-all duration-500 cursor-pointer block"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={seva.img}
                    alt={seva.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/20 to-transparent" />

                  {/* Tag badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-xs font-semibold bg-gray-900 text-white px-3 py-1.5 rounded-lg backdrop-blur-sm"
                      style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
                    >
                      {seva.tag}
                    </span>
                  </div>

                  {/* Number */}
                  <div
                    className="absolute top-4 right-4 text-5xl font-black text-white/10 select-none leading-none"
                    style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
                  >
                    {seva.num}
                  </div>

                  {/* Icon bottom-left */}
                  <div className="absolute bottom-4 left-4 text-4xl">{seva.icon}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-[#111111] mb-3 group-hover:text-[#111111] transition-colors duration-300 leading-snug"
                    style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
                  >
                    {seva.title}
                  </h3>
                  <p
                    className="text-[#374151]/70 text-sm leading-relaxed mb-5"
                    style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
                  >
                    {seva.desc}
                  </p>

                  {/* CTA row */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span
                      className="text-sm font-semibold text-gray-600 group-hover:text-[#111111] transition-colors"
                      style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
                    >
                      अधिक जानें
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-800 transition-all duration-300">
                      <ArrowRight size={14} className="text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#16a34a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="py-16 bg-gradient-to-r from-[#111111] to-[#222222] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <motion.div {...fadeUp(0)}>
            <div className="text-5xl mb-4">🙏</div>
            <h2 className="text-3xl font-bold text-[#ffffff] mb-3" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              कोई अन्य सेवा चाहिए?
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              अगर इनके अलावा आप कोई और सेवा/प्रोडक्ट प्राप्त करना चाहते हैं तो हमसे संपर्क करें।
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#16a34a] text-white font-bold rounded-lg shadow-lg hover:bg-[#15803d] hover:scale-105 transition-all duration-300"
              style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}
            >
              संपर्क करें
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
