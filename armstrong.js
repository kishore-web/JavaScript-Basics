function armStrong(num) {
  let str = num.toString();
  let numlen = str.length;
  let sum = 0;
  for (i = 0; i < numlen; i++) {
    let sepnum = Number(str[i]);
    sum += Math.pow(sepnum, numlen);
  }
  if (sum === num) {
    return `${num} is an ArmStrong Number`;
  }
  return `${num} is not a ArmStrong Number`;
}
console.log(armStrong(153));
