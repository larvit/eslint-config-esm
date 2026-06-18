# @larvit/eslint-config-esm

Shareable [flat config](https://eslint.org/docs/latest/use/configure/configuration-files) for ESLint 9+ targeting modern ESM JavaScript.

## Installation

```sh
npm install --save-dev eslint globals @larvit/eslint-config-esm
```

## Usage

In your `eslint.config.js`:

```js
import larvit from "@larvit/eslint-config-esm";
import globals from "globals";

export default [
	...larvit,
	{
		languageOptions: {
			globals: globals.node,
		},
	},
];
```

`globals.node` here is the flat-config replacement for the old `env: { node: true }`. Use `globals.browser` for browser code.
