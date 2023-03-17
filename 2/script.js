function cekAngka(angka1, angka2) {
  if (angka1 !== 0 && angka2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(cekAngka(5, 0)); // false
console.log(cekAngka(5, -2)); // true
console.log(cekAngka(0, 0)); // false
console.log(cekAngka(7, 9)); // true
console.log(cekAngka(-7, -9)); // true
