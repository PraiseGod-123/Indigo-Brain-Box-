import { Link } from 'react-router-dom';
import StarField from '../components/StarField';
import { site } from '../config/site';

// DRAFT: a starting template, not legal advice. Have it reviewed by a lawyer before launch.
const LAST_UPDATED = 'November 2026';

export default function Terms() {
  return (
    <>
      <section className="page-hero">
        <StarField count={4} />
        <h1 className="page-hero-title">Terms of Service</h1>
        <p className="page-hero-subtitle">Last updated: {LAST_UPDATED}</p>
      </section>

      <section className="page-section">
        <div className="legal-content">
          <div className="legal-notice">
            Draft: these terms are being finalised ahead of launch and may change.
          </div>

          <p>
            By creating an account or using {site.name} you agree to these terms. If you don't agree, please don't use
            the service.
          </p>

          <h2>The service</h2>
          <p>
            Indigo suggests business ideas and produces roadmaps, cost estimates and related guidance, partly using
            AI. This content is for information and inspiration only. It is not financial, legal or professional
            advice, and estimates may not reflect your actual costs or results. Always do your own research before
            making business decisions.
          </p>

          <h2>Your account</h2>
          <ul>
            <li>You must give accurate information and keep your password safe.</li>
            <li>You're responsible for activity on your account.</li>
            <li>Don't misuse the service: no scraping, reverse engineering, or attempts to break plan limits or security.</li>
          </ul>

          <h2>Plans &amp; payments</h2>
          <p>
            Paid plans are billed in advance each month and renew automatically until cancelled. You can cancel at any
            time; access continues until the end of the paid period. New paid subscriptions include a 14-day
            money-back guarantee, as described on our <Link to="/pricing" className="link-accent">pricing page</Link>.
          </p>

          <h2>Your content</h2>
          <p>
            Ideas and plans you create with Indigo are yours to use. You give us permission to store and process them
            only to provide and improve the service.
          </p>

          <h2>Changes &amp; termination</h2>
          <p>
            We may update these terms and will tell you about significant changes. We may suspend accounts that break
            these terms. You can close your account at any time.
          </p>

          <h2>Liability</h2>
          <p>
            Indigo is provided "as is". To the extent allowed by law, we aren't liable for indirect losses or for
            decisions you make based on content from the service.
          </p>

          <h2>Contact</h2>
          <p>
            Questions? <Link to="/contact" className="link-accent">Get in touch</Link>.
          </p>
        </div>
      </section>
    </>
  );
}