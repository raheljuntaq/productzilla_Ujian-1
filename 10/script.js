function isKabisat(tahun) {
  if ((tahun % 4 == 0 && tahun % 100 != 0) || tahun % 400 == 0) {
    return true;
  } else {
    return false;
  }
}

// contoh penggunaan
let tahun1 = 1992;
let tahun2 = 1990;
let tahun3 = 2100;

console.log(tahun1 + " adalah tahun kabisat: " + isKabisat(tahun1));
console.log(tahun2 + " adalah tahun kabisat: " + isKabisat(tahun2));
console.log(tahun3 + " adalah tahun kabisat: " + isKabisat(tahun3));
