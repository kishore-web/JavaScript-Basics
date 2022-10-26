// ## Given an array of objects, push all the names to a new array and return the new array
// ### Input Format
// An array of object ```obj```
// ### Sample Input:
//   { name: "John", email: "john@example.com" },
//   { name: "Jason", email: "jason@example.com" },
//   { name: "Jeremy", email: "jeremy@example.com" },
//   { name: "Jacob", email: "jacob@example.com" }
// ]
// ### Sample Output
// ["John", "Jason", "Jeremy", "Jacob"]

function destructure(obj) {
  var { name } = obj;
  var arr = [];
  for (var { name } of obj) {
    arr.push(name);
  }
  return arr;
}
console.log(
  destructure([
    { name: "John", email: "john@example.com" },
    { name: "Jason", email: "jason@example.com" },
    { name: "Jeremy", email: "jeremy@example.com" },
    { name: "Jacob", email: "jacob@example.com" },
  ])
);
