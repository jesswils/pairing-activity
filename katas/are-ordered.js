/*
  the areOrdered function should take an array of numbers as an input.
  It should return true if all the numbers are in ascending order and false if they are not.
  An empty array should return false.
*/

function areOrdered(arr) {
  if(arr.length === 0) {
    return false;
  }
  if(arr.length === 1) {
    return true;
  }
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > arr[i-1]) {
      return false;
    }
  }
  return true;
}

module.exports = areOrdered;
