import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import { requestPasswordReset, isValidEmail } from '../lib/api';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [formError, setFormError] = useState('');
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    if (!isValidEmail(email)) {
      setError('Enter a valid email address.');
      return;
    }
    setSubmitting(true);
    try {
      await requestPasswordReset({ email: email.trim() });
      setSent(true);
    } catch (err) {
      setFormError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title="Reset your password"
      footer={
        <>
          Remembered it? <Link to="/login" className="link-accent">Back to log in</Link>
        </>
      }
    >
      {sent ? (
        <div className="form-alert form-alert-success" role="status">
          If an account exists for {email}, we've sent a link to reset your password.
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {formError && <div className="form-alert form-alert-error" role="alert">{formError}</div>}
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '13.5px', lineHeight: 1.6, marginBottom: '18px' }}>
            Enter the email you signed up with and we'll send you a reset link.
          </p>
          <div className="field">
            <label htmlFor="reset-email" className="field-label">Email</label>
            <input
              id="reset-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="field-input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? 'reset-email-error' : undefined}
            />
            {error && <div id="reset-email-error" className="field-error">{error}</div>}
          </div>
          <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
            {submitting ? 'Sending…' : 'Send reset link'}
          </button>
        </form>
      )}
    </AuthLayout>
  );
}