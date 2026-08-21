import type { OxlintConfig } from 'oxlint'

export default {
  '@stylistic/array-bracket-newline': 'error',
  '@stylistic/array-bracket-spacing': 'error',
  '@stylistic/array-element-newline': ['error', { consistent: true, multiline: true }],
  '@stylistic/arrow-parens': 'error',
  '@stylistic/arrow-spacing': 'error',
  // Covered by curly-newline and no-inline-comments, which force line breaks inside braces and ban inline comments
  '@stylistic/block-spacing': 'off',
  '@stylistic/brace-style': 'error',
  '@stylistic/comma-dangle': 'error',
  '@stylistic/comma-spacing': 'error',
  '@stylistic/comma-style': 'error',
  '@stylistic/computed-property-spacing': 'error',
  '@stylistic/curly-newline': ['error', 'always'],
  '@stylistic/dot-location': ['error', 'property'],
  '@stylistic/eol-last': 'error',
  '@stylistic/exp-list-style': 'off',
  '@stylistic/function-call-argument-newline': ['error', 'consistent'],
  '@stylistic/function-call-spacing': 'error',
  '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
  '@stylistic/generator-star-spacing': ['error', 'after'],
  '@stylistic/implicit-arrow-linebreak': 'error',
  '@stylistic/indent': ['error', 2, { offsetTernaryExpressions: true }],
  '@stylistic/indent-binary-ops': 'error',
  '@stylistic/key-spacing': 'error',
  '@stylistic/keyword-spacing': 'error',
  // Covered by no-inline-comments, which bans comments sharing a line with code
  '@stylistic/line-comment-position': 'off',
  '@stylistic/linebreak-style': 'error',
  '@stylistic/lines-around-comment': 'off',
  '@stylistic/lines-between-class-members': 'error',
  '@stylistic/max-len': [
    'error',
    {
      code: 120,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true
    }
  ],
  '@stylistic/max-statements-per-line': 'error',
  '@stylistic/member-delimiter-style': [
    'error',
    {
      multiline: { delimiter: 'none' },
      singleline: { delimiter: 'comma' }
    }
  ],
  '@stylistic/multiline-comment-style': 'off',
  '@stylistic/multiline-ternary': ['error', 'always-multiline', { ignoreJSX: true }],
  '@stylistic/new-parens': 'error',
  '@stylistic/newline-per-chained-call': 'off',
  '@stylistic/no-confusing-arrow': ['error', { onlyOneSimpleParam: true }],
  '@stylistic/no-extra-parens': ['error', 'functions'],
  '@stylistic/no-extra-semi': 'error',
  '@stylistic/no-floating-decimal': 'error',
  '@stylistic/no-mixed-operators': 'error',
  // Covered by no-tabs, which bans all tabs including indentation
  '@stylistic/no-mixed-spaces-and-tabs': 'off',
  // Covered by key-spacing, which checks spacing in properties and import attributes
  '@stylistic/no-multi-spaces': ['error', { exceptions: { ImportAttribute: true, Property: true } }],
  '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
  '@stylistic/no-tabs': 'error',
  '@stylistic/no-trailing-spaces': 'error',
  '@stylistic/no-whitespace-before-property': 'error',
  // Covered by curly, which requires braces
  '@stylistic/nonblock-statement-body-position': 'off',
  '@stylistic/object-curly-newline': ['error', { consistent: true, multiline: true }],
  '@stylistic/object-curly-spacing': ['error', 'always', { emptyObjects: 'never' }],
  '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
  // Covered by one-var, which bans multiple declarations
  '@stylistic/one-var-declaration-per-line': 'off',
  '@stylistic/operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
  '@stylistic/padded-blocks': ['error', 'never'],
  '@stylistic/padding-line-between-statements': [
    'error',
    { blankLine: 'always', next: '*', prev: 'import' },
    { blankLine: 'never', next: 'import', prev: 'import' },
    { blankLine: 'always', next: 'return', prev: '*' }
  ],
  '@stylistic/quote-props': ['error', 'consistent-as-needed'],
  '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
  '@stylistic/rest-spread-spacing': 'error',
  '@stylistic/semi': ['error', 'never', { beforeStatementContinuationChars: 'never' }],
  '@stylistic/semi-spacing': 'error',
  '@stylistic/semi-style': 'error',
  '@stylistic/space-before-blocks': 'error',
  '@stylistic/space-before-function-paren': ['error', { named: 'never' }],
  '@stylistic/space-in-parens': 'error',
  '@stylistic/space-infix-ops': 'error',
  '@stylistic/space-unary-ops': 'error',
  '@stylistic/spaced-comment': ['error', 'always', { block: { balanced: true } }],
  '@stylistic/switch-colon-spacing': 'error',
  '@stylistic/template-curly-spacing': 'error',
  '@stylistic/template-tag-spacing': 'error',
  '@stylistic/type-annotation-spacing': 'error',
  '@stylistic/type-generic-spacing': 'error',
  '@stylistic/type-named-tuple-spacing': 'error',
  '@stylistic/wrap-iife': ['error', 'inside'],
  '@stylistic/wrap-regex': 'off',
  '@stylistic/yield-star-spacing': 'error'
} satisfies OxlintConfig['rules']
