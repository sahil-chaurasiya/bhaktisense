"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Heart, Users, Megaphone, ShoppingBag, HandHeart, Send, Share2 } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay },
});

const directWays = [
  {
    num: "१",
    Icon: Users,
    title: "ट्रस्टी बनें",
    desc: "ट्रस्ट में ट्रस्टी बन के वैचारिक, आर्थिक एवं संचालिक तरीके से सनातन धर्म की सेवा करें।",
  },
  {
    num: "२",
    Icon: Heart,
    title: "दान करें",
    desc: "ट्रस्ट में दान कर के धर्म-कर्म के महान कार्यों में योगदान दें और पुण्य लाभ अर्जित करें।",
  },
  {
    num: "३",
    Icon: Megaphone,
    title: "प्रचार-प्रसार",
    desc: "ट्रस्ट का प्रचार-प्रसार करके, ज्यादा से ज्यादा लोगों को जोड़ें ताकि वो धर्म-कर्म में रुचि लें।",
  },
];

const indirectWays = [
  {
    num: "१",
    Icon: ShoppingBag,
    title: "उत्पाद खरीदें",
    desc: "ट्रस्ट के उत्पादों की खरीदारी करके अप्रत्यक्ष रूप से धर्म के कार्यों में सहयोग करें।",
  },
  {
    num: "२",
    Icon: HandHeart,
    title: "सेवाएं उपयोग करें",
    desc: "ट्रस्ट की सेवाओं को इस्तेमाल करके ट्रस्ट के उद्देश्यों की पूर्ति में भागीदार बनें।",
  },
  {
    num: "३",
    Icon: Heart,
    title: "उद्येश्य पूर्ति",
    desc: "आपके द्वारा सेवाओं और उत्पादों पर खर्च किया गया धन ट्रस्ट के उद्येश्यों को पूरा करने में लगेगा।",
  },
];

export default function TrustSevaPage() {
  return (
    <main className="bg-[#f5f5f5]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <img
          src="/trust_image_2.webp"
          alt="सनातन धर्म ट्रस्ट"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/97 via-[#111111]/80 to-[#111111]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        <div className="absolute right-16 top-1/2 -translate-y-1/2 text-[18rem] text-white/[0.04] font-bold select-none leading-none pointer-events-none" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>ॐ</div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-20 pt-40 w-full">
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
              <a href="/" className="hover:text-[#111111] transition-colors" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>मुखपृष्ठ</a>
              <span>/</span>
              <span className="text-gray-500" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>सेवाएं</span>
              <span>/</span>
              <span className="text-gray-500" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>ट्रस्ट से जुड़ें</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              सनातन धर्म व<br />
              <span className="text-[#ffffff]">अखाड़ों से जुड़ा ट्रस्ट</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              जूना अखाड़ा — सनातन धर्म की सबसे बड़ी एवं प्राचीन संस्था
            </p>
          </motion.div>
        </div>
      </section>

      {/* TRUST INFO */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 bg-green-50 border border-gray-200 rounded-lg px-5 py-2 mb-6">
                <span className="text-[#16a34a] text-sm font-semibold" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>उमा-महेश्वर सेवा ट्रस्ट</span>
              </div>
              <h2 className="text-3xl font-bold text-[#111111] mb-5" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                जूना अखाड़ा के बारे में
              </h2>
              <p className="text-[#374151]/80 leading-relaxed mb-4" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                जूना अखाड़ा सनातन धर्म की सबसे बड़ी एवं प्राचीन संस्था है, जिसको स्वयं आदि शंकराचार्य जगतगुरु
                (साक्षात भगवान शिव का रूप) ने धर्म की रक्षा के लिए स्थापित किया था।
              </p>
              <p className="text-[#374151]/80 leading-relaxed" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
                यह संस्था निरंतर धर्म-रक्षा के इस कार्य का विभिन्न तरीकों से पालन करती आ रही है।
                यह वेबसाइट धार्मिक ट्रस्ट <strong>"उमा-महेश्वर सेवा ट्रस्ट"</strong> हरिद्वार द्वारा संचालित है।
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.2)}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden h-48">
                  <img src="/trust_image_1.webp" alt="ट्रस्ट" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/50 to-transparent" />
                </div>
                <div className="relative rounded-2xl overflow-hidden h-48">
                  <img src="/trust_image_2.webp" alt="अखाड़ा" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/50 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW TO JOIN */}
      <section className="py-16 bg-gradient-to-b from-[#f5f5f5] to-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#111111] mb-3" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              हम से कैसे जुड़ें?
            </h2>
            <p className="text-[#374151]/60" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              आप इस कार्य से <strong>"प्रत्यक्ष"</strong> एवं <strong>"अप्रत्यक्ष"</strong> रूप से जुड़ सकते हैं
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Direct */}
            <motion.div {...fadeUp(0)}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br [#16a34a] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">प्र</span>
                </div>
                <h3 className="text-xl font-bold text-[#111111]" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>प्रत्यक्ष रूप</h3>
              </div>
              <div className="space-y-4">
                {directWays.map((w, i) => (
                  <motion.div key={w.title} {...fadeUp(i * 0.1)} className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-200 hover:border-gray-200 hover:shadow-md transition-all group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br [#16a34a] flex items-center justify-center shrink-0 shadow-md">
                      <w.Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[#16a34a] font-bold text-sm">{w.num}.</span>
                        <h4 className="font-bold text-[#111111] group-hover:text-[#111111] transition-colors" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>{w.title}</h4>
                      </div>
                      <p className="text-[#374151]/70 text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>{w.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Indirect */}
            <motion.div {...fadeUp(0.1)}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#16a34a] to-[#8B6914] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">अ</span>
                </div>
                <h3 className="text-xl font-bold text-[#111111]" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>अप्रत्यक्ष रूप</h3>
              </div>
              <div className="space-y-4">
                {indirectWays.map((w, i) => (
                  <motion.div key={w.title} {...fadeUp(i * 0.1)} className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-200 hover:border-gray-200 hover:shadow-md transition-all group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#16a34a] to-[#8B6914] flex items-center justify-center shrink-0 shadow-md">
                      <w.Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[#16a34a] font-bold text-sm">{w.num}.</span>
                        <h4 className="font-bold text-[#111111] group-hover:text-[#111111] transition-colors" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>{w.title}</h4>
                      </div>
                      <p className="text-[#374151]/70 text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>{w.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <motion.div {...fadeUp(0)} className="bg-gradient-to-r from-[#111111] to-[#222222] rounded-3xl p-10 text-center shadow-xl">
            <div className="text-5xl mb-4">🙏</div>
            <h3 className="text-2xl font-bold text-[#ffffff] mb-3" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>हम से जुड़ें</h3>
            <p className="text-white/70 mb-6" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              ट्रस्ट से जुड़कर सनातन धर्म की सेवा में अपना योगदान दें
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#16a34a] text-white font-bold rounded-lg shadow-lg hover:bg-[#15803d] hover:scale-105 transition-all" style={{ fontFamily: "'Noto Sans Devanagari',sans-serif" }}>
              <Send size={16} />
              संपर्क करें
            </button>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="mt-8 flex items-center justify-center gap-4 flex-wrap">
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
