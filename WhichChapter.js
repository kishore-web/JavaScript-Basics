// Which Chapter ?
// You are given an object with keys as chapter of book and its value as the page that chapter starts on. You are also given a page number. Return name of the chapter to which the given page number is closest. If two chapters are at equal distance return the chapter with greater page number
// ### Sample Input:
// {
//   "Chapter 1" : 1,
//   "Chapter 2" : 15,
//   "Chapter 3" : 37
// }
// 10
// ### Sample Output:
// ```
// "Chapter 2"
// ### Explaination:
// ```
// 10 is near to 15 which is Chapter 2

function chapter(book, pageNo) {
  let values = Object.values(book);
  console.log(values);
  const findClosest = values.reduce((current, prev) => {
    return Math.abs(current - pageNo) < Math.abs(prev - pageNo)
      ? current
      : prev;
  });

  console.log(findClosest);
  for (let key in book) {
    if (book[key] == findClosest) {
      return key;
    }
  }
}
console.log(
  chapter(
    {
      "New Beginnings": 1,
      "Strange Developments": 15,
      "The End?": 194,
      "The True Ending": 460,
    },
    8
  )
);
