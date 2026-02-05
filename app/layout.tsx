import type { Metadata } from 'next';
import './tailwind.generated.css';
import './globals.css';
import Image from 'next/image';

const TECHNOLOGIES = [
  { name: 'AutoCAD', src: '/technologies/autocad.png', width: 140, height: 40 },
  { name: 'Revit', src: '/technologies/revit.png', width: 120, height: 40 },
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
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo-spk-integrity.jpg"
                  alt="SPK Integrity Logo"
                  width={64}
                  height={64}
                  className="h-14 w-14 rounded-full border border-sky-500/40 bg-slate-900 object-contain"
                />
                <div>
                  <div className="text-sm font-semibold tracking-[0.18em] text-sky-400">
                    SPK INTEGRITY
                  </div>
                  <div className="text-xs text-slate-400">
                    Serving customers with Trust !
                  </div>
                </div>
              </div>
              <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
                <a href="/" className="hover:text-sky-400">
                  Home
                </a>
                <a href="/products" className="hover:text-sky-400">
                  Products
                </a>
                <a href="/contact" className="hover:text-sky-400">
                  Contact
                </a>
              </nav>
            </div>
          </header>

          <main className="flex-1">
            <div className="mx-auto max-w-6xl px-4 py-10">{children}</div>
          </main>

          <section className="relative z-10">
            <div className="mx-auto max-w-6xl px-4 space-y-4">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/90 px-6 py-6 text-center shadow-xl shadow-slate-950/60 backdrop-blur sm:px-8">
                <h2 className="text-base font-semibold tracking-tight text-slate-50">
                  Our Technologies.
                </h2>
                <div className="brands-marquee mt-4 overflow-hidden">
                  <div className="tech-marquee-track flex items-center gap-x-10 whitespace-nowrap">
                    {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, index) => (
                      <Image
                        key={`${tech.name}-${index}`}
                        src={tech.src}
                        alt={tech.name}
                        width={tech.width}
                        height={tech.height}
                        className="h-7 w-auto opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="-mb-10 rounded-3xl border border-slate-800 bg-slate-900/90 px-6 py-6 text-center shadow-xl shadow-slate-950/60 backdrop-blur sm:px-8">
                <h2 className="text-base font-semibold tracking-tight text-slate-50">
                  Brands We Deal With.
                </h2>
                <div className="brands-marquee mt-4 overflow-hidden">
                  <div className="brands-marquee-track flex items-center gap-x-10 whitespace-nowrap">
                    {[...BRANDS, ...BRANDS].map((brand, index) => (
                      <Image
                        key={`${brand.name}-${index}`}
                        src={brand.src}
                        alt={brand.name}
                        width={brand.width}
                        height={brand.height}
                        className="h-7 w-auto opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="border-t border-slate-800 bg-slate-950 pt-14">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row">
              <div>
                &copy; {new Date().getFullYear()} SPK Integrity. All rights reserved.
              </div>
              <div className="flex gap-4">
                <span>Integrity &bull; Safety &bull; Reliability</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
