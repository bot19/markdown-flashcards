import { APP_CONFIG } from "../config";

// work out number of quiz sessions left to go through all remaining questions
export const quizSessionsRemaining = (allQsRemaining: number) =>
  Math.ceil(allQsRemaining / APP_CONFIG.questionsEachSession);
