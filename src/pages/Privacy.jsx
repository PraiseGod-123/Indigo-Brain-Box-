import { Link } from 'react-router-dom';
import StarField from '../components/StarField';
import { site } from '../config/site';

// DRAFT: a starting template, not legal advice. Have it reviewed by a lawyer before launch,
// and update it once the backend, analytics and payment providers are chosen (Step 2).
const LAST_UPDATED = 'November 2026';

export default function Privacy() {
  const contact = site.contactEmail || 'our contact page';

  return (
    <>
      <section className="page-hero">
        <StarField count={4} />
        <h1 className="page-hero-title">Privacy Policy</h1>
        <p className="page-hero-subtitle">Last updated: {LAST_UPDATED}</p>
      </section>

      <section className="page-section">
        <div className="legal-content">
          <div className="legal-notice">
            Draft: this policy is being finalised ahead of launch and may change.
          </div>

          <p>
            {site.name} ("Indigo", "we", "us") helps people discover business ideas and plan how to launch them. This
            policy explains what personal data we collect, why, and the choices you have. We aim to comply with the
            Nigeria Data Protection Act 2023 and, where it applies, the EU/UK GDPR.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li><strong>Account details:</strong> your name, email address and password (stored encrypted), or your Google profile if you sign in with Google.</li>
            <li><strong>What you tell us:</strong> your interests, the ideas you generate, save or use, and the roadmaps you create.</li>
            <li><strong>Usage data:</strong> pages visited, features used, device and browser type, to understand how Indigo is used and to enforce plan limits.</li>
            <li><strong>Payment details:</strong> handled by our payment provider; we never store your full card number.</li>
            <li><strong>Messages:</strong> anything you send through our contact form.</li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>To run your account and deliver the features you ask for.</li>
            <li>To generate personalised ideas and roadmaps, including with AI services acting on our behalf.</li>
            <li>To improve Indigo, keep it secure and prevent abuse.</li>
            <li>To contact you about your account and, if you opt in, product news.</li>
          </ul>

          <h2>Sharing</h2>
          <p>
            We do not sell your personal data. We share it only with service providers who help us run Indigo (such as
            hosting, database, email, AI and payment providers) under contracts that protect it, or when the law
            requires us to.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask to access, correct, export or delete your data, or object to how we use it. You can delete
            your account at any time. To make a request, contact us via {contact}.
          </p>

          <h2>Retention &amp; security</h2>
          <p>
            We keep your data while your account is active and for a limited time afterwards where needed for legal or
            accounting reasons. We use industry-standard safeguards, including encryption in transit.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? <Link to="/contact" className="link-accent">Get in touch</Link>.
          </p>
        </div>
      </section>
    </>
  );
}