import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="grid items-center gap-10 md:grid-cols-[3fr,2fr]">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-sky-500/40 bg-sky-500/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-400">
            SPK Integrity
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            Multi-disciplinary CAD &amp; Power Infrastructure Solutions.
          </h1>
          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            Established as a multi-disciplinary solutions provider, SPK Integrity bridges the gap
            between digital design and physical infrastructure. We specialize in the sales,
            implementation and support of world-class CAD softwares, 3D design and rendering tools,
            remote access solutions and other software, alongside rental, sales and maintenance
            services for power backup systems including UPS, inverters and batteries.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-sky-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
            >
              Request a consultation
            </a>
            <a
              href="/products"
              className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-sky-500/60 hover:text-sky-400"
            >
              View products &amp; solutions
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-sky-500/10 blur-3xl" />
          <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-2xl">
            <div className="mb-4 flex justify-center">
              <Image
                src="/products/featured-product.png"
                alt="Featured SPK Integrity product"
                width={420}
                height={260}
                className="h-40 w-auto rounded-2xl border border-slate-700 object-contain sm:h-52"
              />
            </div>
            <h2 className="text-sm font-semibold text-slate-100">Why partners choose SPK Integrity</h2>
            <ul className="mt-4 space-y-3 text-xs text-slate-300">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>
                  Our 2026-ready portfolio empowers clients with the tools they need to create and
                  the power they need to remain operational 24/7.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>
                  Transparent, integrity-driven dealings in software licensing, service contracts and
                  long-term rental agreements.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>
                  Focus on uptime through robust power backup and proactive support, ensuring design
                  and production environments avoid costly downtime.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-slate-50">About SPK Integrity</h2>
        <p className="max-w-2xl text-sm text-slate-300">
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
              className="flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
            >
              <h3 className="text-sm font-semibold text-slate-100">{card.title}</h3>
              <p className="text-xs text-slate-300">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-sky-500/40 bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-sky-500/10 px-6 py-7 sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-50">
            Ready to discuss your integrity challenges?
          </h2>
          <p className="mt-1 text-xs text-slate-200 sm:text-sm">
            Share your current issues, asset scope, and timelines. We&apos;ll respond with a focused
            approach and next steps.
          </p>
        </div>
        <a
          href="/contact"
          className="mt-4 inline-flex items-center justify-center rounded-md bg-sky-500 px-4 py-2 text-xs font-medium text-slate-950 shadow shadow-sky-500/40 transition hover:bg-sky-400 sm:mt-0 sm:text-sm"
        >
          Contact SPK Integrity
        </a>
      </section>
    </div>
  );
}
