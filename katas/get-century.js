/*
  The function getCentury should take a year as a number and return the century.
  E.g. 1999 should return '20th'
  2004 should return '21st'
  1877 should return '19th'
  It should work up to and including the year 10,000 (the '101st' century)
*/

function getCentury(year) {
  const getYear = year.toString().split('');
  getYear.pop()
  getYear.pop()
  let number = Number(getYear.join(''))
  number++
  if (number > 10 && number <= 20){
      return `${number}th`;
    }
  let str = number.toString()
  if (str[1] == '1') {
    return `${str}st`
  } else if (str[1] == '2'){
    return `${str}nd`
  } else if (str[1] == '3'){
    return `${str}rd`
  }
  return `${str}th`
}

// take first two digits from year
// add one to get the century 

// if (number > 10 && number <= 20){
//   return `${number}th`
// } else if (number < 10 && number > 0){
//   return `${number}st`
// } else if (number > 20 && number < 30) {
//   return`${number}st`
// }

module.exports = getCentury;
