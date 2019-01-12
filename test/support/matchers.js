'use strict'

const { Assertion } = require('chai')

Assertion.addMethod('deepEqual', function (expected) {
  const actual = this._obj
  new Assertion(actual).to.deep.equal(expected)
})
