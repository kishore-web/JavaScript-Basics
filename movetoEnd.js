// # Move to End
// # Bonus question 2
// You are given an array, move all the zeroes present in the array to the end, without changing the order of other elements.
// ### Sample Input:
// [1, 2, 0, 0, 4, 0, 5]
// ### Sample Output:
// [1, 2, 4, 5, 0, 0, 0]

function move(arr) {
  let arr1 = [],
    arr2 = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr1.push(arr[i]);
      console.log(arr1);
    } else {
      arr2.push(arr[i]);
      console.log(arr2);
    }
  }
  return arr2.concat(arr1);
}
console.log(move([1, 2, 0, 0, 4, 0, 5]));
