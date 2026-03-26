export default function HangProsWebsite() {
  const services = [
    {
      title: "TV Mounting",
      desc: "Professional TV installation with secure placement, clean alignment, and an ideal viewing setup.",
    },
    {
      title: "Wire Concealment",
      desc: "Hide visible cables for a cleaner, more polished look that improves the feel of any room.",
    },
    {
      title: "Home Technology Setup",
      desc: "Get soundbars, streaming devices, and other home technology connected and working properly.",
    },
    {
      title: "Fireplace Mounting",
      desc: "Upgrade your space with a safe, professional over-fireplace installation and a clean finish.",
    },
  ];

  const highlights = [
    "Serving DFW",
    "Clean, professional installs",
    "Fast response times",
    "Residential & commercial",
  ];

  const projects = [
    {
      title: "Living Room Installation",
      before: "/before-1.png",
      after: "/after-1.png",
    },
    {
      title: "Fireplace TV Mount",
      before: "/before-2.png",
      after: "/after-2.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-orange-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/hangpros-logo.png"
              alt="Hang Pros logo"
              className="h-12 w-auto object-contain"
            />
            <div>
              <div className="text-2xl font-black tracking-tight text-orange-500">Hang Pros</div>
              <div className="text-sm text-slate-500">TV Mounting & Home Technology Specialist</div>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-orange-600">Services</a>
            <a href="#gallery" className="hover:text-orange-600">Our Work</a>
            <a href="#about" className="hover:text-orange-600">Why Choose Us</a>
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
              Serving homes and businesses across DFW
            </div>
            <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
              Professional TV Mounting and Home Technology Setup Done Right.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Hang Pros helps homeowners and businesses create cleaner, better-looking spaces with expert TV mounting,
              wire concealment, and home technology installation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:972-439-5229"
                className="rounded-2xl bg-orange-500 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-orange-600"
              >
                Book by Phone
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-orange-200 bg-white px-6 py-4 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-orange-50"
              >
                View Services
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
                      Secure installation, ideal viewing height, clean cable routing, and a polished finish.
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl bg-white/10 p-4">Fireplace Mounting</div>
                    <div className="rounded-2xl bg-white/10 p-4">Wire Concealment</div>
                    <div className="rounded-2xl bg-white/10 p-4">Soundbar Setup</div>
                    <div className="rounded-2xl bg-white/10 p-4">Home Devices</div>
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
                <div className="text-2xl font-black text-orange-600">Fast</div>
                <div className="mt-1 text-sm text-slate-500">Response Time</div>
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
          <h2 className="mt-3 text-4xl font-black tracking-tight">Professional installation services for homes and businesses</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            From mounting and wire concealment to device setup, Hang Pros helps create a cleaner, more professional space.
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
            <h2 className="mt-3 text-4xl font-black tracking-tight">Before and after results</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              See the difference a professional installation can make with clean placement, better cable management, and a polished final result.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title} className="rounded-[2rem] border border-orange-100 bg-white p-5 shadow-sm">
                <h3 className="text-xl font-bold tracking-tight text-slate-900">{project.title}</h3>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Before
                    </div>
                    <img
                      src={project.before}
                      alt={`${project.title} before`}
                      className="h-48 w-full rounded-xl object-cover"
                    />
                  </div>

                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-orange-600">
                      After
                    </div>
                    <img
                      src={project.after}
                      alt={`${project.title} after`}
                      className="h-48 w-full rounded-xl border-2 border-orange-300 object-cover"
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
            <h2 className="mt-3 text-4xl font-black tracking-tight">Professional work, clean results, and a better customer experience</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Customers want installation work that looks sharp, feels secure, and is done right the first time. Hang Pros focuses on quality,
              clean presentation, and dependable service across DFW.
            </p>
          </div>
          <div className="rounded-[2rem] border border-orange-100 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold tracking-tight">What customers can expect</h3>
            <ul className="mt-5 space-y-4 text-slate-600">
              <li>• Secure, level TV mounting</li>
              <li>• Cleaner spaces with concealed wiring</li>
              <li>• Professional setup for home technology</li>
              <li>• Fast communication and dependable service</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Contact</div>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Ready to upgrade your setup?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Call Hang Pros today for TV mounting, wire concealment, and home technology installation across DFW.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:972-439-5229"
              className="rounded-2xl bg-orange-500 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-orange-600"
            >
              Call 972-439-5229
            </a>
            <a
              href="mailto:thehangpros@gmail.com"
              className="rounded-2xl border border-white/20 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Email for a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
