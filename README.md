# @larvit/eslint-config-esm

## Installation

`npm i -d eslint @larvit/eslint-config-esm` or `yarn add -D eslint @larvit/eslint-config-esm`

## Usage

In your local eslint configuration, for example `.eslintrc.json` for a node application extend this config like this:

```json
{
	"extends": [
		"@larvit/esm"
	],
	"env": {
		"node": true
	}
}
```