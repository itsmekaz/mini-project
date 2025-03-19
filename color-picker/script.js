// seleksi input color
document.getElementById("colorInput").addEventListener("input", (e) => {
  // ambil input colornya
  let colorSelected = e.target.value;

  // seleksi color code terus ubah textnya
  let colorCode = document.getElementById("colorCode");
  colorCode.textContent = colorSelected.toUpperCase();

  // ganti color displaynya
  let colorDisplay = document.getElementById("colorDisplay");
  colorDisplay.style.backgroundColor = colorSelected;
});