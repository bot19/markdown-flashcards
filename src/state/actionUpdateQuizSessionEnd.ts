import { ReducerState } from "./Types";

/**
 * update state on quiz session end
 *
 * stepping out of quiz session
 * this state is partially set already before this going from last Q to here
 */
export const updateQuizSessionEnd = (state: ReducerState): ReducerState => {
  const isQuizDone = state.currentQuiz.questionsRemaining.length === 0;

  const newState: ReducerState = {
    general: {
      ...state.general,
      // 1-4: reset quiz if current quiz done
      restartCmd: isQuizDone ? "RESET QUIZ" : null,
    },
    currentQuiz: {
      ...state.currentQuiz,
    },
    currentSession: {
      ...state.currentSession,
      // 3-1: session just completed, +1 TODO: MOVE
      number: state.currentSession.number + 1,
    },
    currrentQuestion: {
      // already set going from last Q to END (quiz)
      ...state.currrentQuestion,
    },
  };

  return newState;
};
