let angka = [50, 60, 70, 80];

function cariAngka(arr, target) {
    for (let a = 0; a < angka.length; a++) {
        if (arr[a] === target) {
            return("onok")
        } 
        
    }

    return("Ga onok")
}

console.log(cariAngka(angka, 60));