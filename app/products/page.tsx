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
    name: 'CAD Services & Support',
    items: [
      'Software audits to ensure 100% license compliance and reduce legal risk.',
      'Implementation and configuration for on-site and cloud-based design teams.',
      'Expert-led training on 2026 CAD features and AI-driven workflows.',
      'Ongoing technical support, upgrades and environment customization.',
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
];

export default function ProductsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
          Products &amp; Solutions
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          SPK Integrity combines world-class CAD software with mission-critical power backup
          solutions. Our portfolio is designed around the needs of modern design, engineering and
          production environments in 2026.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {productGroups.map((group) => (
          <article
            key={group.name}
            className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
          >
            <h2 className="text-sm font-semibold text-slate-100">{group.name}</h2>
            <ul className="space-y-2 text-xs text-slate-300">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-50">
          Rental &amp; service advantages
        </h2>
        <p className="max-w-2xl text-sm text-slate-300">
          Our flexible power rental model offers zero capex, all-inclusive maintenance and easy
          scalability as your business grows. For CAD, we help you stay compliant, up to date and
          fully supported across software and hardware.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-base font-semibold text-slate-50">
          Technical services &amp; support excellence
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-xs text-slate-300">
            <h3 className="text-sm font-semibold text-slate-100">Hardware services (UPS / batteries)</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>24/7 emergency support with dedicated on-site technicians for power issues.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Preventive maintenance (AMC) with scheduled health checks to maximise UPS and battery life.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Load testing and audits to analyse power requirements and optimise energy use.</span>
              </li>
            </ul>
          </div>
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-xs text-slate-300">
            <h3 className="text-sm font-semibold text-slate-100">Software support (CAD / IT)</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Version upgrades and smooth transitions to the latest 2026 releases.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Customisation of CAD environments with macros and plugins for your workflows.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Cloud integration support to move teams to secure, centralised design repositories.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
