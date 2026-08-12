import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Z4Home });

const services = [
  {
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0-11V3m0 0l-3 3m3-3l3 3M3 21h18" />
      </svg>
    ),
    title: "AI Voice Agents",
    desc: "24/7 phone agents that answer every call, book appointments, and never send a customer to voicemail. Powered by ElevenLabs.",
    href: "/ai-agent",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Process Automation",
    desc: "Inject AI into your CRMs, ERPs, and internal workflows. Automate data entry, lead routing, and reporting end-to-end.",
    href: "#",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Data Analytics",
    desc: "Predictive analytics and AI reporting dashboards. Make decisions based on real-time data, not gut instinct.",
    href: "#",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: "AI Sales & Marketing",
    desc: "Automated lead scoring and personalized outreach. Convert more leads with AI-driven campaigns that scale.",
    href: "#",
  },
];

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We analyze your business to find the highest-ROI AI opportunities. One call, no commitment.",
  },
  {
    num: "02",
    title: "Implement",
    desc: "We build and deploy custom AI solutions in weeks, not months. You approve, we execute.",
  },
  {
    num: "03",
    title: "Scale",
    desc: "Results compound. As your AI saves time and generates revenue, we expand across your operations.",
  },
];

function Z4Home() {
  return (
    <div className="min-h-screen bg-white font-body">
      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-36 pb-28 px-6 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_20%,_rgba(37,99,235,0.06)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="section-label animate-in">Knoxville AI Implementation Agency</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-6 animate-in delay-100">
            10x Your Revenue
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">with AI</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-in delay-200">
            We build custom AI solutions that automate your operations, capture every lead, and scale your revenue —{" "}
            <strong className="text-slate-700">you only pay when we deliver results.</strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in delay-300">
            <a href="/ai-agent/signup.html" className="btn-primary shadow-xl shadow-blue-600/25 text-sm">
              Get Started →
            </a>
            <a href="#services" className="btn-outline text-sm">
              See Our Services
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section id="services" className="section-pad bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="section-label">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              AI Services That Drive Revenue
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              From voice agents that answer every call to automated workflows that eliminate busywork — we build AI that pays for itself.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card-luxe p-8 flex gap-5">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">{s.icon}</div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-800 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{s.desc}</p>
                  {s.href !== "#" && (
                    <Link to={s.href} className="text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider">
                      Learn More →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="section-pad bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="section-label">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              From Zero to AI-Powered in 3 Steps
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.num} className="text-center">
                <span className="text-5xl font-black text-blue-100 select-none">{s.num}</span>
                <h3 className="text-lg font-extrabold text-slate-800 mt-2 mb-3">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute right-0 top-12 transform translate-x-6">
                    <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PRICING ═══════ */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Performance-Based. No Upfront Fees.
          </h2>
          <p className="text-lg text-slate-500 mb-6">
            We earn <strong className="text-slate-700">10% of what we generate for you.</strong> If we don't deliver results, you don't pay.
          </p>
          <div className="card-luxe p-10 max-w-sm mx-auto">
            <div className="text-center">
              <span className="text-[10px] font-bold tracking-[0.15em] text-blue-600 uppercase">Our Model</span>
              <div className="mt-3 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-black text-slate-900">10%</span>
              </div>
              <p className="text-sm text-slate-500 mt-2">of revenue generated</p>
            </div>
            <div className="divider" />
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Zero upfront investment
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Custom AI for your business
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Cancel anytime, no lock-in
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════ FEATURED PRODUCT ═══════ */}
      <section className="section-pad bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block text-[10px] font-bold tracking-[0.2em] text-blue-200 uppercase mb-4">Featured Product</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            AI Voice Agent: Never Miss a Call Again
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Our AI answers every call in 3 rings, books appointments, and handles cancellations — 24/7, for $297/mo.
          </p>
          <Link to="/ai-agent" className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all">
            Meet Your AI Receptionist →
          </Link>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="section-pad bg-slate-900 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Ready to Automate?</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
            Let's find the highest-ROI AI opportunity in your business. Free consultation, no obligation.
          </p>
          <a href="/ai-agent/signup.html" className="btn-primary bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 text-sm">
            Start Free Trial
          </a>
          <p className="text-xs text-slate-500 mt-5">7-day free trial · Cancel anytime</p>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="py-12 px-6 bg-slate-950 text-slate-500 text-xs">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-black text-slate-400">Z4</span>
            <span className="text-[10px] font-bold tracking-[0.15em] text-slate-500 uppercase">Technology</span>
          </div>
          <p>© 2026 Z4 Technology · AI-Powered Business Operations · Knoxville, TN</p>
        </div>
      </footer>
    </div>
  );
}