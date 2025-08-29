import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-2xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className='max-w-7xl mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <a href='/' className='flex items-center space-x-3 group'>
            <div className='transform transition-transform duration-300 group-hover:scale-110'>
              {/* <ArkonLogo /> */}
              <img src='./logo.png' className='w-10 h-10' />
            </div>
            <div className='hidden md:block'>
              <div className='text-xl font-semibold tracking-tight text-white'>
                Arkon
              </div>
              <div className='text-xs text-gray-400 -mt-1'>
                Technology & Solutions
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <a
              href='#products'
              className='text-gray-300 hover:text-white transition-all duration-300 font-medium relative group py-2'
            >
              Products
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a
              href='#repair'
              className='text-gray-300 hover:text-white transition-all duration-300 font-medium relative group py-2'
            >
              Repair
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a
              href='#about'
              className='text-gray-300 hover:text-white transition-all duration-300 font-medium relative group py-2'
            >
              About Us
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a
              href='#contact'
              className='bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform'
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 cursor-pointer'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className='w-6 h-6 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-64 mt-4" : "max-h-0"
          }`}
        >
          <div className='bg-black/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-4'>
            <a
              href='#products'
              className='block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-2'
            >
              Products
            </a>
            <a
              href='#repair'
              className='block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-2'
            >
              Repair
            </a>
            <a
              href='#about'
              className='block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-2 '
            >
              About Us
            </a>
            <a
              href='#contact'
              className='block w-full bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 text-center mt-4'
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
