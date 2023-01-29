// Set up arrays to hold 3 quotes for each webpage
const templeQuotes = [
  "“The mind is a temple of knowledge, the heart is a temple of understanding, and the soul is a temple of wisdom; together they are a temple of enlightenment.” ― Matshona Dhliwayo",
  "“The most beautiful temple in the universe is your soul; that is why God wants to dwell in it.” ― Matshona Dhliwayo",
  "“No temple is a better temple than nature; no heaven is a better heaven than nature; no dream is a better dream than nature!” ― Mehmet Murat ildan",
];
const meditateQuotes = [
  "“Quiet the mind and the soul will speak.” - Ma Jaya Sati Bhagavati",
  "“Meditation is not about stopping thoughts, but recognizing that we are more than our thoughts and our feelings.” — Arianna Huffington",
  "“Learn to be calm and you will always be happy” - Paramahansa Yogananda",
];
const nutritionQuotes = [
  '"The first wealth is health. " - Emerson.',
  '"Our food should be our medicine, and our medicine should be our food. " - Hippocrates.',
  '"Diet is the essential key to all successful healing. Without a properly balanced diet, the effectiveness of herbal treatment is very limited." - Michael Tierra',
];
const educationQuotes = [
  '"An investment in knowledge pays the best interest." - Benjamin Franklin',
  "“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” - Malcolm X",
  "“Live as if you were to die tomorrow. Learn as if you were to live forever.” ― Mahatma Gandhi",
];
const exerciseQuotes = [
  "“If you don't make time for exercise, you'll probably have to make time for illness.\" - Robin Sharma\"",
  "“All progress takes place outside the comfort zone.” - Michael John Bobak",
  "“I don't count my sit-ups. I only start counting when it starts hurting because they're the only ones that count.” - Muhammad Ali",
];
const journalQuotes = [
  "“Journal writing, when it becomes a ritual for transformation, is not only life-changing but life-expanding.” - Jen Williamson",
  "“Fill your paper with the breathings of your heart.” - William Wordsworth",
  "“A journal is your completely unaltered voice.” - Lucy Dacus",
];
// Create a random number every time the page is loaded.
let randomNum = Math.floor(Math.random() * 3);

// Get the id attribute of the paragraph that will hold the quote to determine the current page
let quoteAttribute = document.querySelector(".random").getAttribute("id");
console.log(quoteAttribute);

// Set up a switch for each html template's behavior
switch (quoteAttribute) {
  case "templeQuote":
    // Add random quote to page
    let templeQuote = templeQuotes[randomNum];
    document.getElementById("templeQuote").innerHTML = templeQuote;
    break;
  case "meditateQuote":
    // Add random quote to page
    let meditateQuote = meditateQuotes[randomNum];
    document.getElementById("meditateQuote").innerHTML = meditateQuote;

    // Add event listeners to timer buttons
    const minButton1 = document.querySelector("#btn-1min");
    minButton1.addEventListener("click", (event) => {
      console.log(event);
    });
    const minButton5 = document.querySelector("#btn-5min");
    minButton5.addEventListener("click", (event) => {
      console.log(event);
    });
    const minButton10 = document.querySelector("#btn-10min");
    minButton10.addEventListener("click", (event) => {
      console.log(event);
    });

    break;
  case "nutritionQuote":
    // Add random quote to page
    let nutritionQuote = nutritionQuotes[randomNum];
    document.getElementById("nutritionQuote").innerHTML = nutritionQuote;
    break;
  case "educationQuote":
    // Add random quote to page
    let educationQuote = educationQuotes[randomNum];
    document.getElementById("educationQuote").innerHTML = educationQuote;
    break;
  case "exerciseQuote":
    // Add random quote to page
    let exerciseQuote = exerciseQuotes[randomNum];
    document.getElementById("exerciseQuote").innerHTML = exerciseQuote;
    break;
  case "journalQuote":
    // Add random quote to page
    let journalQuote = journalQuotes[randomNum];
    document.getElementById("journalQuote").innerHTML = journalQuote;
    break;
}
