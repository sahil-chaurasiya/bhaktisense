"use client";
import { motion } from "framer-motion";

export default function TrustSection() {
  return (
    <section id="trust" className="py-24 bg-[#f5f5f5] relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-green-50 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-gray-200 rounded-3xl" />
              <div className="absolute -inset-2 border border-gray-200 rounded-3xl" />
              <img
                src="https://images.unsplash.com/photo-1568454537842-d933259bb258?w=700&auto=format&fit=crop"
                alt="Sanatan Dharma"
                className="relative rounded-2xl w-full h-[500px] object-cover shadow-2xl"
              />
              {/* Overlay badge */}
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-[#16a34a] to-[#16a34a] rounded-2xl p-6 shadow-xl text-white text-center">
                <p className="text-3xl font-black" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>जूना</p>
                <p className="text-sm opacity-90" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>अखाड़ा</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="text-gray-500 text-sm font-semibold tracking-widest uppercase mb-3">— हमारी पहचान —</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#111111] mb-6 leading-tight" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              उमा महेश्वर<br />
              <span className="text-gray-500">सेवा ट्रस्ट</span>
            </h2>

            <div className="space-y-5 text-[#111111]/75 leading-relaxed" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>
              <p>
                उमा महेश्वर सेवा ट्रस्ट, <strong className="text-[#111111]">जूना अखाड़ा</strong> के मार्गदर्शन में सनातन धर्म के प्रचार-प्रसार हेतु कार्यरत एक पंजीकृत धर्मार्थ संस्था है।
              </p>
              <p>
                हमारा उद्देश्य है — वैदिक ज्ञान, परंपराएं और धार्मिक संस्कारों को आने वाली पीढ़ियों तक पहुँचाना, और भक्तों को सरल रूप से धर्म से जोड़ना।
              </p>
              <p>
                सनातन धर्म प्रचार हेतु हम देश और विदेश में कार्यरत हैं — मंदिर निर्माण, यज्ञ आयोजन, गोसेवा, शिक्षा और स्वास्थ्य सेवाओं के माध्यम से।
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { label: "मंदिर निर्माण", val: "२५+" },
                { label: "यज्ञ आयोजन", val: "५००+" },
                { label: "गोसेवा केंद्र", val: "१२" },
                { label: "राज्य", val: "१५" },
              ].map((s) => (
                <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm">
                  <p className="text-2xl font-bold text-[#16a34a]" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{s.val}</p>
                  <p className="text-xs text-[#111111]/60 mt-1" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
