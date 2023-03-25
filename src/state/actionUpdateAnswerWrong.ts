import { ReducerState } from "./Types";
import { quizSessionsRemaining } from "../helpers";

/**
 * TODO: only copy pasta, need to fix it up
 * update state on quiz session question correct
 *
 * could lead to another question or quiz session end
 */
export const updateAnswerWrong = (state: ReducerState, questionKey: string) => {
  const sessionQs = state.currentSession.sessionQuestions;
  // only accessible during quiz session, so quizStatus will be a number
  // Number() to shut up TS
  const newQuestionNumber = Number(state.general.quizStatus) + 1;
  const quizStatus =
    newQuestionNumber > state.general.questionsEachSession
      ? "END"
      : newQuestionNumber;
  const quizQsRemaining = [...state.currentQuiz.questionsRemaining].filter(
    (qKey) => qKey !== questionKey
  );
  const sessionQsRemaining = [
    ...state.currentSession.questionsRemaining,
  ].filter((qKey) => qKey !== questionKey);

  const newState = {
    general: {
      ...state.general,
      // 1-3: update on status change; next Q or end
      quizStatus,
    },
    currentQuiz: {
      ...state.currentQuiz,
      // 2-3: once correct, wont encounter Q again until next quiz
      correctAnswers: [...state.currentQuiz.correctAnswers, questionKey],
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
 * TODO: export this as helper
 * help get the next question's key & handle circumstances if no next question
 *
 * @param sessionQsRemaining question keys in an array
 * as you progress through the session quiz, this array shrinks by the 1 Q you progress
 * so the current Q is array index 0, and next always array index 1
 *
 * when you get to the last question, array.length is only 1
 * there isn't a next question, it will be the end view, so null is appropriate
 *
 * @returns string (Q key) or null
 */
const getNextQsKey = (sessionQsRemaining: string[]) => {
  if (sessionQsRemaining.length > 1) return sessionQsRemaining[1];

  return null;
};
