// ### Sample Input:
// 'Happy Birthday'
// ### Sample Output:
// 'hAPPY bIRTHDAY'

function reverse(str) {
  str_new = "";
  for (index = 0; index < str.length; index++) {
    if (str[index] == str[index].toLowerCase()) {
      str_new += str[index].toUpperCase();
    } else {
      str_new += str[index].toLowerCase();
    }
  }
  return str_new;
}
console.log(reverse("mAny THANKs"));
