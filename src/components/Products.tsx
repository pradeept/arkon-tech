import React, { useRef } from "react";

export default function Products() {
  const scrollRef = useRef(null);

  const scroll = (direction: string) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 400;
      //@ts-ignore
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const products = [
    {
      id: 1,
      title: "MacBook Pro & Air",
      subtitle: "Premium Apple Laptops",
      description:
        "Latest MacBook models with M-series chips. Perfect for creative professionals and power users.",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop&crop=center",
      specs: [
        "M3 Pro/Max Chips",
        "Up to 128GB RAM",
        "8TB SSD Storage",
        "Liquid Retina Display",
      ],
      price: "From ₹1,29,900",
    },
    {
      id: 2,
      title: "Gaming PCs",
      subtitle: "High-Performance Rigs",
      description:
        "Custom-built gaming systems with latest GPUs and processors for ultimate gaming experience.",
      image:
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&h=400&fit=crop&crop=center",
      specs: [
        "RTX 4080/4090",
        "Intel i9/AMD Ryzen 9",
        "32GB DDR5 RAM",
        "RGB Lighting",
      ],
      price: "From ₹1,50,000",
    },
    {
      id: 3,
      title: "Windows Laptops",
      subtitle: "Business & Personal",
      description:
        "Wide range of Windows laptops from top brands. Configured for productivity and performance.",
      image:
        "https://images.unsplash.com/photo-1587614297882-0954a02d57f7?w=600&h=400&fit=crop&crop=center",
      specs: [
        "Intel/AMD Processors",
        "Up to 32GB RAM",
        "SSD Storage",
        "Windows 11 Pro",
      ],
      price: "From ₹35,000",
    },
    {
      id: 4,
      title: "UPS Systems",
      subtitle: "Uninterrupted Power",
      description:
        "Reliable UPS solutions for home and office. Complete installation and maintenance services.",
      image:
        "https://images-cdn.ubuy.co.in/63c75cbb7cbf302baa73f0f8-back-ups-battery-backup-intelligent-lcd.jpg",
      specs: [
        "1KVA to 10KVA",
        "Pure Sine Wave",
        "LCD Display",
        "Auto Voltage Regulation",
      ],
      price: "From ₹3,500",
    },
    {
      id: 5,
      title: "Custom Workstations/Servers",
      subtitle: "Professional Systems",
      description:
        "Tailored workstations for professionals, content creators, and specialized business needs.",
      image:
        "https://brightlio.com/wp-content/uploads/2023/08/Single-Server-Colocation-3-1024x576.png",
      specs: [
        "Xeon/Threadripper",
        "ECC Memory",
        "Professional GPUs",
        "Multi-Monitor Support",
      ],
      price: "From ₹80,000",
    },
    {
      id: 6,
      title: "Networking & Surveillance Gear",
      subtitle: "CCTV, Firewall, Switches & Access Points",
      description:
        "Robust network and surveillance infrastructure including enterprise-grade firewalls, high-definition CCTV systems, managed switches, and reliable wireless access points for seamless connectivity and security.",
      image:
        "https://images.unsplash.com/photo-1750711731797-25c3f2551ff8?w=600&h=400&fit=crop&crop=center",
      specs: [
        "4K IP CCTV Cameras",
        "Next-Gen Firewall Protection",
        "24/48 Port Managed Switches",
        "Wi-Fi 6 Access Points",
      ],
      price: "From ₹9,999",
    },
    {
      id: 7,
      title: "Premises Security Solutions",
      subtitle: "Security Systems & Door Access Control",
      description:
        "Comprehensive physical security systems featuring intrusion alarms, biometric door access controls, RFID readers, and centralized security management for commercial and residential use.",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop&crop=center",
      specs: [
        "Biometric & RFID Door Access",
        "Intrusion Detection Systems",
        "Central Monitoring Software",
        "Smart Lock Integration",
      ],
      price: "From ₹4,999",
    },
  ];

  return (
    <section id='products' className='py-20 bg-black relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-1/4 left-10 w-72 h-72 bg-white rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/4 right-10 w-96 h-96 bg-white rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-5xl text-white md:text-6xl font-bold mb-6 tracking-tight'>
            Our Products
          </h2>
          <p className='text-2xl text-gray-400 max-w-3xl mx-auto '>
            New, refurbished, and rental options available. From premium laptops
            to custom-built systems - affordable technology solutions for every
            need.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className='flex justify-between items-center mb-8'>
          <div className='flex space-x-4'>
            <button
              onClick={() => scroll("left")}
              className='w-12 h-12  text-white cursor-pointer bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className='w-12 h-12 bg-white/10 text-white cursor-pointer hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
          <div className='text-sm text-gray-400'>Scroll to explore →</div>
        </div>

        {/* Horizontal Scrolling Container */}
        <div
          ref={scrollRef}
          className='flex space-x-6 overflow-x-auto scrollbar-hide pb-6'
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className='flex-none w-96 bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:bg-white/10 group'
            >
              {/* Product Image */}
              <div className='relative h-56 overflow-hidden'>
                <img
                  src={product.image}
                  alt={product.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300'></div>
                <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-black text-xs px-3 py-1 rounded-full font-semibold'>
                  {product.price}
                </div>
              </div>

              {/* Product Info */}
              <div className='p-6'>
                <div className='mb-4'>
                  <h3 className='text-2xl font-bold text-gray-200 group-hover:text-yellow-500 mb-1 group-hover:text-gray-200 transition-colors duration-300'>
                    {product.title}
                  </h3>
                  <p className='text-gray-400 text-sm font-medium'>
                    {product.subtitle}
                  </p>
                </div>

                <p className='text-gray-300 mb-6 leading-relaxed'>
                  {product.description}
                </p>

                {/* Specifications */}
                <div className='mb-6'>
                  <div className='grid grid-cols-2 gap-2'>
                    {product.specs.map((spec, index) => (
                      <div
                        key={index}
                        className='text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-lg border border-white/10'
                      >
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className='flex justify-center'>
                  <a
                    href='#contact'
                    className=' bg-white text-black py-3 px-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform'
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-16'>
          <p className='text-gray-400 mb-6'>
            Need a custom configuration? We build systems tailored to your exact
            requirements.
          </p>
          <a
            href='#contact'
            className='bg-white  text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform'
          >
            Request Custom Build
          </a>
        </div>
      </div>

      {/* Custom scrollbar hide styles */}
      {/* @ts-ignore */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
