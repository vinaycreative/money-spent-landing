<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the MoneySpent landing page. PostHog is now initialized via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+) with a reverse proxy configured in `next.config.ts` for improved reliability. Eight custom events are tracked across five landing page components, covering all primary conversion touchpoints: hero CTAs, bottom CTA section, site header, FAQ engagement, and footer links.

| Event Name | Description | File |
|---|---|---|
| `hero_cta_clicked` | User clicked the primary "Start tracking →" button in the hero section | `components/landing/HeroSection.tsx` |
| `hero_explore_clicked` | User clicked "Explore the app" secondary link in the hero section | `components/landing/HeroSection.tsx` |
| `cta_get_started_clicked` | User clicked "Get Started Now" button in the bottom CTA section | `components/landing/CtaSection.tsx` |
| `cta_sign_in_clicked` | User clicked "Sign in to account" link in the bottom CTA section | `components/landing/CtaSection.tsx` |
| `header_try_it_free_clicked` | User clicked "Try it free" button in the site header | `components/landing/SiteHeader.tsx` |
| `header_sign_in_clicked` | User clicked "Sign in" link in the site header | `components/landing/SiteHeader.tsx` |
| `faq_question_expanded` | User expanded a FAQ item (includes `question` and `question_index` properties) | `components/landing/FaqSection.tsx` |
| `footer_cta_clicked` | User clicked "Get started" or "Sign in" link in the site footer (includes `label` property) | `components/landing/SiteFooter.tsx` |

**Files created/modified:**
- `instrumentation-client.ts` — PostHog initialization (new file)
- `next.config.ts` — Added reverse proxy rewrites for PostHog ingestion
- `.env.local` — Added `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST`

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1591720)
- [CTA Clicks Over Time](/insights/HjkVyrGF) — Total clicks on primary CTAs over the last 30 days
- [Unique Visitors Clicking CTAs](/insights/v0z2SzEx) — Daily unique users clicking each CTA location
- [Landing Page Conversion Funnel](/insights/1jPzeHDo) — Hero vs. bottom CTA conversion comparison
- [FAQ Engagement](/insights/RWNhhURm) — How often visitors expand FAQ questions
- [Sign In vs Get Started Split](/insights/ihA4r8De) — New vs. returning visitor intent breakdown

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
