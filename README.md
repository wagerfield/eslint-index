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

Option      | Type            | Options                   | Description
------------|-----------------|---------------------------|-------------
`--format`  | `String`        | `list|table|count`        | Format the rules as a `list`, `table` or `count`
`--groups`  | `Array<String>` | `eslint|plugin`           | Filter rules by group/plugin such as `eslint`, `react`, `import` etc.
`--status`  | `Array<String>` | `omitted|off|warn|error`  | Filter rules by their status such as `omitted`, `off`, `warn` or `error`
`--exclude` | `Array<String>` | `rule-id-one rule-id-two` | Exclude rules from the output (can include paths to JS modules that export an array of rule ids)

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
