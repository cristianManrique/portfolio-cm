import React, { useState } from 'react';
import { useNavigate }      from 'react-router-dom';
import styled               from 'styled-components';
import { motion }           from 'motion/react';

// ── Styled ────────────────────────────────────────────────────────────────────
const Page = styled.div`
  min-height: 100vh;
  background: var(--bg-deep, #021a2b);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-body);
  padding: 2rem;
`;

const Card = styled(motion.div)`
  width: 100%;
  max-width: 380px;
  background: var(--bg-card, #0a3a52);
  border: 1px solid rgba(0, 180, 200, 0.2);
  border-top: 3px solid var(--accent, #00b4c8);
  border-radius: 8px;
  padding: 2.5rem 2rem;
`;

const Logo = styled.div`
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--white, #fff);
  letter-spacing: 0.08em;
  margin-bottom: 0.35rem;
  span { color: var(--accent, #00b4c8); }
`;

const Subtitle = styled.p`
  font-size: 0.75rem;
  color: var(--text-muted, #a0c4d8);
  letter-spacing: 0.06em;
  margin: 0 0 2rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.72rem;
  color: var(--text-muted, #a0c4d8);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 0 0.3rem;
`;

const Input = styled.input`
  width: 100%;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid var(--border-dim, rgba(0, 180, 200, 0.2));
  border-radius: 4px;
  padding: 0.55rem 0.85rem;
  color: var(--white, #fff);
  font-size: 0.88rem;
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
  padding: 0.85rem 1rem;
  background: rgba(244, 162, 97, 0.1);
  border: 1px solid rgba(244, 162, 97, 0.35);
  border-radius: 4px;
  font-size: 0.72rem;
  color: #f4a261;
  line-height: 1.6;
  letter-spacing: 0.03em;
  code {
    font-size: 0.68rem;
    opacity: 0.8;
  }
`;

// ── Component (PLACEHOLDER — no real authentication) ──────────────────────────
//
//  In production, handleSubmit calls:
//    POST /.netlify/functions/auth-login  { password }
//  which verifies bcrypt(ADMIN_PASSWORD_HASH) and returns { token }.
//  The token is stored in sessionStorage and attached via the Axios interceptor
//  in src/utils/Api.js to every subsequent admin request.
//
const AdminLogin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [msg, setMsg]           = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg('Demo mode — configure your .env to connect a live backend.');
  };

  return (
    <Page>
      <Card
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <Logo>&lt;- <span>Admin</span> -&gt;</Logo>
        <Subtitle>CMS Dashboard — Portfolio</Subtitle>

        <form onSubmit={handleSubmit}>
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoFocus
            placeholder="••••••••"
          />

          {msg && (
            <p style={{ fontSize: '0.78rem', color: '#f4a261', marginBottom: '0.75rem' }}>
              ⚠ {msg}
            </p>
          )}

          <SubmitBtn type="submit" whileTap={{ scale: 0.97 }}>
            Se connecter
          </SubmitBtn>
        </form>

        <DemoBanner>
          <strong>Alpha / Demo mode</strong> — authentication is disabled in this public
          version. In production, this calls{' '}
          <code>netlify/functions/auth-login.js</code>, verifies a bcrypt hash and
          returns a signed JWT stored in <code>sessionStorage</code>.
          <br /><br />
          Required env vars: <code>ADMIN_PASSWORD_HASH</code> · <code>ADMIN_JWT_SECRET</code>
        </DemoBanner>
      </Card>
    </Page>
  );
};

export default AdminLogin;
