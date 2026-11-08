import { Link } from 'react-router-dom';



const steps = [
  {
    num: '1',
    label: 'Tell us your interests',
    title: 'What do you actually enjoy?',
    text: 'Pick what excites you, cooking, tech, wellness, whatever it is. No business background needed.',
  },
  {
    num: '2',
    label: 'Get matched ideas',
    title: '1000+ ideas, narrowed to yours',
    text: "We filter every idea by sector and by what you told us, so you're not scrolling through noise.",
  },
  {
    num: '3',
    label: 'Get your roadmap',
    title: 'A real, step by step plan',
    text: 'Target market, business model, funding needed, marketing, all broken down for your specific idea.',
  },
  {
    num: '4',
    label: 'Launch it',
    title: 'Take the first real step',
    text: 'Real numbers, a real plan, and a next step you can act on today.',
    final: true,
  },
];

export default function HowItWorks() {
  return (
    <>
      <section style={styles.hero}>
        <svg width="100%" height="100%" style={styles.stars}>
          <circle cx="8%" cy="10%" r="1.1" fill="#fff" opacity="0.6" />
          <circle cx="92%" cy="15%" r="1" fill="#fff" opacity="0.5" />
        </svg>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>How it works</h1>
          <p style={styles.heroSubtitle}>From "I have no idea" to a real plan, in four steps.</p>
        </div>
      </section>

      <section style={styles.timelineSection}>
        <div style={styles.timelineWrap}>
          <div style={styles.line}></div>

          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                ...styles.step,
                paddingBottom: i === steps.length - 1 ? 0 : '48px',
              }}
            >
              <div style={step.final ? styles.dotFinal : styles.dot}>{step.num}</div>
              <div style={step.final ? styles.labelFinal : styles.label}>{step.label}</div>
              <div style={styles.stepTitle}>{step.title}</div>
              <div style={styles.stepText}>{step.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.closing}>
        <div style={styles.closingTitle}>Ready to find your idea?</div>
        <div style={styles.closingSubtext}>It takes less time than deciding what to have for dinner.</div>
        <Link to="/signup" style={styles.closingBtn}>Get started</Link>
      </section>
    </>
  );
}

const styles = {
  hero: {
    position: 'relative',
    background: '#000',
    padding: '70px 44px 50px',
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

  timelineSection: {
    position: 'relative',
    background: '#000',
    padding: '20px 44px 80px',
  },
  timelineWrap: {
    position: 'relative',
    maxWidth: '560px',
    margin: '0 auto',
    paddingLeft: '52px',
  },
  line: {
    position: 'absolute',
    left: '19px',
    top: '8px',
    bottom: '8px',
    width: '2px',
    background: 'linear-gradient(180deg, #378ADD, #6c5fd6, #8b7ff0)',
  },
  step: {
    position: 'relative',
  },
  dot: {
    position: 'absolute',
    left: '-52px',
    top: 0,
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#12102b',
    border: '2px solid #6c5fd6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#c3bcf5',
    fontSize: '14px',
    fontWeight: '600',
    fontFamily: 'var(--font-serif)',
  },
  dotFinal: {
    position: 'absolute',
    left: '-52px',
    top: 0,
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#6c5fd6',
    border: '2px solid #8b7ff0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '14px',
    fontWeight: '600',
    fontFamily: 'var(--font-serif)',
  },
  label: {
    color: '#6c5fd6',
    fontSize: '11px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '6px',
  },
  labelFinal: {
    color: '#8b7ff0',
    fontSize: '11px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '6px',
  },
  stepTitle: {
    color: '#fff',
    fontSize: '17px',
    fontWeight: '500',
    fontFamily: 'var(--font-serif)',
    marginBottom: '8px',
    lineHeight: '1.3',
  },
  stepText: {
    color: '#8b86a0',
    fontSize: '13px',
    lineHeight: '1.65',
  },

  closing: {
    position: 'relative',
    background: '#171334',
    padding: '70px 32px',
    textAlign: 'center',
  },
  closingTitle: {
    color: '#fff',
    fontSize: '20px',
    fontWeight: '500',
    fontFamily: 'var(--font-serif)',
    marginBottom: '8px',
  },
  closingSubtext: {
    color: 'var(--color-text-secondary)',
    fontSize: '13px',
    marginBottom: '18px',
  },
  closingBtn: {
    background: 'var(--color-accent)',
    color: '#fff',
    border: 'none',
    padding: '10px 22px',
    borderRadius: '9px',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  },
};