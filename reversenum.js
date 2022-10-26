// # Reverse
// You are given a number, return the reverse of the number
function reverse(num) {
  var rev = 0;
  while (num > 0) {
    reminder = num % 10;
    rev = rev * 10 + reminder;
    num = Math.floor(num / 10);
  }
  return rev;
}
console.log(reverse(12345));
