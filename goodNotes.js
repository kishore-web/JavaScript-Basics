// # Good Notes
// You are given an array of objects. Return an array of objects containing the name of the students and the good note that he has.
// A good note is note which is higher in value than the rest of the notes.
// ### Sample Input:
// [
//   { "name": "Bob", "notes": [3, 5, 4] },
//   { "name": "Mary", "notes": [1, 4, 6] },
//   { "name": "Jack", "notes": [1, 2, 3] }
// ]
// ### Sample Output:
// [
//   { "name": "Bob", "goodNote": 5 },
//   { "name": "Mary", "goodNote": 6 },
//   { "name": "Jack", "goodNote": 3 }
// ]

function goodNotes(arrObj) {
  let arr = [];
  for (i = 0; i < arrObj.length; i++) {
    let gdValues = arrObj[i].notes;
    // console.log(gdValues)
    let gdNotes = Math.max(...gdValues);
    arr[i] = gdNotes;
  }
  // console.log(arr)
  for (i = 0; i < arr.length; i++) {
    arrObj[i]["goodNote"] = arr[i];
    delete arrObj[i]["notes"];
  }
  return arrObj;
}
console.log(
  goodNotes([
    { name: "Bob", notes: [3, 5, 4] },
    { name: "Mary", notes: [1, 4, 6] },
    { name: "Jack", notes: [1, 2, 3] },
  ])
);
