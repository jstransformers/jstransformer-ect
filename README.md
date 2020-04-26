# jstransformer-ect

[ECT](http://ectjs.com/) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-ect/master.svg)](https://travis-ci.org/jstransformers/jstransformer-ect)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-ect/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-ect)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-ect/master.svg)](http://david-dm.org/jstransformers/jstransformer-ect)
[![NPM version](https://img.shields.io/npm/v/jstransformer-ect.svg)](https://www.npmjs.org/package/jstransformer-ect)

## Installation

    npm install jstransformer-ect

## API

```js
var ect = require('jstransformer')(require('jstransformer-ect'))

ect.render('Hello <%- @name %>!', {name: 'World'}).body
//=> 'Hello World!'
```

## License

MIT
