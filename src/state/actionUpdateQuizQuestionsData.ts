import { ReducerState } from "./Types";
import { quizSessionsRemaining } from "./helpers/quizSessionsRemaining";
import { APP_CONFIG } from "../config";
import { getLocalStorage } from "../helpers";
import { KEYS_LOCAL_STORAGE } from "../constants";
import { ProcessedQsData } from "../Types";

/**
 * update state with changed questions data
 */
export const actionUpdateQuizQuestionsData = (
  state: ReducerState
): ReducerState => {
  // all question keys array sorting
  const qsDataArr = getLocalStorage(
    KEYS_LOCAL_STORAGE.ALL_QS_DATA
  ) as ProcessedQsData; // all Qs data should be available
  const allQsKeys = qsDataArr.map((q) => q.key);
  const allQuestions = APP_CONFIG.shuffleQuestions
    ? [...allQsKeys].sort(() => 0.5 - Math.random())
    : [...allQsKeys].sort();

  // any correctAnswer keys not found in all keys to be removed
  // otherwise rogue keys about, bad luck if you've renamed some Qs
  const quizCorrectAnswersArr = [
    ...state.currentQuiz.correctAnswers.filter((correctKey) =>
      allQuestions.find((qKey) => qKey === correctKey)
    ),
  ];

  // same as above
  const quizIncorrectAnswersArr = [
    ...state.currentQuiz.incorrectAnswers.filter((correctKey) =>
      allQuestions.find((qKey) => qKey === correctKey)
    ),
  ];

  // all Qs not in correct/incorrect will be remaining
  const questionsRemaining = [
    ...allQuestions.filter(
      (remainingKey) =>
        ![...quizCorrectAnswersArr, ...quizIncorrectAnswersArr].find(
          (doneKey) => doneKey === remainingKey
        )
    ),
  ];

  // obtain new session questions as Qs updated
  // TODO: think through this fallback logic more carefully, maybe buggy
  const nextSessionQsSource =
    questionsRemaining.length > 0 ? questionsRemaining : allQuestions;
  const sessionQsRemaining = [...nextSessionQsSource].splice(
    0,
    APP_CONFIG.questionsEachSession
  );

  const newState: ReducerState = {
    general: {
      // no change
      ...state.general,
    },
    currentQuiz: {
      ...state.currentQuiz,
      // 2-2: get updated Qs
      allQuestions,
      // 2-3: Qs updated, this needs to be updated too, notes above
      correctAnswers: quizCorrectAnswersArr,
      // 2-4: Qs updated, this needs to be updated too, notes above
      incorrectAnswers: quizIncorrectAnswersArr,
      // 2-5: Qs updated, this needs to be updated too, notes above
      questionsRemaining,
      // 2-6: number of sessions to cover all updated Qs
      sessionsToCompleteQuiz: quizSessionsRemaining(allQuestions.length),
      // 2-7: number of sessions to finish quiz from updated Qs
      sessionsRemaining: quizSessionsRemaining(questionsRemaining.length),
    },
    currentSession: {
      ...state.currentSession,
      // 3-2: get new Qs data
      // FIXME: TS
      sessionQuestions: sessionQsRemaining.map((qKey) =>
        qsDataArr.find((qData) => qKey === qData.key)
      ),
      // 3-5: get new set of session Qs as all Qs updated
      questionsRemaining: sessionQsRemaining,
    },
    currrentQuestion: {
      ...state.currrentQuestion,
      // 4-3: 1st Q of current session
      nextQuestionKey: sessionQsRemaining[0],
    },
  };

  return newState;
};
