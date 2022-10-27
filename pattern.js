console.log("Pattern.1");
for (i = 1; i <= 5; i++) {
  var str = "";
  for (j = 1; j <= 5; j++) {
    str += "*";
  }
  console.log(str);
}

console.log("Pattern.2");
for (i = 1; i <= 5; i++) {
  var str = "";
  for (j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}
console.log("Pattern.3");
for (i = 1; i <= 5; i++) {
  var str = "";
  for (j = 1; j <= i; j++) {
    str += j;
  }
  console.log(str);
}

console.log("Pattern.4");
for (i = 1; i <= 5; i++) {
  var str = "";
  for (j = 1; j <= i; j++) {
    str += i;
  }
  console.log(str);
}
