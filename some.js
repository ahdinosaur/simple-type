var is = require('./is')

module.exports = function some(types, value) {
  return types.some((type) => is(type, value)) 
}
