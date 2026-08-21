import type { OxlintConfig } from 'oxlint'

export default {
  // Covered by perfectionist sort-classes, sort-interfaces and sort-object-types
  'typescript/adjacent-overload-signatures': 'off',
  'typescript/array-type': 'error',
  'typescript/await-thenable': 'error',
  'typescript/ban-ts-comment': ['error', { 'ts-check': true, 'ts-expect-error': true }],
  'typescript/ban-tslint-comment': 'error',
  // Deprecated, superseded by other rules
  'typescript/ban-types': 'off',
  'typescript/class-literal-property-style': 'error',
  'typescript/consistent-generic-constructors': 'error',
  'typescript/consistent-indexed-object-style': 'error',
  // Superseded by the noImplicitReturns compiler option
  'typescript/consistent-return': 'off',
  'typescript/consistent-type-assertions': [
    'error',
    {
      arrayLiteralTypeAssertions: 'never',
      objectLiteralTypeAssertions: 'never'
    }
  ],
  'typescript/consistent-type-definitions': 'error',
  'typescript/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],
  // Superseded by the verbatimModuleSyntax compiler option
  'typescript/consistent-type-imports': 'off',
  'typescript/dot-notation': 'error',
  'typescript/explicit-function-return-type': 'off',
  'typescript/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
  'typescript/explicit-module-boundary-types': 'off',
  'typescript/method-signature-style': 'error',
  'typescript/no-array-delete': 'error',
  'typescript/no-base-to-string': ['error', { checkUnknown: true }],
  'typescript/no-confusing-non-null-assertion': 'error',
  'typescript/no-confusing-void-expression': 'error',
  'typescript/no-deprecated': 'error',
  'typescript/no-duplicate-enum-values': 'error',
  'typescript/no-duplicate-type-constituents': 'error',
  'typescript/no-dynamic-delete': 'error',
  // Superseded by no-empty-object-type
  'typescript/no-empty-interface': 'off',
  'typescript/no-empty-object-type': 'error',
  'typescript/no-explicit-any': 'error',
  'typescript/no-extra-non-null-assertion': 'error',
  'typescript/no-extraneous-class': 'error',
  'typescript/no-floating-promises': ['error', { checkThenables: true, ignoreVoid: false }],
  'typescript/no-for-in-array': 'error',
  'typescript/no-implied-eval': 'error',
  'typescript/no-import-type-side-effects': 'error',
  'typescript/no-inferrable-types': 'error',
  'typescript/no-invalid-void-type': ['error', { allowInGenericTypeArguments: false }],
  // Covered by no-void, which bans the void operator entirely
  'typescript/no-meaningless-void-operator': 'off',
  'typescript/no-misused-new': 'error',
  // Covered by strict-void-return, which also checks non-Promise values
  'typescript/no-misused-promises': ['error', { checksVoidReturn: false }],
  'typescript/no-misused-spread': 'error',
  'typescript/no-mixed-enums': 'error',
  'typescript/no-namespace': ['error', { allowDefinitionFiles: false }],
  'typescript/no-non-null-asserted-nullish-coalescing': 'error',
  'typescript/no-non-null-asserted-optional-chain': 'error',
  'typescript/no-non-null-assertion': 'off',
  'typescript/no-redundant-type-constituents': 'error',
  'typescript/no-require-imports': 'error',
  'typescript/no-restricted-types': 'off',
  'typescript/no-this-alias': ['error', { allowDestructuring: false }],
  'typescript/no-unnecessary-boolean-literal-compare': [
    'error',
    {
      allowComparingNullableBooleansToFalse: false,
      allowComparingNullableBooleansToTrue: false
    }
  ],
  'typescript/no-unnecessary-condition': ['error', { checkTypePredicates: true }],
  // Covered by parameter-properties, which bans parameter properties entirely
  'typescript/no-unnecessary-parameter-property-assignment': 'off',
  'typescript/no-unnecessary-qualifier': 'error',
  'typescript/no-unnecessary-template-expression': 'error',
  'typescript/no-unnecessary-type-arguments': 'error',
  'typescript/no-unnecessary-type-assertion': ['error', { checkLiteralConstAssertions: true }],
  'typescript/no-unnecessary-type-constraint': 'error',
  'typescript/no-unnecessary-type-conversion': 'error',
  'typescript/no-unnecessary-type-parameters': 'error',
  'typescript/no-unsafe-argument': 'error',
  'typescript/no-unsafe-assignment': 'error',
  'typescript/no-unsafe-call': 'error',
  'typescript/no-unsafe-declaration-merging': 'error',
  'typescript/no-unsafe-enum-comparison': 'error',
  'typescript/no-unsafe-function-type': 'error',
  'typescript/no-unsafe-member-access': 'error',
  'typescript/no-unsafe-return': 'error',
  'typescript/no-unsafe-type-assertion': 'error',
  'typescript/no-unsafe-unary-minus': 'error',
  'typescript/no-useless-default-assignment': 'error',
  'typescript/no-useless-empty-export': 'error',
  // Deprecated, superseded by no-require-imports
  'typescript/no-var-requires': 'off',
  'typescript/no-wrapper-object-types': 'error',
  // Covered by no-unsafe-type-assertion, which bans narrowing assertions entirely
  'typescript/non-nullable-type-assertion-style': 'off',
  'typescript/only-throw-error': ['error', { allowThrowingAny: false, allowThrowingUnknown: false }],
  'typescript/parameter-properties': 'error',
  'typescript/prefer-as-const': 'error',
  'typescript/prefer-enum-initializers': 'error',
  'typescript/prefer-find': 'error',
  'typescript/prefer-for-of': 'error',
  'typescript/prefer-function-type': 'error',
  'typescript/prefer-includes': 'error',
  'typescript/prefer-literal-enum-member': 'error',
  // Deprecated, the legacy module syntax will become a parser error
  'typescript/prefer-namespace-keyword': 'off',
  'typescript/prefer-nullish-coalescing': ['error', { ignoreConditionalTests: false }],
  'typescript/prefer-optional-chain': 'error',
  'typescript/prefer-promise-reject-errors': 'error',
  'typescript/prefer-readonly': 'error',
  'typescript/prefer-readonly-parameter-types': 'off',
  'typescript/prefer-reduce-type-parameter': 'error',
  'typescript/prefer-regexp-exec': 'error',
  'typescript/prefer-return-this-type': 'error',
  'typescript/prefer-string-starts-ends-with': 'error',
  // Superseded by ban-ts-comment
  'typescript/prefer-ts-expect-error': 'off',
  'typescript/promise-function-async': 'off',
  'typescript/related-getter-setter-pairs': 'error',
  'typescript/require-array-sort-compare': ['error', { ignoreStringArrays: false }],
  'typescript/require-await': 'error',
  'typescript/restrict-plus-operands': [
    'error',
    {
      allowAny: false,
      allowBoolean: false,
      allowNullish: false,
      allowNumberAndString: false,
      allowRegExp: false
    }
  ],
  'typescript/restrict-template-expressions': [
    'error',
    {
      allowAny: false,
      allowBoolean: false,
      allowNullish: false,
      allowRegExp: false
    }
  ],
  'typescript/return-await': 'error',
  'typescript/strict-boolean-expressions': 'off',
  'typescript/strict-void-return': 'error',
  'typescript/switch-exhaustiveness-check': 'error',
  'typescript/triple-slash-reference': ['error', { lib: 'never', types: 'never' }],
  'typescript/unbound-method': 'error',
  'typescript/unified-signatures': 'error',
  'typescript/use-unknown-in-catch-callback-variable': 'error'
} satisfies OxlintConfig['rules']
