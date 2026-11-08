import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <svg width="100%" height="100%" style={styles.stars}>
        <circle cx="5%" cy="15%" r="1" fill="#fff" opacity="0.5" />
        <circle cx="15%" cy="8%" r="0.8" fill="#fff" opacity="0.4" />
        <circle cx="40%" cy="12%" r="0.9" fill="#fff" opacity="0.45" />
        <circle cx="65%" cy="6%" r="0.8" fill="#fff" opacity="0.4" />
        <circle cx="85%" cy="14%" r="1" fill="#fff" opacity="0.5" />
        <circle cx="95%" cy="30%" r="0.8" fill="#fff" opacity="0.4" />
        <circle cx="8%" cy="60%" r="0.7" fill="#fff" opacity="0.35" />
        <circle cx="50%" cy="50%" r="0.7" fill="#fff" opacity="0.3" />
        <circle cx="92%" cy="70%" r="0.8" fill="#fff" opacity="0.35" />
        <circle cx="25%" cy="90%" r="0.7" fill="#fff" opacity="0.3" />
      </svg>

      <div style={styles.grid}>
        <div>
          <div style={styles.brandRow}>
            <Logo fontSize={20} />
          </div>
          <p style={styles.tagline}>
            Helping you find, plan, and launch the business you were meant to start.
          </p>
          <div style={styles.socialRow}>
            <a href="#" style={styles.socialIcon}>
              <i className="ti ti-brand-x" style={{ fontSize: '14px' }}></i>
            </a>
            <a href="#" style={styles.socialIcon}>
              <i className="ti ti-brand-instagram" style={{ fontSize: '14px' }}></i>
            </a>
            <a href="#" style={styles.socialIcon}>
              <i className="ti ti-brand-linkedin" style={{ fontSize: '14px' }}></i>
            </a>
          </div>
        </div>

        <div>
          <div style={styles.colTitle}>Product</div>
          <div style={styles.linkCol}>
            <Link to="/about" style={styles.footerLink}>About</Link>
            <Link to="/blog" style={styles.footerLink}>Blog</Link>
            <Link to="/contact" style={styles.footerLink}>Contact</Link>
          </div>
        </div>

        <div>
          <div style={styles.colTitle}>Company</div>
          <div style={styles.linkCol}>
            <span>About</span>
            <span>Blog</span>
            <span>Contact</span>
          </div>
        </div>

        <div>
          <div style={styles.colTitle}>Legal</div>
          <div style={styles.linkCol}>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>

      <div style={styles.bottomRow}>
        <span>© 2026 Indigo Brain Box. All rights reserved.</span>
        <span>Find the business you were meant to start</span>
      </div>
    </footer>
  );
}

const styles = {
 footer: {
    position: 'relative',
    zIndex: 1,
    background: '#000000',
    padding: '56px 40px 24px',
    overflow: 'hidden',
  },
  stars: {
    position: 'absolute',
    inset: 0,
  },
  grid: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
    gap: '32px',
    marginBottom: '40px',
    maxWidth: '1100px',
    margin: '0 auto 40px',
  },
  brandRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px',
  },
  brandIcon: {
    fontSize: '20px',
    color: 'var(--color-accent-light)',
  },
  brandText: {
    color: '#fff',
    fontSize: '18px',
    fontWeight: '500',
    fontFamily: 'var(--font-serif)',
  },
  tagline: {
    color: 'var(--color-text-muted)',
    fontSize: '12.5px',
    lineHeight: '1.6',
    maxWidth: '220px',
  },
  socialRow: {
    display: 'flex',
    gap: '10px',
    marginTop: '18px',
  },
  socialIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '9px',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#c9c5db',
    textDecoration: 'none',
    transition: 'background 0.2s ease, color 0.2s ease',
  },
  colTitle: {
    color: '#fff',
    fontSize: '12.5px',
    fontWeight: '500',
    marginBottom: '14px',
  },
  linkCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    color: 'var(--color-text-muted)',
    fontSize: '12.5px',
  },
  bottomRow: {
    position: 'relative',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    paddingTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '10px',
    color: '#5f5a75',
    fontSize: '11.5px',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  footerLink: {
  color: 'inherit',
  textDecoration: 'none',
},
};