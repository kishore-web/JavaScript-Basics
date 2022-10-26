// ### Sample Input:
// "abcdefg"
// ### Sample Output:
// "acegbdf"

function oddEvenConcat(str) {
  var string = "";
  for (i = 0; i < str.length; i += 2) {
    string += str[i];
  }
  for (i = 1; i < str.length; i += 2) {
    string += str[i];
  }

  return string;
}
console.log(oddEvenConcat("abcdefg"));
