"use client";
import { Facebook, Instagram, Youtube, Twitter, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "मुखपृष्ठ",    href: "/" },
  { label: "परिचय",       href: "/parichay" },
  { label: "पूजा सेवाएं", href: "/#services" },
  { label: "तीर्थयात्रा",  href: "/sevayien/devbhumi-darshan" },
  { label: "आयोजन",       href: "/sevayien/aane-wale-karyakram" },
  { label: "सेवाएं",      href: "/sevayien" },
  { label: "दान करें",    href: "/daan" },
];

const sevaLinks = [
  { label: "देवभूमि दर्शन",  href: "/sevayien/devbhumi-darshan" },
  { label: "कुंडली विश्लेषण", href: "/sevayien/kundali-vishleshan" },
  { label: "हस्त रेखा",      href: "/sevayien/hast-rekha" },
  { label: "ज्योतिष",        href: "/sevayien/jyotish" },
  { label: "कार्यक्रम",       href: "/sevayien/aane-wale-karyakram" },
  { label: "ट्रस्ट से जुड़ें", href: "/sevayien/trust-seva" },
];

const socials = [
  { Icon: Facebook,  href: "#", hover: "hover:bg-blue-600" },
  { Icon: Instagram, href: "#", hover: "hover:bg-pink-600" },
  { Icon: Youtube,   href: "#", hover: "hover:bg-red-600"  },
  { Icon: Twitter,   href: "#", hover: "hover:bg-sky-500"  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-green-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="w-12 h-12 rounded-full bg-[#16a34a] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>ॐ</span>
              </div>
              <div>
                <p className="text-white font-bold text-xl" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>BhaktiSense</p>
                <p className="text-gray-500 text-xs tracking-wide">सनातन धर्म सेवा</p>
              </div>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-7" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
              उमा महेश्वर सेवा ट्रस्ट — जूना अखाड़ा की छत्रछाया में सनातन धर्म की अनवरत सेवा।
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, hover }) => (
                <a key={hover} href={href}
                  className={`w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center ${hover} hover:border-transparent hover:scale-110 transition-all duration-300`}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-gray-400 font-bold text-xs tracking-[0.2em] uppercase mb-6">त्वरित लिंक</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#111111] transition-colors duration-200 group"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                    <span className="block h-px w-4 bg-gray-700 group-hover:w-6 group-hover:bg-[#16a34a] transition-all duration-300" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Seva links */}
          <div>
            <h4 className="text-gray-400 font-bold text-xs tracking-[0.2em] uppercase mb-6">हमारी सेवाएं</h4>
            <ul className="space-y-3">
              {sevaLinks.map((s) => (
                <li key={s.href}>
                  <a href={s.href}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#111111] transition-colors duration-200 group"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                    <span className="block h-px w-4 bg-gray-700 group-hover:w-6 group-hover:bg-[#16a34a] transition-all duration-300" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-400 font-bold text-xs tracking-[0.2em] uppercase mb-6">संपर्क करें</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[#16a34a] mt-0.5 shrink-0" />
                <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                  उमा महेश्वर सेवा ट्रस्ट,<br />हरिद्वार, उत्तराखंड
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-[#16a34a] shrink-0" />
                <a href="tel:+911234567890" className="text-gray-500 hover:text-white text-sm transition-colors">+91 12345 67890</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-[#16a34a] shrink-0" />
                <a href="mailto:seva@bhaktisense.in" className="text-gray-500 hover:text-white text-sm transition-colors">seva@bhaktisense.in</a>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-3" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>अपडेट पाने के लिए जुड़ें</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="ईमेल दर्ज करें"
                className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#16a34a] transition-colors"
              />
              <button className="shrink-0 px-4 py-2.5 bg-[#16a34a] rounded-lg text-white text-sm font-semibold hover:bg-[#15803d] transition-all"
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                जुड़ें
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs text-center sm:text-left" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
            © २०२४ BhaktiSense — उमा महेश्वर सेवा ट्रस्ट। सर्वाधिकार सुरक्षित।
          </p>
          <div className="flex items-center gap-3 text-[#16a34a]/70">
            <span className="text-sm" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>जय महादेव</span>
            <span className="text-lg" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>ॐ</span>
            <span className="text-sm" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>हर हर महादेव</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
