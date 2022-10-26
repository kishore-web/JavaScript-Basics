// # N Tables + 1
// You are given a number n and returns the first 10 multiples of n with 1 added to it, separated by commas.

// ### Input Format
// A number `n`

// ### Output Format
// Return a string with first 10 multiples of n with 1 added to it seperated by commas.

// ### Sample Input:
// ```
// 1
// ```

// ### Sample Output:
// ```
// "2,3,4,5,6,7,8,9,10,11"
function table(n) {
  var str = "";
  for (i = 1; i <= 10; i++) {
    if (n * 10 + 1 == i * n + 1) {
      str = str + (i * n + 1);
    } else {
      str = str + (i * n + 1) + ",";
    }
  }
  return str;
}
console.log(table(7));
