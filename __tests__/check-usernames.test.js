const checkUsernames = require("../katas/check-usernames.js");

describe('checkUsernames', function() {
    test('return an empty array when passed an empty array', function() {
        expect(checkUsernames([])).toEqual([]);
    });
    test('check if one element array is valid', function() {
        expect(checkUsernames(['abcd'])).toBe(false);
        expect(checkUsernames(['abcde$'])).toBe(false);
        expect(checkUsernames(['abcde'])).toBe(true);
    });
    test('check true returned is multiple valid usernames', function() {
        expect(checkUsernames(['abcde1', 'qwerty'])).toBe(true);
        expect(checkUsernames(['123_nnn', '______'])).toBe(true);
    })
    test('check false returned if any non-valid usernames', function() {
        expect(checkUsernames(['abcde1', '123', '6gh7db'])).toBe(false);
    })
})