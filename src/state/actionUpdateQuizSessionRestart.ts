import { ReducerState } from "./Types";

/**
 * update state on quiz session start
 *
 * stepping into quiz session, Q # 1
 */
export const updateQuizSessionRestart = (state: ReducerState): ReducerState => {
  const newState: ReducerState = {
    general: {
      ...state.general,
      // 1-3: back to quiz start
      quizStatus: "START",
    },
    currentQuiz: {
      ...state.currentQuiz,
    },
    currentSession: {
      ...state.currentSession,
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
