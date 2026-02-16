/* chareCodeAt() method */
let letter = "ahmad";
console.log(letter.charCodeAt(1));  // 65

/* fromCharCode() method */
let char = String.fromCharCode(104);
console.log(char); //h

/* includes Method */
let a = "Have a nice Day!";
let b = a.includes("nice", 7);
console.log(b); // True

/* Slice Method */
let message = "Hello, world!";       
let greeting = message.slice(0, 5);

console.log(greeting);  // Hello