import { ReducerState } from "./Types";
import { quizSessionsRemaining } from "./helpers/quizSessionsRemaining";

/**
 * update state on quiz session start
 *
 * stepping into quiz session, Q # 1
 */
export const updateQuizSessionRestart = (state: ReducerState): ReducerState => {
  const quizReset = state.general.restartCmd === "RESET QUIZ";

  const newState: ReducerState = {
    general: {
      ...state.general,
      // 1-3: back to quiz start
      quizStatus: "START",
      // 1-4: reset
      restartCmd: null,
    },
    currentQuiz: {
      ...state.currentQuiz,
      // 2-3: if new quiz, reset
      correctAnswers: quizReset ? [] : state.currentQuiz.correctAnswers,
      // 2-4: if new quiz, reset
      incorrectAnswers: quizReset ? [] : state.currentQuiz.incorrectAnswers,
      // 2-5: if new quiz, reset
      questionsRemaining: quizReset
        ? state.currentQuiz.allQuestions
        : state.currentQuiz.questionsRemaining,
      // 2-7: if new quiz, reset
      sessionsRemaining: quizReset
        ? quizSessionsRemaining(state.currentQuiz.allQuestions.length)
        : state.currentQuiz.sessionsRemaining,
    },
    currentSession: {
      ...state.currentSession,
      // 3-1: if new quiz, reset
      number: quizReset ? 1 : state.currentSession.number,
      // 3-3: a-start to reset to [], a-end to keep for stats
      correctAnswers: [],
      // 3-4: same as above for incorrect answers
      incorrectAnswers: [],
    },
    currrentQuestion: {
      // 4-1: as we are at quiz start
      key: null,
      // 4-2
      prevQuestionKey: null,
      // 4-3: 1st Q of current session
      nextQuestionKey: state.currentSession.questionsRemaining[0],
    },
  };

  return newState;
};
