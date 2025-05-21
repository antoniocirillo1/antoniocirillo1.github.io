import { useState, useEffect } from 'react';

/**
 * Hook personalizzato per rilevare se il dispositivo è mobile
 * @param {number} mobileBreakpoint - Il breakpoint in pixel sotto il quale considerare il dispositivo mobile
 * @returns {boolean} True se il dispositivo è mobile, false altrimenti
 */
export const useIsMobile = (mobileBreakpoint = 768) => {
  // Inizializziamo con false perché il rendering iniziale avviene lato server
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Questa parte viene eseguita solo lato client
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };
    
    // Verifica iniziale
    checkIsMobile();
    
    // Ascolta i cambiamenti di dimensione della finestra
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [mobileBreakpoint]);
  
  return isMobile;
};
