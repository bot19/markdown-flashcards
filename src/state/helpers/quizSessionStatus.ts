import { ReducerState } from "../Types";

/**
 * quizStatus is current Q # or string key for START or END state
 *
 * generally this works, as it is simply quizStatus / questionsEachSession, ie:
 * (current Q #) 3 / 3 (questionsEachSession)
 * therefore, it is correct that next quiz status should be END
 *
 * however if you get some answers incorrect,
 * it is possible to have last session SHORTER than questionsEachSession, ie:
 * 2 wrong questions = 2 Q left, so need new logic:
 * if currentQuiz.sessionsRemaining === 1,
 * compare to currentQuiz.questionsRemaining (#) vs questionsEachSession, as:
 * quizStatus could be 1 / 1 ()
 *
 * @returns quizStatus (number | "END")
 */
export const quizSessionStatus = (state: ReducerState) => {
  // questions (Q) remaining to compare to
  const sessionQuestionNumber =
    state.currentQuiz.sessionsRemaining === 1
      ? state.currentQuiz.questionsRemaining.length
      : state.general.questionsEachSession;

  // Number() to shut up TS
  const newQuestionNumber = Number(state.general.quizStatus) + 1;

  return newQuestionNumber > sessionQuestionNumber ? "END" : newQuestionNumber;
};
