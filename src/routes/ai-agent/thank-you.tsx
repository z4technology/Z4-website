import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/ai-agent/thank-you")({ component: AIAgentThankYou });

function AIAgentThankYou() {
  return (
    <div className="min-h-screen bg-slate-50 font-body flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-md">
        {/* ──── SUCCESS ICON ──── */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* ──── HEADING ──── */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          You're All Set!
        </h1>
        <p className="text-lg text-slate-500 font-medium mb-3 leading-relaxed">
          We'll reach out within <strong className="text-slate-700">24 hours</strong> to set up your AI agent.
        </p>
        <p className="text-sm text-slate-400 mb-10">
          In the meantime, think about the calls you'd like us to handle — we'll tailor everything to your business.
        </p>

        {/* ──── NEXT STEPS ──── */}
        <div className="card-luxe p-6 mb-8 text-left">
          <p className="text-[10px] font-bold tracking-[0.15em] text-blue-600 uppercase mb-4">What Happens Next</p>
          <ul className="space-y-3">
            {[
              "Our team reviews your signup details",
              "We reach out to schedule a 15-minute onboarding call",
              "You tell us about your business and services",
              "We configure your AI agent and go live same day",
              "You start capturing every call — zero voicemail",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[10px] font-extrabold text-blue-600">{i + 1}</span>
                </span>
                <span className="text-sm text-slate-600 font-medium">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ──── CTA ──── */}
        <Link
          to="/ai-agent"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all shadow-md shadow-blue-600/20"
        >
          ← Back to AI Receptionist
        </Link>
      </div>
    </div>
  );
}