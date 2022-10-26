//Take a number and return all the even digits of the number.
// Constraints:
// 0 <= number <= 10000
// Input:
// A single integer is provided as input.
// Output:
// Return a string containing the sum of odd digits and even digits spearted by comma.
// Return -1 in case there are no odd or even digits.
// If there are only odd digits return their sum as a string.
// If there are only even digits return their sum as a string.
// Note: 0 is neither even nor odd.
// Example1:
// Input:
// 12034
// Output:
// 4,6
// Explaination
// In 12034
// 1 and 3 are odd. i.e 1+3 = 4
// 2 and 4 are even. i.e 2+4 = 6
// Hence the answer 4,6
function evenDigits(n) {
  var strNum = n.toString();
  var evenSum = 0;
  var oddSum = 0;
  for (index = 0; index <= strNum.length; index++) {
    digits = Number(strNum[index]);

    if (digits % 2 == 0) {
      evenSum = evenSum + digits;
    }
    if (digits % 2 == 1) {
      oddSum = oddSum + digits;
    }
  }
  return `${oddSum},${evenSum}`;
}

console.log(evenDigits(1234));
