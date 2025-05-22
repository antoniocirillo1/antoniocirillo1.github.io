/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurazione per l'export statico
  output: 'export',
  images: {
    unoptimized: true, // Per l'export statico
    domains: ['images.unsplash.com'], // Aggiungi qui eventuali domini esterni delle immagini
  },
  // Impostazioni opzionali
  reactStrictMode: true,
};

module.exports = nextConfig;
