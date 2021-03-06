/* The function sumArgs should accept any number of arguments, and add them together. If given one argument, it should return that. If it is not given arguments, it should return 0 */

function sumArgs() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

module.exports = sumArgs;
