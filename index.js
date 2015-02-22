'use strict';

var ect = require('ect');

exports.name = 'ect';
exports.outputFormat = 'html';
exports.compile = function(str, options) {
  if (!options) {
    options = {};
  }
  if (!options.root) {
    options.root = {
      'page': str
    };
  }
  var engine = ect(options);
  return function(locals) {
    return engine.render('page', locals);
  };
};
