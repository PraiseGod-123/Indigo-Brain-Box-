import { Link } from 'react-router-dom';
import StarField from '../components/StarField';

export default function NotFound() {
  return (
    <section style={styles.section}>
      <StarField count={14} />
      <div style={styles.content}>
        <div style={styles.code}>404</div>
        <h1 style={styles.title}>This idea doesn't exist… yet</h1>
        <p style={styles.text}>The page you're looking for has drifted off into space.</p>
        <div style={styles.actions}>
          <Link to="/" className="btn btn-primary">Back to home</Link>
          <Link to="/explore" className="btn btn-secondary">Explore ideas</Link>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '80px 20px',
    overflow: 'hidden',
    background: 'radial-gradient(circle at 50% 30%, rgba(106,95,214,0.18), #000 60%)',
  },
  content: { position: 'relative' },
  code: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(64px, 14vw, 96px)',
    lineHeight: 1,
    background: 'linear-gradient(135deg,#c3bcf5,#6c5fd6)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    marginBottom: '16px',
  },
  title: {
    color: '#fff',
    fontFamily: 'var(--font-serif)',
    fontWeight: 500,
    fontSize: 'clamp(22px, 4vw, 28px)',
    marginBottom: '10px',
  },
  text: { color: 'var(--color-text-secondary)', fontSize: '14.5px', marginBottom: '28px' },
  actions: { display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' },
};