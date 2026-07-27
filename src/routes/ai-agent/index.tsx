import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/ai-agent/")({ component: AIAgentLanding });

const benefits = [
  {
    icon: "📞",
    title: "24/7 Call Answering",
    desc: "Never miss a call again. Our AI answers in 3 rings, every time — nights, weekends, and holidays included.",
  },
  {
    icon: "🎙️",
    title: "Natural Human Voice",
    desc: "ElevenLabs-powered voice sounds so natural, your customers won't know they're talking to AI.",
  },
  {
    icon: "📅",
    title: "Calendar Integration",
    desc: "Books appointments directly into your calendar — Google, Outlook, Square, and more. No double-booking, no manual entry.",
  },
  {
    icon: "⚡",
    title: "15-Minute Setup",
    desc: "We handle everything. Connect your calendar, tell us about your business, and go live same day.",
  },
];

const features = [
  "Captures every missed call with zero voicemail drop-off",
  "Qualifies leads before booking (budget, timeline, service type)",
  "Handles reschedules and cancellations automatically",
  "Sends SMS confirmations and reminders",
  "Multi-language support (English + Spanish)",
  "Real-time dashboard to monitor every conversation",
];

function AIAgentLanding() {
  return (
    <div className="min-h-screen bg-white font-body">
      {/* ──── HERO ──── */}
      <section className="relative pt-24 pb-24 px-6 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] text-blue-600 uppercase mb-6">
            AI-Powered Virtual Receptionist
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Stop Losing $5,000 Jobs
            <br />
            <span className="text-blue-600">to Voicemail</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Our AI answers every call in 3 rings, books appointments, and never sleeps.{" "}
            <strong className="text-slate-700">$297/mo. 7-day free trial.</strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/ai-agent/signup"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase transition-all shadow-xl shadow-blue-600/25 hover:shadow-2xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
            >
              Start Free Trial <span className="text-blue-200">→</span>
            </Link>
            <p className="text-xs text-slate-400 font-medium">No credit card required</p>
          </div>
        </div>
      </section>

      {/* ──── BENEFITS ──── */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="section-label">Why Businesses Choose Z4</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Your AI Receptionist at a Glance
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="card-luxe p-8 text-center flex flex-col items-center gap-4">
                <span className="text-4xl">{b.icon}</span>
                <h3 className="text-sm font-extrabold text-slate-800 tracking-tight uppercase">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── FEATURES ──── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Everything Included</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                More Than Just Answering Calls
              </h2>
              <ul className="space-y-4">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm text-slate-600 font-medium leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-luxe p-10">
              <div className="text-center mb-8">
                <span className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase">Pricing</span>
                <div className="mt-2 flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-extrabold text-slate-900">$297</span>
                  <span className="text-lg text-slate-400 font-medium">/mo</span>
                </div>
                <p className="text-sm text-slate-500 mt-2 font-medium">7-day free trial. Cancel anytime.</p>
              </div>
              <div className="space-y-3">
                {["Unlimited calls & bookings", "Custom voice training", "Google, Outlook, Square & more sync", "SMS reminders included", "Live conversation dashboard", "Email + phone support"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              <Link
                to="/ai-agent/signup"
                className="btn-primary w-full mt-8"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Ready to Stop Missing Calls?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
            Join businesses across Knoxville who never send a customer to voicemail again.
          </p>
          <Link
            to="/ai-agent/signup"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase transition-all shadow-xl shadow-blue-600/25 hover:-translate-y-0.5"
          >
            Start Your Free Trial <span className="text-blue-200">→</span>
          </Link>
          <p className="text-xs text-slate-500 mt-4">$297/mo after trial. Cancel anytime.</p>
        </div>
      </section>

      {/* ──── FOOTER ──── */}
      <footer className="py-12 px-6 bg-slate-950 text-slate-500 text-xs text-center">
        <p>Z4 Technology © 2026 · AI-Powered Business Operations · Knoxville, TN</p>
      </footer>
    </div>
  );
}