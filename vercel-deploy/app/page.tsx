export default function LandingPage() {
  const features = [
    {
      title: 'Fast to Launch',
      description: 'Go from idea to polished product with a clean workflow and beautifully crafted components.',
      icon: '⚡',
    },
    {
      title: 'Built to Scale',
      description: 'Designed for growing teams with flexible sections, reusable patterns, and strong visual hierarchy.',
      icon: '📈',
    },
    {
      title: 'Made to Convert',
      description: 'Clear messaging, strong calls to action, and modern layout choices that keep attention focused.',
      icon: '🎯',
    },
  ]

  const stats = [
    { value: '10x', label: 'Faster iteration' },
    { value: '24/7', label: 'Always available' },
    { value: '99%', label: 'User satisfaction' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 shadow-lg ring-1 ring-white/15">
            <span className="text-lg font-bold">A</span>
          </div>
          <span className="text-lg font-semibold tracking-wide">Aurora</span>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#stats" className="transition hover:text-white">Stats</a>
          <a href="#pricing" className="transition hover:text-white">Pricing</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>

        <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-900 transition hover:scale-[1.02]">
          Get Started
        </button>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-12 lg:grid-cols-2 lg:px-8 lg:pb-28 lg:pt-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              New generation product experience
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Build something
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent"> awesome </span>
              that people remember.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              A striking landing page template for startups, products, and personal brands that want a premium feel with minimal effort.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-2xl bg-cyan-400 px-7 py-4 font-semibold text-slate-950 shadow-2xl shadow-cyan-500/20 transition hover:-translate-y-0.5">
                Start Free
              </button>
              <button className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10">
                Watch Demo
              </button>
            </div>

            <div id="stats" className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-fuchsia-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm text-slate-400">Dashboard Preview</p>
                    <h3 className="mt-1 text-xl font-semibold">Growth Overview</h3>
                  </div>
                  <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                    +28.4%
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                      <span>Revenue</span>
                      <span>$84,240</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white/5 p-4">
                      <div className="text-sm text-slate-400">Users</div>
                      <div className="mt-2 text-2xl font-bold">12.8K</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4">
                      <div className="text-sm text-slate-400">Conversion</div>
                      <div className="mt-2 text-2xl font-bold">18.6%</div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="mb-4 flex items-end gap-3 h-36">
                      {[45, 72, 56, 88, 67, 94, 76].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-xl bg-gradient-to-t from-fuchsia-500 to-cyan-400"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Why choose Aurora
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need in one elegant landing page
            </h2>
            <p className="mt-4 text-slate-300">
              Designed to feel premium out of the box, while staying easy to customize for your own brand.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl backdrop-blur lg:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-300">
                  Pricing
                </p>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  Start free, upgrade when you grow
                </h2>
                <p className="mt-4 max-w-xl text-slate-300">
                  Perfect for indie makers, startups, and modern teams that want a sharp online presence without starting from scratch.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black">$29</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <p className="mt-3 text-slate-300">One simple plan with all premium sections included.</p>

                <div className="mt-6 space-y-3 text-slate-200">
                  {['Hero section', 'Feature grid', 'Analytics preview', 'Pricing block', 'Responsive layout'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-8 w-full rounded-2xl bg-white px-6 py-4 font-semibold text-slate-950 transition hover:scale-[1.01]">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 px-6 py-6 text-center text-slate-300 backdrop-blur md:flex-row md:text-left">
          <div>
            <h3 className="text-lg font-semibold text-white">Ready to launch your next big thing?</h3>
            <p className="mt-1">Build a standout first impression with a page that looks premium and converts.</p>
          </div>
          <button className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5">
            Let’s Build
          </button>
        </div>
      </footer>
    </div>
  )
}
