
// Cek Status lulus atau tidak 

let nilai = 75;

if (nilai >= 75) {
    console.log("Lulus");
} else if (nilai >= 60) {
    console.log("Tidak lulus");
} else {
    console.log("Improveit");
}

// Cek Positif, Negatif, Nol 

let input = 0;

if (input > 0) {
    console.log("Positif");
} else if (input < 0) {
    console.log("Negatif");
} else {
    console.log("Nol");
}

// Cek Ganjil Genap 

let number = 10;
if (number % 2 === 0) {
    console.log("Genap");
} else {
    console.log("Ganjil");
}

// Login Sederhana

let username = "admin";
let password = "123";

if (username === "admin" && password === "123") {
    console.log("login Succesfuly");
} else {
    console.log("login Gagal");
}

// Diskon Belanja 

let totalBelanja = 120000;
let member = true;

if (totalBelanja >= 100000 && member === true) {
    const diskon = totalBelanja * 0.1;
    totalBelanja -= diskon;
    console.log("Diskon 10% diterapkan. Total Belanja: " + totalBelanja);
} else {
    console.log("Tidak ada diskon. Total Belanja " + totalBelanja);
}

// Nilai Huruf

let nilai = 59;

if (nilai > 90) {
    console.log("A");
} else if (nilai >= 75) {
    console.log("B");
} else if (nilai >= 60) {
    console.log("C");
} else {
    console.log("D");
}