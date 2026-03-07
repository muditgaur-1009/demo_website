import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="grid items-center gap-10 md:grid-cols-[3fr,2fr]">
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Multi-disciplinary Softwares, Hardwares, CAD &amp; Power Infrastructure Solutions.
          </h1>
          <p className="max-w-xl text-sm text-black sm:text-base">
            Established as a multi-disciplinary solutions provider, SPK Integrity bridges the gap between digital design and physical infrastructure. We specialize in the sales, implementation, and support of world-class CAD software, 3D design and rendering tools, remote access solutions, and other enterprise software. We also provide rental, sales, and maintenance services for power backup systems including UPS, inverters, and batteries through a flexible rental model with zero capex and easy scalability. For CAD solutions, we help organizations stay compliant, up to date, and fully supported across software and hardware environments.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-orange-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-400"
            >
              Request a consultation
            </a>
            <a
              href="/products"
              className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-orange-500/60 hover:text-orange-400"
            >
              View products &amp; solutions
            </a>
          </div>
        </div>

        <div className="relative h-full">
          <div className="absolute inset-0 rounded-3xl bg-orange-500/10 blur-3xl" />
          <div className="relative flex h-full flex-col justify-center rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
            <div className="mb-6 flex justify-center">
              <Image
                src="/products/featured-product.png"
                alt="Featured SPK Integrity product"
                width={420}
                height={260}
                className="h-40 w-auto rounded-2xl border border-slate-200 object-contain sm:h-52 bg-white shadow-sm"
              />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl mb-2">Why partners choose SPK Integrity</h2>
            <ul className="mt-4 space-y-4 text-sm text-slate-800 sm:text-base flex-1">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500 shadow-sm" />
                <span className="leading-relaxed">
                  Our 2026-ready portfolio empowers clients with the tools they need to create and
                  the power they need to remain operational 24/7.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500 shadow-sm" />
                <span className="leading-relaxed">
                  Transparent, integrity-driven dealings in software licensing, service contracts and
                  long-term rental agreements.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500 shadow-sm" />
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

      <section className="rounded-3xl border border-orange-500/40 bg-orange-50 px-6 py-7 sm:flex sm:items-center sm:justify-between">
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
          className="mt-4 inline-flex items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-xs font-medium text-white shadow shadow-orange-500/40 transition hover:bg-orange-400 sm:mt-0 sm:text-sm"
        >
          Contact SPK Integrity
        </a>
      </section>
    </div>
  );
}
