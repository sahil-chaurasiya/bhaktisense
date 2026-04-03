"use client";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Share2, Youtube } from "lucide-react";

const events = [
  {
    date: "१५ अप्रैल",
    time: "प्रातः ६:०० बजे",
    location: "इंदौर, म.प्र.",
    title: "राम नवमी महा-पूजन",
    category: "पर्व",
  },
  {
    date: "२३ अप्रैल",
    time: "संध्या ७:०० बजे",
    location: "Online (YouTube Live)",
    title: "Online सत्संग एवं भजन",
    category: "Online",
  },
  {
    date: "०५ मई",
    time: "प्रातः ५:३० बजे",
    location: "उज्जैन, म.प्र.",
    title: "महाकाल दर्शन तीर्थयात्रा",
    category: "यात्रा",
  },
  {
    date: "१२ मई",
    time: "दोपहर २:०० बजे",
    location: "भोपाल",
    title: "वार्षिक यज्ञ महोत्सव",
    category: "यज्ञ",
  },
  {
    date: "२० जून",
    time: "प्रातः ७:०० बजे",
    location: "Online",
    title: "Online रुद्राभिषेक पूजन",
    category: "Online",
  },
];

const catColors: Record<string, string> = {
  "पर्व": "bg-green-100 text-green-700",
  "Online": "bg-blue-100 text-blue-700",
  "यात्रा": "bg-green-100 text-green-700",
  "यज्ञ": "bg-gray-800 text-gray-300",
};

export default function EventsSection() {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gray-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">— आगामी कार्यक्रम —</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111111]" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
            आगामी आयोजन
          </h2>
        </motion.div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible snap-x snap-mandatory">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group min-w-[280px] md:min-w-0 snap-start bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-black/15 transition-all duration-400 hover:-translate-y-2 flex-shrink-0"
            >
              {/* Top color bar */}
              <div className="h-1.5 bg-[#16a34a]" />

              <div className="p-6">
                {/* Category + Date row */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${catColors[e.category] || "bg-gray-100 text-gray-600"}`}
                    style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                    {e.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[#16a34a]">
                    <Calendar size={15} />
                    <span className="text-sm font-semibold" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{e.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#111111] mb-4" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                  {e.title}
                </h3>

                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-2 text-[#111111]/60 text-sm">
                    <Clock size={14} className="text-gray-500" />
                    <span style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{e.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#111111]/60 text-sm">
                    <MapPin size={14} className="text-gray-500" />
                    <span style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{e.location}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <button className="flex-1 py-2 text-center text-sm font-semibold text-white bg-[#16a34a] rounded-full hover:opacity-90 transition-opacity"
                    style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
                    पंजीकरण
                  </button>
                  <button className="p-2 rounded-full border border-gray-200 text-[#16a34a] hover:bg-[#16a34a] hover:text-white transition-all">
                    <Share2 size={15} />
                  </button>
                  <button className="p-2 rounded-full border border-red-200 text-red-500 hover:bg-red-500 hover:text-white transition-all">
                    <Youtube size={15} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
