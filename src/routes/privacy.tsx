import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({ component: PrivacyPage });

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white font-body pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate-400 mb-12">Last updated: July 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-sm leading-relaxed">
          <section>
            <p className="text-slate-600">
              Z4 Technology ("Company", "we", "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-slate-800 mb-3">1. Information We Collect</h2>
            <p className="text-slate-600 mb-2">We collect the following types of information:</p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and business name when you sign up for a trial, contact us, or use our services.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website and services, including pages visited, time spent, and feature usage.</li>
              <li><strong>Communication Data:</strong> Records of your communications with us, including emails, SMS messages, and support inquiries.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-slate-800 mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>To provide, maintain, and improve our Services</li>
              <li>To communicate with you about your account, trial, and service updates</li>
              <li>To send promotional communications (only with your consent)</li>
              <li>To respond to your inquiries and support requests</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-slate-800 mb-3">3. Data Sharing</h2>
            <p className="text-slate-600 font-bold">We do not sell your personal data. Period.</p>
            <p className="text-slate-600 mt-2">We may share your information only in these limited circumstances:</p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li><strong>Service Providers:</strong> We use trusted third-party services to operate our business (see Section 5). They only access data necessary to perform their functions.</li>
              <li><strong>Legal Requirements:</strong> If required by law, court order, or government regulation.</li>
              <li><strong>Business Transfer:</strong> In connection with a merger, acquisition, or sale of assets.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-slate-800 mb-3">4. SMS Communications</h2>
            <p className="text-slate-600">
              By providing your phone number, you consent to receive SMS messages from Z4 Technology regarding your trial, account, and service updates.
            </p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1 mt-2">
              <li><strong>Message frequency:</strong> Varies based on your service usage and account activity. Typically 2-5 messages per month.</li>
              <li><strong>Opt-out:</strong> Reply STOP to any message to unsubscribe. Reply HELP for assistance.</li>
              <li><strong>Carrier disclaimer:</strong> Message and data rates may apply. Carriers are not liable for delayed or undelivered messages.</li>
            </ul>
            <p className="text-slate-600 mt-2 font-bold">
              No mobile information will be shared with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-slate-800 mb-3">5. Third-Party Services</h2>
            <p className="text-slate-600 mb-2">We use the following third-party services to operate our platform:</p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li><strong>Supabase:</strong> Database and authentication infrastructure. <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Privacy Policy</a></li>
              <li><strong>Vercel:</strong> Website hosting and content delivery. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Privacy Policy</a></li>
              <li><strong>Stripe:</strong> Payment processing. <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Privacy Policy</a></li>
              <li><strong>Resend:</strong> Transactional email delivery. <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Privacy Policy</a></li>
              <li><strong>ElevenLabs:</strong> AI voice generation. <a href="https://elevenlabs.io/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Privacy Policy</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-slate-800 mb-3">6. Cookies</h2>
            <p className="text-slate-600">
              We use essential cookies to ensure our website functions properly. We may also use analytics cookies to understand
              how visitors use our site. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-slate-800 mb-3">7. Data Retention</h2>
            <p className="text-slate-600">
              We retain your personal information for as long as your account is active or as needed to provide you services.
              You may request deletion of your data at any time by contacting us. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-slate-800 mb-3">8. Your Rights</h2>
            <p className="text-slate-600 mb-2">You have the right to:</p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-slate-800 mb-3">9. Contact Us</h2>
            <p className="text-slate-600">
              For privacy-related questions or to exercise your data rights, contact us at:
              <br />
              <strong>Email:</strong> support@z4technology.com
              <br />
              <strong>Address:</strong> Knoxville, TN
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}