import { QuestionsDataArr, ReducerAction, ReducerState } from "./Types";
import { updateQuizInit } from "./actionUpdateQuizInit";
import { updateQuizSessionStart } from "./actionUpdateQuizSessionStart";

export const reducer = (state: ReducerState, action: ReducerAction) => {
  switch (action.type) {
    case "UPDATE_QUIZ_INIT":
      return { ...updateQuizInit(state, action.value as QuestionsDataArr) };

    case "UPDATE_QUIZ_SESSION_START":
      return { ...updateQuizSessionStart(state) };

    default:
      return { ...state };
  }
};
