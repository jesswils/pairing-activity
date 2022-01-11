const range  = require('../katas/range')

describe('range', function () {
    test('returns array from value', function () {
    expect(range(5)).toStrictEqual([0,1,2,3,4])
    expect(range(5, 2)).toStrictEqual([2, 3, 4, 5, 6])
})
})