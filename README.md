# Falegnameria Artigianale - Sito Vetrina

Questo progetto è un sito vetrina per una falegnameria artigianale, creato con Next.js, TypeScript e Tailwind CSS. Il sito è progettato per essere elegante, responsive e facilmente estendibile.

## Caratteristiche

- 🎨 Design elegante e artigianale con tema in legno
- 📱 Completamente responsive su tutti i dispositivi
- 🚀 Ottimizzato per le prestazioni e il SEO
- 💅 Styling con Tailwind CSS
- 🔍 Struttura del codice pulita e ben organizzata

## Struttura del Progetto

- **Homepage**: presentazione dell'azienda con sezioni per servizi, progetti recenti e testimonianze
- **Chi Siamo**: informazioni sull'azienda, la sua storia, i valori e il team
- **Servizi**: dettagli sui servizi offerti dalla falegnameria
- **Progetti**: galleria dei progetti realizzati 
- **Contatti**: informazioni di contatto, mappa e form per richieste

## Tecnologie Utilizzate

- [Next.js](https://nextjs.org/) - Framework React per rendering lato server
- [TypeScript](https://www.typescriptlang.org/) - Tipizzazione statica per JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [React](https://reactjs.org/) - Libreria JavaScript per interfacce utente

## Getting Started

### Prerequisiti

- Node.js 18.x o superiore
- npm o yarn

### Installazione

1. Clona il repository

```bash
git clone <url-repository>
cd falegnameria-artigianale
```

2. Installa le dipendenze

```bash
npm install
# oppure
yarn install
```

3. Avvia il server di sviluppo

```bash
npm run dev
# oppure
yarn dev
```

4. Apri [http://localhost:3000](http://localhost:3000) nel tuo browser per vedere il risultato

## Struttura delle Cartelle

- `src/app/` - Pagine dell'applicazione
- `src/components/` - Componenti React riutilizzabili
- `src/components/layout/` - Componenti del layout (Header, Footer)
- `src/components/ui/` - Componenti UI riutilizzabili
- `src/data/` - Dati mock per servizi e progetti
- `src/utils/` - Utilità e funzioni helper
- `public/` - File statici (immagini, font, ecc.)

## Personalizzazione

### Immagini

Tutte le immagini segnaposto possono essere sostituite con immagini reali, mantenendo gli stessi nomi di file nella cartella `public/images/`.

### Contenuti

I contenuti possono essere modificati nei file:
- `src/data/services.json` - Servizi offerti
- `src/data/projects.json` - Progetti realizzati

## Deployment

Questo sito può essere facilmente deployato su piattaforme come Vercel, Netlify o qualsiasi altra piattaforma che supporti Next.js.

```bash
npm run build
# oppure
yarn build
```

## Licenza

Questo progetto è concesso in licenza con licenza MIT.
