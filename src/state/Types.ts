export type QuestionsArr = string[];
export type QuestionsDataArr = { name: string; id: string }[];

export type ReducerState = {
  // section 1
  general: {
    // a-start init, 1st = 0 OR localStorage
    // a-end update if quiz completed, +1
    timesQuizCompleted: number; // 1-1
    // updated every init in case config changed
    questionsEachSession: number; // 1-2
    // update on status change, number = current session Q #
    quizStatus: "START" | "END" | number; // 1-3
  };
  // section 2
  currentQuiz: {
    // init = general.timesQuizCompleted + 1
    number: number; // 2-1
    // init get; in case new questions
    allQuestions: QuestionsArr; // 2-2
    // a-start init, 1st = [] OR localStorage
    // update each quiz session & clicked on correct answer
    // only want 1st time correct
    // check against incorrectAnswers arr
    correctAnswers: QuestionsArr; // 2-3
    // a-start init, 1st = [] OR localStorage
    // need to remove duplicates; possible to get Q wrong multiple times
    // update each quiz session & clicked on incorrect answer
    incorrectAnswers: QuestionsArr; // 2-4
    // a-start init, 1st = allQuestions OR localStorage
    // update each quiz session & clicked on correct answer
    // allQuestions less correctAnswers
    questionsRemaining: QuestionsArr; // 2-5
    // number of sessions to cover all questions
    // a-start init: update as questionsEachSession & allQuestions # can change
    sessionsToCompleteQuiz: number; // 2-6
    // uses questionsRemaining as basis for calc
    // a-start init, 1st = calc OR localStorage
    // update each quiz session & clicked on correct answer > recalc
    sessionsRemaining: number; // 2-7
  };
  // section 3
  currentSession: {
    // a-start init, 1st = 1 OR localStorage
    // a-end +1
    number: number; // 3-1
    // a-start init, 1st calc OR localStorage
    // a-end re-calc for next quiz session (new set of Qs)
    sessionQuestions: QuestionsArr; // 3-2
    // a-start init, [] OR localStorage
    // update each quiz session & clicked on correct answer
    correctAnswers: QuestionsArr; // 3-3
    // same as above for incorrect answers
    incorrectAnswers: QuestionsArr; // 3-4
    // a-start init, 1st = sessionQuestions OR localStorage
    // update each quiz session & clicked on answer > recalc
    questionsRemaining: QuestionsArr; // 3-5
  };
  // section 4; usually updated on page/Q change
  currentAnswer: {
    key: string | null; // 4-1
    prevQuestionKey: string | null; // 4-2
    nextQuestionKey: string | null; // 4-3
  };
};

type ActionDefault = {
  type: string;
  value: string;
};

type ActionStartQuizUpdate = {
  type: "UPDATE_QUIZ_INIT";
  value: QuestionsDataArr;
};

export type ReducerAction = ActionStartQuizUpdate | ActionDefault;
