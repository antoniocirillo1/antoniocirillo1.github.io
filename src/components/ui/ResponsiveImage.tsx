"use client";

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

// Estendi le proprietà di Image di Next.js con alcune nostre proprietà personalizzate
type ResponsiveImageProps = Omit<ImageProps, 'src'> & {
  src: string;
  fallbackSrc?: string;
};

/**
 * Componente immagine responsiva con fallback automatico
 * Utilizza un'immagine di fallback o uno stile di fallback se l'immagine principale non è disponibile
 */
export default function ResponsiveImage({
  src,
  fallbackSrc = "/placeholder.jpg",
  alt,
  className = '',
  ...props
}: ResponsiveImageProps) {
  const [error, setError] = useState(false);
  
  // Funzione per gestire l'errore di caricamento dell'immagine
  const handleError = () => {
    setError(true);
  };

  return (
    <Image
      src={error ? fallbackSrc : src}
      alt={alt}
      className={`${error ? 'fallback-img' : ''} ${className}`}
      onError={handleError}
      {...props}
    />
  );
}
