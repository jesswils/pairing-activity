const sumArgs = require("../katas/sum-args.js")

describe('sumArgs', function() {
    test('return argument if only one argument passed', function() {
        expect(sumArgs(1)).toBe(1);
    });
    test('sums arguments if multiple passed',
    function() {
        expect(sumArgs(1, 2)).toBe(3);
        expect(sumArgs(1, 2, 3, 4)).toBe(10);
    });
    test('return 0 when no arguments passed', function() {
        expect(sumArgs()).toBe(0);
    })
})