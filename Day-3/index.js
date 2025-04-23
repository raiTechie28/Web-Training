console.log("welcome in JS");

// console.log("---Starting with Variables---", c);
// const a = 5;
// let b = 6;
// var c = 7;
// console.log(a, b, c);
// console.log("-a : , b : , c : ", a, b, c);
// console.log("a");
// var sum = a + b + c;

// console.log("Sum : ", sum);
// console.log("Sum " + a + b + c);

c = 8;
console.log(c);

console.log("---If Else statements----");
const marks = 80;
if (marks > 40) {
  console.log("pass");
} else {
  console.log("fail");
}

var a = 8,
  b = 10;
console.log("a,b", a, b);
if (a < b) {
  console.log("b=", b);
} else {
  console.log("a=", a);
}

console.log("largest no:");
const x = 1001;
const y = 120;
const z = 115;

if (x > y) {
  if (x > z) {
    console.log(x);
  }
} else {
  if (y > z) {
    console.log(y);
  } else {
    console.log(z);
  }
}

console.log("----For loop---");
var sum = 0;
for (let i = 0; i < 10; i++) {
  if (i % 1 == 0) {
    console.log(i);
    sum = sum + i;
  }
}
console.log("Sum=", sum);
