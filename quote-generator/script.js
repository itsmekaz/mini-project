// get quote, author, dan button dari HTML
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const buttonGenerator = document.getElementById('generator');

// quotes array
let quotes = [
  {"author": "Michelle Obama", "quote": "Success isn\’t about how your life looks to others. It\’s about how it feels to you."}, 
  {"author": "Germany Kent", "quote": "Be around people who make you want to be a better person, who make you feel good, laugh, and remind you what\’s important in life."}, 
  {"author": "Mahnoor Tahir", "quote": "The most beautiful smile belongs to those who make others smile"}, 
  {"author": "Roy T. Benett", "quote": "Don\’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy."}, 
  {"author": "Aristotle", "quote": "The roots of education are bitter, but the fruit is sweet."}, 
  {"author": "Jim Rohn", "quote": "Happiness is not by chance, but by choice."}, 
  {"author": "Steve Jobs", "quote": "Your time is limited, so don\’t waste it living someone else\’s life."}, 
  {"author": "Mark Twain", "quote": "If you tell the truth, you don't have to remember anything."}, 
  {"author": "Mahatma Gandhi", "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever."}, 
  {"author": "Steve Jobs", "quote": "STAY HUNGRY, STAY FOOLISH"}, 
];

// buat fungsi untuk membuat quote
function generateQuote() {
  // get random index dari array
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomIndex];

  // update quote dan author yang ada di HTML
  quote.textContent = `${randomQuote.quote}`;
  author.textContent = `—${randomQuote.author}`;
}

buttonGenerator.addEventListener('click', generateQuote);

// panggil fungsi generateQuote ketika halaman pertama kali dimuat
generateQuote();