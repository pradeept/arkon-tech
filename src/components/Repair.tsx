import { useState } from "react";
import { Phone } from "lucide-react";

type repairData = {
  hardware: {
    title: string;
    icon: string;
    services: {
      name: string;
      description: string;
      turnaround: string;
    }[];
  };
  software: {
    title: string;
    icon: string;
    services: {
      name: string;
      description: string;
      turnaround: string;
    }[];
  };
  network: {
    title: string;
    icon: string;
    services: {
      name: string;
      description: string;
      turnaround: string;
    }[];
  };
};

export default function Repair() {
  const [activeTab, setActiveTab] = useState<
    "hardware" | "software" | "network"
  >("hardware");

  const repairServices: repairData = {
    hardware: {
      title: "Hardware Repair",
      icon: "🔧",
      services: [
        {
          name: "PC & Desktop Issues",
          description: "Motherboard, RAM, storage, and component failures",
          turnaround: "24-48 hrs",
        },
        {
          name: "Laptop Repairs",
          description:
            "Screen replacement, keyboard, trackpad, and internal components",
          turnaround: "2-3 days",
        },
        {
          name: "Server Troubleshooting",
          description: "Enterprise server diagnosis, component replacement",
          turnaround: "Same day",
        },
        {
          name: "Monitor & Display",
          description: "Screen flickering, dead pixels, power issues",
          turnaround: "1-2 days",
        },
      ],
    },
    software: {
      title: "Software Solutions",
      icon: "💻",
      services: [
        {
          name: "OS Installation & Setup",
          description: "Windows, macOS, Linux installation and configuration",
          turnaround: "2-4 hrs",
        },
        {
          name: "Software Installation",
          description:
            "MS Office, Photoshop, AutoCAD, and specialized applications",
          turnaround: "1-2 hrs",
        },
        {
          name: "System Optimization",
          description: "Performance tuning, malware removal, system cleanup",
          turnaround: "3-5 hrs",
        },
        {
          name: "Data Recovery",
          description: "Recover lost files, corrupted drives, system crashes",
          turnaround: "1-3 days",
        },
      ],
    },
    network: {
      title: "Network & Setup",
      icon: "🌐",
      services: [
        {
          name: "Network Configuration",
          description:
            "Router setup, WiFi optimization, network troubleshooting",
          turnaround: "2-4 hrs",
        },
        {
          name: "Remote Setup",
          description: "VPN configuration, remote desktop, cloud integration",
          turnaround: "1-2 hrs",
        },
        {
          name: "Security Setup",
          description: "Firewall configuration, antivirus installation",
          turnaround: "1-3 hrs",
        },
        {
          name: "Printer & Peripherals",
          description:
            "Printer setup, driver installation, connectivity issues",
          turnaround: "1-2 hrs",
        },
      ],
    },
  };

  return (
    <section id='repair' className='py-20 bg-gray-950 relative'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        {/* Header Section */}
        <div className='text-center mb-20'>
          <h2 className='text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight'>
            Expert Repair Services
          </h2>
          <p className='text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8'>
            From hardware failures to software glitches, we diagnose and fix
            technology issues with precision. Fast turnaround, genuine parts,
            and comprehensive warranties.
          </p>

          {/* Quick Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white mb-1'>24hr</div>
              <div className='text-sm text-gray-400'>Avg. Turnaround</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white mb-1'>95%</div>
              <div className='text-sm text-gray-400'>Success Rate</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white mb-1'>6 Months</div>
              <div className='text-sm text-gray-400'>Warranty</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white mb-1'>Free</div>
              <div className='text-sm text-gray-400'>Diagnosis</div>
            </div>
          </div>
        </div>

        {/* Service Tabs */}
        <div className='mb-16'>
          <div className='flex flex-wrap justify-center gap-4 mb-12'>
            {Object.entries(repairServices).map(([key, service]) => (
              <button
                key={key}
                //@ts-ignore
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === key
                    ? "bg-white text-black scale-105"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                }`}
              >
                <span className='text-lg'>{service.icon}</span>
                <span>{service.title}</span>
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div className='bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10'>
            <div className='grid md:grid-cols-2 gap-8'>
              {repairServices[activeTab].services.map((service, index) => (
                <div
                  key={index}
                  className='bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 group'
                >
                  <div className='flex justify-between items-start mb-3'>
                    <h3 className='text-xl font-semibold text-white group-hover:text-gray-200 transition-colors'>
                      {service.name}
                    </h3>
                    <span className='text-sm text-gray-400 bg-white/10 px-2 py-1 rounded-lg'>
                      {service.turnaround}
                    </span>
                  </div>
                  <p className='text-gray-300 leading-relaxed'>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className='mb-20'>
          <h3 className='text-3xl font-bold text-white text-center mb-12'>
            How We Work
          </h3>
          <div className='grid md:grid-cols-4 gap-8'>
            <div className='text-center group'>
              <div className='w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 border border-white/20'>
                <span className='text-2xl'>🔍</span>
              </div>
              <h4 className='text-lg font-semibold text-white mb-2'>
                Diagnosis
              </h4>
              <p className='text-gray-400 text-sm'>
                Free comprehensive analysis of your device issues
              </p>
            </div>
            <div className='text-center group'>
              <div className='w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 border border-white/20'>
                <span className='text-2xl'>💰</span>
              </div>
              <h4 className='text-lg font-semibold text-white mb-2'>Quote</h4>
              <p className='text-gray-400 text-sm'>
                Transparent pricing with no hidden charges
              </p>
            </div>
            <div className='text-center group'>
              <div className='w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 border border-white/20'>
                <span className='text-2xl'>⚡</span>
              </div>
              <h4 className='text-lg font-semibold text-white mb-2'>Repair</h4>
              <p className='text-gray-400 text-sm'>
                Expert technicians using genuine parts
              </p>
            </div>
            <div className='text-center group'>
              <div className='w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 border border-white/20'>
                <span className='text-2xl'>✅</span>
              </div>
              <h4 className='text-lg font-semibold text-white mb-2'>
                Warranty
              </h4>
              <p className='text-gray-400 text-sm'>
                6-month warranty on all repairs and parts
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='text-center bg-white/5 rounded-3xl p-12 backdrop-blur-sm border border-white/10'>
          <h3 className='text-3xl font-bold text-white mb-4'>
            Device Not Working? We Can Help
          </h3>
          <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>
            Don't let technology issues slow you down. Our expert technicians
            are ready to diagnose and fix your problems quickly and affordably.
          </p>
          <a
            href='tel: 9590456789'
            className='bg-white flex justify-center md:max-w-88 text-black px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform flex items-center space-x-3 mx-auto'
          >
            <Phone size={20} />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
