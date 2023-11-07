import { ReducerState } from "./state/Types";

export type LocalStorageData = RawQsData | ProcessedQsData | ReducerState;

type RawQuestionData = {
  frontmatter: {
    category: string;
    created: string;
    links: string[];
    modified: string;
    tags: string[];
    title: string;
  };
  html: string;
  id: string;
  parent: {
    name: string;
  };
};

type ProcessedQuestionData = RawQuestionData & {
  key: string;
};

export type RawQsData = RawQuestionData[];

export type ProcessedQsData = ProcessedQuestionData[];

export type AllRawQuestions = {
  questionsData: {
    nodes: RawQsData;
    pageInfo: { totalCount: number };
  };
};

export type AllQuestions = {
  questionsData: {
    nodes: ProcessedQsData;
    pageInfo: { totalCount: number };
  };
};
