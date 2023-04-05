import { ReducerState } from "./Types";

/**
 * update state on quiz session end
 *
 * stepping out of quiz session
 */
export const updateQuizSessionEnd = (state: ReducerState): ReducerState => {
  const sessionQs = state.currentSession.sessionQuestions;

  const newState = {
    general: {
      ...state.general,
      // 1-1: TODO: is quiz completed? +1 this number (not quiz session)
      timesQuizCompleted: state.general.timesQuizCompleted,
    },
    currentQuiz: {
      ...state.currentQuiz,
      // a-end, general.timesQuizCompleted + 1 if quiz completed
      number: "number", // 2-1 TODO:
    },
    currentSession: {
      ...state.currentSession,
      // a-start init, 1st = 1 OR localStorage
      // a-end +1
      number: "Number", // 3-1 TODO:
      // a-start init, 1st calc OR localStorage
      // a-end re-calc for next quiz session (new set of Qs)
      sessionQuestions: "QuestionsDataArr", // 3-2 TODO:
    },
    currrentQuestion: {
      // 4-1: next Q is now current as we move forward in state
      key: null,
      // 4-2: prev page was quiz start, so null
      prevQuestionKey: state.currrentQuestion.key,
      // 4-3: next Q in session
      nextQuestionKey: null,
    },
  };

  return newState;
};
