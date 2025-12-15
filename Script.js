// Flip flashcard on click
const flashcard = document.getElementById("flashcard");
flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});

// Quiz option logic
const options = document.querySelectorAll(".quiz-option");
options.forEach(option => {
  option.addEventListener("click", () => {
    if (option.textContent.includes("lucky discovery")) {
      option.classList.add("correct");
    } else {
      option.classList.add("wrong");
    }
  });
});
