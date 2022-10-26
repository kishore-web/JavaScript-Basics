// # Two Numbers
// You are given a number, break the number into two halves. Return an array with the two halves. If the number is odd make the 2nd number greater
// ### Sample Input:
// 11
// ### Sample Output:
// [5, 6]

function twoNum(num) {
  let arr = [];
  let num1 = Math.floor(num / 2);
  arr.push(num1);
  let num2 = num - num1;
  arr.push(num2);
  //let arr = [num1, num2]
  return arr;
}
console.log(twoNum(15));
