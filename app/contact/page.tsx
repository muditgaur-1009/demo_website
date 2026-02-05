'use client';

export default function ContactPage() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mvzbpbvy', {
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
        <h1 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
          Contact SPK Integrity
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          Take the first step toward a more efficient future. Share your software, power backup
          and support requirements, and we&apos;ll respond with a focused proposal.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-[2fr,3fr]">
        <div className="space-y-5 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
          <h2 className="text-sm font-semibold text-slate-100">Business details</h2>
          <dl className="space-y-3 text-xs text-slate-300">
            <div>
              <dt className="font-medium text-slate-200">Email</dt>
              <dd>
                <a
                  href="mailto:sales@spkintegrity.co.in"
                  className="text-sky-400 hover:text-sky-300"
                >
                  sales@spkintegrity.co.in
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-slate-200">Phone</dt>
              <dd className="text-slate-300">+91 9892095200</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-200">Office address</dt>
              <dd className="text-slate-300">
                SPK Integrity, Mumbai, Maharashtra, India
              </dd>
            </div>
            <div>
              <dt className="font-medium text-slate-200">Business hours</dt>
              <dd className="text-slate-300">Monday to Friday, 9:00 to 18:00 (local time)</dd>
            </div>
          </dl>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
          <h2 className="text-sm font-semibold text-slate-100">Send an enquiry</h2>
          <p className="text-xs text-slate-400">
            Submit this form to send your enquiry directly to our sales team.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="_subject"
              value="New enquiry from SPK Integrity website"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-200" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none ring-sky-500/40 focus:border-sky-500 focus:ring-1"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-200" htmlFor="company">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none ring-sky-500/40 focus:border-sky-500 focus:ring-1"
                  placeholder="Organization name"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-200" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none ring-sky-500/40 focus:border-sky-500 focus:ring-1"
                  placeholder="name@company.com"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-200" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none ring-sky-500/40 focus:border-sky-500 focus:ring-1"
                  placeholder="+00 000 000 0000"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-200" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none ring-sky-500/40 focus:border-sky-500 focus:ring-1"
                placeholder="Brief summary of your enquiry"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-200" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                name="message"
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none ring-sky-500/40 focus:border-sky-500 focus:ring-1"
                placeholder="Asset scope, location, timelines, and any specific integrity or reliability challenges."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-sky-500 px-4 py-2 text-xs font-medium text-slate-950 shadow shadow-sky-500/40 transition hover:bg-sky-400"
            >
              Submit enquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
