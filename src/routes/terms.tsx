import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({ component: TermsPage });

function TermsPage() {
  return (
    <div className="min-h-screen bg-white font-body pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Terms & Conditions</h1>
        <p className="text-sm text-slate-400 mb-12">Last updated: July 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-extrabold text-slate-800 mb-3">1. Services</h2>
            <p className="text-slate-600">
              Z4 Technology ("Company", "we", "us") provides AI-powered business automation services including voice agents,
              process automation, data analytics, and sales & marketing solutions (collectively, the "Services").
              By accessing or using our Services, you agree to be bound by these Terms & Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-slate-800 mb-3">2. Payment Terms</h2>
            <p className="text-slate-600">
              For performance-based engagements, Z4 Technology earns 10% of revenue generated or costs saved through our AI implementations.
              For subscription products (e.g., AI Receptionist), the monthly fee of $297 is billed at the end of your 7-day free trial.
              All fees are non-refundable unless otherwise stated. We reserve the right to modify pricing with 30 days' notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-slate-800 mb-3">3. Cancellation</h2>
            <p className="text-slate-600">
              You may cancel your subscription at any time through your account dashboard or by contacting us at team@z4technology.com.
              Cancellation takes effect at the end of the current billing period. No refunds are provided for partial months.
              For performance-based engagements, either party may terminate with 30 days' written notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-slate-800 mb-3">4. Limitation of Liability</h2>
            <p className="text-slate-600">
              To the maximum extent permitted by law, Z4 Technology shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including loss of profits, data, or business opportunities. Our total liability
              for any claim arising from the Services is limited to the amount you paid us in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-slate-800 mb-3">5. Intellectual Property</h2>
            <p className="text-slate-600">
              All AI models, workflows, code, documentation, and materials created by Z4 Technology remain our intellectual property
              unless otherwise agreed in writing. You retain ownership of your business data. We grant you a non-exclusive,
              non-transferable license to use our Services for your internal business operations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-slate-800 mb-3">6. Acceptable Use</h2>
            <p className="text-slate-600">
              You agree not to use our Services for any unlawful purpose, to transmit spam or unsolicited communications,
              to violate any third-party rights, or to interfere with the operation of our platform. We reserve the right
              to suspend or terminate your access for any violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-slate-800 mb-3">7. Governing Law</h2>
            <p className="text-slate-600">
              These Terms are governed by the laws of the State of Tennessee, without regard to conflict of law principles.
              Any disputes shall be resolved in the state or federal courts located in Knox County, Tennessee.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-slate-800 mb-3">8. Contact</h2>
            <p className="text-slate-600">
              For questions about these Terms, contact us at:
              <br />
              <strong>Email:</strong> team@z4technology.com
              <br />
              <strong>Address:</strong> Knoxville, TN
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}