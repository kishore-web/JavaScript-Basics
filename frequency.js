// You are given an array. Return an object containg the frequency of all the elements where the elements are the keys and their frequency is their value.
// ### Input Format
// An array `arr`
// ### Output Format
// Return an objects containg elements as key and their frequency as values.
// ### Sample Input:
// ["A", "B", "A", "A", "A"]
// ### Sample Output:
// { A: 4, B: 1 }

function frequency(arr) {
  let obj = {};
  for (i = 0; i < arr.length; i++) {
    let key = arr[i];
    if (obj[key]) {
      obj[key] += 1;
      //console.log(obj[key])
    } else {
      obj[key] = 1;
      // console.log(obj[key])
    }
  }
  return obj;
}
console.log(frequency(["A", "B", "A", "A", "A"]));
