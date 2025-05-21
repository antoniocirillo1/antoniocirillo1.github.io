"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md relative border-b border-[#e6f0e6]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center w-full">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/hero/newLogo.png" 
              alt="Falegnameria Artigianale" 
              width={isMobile ? 150 : 180} 
              height={isMobile ? 50 : 60} 
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="px-3 py-2 text-gray-800 font-medium hover:text-[#20513c] hover:bg-[#f0f5f0] rounded-md transition-all duration-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <Link href="/chi-siamo" className="px-3 py-2 text-gray-800 font-medium hover:text-[#20513c] hover:bg-[#f0f5f0] rounded-md transition-all duration-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Chi Siamo
            </Link>
            <Link href="/servizi" className="px-3 py-2 text-gray-800 font-medium hover:text-[#20513c] hover:bg-[#f0f5f0] rounded-md transition-all duration-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Servizi
            </Link>
            <Link href="/progetti" className="px-3 py-2 text-gray-800 font-medium hover:text-[#20513c] hover:bg-[#f0f5f0] rounded-md transition-all duration-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Progetti
            </Link>
            <Link href="/contatti" className="px-3 py-2 text-gray-800 font-medium hover:text-[#20513c] hover:bg-[#f0f5f0] rounded-md transition-all duration-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contatti
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`${!isMobile ? 'hidden' : ''} text-white bg-[#20513c] hover:bg-[#0d372a] p-2 rounded-md transition-all duration-300`}
            onClick={toggleMenu}
            aria-label="Menu principale"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && isMobile && (
          <nav className="absolute top-full left-0 right-0 mx-auto w-full bg-white shadow-lg p-4 z-50 border-b border-[#e6f0e6] rounded-b-lg">
            <Link href="/" className="flex items-center text-gray-800 hover:text-[#20513c] hover:bg-[#f0f5f0] transition-all duration-300 py-3 px-4 rounded-md mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="font-medium">Home</span>
            </Link>
            <Link href="/chi-siamo" className="flex items-center text-gray-800 hover:text-[#20513c] hover:bg-[#f0f5f0] transition-all duration-300 py-3 px-4 rounded-md mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-medium">Chi Siamo</span>
            </Link>
            <Link href="/servizi" className="flex items-center text-gray-800 hover:text-[#20513c] hover:bg-[#f0f5f0] transition-all duration-300 py-3 px-4 rounded-md mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="font-medium">Servizi</span>
            </Link>
            <Link href="/progetti" className="flex items-center text-gray-800 hover:text-[#20513c] hover:bg-[#f0f5f0] transition-all duration-300 py-3 px-4 rounded-md mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Progetti</span>
            </Link>
            <Link href="/contatti" className="flex items-center text-gray-800 hover:text-[#20513c] hover:bg-[#f0f5f0] transition-all duration-300 py-3 px-4 rounded-md mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Contatti</span>
            </Link>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <a href="tel:+390000000000" className="flex items-center text-[#20513c] hover:text-[#0d372a] transition-all duration-300 py-2 px-4 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium">Chiamaci ora</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
