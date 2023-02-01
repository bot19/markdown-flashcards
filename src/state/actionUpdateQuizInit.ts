import { QuestionsDataArr, ReducerState } from "./Types";

/**
 * update state on quiz load / init
 *
 * note: diff to actually starting the quiz session, it's the next state update
 */
export const updateQuizInit = (
  state: ReducerState,
  QuestionsDataArr: QuestionsDataArr
) => {
  // current quiz update: allQuestions

  // current session update: sessionQuestions

  // current answer update: key, nextQuestionKey, prevQuestionKey

  return { ...state };
};
