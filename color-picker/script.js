// seleksi input color dan ketika color dipilih lakukan fungsi berikut
document.getElementById("colorInput").addEventListener("input", (event) => {
  // ambil input colornya
  let selectedColor = event.target.value;

  // seleksi color code terus ubah textnya
  let colorCode = document.getElementById("colorCode");
  colorCode.textContent = selectedColor.toUpperCase();

  // ganti color displaynya
  let colorDisplay = document.getElementById("colorDisplay");
  colorDisplay.style.backgroundColor = selectedColor;
});
