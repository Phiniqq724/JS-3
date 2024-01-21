// 1. Literal Declaration

// let mahasiswa = {
//     nama: "Pikek",
//     stamina: 10,
//     makan: function(porsi) {
//         this.stamina = this.stamina+porsi;
//         console.log(`Mengisi energi ${porsi}`);
//     }
// }
// console.log(mahasiswa)
// mahasiswa.makan(5)
// console.log(mahasiswa)

// 2. Function Declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Mengisi energi ${porsi}`);
//     }
//     mahasiswa.main = function(jam) {
//         this.energi = this.energi - jam
//         console.log(`Asiknya main ${jam} jam`);
//     }
//     // Harus return
//     return mahasiswa
// }

// let Pikek = Mahasiswa("Pikek", 10)

// console.log(Pikek)

// Pikek.makan(5)

// console.log(Pikek);

// Pikek.main(5)
// console.log(Pikek);

// 3. Constructor Funtion
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Mengisi energi ${porsi}`);
    }
    this.main = function(jam) {
        this.energi = this.energi - jam
        console.log(`Asiknya main ${jam} jam`);
    }
}

let Pikek = new Mahasiswa("Pikek", 10)

console.log(Pikek)
Pikek.main(5)
Pikek.makan(1)
console.log(Pikek);

