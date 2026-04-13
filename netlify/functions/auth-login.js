import bcrypt from 'bcryptjs';
import jwt    from 'jsonwebtoken';
import { ok, err } from './lib/auth.js';

// env vars needed:
//   ADMIN_PASSWORD_HASH  — bcrypt hash of your password
//   ADMIN_JWT_SECRET     — random 64-char string (see .env.example)

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') return err('Method not allowed', 405);

  let body;
  try { body = JSON.parse(event.body); }
  catch { return err('Invalid JSON', 400); }

  const { password } = body;
  if (!password) return err('Password required', 400);

  const valid = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);
  if (!valid) return err('Invalid credentials', 401);

  const token = jwt.sign(
    { role: 'admin' },
    process.env.ADMIN_JWT_SECRET,
    { expiresIn: '8h' }
  );

  return ok({ token });
};
