const _ = require('lodash')
const chalk = require('chalk')
const Table = require('cli-table2')
const Constants = require('./constants')
const Docs = require('./docs')

function formatColor(value, status) {
  const color = Constants.STATUS_COLORS[status]
  return color ? chalk[color](value) : value
}

function formatKey(key, prefix) {
  const labels = _.map(key, (color, label) => chalk[color](label))
  return [ prefix ].concat(labels).join(' ')
}

function formatList(rules, showDocs) {
  let ruleDocsUrl = '', formattedRule = ''
  const ruleWithMaxLength = _.maxBy(rules, rule => rule.id.length)
  const maxRuleIdLength = ruleWithMaxLength ? ruleWithMaxLength.id.length : 0
  return rules.map((rule) => {
    formattedRule = _.padEnd(rule.id, maxRuleIdLength)
    formattedRule = formatColor(formattedRule, rule.status)
    if (showDocs) {
      ruleDocsUrl = chalk.gray(Docs.getRuleDocsUrl(rule))
      formattedRule = `${formattedRule} ${ruleDocsUrl}`
    }
    return formattedRule
  }).join('\n')
}

function formatNumber(rules) {
  return rules.length
}

function formatTable(rules, statusFilter) {
  const RULES_KEY = 'total'
  const columns = [ RULES_KEY ].concat(statusFilter)

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
  formatNumber,
  formatTable,
  formatList,
  formatKey
}
