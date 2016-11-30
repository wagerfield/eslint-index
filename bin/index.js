#! /usr/bin/env node

const _ = require('lodash')
const Constants = require('./constants')
const Formatter = require('./formatter')
const Parser = require('./parser')
const Args = require('./cli')

const config = Parser.getConfig(Args.file)
const groups = Parser.getGroups(config)

const eslintRules = Parser.getESLintRules(config)
const pluginRules = Parser.getPluginRules(config)
const allRules = eslintRules.concat(pluginRules)

let groupFilter = _.intersection(groups, Args.groups)
groupFilter = groupFilter.length ? groupFilter : groups

let statusFilter = _.intersection(Constants.STATUS_KEYS, Args.status)
statusFilter = statusFilter.length ? statusFilter : Constants.STATUS_KEYS

const filteredRules = allRules.filter((rule) => {
  let include = _.includes(groupFilter, rule.group)
  include = include && _.includes(statusFilter, rule.status)
  return include && !_.includes(Args.exclude, rule.id)
})

/* eslint-disable no-console */

switch (Args.format) {
  case Constants.FORMAT_COUNT:
    console.log(Formatter.formatCount(filteredRules))
    break
  case Constants.FORMAT_TABLE:
    console.log(Formatter.formatTable(filteredRules))
    break
  default:
    console.log(Formatter.formatKey(Constants.STATUS_COLORS, 'key:'))
    console.log(Formatter.formatList(filteredRules, Args.docs))
    break
}
