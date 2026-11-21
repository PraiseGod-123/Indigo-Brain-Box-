import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/explore', label: 'Explore ideas' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

const navClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Lock page scroll while the mobile menu is open; close it with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="nav">
      <Link to="/" className="nav-brand" aria-label="Indigo Brain Box home" onClick={close}>
        <Logo fontSize={22} showTagline={true} layout="beside" />
      </Link>

      <nav aria-label="Main">
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.end} className={navClass}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="nav-actions">
        <Link to="/login" className="btn btn-outline btn-sm">Log in</Link>
        <Link to="/signup" className="btn btn-primary btn-sm">Get started</Link>
      </div>

      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
      >
        <i className={`ti ${open ? 'ti-x' : 'ti-menu-2'}`} aria-hidden="true"></i>
      </button>

      <div id="mobile-menu" className={`nav-mobile${open ? ' open' : ''}`} inert={!open}>
        <nav aria-label="Mobile">
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} className={navClass} onClick={close}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-mobile-actions">
          <Link to="/login" className="btn btn-outline btn-block" onClick={close}>Log in</Link>
          <Link to="/signup" className="btn btn-primary btn-block" onClick={close}>Get started</Link>
        </div>
      </div>
    </header>
  );
}