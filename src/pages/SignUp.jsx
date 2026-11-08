import { useState } from 'react';
import Logo from '../components/Logo';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section style={styles.section}>
      <svg width="100%" height="100%" style={styles.stars}>
        <circle cx="8%" cy="10%" r="1.1" fill="#fff" opacity="0.6" />
        <circle cx="92%" cy="15%" r="1" fill="#fff" opacity="0.5" />
        <circle cx="15%" cy="85%" r="0.9" fill="#fff" opacity="0.4" />
        <circle cx="88%" cy="80%" r="1" fill="#fff" opacity="0.45" />
        <circle cx="50%" cy="6%" r="0.8" fill="#fff" opacity="0.4" />
      </svg>
      <div style={styles.glow}></div>

      <div style={styles.wrap}>
        <div style={styles.brandBlock}>
          <Logo fontSize={34} showTagline={true} />
          <div style={styles.welcome}>Create your account</div>
        </div>

        <div style={styles.card}>
          <div style={styles.field}>
            <div style={styles.fieldLabel}>Full name</div>
            <input style={styles.input} />
          </div>

          <div style={styles.field}>
            <div style={styles.fieldLabel}>Email</div>
            <input placeholder="you@example.com" style={styles.input} />
          </div>

          <div style={{ marginBottom: '6px' }}>
            <div style={styles.fieldLabel}>Password</div>
            <div style={styles.passwordWrap}>
              <input
                type={showPassword ? 'text' : 'password'}
                style={styles.passwordInput}
              />
              <i
                className={`ti ${showPassword ? 'ti-eye' : 'ti-eye-off'}`}
                onClick={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              ></i>
            </div>
          </div>
          <div style={styles.helperText}>Must be at least 8 characters</div>

          <button style={styles.primaryBtn}>Create account</button>

          <div style={styles.dividerRow}>
            <div style={styles.dividerLine}></div>
            <span style={styles.dividerText}>OR</span>
            <div style={styles.dividerLine}></div>
          </div>

          <button style={styles.googleBtn}>
            <i className="ti ti-brand-google" style={{ fontSize: '16px' }}></i> Continue with Google
          </button>
        </div>

        <div style={styles.loginRow}>
          Already have an account? <span style={styles.loginLink}>Log in</span>
        </div>
      </div>
    </section>
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
    padding: '60px 20px',
    overflow: 'hidden',
  },
  stars: { position: 'absolute', inset: 0 },
  glow: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(106,95,214,0.22) 0%, rgba(106,95,214,0) 70%)',
    pointerEvents: 'none',
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
  welcome: {
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
    padding: '32px',
  },
  field: {
    marginBottom: '16px',
  },
  fieldLabel: {
    color: '#c9c5db',
    fontSize: '12px',
    fontWeight: '500',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.14)',
    borderRadius: '10px',
    padding: '12px 14px',
    color: '#fff',
    fontSize: '13.5px',
    fontFamily: 'var(--font-sans)',
    boxSizing: 'border-box',
    outline: 'none',
  },
  passwordWrap: {
    position: 'relative',
  },
  passwordInput: {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.14)',
    borderRadius: '10px',
    padding: '12px 44px 12px 14px',
    color: '#fff',
    fontSize: '13.5px',
    fontFamily: 'var(--font-sans)',
    boxSizing: 'border-box',
    outline: 'none',
  },
  eyeIcon: {
    position: 'absolute',
    right: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '16px',
    color: '#8b86a0',
    cursor: 'pointer',
  },
  helperText: {
    color: '#5f5a75',
    fontSize: '11px',
    marginBottom: '14px',
  },
  primaryBtn: {
    width: '100%',
    background: 'var(--color-accent)',
    color: '#fff',
    border: 'none',
    padding: '13px',
    borderRadius: '10px',
    fontSize: '13.5px',
    fontWeight: '500',
    marginTop: '6px',
    cursor: 'pointer',
  },
  dividerRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    margin: '22px 0',
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    background: 'rgba(255,255,255,0.1)',
  },
  dividerText: {
    color: '#5f5a75',
    fontSize: '11px',
  },
  googleBtn: {
    width: '100%',
    background: 'rgba(255,255,255,0.06)',
    color: '#e2e0ef',
    border: '0.5px solid rgba(255,255,255,0.16)',
    padding: '12px',
    borderRadius: '10px',
    fontSize: '13px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: 'pointer',
  },
  loginRow: {
    textAlign: 'center',
    color: '#8b86a0',
    fontSize: '13px',
    marginTop: '24px',
  },
  loginLink: {
    color: 'var(--color-accent-light)',
    fontWeight: '500',
    cursor: 'pointer',
  },
};