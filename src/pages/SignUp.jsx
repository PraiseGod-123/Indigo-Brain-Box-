import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import PasswordInput from '../components/PasswordInput';
import { signUp, logInWithGoogle, isValidEmail, MIN_PASSWORD_LENGTH } from '../lib/api';

export default function SignUp() {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get('plan') || 'free'; // set by the Pricing page buttons

  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Enter your full name.';
    if (!isValidEmail(form.email)) next.email = 'Enter a valid email address.';
    if (form.password.length < MIN_PASSWORD_LENGTH)
      next.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    if (!validate()) return;

    setSubmitting(true);
    try {
      await signUp({ name: form.name.trim(), email: form.email.trim(), password: form.password, plan });
      // Step 3: redirect to the main page here.
    } catch (err) {
      setFormError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogle = async () => {
    setFormError('');
    try {
      await logInWithGoogle({ plan });
    } catch (err) {
      setFormError(err.message);
    }
  };

  return (
    <AuthLayout
      title="Create your account"
      footer={
        <>
          Already have an account? <Link to="/login" className="link-accent">Log in</Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate>
        {formError && <div className="form-alert form-alert-error" role="alert">{formError}</div>}

        <div className="field">
          <label htmlFor="signup-name" className="field-label">Full name</label>
          <input
            id="signup-name"
            type="text"
            name="name"
            autoComplete="name"
            className="field-input"
            value={form.name}
            onChange={update('name')}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'signup-name-error' : undefined}
          />
          {errors.name && <div id="signup-name-error" className="field-error">{errors.name}</div>}
        </div>

        <div className="field">
          <label htmlFor="signup-email" className="field-label">Email</label>
          <input
            id="signup-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="field-input"
            value={form.email}
            onChange={update('email')}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'signup-email-error' : undefined}
          />
          {errors.email && <div id="signup-email-error" className="field-error">{errors.email}</div>}
        </div>

        <div className="field">
          <label htmlFor="signup-password" className="field-label">Password</label>
          <PasswordInput
            id="signup-password"
            name="password"
            autoComplete="new-password"
            value={form.password}
            onChange={update('password')}
            invalid={Boolean(errors.password)}
            describedBy={errors.password ? 'signup-password-error' : 'signup-password-hint'}
          />
          {errors.password ? (
            <div id="signup-password-error" className="field-error">{errors.password}</div>
          ) : (
            <div id="signup-password-hint" className="field-hint">Must be at least {MIN_PASSWORD_LENGTH} characters</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '6px' }} disabled={submitting}>
          {submitting ? 'Creating account…' : 'Create account'}
        </button>

        <div className="divider-row"><span>OR</span></div>

        <button type="button" className="btn btn-secondary btn-block" onClick={handleGoogle}>
          <i className="ti ti-brand-google" style={{ fontSize: '16px' }} aria-hidden="true"></i> Continue with Google
        </button>

        <p style={styles.legal}>
          By creating an account you agree to our <Link to="/terms" className="link-accent">Terms</Link> and{' '}
          <Link to="/privacy" className="link-accent">Privacy Policy</Link>.
        </p>
      </form>
    </AuthLayout>
  );
}

const styles = {
  legal: {
    color: 'var(--color-text-faint)',
    fontSize: '11.5px',
    lineHeight: '1.6',
    textAlign: 'center',
    marginTop: '18px',
  },
};