import type { OxlintConfig } from 'oxlint'
import eslint from './rules/eslint.ts'
import perfectionist from './rules/perfectionist.ts'
import stylistic from './rules/stylistic.ts'
import typescript from './rules/typescript.ts'

export default {
  categories: {
    correctness: 'off',
    nursery: 'off',
    pedantic: 'off',
    perf: 'off',
    restriction: 'off',
    style: 'off',
    suspicious: 'off'
  },
  jsPlugins: [
    '@stylistic/eslint-plugin',
    'eslint-plugin-perfectionist'
  ],
  options: {
    typeAware: true
  },
  plugins: ['eslint', 'typescript'],
  rules: {
    ...eslint,
    ...perfectionist,
    ...stylistic,
    ...typescript
  }
} satisfies OxlintConfig
