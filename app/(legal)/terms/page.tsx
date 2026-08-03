import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Terms of Service",
  description: "Terms and conditions for using MoneySpent personal finance and expense tracking.",
  path: "/terms",
})

export default function TermsPage() {
  return (
    <>
      <h1 className="lp-serif mb-8 text-4xl font-bold tracking-tight text-lp-ink sm:text-5xl">
        Terms of Service
      </h1>
      
      <div className="space-y-10 text-base leading-relaxed text-lp-ink-mute">
        <p className="text-sm">Last updated: July 18, 2026</p>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">1. Acceptance of Terms</h2>
          <p>
            These Terms of Service ("Terms", "Terms of Service") govern your relationship with the MoneySpent application (the "Service") operated by VinayCreative ("us", "we", or "our"). Please read these Terms of Service carefully before using our Service. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">2. Description of Service and Modifications</h2>
          <p>
            MoneySpent is a personal finance tracker designed to help you record expenses, manage budgets, and monitor your personal accounts. We reserve the right to withdraw or amend our Service, and any service or material we provide, in our sole discretion without notice. We will not be liable if, for any reason, all or any part of the Service is unavailable at any time or for any period.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">3. Account Registration and Security</h2>
          <p className="mb-3">To access certain features of the Service, you may be required to register for an account. By registering, you agree to:</p>
          <ul className="list-inside list-disc space-y-2 pl-4">
            <li>Provide accurate, current, and complete information.</li>
            <li>Maintain the security and confidentiality of your password and identification.</li>
            <li>Promptly update your account information to keep it accurate and complete.</li>
            <li>Accept full responsibility for all activities that occur under your account.</li>
          </ul>
          <p className="mt-3">You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">4. Pricing and "Free for Early Users"</h2>
          <p>
            MoneySpent currently offers its core features completely free of charge to early adopters. We do not require a credit card to create an account. However, we reserve the right to introduce premium, paid features or subscription tiers in the future. Should this occur, your existing data and the foundational tracking features will remain accessible, and you will never be retroactively charged for previously free services without your explicit consent and a clear opt-in process.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">5. User Conduct and Acceptable Use</h2>
          <p className="mb-3">You agree not to use the Service:</p>
          <ul className="list-inside list-disc space-y-2 pl-4">
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which may harm the Service or users of the Service.</li>
            <li>To impersonate or attempt to impersonate MoneySpent, a MoneySpent employee, another user, or any other person or entity.</li>
            <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Service, the server on which the Service is stored, or any server, computer, or database connected to the Service.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">6. Intellectual Property Rights</h2>
          <p>
            The Service and its original content (excluding user-generated data), features, and functionality are and will remain the exclusive property of VinayCreative and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of VinayCreative.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">7. Disclaimer of Warranties; No Financial Advice</h2>
          <p>
            Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied. <br/><br/>
            <strong>Crucially, MoneySpent is purely an informational tracking tool. We do not provide financial, investment, legal, or tax advice.</strong> You should consult with a professional financial advisor before making any significant financial decisions based on the data visualized in our application.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">8. Limitation of Liability</h2>
          <p>
            In no event shall VinayCreative, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">9. Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or delete your account through the application settings.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">10. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in Bangalore, Karnataka, India.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">11. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at legal@vinaycreative.com.
          </p>
        </section>
      </div>
    </>
  )
}
