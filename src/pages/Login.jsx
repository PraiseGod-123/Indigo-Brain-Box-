import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import PasswordInput from '../components/PasswordInput';
import { logIn, logInWithGoogle, isValidEmail } from '../lib/api';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!isValidEmail(form.email)) next.email = 'Enter a valid email address.';
    if (!form.password) next.password = 'Enter your password.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    if (!validate()) return;

    setSubmitting(true);
    try {
      await logIn({ email: form.email.trim(), password: form.password });
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
      await logInWithGoogle();
    } catch (err) {
      setFormError(err.message);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      footer={
        <>
          Don't have an account? <Link to="/signup" className="link-accent">Sign up</Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate>
        {formError && <div className="form-alert form-alert-error" role="alert">{formError}</div>}

        <div className="field">
          <label htmlFor="login-email" className="field-label">Email</label>
          <input
            id="login-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="field-input"
            value={form.email}
            onChange={update('email')}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'login-email-error' : undefined}
          />
          {errors.email && <div id="login-email-error" className="field-error">{errors.email}</div>}
        </div>

        <div className="field">
          <div className="field-label-row">
            <label htmlFor="login-password" className="field-label">Password</label>
            <Link to="/forgot-password" className="link-muted" style={{ color: 'var(--color-text-faint)', fontSize: '12px' }}>
              Forgot?
            </Link>
          </div>
          <PasswordInput
            id="login-password"
            name="password"
            autoComplete="current-password"
            value={form.password}
            onChange={update('password')}
            invalid={Boolean(errors.password)}
            describedBy={errors.password ? 'login-password-error' : undefined}
          />
          {errors.password && <div id="login-password-error" className="field-error">{errors.password}</div>}
        </div>

        <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '14px' }} disabled={submitting}>
          {submitting ? 'Logging in…' : 'Log in'}
        </button>

        <div className="divider-row"><span>OR</span></div>

        <button type="button" className="btn btn-secondary btn-block" onClick={handleGoogle}>
          <i className="ti ti-brand-google" style={{ fontSize: '16px' }} aria-hidden="true"></i> Continue with Google
        </button>
      </form>
    </AuthLayout>
  );
}