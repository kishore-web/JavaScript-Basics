// You are given an array. Sort it using merge sort
// ### Sample Input:
// [2, 5, 7, 9, 1, 2, 3, 5]
// ### Sample Output:
// [1, 2, 2, 3, 5, 5, 7, 9]

function merge(arr1, arr2) {
  let arrMerge = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arrMerge.push(arr1[i]);
      i++;
    } else {
      arrMerge.push(arr2[j]);
      j++;
    }
  }
  return [...arrMerge, ...arr1.slice(i), ...arr2.slice(j)];
}
function sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let leftArray = arr.slice(0, mid);
  let rightArray = arr.slice(mid);

  return merge(sort(leftArray), sort(rightArray));
}
console.log(sort([1, 5, 3, 8, 6, 7]));
