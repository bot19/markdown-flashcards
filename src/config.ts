export const APP_CONFIG = {
  questionsEachSession: 5,
  shuffleQuestions: true, // on false, will sort in alphabetical order
  quizInfo: {
    name: "I R spek Engrish",
    description:
      "Mastering English words that elude me so I don't feel like I have imposter syndrome as a native speaker.",
    author: "bot19",
    year: "2024",
    link: "https://github.com/bot19/markdown-flashcards",
    linkText: "Github",
    version: "1.5.3", // see [1] for odd logic
    build: 3, // increment on data change, verify data deployed
  },
};

/**
 * [1] logic
 * not using proper logic
 * each code change I will increment the patch number
 * major/minor number change occurs when deemed enough updates added
 *
 * so 1.5.0 might not look very different to 1.0.0, or 1.5.50 vs 2.0.0
 * odd yes, but doing it for branching purposes - keep major/minor branch
 */
