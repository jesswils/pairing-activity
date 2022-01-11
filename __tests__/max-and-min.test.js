const maxMin = require('../katas/max-and-min')

describe('max', function () {
    test('return zero when given an empty array', function () {
        expect(maxMin.max([])).toBe(0)
    })
    test('test an array with one number - return the same number', function () {
        expect(maxMin.max([1])).toBe(1)
    })
    test('test an array with multiple numbers - return the same numbers', function () {
        expect(maxMin.max([1,2,5,6])).toBe(6)
    })
})

describe('min', function () {
    test('return zero when given an empty array', function () {
        expect(maxMin.min([])).toBe(0)
    })
    test('test an array with one number - return the same number', function () {
        expect(maxMin.min([1])).toBe(1)
    })
    test('test an array with multiple numbers - return the same numbers', function () {
        expect(maxMin.min([1,2,5,6])).toBe(1)
    })
})