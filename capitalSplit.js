// ### Output Format
// A string, Return the new string after adding space before every capital letter and then uncapitalize the string(i.e change uppercase to lowercase).
// ### Sample Input:
// "helloWorld"
// ### Sample Output:
// "hello world"

function splitCapital(str) {
  var str_new = "";
  for (index = 0; index < str.length; index++) {
    if (str[index] == str[index].toUpperCase()) {
      str_new += " " + str[index].toLowerCase();
    } else {
      str_new += str[index];
    }
  }
  return str_new;
}
console.log(splitCapital("iLoveMyTeapot"));
