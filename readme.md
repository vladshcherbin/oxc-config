# `@shcherbin/oxc-config`

Shareable Oxlint and Oxfmt configs with strict rules.

## Install

```sh
npm install @shcherbin/oxc-config oxlint oxlint-tsgolint oxfmt -D
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
    "format": "oxfmt --check",
    "lint": "oxlint"
  }
}
```

Type-aware rules are enabled out of the box and run through `oxlint-tsgolint`.

Export the configs directly as shown above — wrapping them in `extends` currently loses `env` and rule options in Oxlint.

## License

MIT
