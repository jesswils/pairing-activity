const areOrdered = require("../katas/are-ordered");

describe("areOrdered", function() {
    test("returns true for array of one number", function() {
        expect(areOrdered([1])).toBe(true);
    })
    test("returns false if empty array", function() {
        expect(areOrdered([])).toBe(false);
    })
    test("returns false if array not in order", function() {
        expect(areOrdered([3, 2, 5])).toBe(false);
    })
})