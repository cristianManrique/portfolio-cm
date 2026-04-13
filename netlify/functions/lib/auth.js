import jwt from 'jsonwebtoken';

export const verifyToken = (event) => {
  const auth = event.headers?.authorization || '';
  if (!auth.startsWith('Bearer ')) return null;
  try {
    return jwt.verify(auth.slice(7), process.env.ADMIN_JWT_SECRET);
  } catch {
    return null;
  }
};

export const unauthorized = () => ({
  statusCode: 401,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ error: 'Unauthorized' }),
});

export const ok = (data) => ({
  statusCode: 200,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});

export const err = (msg, code = 500) => ({
  statusCode: code,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ error: msg }),
});
