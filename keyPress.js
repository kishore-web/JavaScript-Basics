// There is unique keyboard which has only one button. To type the letter 'A' you need to press the button once. To type the letter 'E' you need to press the button 5 times.
// You are given a function that takes a string (the message) and returns the total number of times the button is pressed.
// ### Input Format
// A string `message`
// ### Output Format
// An integer, return the total number of times the button is pressed.
// ### Sample Input:
// "abde"
// ### Sample Output: 12

function keyPress(message) {
  var total = 0;
  for (j = 0; j < message.length; j++) {
    for (i = 1; i <= 26; i++) {
      if (message.charAt(j) === String.fromCharCode(i + 96)) {
        total = total + i;
      }
    }
  }
  return total;
}
console.log(keyPress("qudusayo"));
