// You are given a number. Return the mean of the digits. The results will always be a whole number.
function mean(n) {
  var n_length = n.toString().length;
  var sum = 0;
  while (n > 0) {
    rem = n % 10;
    sum = sum + rem;
    n = Math.floor(n / 10);
  }
  return sum / n_length;
}
console.log(mean(666));
