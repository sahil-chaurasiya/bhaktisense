"use client";
import { useEffect, useRef } from "react";

// ✅ Static CSS imports (required for Next.js build)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    heading: "अनादि से अनंत तक",
    text: "आपका एक कदम सनातन धर्म के लिये मील का पत्थर बन सकता है।",
    buttons: [
      { label: "हमसे जुड़े", href: "#contact", primary: true },
      { label: "पूजा देखें", href: "#services", primary: false },
    ],
    overlay: "from-black/80 via-black/50 to-black/60",
    image: "https://images.unsplash.com/photo-1609766857491-7cd7e5aa2b12?w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    heading: "Online पूजा",
    text: "समय की कमी अब आस्था में रुकावट नहीं — कराएं अपनी पूजा Online, सीधा आपके नाम से।",
    buttons: [{ label: "पूर्ण सूची", href: "#services", primary: true }],
    overlay: "from-gray-800 via-gray-800 to-black/60",
    image: "https://images.unsplash.com/photo-1544098485-2a2654c26f4d?w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    heading: "हर हृदय में जागे भक्ति",
    text: "हर घर में गूँजे आरती — भक्ति का प्रकाश हर दिशा में फैले।",
    buttons: [{ label: "सनातन धर्म जानें", href: "/sevayien/trust-seva", primary: true }],
    overlay: "from-red-950/85 via-black/50 to-black/60",
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    heading: "।।धर्मो रक्षति रक्षितः।।",
    text: "सनातन संस्कृति की सेवा का संकल्प — हम साथ हैं, हर पल, हर पूजा में।",
    buttons: [{ label: "हमारे बारे में", href: "/parichay", primary: true }],
    overlay: "from-gray-800 via-gray-800 to-black/60",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1600&auto=format&fit=crop",
  },
];

export default function HeroSlider() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let instance: any = null;

    const initSwiper = async () => {
      // Dynamically import Swiper JS modules only (CSS is already statically imported)
      const { Swiper } = await import("swiper");
      const { Navigation, Pagination, Autoplay, EffectFade } = await import("swiper/modules");

      if (swiperRef.current && !(swiperRef.current as any).swiper) {
        instance = new Swiper(swiperRef.current, {
          modules: [Navigation, Pagination, Autoplay, EffectFade],
          effect: "fade",
          fadeEffect: { crossFade: true },
          loop: true,
          speed: 900,
          autoplay: { delay: 5000, disableOnInteraction: false },
          navigation: { nextEl: ".hero-next", prevEl: ".hero-prev" },
          pagination: { el: ".hero-pagination", clickable: true, type: "bullets" },
        });
      }
    };

    initSwiper();
    return () => { if (instance) instance.destroy(true, true); };
  }, []);

  return (
    <section id="home" className="relative w-full h-screen min-h-[640px]" style={{ maxHeight: "100dvh" }}>
      <div ref={swiperRef} className="swiper w-full h-full">
        <div className="swiper-wrapper">
          {slides.map((slide) => (
            <div key={slide.id} className="swiper-slide relative w-full h-full overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255,122,0,0.15) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />
              <div
                className="absolute right-8 top-1/2 -translate-y-1/2 font-black select-none pointer-events-none leading-none"
                style={{
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  fontSize: "clamp(12rem, 22vw, 22rem)",
                  color: "rgba(255,255,255,0.03)",
                }}
              >
                ॐ
              </div>
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-4 mb-7">
                      <div className="h-px w-14 bg-[#16a34a]" />
                      <span className="text-[#16a34a] text-xl" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>ॐ</span>
                      <div className="h-px w-14 bg-[#16a34a]" />
                    </div>
                    <h1
                      className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-5"
                      style={{
                        fontFamily: "'Noto Sans Devanagari', sans-serif",
                        textShadow: "0 2px 28px rgba(0,0,0,0.7)",
                      }}
                    >
                      {slide.heading}
                    </h1>
                    <p
                      className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-xl"
                      style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                    >
                      {slide.text}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {slide.buttons.map((btn) => (
                        <a
                          key={btn.label}
                          href={btn.href}
                          className={`px-8 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                            btn.primary
                              ? "bg-[#16a34a] text-white shadow-lg shadow-black/20 hover:bg-[#15803d] hover:bg-[#15803d] hover:scale-105"
                              : "border-2 border-white text-white backdrop-blur-sm hover:bg-white hover:text-[#111]"
                          }`}
                          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                        >
                          {btn.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="hero-prev absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20
            w-11 h-11 rounded-lg flex items-center justify-center
            bg-black/40 backdrop-blur-sm border border-white/20 text-white text-2xl
            hover:bg-[#16a34a] hover:border-transparent
            transition-all duration-300 focus:outline-none"
          aria-label="Prev"
        >
          ‹
        </button>
        <button
          className="hero-next absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20
            w-11 h-11 rounded-lg flex items-center justify-center
            bg-black/40 backdrop-blur-sm border border-white/20 text-white text-2xl
            hover:bg-[#16a34a] hover:border-transparent
            transition-all duration-300 focus:outline-none"
          aria-label="Next"
        >
          ›
        </button>
        <div className="hero-pagination absolute bottom-8 left-0 right-0 flex justify-center z-20" />
      </div>
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 float-anim hidden md:flex flex-col items-center gap-1 pointer-events-none">
        <span className="text-white/40 text-xs tracking-widest" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
          नीचे देखें
        </span>
        <div className="w-px h-7 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}