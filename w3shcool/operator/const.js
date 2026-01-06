// // -- Contoh dari CONST ARRAY -- //
const name = ['rokhim', 'lina', 'faris', 'ardi'];

name[1] = 'luna';
name.push('nisa')

console.log(name[4]);

// -- Contoh CONST Object -- //
const car = {type:"SUV", model:"1224", color:"lembayung"};
// bisa mengubah properti dari si object
car.color = "purple";
// bisa menambah properti 
car.owner = "rokhim";

console.log(typeof car);

let a = "budi";
 a = 7;
console.log(a);

let txt1 = "A";
let txt2 = "B";

let txt3 = txt1 < txt2;

console.log(txt3);

// Operator Nullish
let txt4 = null;
let txt5 = "B";

let txt6 = txt4 ?? txt5;

console.log(txt3);