const vocab = [
  {
    word: "Ubiquitous",
    pronunciation: "/juːˈbɪkwɪtəs/",
    meaning: "Present or found everywhere",
    sentence: "Smartphones have become ubiquitous in modern life."
  },
  {
    word: "Pragmatic",
    pronunciation: "/præɡˈmætɪk/",
    meaning: "Dealing with things sensibly and realistically",
    sentence: "She took a pragmatic approach to problem-solving."
  },
  {
    word: "Eloquent",
    pronunciation: "/ˈɛləkwənt/",
    meaning: "Fluent or persuasive in speaking or writing",
    sentence: "His eloquent speech impressed the audience."
  }
];

let currentIndex = 0;
const card = document.getElementById("flashcard");

const wordEl = document.getElementById("word");
const pronEl = document.getElementById("pronunciation");
const meanEl = document.getElementById("meaning");
const sentEl = document.getElementById("sentence");

function renderCard() {
  card.classList.remove("flipped");

  const v = vocab[currentIndex];
  wordEl.textContent = v.word;
  pronEl.textContent = v.pronunciation;
  meanEl.textContent = v.meaning;
  sentEl.textContent = v.sentence;
}

renderCard();

/* Flip card */
card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

/* Navigation zones */
document.querySelector(".left-zone").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderCard();
  }
});

document.querySelector(".right-zone").addEventListener("click", () => {
  if (currentIndex < vocab.length - 1) {
    currentIndex++;
    renderCard();
  }
});
