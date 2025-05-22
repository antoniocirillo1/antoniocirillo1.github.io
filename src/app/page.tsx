"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

// Stili di animazione globali
import "./animations.css";

export default function Home() {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Funzione per attivare le animazioni quando gli elementi entrano nel viewport
    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Smette di osservare dopo l'animazione
        }
      });
    };

    // Inizializza l'Intersection Observer
    const observer = new IntersectionObserver(observerCallback, { 
      threshold: 0.1,  // Attiva quando almeno il 10% dell'elemento è visibile
      rootMargin: '0px 0px -100px 0px' // Trigger leggermente prima di arrivare all'elemento
    });

    // Osserva tutti gli elementi con animazioni
    document.querySelectorAll('.animate-fade-in-right, .animate-fade-in-left').forEach(el => {
      observer.observe(el);
    });

    return () => {
      // Cleanup al momento dell'unmount
      observer.disconnect();
    };
  }, []);
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Colonna immagine */}
            <div className="opacity-0 animate-fade-in-right" style={{transform: 'translateX(-15px)'}}>
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <Image 
                  src="/images/banner.jpg" 
                  alt="Artigiani al lavoro" 
                  width={600} 
                  height={450}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700 ease-in-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="text-sm font-medium bg-[#20513c] px-3 py-1 rounded-full">Vincenzo, Antonio e Francesco</span>
                </div>
              </div>
            </div>
            
            {/* Colonna testo */}
            <div className="opacity-0 animate-fade-in-left" style={{transform: 'translateX(15px)'}}>
              <h2 className="text-4xl font-bold mb-8 text-[#20513c] relative">
                <span className="relative inline-block">
                  Chi Siamo
                  <span className="absolute -bottom-3 left-0 w-1/3 h-1 bg-[#20513c] rounded-full"></span>
                </span>
              </h2>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Dal <span className="font-semibold text-[#20513c]">1960</span>, la nostra falegnameria artigianale trasforma il legno in opere d'arte funzionali. 
                Combiniamo <span className="italic">maestria artigianale</span> e tecnologie all'avanguardia per creare arredi su misura che raccontano storie di eccellenza.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Ogni progetto inizia con un ascolto attento delle tue esigenze e si sviluppa attraverso un meticoloso lavoro di progettazione e realizzazione, dove il rispetto per la materia prima si unisce alla ricerca dell'eccellenza.
              </p>
              <Link 
                href="/chi-siamo" 
                className="group bg-[#20513c] hover:bg-[#0d372a] text-white px-6 py-3 rounded-lg inline-flex items-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Scopri la nostra storia
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300">
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
            <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
              <div className="relative h-72 overflow-hidden">
                <Image 
                  src="/images/mobile.jpeg" 
                  alt="Mobili su misura" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-2xl font-bold">Mobili su Misura</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-[#20513c] group-hover:text-[#0d372a] transition-colors">Mobili su Misura</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Realizziamo mobili personalizzati per ogni ambiente della casa, adattati perfettamente ai tuoi spazi e alle tue esigenze.
                </p>
                <Link 
                  href="/servizi" 
                  className="text-[#20513c] hover:text-[#0d372a] font-medium inline-flex items-center transition group/link mt-auto"
                >
                  Scopri di più
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Servizio 2 */}
            <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
              <div className="relative h-72 overflow-hidden">
                <Image 
                  src="/images/porta.jpg" 
                  alt="Porte e Finestre" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-2xl font-bold">Porte e Finestre</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-[#20513c] group-hover:text-[#0d372a] transition-colors">Porte e Finestre</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Progettiamo e realizziamo porte e finestre su misura, combinando funzionalità, estetica e materiali di alta qualità.
                </p>
                <Link 
                  href="/servizi" 
                  className="text-[#20513c] hover:text-[#0d372a] font-medium inline-flex items-center transition group/link mt-auto"
                >
                  Scopri di più
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Servizio 3 */}
            <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
              <div className="relative h-72 overflow-hidden">
                <Image 
                  src="/images/cabina.jpeg" 
                  alt="Armadi e Cabine" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-2xl font-bold">Armadi e Cabine</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-[#20513c] group-hover:text-[#0d372a] transition-colors">Armadi e Cabine</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Creiamo soluzioni di stoccaggio eleganti e funzionali, armadi e cabine armadio personalizzate per ogni spazio.
                </p>
                <Link 
                  href="/servizi" 
                  className="text-[#20513c] hover:text-[#0d372a] font-medium inline-flex items-center transition group/link mt-auto"
                >
                  Scopri di più
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Progetto 1 */}
            <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/images/pilastro.jpeg.webp" 
                  alt="Parete a Pilastrini" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-2xl font-bold">Parete a Pilastrini</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-[#20513c] group-hover:text-[#0d372a] transition-colors">Parete a Pilastrini</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Rivestimento pilastro in legno massello effetto "vedo-non vedo".
                </p>
                <Link 
                  href="/progetti/cucina-moderna" 
                  className="text-[#20513c] hover:text-[#0d372a] font-medium inline-flex items-center transition group/link mt-auto"
                >
                  Vedi progetto
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Progetto 2 */}
            <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/images/boiseire.webp" 
                  alt="Boiserie cannettata" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-2xl font-bold">Boiserie Cannettata</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-[#20513c] group-hover:text-[#0d372a] transition-colors">Boiserie Cannettata</h3>
                <p className="text-gray-600 mb-4 flex-1">
                Parete cannettata in legno massello, in essenza noce canaletto, completa di zoccolatura e bordi maggiorati laterali.
                </p>
                <Link 
                  href="/progetti/libreria-su-misura" 
                  className="text-[#20513c] hover:text-[#0d372a] font-medium inline-flex items-center transition group/link mt-auto"
                >
                  Vedi progetto
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Progetto 3 */}
            <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/images/panchetta.webp" 
                  alt="Panchetta scarpiera" 
                  fill
                  style={{ objectFit: 'cover', transform: 'scale(1.05)' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-2xl font-bold">Panchetta Scarpiera</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-[#20513c] group-hover:text-[#0d372a] transition-colors">Panchetta Scarpiera</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Panchetta scarpiera in legno di teak con piedini in legno massello. Il vano contenitore porta scarpe ha un'apertura a push con discesa frizionata con cavetti in acciaio.
                </p>
                <Link 
                  href="/progetti/soggiorno-moderno" 
                  className="text-[#20513c] hover:text-[#0d372a] font-medium inline-flex items-center transition group/link mt-auto"
                >
                  Vedi progetto
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
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
                    src="/images/uomo1.jpg" 
                    alt="Cliente" 
                    width={60} 
                    height={60}
                    className="rounded-full object-cover w-[60px] h-[60px]"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#20513c]">Mario</h3>
                  <p className="text-gray-600 text-sm">Torre del Greco</p>
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
                    src="/images/donna.avif" 
                    alt="Cliente" 
                    width={60} 
                    height={60}
                    className="rounded-full object-cover w-[60px] h-[60px]"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#20513c]">Laura</h3>
                  <p className="text-gray-600 text-sm">Ercolano</p>
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
                    src="/images/uomo2.avif" 
                    alt="Cliente" 
                    width={60} 
                    height={60}
                    className="rounded-full object-cover w-[60px] h-[60px]"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#20513c]">Giovanni</h3>
                  <p className="text-gray-600 text-sm">Napoli</p>
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
