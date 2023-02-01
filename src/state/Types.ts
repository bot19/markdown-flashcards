type QuestionsArr = string[];
export type QuestionsDataArr = { name: string; id: string }[];

export type ReducerState = {
  general: {
    timesQuizCompleted: number; // relies on localStorage data, otherwise reset to 0
    questionsEachSession: number;
  };
  currentQuiz: {
    number: number;
    allQuestions: QuestionsArr;
    correctAnswers: QuestionsArr;
    incorrectAnswers: QuestionsArr;
    questionsRemaining: QuestionsArr;
    sessionsToCompleteQuiz: number;
    sessionsRemaining: number;
  };
  currentSession: {
    number: number;
    sessionQuestions: QuestionsArr;
    correctAnswers: QuestionsArr;
    incorrectAnswers: QuestionsArr;
    questionsRemaining: QuestionsArr;
  };
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
