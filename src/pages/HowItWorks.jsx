import { Link } from 'react-router-dom';
import StarField from '../components/StarField';

const steps = [
  {
    num: '1',
    label: 'Tell us your interests',
    title: 'What do you actually enjoy?',
    text: 'Pick what excites you: cooking, tech, wellness, whatever it is. No business background needed.',
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
      <section className="page-hero" style={{ paddingBottom: '50px' }}>
        <StarField count={2} />
        <h1 className="page-hero-title">How it works</h1>
        <p className="page-hero-subtitle">From "I have no idea" to a real plan, in four steps.</p>
      </section>

      <section className="page-section">
        <div style={styles.timelineWrap}>
          <div style={styles.line} aria-hidden="true"></div>
          <ol style={{ listStyle: 'none' }}>
          {steps.map((step, i) => (
            <li
              key={step.num}
              style={{ ...styles.step, paddingBottom: i === steps.length - 1 ? 0 : '48px' }}
            >
              <div style={step.final ? styles.dotFinal : styles.dot} aria-hidden="true">{step.num}</div>
              <div style={{ ...styles.label, color: step.final ? '#a79df5' : '#8b7ff0' }}>{step.label}</div>
              <h2 style={styles.stepTitle}>{step.title}</h2>
              <p style={styles.stepText}>{step.text}</p>
            </li>
          ))}
          </ol>
        </div>
      </section>

      <section style={styles.closing}>
        <h2 style={styles.closingTitle}>Ready to find your idea?</h2>
        <p style={styles.closingSubtext}>It takes less time than deciding what to have for dinner.</p>
        <Link to="/signup" className="btn btn-primary">Get started</Link>
      </section>
    </>
  );
}

const dotBase = {
  position: 'absolute',
  left: '-52px',
  top: 0,
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  fontWeight: '600',
  fontFamily: 'var(--font-serif)',
};

const styles = {
  timelineWrap: {
    position: 'relative',
    maxWidth: '560px',
    margin: '0 auto',
    paddingLeft: '52px',
    listStyle: 'none',
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
    ...dotBase,
    background: '#12102b',
    border: '2px solid #6c5fd6',
    color: '#c3bcf5',
  },
  dotFinal: {
    ...dotBase,
    background: '#6c5fd6',
    border: '2px solid #8b7ff0',
    color: '#fff',
  },
  label: {
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
    color: 'var(--color-text-faint)',
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
};