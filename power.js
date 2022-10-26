function power(base, exp) {
  // var pow;
  if (exp == 0 && base == 0) {
    return 0;
  }
  var pow = 1;
  for (i = 1; i <= exp; i++) {
    //   var b = base
    var pow = pow * base;
  }
  return pow;
}
console.log(power(4, 5));
