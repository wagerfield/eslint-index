const _ = require('lodash')
const chalk = require('chalk')
const Table = require('cli-table2')
const Constants = require('./constants')

function formatColor(value, status) {
  const color = Constants.STATUS_COLORS[status]
  return color ? chalk[color](value) : value
}

function formatKey(key, prefix) {
  const labels = _.map(key, (color, label) => chalk[color](label))
  return [ prefix ].concat(labels).join(' ')
}

function formatList(rules) {
  return rules.map(rule => formatColor(rule.id, rule.status)).join('\n')
}

function formatCount(rules) {
  return rules.length
}

function formatTable(rules) {
  const RULES_KEY = 'rules'
  const columns = [ RULES_KEY ].concat(Constants.STATUS_KEYS)

  // Calculate column width
  const width = columns.reduce((result, key) =>
    Math.max(result, key.length), 0)

  // Color table headers
  const head = _.map(columns, label =>
    formatColor(_.padEnd(label, width), label))

  // Create table
  const table = new Table({
    head: [ '' ].concat(head),
    style: { head: [] }
  })

  // Build group status counters
  const counter = _.mapValues(Constants.STATUS_COLORS, () => 0)
  const index = _.transform(rules, (result, rule) => {
    if (!result[rule.group]) {
      result[rule.group] = _.assign({
        [RULES_KEY]: 0
      }, counter)
    }
    result[rule.group][rule.status]++
    result[rule.group][RULES_KEY]++
  }, {})

  // Add group table rows
  _.each(index, (counters, group) => {
    const counts = _.map(columns, status =>
      formatColor(counters[status], status))
    table.push([ group ].concat(counts))
  })
  return table.toString()
}

module.exports = {
  formatCount,
  formatTable,
  formatList,
  formatKey
}
