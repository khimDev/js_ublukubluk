// let x = 5;
// let z = x ** 2;

// console.log(z);

let x = null;
let y = x &&= 10;

console.log(y);

let z = 1;
z ??= 10;
console.log(z);

// Operator spread
let text = "1234";

let min = Math.min(...text);

console.log(min);