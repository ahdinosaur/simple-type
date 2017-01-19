var test = require('tape')

var types = require('../types')
var is = require('../is')
var any = require('../any')

test('any is a function', function (t) {
  t.equal(typeof any, 'function')
  t.end()
})

test('any works with one elem in array ', function (t) {
  var anyString = any([types.String])
  t.ok(is(anyString, 'wee'))
  t.false(is(anyString, 1))
  t.end()
})

test('any works with one elem in array ', function (t) {
  var anyString = any([types.String, types.Number])
  t.ok(is(anyString, 'wee'))
  t.ok(is(anyString, 1))
  t.false(is(anyString, {}))
  t.end()
})
