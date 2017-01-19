var test = require('tape')

var types = require('../types')
var is = require('../is')
var some = require('../some')

test('some is a function', function (t) {
  t.equal(typeof some, 'function')
  t.end()
})

test('some works with one elem in array ', function (t) {
  var someString = some([types.String])
  t.ok(is(someString, 'wee'))
  t.false(is(someString, 1))
  t.end()
})

test('some works with one elem in array ', function (t) {
  var someString = some([types.String, types.Number])
  t.ok(is(someString, 'wee'))
  t.ok(is(someString, 1))
  t.false(is(someString, {}))
  t.end()
})
