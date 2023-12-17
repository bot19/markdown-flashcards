import { QuestionsArr, ReducerState } from "./Types";
import { APP_CONFIG } from "../config";
import { initArrIfEmpty } from "./helpers/initArrIfEmpty";
import { quizSessionsRemaining } from "./helpers/quizSessionsRemaining";
import { ProcessedQsData } from "../Types";

/**
 * update state on quiz load / init
 *
 * note: diff to actually starting the quiz session, it's the next state update
 * some init state values already exist from initialState
 * however values related to Q data need to be hydrated here
 *
 * FIXME: multiple TS issues
 */
export const updateQuizInit = (
  state: ReducerState,
  QuestionsDataArr: ProcessedQsData
): ReducerState => {
  // all question keys array sorting
  const allQsKeys = QuestionsDataArr.map((q) => q.key);
  const allQuestions = APP_CONFIG.shuffleQuestions
    ? [...allQsKeys].sort(() => 0.5 - Math.random())
    : [...allQsKeys].sort();

  const questionsRemaining = initArrIfEmpty(
    state.currentQuiz.questionsRemaining,
    allQuestions
  );
  const sessionQuestions = initArrIfEmpty(
    state.currentSession.sessionQuestions,
    [...questionsRemaining].splice(0, APP_CONFIG.questionsEachSession)
  );
  const sessionsToCompleteQuiz = quizSessionsRemaining(
    questionsRemaining.length
  );

  const newState: ReducerState = {
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
      allQuestions,
      // 2-5: initialise OR re-calc as allQuestions updated
      questionsRemaining,
      // 2-6: update as questionsEachSession & allQuestions # can change
      sessionsToCompleteQuiz,
      // 2-7: update as questionsEachSession & questionsRemaining # can change
      sessionsRemaining: sessionsToCompleteQuiz,
    },
    currentSession: {
      ...state.currentSession,
      // 3-2: init session Qs if need OR localStorage
      sessionQuestions: getSessionQsData(
        sessionQuestions as QuestionsArr,
        QuestionsDataArr
      ),
      // 3-5
      questionsRemaining: initArrIfEmpty(
        state.currentSession.questionsRemaining,
        sessionQuestions as QuestionsArr
      ),
    },
    currrentQuestion: {
      ...state.currrentQuestion,
      // 4-3: 1st Q of current session
      nextQuestionKey: sessionQuestions[0],
    },
  };

  return newState;
};

/**
 * 3-2: transform sessionQuestions from Q name strings to full data obj
 * we need this for quiz session slides
 */
const getSessionQsData = (
  sessionQuestions: QuestionsArr,
  QuestionsDataArr: ProcessedQsData
) => {
  return sessionQuestions.reduce((accumulator, currentValue) => {
    // sessionQuestions is made from QuestionsDataArr ultimately, so will never be undefined
    // using non-null asertion operator (!) so TS will shut up re possible "undefined"
    const qData = QuestionsDataArr.find((qData) => qData.key === currentValue)!;
    accumulator.push(qData);

    return accumulator;
  }, [] as ProcessedQsData);
};
