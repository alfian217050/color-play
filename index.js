// AWAL UBAH WARNA
const tUbahWarna = document.querySelector("button[name=tUbahWarna]");

tUbahWarna.onclick = function () {
  document.body.classList.toggle("ubah-warna");
};
// AKHIR UBAH WARNA

// AWAL ACAK WARNA
const tAcakWarna = document.createElement("button");
const tTeksAW = document.createTextNode("Acak Warna");
tAcakWarna.append(tTeksAW);
tAcakWarna.setAttribute("type", "button");
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", function () {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});
// AKHIR ACAK WARNA

// AWAL RANGE
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");
sMerah.addEventListener("input", function () {
  // seleksi elemen lama dan hapus elemen tersebut
  const p1 = document.getElementById("1");
  const p1Span = p1.querySelector("span");
  p1.removeChild(p1Span);

  //   buat elemen baru
  const p1Teks = document.createTextNode(sMerah.value);
  const p1SpanBaru = document.createElement("span");
  p1SpanBaru.append(p1Teks);

  //   tambahkan elemen baru
  p1.append(p1SpanBaru);

  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});
sHijau.addEventListener("input", function () {
  // seleksi elemen lama dan hapus elemen tersebut
  const p1 = document.getElementById("2");
  const p1Span = p1.querySelector("span");
  p1.removeChild(p1Span);

  //   buat elemen baru
  const p1Teks = document.createTextNode(sHijau.value);
  const p1SpanBaru = document.createElement("span");
  p1SpanBaru.append(p1Teks);

  //   tambahkan elemen baru
  p1.append(p1SpanBaru);

  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});
sBiru.addEventListener("input", function () {
  // seleksi elemen lama dan hapus elemen tersebut
  const p1 = document.getElementById("3");
  const p1Span = p1.querySelector("span");
  p1.removeChild(p1Span);

  //   buat elemen baru
  const p1Teks = document.createTextNode(sBiru.value);
  const p1SpanBaru = document.createElement("span");
  p1SpanBaru.append(p1Teks);

  //   tambahkan elemen baru
  p1.append(p1SpanBaru);

  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});
// AKHIR RANGE
