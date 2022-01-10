const getCentury = require('../katas/get-century')

describe('getCentury', function (){
    test('if year is 1999 return 20th century', function () {
        expect(getCentury(1999)).toBe('20th')
    })
    test('year should return century', function () {
        expect(getCentury(2000)).toBe('21st')
    })
})