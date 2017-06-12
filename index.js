'use strict'

const ect = require('ect')

exports.name = 'ect'
exports.outputFormat = 'html'
exports.compile = function (str, options) {
  options = options || {}
  options.root = options.root || {}
  options.root.page = str

  const engine = ect(options)
  return locals => {
    return engine.render('page', locals)
  }
}
