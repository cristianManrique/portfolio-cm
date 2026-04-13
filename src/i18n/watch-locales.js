import { watch, writeFileSync, readFileSync } from 'fs'
import { execSync } from 'child_process'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const FILE   = resolve(__dirname, 'locales.json')
const SCRIPT = resolve(__dirname, 'generate-locales.js')
const I18N   = resolve(__dirname, 'i18n.js')

console.log('👀 Watching locales.json...')

let debounce = null

watch(FILE, () => {
  clearTimeout(debounce)
  debounce = setTimeout(() => {
    console.log('\n🔄 locales.json changed — regenerating...')
    try {
      // 1. Generate en.json + fr.json
      execSync(`node "${SCRIPT}"`, { stdio: 'inherit' })

      // 2. Touch i18n.js — forces Vite HMR to reload translations
      const content = readFileSync(I18N, 'utf-8')
      writeFileSync(I18N, content, 'utf-8')
      console.log('🔥 Vite HMR triggered — translations reloaded\n')
    } catch (e) {
      console.error('❌ Error:', e.message)
    }
  }, 150)
})
