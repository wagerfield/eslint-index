const _ = require('lodash')

exports.FORMAT_NUMBER = 'number'
exports.FORMAT_TABLE = 'table'
exports.FORMAT_LIST = 'list'
exports.FORMATS = [
  exports.FORMAT_LIST,
  exports.FORMAT_NUMBER,
  exports.FORMAT_TABLE
]

exports.ESLINT_GROUP = 'eslint'
exports.ESLINT_STATUSES = [ 'off', 'warn', 'error' ]
exports.OMITTED_STATUS = 'omitted'

exports.STATUS_COLORS = {
  [exports.OMITTED_STATUS]: 'gray',
  [exports.ESLINT_STATUSES[0]]: 'magenta',
  [exports.ESLINT_STATUSES[1]]: 'yellow',
  [exports.ESLINT_STATUSES[2]]: 'red'
}

exports.STATUS_KEYS = _.keys(exports.STATUS_COLORS)
