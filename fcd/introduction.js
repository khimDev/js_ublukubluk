/* Concat Method */
let firtsName = "Rokhim";
let LastName = "Dev";

let fullName = firtsName.concat(" ", LastName);
console.log(fullName);

/* js Bracket Notation */
let salam = "azizir";
let sal = salam[0] + salam[2];
console.log(sal);

/* another example */
let statement = "She said, \"Hello!\"";
console.log(statement);

/* Literals white multiple lines */
let poem = ` Roes is beautiful
 i hope she's got a
 perfect person in his life`;
console.log(poem);

/* Complex Literals template */
const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${
  (score / highestScore) * 100
}%.`;
console.log(output); 
