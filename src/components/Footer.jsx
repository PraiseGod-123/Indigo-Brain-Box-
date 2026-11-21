import { Link } from 'react-router-dom';
import Logo from './Logo';
import StarField from './StarField';
import { site, activeSocials } from '../config/site';

const columns = [
  {
    title: 'Product',
    links: [
      { to: '/explore', label: 'Explore ideas' },
      { to: '/how-it-works', label: 'How it works' },
      { to: '/pricing', label: 'Pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About' },
      { to: '/blog', label: 'Blog' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { to: '/privacy', label: 'Privacy' },
      { to: '/terms', label: 'Terms' },
    ],
  },
];

export default function Footer() {
  const socials = activeSocials(site.socials);
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <StarField count={10} />

      <div className="footer-grid">
        <div>
          <div style={styles.brandRow}>
            <Logo fontSize={20} />
          </div>
          <p style={styles.tagline}>
            Helping you find, plan, and launch the business you were meant to start.
          </p>
          {socials.length > 0 && (
            <div style={styles.socialRow}>
              {socials.map((s) => (
                <a
                  key={s.key}
                  href={s.url}
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  <i className={`ti ${s.icon}`} style={{ fontSize: '14px' }} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          )}
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <div style={styles.colTitle}>{col.title}</div>
            <ul style={styles.linkCol}>
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="link-muted">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div style={styles.bottomRow}>
        <span>© {year} {site.name}. All rights reserved.</span>
        <span>{site.tagline}</span>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    position: 'relative',
    zIndex: 1,
    background: '#000000',
    padding: '56px var(--page-x) 24px',
    overflow: 'hidden',
  },
  brandRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px',
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
  colTitle: {
    color: '#fff',
    fontSize: '12.5px',
    fontWeight: '500',
    marginBottom: '14px',
  },
  linkCol: {
    listStyle: 'none',
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
    color: 'var(--color-text-faint)',
    fontSize: '11.5px',
    maxWidth: '1100px',
    margin: '0 auto',
  },
};