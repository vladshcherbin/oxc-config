import { defineConfig } from 'oxfmt'

export default defineConfig({
  printWidth: 120,
  quoteProps: 'consistent',
  semi: false,
  singleQuote: true,
  sortImports: {
    newlinesBetween: false
  },
  sortPackageJson: false,
  trailingComma: 'none'
})
