import { Link } from 'react-router-dom';
import Logo from './Logo';
import StarField from './StarField';

// Shared shell for Login, Sign up and Forgot password.
export default function AuthLayout({ title, children, footer }) {
  return (
    <main style={styles.section}>
      <StarField count={7} />
      <div style={styles.glow} aria-hidden="true"></div>

      <Link to="/" style={styles.back} className="link-muted">
        <i className="ti ti-arrow-left" aria-hidden="true"></i> Back to home
      </Link>

      <div style={styles.wrap}>
        <div style={styles.brandBlock}>
          <Link to="/" aria-label="Indigo Brain Box home" style={{ textDecoration: 'none' }}>
            <Logo fontSize={34} showTagline={true} />
          </Link>
          <h1 style={styles.title}>{title}</h1>
        </div>

        <div style={styles.card}>{children}</div>

        {footer && <div style={styles.footer}>{footer}</div>}
      </div>
    </main>
  );
}

const styles = {
  section: {
    position: 'relative',
    minHeight: '100vh',
    background: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 20px 60px',
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '600px',
    maxWidth: '100%',
    height: '600px',
    background: 'radial-gradient(circle, rgba(106,95,214,0.22) 0%, rgba(106,95,214,0) 70%)',
    pointerEvents: 'none',
  },
  back: {
    position: 'absolute',
    top: '24px',
    left: '24px',
    color: 'var(--color-text-faint)',
    fontSize: '13px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    zIndex: 1,
  },
  wrap: {
    position: 'relative',
    width: '100%',
    maxWidth: '400px',
  },
  brandBlock: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  title: {
    color: '#fff',
    fontSize: '24px',
    fontWeight: '500',
    fontFamily: 'var(--font-serif)',
    marginTop: '22px',
  },
  card: {
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.14)',
    borderRadius: '20px',
    padding: 'clamp(22px, 6vw, 32px)',
  },
  footer: {
    textAlign: 'center',
    color: 'var(--color-text-faint)',
    fontSize: '13px',
    marginTop: '24px',
  },
};