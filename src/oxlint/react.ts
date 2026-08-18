import confusingBrowserGlobals from 'confusing-browser-globals'
import { defineConfig } from 'oxlint'
import base from './base.ts'
import jsxA11y from './rules/jsx-a11y.ts'
import reactPerf from './rules/react-perf.ts'
import react from './rules/react.ts'

export default defineConfig({
  ...base,
  env: {
    browser: true
  },
  plugins: [...base.plugins, 'jsx-a11y', 'react', 'react-perf'],
  rules: {
    ...base.rules,
    ...jsxA11y,
    ...react,
    ...reactPerf,
    // Extended with browser globals, which lib.dom legalizes for bare use
    'eslint/no-restricted-globals': ['error', { globals: ['isFinite', 'isNaN', ...confusingBrowserGlobals] }],
    // Covered by no-restricted-globals, which bans bare use of the allowed browser globals
    'eslint/no-shadow': [
      'error',
      {
        allow: confusingBrowserGlobals,
        builtinGlobals: true,
        hoist: 'all',
        ignoreFunctionTypeParameterNameValueShadow: false,
        ignoreTypeValueShadow: false
      }
    ]
  }
})
