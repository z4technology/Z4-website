import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "~/lib/supabase";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "", message: "" });
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const { error } = await supabase.from("contact_submissions").insert({
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      business_name: form.business || null,
      message: form.message,
      sms_opt_in: smsOptIn,
    });

    if (error) {
      setStatus("error");
      setErrorMsg(error.message);
    } else {
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", business: "", message: "" });
      setSmsOptIn(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-body pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Contact Us</h1>
        <p className="text-slate-500 mb-12">Ready to 10x your revenue? We'd love to hear from you.</p>

        <div className="grid gap-12 md:grid-cols-5">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-[11px] font-extrabold tracking-[0.12em] text-slate-400 uppercase mb-1">Email</h3>
              <a href="mailto:support@z4technology.com" className="text-blue-600 font-semibold hover:underline">
                support@z4technology.com
              </a>
            </div>
            <div>
              <h3 className="text-[11px] font-extrabold tracking-[0.12em] text-slate-400 uppercase mb-1">Phone</h3>
              <a href="tel:+18653240402" className="text-blue-600 font-semibold hover:underline">
                (865) 324-0402
              </a>
            </div>
            <div>
              <h3 className="text-[11px] font-extrabold tracking-[0.12em] text-slate-400 uppercase mb-1">Address</h3>
              <p className="text-slate-600">Knoxville, TN</p>
            </div>
            <div>
              <h3 className="text-[11px] font-extrabold tracking-[0.12em] text-slate-400 uppercase mb-1">Hours</h3>
              <p className="text-slate-600">Monday – Friday<br />9:00 AM – 6:00 PM EST</p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {status === "sent" ? (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                <div className="text-3xl mb-3">✓</div>
                <h3 className="text-lg font-extrabold text-green-800 mb-1">Message Sent!</h3>
                <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-extrabold tracking-[0.12em] text-slate-500 uppercase mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] font-extrabold tracking-[0.12em] text-slate-500 uppercase mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-[11px] font-extrabold tracking-[0.12em] text-slate-500 uppercase mb-1.5">
                      Phone
                    </label>
                    <input
                      id="phone" name="phone" type="tel"
                      value={form.phone} onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="(865) 555-0123"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-[11px] font-extrabold tracking-[0.12em] text-slate-500 uppercase mb-1.5">
                      Business Name
                    </label>
                    <input
                      id="business" name="business" type="text"
                      value={form.business} onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[11px] font-extrabold tracking-[0.12em] text-slate-500 uppercase mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message" name="message" required rows={5}
                    value={form.message} onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors resize-y"
                    placeholder="Tell us about your business and how we can help..."
                  />
                </div>

                {status === "error" && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {errorMsg || "Something went wrong. Please try again."}
                  </div>
                )}

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={smsOptIn}
                    onChange={(e) => setSmsOptIn(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                    By checking this box, I consent to receive SMS messages from Z4 Technology regarding my inquiry, account updates, and service information. Message frequency varies. Message and data rates may apply. Reply STOP to opt out, HELP for help. See our {" "}
                    <a href="/privacy" className="text-blue-600 underline hover:text-blue-800">Privacy Policy</a>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary text-[11px] py-3 px-8 w-full sm:w-auto disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
