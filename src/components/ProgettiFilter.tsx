"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/useIsMobile';

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

type ProgettiFilterProps = {
  progetti: Progetto[];
  categorie: string[];
};

export default function ProgettiFilter({ progetti, categorie }: ProgettiFilterProps) {
  const [categoriaAttiva, setCategoriaAttiva] = useState('Tutte');
  const isMobile = useIsMobile();
  
  // Filtra i progetti in base alla categoria selezionata
  const progettiFiltered = categoriaAttiva === 'Tutte' 
    ? progetti 
    : progetti.filter(progetto => progetto.categoria === categoriaAttiva);

  return (
    <>
      {/* Filtri */}
      <div className={`flex flex-wrap ${isMobile ? 'gap-1' : 'gap-2'} justify-center mb-8`}>
        {categorie.map((categoria) => (
          <button 
            key={categoria}
            onClick={() => setCategoriaAttiva(categoria)}
            className={`${isMobile ? 'px-3 py-1 text-sm' : 'px-4 py-2'} rounded-md border transition ${
              categoriaAttiva === categoria 
              ? 'bg-[#0d372a] text-white border-[#0d372a]' 
              : 'bg-white text-[#20513c] border-[#d0e6d0] hover:bg-[#f0f5f0]'
            }`}
          >
            {categoria}
          </button>
        ))}
      </div>
      
      {/* Griglia dei progetti */}
      <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2 lg:grid-cols-3'} ${isMobile ? 'gap-4' : 'gap-8'}`}>
        {progettiFiltered.map((progetto) => (
          <div key={progetto.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className={`relative ${isMobile ? 'h-52' : 'h-64'} overflow-hidden`}>
              <Image 
                src={progetto.immagine} 
                alt={progetto.titolo} 
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-[#20513c]">{progetto.titolo}</h3>
                <span className="bg-[#e6f0e6] text-[#20513c] px-2 py-1 text-xs rounded-full">{progetto.categoria}</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{progetto.luogo}, {progetto.anno}</p>
              <p className="text-gray-700 mb-4">{progetto.descrizione}</p>
              <button className="text-[#20513c] hover:text-[#0d372a] font-medium inline-flex items-center transition">
                Visualizza Dettagli
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
