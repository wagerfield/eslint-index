# ESLint Index

> CLI for finding and managing rules in ESLint config files

## Installation

```bash
npm install eslint-index --save-dev
```

## Usage

```bash
eslint-index path/to/.eslintrc [options]
```

This package is intended to be used as a _local_ utility.

It needs both `eslint` and the `eslint-plugins` referenced in the `.eslintrc.*` config file, to be installed alongside it.

Using it as a _global_ utility will throw an error if `eslint` and the `eslint-plugins` referenced in the `.eslintrc.*` config file are not installed globally.

It is recommended that you use it within your `package.json` scripts:

```
"scripts": {
  "list-rules": "eslint-index .eslintrc",
  "count-rules": "eslint-index .eslintrc --format number",
  "table-rules": "eslint-index .eslintrc --format table",
  "list-rules-with-docs": "eslint-index .eslintrc --docs",
  "list-eslint-rules": "eslint-index .eslintrc --groups eslint",
  "list-disabled-rules": "eslint-index .eslintrc --status omitted off"
}
```

Alternatively, you can add `./node_modules/.bin` to your `$PATH`. This will allow you to use any node binaries within your project.

```
cd some-project-with-eslint-index-installed
eslint-index .eslintrc --format table
```

## Options

Option      | Alias | Description                  | Arg Type        | Arg Options
------------|-------|------------------------------|-----------------|------------
`--help`    | `-h`  | Display help                 | `Boolean`       | `N/A`
`--docs`    | `-d`  | Display docs alongside rules | `Boolean`       | `N/A`
`--format`  | `-f`  | Format rules                 | `String`        | `list|table|number`
`--status`  | `-s`  | Filter rules by status       | `Array<String>` | `omitted|off|warn|error`
`--groups`  | `-g`  | Filter rules by group/plugin | `Array<String>` | `eslint|plugin eg. react`
`--include` | `-i`  | Filter rules by id           | `Array<String>` | `rule-id-one rule-id-two`
`--exclude` | `-e`  | Reject rules by id           | `Array<String>` | `rule-id-one rule-id-two`

## Examples

```bash
eslint-index .eslintrc --format table
eslint-index .eslintrc --format number
eslint-index .eslintrc --status omitted off
eslint-index .eslintrc --status warn error
eslint-index .eslintrc --groups eslint react
eslint-index .eslintrc --groups eslint --status warn error
eslint-index .eslintrc --groups eslint --status warn error --format number
eslint-index .eslintrc --include semi curly
eslint-index .eslintrc --exclude semi curly
eslint-index .eslintrc --docs
eslint-index .eslintrc --groups eslint react --docs
```

## Author

Matthew Wagerfield [@wagerfield](http://twitter.com/wagerfield)
