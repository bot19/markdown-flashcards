import { ReducerState } from "./Types";
import { quizSessionsRemaining } from "./helpers/quizSessionsRemaining";
import { quizSessionStatus } from "./helpers/quizSessionStatus";
import { getNextQsKey } from "./helpers/getNextQsKey";

/**
 * update state on quiz session question correct
 *
 * could lead to another question or quiz session end
 */
export const updateAnswerRight = (
  state: ReducerState,
  questionKey: string
): ReducerState => {
  // see logic [2]
  const quizQsRemaining = [...state.currentQuiz.questionsRemaining].filter(
    (qKey) => qKey !== questionKey
  );
  const sessionQsRemaining = [
    ...state.currentSession.questionsRemaining,
  ].filter((qKey) => qKey !== questionKey);

  // see logic [1]
  const correctAnswersOnly = [...state.currentQuiz.incorrectAnswers].reduce(
    (correctAnswersArr, incorrectAnswer) =>
      correctAnswersArr.filter(
        (correctAnswer) => correctAnswer !== incorrectAnswer
      ),
    [...state.currentQuiz.correctAnswers, questionKey]
  );

  const newState: ReducerState = {
    general: {
      ...state.general,
      // 1-3: update on status change; next Q or end
      quizStatus: quizSessionStatus(state),
    },
    currentQuiz: {
      ...state.currentQuiz,
      // 2-3: once correct, wont encounter Q again until next quiz
      // incorrect Qs need to redo until correct, but can't be considered so
      correctAnswers: correctAnswersOnly,
      // 2-5: allQuestions less correctAnswers
      questionsRemaining: quizQsRemaining,
      // 2-7: update as questionsEachSession & questionsRemaining # can change
      sessionsRemaining: quizSessionsRemaining(quizQsRemaining.length),
    },
    currentSession: {
      ...state.currentSession,
      // 3-3: got session Q correct
      correctAnswers: [...state.currentSession.correctAnswers, questionKey],
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
 * [1] correctAnswersOnly
 * initial state is correctAnswersOnly array and new correct question (Q)
 * basically ensures correct Q only added if correct 1st time
 * meaning you actually got it right, vs learning & getting it right
 *
 * it does this by checking it againt every Q in quiz incorrectAnswers
 * obviously if your Q is in there, it means it's not correct 1st time
 * otherwise add it
 *
 * when you get a Q correct 1st time, it is removed from quizQsRemaining
 * since every Q correct won't need to be studied again
 *
 * check logic by devTools console with arrays; confirmed correct:
 * quiz incorrectAnswers: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
 * correctAnswersArr init: ['h', 'i', 'j', 'k', 'current-question']
 *
 * [2] quizQsRemaining
 * this array starts off with all questions
 * you just got question correct so remove it from remaining questions
 */
