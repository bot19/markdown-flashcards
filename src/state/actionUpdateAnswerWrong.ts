import { ReducerState } from "./Types";
import { quizSessionStatus } from "./helpers/quizSessionStatus";
import { getNextQsKey } from "./helpers/getNextQsKey";

/**
 * update state on quiz session question correct
 *
 * could lead to another question or quiz session end
 */
export const updateAnswerWrong = (
  state: ReducerState,
  questionKey: string
): ReducerState => {
  const sessionQsRemaining = [
    ...state.currentSession.questionsRemaining,
  ].filter((qKey) => qKey !== questionKey);

  const newState: ReducerState = {
    general: {
      ...state.general,
      // 1-3: update on status change; next Q or end
      quizStatus: quizSessionStatus(state),
    },
    currentQuiz: {
      ...state.currentQuiz,
      // 2-4: keep track of all wrong answers, remove duplicates; see [1]
      incorrectAnswers: [
        ...new Set([...state.currentQuiz.incorrectAnswers, questionKey]),
      ],
    },
    currentSession: {
      ...state.currentSession,
      // 3-4: got session Q incorrect
      incorrectAnswers: [...state.currentSession.incorrectAnswers, questionKey],
      // 3-5: update each quiz session & clicked on answer > recalc
      questionsRemaining: sessionQsRemaining,
    },
    currrentQuestion: {
      ...state.currrentQuestion,
      // 4-1: next Q is now current as we move forward in state
      key: state.currrentQuestion.nextQuestionKey,
      // 4-2: prev state's current key is now prev key
      prevQuestionKey: state.currrentQuestion.key,
      // 4-3: next Q in session
      nextQuestionKey: getNextQsKey(sessionQsRemaining),
    },
  };

  return newState;
};

/**
 * [1] logic; quiz incorrectAnswers vs quizQsRemaining
 * when you get answer wrong, add to incorrectAnswers list
 * however "unique" it as only care if wrong 1st time (= incorrect in quiz)
 *
 * on incorrect, the question gets repeated; don't remove from quizQsRemaining
 */
