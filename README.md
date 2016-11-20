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

Option      | Alias | Type            | Options                   | Description
------------|-------|-----------------|---------------------------|-------------
`--help`    | `-h`  | `N/A`           | `N/A`                     | Display help
`--format`  | `-f`  | `String`        | `list|table|count`        | Format rules
`--status`  | `-s`  | `Array<String>` | `omitted|off|warn|error`  | Filter rules by status
`--groups`  | `-g`  | `Array<String>` | `eslint|plugin eg. react` | Filter rules by group/plugin
`--exclude` | `-e`  | `Array<String>` | `rule-id-one rule-id-two` | Exclude rules from output

## Examples

```bash
eslint-index .eslintrc --format table
eslint-index .eslintrc --format count
eslint-index .eslintrc --status omitted off
eslint-index .eslintrc --status warn error
eslint-index .eslintrc --groups eslint react
eslint-index .eslintrc --groups eslint --status warn error
eslint-index .eslintrc --groups eslint --status warn error --format count
```

## Author

Matthew Wagerfield [@wagerfield](http://twitter.com/wagerfield)
