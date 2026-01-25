const user = {
    nama: 'Ahmad',
    umur: 20,
    inLogin: true
};

user.umur = 18;
console.log(user["nama"]); // Bracket notation
console.log(user.umur); // Dot notation

/* 2 Cara melakukan pengambilan data pada object 
   yaitu dengan menggunakan DOT NOTATION dan BRACKET NOTATION */

/* === Obejct in Function === */

function cetakUser(u) {
    console.log(u.nama);
}

cetakUser(user);

/* Berikut adalah merupakan contoh penggunaan Object
   dalam sebuah fungsi */

