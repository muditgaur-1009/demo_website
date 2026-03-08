export default function ThankYouPage() {
  return (
    <div className="space-y-6 text-center py-20">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 mb-8 border-4 border-green-50 shadow-lg shadow-green-100/50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
        Thank you for your enquiry
      </h1>
      <p className="mx-auto max-w-xl text-base text-slate-700">
        We&apos;ve received your message and our team will review your
        requirements. Someone from SPK Integrity will get back to you at the
        earliest opportunity.
      </p>
      <div className="pt-8">
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}
