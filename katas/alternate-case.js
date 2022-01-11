/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'
*/

function alternateCase(str) {
  const letters = str.split('').filter(char => {return char != ' '});
  for(let i = 0; i < letters.length; i++) {
    if(i % 2 === 0) {
      letters[i] = letters[i].toUpperCase();
    }
  }
  console.log(letters);
  return letters.join('');
}

module.exports = alternateCase;
