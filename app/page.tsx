export default function HangProsWebsite() {
  const services = [
    {
      title: "TV Mounting",
      desc: "Secure, level TV installation with clean placement for the best viewing experience.",
    },
    {
      title: "Wire Concealment",
      desc: "Hide visible cords for a cleaner, more professional finish in any room.",
    },
    {
      title: "Soundbar & Device Setup",
      desc: "Get soundbars, streaming devices, and home tech connected and working properly.",
    },
    {
      title: "Fireplace Mounting",
      desc: "Safe, polished over-fireplace installations designed to look clean and modern.",
    },
  ];

  const highlights = [
    "Serving DFW",
    "Clean installs",
    "Fast scheduling",
    "Residential & commercial",
  ];

  const projects = [
    {
      title: "Living Room TV Mount",
      before: "/before-1.jpg",
      after: "/after-1.jpg",
    },
    {
      title: "Fireplace Install",
      before: "/before-2.jpg",
      after: "/after-2.jpg",
    },
    {
      title: "Office Screen Setup",
      before: "/before-3.jpg",
      after: "/after-3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-orange-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-black tracking-tight text-slate-900">Hang Pros</div>
            <div className="text-sm text-slate-500">TV Mounting & Home Technology Installation</div>
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-orange-600">Services</a>
            <a href="#gallery" className="hover:text-orange-600">Our Work</a>
            <a href="#about" className="hover:text-orange-600">Why Us</a>
            <a href="#contact" className="hover:text-orange-600">Contact</a>
          </div>
          <a
            href="tel:972-439-5229"
            className="rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02] hover:bg-orange-600"
          >
            Call Now
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit rounded-full border border-orange-200 bg-white px-4 py-2 text-sm text-orange-700 shadow-sm">
              Professional TV mounting across DFW
            </div>
            <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
              Clean, Professional TV Mounting That Instantly Upgrades Your Space.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Hang Pros helps homeowners and businesses with expert TV mounting, wire concealment,
              soundbar setup, and clean installation work that looks polished from day one.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:972-439-5229"
                className="rounded-2xl bg-orange-500 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-orange-600"
              >
                Call 972-439-5229
              </a>
              <a
                href="#gallery"
                className="rounded-2xl border border-orange-200 bg-white px-6 py-4 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-orange-50"
              >
                View Our Work
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-orange-100 bg-white p-4 shadow-xl">
              <div className="aspect-[4/3] rounded-[1.5rem] bg-gradient-to-br from-orange-100 to-amber-50 p-6">
                <div className="flex h-full flex-col justify-between rounded-[1.25rem] bg-slate-900 p-5 text-white">
                  <div>
                    <div className="text-sm uppercase tracking-[0.2em] text-orange-300">Featured Service</div>
                    <div className="mt-3 text-3xl font-black">TV Mounting</div>
                    <div className="mt-3 max-w-sm text-slate-300">
                      Secure installation, ideal viewing height, neat wire management, and a polished final look.
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl bg-white/10 p-4">Over Fireplace</div>
                    <div className="rounded-2xl bg-white/10 p-4">Wire Concealment</div>
                    <div className="rounded-2xl bg-white/10 p-4">Soundbar Setup</div>
                    <div className="rounded-2xl bg-white/10 p-4">Commercial Screens</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm">
                <div className="text-2xl font-black text-orange-600">DFW</div>
                <div className="mt-1 text-sm text-slate-500">Service Area</div>
              </div>
              <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm">
                <div className="text-2xl font-black text-orange-600">Same-Day</div>
                <div className="mt-1 text-sm text-slate-500">Availability</div>
              </div>
              <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm">
                <div className="text-2xl font-black text-orange-600">Clean</div>
                <div className="mt-1 text-sm text-slate-500">Professional Finish</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Services</div>
          <h2 className="mt-3 text-4xl font-black tracking-tight">Installation services built around clean results</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Clear service details, professional presentation, and easy next steps for customers ready to book.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-2xl font-bold tracking-tight text-slate-900">{service.title}</div>
              <p className="mt-3 leading-7 text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="bg-orange-50/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Our Work</div>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Before and after transformations</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Add real photos here to show the difference Hang Pros makes. This section is one of the most important parts of the site.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="rounded-[2rem] border border-orange-100 bg-white p-5 shadow-sm">
                <h3 className="text-xl font-bold tracking-tight text-slate-900">{project.title}</h3>
                <div className="mt-4 grid gap-4">
                  <div>
                    <div className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Before</div>
                    <img
                      src={project.before}
                      alt={`${project.title} before`}
                      className="h-52 w-full rounded-2xl object-cover"
                    />
                  </div>
                  <div>
                    <div className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">After</div>
                    <img
                      src={project.after}
                      alt={`${project.title} after`}
                      className="h-52 w-full rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr,0.9fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Why Choose Hang Pros</div>
            <h2 className="mt-3 text-4xl font-black tracking-tight">A cleaner look, better setup, and less hassle</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Customers want work that looks sharp, feels secure, and is done right the first time. This site is built to show quality,
              professionalism, and easy booking.
            </p>
          </div>
          <div className="rounded-[2rem] border border-orange-100 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold tracking-tight">What customers care about</h3>
            <ul className="mt-5 space-y-4 text-slate-600">
              <li>• Level, secure TV mounting</li>
              <li>• Clean wire concealment</li>
              <li>• Fast and professional service</li>
              <li>• Easy scheduling and clear communication</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Contact</div>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Ready to upgrade your setup?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Call Hang Pros today for TV mounting, wire concealment, and clean professional installation across DFW.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:972-439-5229"
              className="rounded-2xl bg-orange-500 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-orange-600"
            >
              Call 972-439-5229
            </a>
            <a
              href="#gallery"
              className="rounded-2xl border border-white/20 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              See Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
