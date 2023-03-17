// Harga
const hargaBaju = 75000;
const hargaCelana = 120000;
const hargaTas = 250000;

// Jumlah produk yang dibeli
const jmlBaju = 3;
const jmlCelana = 2;
const jmlTas = 1;

// Operator perhitungan
const totalBayar = hargaBaju * jmlBaju + hargaCelana * jmlCelana + hargaTas * jmlTas;

//kondisi
let totalBayarSetelahDiskon = totalBayar;
if (totalBayar > 500000) {
  const diskon = totalBayar * 0.1;
  totalBayarSetelahDiskon = totalBayar - diskon;
}

// menampilkan hasil perhitungan
console.log(`Total harga belanjaan : Rp${totalBayar}`);

if (totalBayarSetelahDiskon === totalBayar) {
  console.log("Tidak ada diskon.");
} else {
  console.log(`Karena anda belanja melebihi Rp500.000.
  Maka, anda mendapat diskon 10% sejumlah Rp${totalBayar - totalBayarSetelahDiskon} `);
  console.log(`Jadi, Total harga belanjaan anda setelah diskon = Rp${totalBayarSetelahDiskon} `);
}
