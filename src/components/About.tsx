export default function About() {
  const ArkonLogo = () => (
    <svg viewBox='0 0 100 100' className='w-20 h-20 mx-auto mb-8'>
      {/* Colorful starburst pattern */}
      <g transform='translate(50,50)'>
        {/* Top */}
        <rect
          x='-2'
          y='-35'
          width='4'
          height='15'
          rx='2'
          fill='#4A5EE8'
          transform='rotate(0)'
        />
        <rect
          x='-2'
          y='-35'
          width='4'
          height='15'
          rx='2'
          fill='#6366F1'
          transform='rotate(30)'
        />
        <rect
          x='-2'
          y='-35'
          width='4'
          height='15'
          rx='2'
          fill='#00D4FF'
          transform='rotate(60)'
        />
        <rect
          x='-2'
          y='-35'
          width='4'
          height='15'
          rx='2'
          fill='#00C4A7'
          transform='rotate(90)'
        />
        <rect
          x='-2'
          y='-35'
          width='4'
          height='15'
          rx='2'
          fill='#34D399'
          transform='rotate(120)'
        />
        <rect
          x='-2'
          y='-35'
          width='4'
          height='15'
          rx='2'
          fill='#FDE047'
          transform='rotate(150)'
        />
        <rect
          x='-2'
          y='-35'
          width='4'
          height='15'
          rx='2'
          fill='#FB7185'
          transform='rotate(180)'
        />
        <rect
          x='-2'
          y='-35'
          width='4'
          height='15'
          rx='2'
          fill='#F97316'
          transform='rotate(210)'
        />
        <rect
          x='-2'
          y='-35'
          width='4'
          height='15'
          rx='2'
          fill='#EF4444'
          transform='rotate(240)'
        />
        <rect
          x='-2'
          y='-35'
          width='4'
          height='15'
          rx='2'
          fill='#DC2626'
          transform='rotate(270)'
        />
        <rect
          x='-2'
          y='-35'
          width='4'
          height='15'
          rx='2'
          fill='#059669'
          transform='rotate(300)'
        />
        <rect
          x='-2'
          y='-35'
          width='4'
          height='15'
          rx='2'
          fill='#0891B2'
          transform='rotate(330)'
        />
      </g>
    </svg>
  );

  return (
    <section id='about' className='py-20 bg-black relative'>
      {/* Subtle Background Pattern */}
      <div className='absolute inset-0 opacity-3'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className='max-w-4xl mx-auto px-6 text-center relative z-10'>
        {/* Company Logo */}
        <div className='mb-8'>
          <ArkonLogo />
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight'>
            Arkon Technology & Solutions
          </h2>
          <div className='text-gray-400 text-lg font-medium tracking-wider uppercase'>
            Re-think • Re-design • Re-invent
          </div>
        </div>

        {/* About Paragraph */}
        <div className='bg-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10'>
          <p className='text-xl md:text-2xl text-gray-300 leading-relaxed font-light'>
            At Arkon Technology & Solutions, we are your comprehensive
            technology partner specializing in
            <span className='text-white font-medium'>
              {" "}
              hardware, software, and networking solutions
            </span>
            . From custom-configured PCs and premium laptops to enterprise
            workstations and servers, we deliver cutting-edge technology that
            drives your success. Our expertise extends beyond sales to include
            <span className='text-white font-medium'>
              {" "}
              expert repair services, software installations, and complete
              system configurations
            </span>
            . Whether you need a gaming rig, business workstation, UPS backup
            systems, or specialized networking equipment, we provide{" "}
            <span className='text-white font-medium'>
              new, refurbished, and rental options
            </span>{" "}
            to fit every budget. With over 10+ years of experience, certified
            technicians, and a commitment to excellence, we transform technology
            challenges into seamless solutions for individuals and businesses
            alike.
          </p>
        </div>
      </div>
    </section>
  );
}
