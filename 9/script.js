function isPrima(bilangan) {
  if (bilangan <= 1) {
    return false;
  } else if (bilangan === 2) {
    return true;
  } else {
    for (let i = 2; i < bilangan; i++) {
      if (bilangan % i === 0) {
        return false;
      }
    }
    return true;
  }
}

// contoh penggunaan
let angka = 17;

if (isPrima(angka)) {
  console.log(`Bilangan ${angka} adalah bilangan prima.`);
} else {
  console.log(`Bilangan ${angka} bukan bilangan prima.`);
}
