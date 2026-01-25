/* === Mini QUEST === */

const mobil = {
    merk: "Toyota",
    tahun: 2020,
};

function cetakMobil(m) {
    console.log(m.merk);
    console.log(m.tahun);
    console.log(`Mobil ${m.merk} tahun ${m.tahun}`); // Di gabung pake bactick
}

cetakMobil(mobil);

mobil.tahun = 2022;

cetakMobil(mobil);

