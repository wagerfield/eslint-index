/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const eslint = require('eslint')
const Constants = require('./constants')

function isJavaScriptFile(file) {
  return file.endsWith('.js')
}

function isRuleDeprecated(rule) {
  return _.get(rule, 'meta.deprecated', false)
}

function filterDeprecatedRules(rules, include) {
  const filterMethod = include === true ? _.pickBy : _.omitBy
  return filterMethod(rules, isRuleDeprecated)
}

function mapRules(group, prefix, rules, config) {
  const namespace = prefix ? `${group}/` : ''
  return rules.sort()
    .map((rule) => {
      const id = `${namespace}${rule}`
      let status = config.rules[id]
      status = _.isArray(status) ? _.first(status) : status
      status = _.isNumber(status) ? Constants.ESLINT_STATUSES[status] : status
      status = _.isString(status) ? status : Constants.OMITTED_STATUS
      return { id, group, rule, status }
    })
}

function getConfig(file) {
  return new eslint.CLIEngine({
    useEslintrc: false,
    configFile: file
  }).getConfigForFile()
}

function getPlugins(config) {
  const pluginRegex = /^(?:eslint-plugin-)?([\w-]+)$/
  return config.plugins.map((plugin) => {
    const match = plugin.match(pluginRegex)
    return match && match[1]
  })
}

function getGroups(config) {
  const plugins = getPlugins(config)
  return plugins.concat(Constants.ESLINT_GROUP)
}

function getPluginRules(config) {
  return getPlugins(config).reduce((result, plugin) => {
    const module = require(`eslint-plugin-${plugin}`)
    const rules = filterDeprecatedRules(module.rules)
    return result.concat(mapRules(plugin, true, _.keys(rules), config))
  }, [])
}

function getESLintRules(config) {
  const rulesPath = './node_modules/eslint/lib/rules'
  const files = fs.readdirSync(rulesPath).filter(isJavaScriptFile)
  const rules = _.transform(files, (result, file) => {
    const rule = require(path.resolve(rulesPath, file))
    if (!isRuleDeprecated(rule)) {
      result.push(file.replace('.js', ''))
    }
  })
  return mapRules(Constants.ESLINT_GROUP, false, rules, config)
}

module.exports = {
  getESLintRules,
  getPluginRules,
  getConfig,
  getGroups
}
