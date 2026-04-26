
// for 

for (let b = 0; b <= 10; b++) {
     console.log(b);
}

// for ( Genap & Ganjil )

for (let a = 0; a <= 20; a++) {
     if (a % 2 === 0) {
         console.log(a);
     }
};

// for loop

let total = 0;

for (let c = 0; c <= 10; c++) {
    total += c;
}

console.log(total);

// while

let target = 6;
let guess = 1;

while (guess <= 10) {

    if (guess === 6) {
        console.log("target found");
        break;
    }
    guess++;
}

// do while

let y = 11;
do {
    console.log(y);
    y++;
} while (y <= 10);
