// # Even Cube
// You are given a number from 1 to N .  Sum all the cubes of even numbers and return the sum.
function evenCube(num) {
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      sum = sum + Math.pow(i, 3);
    }
  }
  return sum;
}
console.log(evenCube(10));
