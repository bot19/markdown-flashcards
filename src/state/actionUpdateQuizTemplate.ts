import { ReducerState } from "./Types";
// import { APP_CONFIG } from "../config";

/**
 * update state template
 *
 * ...
 */
export const updateQuizStateTemplate = (state: ReducerState) => {
  const newState: ReducerState = {
    general: {
      ...state.general,
    },
    currentQuiz: {
      ...state.currentQuiz,
    },
    currentSession: {
      ...state.currentSession,
    },
    currrentQuestion: {
      ...state.currrentQuestion,
    },
  };

  return newState;
};
