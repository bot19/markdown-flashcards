import { ReducerState } from "./Types";

/**
 * update state on quiz session start
 *
 * stepping into quiz session, Q # 1
 */
export const updateQuizSessionStart = (state: ReducerState): ReducerState => {
  const sessionQs = state.currentSession.sessionQuestions;

  const newState = {
    general: {
      ...state.general,
      // 1-3: update on status change, up to session Q # 1
      quizStatus: 1,
    },
    currentQuiz: {
      ...state.currentQuiz,
    },
    currentSession: {
      ...state.currentSession,
    },
    currrentQuestion: {
      // 4-1: next Q is now current as we move forward in state
      key: sessionQs[0].key,
      // 4-2: prev page was quiz start, so null
      prevQuestionKey: null,
      // 4-3: next Q in session
      nextQuestionKey: sessionQs[1].key,
    },
  };

  return newState;
};
