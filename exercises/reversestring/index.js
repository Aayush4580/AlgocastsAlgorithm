// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //   return str.split('').reverse().join('');
  var reverseStr = '';
  //   for (var i = str.length - 1; i >= 0; i--) {
  //     reverseStr += str[i];
  //   }
  for (var character of str) {
    reverseStr = character + reverseStr;
  }
  debugger;
  return reverseStr;
}

module.exports = reverse;
