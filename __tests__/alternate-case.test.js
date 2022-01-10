const alternateCase = require("../katas/alternate-case")

describe("alternateCase", function() {
    test("returns a string", function() {
        expect(alternateCase('hello')).toBe('HeLlO')
    })
})