function even(start, end) {
  var sum = 0;
  for (let i = start; i <= end; i += 2) {
    sum = sum + i;
  }
  return sum;
}
console.log(even(1, 5));
