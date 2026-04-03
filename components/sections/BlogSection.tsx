"use client";
import { motion } from "framer-motion";

const blogs = [
  {
    img: "https://images.unsplash.com/photo-1609766857491-7cd7e5aa2b12?w=600&auto=format&fit=crop",
    category: "सनातन धर्म",
    title: "वेदों का महत्व और आधुनिक जीवन में उनकी प्रासंगिकता",
    date: "१२ अप्रैल, २०२४",
    readTime: "५ मिनट",
  },
  {
    img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&auto=format&fit=crop",
    category: "पूजा विधि",
    title: "सत्यनारायण पूजा की पूर्ण विधि, सामग्री और महत्व",
    date: "०५ अप्रैल, २०२४",
    readTime: "७ मिनट",
  },
  {
    img: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&auto=format&fit=crop",
    category: "तीर्थयात्रा",
    title: "चारधाम यात्रा की संपूर्ण जानकारी — कब, कैसे और कहाँ",
    date: "२८ मार्च, २०२४",
    readTime: "१० मिनट",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6"
        >
          <div>
            <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">— लेख —</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#111111]" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              भक्ति की कलम से
            </h2>
          </div>
          <a
            href="#"
            className="text-[#16a34a] font-semibold border-b-2 border-gray-300 pb-0.5 hover:border-gray-300 hover:text-[#111111] transition-colors self-start sm:self-auto"
            style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
          >
            सभी लेख देखें →
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl hover:shadow-black/15 transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={b.img}
                  alt={b.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span
                  className="absolute top-4 left-4 text-xs font-bold px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#16a34a] rounded-full"
                  style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
                >
                  {b.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-[#111111]/50 mb-3">
                  <span style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{b.date}</span>
                  <span>·</span>
                  <span style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{b.readTime} पढ़ें</span>
                </div>
                <h3
                  className="text-lg font-bold text-[#111111] mb-4 group-hover:text-[#111111] transition-colors duration-300 leading-snug"
                  style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
                >
                  {b.title}
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#16a34a] group-hover:gap-4 transition-all duration-300"
                  style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
                >
                  और पढ़ें <span>→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
