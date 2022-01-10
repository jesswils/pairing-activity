const countVeg = require('../katas/veg-counter')

describe('vegCounter', function () {
    test('return quantity of each occurence of vegetable', function () {
        expect(countVeg('brassica')).toBe(1)
    })
    test('return quantity of each type of vegetable',
    function() {
        expect(countVeg('root')).toBe(9)
    })
})