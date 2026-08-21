import type { OxlintConfig } from 'oxlint'

export default {
  'perfectionist/sort-array-includes': ['error', { type: 'natural' }],
  'perfectionist/sort-arrays': 'off',
  'perfectionist/sort-classes': ['error', { type: 'natural' }],
  'perfectionist/sort-decorators': ['error', { type: 'natural' }],
  'perfectionist/sort-enums': ['error', { type: 'natural' }],
  'perfectionist/sort-export-attributes': ['error', { type: 'natural' }],
  'perfectionist/sort-exports': ['error', { type: 'natural' }],
  'perfectionist/sort-heritage-clauses': ['error', { type: 'natural' }],
  'perfectionist/sort-import-attributes': ['error', { type: 'natural' }],
  'perfectionist/sort-imports': ['error', { newlinesBetween: 0, type: 'natural' }],
  'perfectionist/sort-interfaces': ['error', { type: 'natural' }],
  'perfectionist/sort-intersection-types': ['error', { type: 'natural' }],
  'perfectionist/sort-jsx-props': 'off',
  'perfectionist/sort-maps': ['error', { type: 'natural' }],
  'perfectionist/sort-modules': 'off',
  'perfectionist/sort-named-exports': ['error', { type: 'natural' }],
  'perfectionist/sort-named-imports': ['error', { type: 'natural' }],
  'perfectionist/sort-object-types': ['error', { type: 'natural' }],
  'perfectionist/sort-objects': ['error', { type: 'natural' }],
  'perfectionist/sort-sets': ['error', { type: 'natural' }],
  'perfectionist/sort-switch-case': ['error', { type: 'natural' }],
  'perfectionist/sort-union-types': ['error', { type: 'natural' }],
  'perfectionist/sort-variable-declarations': ['error', { type: 'natural' }]
} satisfies OxlintConfig['rules']
