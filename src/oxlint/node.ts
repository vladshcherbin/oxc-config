import { defineConfig } from 'oxlint'
import base from './base.ts'

export default defineConfig({
  ...base,
  env: {
    node: true
  }
})
