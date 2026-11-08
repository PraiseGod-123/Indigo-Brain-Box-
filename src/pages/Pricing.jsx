const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: ['5 idea matches', 'Basic sector filters', '1 roadmap per month'],
    highlighted: false,
  },
  {
    name: 'Starter',
    price: '$9',
    period: '/month',
    features: ['Unlimited idea matches', 'All sector filters', 'Unlimited roadmaps', 'Cost estimates'],
    highlighted: true,
  },
  {
    name: 'Pro',
    price: '$24',
    period: '/month',
    features: ['Everything in Starter', 'Marketing plan generator', 'Priority support', 'Export to PDF'],
    highlighted: false,
  },
];

const faqs = [
  { q: 'Can I cancel anytime?', a: 'Yes, cancel whenever you like — no lock-in, no questions asked.' },
  { q: 'Do you offer refunds?', a: 'We offer a 14-day money-back guarantee on all paid plans.' },
  { q: 'Is the free plan really free?', a: 'Yes. No credit card required, no trial period, no catch.' },
];

export default function Pricing() {
  return (
    <>
      <section style={styles.hero}>
        <svg width="100%" height="100%" style={styles.stars}>
          <circle cx="8%" cy="10%" r="1.1" fill="#fff" opacity="0.6" />
          <circle cx="92%" cy="15%" r="1" fill="#fff" opacity="0.5" />
          <circle cx="20%" cy="8%" r="0.8" fill="#fff" opacity="0.4" />
        </svg>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Simple pricing</h1>
          <p style={styles.heroSubtitle}>Start free. Upgrade when you're ready to go further.</p>
        </div>
      </section>

      <section style={styles.plansSection}>
        <div style={styles.plansGrid}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={plan.highlighted ? { ...styles.planCard, ...styles.planCardHighlighted } : styles.planCard}
            >
              {plan.highlighted && <div style={styles.popularBadge}>Most popular</div>}
              <div style={styles.planName}>{plan.name}</div>
              <div style={styles.planPriceRow}>
                <span style={styles.planPrice}>{plan.price}</span>
                <span style={styles.planPeriod}>{plan.period}</span>
              </div>
              <div style={styles.featureList}>
                {plan.features.map((f) => (
                  <div key={f} style={styles.featureRow}>
                    <i className="ti ti-check" style={styles.checkIcon}></i>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <button
                style={plan.highlighted ? { ...styles.planBtn, ...styles.planBtnHighlighted } : styles.planBtn}
              >
                {plan.name === 'Free' ? 'Get started' : `Choose ${plan.name}`}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.faqSection}>
        <div style={styles.faqContent}>
          <div style={styles.faqTitle}>Common questions</div>
          {faqs.map((faq) => (
            <div key={faq.q} style={styles.faqItem}>
              <div style={styles.faqQ}>{faq.q}</div>
              <div style={styles.faqA}>{faq.a}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const styles = {
  hero: {
    position: 'relative',
    background: '#000',
    padding: '70px 44px 40px',
    overflow: 'hidden',
    textAlign: 'center',
  },
  stars: { position: 'absolute', inset: 0 },
  heroContent: { position: 'relative' },
  heroTitle: {
    color: '#fff',
    fontSize: '32px',
    fontWeight: '500',
    fontFamily: 'var(--font-serif)',
    marginBottom: '12px',
  },
  heroSubtitle: {
    color: 'var(--color-text-secondary)',
    fontSize: '14.5px',
  },

  plansSection: {
    position: 'relative',
    background: '#000',
    padding: '20px 44px 80px',
  },
  plansGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    maxWidth: '920px',
    margin: '0 auto',
  },
  planCard: {
    position: 'relative',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '20px',
    padding: '32px 26px',
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
    color: '#8b86a0',
    fontSize: '13px',
  },
  featureList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '28px',
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
  planBtn: {
    width: '100%',
    background: 'rgba(255,255,255,0.06)',
    color: '#e2e0ef',
    border: '0.5px solid rgba(255,255,255,0.16)',
    padding: '11px',
    borderRadius: '9px',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
  },
  planBtnHighlighted: {
    background: '#6c5fd6',
    color: '#fff',
    border: 'none',
  },

  faqSection: {
    position: 'relative',
    background: '#000',
    padding: '20px 44px 80px',
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
    color: '#8b86a0',
    fontSize: '13px',
    lineHeight: '1.7',
  },
};