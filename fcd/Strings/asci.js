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

/* Trim method */

// 1. Trim()
let messag = "   Hello!   ";
console.log(messag); // "   Hello!   "
let trimmedMessage = messag.trim();
console.log(trimmedMessage);  // "Hello!"

// 2. TrimStart()
let greetin = "   Hello!   ";
console.log(greetin);  // "   Hello!   "
let trimmedStart = greetin.trimStart();
console.log(trimmedStart);  // "Hello!   "

// 3. TrimEnd()
let greeti = "   Hello!   ";
console.log(greeti);  // "   Hello!   "
let trimmedEnd = greeti.trimEnd();
console.log(trimmedEnd);  // "   Hello!"
