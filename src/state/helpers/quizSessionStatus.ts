import { ReducerState } from "../Types";

/**
 * only accessible during quiz session, so quizStatus will be a number
 *
 * @returns quizStatus (number | "END")
 */
export const quizSessionStatus = (state: ReducerState) => {
  // Number() to shut up TS
  const newQuestionNumber = Number(state.general.quizStatus) + 1;

  return newQuestionNumber > state.general.questionsEachSession
    ? "END"
    : newQuestionNumber;
};
