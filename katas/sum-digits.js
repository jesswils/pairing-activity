/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

function sumDigits(num) {
  const digits = num.toString().split('');
  console.log(digits);
  const removePeriod = digits.filter(digit => {if (digit != "."){
    return true
  }}) 
  const digitsNum = removePeriod.map(element => Number(element));
  const sum = digitsNum.reduce((pv, cv) => pv + cv);
  return sum;
}

module.exports = sumDigits;
