type QuestionsArr = string[];

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

export type ReActionDefault = {
  type: string;
  value: string;
};
