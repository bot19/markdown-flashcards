import { QuestionsDataArr, ReducerState } from "./Types";
import { APP_CONFIG } from "../config";

/**
 * update state on quiz load / init
 *
 * note: diff to actually starting the quiz session, it's the next state update
 */
export const updateQuizInit = (
  state: ReducerState,
  QuestionsDataArr: QuestionsDataArr
) => {
  const newState = { ...state };

  // TODO: shuffle questions in future
  // current quiz update: allQuestions; the basis of almost all state
  newState.currentQuiz.allQuestions = QuestionsDataArr.map((q) => q.name);

  // current session update: sessionQuestions; setup session data/Qs
  newState.currentSession.sessionQuestions = [
    ...newState.currentQuiz.allQuestions,
  ].splice(0, APP_CONFIG.questionsEachSession);

  // current answer update: key, nextQuestionKey, prevQuestionKey; Q nav
  newState.currentAnswer.nextQuestionKey =
    newState.currentSession.sessionQuestions[0];

  // set current quiz #
  newState.currentQuiz.number = newState.general.timesQuizCompleted + 1;

  return newState;
};
