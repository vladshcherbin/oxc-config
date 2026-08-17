import type { OxlintConfig } from 'oxlint'

export default {
  // Superseded by react-compiler, which memoizes render values
  'react-perf/jsx-no-jsx-as-prop': 'off',
  // Superseded by react-compiler, which memoizes render values
  'react-perf/jsx-no-new-array-as-prop': 'off',
  // Superseded by react-compiler, which memoizes render values
  'react-perf/jsx-no-new-function-as-prop': 'off',
  // Superseded by react-compiler, which memoizes render values
  'react-perf/jsx-no-new-object-as-prop': 'off'
} satisfies OxlintConfig['rules']
