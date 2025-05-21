"use client";

import Link from "next/link";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className={`relative ${isMobile ? 'h-[60vh]' : 'h-[80vh]'} flex items-center`}>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute w-full h-full object-cover brightness-[0.65]"
          >
            <source src="/images/videotagliolegno.mp4" type="video/mp4" />
            {/* Fallback se il video non è supportato */}
            Il tuo browser non supporta il tag video.
          </video>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold mb-4`}>
              Artigianato <span className="text-[#20513c]">di Qualità</span>
            </h1>
            <p className={`${isMobile ? 'text-base' : 'text-lg md:text-xl'} mb-8`}>
              Realizziamo mobili su misura, cucine e arredamenti con cura artigianale e design personalizzato dal 1960.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/progetti" 
                className="bg-[#20513c] hover:bg-[#0d372a] text-white px-6 py-3 rounded-md text-center transition duration-300 inline-block"
              >
                Scopri i Nostri Progetti
              </Link>
              <Link 
                href="/contatti" 
                className="bg-transparent hover:bg-white/10 border border-white text-white px-6 py-3 rounded-md text-center transition duration-300 inline-block"
              >
                Contattaci
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Chi Siamo Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image 
                src="/about-preview.jpg" 
                alt="Il nostro laboratorio" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-[#20513c]">Chi Siamo</h2>
              <p className="text-gray-700 mb-6">
                Da oltre 30 anni, la nostra falegnameria artigianale trasforma il legno in opere d'arte funzionali. 
                Ogni creazione nasce dall'unione tra tradizione artigiana e innovazione tecnologica, con un'attenzione 
                maniacale per i dettagli e la qualità dei materiali.
              </p>
              <Link 
                href="/chi-siamo" 
                className="text-[#20513c] hover:text-[#0d372a] font-medium inline-flex items-center transition"
              >
                Scopri di più
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi Highlights */}
      <section className="py-16 bg-[#f0f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#20513c]">I Nostri Servizi</h2>
          
          <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-3'} gap-8`}>
            {/* Servizio 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image 
                  src="/service-furniture.jpg" 
                  alt="Mobili su misura" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#20513c]">Mobili su Misura</h3>
                <p className="text-gray-600 mb-4">
                  Realizziamo mobili personalizzati per ogni ambiente della casa, adattati perfettamente ai tuoi spazi e alle tue esigenze.
                </p>
                <Link 
                  href="/servizi" 
                  className="text-[#20513c] hover:text-[#0d372a] font-medium inline-flex items-center transition"
                >
                  Scopri di più
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Servizio 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image 
                  src="/service-kitchen.jpg" 
                  alt="Cucine" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#20513c]">Cucine Artigianali</h3>
                <p className="text-gray-600 mb-4">
                  Progettiamo e realizziamo cucine su misura, combinando funzionalità, estetica e materiali di alta qualità.
                </p>
                <Link 
                  href="/servizi" 
                  className="text-[#20513c] hover:text-[#0d372a] font-medium inline-flex items-center transition"
                >
                  Scopri di più
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Servizio 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image 
                  src="/service-wardrobe.jpg" 
                  alt="Armadi e Cabine" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#20513c]">Armadi e Cabine</h3>
                <p className="text-gray-600 mb-4">
                  Creiamo soluzioni di stoccaggio eleganti e funzionali, armadi e cabine armadio personalizzate per ogni spazio.
                </p>
                <Link 
                  href="/servizi" 
                  className="text-[#20513c] hover:text-[#0d372a] font-medium inline-flex items-center transition"
                >
                  Scopri di più
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/servizi" 
              className="bg-[#20513c] hover:bg-[#0d372a] text-white px-6 py-3 rounded-md inline-block transition duration-300"
            >
              Tutti i Nostri Servizi
            </Link>
          </div>
        </div>
      </section>

      {/* Progetti Recenti */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#20513c]">Progetti Recenti</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Alcuni dei nostri lavori più recenti realizzati con passione e attenzione per ogni dettaglio.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Progetto 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/project-1.jpg" 
                  alt="Cucina moderna" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform hover:scale-110 duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#20513c]">Cucina Moderna</h3>
                <p className="text-gray-600 text-sm">Roma, 2023</p>
              </div>
            </div>

            {/* Progetto 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/project-2.jpg" 
                  alt="Libreria su misura" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform hover:scale-110 duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#20513c]">Libreria su Misura</h3>
                <p className="text-gray-600 text-sm">Milano, 2023</p>
              </div>
            </div>

            {/* Progetto 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/project-3.jpg" 
                  alt="Armadio a muro" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform hover:scale-110 duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#20513c]">Armadio a Muro</h3>
                <p className="text-gray-600 text-sm">Firenze, 2022</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/progetti" 
              className="text-[#20513c] hover:text-[#0d372a] font-medium inline-flex items-center transition"
            >
              Visualizza Tutti i Progetti
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonianze */}
      <section className="py-16 bg-[#f0f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#20513c]">Cosa Dicono i Nostri Clienti</h2>
          
          <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-3'} gap-8 max-w-5xl mx-auto`}>
            {/* Testimonianza 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image 
                    src="/testimonial-1.jpg" 
                    alt="Cliente" 
                    width={60} 
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#20513c]">Marco Rossi</h3>
                  <p className="text-gray-600 text-sm">Roma</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Cucina bellissima e realizzata con grande attenzione ai dettagli. 
                Professionalità e qualità eccellenti, consiglio vivamente!"
              </p>
            </div>

            {/* Testimonianza 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image 
                    src="/testimonial-2.jpg" 
                    alt="Cliente" 
                    width={60} 
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#20513c]">Laura Bianchi</h3>
                  <p className="text-gray-600 text-sm">Milano</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Hanno trasformato il mio sogno in realtà! La libreria è esattamente 
                come la desideravo. Ottimo rapporto qualità-prezzo."
              </p>
            </div>

            {/* Testimonianza 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image 
                    src="/testimonial-3.jpg" 
                    alt="Cliente" 
                    width={60} 
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#20513c]">Giovanni Verdi</h3>
                  <p className="text-gray-600 text-sm">Firenze</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Servizio impeccabile e tempi di consegna rispettati. 
                L'armadio è bellissimo e perfettamente adattato allo spazio disponibile."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#20513c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto a Realizzare i Tuoi Progetti?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contattaci per una consulenza gratuita e trasforma le tue idee in realtà.
          </p>
          <Link 
            href="/contatti" 
            className="bg-white text-[#20513c] hover:bg-gray-100 px-8 py-3 rounded-md inline-block transition duration-300 font-medium"
          >
            Richiedi Preventivo Gratuito
          </Link>
        </div>
      </section>
    </div>
  );
}
