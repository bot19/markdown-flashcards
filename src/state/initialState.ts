import { ReducerState } from "./Types";
import { APP_CONFIG } from "../config";

export const initialState: ReducerState = {
  general: {
    timesQuizCompleted: 0,
    questionsEachSession: APP_CONFIG.questionsEachSession,
    quizStatus: "START",
    restartCmd: null,
  },
  currentQuiz: {
    number: 1,
    allQuestions: [],
    correctAnswers: [],
    incorrectAnswers: [],
    questionsRemaining: [],
    sessionsToCompleteQuiz: 0,
    sessionsRemaining: 0,
  },
  currentSession: {
    number: 1,
    sessionQuestions: [],
    correctAnswers: [],
    incorrectAnswers: [],
    questionsRemaining: [],
  },
  currrentQuestion: {
    key: null,
    prevQuestionKey: null,
    nextQuestionKey: null,
  },
};
