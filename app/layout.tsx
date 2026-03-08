import type { Metadata } from 'next';
import { Inter, Iceberg } from 'next/font/google';
import './tailwind.generated.css';
import './globals.css';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });
const iceberg = Iceberg({ weight: '400', subsets: ['latin'] });

const TECHNOLOGIES = [
  { name: 'AutoCAD', src: '/technologies/autocad.png', width: 140, height: 40 },
  { name: 'Revit', src: '/brands/d5render-logo-hor-gradient-dark-en.png', width: 120, height: 40 },
  { name: '3ds Max', src: '/technologies/3dsmax.png', width: 130, height: 40 },
  { name: 'SolidWorks', src: '/technologies/solidworks.png', width: 150, height: 40 },
  { name: 'SketchUp', src: '/technologies/sketchup_logo.png', width: 130, height: 40 },
  { name: 'Navisworks', src: '/technologies/navisworks.png', width: 150, height: 40 },
];

const BRANDS = [
  { name: 'Exide', src: '/brands/exide.png', width: 120, height: 40 },
  { name: 'Emerson', src: '/brands/emerson.png', width: 120, height: 40 },
  { name: 'APC', src: '/brands/apc.png', width: 100, height: 40 },
  { name: 'Luminous', src: '/brands/luminous.png', width: 120, height: 40 },
  { name: 'Microtek', src: '/brands/microtek.png', width: 130, height: 40 },
  { name: 'Rocket', src: '/brands/rocket.png', width: 200, height: 500 },
  { name: 'Amaron Quanta', src: '/brands/amaron-quanta.png', width: 150, height: 40 },
  { name: 'BPE', src: '/brands/bpe.png', width: 1000, height: 40 },
  { name: 'Schneider Electric', src: '/brands/schneider_electric.jpg', width: 160, height: 40 },
  { name: 'Eaton', src: '/brands/eaton.jpg', width: 120, height: 40 },
  { name: 'Vertiv', src: '/brands/vertiv-seeklogo.png', width: 130, height: 40 },
];

export const metadata: Metadata = {
  title: 'SPK Integrity | CAD & Power Solutions',
  description:
    'SPK Integrity is a multi-disciplinary solutions provider delivering world-class CAD software, design tools and mission-critical power backup systems for always-on operations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen text-[#1D1D1F] antialiased selection:bg-blue-100 selection:text-blue-900 relative">
        <div className="fixed inset-0 -z-10 h-full w-full">
          <Image 
            src="/brands/wmremove-transformed.jpeg" 
            alt="Website Background" 
            fill 
            priority
            className="object-cover opacity-100" 
          />
        </div>
        <div className="flex min-h-screen flex-col selection:bg-blue-100 relative z-10">
          <header className="sticky top-0 z-50 border-b border-[#E5E5E7] bg-white/70 backdrop-blur-md transition-all">
            <div className="mx-auto flex max-w-6xl flex-col md:flex-row items-center justify-between gap-4 md:gap-0 px-6 py-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <Image
                  src="/logo-spk-integrity.jpg"
                  alt="SPK Integrity Logo"
                  width={70}
                  height={70}
                  className="cursor-pointer rounded-xl border border-[#E5E5E7] bg-white object-contain shadow-sm transition-transform duration-300 hover:scale-150"
                />
                <div>
                  <div className={`text-3xl font-bold tracking-wider text-[#F97316] ${iceberg.className}`}>
                    SPK Integr<span className="text-black">i</span>ty
                  </div>
                  <div className="text-sm font-medium text-[#86868B]">
                    Serving customers with Trust
                  </div>
                </div>
              </div>
              <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm font-medium text-[#6E6E73] mt-2 md:mt-0">
                <a href="/" className="transition-colors duration-200 hover:text-[#1D1D1F]">
                  Home
                </a>
                <a href="/products" className="transition-colors duration-200 hover:text-[#1D1D1F]">
                  Products
                </a>
                <a href="/contact" className="transition-colors duration-200 hover:text-[#1D1D1F]">
                  Contact
                </a>
              </nav>
            </div>
          </header>

          <main className="flex-1">
            <div className="mx-auto max-w-6xl px-6 py-12 md:py-24">{children}</div>
          </main>

          <section className="relative z-10 mx-auto max-w-8xl w-full px-6 py-12">
            <div className="flex flex-col gap-8">
              <div className="rounded-2xl border border-[#E5E5E7] bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-md">
                <h2 className="text-lg font-semibold tracking-tight text-[#1D1D1F]">
                  Software Brands We Deal With
                </h2>
                <div className="brands-marquee mt-8 overflow-hidden">
                  <div className="tech-marquee-track flex items-center gap-x-12 whitespace-nowrap  transition hover:opacity-100">
                    {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, index) => (
                      <Image
                        key={`${tech.name}-${index}`}
                        src={tech.src}
                        alt={tech.name}
                        width={tech.width}
                        height={tech.height}
                        className="h-8 w-auto transition duration-300"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#E5E5E7] bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-md">
                <h2 className="text-lg font-semibold tracking-tight text-[#1D1D1F]">
                  Hardware Brands We Deal With
                </h2>
                <div className="brands-marquee mt-8 overflow-hidden">
                  <div className="brands-marquee-track flex items-center gap-x-12 whitespace-nowrap opacity-80 transition hover:opacity-100">
                    {[...BRANDS, ...BRANDS].map((brand, index) => (
                      <Image
                        key={`${brand.name}-${index}`}
                        src={brand.src}
                        alt={brand.name}
                        width={brand.width}
                        height={brand.height}
                        className="h-8 w-auto transition duration-300"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="mt-16 border-t border-[#E5E5E7] bg-white/60 backdrop-blur-sm pt-12 relative z-10">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-center text-sm text-[#86868B] sm:flex-row sm:text-left">
              <div>
                &copy; {new Date().getFullYear()} SPK Integrity. All rights reserved.
              </div>
              <div className="flex font-medium text-[#6E6E73] flex-wrap justify-center text-center">
                Integrity &nbsp;&middot;&nbsp; Safety &nbsp;&middot;&nbsp; Reliability
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
