import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servizi | Panariello',
  description: 'Scopri i nostri servizi di falegnameria: mobili su misura, cucine artigianali, armadi, restauro e soluzioni personalizzate per ogni ambiente.',
};

export default function Servizi() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/services-hero.jpg" 
            alt="Servizi di falegnameria" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="brightness-[0.7]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">I Nostri Servizi</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Soluzioni personalizzate per ogni esigenza, dalla progettazione alla realizzazione
          </p>
        </div>
      </section>

      {/* Introduzione */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-[#20513c]">Artigianato di Qualità</h2>
          <p className="text-lg text-gray-700 mb-6">
            La nostra falegnameria offre un'ampia gamma di servizi personalizzati per soddisfare ogni tua esigenza di arredamento. 
            Dalla progettazione alla realizzazione, ci occupiamo di ogni fase del processo creativo con passione e dedizione.
          </p>
          <p className="text-lg text-gray-700">
            Ogni mobile, ogni complemento d'arredo è pensato e realizzato su misura, tenendo conto delle caratteristiche 
            dell'ambiente, delle tue necessità e dei tuoi gusti. Il legno prende vita nelle nostre mani esperte per 
            trasformarsi in pezzi unici che arricchiranno la tua casa.
          </p>
        </div>
      </section>

      {/* Servizi Principali */}
      <section className="py-16 bg-[#f0f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center text-[#20513c]">Servizi Principali</h2>
          
          {/* Servizio 1 */}
          <div className="flex flex-col md:flex-row items-center mb-20 last:mb-0">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4 text-[#20513c]">Mobili su Misura</h3>
              <p className="text-gray-700 mb-4">
                Realizziamo mobili completamente personalizzati per ogni ambiente della tua casa o del tuo ufficio.
                Dalle librerie alle credenze, dai tavoli alle scrivanie, ogni pezzo è progettato e costruito secondo le tue esigenze specifiche.
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2">
                <li>Progettazione personalizzata</li>
                <li>Scelta accurata dei materiali</li>
                <li>Attenzione maniacale ai dettagli</li>
                <li>Finiture di alta qualità</li>
                <li>Consegna e montaggio professionale</li>
              </ul>
              <Link 
                href="/contatti" 
                className="bg-[#0d372a] hover:bg-[#0d372a] text-white px-6 py-3 rounded-md inline-block transition duration-300"
              >
                Richiedi Preventivo
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/service-furniture-detail.jpg" 
                alt="Mobili su misura" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Servizio 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-20 last:mb-0">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
              <h3 className="text-2xl font-bold mb-4 text-[#20513c]">Cucine Artigianali</h3>
              <p className="text-gray-700 mb-4">
                La cucina è il cuore della casa, e noi lo sappiamo bene. Progettiamo e realizziamo cucine su misura che uniscono 
                funzionalità, estetica e materiali di qualità. Ogni dettaglio è studiato per rendere la tua cucina non solo bella, 
                ma anche pratica e funzionale.
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2">
                <li>Progettazione 3D personalizzata</li>
                <li>Consulenza per la scelta dei materiali e degli elettrodomestici</li>
                <li>Soluzioni ergonomiche e funzionali</li>
                <li>Ampia gamma di finiture e accessori</li>
                <li>Installazione professionale</li>
              </ul>
              <Link 
                href="/contatti" 
                className="bg-[#0d372a] hover:bg-[#0d372a] text-white px-6 py-3 rounded-md inline-block transition duration-300"
              >
                Richiedi Preventivo
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/service-kitchen-detail.jpg" 
                alt="Cucine artigianali" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Servizio 3 */}
          <div className="flex flex-col md:flex-row items-center mb-20 last:mb-0">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4 text-[#20513c]">Armadi e Cabine Armadio</h3>
              <p className="text-gray-700 mb-4">
                Ottimizza lo spazio con soluzioni di stoccaggio eleganti e funzionali. I nostri armadi e cabine armadio sono 
                progettati per adattarsi perfettamente ai tuoi spazi e rispondere alle tue esigenze di organizzazione.
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2">
                <li>Studio dello spazio disponibile</li>
                <li>Organizzazione interna personalizzata</li>
                <li>Sistemi di illuminazione integrati</li>
                <li>Accessori e complementi funzionali</li>
                <li>Massimizzazione dello spazio di stoccaggio</li>
              </ul>
              <Link 
                href="/contatti" 
                className="bg-[#0d372a] hover:bg-[#0d372a] text-white px-6 py-3 rounded-md inline-block transition duration-300"
              >
                Richiedi Preventivo
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/service-wardrobe-detail.jpg" 
                alt="Armadi e cabine armadio" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servizi Aggiuntivi */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#20513c]">Altri Servizi</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Servizio Aggiuntivo 1 */}
            <div className="bg-[#f0f5f0] rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="/service-restoration.jpg" 
                  alt="Restauro mobili" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#20513c]">Restauro Mobili</h3>
                <p className="text-gray-700 mb-4">
                  Ridoniamo vita e splendore ai tuoi mobili antichi o danneggiati. Il nostro servizio di restauro 
                  conservativo rispetta la storia e le caratteristiche originali del mobile.
                </p>
                <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm">
                  <li>Riparazione di danni strutturali</li>
                  <li>Ripristino delle finiture originali</li>
                  <li>Sostituzione di parti danneggiate</li>
                </ul>
              </div>
            </div>

            {/* Servizio Aggiuntivo 2 */}
            <div className="bg-[#f0f5f0] rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="/service-doors.jpg" 
                  alt="Porte e infissi" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#20513c]">Porte e Infissi</h3>
                <p className="text-gray-700 mb-4">
                  Produciamo porte interne, portoncini d'ingresso e infissi su misura, combinando estetica, 
                  funzionalità e isolamento termoacustico.
                </p>
                <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm">
                  <li>Porte interne personalizzate</li>
                  <li>Portoncini d'ingresso sicuri</li>
                  <li>Infissi ad alte prestazioni</li>
                </ul>
              </div>
            </div>

            {/* Servizio Aggiuntivo 3 */}
            <div className="bg-[#f0f5f0] rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="/service-design.jpg" 
                  alt="Consulenza design" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#20513c]">Consulenza Design</h3>
                <p className="text-gray-700 mb-4">
                  Offriamo un servizio di consulenza per aiutarti a progettare gli spazi e scegliere le 
                  soluzioni d'arredo più adatte al tuo ambiente e stile di vita.
                </p>
                <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm">
                  <li>Progettazione degli spazi</li>
                  <li>Renderizzazione 3D</li>
                  <li>Scelta materiali e finiture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo di Lavoro */}
      <section className="py-16 bg-[#e6f0e6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#20513c]">Il Nostro Processo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Fase 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="bg-[#0d372a] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold absolute -top-5 left-1/2 transform -translate-x-1/2">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4 text-[#20513c]">Consulenza</h3>
              <p className="text-gray-700">
                Incontriamo il cliente per capire le sue esigenze, visitiamo gli spazi e raccogliamo tutte le informazioni necessarie.
              </p>
            </div>

            {/* Fase 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="bg-[#0d372a] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold absolute -top-5 left-1/2 transform -translate-x-1/2">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4 text-[#20513c]">Progettazione</h3>
              <p className="text-gray-700">
                Elaboriamo un progetto dettagliato, con disegni tecnici e, se richiesto, renderizzazioni 3D per visualizzare il risultato finale.
              </p>
            </div>

            {/* Fase 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="bg-[#0d372a] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold absolute -top-5 left-1/2 transform -translate-x-1/2">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4 text-[#20513c]">Realizzazione</h3>
              <p className="text-gray-700">
                Il nostro team di artigiani esperti realizza i mobili con cura maniacale per i dettagli, utilizzando materiali di alta qualità.
              </p>
            </div>

            {/* Fase 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="bg-[#0d372a] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold absolute -top-5 left-1/2 transform -translate-x-1/2">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4 text-[#20513c]">Installazione</h3>
              <p className="text-gray-700">
                Consegniamo e installiamo i mobili con professionalità, assicurandoci che tutto sia perfetto prima di considerare il lavoro concluso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d372a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronti a Trasformare i Tuoi Spazi?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contattaci per una consulenza gratuita e senza impegno. Siamo qui per trasformare le tue idee in realtà.
          </p>
          <Link 
            href="/contatti" 
            className="bg-white text-[#20513c] hover:bg-[#e6f0e6] px-8 py-3 rounded-md inline-block transition duration-300 font-medium"
          >
            Contattaci Ora
          </Link>
        </div>
      </section>
    </div>
  );
}
