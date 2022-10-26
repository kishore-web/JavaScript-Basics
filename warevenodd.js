// # WAR
// There's a great war between the even and odd numbers. Many numbers already lost their lives in this war and it's your task to end this. You have to determine which group sums larger: the evens, or the odds. The larger group wins.

// You are given two numbers `n` and `m`. From 0 to n and 0 to m calculate the sum of even and odd numbers respectively and return "Even" or "Odd"

// ### Input Format
// Two numbers `n` and `m`

// ### Output Format
// Return "Even" or "Odd"

// ### Sample Input:
// ```
// 2 3
function war(n, m) {
  //sum of even numbers
  var sumOfEven = 0;
  for (i = 0; i <= n; i += 2) {
    sumOfEven += i;
  }
  var sumOfOdd = 0;
  for (j = 0; j <= m; j++) {
    if (j == 0 || j % 2 == 1) {
      sumOfOdd += j;
    }
  }
  if (sumOfEven > sumOfOdd) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(war(6, 7));
