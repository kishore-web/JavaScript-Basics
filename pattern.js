//console.log("Pattern.1");
for (i = 1; i <= 5; i++) {
  var str = "";
  for (j = 1; j <= 5; j++) {
    str += "*";
  }
  console.log(str);
}

//console.log("Pattern.2");
for (i = 1; i <= 5; i++) {
  var str = "";
  for (j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}
//console.log("Pattern.3");
for (i = 1; i <= 5; i++) {
  var str = "";
  for (j = 1; j <= i; j++) {
    str += j;
  }
  console.log(str);
}

//console.log("Pattern.4");
for (i = 1; i <= 5; i++) {
  var str = "";
  for (j = 1; j <= i; j++) {
    str += i;
  }
  console.log(str);
}

//console.log("Pattern.5");
for (i = 5; i >= 1; i--) {
  var str = "";
  for (j = 1; j <= i; j++) {
    str = str + "*";
  }
  console.log(str);
}
//console.log("Pattern.6");

for (i = 5; i >= 1; i--) {
  var str = "";
  for (j = 1; j <= i; j++) {
    str = str + j;
  }
  console.log(str);
}
// console.log("Pattern.7")
var n = 5
for(i=1;i<=n; i++){
  var str =""
  //spaces
  for(k = 1; k <= n-i; k++){
    str += " "
  }
  for (j = 1; j<=(2*i-1); j++){
    str += "*"
  }
console.log(str)
}

//console.log("Pattern.8")
for(i = 5;i >= 1; i--){
  var str =""
  //spaces
  for(k=1; k <= (5-i); k++){
    str += " "
  }
  for (j = 1; j <= (2*i-1); j++){
    str += "*"
  }
console.log(str)
}

//console.log("Pattern.9")
var n = 10
for(i = 1;i <= n; i++){
  var str =""
  //spaces
  for(k=1; k <= (n-i); k++){
    str += " "
  }
  for (j = 1; j <= (2*i-1); j++){
    str += "*"
  }
console.log(str)
}

//console.log("Pattern.10")
 var n = 5
for(i = 1;i <= n; i++){
  var str = ""
  for (j = 1; j <= i; j++){
    str += "*"
  }
console.log(str)
}
 for(let i = n-1;i >= 1;i--){
  var str = "";
  for(let j = 1; j <= i; j++){
    str = str + "*"
  }
  console.log(str)
}

console.log("Pattern.11")
for(i = 1;i <= 5;i++){
  str = ""
  for(j=1;j<=i;j++){
    if((i+j)%2==1){
       str += "0"+" "
    } else {
       str += "1" + " "
    }
  }
  console.log(str)
}

console.log("Pattern.12")
 var str =""
for(i=1;i<=4; i++){
  var str =""
  for (j = 1; j<=i; j++){
    str += j
  }
  for(k=5;k>=(2*i-2);k--){
    str += " "
  }
  for (j = 1; j<=i; j++){
    str += i-j+1
  }
console.log(str)
}

//console.log("Pattern.13")
var num = 1;
for (i = 1; i <= 5; i++) {
  var str = "";
  for (j = 1; j <= i; j++) {
    str += num + " "
    num++
  }
  console.log(str)
}

// console.log("Pattern.14")
for(i=1;i<=5; i++){
  var str =""
  for (j = 1; j<=i; j++){
    str += String.fromCharCode(64+j)
  }
console.log(str)
}

// console.log("Pattern.15")
for(i=5;i>=1; i--){
  var str =""
  for (j = 1; j<=i; j++){
    str += String.fromCharCode(64+j)
  }
console.log(str)
}

//console.log("Pattern.16")
for(i=1;i<=4; i++){
  var str =""
  for (j = 1; j<=i; j++){
       str += String.fromCharCode(64+(j))
    } 
console.log(str)
}

//console.log("Pattern.17")

for (i = 4; i >= 0; i--) {
  var str = ""
  for (j = i; j <= 4; j++) {
    str += String.fromCharCode(65 + (j))+' '
  }
  console.log(str)
}

//console.log("Pattern.18")
for(i=1;i<=5; i++){
  var str =""
  for (j = 1; j<=i; j++){
    str += String.fromCharCode(64+i)
  }
console.log(str)
}