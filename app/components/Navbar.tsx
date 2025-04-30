'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/30 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 h-full flex items-center">
            <Link href="/" className="h-[90%] flex items-center">
              <Image 
                src="/logo.png" 
                alt="High Desert Chimney Sweep Logo" 
                width={150} 
                height={50} 
                className="h-full w-auto object-contain"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/about" 
                className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About Us
              </Link>
              <Link 
                href="/services" 
                className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/links" 
                className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Important Links
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <div className="relative w-6 h-6 flex flex-col justify-between">
                <span className={`absolute top-0  w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 top-1/2' : ''
                }`} />
                <span className={`absolute top-1/2 w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`absolute bottom-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 top-1/2' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/about" 
              className="block text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              className="block text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="block text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/links" 
              className="block text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Important Links
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 