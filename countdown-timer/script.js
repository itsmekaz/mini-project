// ambil elemen dari html
const daysElement = document.getElementById('displayDays');
const hoursElement = document.getElementById('displayHours');
const minutesElement = document.getElementById('displayMinutes');
const secondsElement = document.getElementById('displaySeconds');
const inputHours = document.getElementById('inputHours');
const inputMinutes = document.getElementById('inputMinutes');
const inputSeconds = document.getElementById('inputSeconds');
const startButton = document.getElementById('startButton');

// variabel countdownInterval
let countdownInterval;

function startTimer() {
  // buat variabel baru, ambil value dari input element dan convert ke int
  let hours = parseInt(inputHours.value) || 0;
  let minutes = parseInt(inputMinutes.value) || 0;
  let seconds = parseInt(inputSeconds.value) || 0;

  // hitung seluruhnya ke seconds
  let totalTimesInSeconds = hours * 3600 + minutes * 60 + seconds;

  // kalau yg di input gada, atau bernilai negatif / 0
  if (totalTimesInSeconds <= 0) {
    return alert("Please enter a valid time");
  }

  // hilangkan isi input saat timer di start
  inputHours.value = '';
  inputMinutes.value = '';
  inputSeconds.value = '';

  // fungsi buat update display timer setiap detik
  countdownInterval = setInterval(() => {
    // konversi untuk menghitung ke hari, jam, menit, dan detik
    const days = Math.floor(totalTimesInSeconds/86400);
    const hours = Math.floor((totalTimesInSeconds % 86400) / 3600)
    const minutes = Math.floor((totalTimesInSeconds % 3600) / 60)
    const seconds = Math.floor(totalTimesInSeconds % 60)

    // update display timer. padStart utk memastikan agar angka selalu 2 digit
    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
    
    // kurangi 1 setiap detik
    totalTimesInSeconds--;

    // kalau waktu udh habis 
    if(totalTimesInSeconds < 0) {
      clearInterval(countdownInterval);
      alert('Time is up!');
    }
  }, 1000); //miliseconds
}

startButton.addEventListener('click', () => {
  // kalo masih ada timer yg jalan, stop dulu
  clearInterval(countdownInterval);

  // baru start timer lagi dgn input yg baru
  startTimer();
});