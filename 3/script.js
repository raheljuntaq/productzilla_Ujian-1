function cekAkses(level) {
  if (level === "admin") {
    console.log("Selamat datang, Admin!");
  } else if (level === "user") {
    console.log("Anda tidak memiliki akses ke halaman ini!");
  } else {
    console.log("Level akses salah ya!");
  }
}

//Contoh Penggunaan (tinggal sesuaikan level nya)
cekAkses("admin"); // output: Selamat datang, Admin!
cekAkses("user"); // output: Anda tidak memiliki akses ke halaman ini!
cekAkses("gatau"); // output: Level akses tidak valid!
