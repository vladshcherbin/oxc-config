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
    'no-restricted-globals': ['error', { globals: ['isFinite', 'isNaN', ...confusingBrowserGlobals] }],
    // Covered by no-restricted-globals, which bans bare use of the allowed browser globals
    'no-shadow': [
      'error',
      {
        allow: confusingBrowserGlobals,
        builtinGlobals: true,
        hoist: 'all',
        ignoreFunctionTypeParameterNameValueShadow: false,
        ignoreTypeValueShadow: false
      }
    ],
    // Extended to allow voiding non-awaited loader promises
    'no-void': ['error', { allowAsStatement: true }],
    // Extended to allow void-marked promises
    'typescript/no-floating-promises': ['error', { checkThenables: true }],
    // Catches meaningless voids, which the extended no-void allows
    'typescript/no-meaningless-void-operator': ['error', { checkNever: true }]
  }
})
