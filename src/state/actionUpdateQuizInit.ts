import { QuestionsArr, QuestionsDataArr, ReducerState } from "./Types";
import { APP_CONFIG } from "../config";
import { initArrIfEmpty } from "../helpers";

/**
 * update state on quiz load / init
 *
 * note: diff to actually starting the quiz session, it's the next state update
 * some init state values already exist from initialState
 * however values related to Q data need to be hydrated here
 */
export const updateQuizInit = (
  state: ReducerState,
  QuestionsDataArr: QuestionsDataArr
) => {
  const allQuestions = QuestionsDataArr.map((q) => q.name);
  const questionsRemaining = updateQsRemaining(
    allQuestions,
    state.currentQuiz.questionsRemaining
  );
  const sessionQuestions = initArrIfEmpty(
    state.currentSession.sessionQuestions,
    [...allQuestions].splice(0, APP_CONFIG.questionsEachSession)
  );

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
      questionsRemaining,
      // 2-6: update as questionsEachSession & allQuestions # can change
      sessionsToCompleteQuiz: Math.ceil(
        allQuestions.length / APP_CONFIG.questionsEachSession
      ),
      // 2-7: update as questionsEachSession & questionsRemaining # can change
      sessionsRemaining: Math.ceil(
        questionsRemaining.length / APP_CONFIG.questionsEachSession
      ),
    },
    currentSession: {
      ...state.currentSession,
      // 3-2: init session Qs if need OR localStorage
      sessionQuestions,
      // 3-5
      // TODO: exception, could be on last Q & reload, this will be []
      questionsRemaining: initArrIfEmpty(
        state.currentSession.questionsRemaining,
        sessionQuestions
      ),
    },
    currentAnswer: {
      ...state.currentAnswer,
      // 4-3: 1st Q of current session
      nextQuestionKey: sessionQuestions[0],
    },
  };

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
