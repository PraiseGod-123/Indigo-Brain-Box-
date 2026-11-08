import { Link } from 'react-router-dom';
import Logo from './Logo';


export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.brandLink}>
        <Logo fontSize={22} showTagline={true} layout="beside" />
      </Link>

      <div style={styles.links}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/about" style={styles.navLink}>About</Link>
        <Link to="/blog" style={styles.navLink}>Blog</Link>
        <Link to="/contact" style={styles.navLink}>Contact</Link>
        <Link to="/explore" style={styles.navLink}>Explore ideas</Link>
        <Link to="/pricing" style={styles.navLink}>Pricing</Link>
        <Link to="/how-it-works" style={styles.navLink}>How it works</Link>
      </div>

      <div style={styles.actions}>
        <Link to="/login" style={styles.loginBtn}>Log in</Link>
        <Link to="/signup" style={styles.ctaBtn}>Get started</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 36px',
    borderBottom: '0.5px solid rgba(255,255,255,0.06)',
    background: 'rgba(0,0,0,0.15)',
    backdropFilter: 'blur(8px)',
  },
  brandLink: {
    textDecoration: 'none',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '22px',
    color: 'var(--color-text-secondary)',
    fontSize: '13.5px',
  },
  navLink: {
    color: 'inherit',
    textDecoration: 'none',
  },
  actions: {
    display: 'flex',
    gap: '10px',
  },
  loginBtn: {
    background: 'transparent',
    color: 'var(--color-text-primary)',
    border: '0.5px solid var(--color-border)',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '13px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  },
  ctaBtn: {
    background: 'var(--color-accent)',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  },
};