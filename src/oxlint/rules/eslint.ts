import type { OxlintConfig } from 'oxlint'

export default {
  'accessor-pairs': ['error', { enforceForTSTypes: true, getWithoutSet: true }],
  'array-callback-return': 'error',
  'arrow-body-style': 'error',
  // Covered by no-var, which bans var declarations entirely
  'block-scoped-var': 'off',
  'capitalized-comments': 'off',
  'class-methods-use-this': 'error',
  'complexity': 'off',
  // Handled by TypeScript
  'constructor-super': 'off',
  'curly': 'error',
  'default-case': 'error',
  'default-case-last': 'error',
  'default-param-last': 'error',
  'eqeqeq': 'error',
  'for-direction': 'error',
  'func-name-matching': ['error', { considerPropertyDescriptor: true }],
  'func-names': 'error',
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  // Handled by TypeScript
  'getter-return': 'off',
  'grouped-accessor-pairs': ['error', 'setBeforeGet', { enforceForTSTypes: true }],
  'guard-for-in': 'error',
  'id-denylist': 'off',
  'id-length': 'off',
  'id-match': 'off',
  'init-declarations': 'error',
  'logical-assignment-operators': ['error', 'always', { enforceForIfStatements: true }],
  'max-classes-per-file': 'error',
  'max-depth': 'off',
  'max-lines': 'off',
  'max-lines-per-function': 'off',
  'max-nested-callbacks': 'off',
  'max-params': 'off',
  'max-statements': 'off',
  'new-cap': 'error',
  'no-alert': 'error',
  'no-array-constructor': 'error',
  // Covered by strict-void-return, which bans promise-returning executors
  'no-async-promise-executor': 'off',
  'no-await-in-loop': 'off',
  'no-bitwise': 'error',
  'no-caller': 'error',
  'no-case-declarations': 'error',
  // Handled by TypeScript
  'no-class-assign': 'off',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': ['error', 'always'],
  'no-console': 'error',
  // Handled by TypeScript
  'no-const-assign': 'off',
  'no-constant-binary-expression': 'error',
  // Superseded by the more accurate type-aware typescript/no-unnecessary-condition
  'no-constant-condition': 'off',
  'no-constructor-return': 'error',
  'no-continue': 'error',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-delete-var': 'error',
  'no-div-regex': 'error',
  // Handled by TypeScript
  'no-dupe-class-members': 'off',
  'no-dupe-else-if': 'error',
  // Handled by TypeScript
  'no-dupe-keys': 'off',
  'no-duplicate-case': 'error',
  'no-duplicate-imports': ['error', { includeExports: true }],
  'no-else-return': ['error', { allowElseIf: false }],
  'no-empty': 'error',
  'no-empty-character-class': 'error',
  'no-empty-function': 'error',
  'no-empty-pattern': 'error',
  'no-empty-static-block': 'error',
  // Covered by eqeqeq, which bans any == comparison
  'no-eq-null': 'off',
  'no-eval': ['error', { allowIndirect: false }],
  'no-ex-assign': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-boolean-cast': ['error', { enforceForInnerExpressions: true }],
  // Covered by no-labels, which bans labels entirely
  'no-extra-label': 'off',
  'no-fallthrough': ['error', { reportUnusedFallthroughComment: true }],
  // Handled by TypeScript
  'no-func-assign': 'off',
  'no-global-assign': 'error',
  'no-implicit-coercion': ['error', { disallowTemplateShorthand: true }],
  'no-implicit-globals': ['error', { lexicalBindings: true }],
  // Superseded by the more accurate type-aware typescript/no-implied-eval
  'no-implied-eval': 'off',
  // Handled by TypeScript
  'no-import-assign': 'off',
  'no-inline-comments': 'error',
  // Covered by no-var, which bans var declarations entirely
  'no-inner-declarations': ['error', 'functions', { blockScopedFunctions: 'disallow', namespaces: 'disallow' }],
  'no-invalid-regexp': 'error',
  'no-irregular-whitespace': [
    'error',
    {
      skipJSXText: false,
      skipRegExps: false,
      skipStrings: false,
      skipTemplates: false
    }
  ],
  'no-iterator': 'error',
  // Covered by no-labels, which bans labels entirely
  'no-label-var': 'off',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-lonely-if': 'error',
  'no-loop-func': 'error',
  'no-loss-of-precision': 'error',
  'no-magic-numbers': 'off',
  'no-misleading-character-class': 'error',
  'no-multi-assign': 'error',
  'no-multi-str': 'error',
  'no-negated-condition': 'error',
  'no-nested-ternary': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  // Handled by TypeScript
  'no-new-native-nonconstructor': 'off',
  'no-new-wrappers': 'error',
  'no-nonoctal-decimal-escape': 'error',
  // Handled by TypeScript
  'no-obj-calls': 'off',
  'no-object-constructor': 'error',
  'no-param-reassign': ['error', { props: true }],
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  // Covered by no-confusing-void-expression, no-undefined, no-void and strict-void-return
  'no-promise-executor-return': 'off',
  'no-proto': 'error',
  'no-prototype-builtins': 'error',
  // Handled by TypeScript, the remaining same-type var case is covered by no-var
  'no-redeclare': 'off',
  'no-regex-spaces': 'error',
  'no-restricted-exports': [
    'error',
    {
      restrictDefaultExports: { defaultFrom: true, named: true, namedFrom: true, namespaceFrom: true },
      restrictedNamedExports: ['then']
    }
  ],
  'no-restricted-globals': ['error', { checkGlobalObject: true, globals: ['isFinite', 'isNaN'] }],
  'no-restricted-imports': 'off',
  'no-restricted-properties': 'off',
  'no-return-assign': ['error', 'always'],
  'no-script-url': 'error',
  'no-self-assign': 'error',
  'no-self-compare': 'error',
  'no-sequences': ['error', { allowInParentheses: false }],
  // Handled by TypeScript
  'no-setter-return': 'off',
  'no-shadow': [
    'error',
    {
      builtinGlobals: true,
      hoist: 'all',
      ignoreFunctionTypeParameterNameValueShadow: false,
      ignoreTypeValueShadow: false
    }
  ],
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',
  'no-template-curly-in-string': 'error',
  'no-ternary': 'off',
  // Handled by TypeScript
  'no-this-before-super': 'off',
  // Deprecated, superseded by the type-aware typescript/only-throw-error
  'no-throw-literal': 'off',
  // Covered by init-declarations, which requires initializers
  'no-unassigned-vars': 'off',
  // Handled by TypeScript
  'no-undef': 'off',
  'no-undefined': 'error',
  'no-underscore-dangle': [
    'error',
    {
      allowFunctionParams: false,
      allowInArrayDestructuring: false,
      allowInObjectDestructuring: false,
      enforceInClassFields: true,
      enforceInMethodNames: true
    }
  ],
  'no-unexpected-multiline': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  // Handled by TypeScript
  'no-unreachable': 'off',
  'no-unreachable-loop': 'error',
  'no-unsafe-finally': 'error',
  // Handled by TypeScript
  'no-unsafe-negation': 'off',
  // Handled by TypeScript
  'no-unsafe-optional-chaining': 'off',
  'no-unused-expressions': ['error', { enforceForJSX: true }],
  // Covered by no-labels, which bans labels entirely
  'no-unused-labels': 'off',
  'no-unused-private-class-members': 'error',
  'no-unused-vars': ['error', { args: 'all', ignoreRestSiblings: true, reportVarsOnlyUsedAsTypes: true }],
  'no-use-before-define': ['error', { ignoreTypeReferences: false }],
  'no-useless-assignment': 'error',
  'no-useless-backreference': 'error',
  'no-useless-call': 'error',
  'no-useless-catch': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'no-useless-constructor': 'error',
  'no-useless-escape': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'no-void': 'error',
  'no-warning-comments': 'error',
  // Handled by TypeScript
  'no-with': 'off',
  'object-shorthand': ['error', 'always', { avoidExplicitReturnArrows: true, avoidQuotes: true }],
  'one-var': ['error', 'never'],
  'operator-assignment': 'error',
  'prefer-arrow-callback': ['error', { allowUnboundThis: false }],
  'prefer-const': 'error',
  'prefer-destructuring': [
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
  'prefer-exponentiation-operator': 'error',
  'prefer-named-capture-group': 'error',
  'prefer-numeric-literals': 'error',
  'prefer-object-has-own': 'error',
  'prefer-object-spread': 'error',
  // Superseded by the more accurate type-aware typescript/prefer-promise-reject-errors
  'prefer-promise-reject-errors': 'off',
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'preserve-caught-error': ['error', { requireCatchParameter: true }],
  'radix': 'error',
  // Superseded by the more accurate type-aware typescript/require-await
  'require-await': 'off',
  'require-unicode-regexp': ['error', { requireFlag: 'v' }],
  'require-yield': 'error',
  // Covered by perfectionist sort-imports and sort-named-imports
  'sort-imports': 'off',
  // Covered by perfectionist/sort-objects
  'sort-keys': 'off',
  // Covered by perfectionist/sort-variable-declarations
  'sort-vars': 'off',
  'symbol-description': 'error',
  'unicode-bom': 'error',
  'use-isnan': ['error', { enforceForIndexOf: true }],
  'valid-typeof': ['error', { requireStringLiterals: true }],
  // Covered by no-var, which bans var declarations entirely
  'vars-on-top': 'off',
  'yoda': 'error'
} satisfies OxlintConfig['rules']
