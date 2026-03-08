import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="grid items-center gap-12 grid-cols-1 xl:grid-cols-[1fr,1fr] min-h-[85vh]">
        <div className="space-y-8 text-center xl:text-left flex flex-col items-center xl:items-start xl:pr-8 py-10">
          <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-6xl max-w-3xl leading-tight">
            Multi-disciplinary Softwares, Hardwares, CAD &amp; Power Infrastructure Solutions.
          </h1>
          <p className="max-w-2xl text-base text-black sm:text-lg leading-relaxed">
            Established as a multi-disciplinary solutions provider, SPK Integrity bridges the gap between digital design and physical infrastructure. We specialize in the sales, implementation, and support of world-class CAD software, 3D design and rendering tools, remote access solutions, and other enterprise software. We also provide rental, sales, and maintenance services for power backup systems including UPS, inverters, and batteries through a flexible rental model with zero capex and easy scalability. For CAD solutions, we help organizations stay compliant, up to date, and fully supported across software and hardware environments.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center xl:justify-start w-full sm:w-auto pt-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-4 text-base font-medium text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-400"
            >
              Request a consultation
            </a>
            <a
              href="/products"
              className="inline-flex items-center justify-center rounded-md border-2 border-slate-700 bg-slate-900 px-8 py-4 text-base font-medium text-slate-100 transition hover:border-orange-500/60 hover:text-orange-400"
            >
              View products &amp; solutions
            </a>
          </div>
        </div>

        <div className="relative h-full w-full min-h-[600px] flex items-stretch py-10">
          <div className="absolute inset-0 rounded-[3rem] bg-orange-500/10 blur-3xl transform scale-110" />
          <div className="relative flex w-full flex-col justify-center rounded-[2.5rem] border border-slate-200 bg-white p-10 sm:p-14 shadow-2xl">
            <div className="mb-10 flex justify-center">
              <Image
                src="/products/featured-product.png"
                alt="Featured SPK Integrity product"
                width={800}
                height={600}
                className="h-64 w-auto rounded-3xl border border-slate-200 object-contain md:h-96 lg:h-[450px] bg-white shadow-sm transition-transform hover:scale-105 duration-500"
                priority
              />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl mb-4">Why partners choose SPK Integrity</h2>
            <ul className="mt-6 space-y-6 text-base text-slate-800 sm:text-lg flex-1">
              <li className="flex items-start gap-4">
                <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-orange-500 shadow-sm" />
                <span className="leading-relaxed">
                  Our 2026-ready portfolio empowers clients with the tools they need to create and
                  the power they need to remain operational 24/7.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-orange-500 shadow-sm" />
                <span className="leading-relaxed">
                  Transparent, integrity-driven dealings in software licensing, service contracts and
                  long-term rental agreements.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-orange-500 shadow-sm" />
                <span className="leading-relaxed">
                  Focus on uptime through robust power backup and proactive support, ensuring design
                  and production environments avoid costly downtime.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-black">About SPK Integrity</h2>
        <p className="max-w-2xl text-sm text-black">
          SPK Integrity is a Mumbai-based provider of multi-brand software and power solutions. We
          help customers implement leading CAD and design platforms while ensuring their
          infrastructure has the reliable backup power needed to stay productive around the clock.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: 'Integrity',
              body: 'Transparent dealings in software licensing, rentals and service contracts, with clear deliverables and documentation.',
            },
            {
              title: 'Innovation',
              body: 'Bringing the latest AI-integrated CAD tools and 2026 design workflows to engineering teams across India.',
            },
            {
              title: 'Uptime',
              body: 'Ensuring zero downtime through robust UPS, inverter and battery solutions, backed by preventive maintenance.',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-5"
            >
              <h3 className="text-sm font-semibold text-black">{card.title}</h3>
              <p className="text-xs text-black">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-orange-500/40 bg-orange-50 px-6 py-7 flex flex-col items-center justify-between text-center sm:flex-row sm:text-left gap-4 sm:gap-0">
        <div>
          <h2 className="text-base font-semibold text-black">
            Ready to discuss your integrity challenges?
          </h2>
          <p className="mt-1 text-xs text-black sm:text-sm">
            Share your current issues, asset scope, and timelines. We&apos;ll respond with a focused
            approach and next steps.
          </p>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-xs font-medium text-white shadow shadow-orange-500/40 transition hover:bg-orange-400 sm:text-sm whitespace-nowrap"
        >
          Contact SPK Integrity
        </a>
      </section>
    </div>
  );
}
