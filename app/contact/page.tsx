'use client';
import Image from 'next/image';

export default function ContactPage() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xwvrpare', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        window.location.href = '/thank-you';
      } else {
        alert('There was a problem submitting the form. Please try again.');
      }
    } catch (error) {
      alert('There was a problem submitting the form. Please try again.');
    }
  };

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold text-black sm:text-3xl">
          Contact SPK Integrity
        </h1>
        <p className="max-w-2xl text-sm text-black">
          Take the first step toward a more efficient future. Share your software, power backup
          and support requirements, and we&apos;ll respond with a focused proposal.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-[2fr,3fr]">
        <div className="flex flex-col justify-center space-y-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold uppercase tracking-wider text-black">Business details</h2>
            <Image
              src="/logo-spk-integrity.jpg"
              alt="SPK Integrity Logo"
              width={100}
              height={100}
              className="rounded-xl border border-[#E5E5E7] object-contain shadow-sm"
            />
          </div>
          <dl className="space-y-6 text-sm sm:text-base text-slate-800">
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-1">Email</dt>
              <dd>
                <a
                  href="mailto:sales@spkintegrity.co.in"
                  className="font-medium text-slate-900 transition-colors hover:text-orange-500"
                >
                  sales@spkintegrity.co.in
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-1">Phone</dt>
              <dd className="font-medium text-slate-900">+91 9892095200</dd>
              <dd className="font-medium text-slate-900">+91 9993299966</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2">Corporate Presence</dt>
              <dd className="space-y-3">
                <div className="rounded-lg bg-orange-50/50 p-3 border border-orange-100">
                  <span className="block text-xs font-bold text-orange-600 mb-1">Head Office</span>
                  <span className="font-medium text-slate-900">SPK Integrity, Mumbai, Maharashtra, India</span>
                </div>
                <div className="rounded-lg bg-slate-50/50 p-3 border border-slate-100">
                  <span className="block text-xs font-bold text-slate-500 mb-1">Operational Presence</span>
                  <span className="font-medium text-slate-900">Across Madhya Pradesh and Maharashtra</span>
                </div>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-1">Business hours</dt>
              <dd className="font-medium text-slate-900">Monday to Friday<br />9:00 to 18:00 (local time)</dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-col space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50">
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wider text-black">Send an enquiry</h2>
            <p className="mt-2 text-sm text-slate-500">
              Submit this form to send your enquiry directly to our sales team.
            </p>
          </div>
          <form className="space-y-4 flex-1" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="_subject"
              value="New enquiry from SPK Integrity website"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-black" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-black outline-none ring-orange-500/40 focus:border-orange-500 focus:ring-1"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-black" htmlFor="company">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-black outline-none ring-orange-500/40 focus:border-orange-500 focus:ring-1"
                  placeholder="Organization name"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-black" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-black outline-none ring-orange-500/40 focus:border-orange-500 focus:ring-1"
                  placeholder="name@company.com"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-black" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-black outline-none ring-orange-500/40 focus:border-orange-500 focus:ring-1"
                  placeholder="+00 000 000 0000"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-black" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-black outline-none ring-orange-500/40 focus:border-orange-500 focus:ring-1"
                placeholder="Brief summary of your enquiry"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-black" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                name="message"
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-black outline-none ring-orange-500/40 focus:border-orange-500 focus:ring-1"
                placeholder="Asset scope, location, timelines, and any specific integrity or reliability challenges."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-xs font-medium text-white shadow shadow-orange-500/40 transition hover:bg-orange-600"
            >
              Submit enquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
