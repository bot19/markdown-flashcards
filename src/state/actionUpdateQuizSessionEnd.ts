import { ReducerState } from "./Types";
import { APP_CONFIG } from "../config";

/**
 * update state on quiz session end
 *
 * stepping out of quiz session
 */
export const updateQuizSessionEnd = (state: ReducerState): ReducerState => {
  const isQuizDone = state.currentQuiz.questionsRemaining.length === 0;
  // state.currentQuiz.questionsRemaining could be [], is new quiz!
  const nextSessionQsSource = isQuizDone
    ? state.currentQuiz.allQuestions
    : state.currentQuiz.questionsRemaining;

  const newState = {
    general: {
      ...state.general,
      // 1-1: is quiz completed? +1 this number (not quiz session)
      timesQuizCompleted: isQuizDone
        ? state.general.timesQuizCompleted + 1
        : state.general.timesQuizCompleted,
    },
    currentQuiz: {
      ...state.currentQuiz,
      // 2-1: quiz completed? Yes: +1 this number for next quiz
      number: isQuizDone
        ? state.currentQuiz.number + 1
        : state.currentQuiz.number,
    },
    currentSession: {
      ...state.currentSession,
      // 3-1: session just completed, +1
      number: state.currentSession.number + 1,
      // 3-2: a-end re-calc for next quiz session (new set of Qs)
      // TODO: need questions .md gql data somehow to re-populate this from 3-5
      sessionQuestions: state.currentSession.sessionQuestions,
      // 3-5: a-end re-calc for next quiz session (new set of Qs)
      questionsRemaining: [...nextSessionQsSource].splice(
        0,
        APP_CONFIG.questionsEachSession
      ),
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
