import { QuestionsDataArr, ReducerState } from "./state/Types";

export type AllQuestions = {
  questionsData: {
    nodes: QuestionsDataArr;
    pageInfo: { totalCount: number };
  };
};

export type LocalStorageData = QuestionsDataArr | ReducerState;
