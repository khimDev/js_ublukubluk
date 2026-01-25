function cekUmur(umur) {
    if(umur >= 18) {
        return("Dewasa");
    } else {
        return("Anak-anak");
    }
}

console.log(cekUmur(15))