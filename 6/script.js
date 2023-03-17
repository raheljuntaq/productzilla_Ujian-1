function cekAngka(angka) {
  if (angka % 1 !== 0) {
    return "desimal";
  } else if (angka % 2 === 0) {
    return "genap";
  } else {
    return "ganjil";
  }
}
