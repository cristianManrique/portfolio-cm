import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const BASE  = __dirname
const SRC   = resolve(BASE, 'locales.json')
const OUT   = resolve(BASE, 'locales')
const LANGS = ['en', 'fr']
const IDX   = { en: 0, fr: 1 }

// ─── Keys that are NEVER translation pairs — always plain arrays ──────────────
const ARRAY_KEYS = new Set(['tags', 'images'])

const resolve_node = (node, lang, key = '', parentKey = '') => {
  const i = IDX[lang]

  // Translation pair ["english", "french"] — but NOT if inside tags/images
  if (
    Array.isArray(node) &&
    node.length === 2 &&
    typeof node[0] === 'string' &&
    typeof node[1] === 'string' &&
    !ARRAY_KEYS.has(key) &&
    !ARRAY_KEYS.has(parentKey)
  ) {
    return node[i]
  }

  // Regular array — recurse each item, passing current key as parentKey
  if (Array.isArray(node)) {
    return node.map(item => resolve_node(item, lang, key, key))
  }

  // Object — recurse each key
  if (typeof node === 'object' && node !== null) {
    const out = {}
    for (const [k, val] of Object.entries(node)) {
      out[k] = resolve_node(val, lang, k, key)
    }
    return out
  }

  return node
}

const source = JSON.parse(readFileSync(SRC, 'utf-8'))
mkdirSync(OUT, { recursive: true })

for (const lang of LANGS) {
  const output = resolve_node(source, lang)
  const dest   = resolve(OUT, `${lang}.json`)
  writeFileSync(dest, JSON.stringify(output, null, 2), 'utf-8')
  console.log(`✅  Generated ${dest}`)
}

console.log('\n🎉  Done — en.json and fr.json are up to date.')
