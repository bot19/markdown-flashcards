import { QuestionsArr, QuestionsDataArr, ReducerState } from "./Types";
import { APP_CONFIG } from "../config";

/**
 * update state template
 *
 * ...
 */
export const updateQuizStateTemplate = (state: ReducerState) => {
  const newState = {
    general: {
      ...state.general,
    },
    currentQuiz: {
      ...state.currentQuiz,
    },
    currentSession: {
      ...state.currentSession,
    },
    currentAnswer: {
      ...state.currentAnswer,
    },
  };

  return newState;
};
