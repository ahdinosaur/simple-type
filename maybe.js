var Any = require('./any')
var {Nil} = require('./types')

module.exports = (type) => Any([type, Nil])

