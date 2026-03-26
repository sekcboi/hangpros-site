export default function HangProsWebsite() {
  const services = [
    {
      title: "TV Mounting",
      desc: "Clean, secure TV installation with precise placement for the best viewing experience.",
    },
    {
      title: "Wire Concealment",
      desc: "Hide messy cables for a polished, modern look that keeps your space neat and safe.",
    },
    {
      title: "Home Technology Setup",
      desc: "From sound systems to smart devices, get your home tech installed and working properly.",
    },
    {
      title: "Ceiling Fan Installation",
      desc: "Professional fixture installation to upgrade comfort and functionality in your home.",
    },
  ];

  const highlights = [
    "Serving the DFW Metroplex",
    "Fast scheduling",
    "Clean, professional installs",
    "Residential and office setups",
  ];

  const reviews = [
    {
      name: "Local Customer",
      text: "Quick, professional, and the TV looks perfect. The wire concealment made a huge difference.",
    },
    {
      name: "Homeowner in DFW",
      text: "Showed up on time, explained everything clearly, and did a super clean install over the fireplace.",
    },
    {
      name: "Office Client",
      text: "We needed screens mounted correctly and neatly. Great service and very easy to work with.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-black tracking-tight">Hang Pros</div>
            <div className="text-sm text-slate-500">TV Mounting & Home Technology Specialist</div>
          </div>
          <div className="hidden items-center gap-6 md:flex text-sm font-medium">
            <a href="#services" className="hover:text-slate-600">Services</a>
            <a href="#about" className="hover:text-slate-600">About</a>
            <a href="#reviews" className="hover:text-slate-600">Reviews</a>
            <a href="#contact" className="hover:text-slate-600">Contact</a>
          </div>
          <a
            href="tel:972-439-5229"
            className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]"
          >
            Call 972-439-5229
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-50" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
              Serving homes and businesses across DFW
            </div>
            <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
              Professional TV Mounting and Home Tech Setup Done Right.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Hang Pros helps homeowners and businesses create cleaner, better-looking spaces with expert TV mounting,
              wire concealment, and home technology installation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:972-439-5229"
                className="rounded-2xl bg-slate-900 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02]"
              >
                Book by Phone
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold shadow-sm transition hover:bg-slate-50"
              >
                View Services
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl">
              <div className="aspect-[4/3] rounded-[1.5rem] bg-[linear-gradient(135deg,#e2e8f0,#f8fafc)] p-6">
                <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-slate-300 bg-slate-900 p-5 text-white">
                  <div>
                    <div className="text-sm uppercase tracking-[0.2em] text-slate-300">Featured Service</div>
                    <div className="mt-3 text-3xl font-black">TV Mounting</div>
                    <div className="mt-3 max-w-sm text-slate-300">
                      Secure installation, ideal viewing height, clean cable routing, and a polished finish.
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl bg-white/10 p-4">Fireplace Mounting</div>
                    <div className="rounded-2xl bg-white/10 p-4">Wire Concealment</div>
                    <div className="rounded-2xl bg-white/10 p-4">Soundbar Setup</div>
                    <div className="rounded-2xl bg-white/10 p-4">Smart Home Devices</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-2xl font-black">DFW</div>
                <div className="mt-1 text-sm text-slate-500">Service Area</div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-2xl font-black">Fast</div>
                <div className="mt-1 text-sm text-slate-500">Response Time</div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-2xl font-black">Clean</div>
                <div className="mt-1 text-sm text-slate-500">Professional Finish</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Services</div>
          <h2 className="mt-3 text-4xl font-black tracking-tight">Solutions for your home and office</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Simple, practical services designed to improve your setup, reduce clutter, and make your space look better.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-2xl font-bold tracking-tight">{service.title}</div>
              <p className="mt-3 text-slate-600 leading-7">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr,0.9fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Why Hang Pros</div>
            <h2 className="mt-3 text-4xl font-black tracking-tight">A better customer experience from first call to final install</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Customers want a service company they can trust. This site is designed to make it easy for them to understand
              what Hang Pros does, feel confident in the quality of the work, and call right away.
            </p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold tracking-tight">What this website helps with</h3>
            <ul className="mt-5 space-y-4 text-slate-600">
              <li>• Makes the business look more premium and trustworthy</li>
              <li>• Gives customers one clear action: call and book</li>
              <li>• Clearly explains services without clutter</li>
              <li>• Works well on mobile, where local customers often browse</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Reviews</div>
          <h2 className="mt-3 text-4xl font-black tracking-tight">Designed to showcase trust</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-700 leading-7">“{review.text}”</p>
              <div className="mt-5 text-sm font-semibold text-slate-500">{review.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</div>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Ready to upgrade your setup?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Call Hang Pros today to schedule TV mounting, wire concealment, or home technology installation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:972-439-5229"
              className="rounded-2xl bg-white px-6 py-4 text-base font-semibold text-slate-900 shadow-lg transition hover:scale-[1.02]"
            >
              Call 972-439-5229
            </a>
            <a
              href="mailto:info@hangpros.com"
              className="rounded-2xl border border-white/20 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Request a Quote
            </a>
          </div>
          <div className="mt-10 text-sm text-slate-400">
            Demo site concept for a DFW TV mounting and home technology business.
          </div>
        </div>
      </section>
    </div>
  );
}