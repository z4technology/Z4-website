import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "~/lib/supabase";

export const Route = createFileRoute("/ai-agent/signup")({ component: AIAgentSignup });

function AIAgentSignup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !company) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const { error: dbError } = await supabase.from("trial_signups").insert({
        name,
        email,
        phone,
        company_name: company,
        product: "ai-receptionist",
        created_at: new Date().toISOString(),
      });
      if (dbError) throw dbError;
      navigate({ to: "/ai-agent/thank-you" });
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-body">
      {/* ──── SIGNUP FORM ──── */}
      <section className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-lg">
          <div className="text-center mb-10">
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">
              Start Your Free Trial
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Get Your AI Receptionist
            </h1>
            <p className="text-slate-500 font-medium">We'll reach out within 24 hours to set you up.</p>
          </div>

          {/* ──── PRICE BADGE ──── */}
          <div className="card-luxe p-6 mb-8 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold tracking-[0.15em] text-blue-600 uppercase">Pricing</p>
              <p className="text-2xl font-extrabold text-slate-900 mt-1">$297<span className="text-base font-medium text-slate-400">/mo</span></p>
            </div>
            <div className="text-right">
              <span className="inline-block bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                7-Day Free Trial
              </span>
              <p className="text-[10px] text-slate-400 mt-2 font-medium">No credit card required</p>
            </div>
          </div>

          {/* ──── FORM ──── */}
          <form onSubmit={handleSubmit} className="card-luxe p-8 space-y-5">
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                placeholder="John Smith"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                placeholder="john@company.com"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                placeholder="(865) 555-0123"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                Company Name
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                placeholder="Your Business, LLC"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-xs font-medium">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Start Free Trial"}
            </button>

            <p className="text-[10px] text-slate-400 text-center font-medium pt-2">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>

          <div className="text-center mt-6">
            <Link to="/ai-agent" className="text-xs text-slate-400 hover:text-slate-600 font-medium transition-colors">
              ← Back to AI Receptionist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}