var Some = require('./some')
var {Nil} = require('./types')

module.exports = (type) => Some([type, Nil])

