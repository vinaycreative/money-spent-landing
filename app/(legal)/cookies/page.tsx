import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Cookie Policy",
  description:
    "How MoneySpent uses cookies and local storage for analytics, preferences, and product improvement.",
  path: "/cookies",
})

export default function CookiePage() {
  return (
    <>
      <h1 className="lp-serif mb-8 text-4xl font-bold tracking-tight text-lp-ink sm:text-5xl">
        Cookie Policy
      </h1>
      
      <div className="space-y-10 text-base leading-relaxed text-lp-ink-mute">
        <p className="text-sm">Last updated: July 18, 2026</p>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">1. Introduction to Cookies</h2>
          <p>
            This Cookie Policy explains what cookies are, how MoneySpent uses them, the types of cookies we use, and how you can manage your cookie preferences. By continuing to use our website and application, you are agreeing to our use of cookies as described in this policy.
          </p>
          <p className="mt-3">
            Cookies are small data files stored on your browser or device. They allow websites to remember your actions and preferences (such as login details, language, and display preferences) over a period of time, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">2. Our Stance on Privacy and Trackers</h2>
          <p>
            At MoneySpent, we prioritize your privacy above all else. <strong>We do not use invasive third-party tracking cookies, advertising pixels, or cross-site tracking scripts.</strong> We do not profile your browsing habits to sell you advertisements. The storage mechanisms we use are strictly limited to those necessary to make our application function reliably and securely.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">3. Types of Cookies and Storage We Use</h2>
          <p className="mb-3">We utilize the following categories of cookies and web storage (Local Storage and Session Storage):</p>
          
          <div className="space-y-6 mt-4">
            <div>
              <h3 className="font-semibold text-lp-ink">A. Strictly Necessary Cookies</h3>
              <p className="mt-1">
                These cookies are essential for you to browse the application and use its features. Without these cookies, services like secure login authentication and session management cannot be provided. They are typically set in response to actions made by you, such as logging in or filling in forms.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lp-ink">B. Functionality and Preference Storage</h3>
              <p className="mt-1">
                We use browser Local Storage to remember choices you make to improve your experience. For example, we store your preferred UI theme (Light Mode vs. Dark Mode) and preferred accent colors locally on your device. This ensures the app looks exactly how you want it to the moment you open it, without needing to ping a server.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lp-ink">C. Performance and Analytics</h3>
              <p className="mt-1">
                We may use privacy-friendly, anonymized analytics to understand how users interact with our application (e.g., measuring page load times or identifying crashing bugs). This data is aggregated, contains no personally identifiable financial information, and is used solely to improve the app's performance.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">4. First-Party vs. Third-Party Cookies</h2>
          <p>
            <strong>First-party cookies</strong> are set directly by the website you are visiting (MoneySpent). We heavily rely on first-party cookies for core functionality.
            <br/><br/>
            <strong>Third-party cookies</strong> are set by a domain other than the one you are visiting. Because we do not run advertisements or utilize invasive marketing networks, our use of third-party cookies is effectively non-existent, except perhaps for secure payment gateways if premium features are utilized in the future.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">5. How to Manage Your Cookies</h2>
          <p className="mb-3">
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our application may be severely restricted (for example, you may not be able to log in securely).
          </p>
          <p>
            To learn how to manage cookies on popular browsers, please visit the help pages of your specific browser:
          </p>
          <ul className="list-inside list-disc space-y-1 pl-4 mt-2">
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Apple Safari</li>
            <li>Microsoft Edge</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-lp-ink">6. Contact Us</h2>
          <p>
            If you have any questions or concerns about our use of cookies, please contact us at privacy@vinaycreative.com.
          </p>
        </section>
      </div>
    </>
  )
}
