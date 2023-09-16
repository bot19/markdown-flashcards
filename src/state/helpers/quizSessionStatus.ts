import { ReducerState } from "../Types";

/**
 * quizStatus is current Q # or string key for START or END state
 *
 * @returns quizStatus (number | "END")
 */
export const quizSessionStatus = (state: ReducerState) => {
  // questions (Q) remaining to compare to
  const sessionQuestionNumber = state.currentSession.sessionQuestions.length;

  // Number() to shut up TS
  const newQuestionNumber = Number(state.general.quizStatus) + 1;

  return newQuestionNumber > sessionQuestionNumber ? "END" : newQuestionNumber;
};
