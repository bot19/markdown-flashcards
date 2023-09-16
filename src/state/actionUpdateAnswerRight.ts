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
  const quizQsRemaining = [...state.currentQuiz.questionsRemaining].filter(
    (qKey) => qKey !== questionKey
  );
  const sessionQsRemaining = [
    ...state.currentSession.questionsRemaining,
  ].filter((qKey) => qKey !== questionKey);

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
