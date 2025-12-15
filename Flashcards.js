// Vocabulary dataset
const vocab = [
  {
    word: "Serendipity",
    pronunciation: "/ˌserənˈdipədē/",
    meaning: "The occurrence of events by chance in a happy or beneficial way.",
    sentence: "Through serendipity, she found the perfect book just when she needed it.",
    }
  },
  {
    word: "Ephemeral",
    pronunciation: "/ɪˈfɛmərəl/",
    meaning: "Lasting for a very short time.",
    sentence: "Sunset colors are ephemeral, fading almost as soon as they bloom.",
    }
  },
  {
    word: "Ubiquitous",
    pronunciation: "/juːˈbɪkwɪtəs/",
    meaning: "Present, appearing, or found everywhere.",
    sentence: "Smartphones have become ubiquitous in modern life.",
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

// Render card + quiz
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

// Flip card
// Flip card
flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});

// Navigation zones
prevZone.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent triggering flip
  index = (index - 1 + vocab.length) % vocab.length;
  flashcard.classList.remove("flipped");
  render(index);
});

nextZone.addEventListener("click", (e) => {
  e.stopPropagation();
  index = (index + 1) % vocab.length;
  flashcard.classList.remove("flipped");
  render(index);
});
