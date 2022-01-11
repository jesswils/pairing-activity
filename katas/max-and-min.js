/*
  Create two functions, max and min, which return the maximum and the minimum values in an array.
  If the array has no items, you should return 0.
*/

function max(values) {
  if (values.length === 0){
    return 0;
  }
  return Math.max(...values);
}

function min(values) {
  if (values.length === 0){
    return 0;
  }
  return Math.min(...values);
}

module.exports = { max, min };
