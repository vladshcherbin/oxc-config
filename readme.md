# `@shcherbin/oxc-config`

Shareable Oxlint and Oxfmt configs with strict rules.

## Install

```sh
npm install @shcherbin/oxc-config oxfmt oxlint oxlint-tsgolint -D
```

## Usage

Add `oxlint.config.ts`:

```ts
import config from '@shcherbin/oxc-config/config'

export default config
```

Add `oxfmt.config.ts`:

```ts
import format from '@shcherbin/oxc-config/format'

export default format
```

Add scripts to `package.json`:

```json
{
  "scripts": {
    "format": "oxfmt",
    "format:check": "oxfmt --check",
    "lint": "oxlint"
  }
}
```

Type-aware rules are enabled out of the box and run through `oxlint-tsgolint`.

Export the configs directly as shown above — wrapping them in `extends` currently loses `env` and rule options in Oxlint.

## Rules

Every existing rule of every plugin is declared — enabled ones as `error`, the rest as `off` with a reason.

| Plugin          | Rules | Declared | Enabled |
| --------------- | ----- | -------- | ------- |
| `eslint`        | 187   | 187      | 146     |
| `typescript`    | 110   | 110      | 92      |
| `perfectionist` | 23    | 23       | 19      |

## License

MIT
