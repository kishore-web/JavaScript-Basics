function fibo(n) {
  var num1 = 0;
  var num2 = 1;
  for (i = 1; i <= n; i++) {
    var next_num = num1 + num2;
    console.log(num1);
    num1 = num2;
    num2 = next_num;
  }
  return num1;
}
fibo(3);
