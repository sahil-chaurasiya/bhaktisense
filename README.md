# BhaktiSense — सनातन धर्म सेवा

A full production-ready spiritual website built with Next.js 14, Tailwind CSS, Framer Motion and Swiper.js.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Swiper.js** (hero + testimonial sliders)
- **Lucide React** (icons)

## Project Structure

```
bhaktisense/
├── app/
│   ├── globals.css        # Global styles + Tailwind
│   ├── layout.tsx         # Root layout + Google Fonts
│   └── page.tsx           # Main page assembly
├── components/
│   └── sections/
│       ├── Navbar.tsx
│       ├── HeroSlider.tsx
│       ├── JoinSection.tsx
│       ├── WelcomeSection.tsx
│       ├── DevotionalServices.tsx
│       ├── MissionSection.tsx
│       ├── TrustSection.tsx
│       ├── TempleActivities.tsx
│       ├── SevaSection.tsx
│       ├── EventsSection.tsx
│       ├── WhyChooseSection.tsx
│       ├── TestimonialSlider.tsx
│       ├── BlogSection.tsx
│       ├── DonationCTA.tsx
│       └── Footer.tsx
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Color Palette
| Token      | Value     |
|------------|-----------|
| Saffron    | `#FF7A00` |
| Gold       | `#C89B3C` |
| Background | `#FFF8EE` |
| Text       | `#2A1F14` |

## Sections (15 total)
1. Sticky Navbar with mobile menu
2. Hero Slider (4 slides, Swiper.js, fade effect)
3. Join Section (4 cards)
4. Welcome Section (2-col layout)
5. Devotional Services (6 cards)
6. Mission Section (3 features)
7. Trust/Organization Story
8. Temple Activities (4 image cards)
9. Seva Work (4 numbered cards)
10. Upcoming Events (horizontal scroll mobile)
11. Why Choose BhaktiSense (3 cols)
12. Testimonial Slider (auto-play)
13. Blog Section (3 articles)
14. Donation CTA (full-width)
15. Footer with newsletter
