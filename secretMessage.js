// ### Sample Input: 707
// ### Sample Output: "LOL"

function secret(num) {
  var storeLetter = "OIZEHSGLB-";
  var str = String(num);
  var new_str = "";
  for (var i = str.length - 1; i >= 0; i--) {
    num = Number(str[i]);
    new_str += storeLetter[num];
  }
  return new_str;
}
console.log(secret(5508));
