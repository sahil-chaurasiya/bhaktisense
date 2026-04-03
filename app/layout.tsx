import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BhaktiSense – सनातन धर्म की सेवा में",
  description: "उमा महेश्वर सेवा ट्रस्ट | Online पूजा | तीर्थयात्रा | सनातन धर्म",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;500;600;700;800&family=Mukta:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
