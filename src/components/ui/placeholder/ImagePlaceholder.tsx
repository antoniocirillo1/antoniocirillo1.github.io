import React from 'react';

type ImagePlaceholderProps = {
  category?: 'kitchen' | 'furniture' | 'wardrobe' | 'workshop' | 'testimonial' | 'project' | 'map';
  width?: number;
  height?: number;
  className?: string;
};

/**
 * Generate a placeholder image with woodworking-themed colors and patterns
 * This is helpful during development before real images are available
 */
export default function ImagePlaceholder({ 
  category = 'furniture', 
  width = 600, 
  height = 400, 
  className = '' 
}: ImagePlaceholderProps) {
  // Color scheme based on woodwork theme
  const colors = {
    kitchen: {
      bg: '#f8f0e3',
      accent: '#8b4513',
      pattern: '#d7b38c'
    },
    furniture: {
      bg: '#e6d2b5',
      accent: '#654321',
      pattern: '#b68d4c'
    },
    wardrobe: {
      bg: '#edd9c0',
      accent: '#3d2314',
      pattern: '#a67c52'
    },
    workshop: {
      bg: '#d9ceb2',
      accent: '#7d4627',
      pattern: '#b2a284'
    },
    testimonial: {
      bg: '#f5e8d3',
      accent: '#935e38',
      pattern: '#d1bea3'
    },
    project: {
      bg: '#e0c9a6',
      accent: '#5d4037',
      pattern: '#b39b6f'
    },
    map: {
      bg: '#eae6dc',
      accent: '#909090',
      pattern: '#c5c5c5'
    }
  };

  const selectedColor = colors[category];

  return (
    <div 
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{ 
        width: width || '100%',
        height: height || '100%',
        backgroundColor: selectedColor.bg,
      }}
    >
      {/* Decorative wood grain pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="relative w-full h-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-full h-2 transform -skew-y-3"
              style={{ 
                backgroundColor: selectedColor.pattern,
                top: `${i * 15}%`,
                left: 0
              }}
            />
          ))}
        </div>
      </div>

      {/* Category icon */}
      <div 
        className="rounded-full p-4 bg-opacity-90 z-10"
        style={{ backgroundColor: selectedColor.accent }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-12 h-12">
          {category === 'kitchen' && (
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
          )}
          {category === 'furniture' && (
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          )}
          {category === 'wardrobe' && (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
          )}
          {category === 'workshop' && (
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
          )}
          {category === 'testimonial' && (
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          )}
          {category === 'project' && (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
          )}
          {category === 'map' && (
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
          )}
        </svg>
      </div>

      {/* Category label */}
      <div 
        className="absolute bottom-4 left-0 right-0 text-center font-medium text-white py-1 px-4"
        style={{ backgroundColor: `${selectedColor.accent}CC` }}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </div>
    </div>
  );
}
