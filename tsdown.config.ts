import { defineConfig } from 'tsdown'

export default defineConfig({
  dts: true,
  entry: ['src/config.ts', 'src/format.ts'],
  exports: true,
  inputOptions: {
    experimental: {
      attachDebugInfo: 'none'
    }
  }
})
