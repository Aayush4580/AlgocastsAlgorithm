// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  var r = [0, 1];
  var num1 = 0;
  var num2 = 1;
  var sum;
  for (i = 0; i < n; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    r.push(sum);
  }
  return r[n];
}
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

module.exports = fib;
