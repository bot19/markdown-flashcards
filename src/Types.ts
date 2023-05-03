import { QuestionsDataArr } from "./state/Types";

export type AllQuestions = {
  allFile: {
    nodes: QuestionsDataArr;
    pageInfo: { totalCount: number };
  };
};

export type LocalStorageData = QuestionsDataArr;
