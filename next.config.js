/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Configura il percorso base per GitHub Pages
  // Sostituisci 'nome-repository' con il nome del tuo repository GitHub
  basePath: process.env.NODE_ENV === 'production' ? '/nome-repository' : '',
  images: {
    unoptimized: true, // Necessario per l'esportazione statica
  },
};

module.exports = nextConfig;
