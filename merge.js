// # Merge
// You are given an two sorted array. Merge them and return the new sorted array.
// ### Sample Input:
// ```
// [1, 2, 3, 5]
// [2, 5, 7, 9]
// ```
// ### Sample Output:
// ```
// [1, 2, 2, 3, 5, 5, 7, 9]

function merge(arr1, arr2) {
  let arrMer = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arrMer.push(arr1[i]);
      i++;
    } else {
      arrMer.push(arr2[j]);
      j++;
    }
  }
  return [...arrMer, ...arr1.slice(i), ...arr2.slice(j)];
}
console.log(merge([2, 8, 15, 19, 22], [5, 9, 12, 17]));
