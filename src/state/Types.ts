type QuestionsArr = string[];
export type QuestionsDataArr = { name: string; id: string }[];

export type ReducerState = {
  // updated on quiz completion & quiz init (respectively)
  general: {
    // p-start init, 1st = 0 OR localStorage
    // p-end if quiz completed, +1
    timesQuizCompleted: number;
    questionsEachSession: number; // updated every init in case config changed
    quizStatus: "START" | "END" | number; // number = current session Q #
  };
  // updated on quiz init, start, end & session start/end
  currentQuiz: {
    number: number; // init = general.timesQuizCompleted + 1
    allQuestions: QuestionsArr; // init get; in case new questions
    correctAnswers: QuestionsArr; // 1st = [] OR localStorage OR p-end add from currentSession
    incorrectAnswers: QuestionsArr; // same as above
    // p-start init, 1st = allQuestions OR localStorage
    // p-end re-calc
    questionsRemaining: QuestionsArr;
    sessionsToCompleteQuiz: number; // init: calc as config & Q # can change
    sessionsRemaining: number; // same as questionsRemaining, basis for calc
  };
  // usually updated on session start/end
  currentSession: {
    // p-start init, 1st = 1 OR localStorage
    // p-end +1
    number: number;
    sessionQuestions: QuestionsArr; // p-start init, 1st calc OR localStorage, p-end re-calc
    correctAnswers: QuestionsArr; // p-start init, [] OR localStorage, p-end add to quiz + reset
    incorrectAnswers: QuestionsArr; // same as above
    // p-start init, 1st = allQuestions OR localStorage
    // p-end re-calc
    questionsRemaining: QuestionsArr;
  };
  // usually updated on page/question change
  currentAnswer: {
    key: string | null;
    prevQuestionKey: string | null;
    nextQuestionKey: string | null;
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
