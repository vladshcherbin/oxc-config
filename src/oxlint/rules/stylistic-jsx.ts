import type { OxlintConfig } from 'oxlint'

export default {
  '@stylistic/exp-jsx-props-style': 'off',
  '@stylistic/jsx-child-element-spacing': 'error',
  '@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],
  '@stylistic/jsx-closing-tag-location': ['error', 'line-aligned'],
  // Covered by react/jsx-curly-brace-presence
  '@stylistic/jsx-curly-brace-presence': 'off',
  '@stylistic/jsx-curly-newline': 'error',
  '@stylistic/jsx-curly-spacing': ['error', { children: true }],
  '@stylistic/jsx-equals-spacing': 'error',
  '@stylistic/jsx-first-prop-new-line': ['error', 'multiline'],
  '@stylistic/jsx-function-call-newline': 'error',
  '@stylistic/jsx-indent-props': ['error', 2],
  '@stylistic/jsx-max-props-per-line': ['error', { when: 'multiline' }],
  '@stylistic/jsx-newline': ['error', { prevent: true }],
  '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
  // Covered by react/jsx-pascal-case
  '@stylistic/jsx-pascal-case': 'off',
  '@stylistic/jsx-quotes': 'error',
  // Covered by react/self-closing-comp
  '@stylistic/jsx-self-closing-comp': 'off',
  // Covered by react/jsx-boolean-value
  '@stylistic/jsx-shorthand-boolean': 'off',
  // Covered by react jsx-fragments and jsx-no-useless-fragment
  '@stylistic/jsx-shorthand-fragment': 'off',
  '@stylistic/jsx-tag-spacing': ['error', { beforeClosing: 'never' }],
  '@stylistic/jsx-wrap-multilines': [
    'error',
    {
      arrow: 'parens-new-line',
      assignment: 'parens-new-line',
      condition: 'parens-new-line',
      declaration: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
      propertyValue: 'parens-new-line',
      return: 'parens-new-line'
    }
  ]
} satisfies OxlintConfig['rules']
