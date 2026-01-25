// function cetakAngka(num) {
//     for (let n = 1; n <= num; n++) {
//         console.log(n);
//     }
// }
// console.log(cetakAngka(10))

/* function jumlahkan(angka) {
    for (let i = 1; i <= angka; i++) {
     let jumlah = i + angka;
    }
                            | KODE SALAH |
    return jumlah;
 }

 console.log(jumlahkan(12))
*/

function Jumlah(nomer) {
    let total = 0;

    for (let a = 0; a <= nomer; a++){
        total = total + a;
    }

    return total;
}

console.log(Jumlah(13));