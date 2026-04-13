import React, { useState } from 'react';
import { useNavigate }     from 'react-router-dom';
import styled              from 'styled-components';
import { motion }          from 'motion/react';

// ─────────────────────────────────────────────────────────────────────────────
// DEMO PLACEHOLDER
// In production this page authenticates against a Netlify Function that:
//   - verifies the password with bcryptjs
//   - returns a signed JWT (8 h expiry)
//   - the token is stored in sessionStorage and sent as Bearer on every API call
// See: netlify/functions/auth-login.js
// ─────────────────────────────────────────────────────────────────────────────

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-deep, #021a2b);
  font-family: var(--font-body);
  padding: 1.5rem;
`;

const Card = styled.div`
  width: 100%;
  max-width: 380px;
  background: var(--bg-card, #0a3a52);
  border: 1px solid var(--border-dim, rgba(0,180,200,.2));
  border-top: 3px solid var(--accent, #00b4c8);
  border-radius: 6px;
  padding: 2.5rem 2rem;
`;

const Title = styled.h1`
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--white, #fff);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.4rem;
  span { color: var(--accent, #00b4c8); }
`;

const Sub = styled.p`
  font-size: 0.78rem;
  color: var(--text-muted, #a0c4d8);
  margin: 0 0 2rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.72rem;
  color: var(--text-muted, #a0c4d8);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.3rem;
`;

const Input = styled.input`
  width: 100%;
  background: rgba(0,0,0,.25);
  border: 1px solid var(--border-dim, rgba(0,180,200,.2));
  border-radius: 4px;
  padding: 0.55rem 0.75rem;
  color: var(--white, #fff);
  font-size: 0.9rem;
  outline: none;
  box-sizing: border-box;
  margin-bottom: 1.2rem;
  transition: border-color 0.2s;
  &:focus { border-color: var(--accent, #00b4c8); }
`;

const SubmitBtn = styled(motion.button)`
  width: 100%;
  padding: 0.75rem;
  background: var(--accent, #00b4c8);
  color: #021a2b;
  border: none;
  border-radius: 4px;
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 0.4rem;
`;

const DemoBanner = styled.div`
  margin-top: 1.5rem;
  padding: 0.65rem 0.9rem;
  background: rgba(0,180,200,.08);
  border: 1px solid rgba(0,180,200,.2);
  border-radius: 4px;
  font-size: 0.72rem;
  color: var(--text-muted, #a0c4d8);
  line-height: 1.5;
  a {
    color: var(--accent, #00b4c8);
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`;

const StatusMsg = styled.div`
  font-size: 0.8rem;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  background: rgba(230,57,70,.12);
  color: #e63946;
`;

// ── Component ─────────────────────────────────────────────────────────────────
const AdminLogin = () => {
  const navigate          = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // ── DEMO MODE ──────────────────────────────────────────────────────────────
    // Real implementation: POST to /.netlify/functions/auth-login
    // Returns { token } → stored in sessionStorage → redirect to /admin
    // ──────────────────────────────────────────────────────────────────────────
    setError('Demo mode — configure your .env to connect a live backend.');
  };

  return (
    <Page>
      <Card>
        <Title>&lt;- <span>Admin</span> -&gt;</Title>
        <Sub>Portfolio CMS — restricted access</Sub>

        {error && <StatusMsg>{error}</StatusMsg>}

        <form onSubmit={handleSubmit}>
          <Label htmlFor="al-password">Password</Label>
          <Input
            id="al-password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            value={password}
            onChange={e => { setPassword(e.target.value); setError(''); }}
          />
          <SubmitBtn type="submit" whileTap={{ scale: 0.97 }}>
            Login
          </SubmitBtn>
        </form>

        <DemoBanner>
          <strong style={{ color: 'var(--accent, #00b4c8)' }}>Demo placeholder</strong>
          <br />
          The real admin connects to a{' '}
          <a href="https://www.netlify.com/products/functions/" target="_blank" rel="noreferrer">
            Netlify serverless API
          </a>{' '}
          + MongoDB Atlas via JWT auth.
          <br />
          See <code style={{ fontSize: '0.7rem' }}>netlify/functions/auth-login.js</code>
        </DemoBanner>
      </Card>
    </Page>
  );
};

export default AdminLogin;
