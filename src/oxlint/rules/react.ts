import type { OxlintConfig } from 'oxlint'

export default {
  'react/button-has-type': 'error',
  'react/checked-requires-onchange-or-readonly': 'error',
  'react/display-name': ['error', { checkContextObjects: true }],
  'react/exhaustive-deps': 'error',
  'react/forbid-component-props': 'off',
  'react/forbid-dom-props': 'off',
  'react/forbid-elements': 'off',
  // Deprecated in React 19
  'react/forward-ref-uses-ref': 'off',
  'react/function-component-definition': ['error', { unnamedComponents: 'arrow-function' }],
  'react/hook-use-state': 'error',
  'react/iframe-missing-sandbox': 'error',
  'react/jsx-boolean-value': 'error',
  'react/jsx-curly-brace-presence': ['error', { propElementValues: 'always' }],
  'react/jsx-filename-extension': ['error', { extensions: ['tsx'] }],
  'react/jsx-fragments': 'error',
  'react/jsx-handler-names': ['error', { checkInlineFunction: true, checkLocalVariables: true }],
  'react/jsx-key': 'error',
  'react/jsx-max-depth': 'off',
  'react/jsx-no-comment-textnodes': 'error',
  // Superseded by react-compiler, which memoizes render values
  'react/jsx-no-constructed-context-values': 'off',
  'react/jsx-no-duplicate-props': 'error',
  'react/jsx-no-literals': 'off',
  'react/jsx-no-script-url': 'error',
  'react/jsx-no-target-blank': ['error', { forms: true, warnOnSpreadAttributes: true }],
  // Handled by TypeScript
  'react/jsx-no-undef': 'off',
  'react/jsx-no-useless-fragment': 'error',
  'react/jsx-pascal-case': 'error',
  'react/jsx-props-no-spread-multi': 'error',
  'react/jsx-props-no-spreading': 'off',
  'react/no-array-index-key': 'error',
  'react/no-children-prop': 'error',
  'react/no-clone-element': 'error',
  'react/no-danger': 'error',
  'react/no-danger-with-children': 'error',
  // Covered by prefer-function-component, which bans class components
  'react/no-did-mount-set-state': 'off',
  // Covered by prefer-function-component, which bans class components
  'react/no-did-update-set-state': 'off',
  // Covered by prefer-function-component, which bans class components
  'react/no-direct-mutation-state': 'off',
  // Removed in React 19
  'react/no-find-dom-node': 'off',
  // Covered by prefer-function-component, which bans class components
  'react/no-is-mounted': 'off',
  'react/no-multi-comp': 'error',
  'react/no-namespace': 'error',
  // Superseded by react-compiler, which memoizes render values
  'react/no-object-type-as-default-prop': 'off',
  'react/no-react-children': 'error',
  // Covered by prefer-function-component, which bans class components
  'react/no-redundant-should-component-update': 'off',
  // Removed in React 19
  'react/no-render-return-value': 'off',
  // Covered by prefer-function-component, which bans class components
  'react/no-set-state': 'off',
  // Removed in React 19
  'react/no-string-refs': 'off',
  'react/no-this-in-sfc': 'error',
  'react/no-unescaped-entities': 'error',
  // Handled by TypeScript
  'react/no-unknown-property': 'off',
  // Covered by prefer-function-component, which bans class components
  'react/no-unsafe': 'off',
  'react/no-unstable-nested-components': 'error',
  // Covered by prefer-function-component, which bans class components
  'react/no-will-update-set-state': 'off',
  'react/only-export-components': 'error',
  // Removed in React 16
  'react/prefer-es6-class': 'off',
  'react/prefer-function-component': 'error',
  'react/react-compiler': ['error', { reportAllBailouts: true }],
  // Superseded by the new JSX transform
  'react/react-in-jsx-scope': 'off',
  // Covered by prefer-function-component, which bans class components
  'react/require-render-return': 'off',
  'react/rules-of-hooks': 'error',
  'react/self-closing-comp': 'error',
  // Covered by prefer-function-component, which bans class components
  'react/state-in-constructor': 'off',
  'react/style-prop-object': 'error',
  'react/void-dom-elements-no-children': 'error'
} satisfies OxlintConfig['rules']
