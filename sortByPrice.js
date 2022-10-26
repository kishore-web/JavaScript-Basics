// ## Given an object with some items as key and a number as value. You're also given a number as functional arguments. Return all the items which have value greater than the given number.
// ### Sample Input:
// { "a": 3000, "b": 200, "c": 1050 }
// 1000
// ### Sample Output
// { "a": 3000, "c": 1050 }

function sortByPrice(obj, price) {
  var arr = {};
  for (var key in obj) {
    if (obj[key] > price) {
      arr[key] = obj[key];
      //console.log(arr)
    }
  }
  return arr;
}
console.log(sortByPrice({ a: 3000, b: 200, c: 1050 }, 1000));
