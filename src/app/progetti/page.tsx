import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ClientProgettiPage from '@/components/ClientProgettiPage';

export const metadata: Metadata = {
  title: 'Progetti Realizzati | Panariello',
  description: 'Galleria dei nostri migliori progetti di falegnameria: mobili su misura, cucine artigianali, armadi e restauri realizzati con passione e maestria.',
};

// Dati mockup per progetti
const progetti = [
  {
    id: 1,
    titolo: 'Cucina Moderna in Rovere',
    luogo: 'Roma',
    anno: '2023',
    categoria: 'Cucine',
    immagine: '/projects/project-1.jpg',
    descrizione: 'Cucina in rovere massello con isola centrale, piano in quarzo e elettrodomestici integrati. Design moderno con linee pulite e funzionalità ottimizzata.'
  },
  {
    id: 2,
    titolo: 'Libreria a Tutta Parete',
    luogo: 'Milano',
    anno: '2023',
    categoria: 'Mobili su Misura',
    immagine: '/projects/project-2.jpg',
    descrizione: 'Libreria realizzata su misura per sfruttare tutta l\'altezza della parete. Combinazione di scaffali aperti e contenitori chiusi per un equilibrio perfetto tra esposizione e stoccaggio.'
  },
  {
    id: 3,
    titolo: 'Armadio a Muro con Specchi',
    luogo: 'Firenze',
    anno: '2022',
    categoria: 'Armadi',
    immagine: '/projects/project-3.jpg',
    descrizione: 'Armadio a muro con ante a specchio, illuminazione LED integrata e organizzazione interna personalizzata in base alle esigenze del cliente.'
  },
  {
    id: 4,
    titolo: 'Tavolo da Pranzo in Noce',
    luogo: 'Napoli',
    anno: '2022',
    categoria: 'Mobili su Misura',
    immagine: '/projects/project-4.jpg',
    descrizione: 'Tavolo da pranzo in noce nazionale con bordi naturali e base in ferro battuto. Finitura con olio naturale per esaltare la bellezza del legno.'
  },
  {
    id: 5,
    titolo: 'Cabina Armadio ad Angolo',
    luogo: 'Torino',
    anno: '2021',
    categoria: 'Armadi',
    immagine: '/projects/project-5.jpg',
    descrizione: 'Cabina armadio ad angolo con sistema di illuminazione automatico, specchio a figura intera e cassettiere personalizzate.'
  },
  {
    id: 6,
    titolo: 'Cucina Rustica in Castagno',
    luogo: 'Bologna',
    anno: '2021',
    categoria: 'Cucine',
    immagine: '/projects/project-6.jpg',
    descrizione: 'Cucina in stile rustico realizzata in castagno massello con piano in marmo. Dettagli artigianali e finiture anticate per un ambiente caldo e accogliente.'
  },
  {
    id: 7,
    titolo: 'Mobile TV Sospeso',
    luogo: 'Palermo',
    anno: '2021',
    categoria: 'Mobili su Misura',
    immagine: '/projects/project-7.jpg',
    descrizione: 'Mobile TV sospeso con sistema di passaggio cavi nascosto, illuminazione ambientale a LED e finitura laccata opaca.'
  },
  {
    id: 8,
    titolo: 'Restauro Credenza Antica',
    luogo: 'Venezia',
    anno: '2020',
    categoria: 'Restauri',
    immagine: '/projects/project-8.jpg',
    descrizione: 'Restauro conservativo di una credenza del 1800 con ripristino delle finiture originali, sostituzione di parti danneggiate e trattamento antitarlo.'
  },
  {
    id: 9,
    titolo: 'Boiserie con Libreria Integrata',
    luogo: 'Genova',
    anno: '2020',
    categoria: 'Mobili su Misura',
    immagine: '/projects/project-9.jpg',
    descrizione: 'Boiserie in legno di ciliegio con libreria integrata e porta a scomparsa. Soluzione elegante per dividere gli ambienti mantenendo la continuità stilistica.'
  }
];

// Categorie per il filtro
const categorie = ['Tutte', 'Cucine', 'Mobili su Misura', 'Armadi', 'Restauri'];

export default function Progetti() {
  return (
    <ClientProgettiPage progetti={progetti} categorie={categorie} />
  );
}
