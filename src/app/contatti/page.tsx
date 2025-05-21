import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contatti | Panariello',
  description: 'Contatta la nostra falegnameria artigianale per preventivi, informazioni o per fissare un appuntamento. Siamo a tua disposizione per realizzare i tuoi progetti su misura.',
};

export default function Contatti() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/contact-hero.jpg" 
            alt="Contattaci" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="brightness-[0.7]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contatti</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Siamo qui per rispondere alle tue domande e trasformare le tue idee in realtà
          </p>
        </div>
      </section>

      {/* Informazioni di Contatto e Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Informazioni di Contatto */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold mb-6 text-[#20513c]">Come Contattarci</h2>
              
              <div className="bg-[#f0f5f0] rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-start mb-6">
                  <div className="text-[#20513c] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#20513c] mb-1">Indirizzo</h3>
                    <address className="not-italic text-gray-600">
                      Via dei Falegnami, 123<br />
                      00123 Roma (RM)<br />
                      Italia
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="text-[#20513c] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#20513c] mb-1">Telefono</h3>
                    <p className="text-gray-600">
                      <a href="tel:+3901234567" className="hover:text-[#20513c] transition">+39 0123 4567</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="text-[#20513c] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#20513c] mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@panariello.it" className="hover:text-[#20513c] transition">info@panariello.it</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#20513c] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#20513c] mb-1">Orari di Apertura</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>Lunedì - Venerdì: 8:30 - 18:00</li>
                      <li>Sabato: 9:00 - 13:00</li>
                      <li>Domenica: Chiuso</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 text-[#20513c]">Seguici</h2>
              <div className="flex space-x-4 mb-8">
                <a href="#" className="text-[#20513c] hover:text-[#20513c] transition" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-[#20513c] hover:text-[#20513c] transition" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Form di Contatto */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold mb-6 text-[#20513c]">Inviaci un Messaggio</h2>
              
              <form className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="nome" className="block text-[#20513c] font-medium mb-2">Nome *</label>
                    <input 
                      type="text" 
                      id="nome" 
                      className="w-full px-4 py-2 border border-[#0d372a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#20513c] focus:border-transparent" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="cognome" className="block text-[#20513c] font-medium mb-2">Cognome *</label>
                    <input 
                      type="text" 
                      id="cognome" 
                      className="w-full px-4 py-2 border border-[#0d372a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#20513c] focus:border-transparent" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-[#20513c] font-medium mb-2">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-[#0d372a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#20513c] focus:border-transparent" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-[#20513c] font-medium mb-2">Telefono</label>
                    <input 
                      type="tel" 
                      id="telefono" 
                      className="w-full px-4 py-2 border border-[#0d372a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#20513c] focus:border-transparent" 
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="servizio" className="block text-[#20513c] font-medium mb-2">Servizio di Interesse</label>
                  <select 
                    id="servizio" 
                    className="w-full px-4 py-2 border border-[#0d372a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#20513c] focus:border-transparent"
                  >
                    <option value="">Seleziona un servizio</option>
                    <option value="mobili">Mobili su Misura</option>
                    <option value="cucine">Cucine Artigianali</option>
                    <option value="armadi">Armadi e Cabine</option>
                    <option value="restauro">Restauro</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="messaggio" className="block text-[#20513c] font-medium mb-2">Messaggio *</label>
                  <textarea 
                    id="messaggio" 
                    rows={6} 
                    className="w-full px-4 py-2 border border-[#0d372a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#20513c] focus:border-transparent" 
                    required
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="h-5 w-5 hover:text-[#0d372a] focus:ring-[#20513c] border-[#0d372a] rounded" 
                      required
                    />
                    <span className="ml-2 text-gray-700 text-sm">
                      Acconsento al trattamento dei dati personali ai sensi del GDPR *
                    </span>
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-[#0d372a] hover:bg-[#0d372a] text-white px-6 py-3 rounded-md transition duration-300 font-medium"
                >
                  Invia Messaggio
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mappa */}
      <section className="py-16 bg-[#f0f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#20513c]">Dove Trovarci</h2>
          
          <div className="bg-white p-2 rounded-lg shadow-md overflow-hidden">
            {/* Questa è una mappa segnaposto - in un sito reale si integrerebbe Google Maps o altra soluzione */}
            <div className="relative h-[400px] w-full">
              <Image 
                src="/map-placeholder.jpg" 
                alt="Mappa" 
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-md p-3">
                <div className="flex items-center">
                  <div className="text-[#20513c] mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#20513c]">Panariello</h3>
                    <p className="text-gray-600 text-sm">Via dei Falegnami, 123</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-700">
              Siamo facilmente raggiungibili con i mezzi pubblici o in auto. <br />
              Parcheggio gratuito disponibile per i clienti.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#20513c]">Domande Frequenti</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-[#f0f5f0] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-[#20513c]">Quanto tempo ci vuole per realizzare un mobile su misura?</h3>
              <p className="text-gray-700">
                I tempi di realizzazione variano in base alla complessità del progetto. In media, un mobile su misura richiede dalle 2 alle 6 settimane, mentre progetti più complessi come cucine complete possono richiedere fino a 10 settimane.
              </p>
            </div>
            
            <div className="bg-[#f0f5f0] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-[#20513c]">Effettuate sopralluoghi a domicilio?</h3>
              <p className="text-gray-700">
                Sì, per progetti di una certa entità effettuiamo sopralluoghi a domicilio gratuiti per prendere le misure esatte e valutare al meglio lo spazio e le necessità. Per progetti più piccoli, è possibile inviarci le misure e discutere il progetto presso il nostro showroom.
              </p>
            </div>
            
            <div className="bg-[#f0f5f0] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-[#20513c]">Quali materiali utilizzate?</h3>
              <p className="text-gray-700">
                Utilizziamo una vasta gamma di legni pregiati (rovere, noce, ciliegio, castagno, ecc.) e altri materiali di alta qualità. Tutti i nostri materiali sono selezionati per durabilità, estetica e sostenibilità. Offriamo anche opzioni ecologiche e certificazioni FSC.
              </p>
            </div>
            
            <div className="bg-[#f0f5f0] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-[#20513c]">Quanto costa un progetto su misura?</h3>
              <p className="text-gray-700">
                Il costo dipende dalle dimensioni, dai materiali scelti e dalla complessità del progetto. Offriamo preventivi dettagliati e gratuiti dopo aver compreso le esigenze specifiche del cliente. Contattateci per ricevere un preventivo personalizzato.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0d372a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto a Dare Forma alle Tue Idee?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Il primo passo per realizzare i tuoi progetti è contattarci. 
            Siamo qui per ascoltare le tue esigenze e offrirti le migliori soluzioni personalizzate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+3901234567" 
              className="bg-white text-[#20513c] hover:bg-[#e6f0e6] px-8 py-3 rounded-md inline-flex items-center justify-center transition duration-300 font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Chiamaci Ora
            </a>
            <a 
              href="mailto:info@panariello.it" 
              className="border border-white bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-md inline-flex items-center justify-center transition duration-300 font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Inviaci un'Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
