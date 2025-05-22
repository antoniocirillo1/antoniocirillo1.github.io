"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

// Definire i tipi per i componenti di animazione
type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
};

type SequentialItemProps = {
  children: React.ReactNode;
  index: number;
  staggerDelay?: number;
};

// Componente per lo slideshow automatico dei partner
const PartnersSlideshow = () => {
  // Utilizziamo i percorsi corretti per le immagini dei partner
  const imagePaths = [
    { id: 1, path: "/images/about/partner1.jpg", alt: "Partner e Certificazioni 1" },
    { id: 2, path: "/images/about/partner2.jpg", alt: "Partner e Certificazioni 2" }
  ];
  
  const [activeImage, setActiveImage] = useState(imagePaths[0].id);
  
  // Effetto per il cambio automatico delle immagini
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(current => 
        current === imagePaths[0].id ? imagePaths[1].id : imagePaths[0].id
      );
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative overflow-hidden rounded-lg">
      {/* Prima immagine */}
      <div className={`transition-all duration-1000 ease-in-out ${activeImage === imagePaths[0].id ? 'opacity-100' : 'opacity-0'}`}>
        <Image 
          src={imagePaths[0].path}
          alt={imagePaths[0].alt}
          width={800}
          height={200}
          priority
          className="w-full rounded-lg"
        />
      </div>
      
      {/* Seconda immagine (posizionata sopra la prima) */}
      <div 
        className={`absolute top-0 left-0 w-full transition-all duration-1000 ease-in-out ${activeImage === imagePaths[1].id ? 'opacity-100' : 'opacity-0'}`}
      >
        <Image 
          src={imagePaths[1].path}
          alt={imagePaths[1].alt}
          width={800}
          height={200}
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
};

// Componente riutilizzabile per le animazioni di fade-in
const FadeInWhenVisible = ({ children, delay = 0, direction = "up" }: FadeInProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 50 : 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      scale: direction === "scale" ? 0.95 : 1
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.6, delay: delay, ease: "easeOut" } 
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

// Componente per elementi sequenziali che appaiono uno dopo l'altro
const SequentialItem = ({ children, index, staggerDelay = 0.2 }: SequentialItemProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: index * staggerDelay,
        ease: "easeOut" 
      } 
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default function ChiSiamo() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/about/banner.jpg" 
            alt="Il nostro laboratorio" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="brightness-[0.7]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Chi Siamo
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-3xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Artigiani del legno con passione e dedizione da oltre 60 anni
          </motion.p>
        </div>
      </section>

      {/* Storia */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <FadeInWhenVisible direction="left" delay={0.1}>
                <h2 className="text-3xl font-bold mb-6 text-[#20513c]">La Nostra Storia</h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible direction="left" delay={0.2}>
                <p className="text-gray-700 mb-4">
                  L'azienda è la naturale evoluzione de "L'antica falegnameria di Panariello Antonio", fondata agli inizi degli anni 60'.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible direction="left" delay={0.3}>
                <p className="text-gray-700 mb-4">
                  Gli infissi, le porte e tutta l'intera produzione sono il risultato dell'entusiasmo e della passione che ispira quotidianamente il lavoro dei tecnici, dello staff amministrativo e di tutti coloro che collaborano alla crescita aziendale. L'entusiasmo per la propria attività, unito ad un investimento costante su tecnologie sempre all'avanguardia, consente di realizzare un prodotto con tempi di lavorazione ragionevoli e con un elevato standard qualitativo.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible direction="left" delay={0.4}>
                <p className="text-gray-700 mb-4">
                  Siamo sempre attenti alle mutevoli esigenze del mercato, investendo considerevoli risorse nella cura della qualità e dei servizi offerti. Il rapporto qualità/prezzo è un fattore determinante per la nostra azienda che si pone come obiettivo il soddisfacimento delle aspettative del cliente. Sin dagli albori tutta la materia prima, avendo innanzitutto particolare cura e rispetto per l'ambiente, è scelta e lavorata rigorosamente secondo le normative nazionali ed internazionali.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible direction="left" delay={0.5}>
                <p className="text-gray-700 mb-4">
                  Inoltre siamo, orgogliosamente, da sempre impegnati attivamente nella lotta al racket.
                </p>
              </FadeInWhenVisible>
            </div>
            <div className="md:w-1/2">
              <FadeInWhenVisible direction="scale" delay={0.3}>
                <Image 
                  src="/images/banner.jpg" 
                  alt="Il nostro laboratorio negli anni" 
                  width={600} 
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible direction="up">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#20513c]">I Nostri Valori</h2>
          </FadeInWhenVisible>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Valore 1 */}
            <SequentialItem index={0} staggerDelay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-md text-center h-full">
                <div className="text-[#20513c] mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#20513c]">Artigianalità</h3>
                  <p className="text-gray-700">
                    Ogni nostra creazione è realizzata con tecniche artigianali tramandate di generazione in generazione, combinate con tecnologie moderne per garantire la massima qualità.
                  </p>
                </motion.div>
              </div>
            </SequentialItem>

            {/* Valore 2 */}
            <SequentialItem index={1} staggerDelay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-md text-center h-full">
                <div className="text-[#20513c] mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#20513c]">Qualità</h3>
                  <p className="text-gray-700">
                    Selezioniamo solo i migliori materiali e lavoriamo con precisione estrema per garantire prodotti che durino nel tempo e mantengano la loro bellezza.
                  </p>
                </motion.div>
              </div>
            </SequentialItem>

            {/* Valore 3 */}
            <SequentialItem index={2} staggerDelay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-md text-center h-full">
                <div className="text-[#20513c] mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                  </svg>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#20513c]">Soddisfazione del Cliente</h3>
                  <p className="text-gray-700">
                    La tua felicità è la nostra priorità. Ascoltiamo attentamente le tue esigenze per creare soluzioni personalizzate che superino le tue aspettative.
                  </p>
                </motion.div>
              </div>
            </SequentialItem>
          </div>
        </div>
      </section>

      {/* Antonio Panariello */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <FadeInWhenVisible direction="scale" delay={0.2}>
                <div className="relative w-full aspect-square mx-auto max-w-md">
                  <Image 
                    src="/images/about/antonioPanariello.jpg" 
                    alt="Antonio Panariello" 
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
              </FadeInWhenVisible>
              <div className="p-8">
                <FadeInWhenVisible direction="up" delay={0.4}>
                  <h3 className="text-xl font-semibold text-[#20513c] mb-2">Fondatore e Maestro Artigiano</h3>
                </FadeInWhenVisible>
                <FadeInWhenVisible direction="up" delay={0.6}>
                  <p className="text-gray-700 italic border-l-4 border-[#20513c] pl-4 py-2">
                    "Da quando ho creato questa azienda, l'unico mio intento è sempre stato quello di fornire ai clienti i migliori prodotti e servizi lavorando sempre onestamente perché l'integrità non ammette scorciatoie. Ho trasmesso questi valori ai miei figli ed è per questo, che da oltre 60 anni, le persone ci danno fiducia e si affidano a noi. Grazie di cuore"
                  </p>
                </FadeInWhenVisible>
                
                <div className="mt-4 flex justify-center">
                  <img 
                    src="/images/about/firmapanariello.png" 
                    alt="Firma di Antonio Panariello" 
                    width="350" 
                    height="90" 
                    className="opacity-90"
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificazioni e Partnership */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible direction="up">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#20513c]">Certificazioni e Partnership</h2>
          </FadeInWhenVisible>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <FadeInWhenVisible direction="up" delay={0.2}>
              <p className="text-gray-700 text-center mb-8">
                La nostra falegnameria è orgogliosa di collaborare con i migliori fornitori del settore e di possedere certificazioni che attestano la qualità del nostro lavoro e il nostro impegno verso la sostenibilità.
              </p>
            </FadeInWhenVisible>
            
            <div className="w-full mb-4">
              <PartnersSlideshow />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
