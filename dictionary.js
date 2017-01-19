var types = require('./types')
var compose = require('./compose')
var is = require('./is')

module.exports = function dictionary (value, covalue) {
  return compose(
    types.Object,
    (object) => {
      return Object.keys(object).every(
        (key) => is(value, key) && is(covalue, object[key]))
        ? object
        : new TypeError(`Expected ${object} to have all keys and vals {${value} : ${covalue}}`)
    }
  )
}
