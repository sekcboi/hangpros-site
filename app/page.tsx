export default function HangProsWebsite() {
  const services = [
    "TV MOUNTING",
    "INVISIBLE WIRING METHODS",
    "TELECOMM WIRING / CAT5 & 6, FIBER",
    "AUDIO / VISUAL",
    "CABLE INSTALLATION",
    "GENERAL HANDYWORK",
    "HOME THEATER INSTALLATION",
  ];

  const projects = [
    {
      title: "Living Room Install",
      before: "/before-1.jpg",
      after: "/after-1.jpg",
    },
    {
      title: "Fireplace Mount",
      before: "/before-2.jpg",
      after: "/after-2.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#efefef] text-black">
      <header className="border-b-4 border-orange-500 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src="/hangpros-logo.png"
              alt="Hang Pros logo"
              className="h-16 w-auto object-contain"
            />
            <div>
              <div className="text-3xl leading-none text-orange-500">
                HANG PROS
              </div>
              <div className="mt-1 text-sm tracking-wide text-black">
                TV MOUNTING / HOME TECHNOLOGY SPECIALIST
              </div>
            </div>
          </div>

          <a
            href="tel:972-439-5229"
            className="rounded-md bg-orange-500 px-5 py-3 text-lg text-white transition hover:bg-orange-600"
          >
            CALL NOW
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="rounded-[2rem] border-4 border-orange-500 bg-white p-6 shadow-lg md:p-10">
            <div className="mx-auto max-w-5xl">
              <div className="h-4 w-full bg-orange-500" />

              <div className="flex flex-col items-center justify-center py-8 text-center">
                <img
                  src="/hangpros-logo.png"
                  alt="Hang Pros logo"
                  className="mb-6 h-28 w-auto object-contain md:h-36"
                />

                <h1 className="text-5xl leading-none text-orange-500 drop-shadow-sm md:text-8xl">
                  HANG PROS
                </h1>

                <div className="mt-6 h-4 w-full bg-orange-500" />

                <p className="mt-6 text-xl tracking-wide text-black md:text-3xl">
                  TV MOUNTING / HOME TECHNOLOGY SPECIALIST
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-2xl leading-tight text-black md:text-4xl">
              “DON’T <span className="text-orange-500">HANG</span> WITH JUST
              ANYBODY, HANG WITH A <span className="text-orange-500">PRO</span>”
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-6 py-6 md:py-10">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border-4 border-orange-500 bg-white p-4 shadow-lg"
            >
              <h2 className="mb-4 text-center text-2xl text-black md:text-3xl">
                {project.title}
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="mb-2 text-center text-lg text-black">
                    BEFORE
                  </div>
                  <img
                    src={project.before}
                    alt={`${project.title} before`}
                    className="h-64 w-full border-4 border-orange-500 object-cover"
                  />
                </div>

                <div>
                  <div className="mb-2 text-center text-lg text-orange-500">
                    AFTER
                  </div>
                  <img
                    src={project.after}
                    alt={`${project.title} after`}
                    className="h-64 w-full border-4 border-orange-500 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="border-4 border-orange-500 bg-white p-8 text-center shadow-lg">
          <h2 className="text-4xl text-black md:text-6xl">SPECIALIZING IN:</h2>

          <div className="mt-6 space-y-3 text-2xl leading-tight md:text-4xl">
            {services.map((service, index) => (
              <div
                key={service}
                className={index % 2 === 0 ? "text-black" : "text-orange-500"}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 bg-orange-500">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-center text-white md:flex-row md:text-left">
          <div className="text-4xl md:text-6xl">972-439-5229</div>
          <div className="text-2xl md:text-4xl">THEHANGPROS@GMAIL.COM</div>
        </div>
      </section>
    </main>
  );
}