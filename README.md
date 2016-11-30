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

## Options

Option      | Alias | Description                  | Arg Type        | Arg Options
------------|-------|------------------------------|-----------------|------------
`--help`    | `-h`  | Display help                 | `Boolean`       | `N/A`
`--docs`    | `-d`  | Display docs alongside rules | `Boolean`       | `N/A`
`--format`  | `-f`  | Format rules                 | `String`        | `list|table|count`
`--status`  | `-s`  | Filter rules by status       | `Array<String>` | `omitted|off|warn|error`
`--groups`  | `-g`  | Filter rules by group/plugin | `Array<String>` | `eslint|plugin eg. react`
`--include` | `-i`  | Filter rules by id           | `Array<String>` | `rule-id-one rule-id-two`
`--exclude` | `-e`  | Reject rules by id           | `Array<String>` | `rule-id-one rule-id-two`

## Examples

```bash
eslint-index .eslintrc --format table
eslint-index .eslintrc --format count
eslint-index .eslintrc --status omitted off
eslint-index .eslintrc --status warn error
eslint-index .eslintrc --groups eslint react
eslint-index .eslintrc --groups eslint --status warn error
eslint-index .eslintrc --groups eslint --status warn error --format count
eslint-index .eslintrc --include semi curly
eslint-index .eslintrc --exclude semi curly
eslint-index .eslintrc --docs
eslint-index .eslintrc --docs --groups eslint react
```

## Author

Matthew Wagerfield [@wagerfield](http://twitter.com/wagerfield)
