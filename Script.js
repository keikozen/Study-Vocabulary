// Vocabulary dataset
const vocab = [
  {
    word: "Serendipity",
    pronunciation: "/ˌserənˈdipədē/",
    meaning: "The occurrence of events by chance in a happy or beneficial way.",
    sentence: "Through serendipity, she found the perfect book just when she needed it."
  },
  {
    word: "Ephemeral",
    pronunciation: "/ɪˈfɛmərəl/",
    meaning: "Lasting for a very short time.",
    sentence: "Sunset colors are ephemeral, fading almost as soon as they bloom."
  },
  {
    word: "Ubiquitous",
    pronunciation: "/juːˈbɪkwɪtəs/",
    meaning: "Present, appearing, or found everywhere.",
    sentence: "Smartphones have become ubiquitous in modern life."
  },
  {
    word: "Ambivalent",
    pronunciation: "/æmˈbɪvələnt/",
    meaning: "Having mixed feelings or contradictory ideas about something or someone.",
    sentence: "He felt ambivalent about moving—excited but nervous."
  },
  {
    word: "Cacophony",
    pronunciation: "/kəˈkɒfəni/",
    meaning: "A harsh, discordant mixture of sounds.",
    sentence: "The city street was a cacophony of horns and chatter."
  },
  {
    word: "Perspicacious",
    pronunciation: "/ˌpɜːrspɪˈkeɪʃəs/",
    meaning: "Having a ready insight into and understanding of things.",
    sentence: "Her perspicacious questions revealed the issue clearly."
  }
];

// Elements
const card = document.getElementById("card");
const wordEl = document.getElementById("word");
const pronEl = document.getElementById("pronunciation");
const meaningEl = document.getElementById("meaning");
const sentenceEl = document.getElementById("sentence");
const indexEl
