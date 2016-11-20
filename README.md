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
`--help`    | `-h`  | Display help                 | `N/A`           | `N/A`
`--format`  | `-f`  | Format rules                 | `String`        | `list|table|count`
`--status`  | `-s`  | Filter rules by status       | `Array<String>` | `omitted|off|warn|error`
`--groups`  | `-g`  | Filter rules by group/plugin | `Array<String>` | `eslint|plugin eg. react`
`--exclude` | `-e`  | Exclude rules from output    | `Array<String>` | `rule-id-one rule-id-two`

## Examples

```bash
eslint-index .eslintrc --format table
eslint-index .eslintrc --format count
eslint-index .eslintrc --status omitted off
eslint-index .eslintrc --status warn error
eslint-index .eslintrc --groups eslint react
eslint-index .eslintrc --groups eslint --status warn error
eslint-index .eslintrc --groups eslint --status warn error --format count
eslint-index .eslintrc --exclude semi curly
```

## Author

Matthew Wagerfield [@wagerfield](http://twitter.com/wagerfield)
