/** @type {import('next').NextConfig} */
const nextConfig = {
  // Nessuna necessità di configurare output come 'export' su Netlify
  images: {
    domains: ['images.unsplash.com'], // Aggiungi qui eventuali domini esterni delle immagini
  },
  // Impostazioni opzionali per l'ottimizzazione su Netlify
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
