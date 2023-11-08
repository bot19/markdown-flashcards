import { ReducerState } from "./Types";
import { quizSessionsRemaining } from "./helpers/quizSessionsRemaining";
import { APP_CONFIG } from "../config";
import { getLocalStorage } from "../helpers";
import { KEYS_LOCAL_STORAGE } from "../constants";
import { ProcessedQsData } from "../Types";

/**
 * update state on quiz session start
 *
 * stepping into quiz session, Q # 1
 */
export const updateQuizSessionRestart = (state: ReducerState): ReducerState => {
  const quizReset = state.general.restartCmd === "RESET QUIZ";

  // state.currentQuiz.questionsRemaining could be [], is new quiz!
  const nextSessionQsSource = quizReset
    ? state.currentQuiz.allQuestions
    : state.currentQuiz.questionsRemaining;
  const questionsRemaining = [...nextSessionQsSource].splice(
    0,
    APP_CONFIG.questionsEachSession
  );
  // get all Qs data to get next sessionQuestions (3-2)
  // FIXME: TS
  const allQsData: ProcessedQsData = getLocalStorage(
    KEYS_LOCAL_STORAGE.ALL_QS_DATA
  );
  const sessionQuestions = allQsData
    ? questionsRemaining.map((question) =>
        allQsData.find((qData) => question === qData.key)
      )
    : state.currentSession.sessionQuestions;

  const newState: ReducerState = {
    general: {
      ...state.general,
      // 1-1: is quiz completed? +1 this number (not quiz session)
      timesQuizCompleted: quizReset
        ? state.general.timesQuizCompleted + 1
        : state.general.timesQuizCompleted,
      // 1-3: back to quiz start
      quizStatus: "START",
      // 1-4: reset
      restartCmd: null,
    },
    currentQuiz: {
      ...state.currentQuiz,
      // 2-1: quiz completed? Yes: +1 this number for next quiz
      number: quizReset
        ? state.currentQuiz.number + 1
        : state.currentQuiz.number,
      // 2-3: if new quiz, reset
      correctAnswers: quizReset ? [] : state.currentQuiz.correctAnswers,
      // 2-4: if new quiz, reset
      incorrectAnswers: quizReset ? [] : state.currentQuiz.incorrectAnswers,
      // 2-5: if new quiz, reset
      questionsRemaining: quizReset
        ? state.currentQuiz.allQuestions
        : state.currentQuiz.questionsRemaining,
      // 2-7: if new quiz, reset
      sessionsRemaining: quizReset
        ? quizSessionsRemaining(state.currentQuiz.allQuestions.length)
        : state.currentQuiz.sessionsRemaining,
    },
    currentSession: {
      ...state.currentSession,
      // 3-1: if new quiz, reset, or session just completed, +1
      number: quizReset ? 1 : state.currentSession.number + 1,
      // 3-2: a-end re-calc for next quiz session (new set of Qs)
      sessionQuestions,
      // 3-3: a-start to reset to [], a-end to keep for stats
      correctAnswers: [],
      // 3-4: same as above for incorrect answers
      incorrectAnswers: [],
      // 3-5: a-end re-calc for next quiz session (new set of Qs)
      questionsRemaining,
    },
    currrentQuestion: {
      // 4-1: as we are at quiz start
      key: null,
      // 4-2
      prevQuestionKey: null,
      // 4-3: 1st Q of current session
      nextQuestionKey: questionsRemaining[0],
    },
  };

  return newState;
};
