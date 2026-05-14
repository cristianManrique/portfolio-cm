#!/usr/bin/env node
// scripts/clear-cache.js — Netlify CDN cache purge
// No external dependencies — uses Node.js built-ins only

import { readFileSync } from 'fs';
import { resolve } from 'path';

// ── Load .env manually (no dotenv needed) ─────────────────────────────────────
const envPath = resolve(process.cwd(), '.env');
try {
  const lines = readFileSync(envPath, 'utf8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const [key, ...rest] = trimmed.split('=');
    if (key && !process.env[key]) {
      process.env[key] = rest
        .join('=')
        .trim()
        .replace(/^["']|["']$/g, '');
    }
  }
} catch {
  // .env not found — rely on system env vars
}

const NETLIFY_AUTH_TOKEN = process.env.NETLIFY_AUTH_TOKEN;
const NETLIFY_SITE_ID = process.env.NETLIFY_SITE_ID;

if (!NETLIFY_AUTH_TOKEN || !NETLIFY_SITE_ID) {
  console.error(
    '❌  Missing env vars: NETLIFY_AUTH_TOKEN and/or NETLIFY_SITE_ID'
  );
  console.error('    Add them to your .env file:\n');
  console.error('    NETLIFY_AUTH_TOKEN=your_token');
  console.error('    NETLIFY_SITE_ID=your_site_id\n');
  console.error('    Token  → https://app.netlify.com/user/applications');
  console.error('    SiteID → Netlify dashboard → Site settings → General');
  process.exit(1);
}

console.log('🧹 Purging Netlify CDN cache...');

const res = await fetch(
  `https://api.netlify.com/api/v1/sites/${NETLIFY_SITE_ID}/deploys`,
  {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${NETLIFY_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ clear_cache: true }),
  }
);

if (!res.ok) {
  const text = await res.text();
  console.error('❌  Cache purge failed:', res.status, text);
  process.exit(1);
}

console.log('✅  Cache purged — proceeding with deploy');
