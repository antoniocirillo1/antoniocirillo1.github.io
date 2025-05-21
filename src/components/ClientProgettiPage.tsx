"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/useIsMobile';
import ProgettiFilter from '@/components/ProgettiFilter';

// Definizione dei tipi
type Progetto = {
  id: number;
  titolo: string;
  luogo: string;
  anno: string;
  categoria: string;
  immagine: string;
  descrizione: string;
};

type ClientProgettiPageProps = {
  progetti: Progetto[];
  categorie: string[];
};

export default function ClientProgettiPage({ progetti, categorie }: ClientProgettiPageProps) {
  const isMobile = useIsMobile();
  
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className={`relative ${isMobile ? 'h-[40vh]' : 'h-[50vh]'} flex items-center`}>
        <div className="absolute inset-0 z-0">
          <Image 
            src="/projects-hero.jpg" 
            alt="I nostri progetti" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="brightness-[0.7]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold mb-4 text-white`}>
              I Nostri Progetti
            </h1>
            <p className="text-white text-lg mb-6">
              Scopri i lavori realizzati dalla nostra falegnameria artigianale. Ogni pezzo racconta una storia 
              di passione, maestria e attenzione ai dettagli.
            </p>
          </div>
        </div>
      </section>

      {/* Progetti Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Descrizione introduttiva */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold mb-6 text-[#20513c]`}>La Nostra Galleria</h2>
            <p className="text-gray-700">
              Ogni progetto rappresenta una sfida unica che abbiamo affrontato con passione e dedizione.
              La nostra galleria mostra una selezione dei lavori realizzati negli ultimi anni, 
              testimonianza della qualità e della versatilità della nostra falegnameria.
            </p>
          </div>
          
          {/* Filtro progetti */}
          <ProgettiFilter progetti={progetti} categorie={categorie} />
        </div>
      </section>
      
      {/* Processo di lavoro */}
      <section className="py-16 bg-[#f0f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#20513c]">Come Lavoriamo</h2>
          
          <div className={`grid grid-cols-1 ${isMobile ? 'gap-8' : 'md:grid-cols-3 gap-16'} items-center mb-${isMobile ? '8' : '16'}`}>
            {/* Fase 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#e6f0e6] rounded-full flex items-center justify-center text-[#20513c] mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#20513c] text-center">Ascoltiamo</h3>
              <p className="text-gray-700 text-center">
                Ogni progetto inizia con un colloquio in cui ascoltiamo attentamente le tue esigenze e 
                desideri per comprendere appieno la tua visione.
              </p>
            </div>
            
            {/* Fase 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#e6f0e6] rounded-full flex items-center justify-center text-[#20513c] mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#20513c] text-center">Progettiamo</h3>
              <p className="text-gray-700 text-center">
                Creiamo disegni dettagliati e renderizzazioni 3D per darti un'idea chiara del risultato finale, 
                perfezionando ogni dettaglio prima di procedere.
              </p>
            </div>
            
            {/* Fase 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#e6f0e6] rounded-full flex items-center justify-center text-[#20513c] mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#20513c] text-center">Realizziamo</h3>
              <p className="text-gray-700 text-center">
                I nostri artigiani creano il tuo progetto con maestria e precisione, utilizzando 
                tecniche tradizionali e strumenti moderni per un risultato perfetto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Testimonianze */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#20513c]">Le Opinioni dei Clienti</h2>
          
          <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2'} gap-8 max-w-4xl mx-auto`}>
            {/* Testimonianza 1 */}
            <div className="bg-[#f0f5f0] p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-6">
                "Sono rimasto davvero colpito dalla professionalità e dalla qualità del lavoro. 
                La libreria che hanno realizzato è esattamente come la desideravo, 
                si adatta perfettamente allo spazio e ha trasformato completamente il soggiorno."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <Image 
                    src="/testimonial-1.jpg" 
                    alt="Cliente" 
                    width={50} 
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#20513c]">Marco Rossi</h3>
                  <p className="text-gray-600 text-sm">Roma - Libreria su Misura</p>
                </div>
              </div>
            </div>

            {/* Testimonianza 2 */}
            <div className="bg-[#f0f5f0] p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-6">
                "Avevo un'idea precisa di come volevo la mia cucina, ma il risultato finale ha superato di gran lunga le mie aspettative. 
                Il team ha saputo interpretare al meglio le mie esigenze e aggiungere quel tocco di creatività che ha reso la cucina unica."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <Image 
                    src="/testimonial-2.jpg" 
                    alt="Cliente" 
                    width={50} 
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#20513c]">Laura Bianchi</h3>
                  <p className="text-gray-600 text-sm">Milano - Cucina Moderna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d372a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Hai un Progetto in Mente?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contattaci per trasformare le tue idee in realtà. Il nostro team è pronto a creare per te un progetto unico e personalizzato.
          </p>
          <Link 
            href="/contatti" 
            className="bg-white text-[#20513c] hover:bg-[#e6f0e6] px-8 py-3 rounded-md inline-block transition duration-300 font-medium"
          >
            Richiedi una Consulenza
          </Link>
        </div>
      </section>
    </div>
  );
}
