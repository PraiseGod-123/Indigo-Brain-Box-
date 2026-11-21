import { Link } from 'react-router-dom';
import StarField from '../components/StarField';

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: ['5 idea matches', 'Basic sector filters', '1 roadmap per month'],
    highlighted: false,
  },
  {
    id: 'starter',
    name: 'Starter',
    price: '$9',
    period: '/month',
    features: ['Unlimited idea matches', 'All sector filters', 'Unlimited roadmaps', 'Cost estimates'],
    highlighted: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$24',
    period: '/month',
    features: ['Everything in Starter', 'Marketing plan generator', 'Priority support', 'Export to PDF'],
    highlighted: false,
  },
];

const faqs = [
  { q: 'Can I cancel anytime?', a: 'Yes, cancel whenever you like. No lock-in, no questions asked.' },
  { q: 'Do you offer refunds?', a: 'We offer a 14-day money-back guarantee on all paid plans.' },
  { q: 'Is the free plan really free?', a: 'Yes. No credit card required, no trial period, no catch.' },
];

export default function Pricing() {
  return (
    <>
      <section className="page-hero">
        <StarField count={3} />
        <h1 className="page-hero-title">Simple pricing</h1>
        <p className="page-hero-subtitle">Start free. Upgrade when you're ready to go further.</p>
      </section>

      <section className="page-section">
        <div className="plans-grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              style={plan.highlighted ? { ...styles.planCard, ...styles.planCardHighlighted } : styles.planCard}
            >
              {plan.highlighted && <div style={styles.popularBadge}>Most popular</div>}
              <h2 style={styles.planName}>{plan.name}</h2>
              <div style={styles.planPriceRow}>
                <span style={styles.planPrice}>{plan.price}</span>
                <span style={styles.planPeriod}>{plan.period}</span>
              </div>
              <ul style={styles.featureList}>
                {plan.features.map((f) => (
                  <li key={f} style={styles.featureRow}>
                    <i className="ti ti-check" style={styles.checkIcon} aria-hidden="true"></i>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={`/signup?plan=${plan.id}`}
                className={`btn btn-block ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}
              >
                {plan.id === 'free' ? 'Get started' : `Choose ${plan.name}`}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div style={styles.faqContent}>
          <h2 style={styles.faqTitle}>Common questions</h2>
          {faqs.map((faq) => (
            <div key={faq.q} style={styles.faqItem}>
              <h3 style={styles.faqQ}>{faq.q}</h3>
              <p style={styles.faqA}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const styles = {
  planCard: {
    position: 'relative',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '20px',
    padding: '32px 26px',
    display: 'flex',
    flexDirection: 'column',
  },
  planCardHighlighted: {
    background: 'linear-gradient(160deg,#232066,#12102b)',
    border: '1px solid rgba(129,140,248,0.4)',
    boxShadow: '0 20px 50px rgba(76,63,180,0.35)',
  },
  popularBadge: {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#6c5fd6',
    color: '#fff',
    fontSize: '11px',
    fontWeight: '600',
    padding: '5px 14px',
    borderRadius: '999px',
    whiteSpace: 'nowrap',
  },
  planName: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '14px',
  },
  planPriceRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '4px',
    marginBottom: '24px',
  },
  planPrice: {
    color: '#fff',
    fontSize: '34px',
    fontWeight: '600',
    fontFamily: 'var(--font-serif)',
  },
  planPeriod: {
    color: 'var(--color-text-faint)',
    fontSize: '13px',
  },
  featureList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '28px',
    flex: 1,
  },
  featureRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#c9c5db',
    fontSize: '13px',
  },
  checkIcon: {
    fontSize: '15px',
    color: '#9fe1cb',
    flexShrink: 0,
  },
  faqContent: {
    maxWidth: '680px',
    margin: '0 auto',
  },
  faqTitle: {
    color: '#fff',
    fontSize: '22px',
    fontWeight: '500',
    fontFamily: 'var(--font-serif)',
    marginBottom: '30px',
    textAlign: 'center',
  },
  faqItem: {
    padding: '20px 0',
    borderTop: '1px solid rgba(255,255,255,0.08)',
  },
  faqQ: {
    color: '#fff',
    fontSize: '14.5px',
    fontWeight: '600',
    marginBottom: '8px',
  },
  faqA: {
    color: 'var(--color-text-faint)',
    fontSize: '13px',
    lineHeight: '1.7',
  },
};