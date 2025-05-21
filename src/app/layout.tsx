import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Panariello | Falegnameria Artigianale dal 1960",
  description: "Realizziamo mobili su misura, cucine, armadi e complementi d'arredo con materiali di alta qualità e lavorazione artigianale dal 1960.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-white`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
        <Script id="aos-init">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                mirror: false
              });
            });
          `}
        </Script>
      </body>
    </html>
  );
}
