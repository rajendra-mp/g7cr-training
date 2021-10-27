const assert = require('assert')
const { it } = require('mocha')
const { DIVIDE_BY_ZERO_ERROR_MESSAGE } = require('../src/constants/appconstants')
const { divide } = require('../src/index')

describe(
    'testing add',
    () => {

        it('dividing 12 by 3 and expecting 4', () => {
            const actualRes = divide(12, 3)
            const expected = 4
            assert.equal(actualRes, expected)
        })

        it('testing error by passing 0 as denominator. should throw error', () => {
            try {
                divide(12, 0)
            } catch (error) {
                // if (error instanceof Error) {
                assert.equal(error.message, DIVIDE_BY_ZERO_ERROR_MESSAGE)
                // }
            }
        })
    })