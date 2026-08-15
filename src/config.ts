import { defineConfig } from 'oxlint'

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
  options: {
    typeAware: true
  },
  plugins: ['eslint', 'typescript'],
  rules: {
    // ESLint
    'eslint/accessor-pairs': ['error', { enforceForTSTypes: true, getWithoutSet: true }],
    'eslint/array-callback-return': ['error', { checkForEach: true }],
    'eslint/arrow-body-style': 'error',
    'eslint/block-scoped-var': 'error',
    'eslint/capitalized-comments': 'error',
    'eslint/class-methods-use-this': 'error',
    'eslint/complexity': 'off',
    // Handled by TypeScript
    'eslint/constructor-super': 'off',
    'eslint/curly': 'error',
    'eslint/default-case': 'error',
    'eslint/default-case-last': 'error',
    'eslint/default-param-last': 'error',
    'eslint/eqeqeq': 'error',
    'eslint/for-direction': 'error',
    'eslint/func-name-matching': ['error', { considerPropertyDescriptor: true }],
    'eslint/func-names': 'error',
    'eslint/func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    // Handled by TypeScript
    'eslint/getter-return': 'off',
    'eslint/grouped-accessor-pairs': ['error', 'setBeforeGet', { enforceForTSTypes: true }],
    'eslint/guard-for-in': 'error',
    'eslint/id-denylist': 'off',
    'eslint/id-length': 'off',
    'eslint/id-match': 'off',
    'eslint/init-declarations': 'error',
    'eslint/logical-assignment-operators': ['error', 'always', { enforceForIfStatements: true }],
    'eslint/max-classes-per-file': 'error',
    'eslint/max-depth': 'off',
    'eslint/max-lines': 'off',
    'eslint/max-lines-per-function': 'off',
    'eslint/max-nested-callbacks': 'off',
    'eslint/max-params': 'off',
    'eslint/max-statements': 'off',
    'eslint/new-cap': 'error',
    'eslint/no-alert': 'error',
    'eslint/no-array-constructor': 'error',
    'eslint/no-async-promise-executor': 'error',
    'eslint/no-await-in-loop': 'off',
    'eslint/no-bitwise': 'error',
    'eslint/no-caller': 'error',
    'eslint/no-case-declarations': 'error',
    // Handled by TypeScript
    'eslint/no-class-assign': 'off',
    'eslint/no-compare-neg-zero': 'error',
    'eslint/no-cond-assign': ['error', 'always'],
    'eslint/no-console': 'error',
    // Handled by TypeScript
    'eslint/no-const-assign': 'off',
    'eslint/no-constant-binary-expression': 'error',
    // Superseded by the more accurate type-aware typescript/no-unnecessary-condition
    'eslint/no-constant-condition': 'off',
    'eslint/no-constructor-return': 'error',
    'eslint/no-continue': 'error',
    'eslint/no-control-regex': 'error',
    'eslint/no-debugger': 'error',
    'eslint/no-delete-var': 'error',
    'eslint/no-div-regex': 'error',
    // Handled by TypeScript
    'eslint/no-dupe-class-members': 'off',
    'eslint/no-dupe-else-if': 'error',
    // Handled by TypeScript
    'eslint/no-dupe-keys': 'off',
    'eslint/no-duplicate-case': 'error',
    'eslint/no-duplicate-imports': ['error', { includeExports: true }],
    'eslint/no-else-return': ['error', { allowElseIf: false }],
    'eslint/no-empty': 'error',
    'eslint/no-empty-character-class': 'error',
    'eslint/no-empty-function': 'error',
    'eslint/no-empty-pattern': 'error',
    'eslint/no-empty-static-block': 'error',
    // Covered by eqeqeq, which bans any == comparison
    'eslint/no-eq-null': 'off',
    'eslint/no-eval': ['error', { allowIndirect: false }],
    'eslint/no-ex-assign': 'error',
    'eslint/no-extend-native': 'error',
    'eslint/no-extra-bind': 'error',
    'eslint/no-extra-boolean-cast': ['error', { enforceForInnerExpressions: true }],
    'eslint/no-extra-label': 'error',
    'eslint/no-fallthrough': ['error', { reportUnusedFallthroughComment: true }],
    // Handled by TypeScript
    'eslint/no-func-assign': 'off',
    'eslint/no-global-assign': 'error',
    'eslint/no-implicit-coercion': ['error', { disallowTemplateShorthand: true }],
    'eslint/no-implicit-globals': ['error', { lexicalBindings: true }],
    // Superseded by the more accurate type-aware typescript/no-implied-eval
    'eslint/no-implied-eval': 'off',
    // Handled by TypeScript
    'eslint/no-import-assign': 'off',
    'eslint/no-inline-comments': 'error',
    'eslint/no-inner-declarations': ['error', 'both', { blockScopedFunctions: 'disallow', namespaces: 'disallow' }],
    'eslint/no-invalid-regexp': 'error',
    'eslint/no-irregular-whitespace': [
      'error',
      {
        skipComments: false,
        skipJSXText: false,
        skipRegExps: false,
        skipStrings: false,
        skipTemplates: false
      }
    ],
    'eslint/no-iterator': 'error',
    'eslint/no-label-var': 'error',
    'eslint/no-labels': 'error',
    'eslint/no-lone-blocks': 'error',
    'eslint/no-lonely-if': 'error',
    'eslint/no-loop-func': 'error',
    'eslint/no-loss-of-precision': 'error',
    'eslint/no-magic-numbers': 'off',
    'eslint/no-misleading-character-class': 'error',
    'eslint/no-multi-assign': 'error',
    'eslint/no-multi-str': 'error',
    'eslint/no-negated-condition': 'error',
    'eslint/no-nested-ternary': 'error',
    'eslint/no-new': 'error',
    'eslint/no-new-func': 'error',
    // Handled by TypeScript
    'eslint/no-new-native-nonconstructor': 'off',
    'eslint/no-new-wrappers': 'error',
    'eslint/no-nonoctal-decimal-escape': 'error',
    // Handled by TypeScript
    'eslint/no-obj-calls': 'off',
    'eslint/no-object-constructor': 'error',
    'eslint/no-param-reassign': ['error', { props: true }],
    'eslint/no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'eslint/no-promise-executor-return': 'error',
    'eslint/no-proto': 'error',
    'eslint/no-prototype-builtins': 'error',
    // Handled by TypeScript, the remaining same-type var case is covered by no-var
    'eslint/no-redeclare': 'off',
    'eslint/no-regex-spaces': 'error',
    'eslint/no-restricted-exports': [
      'error',
      {
        restrictDefaultExports: { defaultFrom: true, named: true, namedFrom: true, namespaceFrom: true },
        restrictedNamedExports: ['then']
      }
    ],
    'eslint/no-restricted-globals': ['error', { checkGlobalObject: true, globals: ['isFinite', 'isNaN'] }],
    'eslint/no-restricted-imports': 'off',
    // Covered by no-restricted-globals, which also checks the global object
    'eslint/no-restricted-properties': 'off',
    'eslint/no-return-assign': ['error', 'always'],
    'eslint/no-script-url': 'error',
    'eslint/no-self-assign': 'error',
    'eslint/no-self-compare': 'error',
    'eslint/no-sequences': ['error', { allowInParentheses: false }],
    // Handled by TypeScript
    'eslint/no-setter-return': 'off',
    'eslint/no-shadow': [
      'error',
      {
        builtinGlobals: true,
        hoist: 'all',
        ignoreFunctionTypeParameterNameValueShadow: false,
        ignoreTypeValueShadow: false
      }
    ],
    'eslint/no-shadow-restricted-names': 'error',
    'eslint/no-sparse-arrays': 'error',
    'eslint/no-template-curly-in-string': 'error',
    'eslint/no-ternary': 'off',
    // Handled by TypeScript
    'eslint/no-this-before-super': 'off',
    // Deprecated, superseded by the type-aware typescript/only-throw-error
    'eslint/no-throw-literal': 'off',
    'eslint/no-unassigned-vars': 'error',
    // Handled by TypeScript
    'eslint/no-undef': 'off',
    'eslint/no-undefined': 'error',
    'eslint/no-underscore-dangle': [
      'error',
      {
        allowFunctionParams: false,
        allowInArrayDestructuring: false,
        allowInObjectDestructuring: false,
        enforceInClassFields: true,
        enforceInMethodNames: true
      }
    ],
    'eslint/no-unexpected-multiline': 'error',
    'eslint/no-unmodified-loop-condition': 'error',
    'eslint/no-unneeded-ternary': ['error', { defaultAssignment: false }],
    // Handled by TypeScript
    'eslint/no-unreachable': 'off',
    'eslint/no-unreachable-loop': 'error',
    'eslint/no-unsafe-finally': 'error',
    // Handled by TypeScript
    'eslint/no-unsafe-negation': 'off',
    'eslint/no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
    'eslint/no-unused-expressions': ['error', { enforceForJSX: true }],
    'eslint/no-unused-labels': 'error',
    'eslint/no-unused-private-class-members': 'error',
    'eslint/no-unused-vars': ['error', { args: 'all', ignoreRestSiblings: true, reportVarsOnlyUsedAsTypes: true }],
    'eslint/no-use-before-define': ['error', { ignoreTypeReferences: false }],
    'eslint/no-useless-assignment': 'error',
    'eslint/no-useless-backreference': 'error',
    'eslint/no-useless-call': 'error',
    'eslint/no-useless-catch': 'error',
    'eslint/no-useless-computed-key': 'error',
    'eslint/no-useless-concat': 'error',
    'eslint/no-useless-constructor': 'error',
    'eslint/no-useless-escape': 'error',
    'eslint/no-useless-rename': 'error',
    'eslint/no-useless-return': 'error',
    'eslint/no-var': 'error',
    'eslint/no-void': 'error',
    'eslint/no-warning-comments': 'error',
    // Handled by TypeScript
    'eslint/no-with': 'off',
    'eslint/object-shorthand': ['error', 'always', { avoidExplicitReturnArrows: true, avoidQuotes: true }],
    'eslint/one-var': ['error', 'never'],
    'eslint/operator-assignment': 'error',
    'eslint/prefer-arrow-callback': ['error', { allowUnboundThis: false }],
    'eslint/prefer-const': 'error',
    'eslint/prefer-destructuring': [
      'error',
      {
        AssignmentExpression: { array: false, object: false },
        VariableDeclarator: { array: false, object: true }
      },
      {
        enforceForDeclarationWithTypeAnnotation: true,
        enforceForRenamedProperties: true
      }
    ],
    'eslint/prefer-exponentiation-operator': 'error',
    'eslint/prefer-named-capture-group': 'error',
    'eslint/prefer-numeric-literals': 'error',
    'eslint/prefer-object-has-own': 'error',
    'eslint/prefer-object-spread': 'error',
    // Superseded by the more accurate type-aware typescript/prefer-promise-reject-errors
    'eslint/prefer-promise-reject-errors': 'off',
    'eslint/prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    'eslint/prefer-rest-params': 'error',
    'eslint/prefer-spread': 'error',
    'eslint/prefer-template': 'error',
    'eslint/preserve-caught-error': ['error', { requireCatchParameter: true }],
    'eslint/radix': 'error',
    // Superseded by the more accurate type-aware typescript/require-await
    'eslint/require-await': 'off',
    'eslint/require-unicode-regexp': ['error', { requireFlag: 'v' }],
    'eslint/require-yield': 'error',
    'eslint/sort-imports': ['error', { ignoreDeclarationSort: true }],
    'eslint/sort-keys': 'off',
    'eslint/sort-vars': 'off',
    'eslint/symbol-description': 'error',
    'eslint/unicode-bom': 'error',
    'eslint/use-isnan': ['error', { enforceForIndexOf: true }],
    'eslint/valid-typeof': ['error', { requireStringLiterals: true }],
    'eslint/vars-on-top': 'error',
    'eslint/yoda': 'error',

    // TypeScript
    'typescript/adjacent-overload-signatures': 'error',
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
    'typescript/switch-exhaustiveness-check': [
      'error',
      {
        allowDefaultCaseForExhaustiveSwitch: false,
        requireDefaultForNonUnion: true
      }
    ],
    'typescript/triple-slash-reference': ['error', { lib: 'never', types: 'never' }],
    'typescript/unbound-method': 'error',
    'typescript/unified-signatures': 'error',
    'typescript/use-unknown-in-catch-callback-variable': 'error'
  }
})
