var is = require('./is')
var {Nil} = require('./types')

module.exports = (type) => (val) => {
  return is(type, val) || is(Nil, val)
    ? val
    : new TypeError(`expected a either nil or type: ${type}`)
}

