# `@shcherbin/oxc-config`

Shareable Oxlint configs with strict rules.

## Install

```sh
npm install @shcherbin/oxc-config oxlint oxlint-tsgolint -D
```

## Usage

### Node.js

For Node.js apps and packages, add `oxlint.config.ts`:

```ts
import { node } from '@shcherbin/oxc-config'

export default node
```

### TanStack Start

For TanStack Start apps, add `oxlint.config.ts`:

```ts
import { tanstack } from '@shcherbin/oxc-config'

export default tanstack
```

Add a script to `package.json`:

```json
{
  "scripts": {
    "lint": "oxlint"
  }
}
```

Type-aware rules are enabled out of the box and run through `oxlint-tsgolint`.

Export the configs directly as shown above — wrapping them in `extends` currently loses `env` and rule options in Oxlint.

## Rules

Every existing rule of every plugin is declared — enabled ones as `error`, the rest as `off` with a reason.

| Plugin          | Declared  | `node` | `tanstack` |
| --------------- | --------- | ------ | ---------- |
| `eslint`        | 187 / 187 | 136    | 136        |
| `typescript`    | 110 / 110 | 92     | 93         |
| `perfectionist` | 23 / 23   | 20     | 20         |
| `stylistic`     | 96 / 96   | 58     | 73         |
| `react`         | 85 / 85   | —      | 54         |
| `jsx-a11y`      | 36 / 36   | —      | 34         |
| `react-perf`    | 4 / 4     | —      | 0          |

The `tanstack` config assumes the React Compiler is set up in the app.

## License

MIT
