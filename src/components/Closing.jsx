import { Link } from 'react-router-dom';
import StarField from './StarField';

export default function Closing() {
  return (
    <section style={styles.section}>
      <StarField count={12} brightness={1.1} />
      <div style={styles.content}>
        <i className="ti ti-rocket" style={styles.icon} aria-hidden="true"></i>
        <h2 style={styles.title}>Ready to start?</h2>
        <p style={styles.subtitle}>Join Indigo and find the business you were meant to build</p>
        <Link to="/signup" className="btn btn-primary" style={{ padding: '12px 26px', fontSize: '14px' }}>
          Get started
        </Link>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    zIndex: 1,
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #000000 0%, #171334 22%, #171334 100%)',
    borderBottomLeftRadius: '24px',
    borderBottomRightRadius: '24px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0 32px',
  },
  content: {
    position: 'relative',
  },
  icon: {
    fontSize: '26px',
    color: 'var(--color-accent-light)',
    marginBottom: '14px',
    display: 'block',
  },
  title: {
    fontFamily: 'var(--font-serif)',
    fontSize: '26px',
    fontWeight: '500',
    marginBottom: '10px',
    color: '#fff',
  },
  subtitle: {
    color: 'var(--color-text-secondary)',
    fontSize: '14px',
    maxWidth: '300px',
    margin: '0 auto 22px',
  },
};