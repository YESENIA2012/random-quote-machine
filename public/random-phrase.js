const arrayQuotes = [
  {
    quote:
      "Life is not about getting and having, it is about giving and being.",
    author: "Kevin Kruse",
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    autor: "Napoleon Hill",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost",
  },
  {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale",
  },
  {
    quote: "You miss 100% of the shots you do not take.",
    author: "Wayne Gretzky",
  },
  {
    quote:
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
  },
  {
    quote: "Every strike brings me closer to the next home run.",
    author: "Babe Ruth",
  },
  {
    quote: "Definiteness of purpose is the starting point of all achievement.",
    author: "W. Clement Stone",
  },
  {
    quote: "We must balance conspicuous consumption with conscious capitalism.",
    author: "Kevin Kruse",
  },
];

var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

function paintQuote() {
  let randomIndex = Math.floor(
    Math.random() * (arrayQuotes.length - 1 - 0 + 1) + 0
  );
  if (arrayQuotes[randomIndex]) {
    const text = document.querySelector("#text");
    const authorCita = document.querySelector("#author");

    text.innerHTML = arrayQuotes[randomIndex].quote;
    authorCita.innerHTML = arrayQuotes[randomIndex].author;
  }
}

function paintColor() {
  let random = Math.floor(Math.random() * (colors.length - 1 - 0) + 0);
}
