const test = require('tape')

const ty = require('../')

test('mintype', function (t) {
  t.ok(ty, 'module is require-able')
  t.end()
})

require('./types')
require('./struct')
require('./maybe')
require('./oneOf')
require('./anyOf')
require('./dict')
