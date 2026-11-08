import { Link } from 'react-router-dom';

export default function Closing() {
  return (
    <section style={styles.section}>
      <svg width="100%" height="100%" style={styles.stars}>
        <circle cx="8%" cy="10%" r="1.2" fill="#fff" opacity="0.7" />
        <circle cx="20%" cy="6%" r="0.9" fill="#fff" opacity="0.5" />
        <circle cx="35%" cy="14%" r="1" fill="#fff" opacity="0.55" />
        <circle cx="60%" cy="8%" r="0.9" fill="#fff" opacity="0.5" />
        <circle cx="78%" cy="15%" r="1.1" fill="#fff" opacity="0.6" />
        <circle cx="90%" cy="10%" r="0.9" fill="#fff" opacity="0.5" />
        <circle cx="6%" cy="35%" r="0.8" fill="#fff" opacity="0.4" />
        <circle cx="94%" cy="38%" r="0.9" fill="#fff" opacity="0.45" />
        <circle cx="12%" cy="70%" r="0.8" fill="#fff" opacity="0.4" />
        <circle cx="88%" cy="68%" r="0.8" fill="#fff" opacity="0.4" />
        <circle cx="30%" cy="85%" r="0.7" fill="#fff" opacity="0.35" />
        <circle cx="70%" cy="88%" r="0.8" fill="#fff" opacity="0.4" />
      </svg>
      <div style={styles.content}>
        <i className="ti ti-rocket" style={styles.icon}></i>
        <h2 style={styles.title}>Ready to start?</h2>
        <p style={styles.subtitle}>Join Indigo and find the business you were meant to build</p>
        <Link to="/signup" style={styles.btn}>Get started </Link>
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
  stars: {
    position: 'absolute',
    inset: 0,
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
  btn: {
    background: 'var(--color-accent)',
    color: '#fff',
    border: 'none',
    padding: '12px 26px',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inlinw-block',
  },
};