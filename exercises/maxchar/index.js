// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var obj = {};
  for (let char of str) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  var res = 0;
  var maxChar = 0;
  for (let i in obj) {
    if (obj[i] > res) {
      res = obj[i];
      maxChar = i;
    }
  }

  return maxChar;
}

module.exports = maxChar;
