"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "मुखपृष्ठ", href: "/" },
  { label: "परिचय", href: "/parichay" },
  { label: "पूजा", href: "/#services" },
  { label: "तीर्थयात्रा", href: "/sevayien/devbhumi-darshan" },
  { label: "उत्पाद", href: "/#blog" },
  { label: "सेवाएं", href: "/sevayien" },
  { label: "दान", href: "/daan" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className={`h-0.5 bg-gradient-to-r from-transparent via-[#16a34a] to-transparent transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`} />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg" style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>ॐ</span>
            </div>
            <div className="hidden sm:block">
              <p className={`font-bold text-lg leading-tight tracking-wide transition-colors ${scrolled ? "text-[#111]" : "text-white"}`} style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}>BhaktiSense</p>
              <p className={`text-xs tracking-wider transition-colors ${scrolled ? "text-gray-500" : "text-white/60"}`}>सनातन धर्म सेवा</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 group ${scrolled ? "text-gray-700 hover:text-[#111111]" : "text-white/90 hover:text-white"}`}
                  style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#16a34a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#16a34a] text-white text-sm font-semibold rounded-lg shadow-md hover:bg-[#15803d] hover:bg-[#15803d] hover:scale-105 transition-all duration-300"
              style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
            >
              हमसे जुड़े
            </a>
            <button
              className={`lg:hidden p-2 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 px-4 text-gray-700 hover:text-[#111111] hover:bg-green-50 rounded-lg transition-all font-medium"
                    style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  className="block text-center py-3 bg-[#16a34a] text-white font-semibold rounded-lg"
                  style={{fontFamily:"'Noto Sans Devanagari',sans-serif"}}
                >
                  हमसे जुड़े
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
