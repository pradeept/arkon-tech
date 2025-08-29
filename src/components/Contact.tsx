import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id='contact' className='py-20 bg-gray-950 relative'>
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-1/4 left-10 w-72 h-72 bg-white rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/4 right-10 w-96 h-96 bg-white rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight'>
            Get In Touch
          </h2>
          <p className='text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed'>
            Ready to solve your technology challenges? Contact our expert team
            for personalized solutions and quick support.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-16'>
          {/* Contact Info */}
          <div className='space-y-8'>
            <div>
              <h3 className='text-3xl font-bold text-white mb-8'>
                Let's Connect
              </h3>
            </div>

            {/* Contact Details */}
            <div className='space-y-6'>
              <div className='flex items-center space-x-4 group'>
                <div className='w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 border border-white/20'>
                  <Phone className='w-6 h-6 text-white' />
                </div>
                <div>
                  <div className='text-white font-semibold'>Call Us</div>
                  <div className='text-gray-400'>+91 9590456789 </div>
                  <div className='text-gray-400'>+91 9341079884</div>
                </div>
              </div>

              <div className='flex items-center space-x-4 group'>
                <div className='w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 border border-white/20'>
                  <Mail className='w-6 h-6 text-white' />
                </div>
                <div>
                  <div className='text-white font-semibold'>Email Us</div>
                  <div className='text-gray-400'>support@arkon.co.in</div>
                </div>
              </div>

              <div className='flex items-center space-x-4 group'>
                <div className='w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 border border-white/20'>
                  <MapPin className='w-6 h-6 text-white' />
                </div>
                <div>
                  <div className='text-white font-semibold'>
                    Visit Our Store
                  </div>
                  <div className='text-gray-400'>
                    112, 5th Cross Road, Nisarga Layout, HAL 2nd Stage,
                    Doopanahalli, Kodihalli,
                    <br />
                    Bengaluru, Karnataka
                  </div>
                </div>
              </div>

              <div className='flex items-center space-x-4 group'>
                <div className='w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 border border-white/20'>
                  <Clock className='w-6 h-6 text-white' />
                </div>
                <div>
                  <div className='text-white font-semibold'>Working Hours</div>
                  <div className='text-gray-400'>
                    Mon-Sat: 9:00 AM - 8:00 PM
                    <br />
                    Sunday: 10:00 AM - 6:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className='pt-8'>
              <div className='bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10'>
                <h4 className='text-white font-semibold mb-4'>
                  Need Immediate Help?
                </h4>
                <div className='flex flex-col sm:flex-row gap-3'>
                  <a
                    href='tel: +91 9590456789'
                    className='flex-1 bg-white text-black py-3 px-4 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2'
                  >
                    <Phone size={18} />
                    <span>Call Now </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className='flex justify-center items-center '>
            <img
              src='/logo.png'
              alt='Logo picture'
              className='w-[400px] rouned-2xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
