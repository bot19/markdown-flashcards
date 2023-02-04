import { QuestionsArr, QuestionsDataArr, ReducerState } from "./Types";
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
  const allQuestions = QuestionsDataArr.map((q) => q.name);

  const newState = {
    general: {
      ...state.general,
      // 1-2: updated every init in case config changed
      questionsEachSession: APP_CONFIG.questionsEachSession,
    },
    currentQuiz: {
      ...state.currentQuiz,
      // 2-1: could have restart from quiz completion, ensure quiz # correct
      number: state.general.timesQuizCompleted + 1,
      // 2-2: update Qs incase new Qs added
      // TODO: shuffle Qs in future
      allQuestions,
      // 2-5: initialise OR re-calc as allQuestions updated
      // TODO: re-calc to ensure new Qs added
      questionsRemaining: updateQsRemaining(
        allQuestions,
        state.currentQuiz.questionsRemaining
      ),
      // 2-6
      // 2-7
    },
    currentSession: {
      ...state.currentSession,
    },
    currentAnswer: {
      ...state.currentAnswer,
    },
  };

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

/**
 * 2-5: update questionsRemaining, ensure new Qs added
 * empty arr = 1st OR current quiz done = allQuestions
 * items in arr = quiz in progress = add new Qs
 */
const updateQsRemaining = (
  allQuestions: QuestionsArr,
  qsRemaining: QuestionsArr
) => {
  if (!qsRemaining.length) return [...allQuestions];

  // TODO: add new questions to existing qsRemaining arr
  return [...allQuestions];
};
