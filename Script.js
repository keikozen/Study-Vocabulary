// Vocabulary dataset (3 items to test navigation)
const vocab = [
  {
    word: "Serendipity",
    pronunciation: "/ˌserənˈdipədē/",
    meaning: "The occurrence of events by chance in a happy or beneficial way.",
    sentence: "Through serendipity, she found the perfect book just when she needed it.",
    quiz: {
      question: "What does 'Serendipity' mean?",
      options: [
        "A lucky discovery by chance",
        "A loud, harsh sound",
        "Something that lasts a short time",
        "Being present everywhere"
      ],
      correct: 0
    }
  },
  {
    word: "Ephemeral",
    pronunciation: "/ɪˈfɛmərəl/",
    meaning: "Lasting for a very short time.",
    sentence: "Sunset colors are ephemeral, fading almost as soon as they bloom.",
    quiz: {
      question: "Which word means 'lasting for a short time'?",
      options: [
        "Ephemeral",
        "Ubiquitous",
        "Ambivalent",
        "Cacophony"
      ],
      correct: 0
    }
  },
  {
    word: "Ubiquitous",
    pronunciation: "/juːˈbɪkwɪtəs/",
    meaning: "Present, appearing, or found everywhere.",
    sentence: "Smartphones have become ubiquitous in modern life.",
    quiz: {
      question: "What does 'Ubiquitous' mean?",
      options: [
        "Rare and unusual",
        "Present everywhere",
        "Short-lived",
        "Lucky discovery"
      ],
      correct: 1
    }
  }
];

let index = 0;

// Elements
const flashcard = document.getElementById("flashcard");
const frontEl = document.getElementById("front");
const backEl = document.getElementById("back");
const prevZone = document.getElementById("prevZone");
const nextZone = document.getElementById("nextZone");
const quizQ = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");

// Render card and quiz from dataset
function render(i) {
  const item = vocab[i];

  frontEl.textContent = item.word;
  backEl.innerHTML = `
    <p><strong>Pronunciation:</strong> ${item.pronunciation}</p>
    <p><strong>Meaning:</strong> ${item.meaning}</p>
    <p><strong>Sentence:</strong> ${item.sentence}</p>
  `;

  quizQ.textContent = item.quiz.question;
  quizOptions.innerHTML = "";
  item.quiz.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "quiz-option";
    btn.addEventListener("click", () => {
      if (idx === item.quiz.correct) {
        btn.classList.add("correct");
      } else {
        btn.classList.add("wrong");
      }
    });
    quizOptions.appendChild(btn);
  });
}

// Flip card on click or Enter/Space
flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});
flashcard.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    flashcard.classList.toggle("flipped");
  }
});

// Navigation via invisible side zones (beside the card)
prevZone.addEventListener("click", (e) => {
  e.stopPropagation();
  index = (index - 1 + vocab.length) % vocab.length;
  flashcard.classList.remove("flipped"); // show front when changing
  render(index);
});
nextZone.addEventListener("click", (e) => {
  e.stopPropagation();
  index = (index + 1) % vocab.length;
  flashcard.classList.remove("flipped");
  render(index);
});

// Optional: keyboard navigation (Left/Right arrows)
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    index = (index - 1 + vocab.length) % vocab.length;
    flashcard.classList.remove("flipped");
    render(index);
  } else if (e.key === "ArrowRight") {
    index = (index + 1) % vocab.length;
    flashcard.classList.remove("flipped");
    render(index);
  }
});

// Initial render
render(index);
