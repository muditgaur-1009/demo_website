import Image from 'next/image';

const productGroups = [
  {
    name: 'Multi-Brand CAD Software Solutions',
    items: [
      'GstarCAD: specialized offerings for the AEC industry.',
      'Autodesk AutoCAD 2026 and Revit with Generative Design and AI automation modules.',
      'ZWCAD for cost-effective, compatible CAD drafting.',
      'Specialized tools for Civil/Structural and Architecture disciplines.',
      'D5 and V-Ray by Chaos for high-quality rendering and visualization.',
      'SketchUp for intuitive 3D modelling.',
      'Splashtop for secure remote access to design workstations.',
      'Adobe and CorelDRAW for creative and documentation workflows.',
    ],
  },
  {
    name: 'Power Backup Solutions',
    items: [
      'Online UPS systems from 1 KVA to 500 KVA for IT parks, plants and offices.',
      'Industrial inverters for machinery, labs and other sensitive equipment.',
      'Advanced SMF and tubular batteries from brands like Exide, Amaron and Luminous.',
      'Flexible rental and lease options with all-inclusive maintenance and scalability.',
    ],
  },
  {
    name: 'Multibrand Hardware Infrastructure solutions',
    items: [
      'Computing: Enterprise-grade rack, blade, and tower servers for high-performance data processing.',
      'Storage: Scalable NAS (Network Attached Storage) and SAN (Storage Area Network) systems for reliable data backup, archiving, and virtualization.',
      'Networking',
    ],
  },
  
];

const productSections = [
  { 
    id: 'software', 
    title: 'SOFTWARE',
    images: [
      { src: '/technologies/autocad.png', alt: 'AutoCAD', width: 140, height: 40 },
      { src: '/technologies/3dsmax.png', alt: '3ds Max', width: 130, height: 40 },
      { src: '/technologies/navisworks.png', alt: 'Navisworks', width: 150, height: 40 },
      { src: '/technologies/logo_wide_blue.png', alt: 'Software Logo', width: 150, height: 40 },
      { src: '/technologies/sketchup.png', alt: 'SketchUp', width: 130, height: 40 },
    ]
  },
  { 
    id: 'power-backup', 
    title: 'POWER BACK UP SOLUTIONS',
    subcategories: [
      { 
        id: 'ups', 
        title: 'UPS', 
        images: [
          { src: '/brands/schneider_electric.jpg', alt: 'Schneider Electric', width: 130, height: 40 },
          { src: '/brands/apc.png', alt: 'APC', width: 100, height: 40 },
          { src: '/brands/luminous.png', alt: 'Luminous', width: 120, height: 40 },
          { src: '/brands/bpe.png', alt: 'BPE', width: 220, height: 80 },
          { src: '/brands/vertiv-seeklogo.png', alt: 'Vertiv', width: 130, height: 40 }
        ]
      },
      { 
        id: 'inverter', 
        title: 'Inverter', 
        images: [
          { src: '/brands/luminous.png', alt: 'Luminous', width: 120, height: 40 },
          { src: '/brands/microtek.png', alt: 'Microtek', width: 130, height: 40 }
        ]
      },
      { 
        id: 'battery', 
        title: 'Battery', 
        images: [
          { src: '/brands/exide.png', alt: 'Exide', width: 120, height: 40 },
          { src: '/brands/amaron-quanta.png', alt: 'Amaron Quanta', width: 150, height: 40 },
          { src: '/brands/rocket.png', alt: 'Rocket', width: 220, height: 80 }
        ]
      }
    ]
  },
  { 
    id: 'plugin', 
    title: 'PLUGIN',
    images: [
      { src: '/brands/d5render-logo-hor-gradient-dark-en.png', alt: 'D5 Render', width: 250, height: 80 }
    ]
  },
  { 
    id: 'remote-access', 
    title: 'REMOTE ACCESS',
    images: [
      { src: '/technologies/solidworks.png', alt: 'SolidWorks', width: 250, height: 80 }
    ]
  },
  { 
    id: 'hardware', 
    title: 'HARDWARE',
    subcategories: [
      { id: 'workstation', title: 'Workstation', items: ['HP', 'DELL', 'LENOVO', 'ASUS', 'ACER'] },
      { id: 'storage', title: 'Storage', items: ['HP', 'DELL', 'LENOVO', 'SYNOLOGY'] },
      { id: 'server', title: 'Server', items: ['HP', 'DELL', 'LENOVO'] }
    ]
  },
];

export default function ProductsPage() {
  return (
    <div className="space-y-16">
      <header className="space-y-3 text-center">
        <h1 className="text-3xl font-bold text-black sm:text-4xl">
          Products &amp; Solutions
        </h1>
        <p className="mx-auto max-w-2xl text-sm text-black">
          SPK Integrity combines world-class CAD software with mission-critical power backup
          solutions. Our portfolio is designed around the needs of modern design, engineering and
          production environments in 2026.
        </p>
      </header>

      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12 w-full items-stretch">
        {/* Left Column */}
        <section className="flex flex-col gap-6 lg:w-1/3 shrink-0">
          {productGroups.map((group) => (
            <article
              key={group.name}
              className="flex flex-1 flex-col justify-center gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl">{group.name}</h2>
              <ul className="space-y-4 text-sm text-slate-800 sm:text-base flex-1">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500 shadow-sm" />
                    <span className="leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        {/* Right Column */}
        <div className="flex-1 space-y-16 lg:mt-0 mt-8">
          {productSections.map((section) => (
            <section key={section.id} className="flex flex-col items-center w-full px-4">
              <h2 className="text-lg font-bold uppercase tracking-[0.2em] text-orange-500 mb-4 text-center">
                {section.title}
              </h2>
              <div className="w-full h-0.5 bg-orange-500 mb-10 max-w-4xl mx-auto"></div>
              
              {/* Logo placeholder area */}
              {section.subcategories ? (
                <div className={`grid grid-cols-1 gap-10 w-full max-w-4xl mx-auto items-start mt-4 ${section.id === 'hardware' ? 'md:grid-cols-3' : 'md:grid-cols-1'}`}>
                  {section.subcategories.map(sub => (
                    <div key={sub.id} className="flex flex-col items-center md:items-start w-full">
                      <div className="mb-6 flex flex-col items-center md:items-start">
                        <h3 className="text-base font-bold text-orange-500 mb-2 uppercase tracking-[0.2em]">{sub.title}</h3>
                        <div className="w-8 h-1 bg-orange-400 rounded-full"></div>
                      </div>
                      
                      {'items' in sub && sub.items ? (
                        <ul className="space-y-4 w-full flex flex-col items-center md:items-start">
                          {sub.items.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-center gap-4 group cursor-default transition-all duration-300 hover:translate-x-2">
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-100 group-hover:border-orange-300 group-hover:shadow-md transition-all duration-300">
                                <span className="h-2 w-2 rounded-full bg-slate-300 group-hover:bg-orange-500 group-hover:scale-125 transition-all duration-300" />
                              </span>
                              <span className="font-bold text-slate-700 tracking-widest group-hover:text-orange-500 transition-colors duration-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : 'images' in sub && sub.images ? (
                        <div className="flex flex-wrap gap-8 w-full items-center justify-center md:justify-start">
                          {sub.images.map((img: any, idx: number) => (
                            <div key={idx} className="relative w-[150px] h-[60px] flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-100 p-2 hover:shadow-md hover:scale-105 transition-all duration-300">
                              <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-contain p-2"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-wrap items-center justify-center min-h-[100px] w-full h-full">
                          <div className="rounded-lg border border-dashed border-slate-300 p-4 text-center w-full h-full bg-slate-50/50 flex items-center justify-center">
                            <span className="text-slate-500 text-xs italic font-medium">Logos for {sub.title}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap items-center justify-center gap-12 min-h-[100px] w-full max-w-4xl mx-auto">
                  {section.images && section.images.length > 0 ? (
                    section.images.map((img, idx) => (
                      <div key={idx} className="relative w-[150px] h-[60px] flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-100 p-2 hover:shadow-md hover:scale-105 transition-all duration-300">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    ))
                  ) : (
                    <div className="rounded-lg border border-dashed border-slate-300 p-8 text-center w-full bg-slate-50/50">
                      <span className="text-slate-500 text-sm italic font-medium">Brand logos for {section.title} will be placed here</span>
                    </div>
                  )}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
          Rental &amp; service advantages
        </h2>
        <p className="max-w-2xl text-sm text-black">
          Our flexible power rental model offers zero capex, all-inclusive maintenance and easy
          scalability as your business grows. For CAD, we help you stay compliant, up to date and
          fully supported across software and hardware.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
          Technical services &amp; support excellence
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 text-xs text-black shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-sm font-semibold text-black">Hardware services (UPS / batteries)</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                <span>24/7 emergency support with dedicated on-site technicians for power issues.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                <span>Preventive maintenance (AMC) with scheduled health checks to maximise UPS and battery life.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                <span>Load testing and audits to analyse power requirements and optimise energy use.</span>
              </li>
            </ul>
          </div>
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 text-xs text-black shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-sm font-semibold text-black">Software support (CAD / IT)</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                <span>Version upgrades and smooth transitions to the latest 2026 releases.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                <span>Customisation of CAD environments with macros and plugins for your workflows.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                <span>Cloud integration support to move teams to secure, centralised design repositories.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
