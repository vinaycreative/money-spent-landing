import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "MoneySpent Privacy Policy: how we collect, use, and protect personal and financial tracking data.",
  path: "/privacy",
})

export default function PrivacyPage() {
  return (
    <>
      <h1 className="lp-serif mb-8 text-4xl font-bold tracking-tight text-lp-ink sm:text-5xl">
        Privacy Policy
      </h1>
      
      <div className="space-y-10 text-base leading-relaxed text-lp-ink-mute">
        <p className="text-sm">Last updated: July 18, 2026</p>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">1. Introduction</h2>
          <p>
            Welcome to MoneySpent. We respect your privacy and are deeply committed to protecting your personal data. This Privacy Policy comprehensively outlines how we collect, use, process, and safeguard your information when you use our website, mobile applications, and related services (collectively, the "Service"). By accessing or using MoneySpent, you consent to the data practices described in this policy.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">2. Information We Collect</h2>
          <p className="mb-3">We collect several different types of information to provide and improve our Service to you:</p>
          <ul className="list-inside list-disc space-y-3 pl-4">
            <li><strong>Personal Identification Information:</strong> When you register for an account, we may collect personally identifiable information, such as your email address, name, and profile data.</li>
            <li><strong>Financial Data:</strong> As a personal finance tracker, we store the data you actively input, including account names, balances, budgets, expense categories, and transaction histories. We <strong>do not</strong> link directly to your bank accounts unless explicitly stated via a secure third-party provider, and we do not store your banking credentials.</li>
            <li><strong>Device and Usage Data:</strong> We may automatically collect information about how the Service is accessed and used. This may include your device's Internet Protocol (IP) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and diagnostic data.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our Service and store certain information. For detailed information, please review our Cookie Policy.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">3. How We Use Your Information</h2>
          <p className="mb-3">MoneySpent uses the collected data for various fundamental purposes:</p>
          <ul className="list-inside list-disc space-y-2 pl-4">
            <li>To provide, operate, and maintain our Service.</li>
            <li>To authenticate users and secure user accounts.</li>
            <li>To personalize your experience and deliver content and product features relevant to your financial goals.</li>
            <li>To provide customer support and respond to your inquiries.</li>
            <li>To monitor the usage of our Service and conduct internal analytics to improve user experience.</li>
            <li>To detect, prevent, and address technical issues or fraudulent activities.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">4. Information Sharing and Disclosure</h2>
          <p className="mb-3">We adhere to a strict "Private by Design" philosophy. <strong>We do not sell, rent, or trade your personal or financial data to third parties.</strong> We may share your information only in the following limited situations:</p>
          <ul className="list-inside list-disc space-y-2 pl-4">
            <li><strong>With Service Providers:</strong> We may share your data with trusted third-party vendors who assist us in operating our infrastructure (e.g., cloud hosting providers, database services). These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</li>
            <li><strong>For Legal Compliance:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</li>
            <li><strong>Business Transfers:</strong> If MoneySpent is involved in a merger, acquisition, or asset sale, your Personal Data may be transferred. We will provide notice before your Personal Data is transferred and becomes subject to a different Privacy Policy.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">5. Data Security and Retention</h2>
          <p className="mb-3">
            The security of your data is our paramount concern. We employ industry-standard encryption protocols (such as TLS/SSL) for data in transit and secure encryption for data at rest. While we strive to use commercially acceptable means to protect your Personal Data, no method of transmission over the Internet is 100% secure, and we cannot guarantee its absolute security.
          </p>
          <p>
            We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies. When you delete your account, your financial data is permanently purged from our active databases.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">6. Your Privacy Rights (GDPR & CCPA)</h2>
          <p className="mb-3">Depending on your location, you may have specific rights regarding your personal data:</p>
          <ul className="list-inside list-disc space-y-2 pl-4">
            <li><strong>Right to Access:</strong> You can request a copy of the personal data we hold about you.</li>
            <li><strong>Right to Rectification:</strong> You can request that we correct any inaccurate or incomplete data.</li>
            <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> You can request the deletion of your personal data, subject to certain legal exceptions.</li>
            <li><strong>Right to Restrict Processing:</strong> You can ask us to pause the processing of your personal data.</li>
            <li><strong>Right to Data Portability:</strong> You have the right to receive your data in a structured, commonly used, and machine-readable format.</li>
          </ul>
          <p className="mt-3">To exercise any of these rights, please contact us using the information provided at the end of this policy.</p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">7. Children's Privacy</h2>
          <p>
            Our Service is not intended for use by anyone under the age of 13 (or 16 in certain jurisdictions). We do not knowingly collect personally identifiable information from children. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us so we can take steps to remove that information from our servers.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">8. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">9. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us via email at privacy@vinaycreative.com.
          </p>
        </section>
      </div>
    </>
  )
}
