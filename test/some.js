var test = require('tape')

var types = require('../types')
var is = require('../is')
var some = require('../some')
var validate = require('../validate')

test('dictionary is a function', function(t) {
  t.equal(typeof some, 'function')
  t.end()
})

test('some works with one elem in array ', function(t) {
  t.ok(some([types.String], 'wee'))
  t.false(some([types.String], 1))
  t.end()
})
test('some works with more than one elem in array ', function(t) {
  t.ok(some([types.String, types.Number], 'wee'))
  t.ok(some([types.String, types.Number], 1))
  t.false(some([types.String, types.Number], null))
  t.end()
})
