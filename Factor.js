function factor(num) {
  str = "";
  for (i = 1; i <= num; i++) {
    if (i == num) {
      str = str + i;
    } else if (num % i == 0) {
      str = str + i + " ";
    }
  }
  return str;
}
console.log(factor(6));
