import { defineConfig } from 'oxlint'
import eslint from './rules/eslint.ts'
import perfectionist from './rules/perfectionist.ts'
import typescript from './rules/typescript.ts'

export default defineConfig({
  categories: {
    correctness: 'off',
    nursery: 'off',
    pedantic: 'off',
    perf: 'off',
    restriction: 'off',
    style: 'off',
    suspicious: 'off'
  },
  env: {
    browser: true
  },
  jsPlugins: ['eslint-plugin-perfectionist'],
  options: {
    typeAware: true
  },
  plugins: ['eslint', 'typescript'],
  rules: {
    ...eslint,
    ...perfectionist,
    ...typescript
  }
})
