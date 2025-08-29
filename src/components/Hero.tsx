export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center justify-center px-6 bg-black'
    >
      {/* Subtle Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className='text-center max-w-6xl mx-auto z-10 my-20'>
        {/* Tagline */}
        <div className='text-gray-400 text-sm font-medium tracking-widest uppercase mb-8 opacity-80'>
          Re-think • Re-design • Re-invent
        </div>

        {/* Main Headline */}
        <h1 className='text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight md:mb-22 '>
          <span className='block text-gray-300 mb-4'>Arkon</span>
          <span className='block text-gray-500 md:text-6xl'>
            Technology & Solutions
          </span>
        </h1>

        {/* Subtitle */}
        <div className='text-lg md:text-xl text-gray-300 mb-4 font-medium'>
          Hardware • Software • Network
        </div>

        {/* Description */}
        <p className='text-xl md:text-xl text-gray-400 mb-10 max-w-4xl mx-auto leading-relaxed font-light'>
          From custom-configured PCs and Mac setups to enterprise network
          infrastructure. We deliver comprehensive technology solutions with
          precision engineering and seamless integration.
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-20'>
          <button
            onClick={() => scrollToSection("products")}
            className='bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform min-w-[220px] text-lg'
          >
            Explore Products
          </button>
          <button
            onClick={() => scrollToSection("repair")}
            className='border-2 border-white/20 text-white px-10 py-4 rounded-full font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300 hover:scale-105 transform min-w-[220px] text-lg'
          >
            Repair Services
          </button>
        </div>

        {/* Services Overview */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16'>
          <div className='text-center group'>
            <div className='w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110 transform'>
              <span className='text-2xl'>🖥️</span>
            </div>
            <h3 className='text-lg font-semibold mb-2'>Custom PCs & Laptops</h3>
            <p className='text-gray-400 text-sm'>Windows • Linux • macOS</p>
          </div>
          <div className='text-center group'>
            <div className='w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110 transform'>
              <span className='text-2xl'>⚡</span>
            </div>
            <h3 className='text-lg font-semibold mb-2'>
              UPS & Power Solutions
            </h3>
            <p className='text-gray-400 text-sm'>
              Setup • Maintenance • Support
            </p>
          </div>
          <div className='text-center group'>
            <div className='w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110 transform'>
              <span className='text-2xl'>🔧</span>
            </div>
            <h3 className='text-lg font-semibold mb-2'>Expert Repairs</h3>
            <p className='text-gray-400 text-sm'>
              All Brands • Quick Turnaround
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className='grid grid-cols-3 gap-8 max-w-2xl mx-auto opacity-80 text-white'>
          <div className='text-center'>
            <div className='text-3xl md:text-4xl font-bold mb-2'>10+</div>
            <div className='text-sm text-gray-400'>Years Experience</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl md:text-4xl font-bold mb-2'>5000+</div>
            <div className='text-sm text-gray-400'>Devices Serviced</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl md:text-4xl font-bold mb-2'>24/7</div>
            <div className='text-sm text-gray-400'>Support Available</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10'>
        <div className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-white/50 transition-colors duration-300'>
          <div className='w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce'></div>
        </div>
      </div>
    </section>
  );
}
