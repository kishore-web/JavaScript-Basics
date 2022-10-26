// ### Output Format
// Return a string where the given given string is repeated num number of times

// ### Sample Input:
// ```
// "a" 5
// ```
// ### Sample Output:
// ```
// "aaaaa"

function repeat(str, num) {
  var stir = "";
  for (i = 1; i <= num; i++) {
    stir += str;
  }
  return stir;
}
console.log(repeat("ab", 6));
